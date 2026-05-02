import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Kyverno · CNCF",
    role: "Open Source Contributor",
    location: "Remote",
    period: "Sept 2024 - Nov 2024",
    summary:
      "Contributed to Kyverno in the CNCF ecosystem, working on Kubernetes resource lifecycle behavior, policy cleanup, and controller paths.",
    highlights: [
      "Updated deletion propagation behavior so dependent resources followed Kubernetes ownership and cleanup rules more predictably.",
      "Worked across controller logic, owner references, admission paths, and reconciliation code instead of only touching surface config.",
      "Shipped PRs with tests and design discussion, then iterated through maintainer review until the behavior was clear.",
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
      "Built and maintained delivery pipelines, AWS setup, and containerized backend environments for a fast-moving product team.",
    highlights: [
      "Built Jenkins pipelines with SonarQube gates so weak builds failed before deploy time.",
      "Set up AWS pieces across EC2, S3, and IAM, with permissions and runtime setup kept explicit.",
      "Containerized backend services with Docker and Docker Compose so local development matched runtime behavior more closely.",
      "Fixed environment wiring and release blockers when they slowed delivery.",
    ],
    stack: ["Jenkins", "SonarQube", "AWS", "Docker", "Docker Compose"],
    confidential: true,
  },
];
