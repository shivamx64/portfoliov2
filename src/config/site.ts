export const siteConfig = {
  name: "Shivam Jha",
  firstName: "Shivam",
  role: "Backend and cloud engineer",
  title:
    "Backend and cloud engineer building durable systems, thoughtful tooling, and paper-backed engineering notes.",
  shortTitle: "Backend, cloud, and distributed systems engineer",
  description:
    "Personal engineering portfolio and technical writing platform focused on distributed systems, Kubernetes, platform engineering, databases, and paper implementations.",
  email: "shivam@engineering-notes.dev",
  location: "Bengaluru, India",
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "shivam-jha-engineering",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam-jha.dev",
  resumePath: "/resume/shivam-jha-resume.pdf",
  status: "Open to backend, platform, and infrastructure engineering opportunities.",
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
    eyebrow: "Portfolio, systems notes, and technical writing",
    intro:
      "I build backend platforms and cloud systems with a bias toward reliability, clean interfaces, and implementation-first learning.",
    subcopy:
      "This site is my long-term home for projects, paper implementations, engineering notes, and the kind of writing that only gets better with time.",
  },
  currentFocus: [
    {
      title: "Distributed systems from first principles",
      description:
        "Rebuilding ideas from foundational papers to understand tradeoffs instead of memorizing conclusions.",
      detail:
        "Current threads: replication, coordination, fault tolerance, and stateful workflows.",
    },
    {
      title: "Kubernetes and platform tooling",
      description:
        "Designing internal tools that make infrastructure safer, faster, and easier for product teams to use.",
      detail:
        "Current threads: control loops, release automation, cluster guardrails, and observability defaults.",
    },
    {
      title: "Databases and systems performance",
      description:
        "Studying data-intensive systems to build stronger intuition around storage engines, queues, and consistency.",
      detail:
        "Current threads: LSM trees, durable queues, latency budgets, and write-heavy workloads.",
    },
  ],
  about: {
    summary:
      "I care about the layer where backend architecture, platform ergonomics, and everyday developer experience all meet.",
    paragraphs: [
      "My work lives close to the operational edge of software: services, deployment systems, cluster tooling, internal platforms, and the documentation that helps teams move with confidence.",
      "I like products that are both technically serious and easy to live with. That means clear interfaces, pragmatic abstractions, and a steady habit of writing through decisions instead of hiding them.",
    ],
    principles: [
      "A platform earns trust when it makes the safe path the easy path.",
      "Good systems writing is part of the engineering work, not documentation debt.",
      "Paper implementations are one of the fastest ways to sharpen engineering judgment.",
    ],
  },
  contact: {
    title: "Let’s talk about systems work that needs care.",
    description:
      "If you’re building infrastructure, internal platforms, or backend-heavy products, I’d be glad to connect.",
  },
} as const;
