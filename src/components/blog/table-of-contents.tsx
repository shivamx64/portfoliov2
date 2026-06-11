import type { ContentHeading } from "@/types/content";
import { cn } from "@/lib/utils";

type TableOfContentsProps = {
  headings: ContentHeading[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length < 2) {
    return null;
  }

  return (
    <nav className="border-y border-border/60 py-4" aria-label="Article sections">
      <p className="eyebrow mb-3">Table of Contents</p>
      <ol className="space-y-2 text-sm text-muted-foreground">
        {headings.map((heading) => (
          <li key={heading.id} className={cn(heading.level === 3 && "pl-4")}>
            <a href={`#${heading.id}`} className="hover:text-foreground">
              {heading.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
