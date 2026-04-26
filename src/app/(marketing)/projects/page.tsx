import { PageHeader } from "@/components/shared/page-header";
import { ProjectList } from "@/components/projects/project-list";
import { getProjects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Projects",
  description: "Backend, Kubernetes, queueing, and writing systems projects.",
  pathname: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Projects"
        title="Projects where the edge cases matter"
        description="Queues, Kubernetes workflows, and note-taking tools built to understand the messy parts."
      />
      <div className="content-width">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
