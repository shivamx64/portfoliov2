export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  value: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  url?: string;
};

export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  status: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  metrics: string[];
  image: string;
  links: ProjectLink[];
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

export type PaperFrontmatter = BaseContentFrontmatter & {
  paperUrl: string;
  sourcePaper: string;
  focus: string;
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

export type GithubActivity = {
  profile: {
    username: string;
    followers: number;
    publicRepos: number;
  };
  highlights: Array<{
    label: string;
    value: string;
  }>;
  recentEvents: Array<{
    id: string;
    type: string;
    repo: string;
    createdAt: string;
    url?: string;
  }>;
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};
