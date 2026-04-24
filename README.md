# Portfolio V2

A production-grade personal engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui-style primitives, and `next-themes`.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui component primitives
- `next-themes`
- MDX content loaded from `src/content`

## Structure

```txt
src/
  app/              App Router routes, API routes, metadata routes
  components/       Layout, page sections, content UI, and shared primitives
  config/           Site-wide profile, nav, and social configuration
  content/          Local MDX and TypeScript content sources
  lib/              Content loading, SEO helpers, GitHub helpers, validation
  styles/           Theme and prose styles
  types/            Shared TypeScript models
public/
  images/           Profile, project, paper, blog, and OG assets
  resume/           Downloadable resume PDF
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Content Editing

- Update profile and site metadata in `src/config/site.ts`
- Edit navigation in `src/config/nav.ts`
- Edit social links in `src/config/social.ts`
- Add projects in `src/content/projects/*.mdx`
- Add paper notes in `src/content/papers/*.mdx`
- Add blog posts in `src/content/blog/**/*.mdx`
- Update work history in `src/content/experience/experience.ts`

## Notes

- The contact API route is a placeholder ready for email or webhook integration.
- GitHub activity falls back to sample data when no valid public profile is available.
- Replace the sample avatar, resume PDF, and social handles with real assets before launch.
