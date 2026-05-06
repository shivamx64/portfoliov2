"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { GitHubContributionsResponse } from "@/types/github";

type GitHubContributionGraphProps = {
  contributions: GitHubContributionsResponse;
};

const CONTRIBUTIONS_REFRESH_INTERVAL = 1000 * 60 * 5;
const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
const darkContributionColors = {
  empty: "#161b22",
  level1: "#0e4429",
  level2: "#006d32",
  level3: "#26a641",
  level4: "#39d353",
} as const;
const darkContributionColorByLightColor = new Map([
  ["#ebedf0", darkContributionColors.empty],
  ["#9be9a8", darkContributionColors.level1],
  ["#40c463", darkContributionColors.level2],
  ["#30a14e", darkContributionColors.level3],
  ["#216e39", darkContributionColors.level4],
]);
const legendColors = [
  { light: "#ebedf0", dark: darkContributionColors.empty },
  { light: "#9be9a8", dark: darkContributionColors.level1 },
  { light: "#40c463", dark: darkContributionColors.level2 },
  { light: "#30a14e", dark: darkContributionColors.level3 },
  { light: "#216e39", dark: darkContributionColors.level4 },
];
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

type ContributionCellStyle = CSSProperties & {
  "--contribution-color": string;
  "--contribution-dark-color": string;
};

function toUtcDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

function getContributionTitle(count: number, date: string) {
  const noun = count === 1 ? "contribution" : "contributions";

  return `${count} ${noun} on ${date}`;
}

function getContributionDarkColor(count: number, color: string) {
  if (count === 0) {
    return darkContributionColors.empty;
  }

  return (
    darkContributionColorByLightColor.get(color.toLowerCase()) ??
    darkContributionColors.level1
  );
}

function formatUpdatedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getMonthLabel(
  contributions: GitHubContributionsResponse,
  weekIndex: number,
) {
  const firstDay = contributions.weeks[weekIndex]?.contributionDays[0];
  const previousFirstDay =
    contributions.weeks[weekIndex - 1]?.contributionDays[0];

  if (!firstDay) {
    return "";
  }

  const firstDate = toUtcDate(firstDay.date);
  const previousDate = previousFirstDay
    ? toUtcDate(previousFirstDay.date)
    : null;

  if (!previousDate || firstDate.getUTCMonth() !== previousDate.getUTCMonth()) {
    return monthFormatter.format(firstDate);
  }

  return "";
}

export function GitHubContributionGraph({
  contributions,
}: GitHubContributionGraphProps) {
  const [currentContributions, setCurrentContributions] = useState(contributions);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const refreshContributions = useCallback(async () => {
    try {
      const response = await fetch("/api/github/contributions", {
        cache: "no-store",
      });

      if (!response.ok) {
        return;
      }

      const nextContributions =
        (await response.json()) as GitHubContributionsResponse;

      setCurrentContributions(nextContributions);
      setUpdatedAt(new Date());
    } catch {
      // Keep the last successful graph visible if GitHub is temporarily slow.
    }
  }, []);

  useEffect(() => {
    const initialRefresh = window.setTimeout(refreshContributions, 0);

    const interval = window.setInterval(
      refreshContributions,
      CONTRIBUTIONS_REFRESH_INTERVAL,
    );

    return () => {
      window.clearTimeout(initialRefresh);
      window.clearInterval(interval);
    };
  }, [refreshContributions]);

  useEffect(() => {
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        void refreshContributions();
      }
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("focus", refreshWhenVisible);

    return () => {
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("focus", refreshWhenVisible);
    };
  }, [refreshContributions]);

  const updatedLabel = useMemo(() => {
    return updatedAt ? `Updated ${formatUpdatedAt(updatedAt)}` : null;
  }, [updatedAt]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <p>
          {currentContributions.totalContributions.toLocaleString("en-US")}{" "}
          contributions in the last year
          {updatedLabel ? (
            <span className="ml-2 text-xs text-muted-foreground/75">
              {updatedLabel}
            </span>
          ) : null}
        </p>
        <div className="flex items-center gap-2 text-[0.7rem]">
          <span>Less</span>
          {legendColors.map((color) => (
            <span
              key={color.light}
              aria-hidden="true"
              className="size-3 rounded-[2px] border border-black/5 bg-[var(--contribution-color)] dark:border-[#30363d] dark:bg-[var(--contribution-dark-color)]"
              style={
                {
                  "--contribution-color": color.light,
                  "--contribution-dark-color": color.dark,
                } as ContributionCellStyle
              }
            />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div
          className="min-w-max"
          aria-label={`${currentContributions.totalContributions} GitHub contributions in the last year`}
        >
          <div className="ml-9 grid grid-flow-col auto-cols-[12px] gap-1.5 text-[0.68rem] text-muted-foreground">
            {currentContributions.weeks.map((week, weekIndex) => (
              <span
                key={`${weekIndex}-${week.contributionDays[0]?.date ?? "empty"}`}
                className="h-4 whitespace-nowrap"
              >
                {getMonthLabel(currentContributions, weekIndex)}
              </span>
            ))}
          </div>

          <div className="mt-2 flex gap-3">
            <div className="grid grid-rows-7 gap-1.5 pt-[1px] text-[0.68rem] text-muted-foreground">
              {weekdayLabels.map((label, index) => (
                <span key={`${label}-${index}`} className="h-3 leading-3">
                  {label}
                </span>
              ))}
            </div>

            <div className="grid grid-flow-col auto-cols-[12px] gap-1.5">
              {currentContributions.weeks.map((week, weekIndex) => (
                <div
                  key={`${weekIndex}-${week.contributionDays[0]?.date ?? "week"}`}
                  className="grid grid-rows-7 gap-1.5"
                >
                  {week.contributionDays.map((day) => (
                    <span
                      key={day.date}
                      title={getContributionTitle(
                        day.contributionCount,
                        day.date,
                      )}
                      aria-label={getContributionTitle(
                        day.contributionCount,
                        day.date,
                      )}
                      className="size-3 rounded-[2px] border border-black/5 bg-[var(--contribution-color)] dark:border-[#30363d] dark:bg-[var(--contribution-dark-color)]"
                      style={{
                        "--contribution-color": day.color,
                        "--contribution-dark-color": getContributionDarkColor(
                          day.contributionCount,
                          day.color,
                        ),
                        gridRowStart: day.weekday + 1,
                      } as ContributionCellStyle}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
