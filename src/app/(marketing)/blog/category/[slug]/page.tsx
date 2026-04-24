import { notFound } from "next/navigation";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogList } from "@/components/blog/blog-list";
import { PageHeader } from "@/components/shared/page-header";
import { blogConfig, getBlogCategoryBySlug } from "@/config/blog";
import { getBlogPostsByCategory } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogConfig.categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    return buildPageMetadata({
      title: "Blog",
      pathname: "/blog",
    });
  }

  return buildPageMetadata({
    title: `${category.label} Writing`,
    description: category.description,
    pathname: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getBlogPostsByCategory(category.slug);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Blog topic"
        title={category.label}
        description={category.description}
      />
      <BlogLayout activeCategory={category.slug}>
        <BlogList
          posts={posts}
          emptyTitle="No notes in this topic yet"
          emptyDescription={`New ${category.label.toLowerCase()} writing will appear here once published.`}
        />
      </BlogLayout>
    </div>
  );
}
