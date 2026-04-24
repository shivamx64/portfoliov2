import Image from "next/image";

import { BlogTag } from "@/components/blog/blog-tag";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

type BlogPostHeaderProps = {
  post: BlogPost;
};

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="space-y-8">
      <div className="relative aspect-[16/7] overflow-hidden border-y border-border/70 bg-muted/30">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 paper-dots">
            <div className="absolute inset-x-0 top-1/2 border-t border-border/70" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-border/70 pt-4">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {post.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {formatDate(post.date)}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-3xl space-y-5 border-t border-border/60 pt-8">
        <p className="eyebrow">{post.category}</p>
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-medium text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <BlogTag key={tag}>{tag}</BlogTag>
          ))}
        </div>
      </div>
    </header>
  );
}
