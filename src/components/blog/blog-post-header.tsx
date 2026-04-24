import { Tag } from "@/components/shared/tag";
import type { BlogFrontmatter, ContentEntry } from "@/types/content";
import { formatDate } from "@/lib/utils";

type BlogPostHeaderProps = {
  post: ContentEntry<BlogFrontmatter>;
};

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="max-w-3xl space-y-5 border-t border-border/60 pt-8">
      <p className="eyebrow">{post.category}</p>
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          {post.excerpt}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{formatDate(post.publishedAt)}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </header>
  );
}
