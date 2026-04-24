import type { ContentHeading } from "@/types/content";

export type BlogCategory = {
  label: string;
  slug: string;
  description: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  featured: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slugSegments: string[];
  url: string;
  readingTime: string;
  headings: ContentHeading[];
  content: string;
};
