import { NextResponse } from "next/server";

import {
  getGitHubContributions,
  GitHubContributionsError,
} from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const contributions = await getGitHubContributions();

    return NextResponse.json(contributions, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
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
      { status },
    );
  }
}
