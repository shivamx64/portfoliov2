"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type VisitorCounterProps = {
  className?: string;
};

const numberFormatter = new Intl.NumberFormat("en-US");

export function VisitorCounter({ className }: VisitorCounterProps) {
  const pathname = usePathname();
  const [count, setCount] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function recordVisit() {
      setHasError(false);

      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pagePath: pathname }),
        });

        if (!response.ok) {
          throw new Error("Visitor count request failed.");
        }

        const payload = (await response.json()) as { count?: unknown };

        if (isActive && typeof payload.count === "number") {
          setCount(payload.count);
        }
      } catch {
        if (isActive) {
          setHasError(true);
        }
      }
    }

    recordVisit();

    return () => {
      isActive = false;
    };
  }, [pathname]);

  if (hasError) {
    return null;
  }

  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-2 border border-border/70 bg-background/35 px-3 font-mono text-xs text-muted-foreground",
        className,
      )}
      aria-live="polite"
    >
      <Eye aria-hidden="true" className="size-3.5" />
      {count === null ? (
        <span className="text-muted-foreground/70">visitors</span>
      ) : (
        <span>{numberFormatter.format(count)} visitors</span>
      )}
    </span>
  );
}

