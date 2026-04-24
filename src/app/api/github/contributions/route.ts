import { NextResponse } from "next/server";

import { GITHUB_REVALIDATE_SECONDS } from "@/lib/constants";
import {
  getGitHubContributions,
  GitHubContributionsError,
} from "@/lib/github";

export const revalidate = 21600;

export async function GET() {
  try {
    const contributions = await getGitHubContributions();

    return NextResponse.json(contributions, {
      headers: {
        "Cache-Control": `s-maxage=${GITHUB_REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
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
