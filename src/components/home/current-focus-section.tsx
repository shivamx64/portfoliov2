import { siteConfig } from "@/config/site";

import { SectionShell } from "@/components/shared/section-shell";

export function CurrentFocusSection() {
  return (
    <SectionShell
      title="About"
      description="A short introduction to how I like to work, what I care about, and the areas I keep returning to."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <div className="space-y-5 text-[1rem] leading-8 text-foreground/84">
          <div className="inline-flex items-center gap-2 border border-emerald-500/35 bg-emerald-500/8 px-3 py-1.5 font-mono text-xs text-emerald-700 dark:text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-500" />
            {siteConfig.availability}
          </div>

          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="space-y-4 border-t border-border/60 pt-6">
            <p className="eyebrow">Working principles</p>
            <ul className="space-y-3 text-muted-foreground">
              {siteConfig.about.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
          <p className="eyebrow">Current focus</p>
          {siteConfig.currentFocus.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "space-y-2" : "space-y-2 border-t border-border/60 pt-4"}
            >
              <h3 className="font-heading text-lg font-medium tracking-[-0.04em] text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
              <p className="text-sm leading-7 text-foreground/78">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
