import type { GitHubContributionsResponse } from "@/types/github";

type GitHubContributionGraphProps = {
  contributions: GitHubContributionsResponse;
};

const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
const legendColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

function toUtcDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

function getContributionTitle(count: number, date: string) {
  const noun = count === 1 ? "contribution" : "contributions";

  return `${count} ${noun} on ${date}`;
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
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <p>
          {contributions.totalContributions.toLocaleString("en-US")}{" "}
          contributions in the last year
        </p>
        <div className="flex items-center gap-2 text-[0.7rem]">
          <span>Less</span>
          {legendColors.map((color) => (
            <span
              key={color}
              aria-hidden="true"
              className="size-3 rounded-[2px] border border-black/5 dark:border-white/10"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div
          className="min-w-max"
          aria-label={`${contributions.totalContributions} GitHub contributions in the last year`}
        >
          <div className="ml-9 grid grid-flow-col auto-cols-[12px] gap-1.5 text-[0.68rem] text-muted-foreground">
            {contributions.weeks.map((week, weekIndex) => (
              <span
                key={`${weekIndex}-${week.contributionDays[0]?.date ?? "empty"}`}
                className="h-4 whitespace-nowrap"
              >
                {getMonthLabel(contributions, weekIndex)}
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
              {contributions.weeks.map((week, weekIndex) => (
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
                      className="size-3 rounded-[2px] border border-black/5 dark:border-white/10"
                      style={{
                        backgroundColor: day.color,
                        gridRowStart: day.weekday + 1,
                      }}
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
