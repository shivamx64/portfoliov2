"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, FolderGit2, FileText, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigationItems } from "@/config/nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

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

      {/* Overlay (prevents interaction + gives focus) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="
                fixed top-20 left-1/2 -translate-x-1/2
                w-[min(92vw,420px)]
                rounded-2xl border border-border/60
                bg-background/95 backdrop-blur-xl
                shadow-xl
                z-50
                overflow-hidden
              "
            >
              {/* Nav items */}
              <div className="flex flex-col p-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {iconMap[item.label]}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
                <span className="text-xs text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}