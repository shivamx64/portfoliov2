import Image from "next/image";
import { FileText, Mail, MapPin, NotebookText, ServerCog } from "lucide-react";

import { VisitorCounter } from "@/components/shared/visitor-counter";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { heroSocialLinks } from "@/config/social";
import type { SocialLink } from "@/types/nav";

export function HeroSection() {
  return (
    <section id="about" className="content-width section-anchor py-6 sm:py-8">
      <div className="border-y border-border/60">
        <div className="paper-dots h-24 border-b border-border/60 sm:h-28" />
        <div className="grid gap-8 py-8 md:grid-cols-[124px_minmax(0,1fr)] md:items-start">
          <div className="space-y-3">
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
            <div className="hidden h-px w-28 bg-border/60 sm:block sm:w-32" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
                <h1 className="font-heading text-4xl font-medium tracking-[-0.06em] text-foreground sm:text-5xl">
                  {siteConfig.name}
                </h1>
                <p className="text-lg leading-8 text-foreground/88 sm:text-xl">
                  {siteConfig.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <HeroBadge>
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {siteConfig.location}
                </HeroBadge>
                <HeroBadge>
                  <span className="size-2 rounded-full bg-emerald-500" />
                  {siteConfig.availability}
                </HeroBadge>
                <HeroBadge>
                  <ServerCog aria-hidden="true" className="size-3.5" />
                  Backend + cloud
                </HeroBadge>
                <HeroBadge>
                  <NotebookText aria-hidden="true" className="size-3.5" />
                  CNCF OSS
                </HeroBadge>
                <VisitorCounter />
              </div>

              <div className="max-w-2xl space-y-4 text-[1.02rem] leading-8 text-foreground/82">
                <p>{siteConfig.hero.intro}</p>
                <p className="text-muted-foreground">{siteConfig.hero.subcopy}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2" aria-label="Social links">
                {heroSocialLinks.map((link) => (
                  <HeroSocialLink key={link.href} link={link} />
                ))}
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
              <p className="eyebrow">Current lane</p>
              <p>Building backend services, delivery pipelines, and cloud-native infrastructure with Kubernetes in the loop.</p>
              <p>Current loop: design, ship, observe, tighten the weak points, and document the operational lesson.</p>
              <div className="space-y-2 border-t border-border/60 pt-4">
                {siteConfig.heroBadges.slice(1).map((badge) => (
                  <p key={badge} className="font-mono text-xs text-foreground/72">
                    {badge}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSocialLink({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      aria-label={link.label}
      title={link.label}
      className="inline-flex size-9 items-center justify-center border border-border/70 bg-background/35 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      <SocialIcon icon={link.icon} />
    </a>
  );
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.49-1.1-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.8c0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.5H3V9.75Zm6.25 0h3.83v1.43h.06c.53-.96 1.84-1.76 3.55-1.76 3.8 0 4.31 2.49 4.31 5.73v5.1h-4v-4.62c0-1.1-.02-2.52-1.62-2.52-1.63 0-1.88 1.2-1.88 2.44v4.7h-4V9.75Z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M14.16 10.16 22.1 1h-1.88l-6.9 7.95L7.82 1H1.47l8.33 12.03L1.47 22.6h1.88l7.29-8.4 5.82 8.4h6.35l-8.65-12.44Zm-2.58 2.97-.85-1.2L4.03 2.4h2.89l5.42 7.7.84 1.2 7.04 10.02h-2.89l-5.75-8.18Z" />
      </svg>
    );
  }

  if (icon === "leetcode") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M13.9 3.15a1.25 1.25 0 0 1 1.77 0l.18.18a1.25 1.25 0 0 1 0 1.77L8.5 12.45l7.35 7.35a1.25 1.25 0 0 1 0 1.77l-.18.18a1.25 1.25 0 0 1-1.77 0l-8.41-8.42a1.25 1.25 0 0 1 0-1.77L13.9 3.15Z" />
        <path d="M9.5 12.9h8.25a1.15 1.15 0 0 0 0-2.3H9.5a1.15 1.15 0 0 0 0 2.3Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return <Mail aria-hidden="true" className="size-4" />;
  }

  return <FileText aria-hidden="true" className="size-4" />;
}

function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-border/70 bg-background/35 px-3 py-1.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
