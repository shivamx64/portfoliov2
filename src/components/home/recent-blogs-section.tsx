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
      description="Notes, essays, and implementation writeups that sit close to the engineering work itself."
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
