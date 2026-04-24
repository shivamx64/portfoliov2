"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

type BlogShareProps = {
  title: string;
  url: string;
};

export function BlogShare({ title, url }: BlogShareProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const xUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="border-t border-border/60 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow">Share</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Send this note to someone thinking about the same problem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ShareLink href={xUrl} label="Share on X">
            X
          </ShareLink>
          <ShareLink href={linkedInUrl} label="Share on LinkedIn">
            in
          </ShareLink>
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex h-9 items-center gap-2 border border-border/70 px-3 text-sm text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          >
            {copied ? (
              <Check aria-hidden="true" className="size-4" />
            ) : (
              <Copy aria-hidden="true" className="size-4" />
            )}
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ShareLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center border border-border/70 px-3 text-sm text-muted-foreground hover:border-foreground/30 hover:text-foreground",
      )}
    >
      {children}
    </a>
  );
}
