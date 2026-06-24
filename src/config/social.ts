import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/nav";

const linkedInUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/shivamkj1/";
const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/shivamx64";
const leetcodeUrl =
  process.env.NEXT_PUBLIC_LEETCODE_URL ?? "https://leetcode.com/u/Shivam_Kumar_/";

export const socialLinks: SocialLink[] = [
  {
    href: `https://github.com/${siteConfig.githubUsername}`,
    label: "GitHub",
    value: `@${siteConfig.githubUsername}`,
    external: true,
    icon: "github",
    showInHero: true,
  },
  {
    href: linkedInUrl,
    label: "LinkedIn",
    value: "Profile",
    external: true,
    icon: "linkedin",
    showInHero: true,
  },
  {
    href: xUrl,
    label: "X",
    value: "@shivamx64",
    external: true,
    icon: "x",
    showInHero: true,
  },
  {
    href: leetcodeUrl,
    label: "LeetCode",
    value: "Profile",
    external: true,
    icon: "leetcode",
    showInHero: true,
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    value: siteConfig.email,
    icon: "email",
    showInHero: true,
  },
  {
    href: siteConfig.resumePath,
    label: "Resume",
    value: "Download PDF",
    icon: "resume",
  },
];

export const heroSocialLinks = socialLinks.filter((link) => link.showInHero);
