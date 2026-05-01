import Link from "next/link";
import Image from "next/image";

import { ExternalLink } from "@/components/shared/external-link";
import { Tag } from "@/components/shared/tag";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

type ProjectCardProps = {
  project: ContentEntry<ProjectFrontmatter>;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectImage =
    project.coverImage ?? "/images/projects/project-placeholder.svg";

  return (
    <article className="group grid overflow-hidden border border-border/80 bg-card/55 shadow-[0_20px_60px_rgb(15_23_42/0.06)] transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_28px_80px_rgb(15_23_42/0.11)] dark:shadow-[0_24px_70px_rgb(0_0_0/0.28)] dark:hover:border-foreground/25 dark:hover:shadow-[0_32px_90px_rgb(0_0_0/0.42)] md:grid-cols-2">
      <Link
        href={project.url}
        aria-label={`Open ${project.title}`}
        className="relative min-h-64 overflow-hidden bg-secondary md:min-h-full"
      >
        <Image
          src={projectImage}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(255_255_255/0.16),transparent_42%,rgb(255_255_255/0.08))] mix-blend-screen dark:bg-[linear-gradient(135deg,rgb(255_255_255/0.08),transparent_46%,rgb(255_255_255/0.03))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/20 md:inset-y-0 md:left-auto md:h-auto md:w-px" />
      </Link>

      <div className="flex min-h-[320px] flex-col justify-between p-5 sm:p-6">
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <p className="eyebrow">{project.status}</p>
              <span>{project.timeline}</span>
            </div>
            <h3 className="font-heading text-[1.35rem] font-medium text-foreground">
              <Link href={project.url} className="hover:text-primary">
                {project.title}
              </Link>
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {project.excerpt}
            </p>
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
      </div>
    </article>
  );
}
