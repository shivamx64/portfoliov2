import { siteConfig } from "@/config/site";
import type { BlogCategory } from "@/types/blog";

export const blogConfig = {
  title: "Engineering Blog",
  description:
    "Hey there! I'm sharing my thoughts and learnings on backend engineering, distributed systems, DevOps, and Cloud Native topics. I write about the challenges I encounter, the solutions I find, and the insights I gain from building and operating production systems. Whether you're a fellow engineer or just curious about how the backend works, I hope you find something interesting here. Thanks for reading!",
  basePath: "/blog",
  siteUrl: siteConfig.url,
  categories: [
    {
      label: "Backend Engineering",
      slug: "backend-engineering",
      description:
        "APIs, services, background jobs, reliability edges, and production backend behavior.",
    },
    {
      label: "Distributed Systems",
      slug: "distributed-systems",
      description:
        "Coordination, replication, consensus, failure modes, and what systems do under pressure.",
    },
    {
      label: "Databases",
      slug: "databases",
      description:
        "Storage engines, indexes, compaction, durability, query behavior, and write-heavy systems.",
    },
    {
      label: "Data Structures and Algorithms",
      slug: "dsa",
      description:
        "Implementation notes for data structures, algorithms, and problem-solving patterns.",
    },
    {
      label: "DevOps",
      slug: "devops",
      description:
        "CI/CD, Docker, AWS, observability, release safety, and the habits that keep deploys sane.",
    },
    {
      label: "Cloud Computing",
      slug: "cloud-computing",
      description:
        "AWS pieces, managed services, infrastructure choices, permissions, and cost-aware setup.",
    },
    {
      label: "Kubernetes",
      slug: "kubernetes",
      description:
        "Controllers, reconciliation, cluster operations, policy engines, CNCF tools, and rollout behavior.",
    },
    {
      label: "System Design",
      slug: "system-design",
      description:
        "Services, queues, caches, workflows, failure boundaries, and system shape under load.",
    },
    {
      label: "Linux Internals",
      slug: "linux-internals",
      description:
        "Processes, filesystems, networking, performance basics, and Linux behavior I want to understand better.",
    },
    {
      label: "Research Papers",
      slug: "research-papers",
      description:
        "Engineering papers, implementation notes, and the gap between clean ideas and running systems.",
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
