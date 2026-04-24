import { notFound } from "next/navigation";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogShare } from "@/components/blog/blog-share";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { MdxContent } from "@/components/shared/mdx-content";
import { getBlogCategoryByLabel } from "@/config/blog";
import { getAdjacentBlogPosts, getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import Link from "next/link";

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
    description: post.description,
    pathname: post.url,
    image: post.coverImage,
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

  const category = getBlogCategoryByLabel(post.category);
  const adjacentPosts = await getAdjacentBlogPosts(post);
  const url = absoluteUrl(post.url);

  return (
    <BlogLayout activeCategory={category?.slug}>
      <article className="space-y-10 py-2 sm:py-4">
        <Link
          href="/blog"
          className="inline-flex items-center border-b border-border/70 pb-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:border-foreground/40 hover:text-foreground"
        >
          ← Back to writings
        </Link>
        <BlogPostHeader post={post} />
        <div className="grid gap-10 xl:grid-cols-[minmax(0,3fr)_220px]">
          <div className="min-w-0 max-w-3xl">
            <MdxContent source={post.content} />
          </div>
          <div className="hidden xl:block">
            <div className="sticky top-24">
              <TableOfContents headings={post.headings} />
            </div>
          </div>
        </div>
        <div className="max-w-3xl space-y-8">
          <BlogShare title={post.title} url={url} />
          <nav className="grid gap-4 border-y border-border/60 py-5 sm:grid-cols-2">
            {adjacentPosts.previous ? (
              <AdjacentPostLink label="Previous" href={adjacentPosts.previous.url}>
                {adjacentPosts.previous.title}
              </AdjacentPostLink>
            ) : (
              <div />
            )}
            {adjacentPosts.next ? (
              <AdjacentPostLink label="Next" href={adjacentPosts.next.url} align="right">
                {adjacentPosts.next.title}
              </AdjacentPostLink>
            ) : null}
          </nav>
        </div>
      </article>
    </BlogLayout>
  );
}

function AdjacentPostLink({
  href,
  label,
  align = "left",
  children,
}: {
  href: string;
  label: string;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={align === "right" ? "space-y-1 text-left sm:text-right" : "space-y-1"}
    >
      <span className="eyebrow">{label}</span>
      <span className="block text-sm leading-6 text-muted-foreground hover:text-foreground">
        {children}
      </span>
    </Link>
  );
}
