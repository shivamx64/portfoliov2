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
    "Backend engineer",
    "DevOps engineer",
    "Cloud engineer",
    "Cloud infrastructure",
    "Kubernetes",
    "CNCF",
    "Open Source",
    "OSS contributor",
    "platform engineering",
    "Infrastructure engineer",
    "Databases",
    "Technical writing",
  ],
  hero: {
    eyebrow: "Hi, I’m Shivam.",
    intro:
      "I am currently focused on Backend engineering, DevOps, and Cloud Infrastructure.",
    subcopy:
      "My work sits around APIs, CI/CD, containers, AWS, Kubernetes, observability, and open source in the CNCF ecosystem. I ship fast, take ownership of my work, and stay close to the mess to fix it when it breaks.",
  },
  currentFocus: [
    {
      title: "Backend Engineering",
      description:
        "Building APIs, workers, queues, and data paths that can take real traffic and still be understood when something breaks.",
      detail:
        "Current threads: REST, Queues, Retries, Idempotency, Postgres, Redis, Kafka, Background jobs, and clean service ownership.",
    },
    {
      title: "DevOps and cloud",
      description:
        "Shipping code through CI/CD, containers, cloud infrastructure, and release flows that do not fall apart under pressure.",
      detail:
        "Current threads: CI/CD, Docker, AWS, Terraform, Linux, environments, rollbacks, secrets, and deploy hygiene.",
    },
    {
      title: "Kubernetes and Infrastructure",
      description:
        "Working with clusters, workloads, networking, metrics, and the infrastructure around services after they leave localhost.",
      detail:
        "Current threads: Kubernetes, Helm, Nginx, Prometheus, observability, scaling behavior, and cluster operations.",
    },
    {
      title: "Distributed systems",
      description:
        "Learning the parts of backend engineering that show up when one machine is not enough and failure becomes normal.",
      detail:
        "Current threads: replication, consensus, partitions, queues, caches, timeouts, coordination, and failure modes.",
    },
  ],
  about: {
    summary:
      "I build backend systems and the infrastructure around them. APIs, jobs, deploys, logs, cloud setup, and the boring parts that keep a product alive.",
    paragraphs: [
      "I like startup-style engineering: move fast, own the mess, ship the thing, then stay close enough to fix it when it breaks.",
      "Most of my work sits around backend services, CI/CD, containers, Kubernetes, cloud infrastructure, observability, and deployment reliability.",
      "I care about systems that are simple to run. A deploy should be boring. Logs should tell the truth. Infra should be understandable when the pager is loud.",
      "I also read and learn backend engineering and distributed systems deeply, because the theory starts to matter once real systems hit load, latency, and failure.",
    ],
    principles: [
      "Build small enough to debug.",
      "Ship fast, but keep a rollback path.",
      "Automate the boring failure-prone work.",
      "Make logs, metrics, and alerts useful before they are needed.",
      "Use simple infrastructure until the system earns more complexity.",
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
        items: ["REST", "GraphQL", "gRPC", "Kafka", "Gin", "Fiber", "Node.js", "PostgreSQL"],
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
        label: "CNCF and OSS",
        items: ["Kyverno","Project Contour", "Meshery", "and exploring more..."],
      },
    ],
  },
  contact: {
    title: "Got any idea, let's talk.",
    description:
      "If you have an opportunity, a question, or just want to say hi, feel free to reach out. I’m always open to connecting with fellow engineers, discussing potential collaborations, or sharing insights on backend systems, DevOps, cloud infrastructure, and Kubernetes.",
  },
} as const;
