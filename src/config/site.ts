export const siteConfig = {
  name: "Shivam Jha",
  firstName: "Shivam",
  role: "Backend and infrastructure engineer",
  title:
    "Backend and DevOps engineer who ships fast, deploys real systems, and learns from the parts that break.",
  shortTitle: "Backend, DevOps, and distributed systems",
  description:
    "Portfolio and engineering notes on backend systems, DevOps, Kubernetes, databases, and distributed systems.",
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
    "Backend + DevOps",
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
      "Backend + DevOps. I ship fast, deploy things, break them, fix the sharp edges, and move again.",
    subcopy:
      "Mostly into APIs, CI/CD, containers, Kubernetes, distributed systems, and figuring out how the system actually behaves under pressure.",
  },
  currentFocus: [
    {
      title: "Distributed systems by building",
      description:
        "Reading papers, then implementing the part that looks too clean in the diagram.",
      detail:
        "Current threads: replication, leases, retries, leader election, consistency, and failure paths.",
    },
    {
      title: "Kubernetes internals",
      description:
        "Digging into the control-plane bits that decide what lives, what gets cleaned up, and what keeps reconciling.",
      detail:
        "Current threads: controllers, owner references, finalizers, admission, policy engines, and rollout safety.",
    },
    {
      title: "Backend runtime behavior",
      description:
        "Following requests past the happy path: queues, retries, DB writes, timeouts, and cleanup.",
      detail:
        "Current threads: Postgres-backed queues, idempotency, dead letters, Redis, LSM trees, and latency spikes.",
    },
  ],
  about: {
    summary:
      "I like startup-style engineering: own the problem, ship the fix, watch the system, then tighten it.",
    paragraphs: [
      "Right now: backend engineering, DevOps, CI/CD, Docker environments, AWS setup, and Kubernetes policy work. I like small teams, fast loops, and systems where ownership is not split across five meetings.",
      "I care about APIs that are easy to run, deploys that fail early, logs that say something useful, and infra that a tired engineer can still reason about.",
      "I am actively reading and building around distributed systems, Kubernetes internals, databases, queues, retries, and failure handling. Theory is useful. Running code is where it gets honest.",
    ],
    principles: [
      "Ship small. Verify fast. Keep the rollback path real.",
      "If a deploy can fail, make the failure obvious before prod.",
      "If I cannot reproduce the bug, I do not understand it yet.",
      "Read the paper, build the toy version, then find where the abstraction leaks.",
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
    title: "Send the problem.",
    description:
      "Backend, DevOps, infra, queues, clusters, or weird production behavior. Send context. I will read it.",
  },
} as const;
