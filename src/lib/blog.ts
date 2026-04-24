import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

import matter from "gray-matter";
import { z } from "zod";

import { blogConfig, getBlogCategoryByLabel, getBlogCategoryBySlug } from "@/config/blog";
import { extractHeadings } from "@/lib/mdx";
import { getReadingTime } from "@/lib/reading-time";
import type { BlogFrontmatter, BlogPost } from "@/types/blog";

const BLOG_ROOT = path.join(process.cwd(), "src", "content", "blog");

const blogFrontmatterSchema = z
  .object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string().optional(),
    publishedAt: z.string().optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().optional(),
  })
  .transform((data, context): BlogFrontmatter => {
    const date = data.date ?? data.publishedAt;
    const description = data.description ?? data.excerpt;
    const category = normalizeCategoryLabel(data.category);

    if (!date) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Expected frontmatter date or publishedAt",
      });
    }

    if (!description) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Expected frontmatter description or excerpt",
      });
    }

    return {
      title: data.title,
      slug: data.slug ?? "",
      date: date ?? "",
      description: description ?? "",
      category,
      tags: data.tags,
      coverImage: data.coverImage,
      published: data.published ?? !data.draft,
      featured: data.featured,
    };
  });

async function getMdxFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolvedPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return getMdxFiles(resolvedPath);
      }

      return entry.name.endsWith(".mdx") ? [resolvedPath] : [];
    }),
  );

  return files.flat();
}

function normalizeCategoryLabel(category: string) {
  const normalized = category.trim();
  const byLabel = getBlogCategoryByLabel(normalized);
  const bySlug = getBlogCategoryBySlug(normalized);

  return byLabel?.label ?? bySlug?.label ?? normalized;
}

function slugFromFile(filePath: string) {
  return path.basename(filePath, ".mdx");
}

function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort(
    (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
  );
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const files = await getMdxFiles(BLOG_ROOT);
  const posts = await Promise.all(
    files.map(async (filePath) => {
      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);
      const parsedFrontmatter = blogFrontmatterSchema.safeParse(data);

      if (!parsedFrontmatter.success) {
        throw new Error(
          `Invalid blog frontmatter in ${filePath}: ${parsedFrontmatter.error.message}`,
        );
      }

      const slug = parsedFrontmatter.data.slug || slugFromFile(filePath);

      return {
        ...parsedFrontmatter.data,
        slug,
        slugSegments: [slug],
        url: `${blogConfig.basePath}/${slug}`,
        readingTime: getReadingTime(content),
        headings: extractHeadings(content),
        content,
      } satisfies BlogPost;
    }),
  );

  return sortPostsByDate(posts).filter((post) => post.published);
});

export async function getFeaturedBlogPosts(limit = 3) {
  const posts = await getBlogPosts();

  return posts.filter((post) => post.featured).slice(0, limit);
}

export async function getRecentBlogPosts(limit = 3) {
  const posts = await getBlogPosts();

  return posts.slice(0, limit);
}

export async function getBlogPostBySlug(slugSegments: string[]) {
  const posts = await getBlogPosts();
  const slug = slugSegments.join("/");

  return posts.find((post) => post.slug === slug || post.slugSegments.join("/") === slug) ?? null;
}

export async function getBlogPostsByCategory(categorySlug: string) {
  const posts = await getBlogPosts();
  const category = getBlogCategoryBySlug(categorySlug);

  if (!category) {
    return [];
  }

  return posts.filter((post) => post.category === category.label);
}

export async function getAdjacentBlogPosts(post: BlogPost) {
  const posts = await getBlogPosts();
  const index = posts.findIndex((item) => item.slug === post.slug);

  return {
    previous: index >= 0 ? posts[index + 1] ?? null : null,
    next: index > 0 ? posts[index - 1] ?? null : null,
  };
}
