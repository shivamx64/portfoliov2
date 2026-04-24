import Link from "next/link";

import { blogConfig } from "@/config/blog";
import { cn } from "@/lib/utils";

type BlogSidebarProps = {
  activeCategory?: string;
};

export function BlogSidebar({ activeCategory }: BlogSidebarProps) {
  return (
    <aside className="border-b border-border/60 pb-4 lg:sticky lg:top-24 lg:self-start lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">Topics</p>
          <p className="hidden max-w-[15rem] text-xs leading-6 text-muted-foreground lg:block">
            Notes grouped by the systems work they sit closest to.
          </p>
        </div>
        <nav
          aria-label="Blog topics"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0"
        >
          <Link
            href="/blog"
            className={cn(
              "whitespace-nowrap border border-border/60 px-3 py-2 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground lg:block lg:border-0 lg:border-t lg:px-0",
              !activeCategory && "border-foreground/30 text-foreground lg:border-border/60",
            )}
          >
            Recent writings
          </Link>
          {blogConfig.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className={cn(
                "whitespace-nowrap border border-border/60 px-3 py-2 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground lg:block lg:border-0 lg:border-t lg:px-0",
                activeCategory === category.slug &&
                  "border-foreground/30 text-foreground lg:border-border/60",
              )}
              aria-current={activeCategory === category.slug ? "page" : undefined}
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
