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
        title="Projects are on the way"
        description="Add MDX files to src/content/projects to publish engineering work here."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
