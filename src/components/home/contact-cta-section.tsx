import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="content-width section-anchor border-t border-border/60 py-12 sm:py-14"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          <p className="eyebrow">Contact</p>
          <h2 className="font-heading text-3xl font-medium tracking-tighter text-foreground sm:text-[2.2rem]">
            {siteConfig.contact.title}
          </h2>
          <p className="max-w-2xl text-[0.98rem] leading-8 text-muted-foreground">
            {siteConfig.contact.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <ButtonLink href="/contact">Send Message</ButtonLink>
            <ButtonLink href="/resume" variant="ghost">
              Resume
            </ButtonLink>
          </div>
        </div>

        <div className="space-y-3 border-t border-border/60 pt-4 text-sm text-muted-foreground lg:border-t-0 lg:border-l lg:pl-6">
          <p className="eyebrow">Direct links</p>
          <a href={`mailto:${siteConfig.email}`} className="block hover:text-foreground">
            {siteConfig.email}
          </a>
          <a href="/resume" className="block hover:text-foreground">
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
