export const HOME_COLLECTION_LIMITS = {
  featuredProjects: 3,
  featuredPaperImplementations: 3,
  recentPosts: 3,
} as const;

export const STATIC_MARKETING_ROUTES = [
  "/",
  "/about",
  "/projects",
  "/papers",
  "/blog",
  "/resume",
  "/contact",
] as const;

export const GITHUB_REVALIDATE_SECONDS = 60 * 60 * 6;
