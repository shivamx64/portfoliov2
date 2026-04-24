import { notFound } from "next/navigation";

import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { MdxContent } from "@/components/shared/mdx-content";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slugSegments,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog",
      pathname: "/blog",
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    pathname: post.url,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="content-width space-y-10 py-8 sm:py-10">
      <BlogPostHeader post={post} />
      <div className="max-w-3xl">
        <MdxContent source={post.content} />
      </div>
    </article>
  );
}
