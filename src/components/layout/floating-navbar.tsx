"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const pathname = usePathname();
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <div className="content-width">
        <div className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-border/70 bg-background/80 px-2.5 py-1.5 backdrop-blur-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs text-foreground"
          >
            <span className="font-heading text-[0.82rem] uppercase tracking-[0.16em]">
              {initials}
            </span>
            <span className="hidden text-[0.78rem] text-muted-foreground sm:block">
              {siteConfig.firstName}
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 md:flex">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 font-heading text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition hover:text-foreground",
                    isActive && "bg-muted/55 text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
