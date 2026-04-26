import "server-only";

import type {
  GitHubContributionDay,
  GitHubContributionsResponse,
} from "@/types/github";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_CONTRIBUTIONS_QUERY = /* GraphQL */ `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

type GitHubGraphQLError = {
  message: string;
};

type GitHubGraphQLContributionsPayload = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: GitHubContributionsResponse;
      };
    } | null;
  };
  errors?: GitHubGraphQLError[];
};

type GitHubConfig = {
  username: string;
  token: string;
};

export class GitHubContributionsError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.name = "GitHubContributionsError";
    this.statusCode = statusCode;
  }
}

function getGitHubConfig(): GitHubConfig {
  const username = process.env.GITHUB_USERNAME?.trim();
  const token = process.env.GITHUB_TOKEN?.trim();

  if (!username) {
    throw new GitHubContributionsError(
      "Missing GITHUB_USERNAME. Add it to your environment to load GitHub contributions.",
    );
  }

  if (!token) {
    throw new GitHubContributionsError(
      "Missing GITHUB_TOKEN. Add a server-side GitHub token to load contributions.",
    );
  }

  return { username, token };
}

async function readGitHubError(response: Response) {
  const body = await response.text();

  if (!body) {
    return "";
  }

  try {
    const parsed = JSON.parse(body) as { message?: string };

    return parsed.message ? `: ${parsed.message}` : "";
  } catch {
    return `: ${body.slice(0, 200)}`;
  }
}

function normalizeContributionDay(
  day: GitHubContributionDay,
): GitHubContributionDay {
  return {
    date: day.date,
    weekday: day.weekday,
    contributionCount: day.contributionCount,
    color: day.color,
  };
}

function normalizeContributions(
  calendar: GitHubContributionsResponse,
): GitHubContributionsResponse {
  return {
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks.map((week) => ({
      contributionDays: week.contributionDays.map(normalizeContributionDay),
    })),
  };
}

export async function getGitHubContributions(): Promise<GitHubContributionsResponse> {
  const { username, token } = getGitHubConfig();

  let response: Response;

  try {
    response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "shivam-jha-portfolio",
      },
      body: JSON.stringify({
        query: GITHUB_CONTRIBUTIONS_QUERY,
        variables: { username },
      }),
    });
  } catch {
    throw new GitHubContributionsError(
      "Unable to reach the GitHub GraphQL API.",
      502,
    );
  }

  if (!response.ok) {
    const errorDetails = await readGitHubError(response);

    throw new GitHubContributionsError(
      `GitHub GraphQL API request failed with status ${response.status}${errorDetails}`,
      502,
    );
  }

  let payload: GitHubGraphQLContributionsPayload;

  try {
    payload = (await response.json()) as GitHubGraphQLContributionsPayload;
  } catch {
    throw new GitHubContributionsError(
      "GitHub returned an invalid JSON response.",
      502,
    );
  }

  if (payload.errors?.length) {
    const messages = payload.errors.map((error) => error.message).join("; ");

    throw new GitHubContributionsError(
      `GitHub GraphQL error: ${messages}`,
      502,
    );
  }

  if (!payload.data?.user) {
    throw new GitHubContributionsError(
      `GitHub user "${username}" was not found.`,
      404,
    );
  }

  const calendar =
    payload.data.user.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    throw new GitHubContributionsError(
      "GitHub did not return contribution calendar data.",
      502,
    );
  }

  return normalizeContributions(calendar);
}
