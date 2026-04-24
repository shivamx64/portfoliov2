import "server-only";

import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

import type {
  BlogFrontmatter,
  ContentEntry,
  ContentLink,
  ProjectFrontmatter,
  PaperFrontmatter,
} from "@/types/content";
import { extractHeadings } from "@/lib/mdx";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

const linkSchema = z.object({
  href: z.string(),
  label: z.string(),
}) satisfies z.ZodType<ContentLink>;

const baseFrontmatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  coverImage: z.string().optional(),
});

const blogFrontmatterSchema = baseFrontmatterSchema.extend({
  category: z.string(),
}) satisfies z.ZodType<BlogFrontmatter>;

const projectFrontmatterSchema = baseFrontmatterSchema.extend({
  status: z.string(),
  role: z.string(),
  timeline: z.string(),
  stack: z.array(z.string()),
  links: z.array(linkSchema).default([]),
  metrics: z.array(z.string()).default([]),
}) satisfies z.ZodType<ProjectFrontmatter>;

const paperFrontmatterSchema = baseFrontmatterSchema.extend({
  kind: z.enum(["implementation", "reading-note"]),
  sourcePaper: z.string(),
  paperUrl: z.string().url(),
  focus: z.string(),
  links: z.array(linkSchema).default([]),
}) satisfies z.ZodType<PaperFrontmatter>;

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

function getSlugSegments(collection: string, filePath: string) {
  const relativePath = path.relative(
    path.join(CONTENT_ROOT, collection),
    filePath,
  );

  return relativePath.replace(/\.mdx$/, "").split(path.sep);
}

function sortByDate<T extends { publishedAt: string }>(items: T[]) {
  return [...items].sort((left, right) => {
    return (
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  });
}

async function readCollection<TFrontmatter extends { publishedAt: string; draft?: boolean }>(
  collection: "blog" | "papers" | "projects",
  schema: z.ZodType<TFrontmatter>,
): Promise<Array<ContentEntry<TFrontmatter>>> {
  const directory = path.join(CONTENT_ROOT, collection);
  const files = await getMdxFiles(directory);

  const entries = await Promise.all(
    files.map(async (filePath) => {
      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);
      const parsedFrontmatter = schema.safeParse(data);

      if (!parsedFrontmatter.success) {
        throw new Error(
          `Invalid frontmatter in ${filePath}: ${parsedFrontmatter.error.message}`,
        );
      }

      const slugSegments = getSlugSegments(collection, filePath);
      const slug = slugSegments.join("/");

      return {
        ...parsedFrontmatter.data,
        slug,
        slugSegments,
        url: `/${collection}/${slug}`,
        readingTime: readingTime(content).text,
        headings: extractHeadings(content),
        content,
      } satisfies ContentEntry<TFrontmatter>;
    }),
  );

  return sortByDate(entries).filter((entry) => !entry.draft);
}

export const getBlogPosts = cache(async () => {
  return readCollection<BlogFrontmatter>("blog", blogFrontmatterSchema);
});

export const getPaperNotes = cache(async () => {
  return readCollection<PaperFrontmatter>("papers", paperFrontmatterSchema);
});

export const getProjects = cache(async () => {
  return readCollection<ProjectFrontmatter>("projects", projectFrontmatterSchema);
});

export async function getFeaturedBlogPosts(limit = 3) {
  const posts = await getBlogPosts();

  return posts.filter((post) => post.featured).slice(0, limit);
}

export async function getRecentBlogPosts(limit = 3) {
  const posts = await getBlogPosts();

  return posts.slice(0, limit);
}

export async function getFeaturedPaperNotes(limit = 3) {
  const papers = await getPaperNotes();

  return papers.filter((paper) => paper.featured).slice(0, limit);
}

export async function getFeaturedPaperImplementations(limit = 3) {
  const papers = await getPaperNotes();

  return papers
    .filter((paper) => paper.kind === "implementation")
    .slice(0, limit);
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getProjects();

  return projects.filter((project) => project.featured).slice(0, limit);
}

export async function getBlogPostBySlug(slugSegments: string[]) {
  const posts = await getBlogPosts();

  return posts.find((post) => post.slug === slugSegments.join("/")) ?? null;
}

export async function getPaperNoteBySlug(slug: string) {
  const papers = await getPaperNotes();

  return papers.find((paper) => paper.slug === slug) ?? null;
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();

  return projects.find((project) => project.slug === slug) ?? null;
}
