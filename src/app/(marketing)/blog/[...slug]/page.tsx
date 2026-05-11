import { notFound } from "next/navigation";
import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogShare } from "@/components/blog/blog-share";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { MdxContent } from "@/components/shared/mdx-content";
import { getBlogCategoryByLabel } from "@/config/blog";
import {
  getAdjacentBlogPosts,
  getBlogPostBySlug,
  getBlogPosts,
} from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

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
      <article className="space-y-8 py-4 sm:space-y-10 sm:py-8 lg:space-y-14">
        <Link
          href="/blog"
          className="inline-flex items-center pb-1 text-xs sm:text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to writings
        </Link>

        <BlogPostHeader post={post} />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] xl:gap-16">
          <div className="min-w-0 w-full max-w-none lg:max-w-3xl">
            {/* Mobile / tablet TOC */}
            {post.headings?.length > 0 && (
              <div className="mb-8 rounded-xl border border-border/50 p-4 lg:hidden">
                <TableOfContents headings={post.headings} />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <MdxContent source={post.content} />
            </div>
          </div>

          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={post.headings} />
            </div>
          </aside>
        </div>

        <div className="max-w-3xl space-y-8">
          <BlogShare title={post.title} url={url} />

          <nav className="grid gap-6 border-y border-border/60 py-6 sm:grid-cols-2">
            {adjacentPosts.previous ? (
              <AdjacentPostLink
                label="Previous"
                href={adjacentPosts.previous.url}
              >
                {adjacentPosts.previous.title}
              </AdjacentPostLink>
            ) : (
              <div />
            )}

            {adjacentPosts.next ? (
              <AdjacentPostLink
                label="Next"
                href={adjacentPosts.next.url}
                align="right"
              >
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
      className={`block rounded-lg p-3 transition-colors hover:bg-muted/40 ${
        align === "right"
          ? "space-y-2 text-left sm:text-right"
          : "space-y-2"
      }`}
    >
      <span className="eyebrow">{label}</span>
      <span className="block text-sm sm:text-base leading-6 text-muted-foreground hover:text-foreground">
        {children}
      </span>
    </Link>
  );
}