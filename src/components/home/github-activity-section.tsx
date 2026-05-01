import { connection } from "next/server";

import { GitHubContributionGraph } from "@/components/github/github-contribution-graph";
import { SectionShell } from "@/components/shared/section-shell";
import {
  getGitHubContributions,
  GitHubContributionsError,
} from "@/lib/github";
import type { GitHubContributionsResponse } from "@/types/github";

async function loadContributions(): Promise<{
  contributions: GitHubContributionsResponse | null;
  errorMessage: string | null;
}> {
  try {
    return {
      contributions: await getGitHubContributions(),
      errorMessage: null,
    };
  } catch (error) {
    return {
      contributions: null,
      errorMessage:
        error instanceof GitHubContributionsError
          ? error.message
          : "Unable to load GitHub contributions right now.",
    };
  }
}

export async function GithubActivitySection() {
  await connection();

  const { contributions, errorMessage } = await loadContributions();

  return (
    <SectionShell
      title="GitHub contributions"
      description="Commits, experiments, fixes, and the small reps behind the bigger work."
    >
      {contributions ? (
        <GitHubContributionGraph contributions={contributions} />
      ) : (
        <p className="max-w-2xl border-l border-border/70 pl-4 text-sm leading-6 text-muted-foreground">
          {errorMessage}
        </p>
      )}
    </SectionShell>
  );
}
