import { NextResponse } from "next/server";

import {
  getGitHubContributions,
  GitHubContributionsError,
} from "@/lib/github";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const noStoreHeaders = {
  "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
};

export async function GET() {
  try {
    const contributions = await getGitHubContributions();

    return NextResponse.json(contributions, {
      headers: noStoreHeaders,
    });
  } catch (error) {
    const status =
      error instanceof GitHubContributionsError ? error.statusCode : 500;
    const message =
      error instanceof Error
        ? error.message
        : "Unable to load GitHub contributions.";

    return NextResponse.json(
      {
        error: {
          message,
        },
      },
      {
        headers: noStoreHeaders,
        status,
      },
    );
  }
}
