import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="about" className="content-width section-anchor py-6 sm:py-8">
      <div className="border-y border-border/60">
        <div className="paper-dots h-24 border-b border-border/60 sm:h-28" />
        <div className="grid gap-8 py-8 md:grid-cols-[124px_minmax(0,1fr)] md:items-start">
          <div className="relative aspect-square w-28 overflow-hidden rounded-2xl border border-border/70 bg-muted sm:w-32">
            <Image
              src="/images/profile/avatar.jpg"
              alt={`${siteConfig.name} profile`}
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
                <h1 className="font-heading text-4xl font-medium tracking-[-0.06em] text-foreground sm:text-5xl">
                  {siteConfig.name}
                </h1>
                <p className="text-lg leading-8 text-foreground/88 sm:text-xl">
                  {siteConfig.role}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span>{siteConfig.location}</span>
                <span aria-hidden="true">•</span>
                <span>{siteConfig.status}</span>
              </div>

              <div className="max-w-2xl space-y-4 text-[1.02rem] leading-8 text-foreground/82">
                <p>{siteConfig.hero.intro}</p>
                <p className="text-muted-foreground">{siteConfig.hero.subcopy}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ButtonLink href="/projects">View projects</ButtonLink>
                <ButtonLink href="/resume" variant="outline">
                  Resume
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <div className="space-y-3 border-t border-border/60 pt-4 text-sm text-muted-foreground lg:border-t-0 lg:border-l lg:pl-6">
              <p className="eyebrow">Notebook status</p>
              <p>Exploring distributed systems, platform tooling, and paper implementations.</p>
              <p>Writing from the perspective of someone who likes systems that stay legible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
