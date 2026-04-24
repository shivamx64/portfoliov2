import { siteConfig } from "@/config/site";
import type { BlogCategory } from "@/types/blog";

export const blogConfig = {
  title: "Technical Writing",
  description:
    "Field notes on backend engineering, distributed systems, databases, Kubernetes, and the operating details behind durable software.",
  basePath: "/blog",
  siteUrl: siteConfig.url,
  categories: [
    {
      label: "Backend Engineering",
      slug: "backend-engineering",
      description:
        "Service boundaries, workflows, reliability patterns, APIs, and production backend design.",
    },
    {
      label: "Distributed Systems",
      slug: "distributed-systems",
      description:
        "Coordination, replication, consensus, failure modes, and systems behavior under pressure.",
    },
    {
      label: "Databases",
      slug: "databases",
      description:
        "Storage engines, query behavior, indexes, compaction, durability, and data modeling tradeoffs.",
    },
    {
      label: "Data Structures and Algorithms",
      slug: "dsa",
      description:
        "Implementation notes and problem-solving patterns for data structures and algorithms.",
    },
    {
      label: "DevOps",
      slug: "devops",
      description:
        "Release automation, observability, incident practice, and operational engineering habits.",
    },
    {
      label: "Cloud Computing",
      slug: "cloud-computing",
      description:
        "Cloud architecture, managed services, infrastructure choices, and platform cost discipline.",
    },
    {
      label: "Kubernetes",
      slug: "kubernetes",
      description:
        "Controllers, cluster operations, platform APIs, and Kubernetes-native delivery systems.",
    },
    {
      label: "System Design",
      slug: "system-design",
      description:
        "Architecture notes for scalable services, queues, caches, workflows, and reliability boundaries.",
    },
    {
      label: "Linux Internals",
      slug: "linux-internals",
      description:
        "Kernel-facing concepts, filesystems, networking, processes, and performance intuition.",
    },
    {
      label: "Research Papers",
      slug: "research-papers",
      description:
        "Reading notes, paper implementations, and practical takeaways from foundational systems work.",
    },
  ] satisfies BlogCategory[],
} as const;

export function getBlogCategoryBySlug(slug: string) {
  return blogConfig.categories.find((category) => category.slug === slug) ?? null;
}

export function getBlogCategoryByLabel(label: string) {
  return (
    blogConfig.categories.find(
      (category) => category.label.toLowerCase() === label.toLowerCase(),
    ) ?? null
  );
}
