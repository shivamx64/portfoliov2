export const siteConfig = {
  name: "Shivam Jha",
  firstName: "Shivam",
  role: "Backend and infrastructure engineer",
  title:
    "Backend and infrastructure engineer building services, deployment paths, and notes from the parts that broke.",
  shortTitle: "Backend, infrastructure, and distributed systems",
  description:
    "Portfolio and engineering notes on backend systems, Kubernetes, DevOps, databases, and distributed systems.",
  email: "shivam@engineering-notes.dev",
  location: "Bengaluru, India",
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "ShivamJha2436",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam-jha.dev",
  resumePath: "/resume/shivam-jha-resume.pdf",
  status: "Open to backend, platform, and infrastructure roles.",
  availability: "Open to work · Immediately",
  heroBadges: [
    "Bengaluru, India",
    "Backend & Infrastructure",
    "Kubernetes",
    "Systems notes",
  ],
  keywords: [
    "Shivam Jha",
    "backend engineer",
    "cloud engineer",
    "distributed systems",
    "Kubernetes",
    "DevOps",
    "platform engineering",
    "databases",
    "paper implementations",
    "technical writing",
  ],
  hero: {
    eyebrow: "Hi, I’m Shivam.",
    intro:
      "I work on backend and infrastructure code: APIs, CI/CD, containers, Kubernetes, and the boring paths that keep deploys from turning into a mess.",
    subcopy:
      "Right now I am digging into distributed systems and Kubernetes internals by building small things, breaking them, and writing down what actually happened.",
  },
  currentFocus: [
    {
      title: "Distributed systems, built small",
      description:
        "Implementing the pieces instead of only reading the diagrams.",
      detail:
        "Current threads: replication, leases, retries, leader election, and what failure looks like in code.",
    },
    {
      title: "Kubernetes control loops",
      description:
        "Learning the machinery behind controllers, admission, ownership, and reconciliation.",
      detail:
        "Current threads: owner references, finalizers, policy engines, rollout safety, and cluster guardrails.",
    },
    {
      title: "Databases and background work",
      description:
        "Following the path from a write to storage, indexes, queues, retries, and cleanup.",
      detail:
        "Current threads: Postgres-backed queues, idempotency, dead letters, LSM trees, and latency spikes.",
    },
  ],
  about: {
    summary:
      "I like backend work that has consequences: deploys, data, queues, clusters, and failure modes you can explain.",
    paragraphs: [
      "Right now I am working around backend services, CI/CD pipelines, Docker-based environments, and Kubernetes policy work. I care less about shiny architecture and more about whether the system is understandable when it is 2 AM and something is stuck.",
      "The technical areas I keep coming back to are control loops, queues, idempotency, rollout safety, observability, and databases under write load. Small details matter there. A missing constraint or a vague retry rule can become a real incident later.",
    ],
    principles: [
      "Make the safe path boring enough that people actually use it.",
      "Write down the tradeoff while it is still fresh.",
      "If I cannot reproduce the failure locally, I probably do not understand it yet.",
    ],
  },
  skills: {
    groups: [
      {
        label: "Languages",
        items: ["TypeScript", "Go", "Python", "C++", "SQL", "Bash"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "GraphQL", "REST"],
      },
      {
        label: "Backend",
        items: ["Gin", "Fiber", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "gRPC"],
      },
      {
        label: "Cloud and infrastructure",
        items: [
          "Docker",
          "Kubernetes",
          "AWS",
          "Terraform",
          "Ansible",
          "CI/CD",
        ],
      },
      {
        label: "Observability and operations",
        items: ["Prometheus", "OpenTelemetry", "Datadog", "Grafana", "Linux"],
      },
    ],
  },
  contact: {
    title: "Let’s have a quick chat.",
    description:
      "If the work involves services, deploys, clusters, queues, or debugging weird production behavior, I am interested.",
  },
} as const;
