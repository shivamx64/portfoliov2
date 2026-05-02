import Link from "next/link";

import { navigationItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="content-width flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-muted-foreground">
          <span className="font-heading text-[0.72rem] uppercase tracking-[0.18em] text-foreground">
            {siteConfig.name}
          </span>{" "}
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
