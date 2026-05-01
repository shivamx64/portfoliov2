import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Kyverno · CNCF",
    role: "LFX Mentee",
    location: "Remote",
    period: "Sept 2024 - Nov 2024",
    summary:
      "Built changes in Kyverno around deletion propagation, resource lifecycle, and how policy cleanup behaves inside Kubernetes.",
    highlights: [
      "Changed deletion propagation behavior so dependent resources followed Kubernetes ownership and cleanup rules more predictably.",
      "Touched controller logic, owner references, admission paths, and reconciliation code instead of only changing surface-level config.",
      "Wrote PRs with tests and design discussion, then iterated through maintainer review until the behavior made sense.",
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
      "Handled build pipelines, AWS setup, and containerized backend environments in a startup pace where things had to move.",
    highlights: [
      "Built Jenkins pipelines with SonarQube gates so bad builds failed before they reached deploy time.",
      "Set up AWS pieces across EC2, S3, and IAM, with permissions and runtime setup kept explicit.",
      "Containerized backend services with Docker and Docker Compose so local dev matched the actual runtime better.",
      "Fixed frontend env wiring and small UI blockers when they slowed shipping. Not my main lane, but the product needed it.",
    ],
    stack: ["Jenkins", "SonarQube", "AWS", "Docker", "Docker Compose"],
    confidential: true,
  },
];
