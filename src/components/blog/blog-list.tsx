import { EmptyState } from "@/components/shared/empty-state";
import type { BlogFrontmatter, ContentEntry } from "@/types/content";

import { BlogCard } from "./blog-card";

type BlogListProps = {
  posts: Array<ContentEntry<BlogFrontmatter>>;
};

export function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return (
      <EmptyState
        title="Writing space is ready"
        description="Add MDX files to src/content/blog to publish essays, notes, and technical articles."
      />
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
