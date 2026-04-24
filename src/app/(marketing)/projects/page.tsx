import { PageHeader } from "@/components/shared/page-header";
import { ProjectList } from "@/components/projects/project-list";
import { getProjects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Projects",
  description: "Selected engineering projects across platform tooling, systems experiments, and technical writing infrastructure.",
  pathname: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Projects"
        title="Engineering work with room for depth"
        description="A growing collection of platform tooling, systems experiments, and personal infrastructure projects."
      />
      <div className="content-width">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
