import { EmptyState } from "@/components/shared/empty-state";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

import { ProjectCard } from "./project-card";

type ProjectListProps = {
  projects: Array<ContentEntry<ProjectFrontmatter>>;
};

export function ProjectList({ projects }: ProjectListProps) {
  if (!projects.length) {
    return (
      <EmptyState
        title="No projects published yet"
        description="The next build note will show up here."
      />
    );
  }

  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
