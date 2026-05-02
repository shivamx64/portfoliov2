"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigationItems } from "@/config/nav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation"
            className="md:hidden"
          />
        }
      >
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent side="right" className="md:hidden">
        <SheetHeader>
          <SheetTitle>Explore</SheetTitle>
          <SheetDescription>
            Projects, notes, writing, and ways to get in touch.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "justify-start",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
          <div>
            <p className="font-heading text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
              Theme
            </p>
            <p className="text-sm text-muted-foreground">Switch appearance</p>
          </div>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
