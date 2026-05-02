import { PageHeader } from "@/components/shared/page-header";
import { PaperList } from "@/components/papers/paper-list";
import { getPaperNotes } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Notes",
  description: "Implementation notes focused on backend systems, infrastructure, and cloud-native engineering.",
  pathname: "/papers",
});

export default async function PapersPage() {
  const papers = await getPaperNotes();
  const implementationPapers = papers.filter(
    (paper) => paper.kind === "implementation",
  );
  const readingNotes = papers.filter((paper) => paper.kind === "reading-note");

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Notes"
        title="Implementation notes and engineering reads"
        description="A place for practical notes from backend, infrastructure, and cloud-native work."
      />

      <section className="content-width space-y-4">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
            Implementations
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            Small builds that make system behavior, tradeoffs, and operational limits easier to reason about.
          </p>
        </div>
        <PaperList papers={implementationPapers} />
      </section>

      <section className="content-width space-y-4">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
            Reading notes
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            Notes from engineering papers and docs that shape how I design and operate systems.
          </p>
        </div>
        <PaperList papers={readingNotes} />
      </section>
    </div>
  );
}
