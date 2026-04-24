import { EmptyState } from "@/components/shared/empty-state";
import type { BlogPost } from "@/types/blog";

import { BlogListItem } from "./blog-list-item";

type BlogListProps = {
  posts: BlogPost[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function BlogList({
  posts,
  emptyTitle = "Writing space is ready",
  emptyDescription = "Add MDX files to src/content/blog to publish essays, notes, and technical articles.",
}: BlogListProps) {
  if (!posts.length) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <BlogListItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
