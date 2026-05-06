import { PageHeader } from "@/components/shared/page-header";
import { PaperList } from "@/components/papers/paper-list";
import { getPaperNotes } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Papershelf",
  description:
    "Research papers I’m reading to build better intuition around backend systems, distributed systems, databases, and infrastructure.",
  pathname: "/papershelf",
});

export default async function PapershelfPage() {
  const papers = await getPaperNotes();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Papershelf"
        title="Papershelf"
        description="Research papers I’m reading to build better intuition around backend systems, distributed systems, databases, and infrastructure."
      />

      <section className="content-width">
        <PaperList papers={papers} />
      </section>
    </div>
  );
}
