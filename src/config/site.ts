export const siteConfig = {
  name: "Shivam Jha",
  firstName: "Shivam",
  role: "Backend Engineering, DevOps & Cloud engineer",
  title:
    "Cloud Native backend engineer building APIs, delivery paths, and infrastructure around Kubernetes and the CNCF ecosystem.",
  shortTitle: "Backend, DevOps, cloud, and CNCF ecosystem",
  description:
    "Portfolio and engineering notes on backend systems, DevOps, cloud infrastructure, Kubernetes, and open source work in the CNCF ecosystem.",
  email: "shivamkumar87148@gmail.com",
  location: "Bengaluru, India",
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "ShivamJha2436",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam-jha.dev",
  resumePath: "/resume/shivam-jha-resume.pdf",
  status: "Open to backend, DevOps, cloud, and platform roles.",
  availability: "Open to work · Immediately",
  heroBadges: [
    "Bengaluru, India",
    "Backend + DevOps + Cloud",
    "OSS contributor",
    "Technical writer",
  ],
  keywords: [
    "Shivam Jha",
    "backend engineer",
    "DevOps engineer",
    "cloud engineer",
    "cloud infrastructure",
    "Kubernetes",
    "CNCF",
    "open source",
    "OSS contributor",
    "platform engineering",
    "infrastructure engineer",
    "databases",
    "technical writing",
  ],
  hero: {
    eyebrow: "Hi, I’m Shivam.",
    intro:
      "I build backend services, automate delivery, and work close to cloud infrastructure and Kubernetes.",
    subcopy:
      "My work sits around APIs, CI/CD, containers, AWS, Kubernetes, observability, and open source in the CNCF ecosystem. I care about systems that are simple to run, easy to debug, and clear under pressure.",
  },
  currentFocus: [
    {
      title: "Backend services and APIs",
      description:
        "Designing service boundaries, request flows, background jobs, and data paths that stay readable in production.",
      detail:
        "Current threads: REST APIs, queues, retries, idempotency, Postgres, Redis, and clean service ownership.",
    },
    {
      title: "DevOps and cloud delivery",
      description:
        "Building deployment paths that make releases predictable and failures visible early.",
      detail:
        "Current threads: CI/CD, Docker, AWS, Terraform, Linux, rollout checks, environment setup, and operational hygiene.",
    },
    {
      title: "Kubernetes and CNCF OSS",
      description:
        "Working with Kubernetes behavior and open source tools where controllers, policies, and runtime state matter.",
      detail:
        "Current threads: Kyverno, controllers, owner references, admission paths, policy cleanup, observability, and contributor workflows.",
    },
  ],
  about: {
    summary:
      "I work across backend engineering, DevOps, cloud infrastructure, and open source in the CNCF ecosystem.",
    paragraphs: [
      "I build and operate backend systems with the infrastructure around them: APIs, workers, databases, containers, CI/CD, cloud setup, and deployment workflows.",
      "I like engineering work where ownership is clear. A service should be understandable, a deploy should be repeatable, and a failure should leave enough signal to act on.",
      "A large part of my focus is Kubernetes and CNCF open source. I have worked around Kyverno, controllers, admission paths, ownership, cleanup behavior, and the small details that decide how a cluster behaves.",
      "I write notes from real implementation work: what was built, what failed, what was fixed, and what made the system easier to run afterward.",
    ],
    principles: [
      "Keep services simple enough to operate.",
      "Make deploys repeatable and rollback paths real.",
      "Prefer clear logs, metrics, and checks over guesswork.",
      "Use cloud and Kubernetes primitives before adding extra layers.",
      "Treat open source work with the same care as production work.",
    ],
  },
  skills: {
    groups: [
      {
        label: "Languages",
        items: ["TypeScript", "Go", "Python", "C++", "SQL", "Bash"],
      },
      {
        label: "Backend",
        items: ["REST", "GraphQL", "gRPC", "Gin", "Fiber", "Node.js", "PostgreSQL"],
      },
      {
        label: "DevOps and delivery",
        items: ["Docker", "Docker Compose", "Jenkins", "GitHub Actions", "CI/CD", "Linux"],
      },
      {
        label: "Cloud and platform",
        items: [
          "AWS",
          "Terraform",
          "Ansible",
          "Kubernetes",
          "Helm",
          "Nginx",
        ],
      },
      {
        label: "CNCF and operations",
        items: ["Kyverno", "Controllers", "Prometheus", "OpenTelemetry", "Grafana", "Policy engines"],
      },
    ],
  },
  contact: {
    title: "Got any idea, let's talk.",
    description:
      "If you have an opportunity, a question, or just want to say hi, feel free to reach out. I’m always open to connecting with fellow engineers, discussing potential collaborations, or sharing insights on backend systems, DevOps, cloud infrastructure, and Kubernetes.",
  },
} as const;
