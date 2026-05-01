import { SectionShell } from "@/components/shared/section-shell";
import { siteConfig } from "@/config/site";

export function TechStackSection() {
  return (
    <SectionShell
      title="Tech stack"
      description="Tools I use to build, ship, debug, and keep backend systems moving."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {siteConfig.skills.groups.map((group) => (
          <section key={group.label} className="border-t border-border/60 pt-5">
            <p className="eyebrow">{group.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-border/70 px-3 py-1.5 font-mono text-xs text-foreground/82"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
