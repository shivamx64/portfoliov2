import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import type { ContentEntry, PaperFrontmatter } from "@/types/content";

import { PaperList } from "@/components/papers/paper-list";

type PapershelfSectionProps = {
  papers: Array<ContentEntry<PaperFrontmatter>>;
};

export function PapershelfSection({
  papers,
}: PapershelfSectionProps) {
  return (
    <SectionShell
      id="papers"
      title="Papershelf"
      description="Research papers I’m reading to build better intuition around backend systems, distributed systems, databases, and infrastructure."
    >
      <PaperList papers={papers} />
      <div className="mt-6">
        <ButtonLink href="/papershelf" variant="outline">
          View Papershelf
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
