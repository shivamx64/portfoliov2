import type { MetadataRoute } from "next";

import { STATIC_MARKETING_ROUTES } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getPaperNotes, getProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, papers, projects] = await Promise.all([
    getBlogPosts(),
    getPaperNotes(),
    getProjects(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = STATIC_MARKETING_ROUTES.map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(post.url),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const contentRoutes: MetadataRoute.Sitemap = [...papers, ...projects].map(
    (entry) => ({
      url: absoluteUrl(entry.url),
      lastModified: new Date(entry.updatedAt ?? entry.publishedAt),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...blogRoutes, ...contentRoutes];
}
