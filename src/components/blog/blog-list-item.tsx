import Link from "next/link";

import { BlogTag } from "@/components/blog/blog-tag";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

type BlogListItemProps = {
  post: BlogPost;
};

export function BlogListItem({ post }: BlogListItemProps) {
  return (
    <article className="grid gap-5 border-t border-border/60 py-7 first:border-t-0 md:grid-cols-[minmax(0,1fr)_180px] md:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">{post.category}</p>
          <h2 className="font-heading text-2xl font-medium text-foreground sm:text-[1.7rem]">
            <Link href={post.url} className="hover:text-primary">
              {post.title}
            </Link>
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <BlogTag key={tag}>{tag}</BlogTag>
          ))}
        </div>
      </div>
      <div className="flex gap-3 text-sm text-muted-foreground md:block md:space-y-1">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true" className="md:hidden">
          /
        </span>
        <p>{post.readingTime}</p>
      </div>
    </article>
  );
}
