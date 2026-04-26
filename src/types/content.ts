export type ContentLink = {
  href: string;
  label: string;
};

export type CurrentFocusItem = {
  title: string;
  description: string;
  detail: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url?: string;
  confidential?: boolean;
};

export type BaseContentFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  coverImage?: string;
};

export type BlogFrontmatter = BaseContentFrontmatter & {
  category: string;
};

export type PaperKind = "implementation" | "reading-note";

export type PaperFrontmatter = BaseContentFrontmatter & {
  kind: PaperKind;
  sourcePaper: string;
  paperUrl: string;
  focus: string;
  links?: ContentLink[];
};

export type ProjectFrontmatter = BaseContentFrontmatter & {
  status: string;
  role: string;
  timeline: string;
  stack: string[];
  links: ContentLink[];
  metrics: string[];
};

export type ContentHeading = {
  id: string;
  level: 2 | 3;
  title: string;
};

export type ContentEntry<TFrontmatter> = TFrontmatter & {
  slug: string;
  slugSegments: string[];
  url: string;
  readingTime: string;
  headings: ContentHeading[];
  content: string;
};
