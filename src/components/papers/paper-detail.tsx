import { MdxContent } from "@/components/shared/mdx-content";
import { ExternalLink } from "@/components/shared/external-link";
import { Tag } from "@/components/shared/tag";
import type { ContentEntry, PaperFrontmatter } from "@/types/content";
import { formatDate } from "@/lib/utils";

type PaperDetailProps = {
  paper: ContentEntry<PaperFrontmatter>;
};

export function PaperDetail({ paper }: PaperDetailProps) {
  return (
    <div className="content-width space-y-10 py-8 sm:py-10">
      <header className="max-w-3xl space-y-5 border-t border-border/60 pt-8">
        <p className="eyebrow">
          {paper.kind === "implementation" ? "Implementation note" : "Reading note"}
        </p>
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
            {paper.title}
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {paper.excerpt}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <MdxContent source={paper.content} />
        </div>
        <aside className="h-fit space-y-6 border-t border-border/60 pt-6 lg:sticky lg:top-24 lg:border-t-0 lg:border-l lg:pl-6">
          <div className="space-y-2">
            <p className="eyebrow">Source</p>
            <p className="text-sm leading-7 text-muted-foreground">{paper.sourcePaper}</p>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Focus</p>
            <p className="text-sm leading-7 text-muted-foreground">{paper.focus}</p>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Published</p>
            <p className="text-sm leading-7 text-muted-foreground">
              {formatDate(paper.publishedAt)}
            </p>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Links</p>
            <div className="flex flex-col gap-2">
              <ExternalLink href={paper.paperUrl}>Original paper</ExternalLink>
              {paper.links?.map((link) => (
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
