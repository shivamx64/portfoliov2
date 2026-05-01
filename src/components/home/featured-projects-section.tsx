import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

import { ProjectList } from "@/components/projects/project-list";

type FeaturedProjectsSectionProps = {
  projects: Array<ContentEntry<ProjectFrontmatter>>;
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <SectionShell
      id="projects"
      title="Featured projects"
      description="Systems projects built to understand runtime behavior, failure modes, and deployment edges."
    >
      <ProjectList projects={projects} />
      <div className="mt-6">
        <ButtonLink href="/projects" variant="outline">
          View all projects
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
