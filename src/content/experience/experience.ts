import type { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
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
