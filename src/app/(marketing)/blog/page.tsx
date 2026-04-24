import { BlogList } from "@/components/blog/blog-list";
import { PageHeader } from "@/components/shared/page-header";
import { getBlogPosts } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog",
  description: "Technical writing on backend systems, distributed systems, databases, and Kubernetes.",
  pathname: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Blog"
        title="Writing that stays close to the engineering work"
        description="Notes and long-form posts on backend systems, platform engineering, distributed systems, databases, and Kubernetes."
      />
      <div className="content-width">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
