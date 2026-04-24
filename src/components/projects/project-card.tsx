import Link from "next/link";

import { ExternalLink } from "@/components/shared/external-link";
import { Tag } from "@/components/shared/tag";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

type ProjectCardProps = {
  project: ContentEntry<ProjectFrontmatter>;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card/45 p-5 transition-colors hover:border-foreground/15">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <p className="eyebrow">{project.status}</p>
            <span>{project.timeline}</span>
          </div>
          <h3 className="font-heading text-[1.35rem] font-medium tracking-[-0.04em] text-foreground">
            <Link href={project.url} className="hover:text-primary">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">{project.excerpt}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4 border-t border-border/60 pt-4">
        <div className="flex flex-wrap gap-3 text-sm">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
