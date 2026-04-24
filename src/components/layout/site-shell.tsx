import type { PropsWithChildren } from "react";

import { FloatingNavbar } from "@/components/layout/floating-navbar";
import { Footer } from "@/components/layout/footer";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-1/2 z-0 hidden w-[min(calc(100vw-2.5rem),64rem)] -translate-x-1/2 border-x border-border/45 md:block"
      />
      <FloatingNavbar />
      <main className="relative z-10 flex-1 pt-20 sm:pt-24">{children}</main>
      <Footer />
    </div>
  );
}
