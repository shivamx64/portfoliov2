import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import type { ContentEntry, PaperFrontmatter } from "@/types/content";

import { PaperList } from "@/components/papers/paper-list";

type PaperImplementationsSectionProps = {
  papers: Array<ContentEntry<PaperFrontmatter>>;
};

export function PaperImplementationsSection({
  papers,
}: PaperImplementationsSectionProps) {
  return (
    <SectionShell
      id="papers"
      title="Paper implementations"
      description="Rebuilding classic systems ideas to develop stronger intuition around distributed systems, consensus, and storage."
    >
      <PaperList papers={papers} />
      <div className="mt-6">
        <ButtonLink href="/papers" variant="outline">
          View all paper notes
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
