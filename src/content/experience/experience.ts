import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Aster Cloud",
    role: "Senior Backend Engineer",
    location: "Bengaluru, India",
    period: "2024 - Present",
    summary:
      "Leading backend and platform initiatives for internal developer tooling, Kubernetes workflows, and deployment reliability.",
    highlights: [
      "Designed cluster-facing services that standardized environment provisioning across multiple teams.",
      "Reduced deployment toil by codifying release checks and guardrails into reusable platform workflows.",
      "Introduced technical design notes that made infra decisions easier to review and revisit.",
    ],
    stack: ["Go", "Kubernetes", "PostgreSQL", "Terraform", "Prometheus"],
    url: "https://example.com/aster-cloud",
  },
  {
    company: "Northline Systems",
    role: "Platform Engineer",
    location: "Remote",
    period: "2022 - 2024",
    summary:
      "Worked across CI/CD, observability, and service infrastructure to help product teams ship with fewer operational surprises.",
    highlights: [
      "Built self-serve deployment templates that made common production paths easier and safer.",
      "Improved service visibility with consistent tracing and alerting baselines for backend teams.",
      "Partnered with application engineers on performance investigations and rollback-safe release patterns.",
    ],
    stack: ["Kubernetes", "Argo CD", "Grafana", "Python", "AWS"],
    url: "https://example.com/northline-systems",
  },
  {
    company: "Databound Labs",
    role: "Software Engineer",
    location: "Bengaluru, India",
    period: "2020 - 2022",
    summary:
      "Built backend services and internal tools for data pipelines, queue processing, and developer productivity.",
    highlights: [
      "Implemented queue consumers and job orchestration flows for data-heavy internal services.",
      "Wrote operational runbooks and notes that shortened incident handoff time.",
      "Contributed to service hardening around retries, idempotency, and background processing.",
    ],
    stack: ["Go", "RabbitMQ", "Redis", "MySQL", "Docker"],
    url: "https://example.com/databound-labs",
  },
];
