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
      title="Engineering notes"
      description="Notes and small implementations that sharpen backend, infrastructure, and cloud-native judgment."
    >
      <PaperList papers={papers} />
      <div className="mt-6">
        <ButtonLink href="/papers" variant="outline">
          View all notes
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
