import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogList } from "@/components/blog/blog-list";
import { PageHeader } from "@/components/shared/page-header";
import { blogConfig } from "@/config/blog";
import { getBlogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: blogConfig.title,
  description: blogConfig.description,
  pathname: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Blog"
        title="Technical writing, close to the work"
        description={blogConfig.description}
      />
      <BlogLayout>
        <BlogList posts={posts} />
      </BlogLayout>
    </div>
  );
}
