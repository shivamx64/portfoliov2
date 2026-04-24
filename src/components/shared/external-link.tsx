import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn, isExternalHref } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({
  href,
  children,
  className,
}: ExternalLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="size-4" />
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60",
          className,
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60",
        className,
      )}
    >
      {content}
    </Link>
  );
}
