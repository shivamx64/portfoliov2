import "server-only";

import { cache } from "react";

import { siteConfig } from "@/config/site";
import type { GithubActivity } from "@/types/content";

const fallbackActivity: GithubActivity = {
  profile: {
    username: siteConfig.githubUsername,
    followers: 182,
    publicRepos: 37,
  },
  highlights: [
    { label: "Focus", value: "Frontend systems" },
    { label: "Current streak", value: "5 shipped experiments" },
    { label: "Writing cadence", value: "2 notes / month" },
  ],
  recentEvents: [
    {
      id: "1",
      type: "Pushed commits",
      repo: "portfolio-lab/app-shell",
      createdAt: "2026-04-20T09:30:00.000Z",
      url: "https://github.com/sagethefox/portfolio-lab",
    },
    {
      id: "2",
      type: "Opened a PR",
      repo: "systems-notes/mdx-content",
      createdAt: "2026-04-18T12:10:00.000Z",
      url: "https://github.com/sagethefox/systems-notes",
    },
    {
      id: "3",
      type: "Published release",
      repo: "design-engineering/ui-foundations",
      createdAt: "2026-04-14T05:15:00.000Z",
      url: "https://github.com/sagethefox/design-engineering",
    },
  ],
};

function mapEventType(type: string) {
  const labels: Record<string, string> = {
    PushEvent: "Pushed commits",
    PullRequestEvent: "Opened a PR",
    CreateEvent: "Created a branch or repo",
    ReleaseEvent: "Published release",
  };

  return labels[type] ?? "Activity";
}

export const getGithubActivity = cache(async (): Promise<GithubActivity> => {
  const username = siteConfig.githubUsername;

  try {
    const [profileResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${siteConfig.name}-portfolio`,
        },
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/events/public?per_page=5`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${siteConfig.name}-portfolio`,
        },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!profileResponse.ok || !eventsResponse.ok) {
      return fallbackActivity;
    }

    const profile = (await profileResponse.json()) as {
      followers: number;
      public_repos: number;
      login: string;
    };
    const events = (await eventsResponse.json()) as Array<{
      id: string;
      type: string;
      repo: { name: string };
      created_at: string;
    }>;

    return {
      profile: {
        username: profile.login,
        followers: profile.followers,
        publicRepos: profile.public_repos,
      },
      highlights: fallbackActivity.highlights,
      recentEvents: events.slice(0, 3).map((event) => ({
        id: event.id,
        type: mapEventType(event.type),
        repo: event.repo.name,
        createdAt: event.created_at,
      })),
    };
  } catch {
    return fallbackActivity;
  }
});
