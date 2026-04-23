import type { NavItem, SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Your Name",
  firstName: "Your",
  title: "Frontend engineer building thoughtful interfaces and durable systems.",
  shortTitle: "Frontend engineer and design-focused builder",
  description:
    "Personal portfolio, writing hub, and long-form notebook for projects, paper implementations, and engineering notes.",
  email: "hello@example.com",
  location: "Bengaluru, India",
  githubUsername: "sagethefox",
  domain: "https://example.com",
  resumePath: "/resume/your-name-resume.pdf",
  status: "Currently open to senior frontend and product engineering roles.",
  hero: {
    eyebrow: "Portfolio, notes, and engineering writing",
    intro:
      "I design and build fast, deliberate web experiences with a bias toward clarity, maintainability, and systems thinking.",
    subcopy:
      "This site is my working portfolio and long-term publishing space for implementation notes, blog essays, and paper-backed experiments.",
  },
  about: {
    summary:
      "I care about the part of engineering where visual quality, product judgment, and code quality all have to hold up at the same time.",
    principles: [
      "Design systems should reduce entropy, not flatten personality.",
      "A good interface feels obvious without feeling generic.",
      "Readable code is part of the product experience for the team.",
    ],
  },
} as const;

export const navigationItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/papers", label: "Papers" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/sagethefox",
    label: "GitHub",
    value: "@sagethefox",
  },
  {
    href: "https://www.linkedin.com/in/your-name",
    label: "LinkedIn",
    value: "/in/your-name",
  },
  {
    href: "mailto:hello@example.com",
    label: "Email",
    value: "hello@example.com",
  },
];
