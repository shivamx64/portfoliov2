import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Confidential Startup",
    role: "DevOps Intern",
    location: "New Delhi, India (Hybrid)",
    period: "Feb 2025 - Jun 2025",
    summary:
      "Handled infrastructure, Kubernetes operations, and CI/CD workflows with a production mindset around reliability, backups, and security hardening.",
    highlights: [
      "Managed on-prem Kubernetes and AWS EKS clusters running production workloads.",
      "Provisioned infrastructure with Terraform and scripts, then deployed multi-container services with Docker Compose.",
      "Integrated Trivy scans into CI/CD pipelines, improving release reliability by roughly 40%.",
      "Built backup and restore workflows into the system instead of treating recovery as an afterthought.",
      "Hardened infrastructure by closing exposed ports and automating kube-bench CIS checks.",
    ],
    stack: ["Kubernetes", "EKS", "Terraform", "Docker", "CI/CD", "Trivy", "AWS"],
    confidential: true,
  },
  {
    company: "Linux Foundation Mentorship - Kyverno",
    role: "LFX Mentee",
    location: "Remote (San Jose, USA org)",
    period: "Sept 2024 - Nov 2024",
    summary:
      "Contributed controller-level code to Kyverno, working on Kubernetes policy lifecycle management, cleanup behavior, and reconciliation paths.",
    highlights: [
      "Implemented deletion propagation and lifecycle strategies in Kyverno CRDs.",
      "Enforced cascading cleanup logic to prevent orphaned policy-generated resources.",
      "Extended TTL cleanup controllers and tightened reconciliation behavior for complex policies.",
      "Shipped production-grade changes through maintainer review in a CNCF Kubernetes project.",
    ],
    stack: ["Go", "Kubernetes", "Kyverno", "Controllers", "Policy-as-Code"],
    url: "https://kyverno.io",
  },
];
