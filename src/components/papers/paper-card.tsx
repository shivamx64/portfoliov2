import Link from "next/link";

import { ExternalLink } from "@/components/shared/external-link";
import { Tag } from "@/components/shared/tag";
import type { ContentEntry, PaperFrontmatter } from "@/types/content";

type PaperCardProps = {
  paper: ContentEntry<PaperFrontmatter>;
};

export function PaperCard({ paper }: PaperCardProps) {
  return (
    <article className="grid gap-5 border-t border-border/60 py-6 first:border-t-0 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">Paper</p>
          <h3 className="font-heading text-[1.35rem] font-medium tracking-[-0.04em] text-foreground">
            <Link href={paper.url} className="hover:text-primary">
              {paper.title}
            </Link>
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {paper.excerpt}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm leading-7 text-muted-foreground">{paper.focus}</p>
        <div className="flex flex-col gap-2">
          <ExternalLink href={paper.paperUrl}>Original paper</ExternalLink>
          {paper.links?.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}
