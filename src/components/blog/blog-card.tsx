import Link from "next/link";

import { Tag } from "@/components/shared/tag";
import type { BlogFrontmatter, ContentEntry } from "@/types/content";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: ContentEntry<BlogFrontmatter>;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="grid gap-5 border-t border-border/60 py-6 first:border-t-0 lg:grid-cols-[minmax(0,1fr)_180px] lg:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">{post.category}</p>
          <h3 className="font-heading text-[1.35rem] font-medium tracking-[-0.04em] text-foreground">
            <Link href={post.url} className="hover:text-primary">
              {post.title}
            </Link>
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>{formatDate(post.publishedAt)}</p>
        <p>{post.readingTime}</p>
      </div>
    </article>
  );
}
