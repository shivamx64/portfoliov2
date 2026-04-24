import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/site";
import { experienceEntries } from "@/content/experience/experience";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: "Background, principles, and engineering focus areas.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-12">
      <PageHeader
        eyebrow="About"
        title="A backend and cloud engineer who likes systems that stay understandable."
        description={siteConfig.about.summary}
      />

      <section className="content-width grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6 border-t border-border/60 pt-6">
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <div className="space-y-4 border-t border-border/60 pt-6">
            <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
              Working principles
            </h2>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              {siteConfig.about.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6 border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:pl-6">
          <div className="space-y-3">
            <p className="eyebrow">Current themes</p>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              {siteConfig.currentFocus.map((item) => (
                <li key={item.title}>
                  <span className="font-heading text-[0.95rem] font-medium text-foreground">
                    {item.title}
                  </span>
                  <br />
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="content-width border-t border-border/60 pt-8">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Experience snapshot</p>
          <h2 className="font-heading text-3xl font-medium tracking-[-0.05em] text-foreground">
            Roles that shaped how I build
          </h2>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="border-t border-border/60 pt-4"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-medium tracking-[-0.04em] text-foreground">
                  {entry.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {entry.company} · {entry.period}
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  {entry.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
