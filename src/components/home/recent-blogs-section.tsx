import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import type { BlogPost } from "@/types/blog";

import { BlogList } from "@/components/blog/blog-list";

type RecentBlogsSectionProps = {
  posts: BlogPost[];
};

export function RecentBlogsSection({ posts }: RecentBlogsSectionProps) {
  return (
    <SectionShell
      id="blog"
      title="Recent writing"
      description="Short notes from backend work, DevOps, cloud setup, Kubernetes, and OSS contribution work."
    >
      <BlogList posts={posts} />
      <div className="mt-6">
        <ButtonLink href="/blog" variant="outline">
          Read the blog
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
