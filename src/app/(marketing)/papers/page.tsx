import { PageHeader } from "@/components/shared/page-header";
import { PaperList } from "@/components/papers/paper-list";
import { getPaperNotes } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Papers",
  description: "Paper implementations and reading notes focused on distributed systems, databases, and infrastructure.",
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
        eyebrow="Papers"
        title="Implementations and reading notes"
        description="A place to turn foundational systems papers into working intuition through code, notes, and design reflection."
      />

      <section className="content-width space-y-4">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
            Paper implementations
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            Rebuilding classic ideas to understand their tradeoffs more concretely.
          </p>
        </div>
        <PaperList papers={implementationPapers} />
      </section>

      <section className="content-width space-y-4">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.04em] text-foreground">
            Papers I read
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            Reading notes from papers that continue to shape how I reason about systems.
          </p>
        </div>
        <PaperList papers={readingNotes} />
      </section>
    </div>
  );
}
