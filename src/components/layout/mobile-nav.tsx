"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigationItems } from "@/config/nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

import {
  BookOpen,
  FolderGit2,
  FileText,
  Mail,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Blog: <BookOpen className="size-4" />,
  Papershelf: <FileText className="size-4" />,
  Projects: <FolderGit2 className="size-4" />,
  Contact: <Mail className="size-4" />,
};

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Trigger */}
      <button
        aria-label="Open navigation"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              absolute right-0 mt-3 w-64
              rounded-2xl border border-border/60
              bg-background/95 backdrop-blur-xl
              shadow-lg
              overflow-hidden
              z-50
            "
          >
            {/* Header */}
            <div className="border-b border-border/60 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Explore
              </p>
              <p className="text-xs text-muted-foreground">
                Projects, writing, contact
              </p>
            </div>

            {/* Nav items */}
            <div className="flex flex-col p-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  {iconMap[item.label]}
                  <div className="flex flex-col">
                    <span className="text-sm">{item.label}</span>
                    <span className="text-[11px] text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
              <div className="text-xs text-muted-foreground">
                Theme
              </div>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}