import { EmptyState } from "@/components/shared/empty-state";
import type { ContentEntry, PaperFrontmatter } from "@/types/content";

import { PaperCard } from "./paper-card";

type PaperListProps = {
  papers: Array<ContentEntry<PaperFrontmatter>>;
};

export function PaperList({ papers }: PaperListProps) {
  if (!papers.length) {
    return (
      <EmptyState
        title="No papers shelved yet"
        description="The next systems paper will land here."
      />
    );
  }

  return (
    <div>
      {papers.map((paper) => (
        <PaperCard key={paper.slug} paper={paper} />
      ))}
    </div>
  );
}
