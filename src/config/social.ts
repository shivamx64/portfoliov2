import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/nav";

export const socialLinks: SocialLink[] = [
  {
    href: `https://github.com/${siteConfig.githubUsername}`,
    label: "GitHub",
    value: `@${siteConfig.githubUsername}`,
    external: true,
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    value: siteConfig.email,
  },
  {
    href: siteConfig.resumePath,
    label: "Resume",
    value: "Download PDF",
  },
];
