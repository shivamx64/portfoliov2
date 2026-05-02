import { PageHeader } from "@/components/shared/page-header";
import { ProjectList } from "@/components/projects/project-list";
import { getProjects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Projects",
  description: "Backend, DevOps, cloud-native, and Kubernetes projects.",
  pathname: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Projects"
        title="Backend and cloud-native projects"
        description="APIs, queues, Kubernetes workflows, and infrastructure tools built with operations in mind."
      />
      <div className="content-width">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
