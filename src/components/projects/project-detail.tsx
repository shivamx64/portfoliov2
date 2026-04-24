import { MdxContent } from "@/components/shared/mdx-content";
import { ExternalLink } from "@/components/shared/external-link";
import { Tag } from "@/components/shared/tag";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";
import { formatDate } from "@/lib/utils";

type ProjectDetailProps = {
  project: ContentEntry<ProjectFrontmatter>;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="content-width space-y-10 py-8 sm:py-10">
      <header className="max-w-3xl space-y-5 border-t border-border/60 pt-8">
        <p className="eyebrow">{project.status}</p>
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {project.excerpt}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <MdxContent source={project.content} />
        </div>
        <aside className="h-fit space-y-6 rounded-2xl border border-border/70 bg-card/45 p-6 lg:sticky lg:top-24">
          <div className="space-y-2">
            <p className="eyebrow">Role</p>
            <p className="text-sm leading-7 text-muted-foreground">{project.role}</p>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Timeline</p>
            <p className="text-sm leading-7 text-muted-foreground">{project.timeline}</p>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Published</p>
            <p className="text-sm leading-7 text-muted-foreground">
              {formatDate(project.publishedAt)}
            </p>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Highlights</p>
            <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
              {project.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Links</p>
            <div className="flex flex-col gap-2">
              {project.links.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
