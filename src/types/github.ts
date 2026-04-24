export type GitHubContributionDay = {
  date: string;
  weekday: number;
  contributionCount: number;
  color: string;
};

export type GitHubContributionWeek = {
  contributionDays: GitHubContributionDay[];
};

export type GitHubContributionsResponse = {
  totalContributions: number;
  weeks: GitHubContributionWeek[];
};
