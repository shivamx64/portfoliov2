import { SectionShell } from "@/components/shared/section-shell";
import { ExternalLink } from "@/components/shared/external-link";
import type { ExperienceEntry } from "@/types/content";

type ExperienceSectionProps = {
  experience: ExperienceEntry[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <SectionShell
      title="Work experience"
      description="A concise view of the kinds of backend, platform, and infrastructure work I’ve been responsible for."
    >
      <div className="space-y-8">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="grid gap-4 border-t border-border/60 pt-6 md:grid-cols-[150px_minmax(0,1fr)]"
          >
            <div className="space-y-2 md:pt-1">
              <p className="eyebrow">{entry.period}</p>
              <p className="text-sm text-muted-foreground">{entry.location}</p>
            </div>

            <div className="space-y-4 border-l border-border/50 pl-5">
              <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px]">
                <div className="space-y-2">
                  <h3 className="font-heading text-[1.45rem] font-medium tracking-[-0.04em] text-foreground">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{entry.company}</p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {entry.url ? <ExternalLink href={entry.url}>Company site</ExternalLink> : null}
                </div>
              </div>

              <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
