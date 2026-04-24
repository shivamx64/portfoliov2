import { ButtonLink } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/site";
import { experienceEntries } from "@/content/experience/experience";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Resume",
  description: "Resume, experience highlights, and downloadable PDF.",
  pathname: "/resume",
});

export default function ResumePage() {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Resume"
        title="A concise view of recent backend and platform work"
        description="Experience highlights, current focus areas, and a downloadable PDF resume."
        actions={
          <ButtonLink href={siteConfig.resumePath} variant="outline">
            Download resume
          </ButtonLink>
        }
      />

      <section className="content-width">
        {experienceEntries.map((entry, index) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className={index === 0 ? "space-y-4 border-t border-border/60 pt-6" : "mt-8 space-y-4 border-t border-border/60 pt-8"}
          >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
                  {entry.role}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {entry.company} · {entry.location}
                </p>
              </div>
              <p className="eyebrow">{entry.period}</p>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              {entry.summary}
            </p>
            <ul className="grid gap-3 text-sm leading-7 text-muted-foreground lg:grid-cols-3">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
