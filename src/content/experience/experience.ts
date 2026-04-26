import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Kyverno · CNCF",
    role: "LFX Mentee",
    location: "Remote",
    period: "Sept 2024 - Nov 2024",
    summary:
      "Contributed to Kyverno, a Kubernetes-native policy engine, by changing how deletion propagation policies reason about dependent resources.",
    highlights: [
      "Implemented changes around cascading deletion behavior so policy cleanup followed Kubernetes ownership and deletion semantics more predictably.",
      "Read through controller paths, owner references, admission behavior, and policy reconciliation code before touching the implementation.",
      "Shipped the work through maintainer review with design discussion, tests, and production-style pull requests instead of drive-by patches.",
    ],
    stack: ["Go", "Kubernetes", "Kyverno", "Controllers", "CNCF"],
    url: "https://kyverno.io",
  },
  {
    company: "Confidential Startup",
    role: "DevOps Intern",
    location: "Remote",
    period: "Feb 2025 - Jun 2025",
    summary:
      "Owned the rough edges around builds, deploys, and backend runtime environments so releases failed earlier and were easier to repeat.",
    highlights: [
      "Built Jenkins pipelines with SonarQube quality gates so broken builds and obvious code issues stopped before deployment.",
      "Set up AWS pieces across EC2, S3, and IAM, keeping permissions and service setup explicit instead of hidden in manual steps.",
      "Containerized backend services with Docker and Docker Compose so local runs matched deployment assumptions more closely.",
      "Fixed frontend environment wiring and small UI issues when they blocked delivery, without pretending it was a grand platform project.",
    ],
    stack: ["Jenkins", "SonarQube", "AWS", "Docker", "Docker Compose"],
    confidential: true,
  },
];
