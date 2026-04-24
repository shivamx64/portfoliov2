import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { CurrentFocusSection } from "@/components/home/current-focus-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { GithubActivitySection } from "@/components/home/github-activity-section";
import { HeroSection } from "@/components/home/hero-section";
import { PaperImplementationsSection } from "@/components/home/paper-implementations-section";
import { RecentBlogsSection } from "@/components/home/recent-blogs-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { experienceEntries } from "@/content/experience/experience";
import { HOME_COLLECTION_LIMITS } from "@/lib/constants";
import {
  getFeaturedPaperImplementations,
  getFeaturedProjects,
  getRecentBlogPosts,
} from "@/lib/content";

export default async function HomePage() {
  const [projects, papers, posts] = await Promise.all([
    getFeaturedProjects(HOME_COLLECTION_LIMITS.featuredProjects),
    getFeaturedPaperImplementations(
      HOME_COLLECTION_LIMITS.featuredPaperImplementations,
    ),
    getRecentBlogPosts(HOME_COLLECTION_LIMITS.recentPosts),
  ]);

  return (
    <>
      <HeroSection />
      <CurrentFocusSection />
      <ExperienceSection experience={experienceEntries} />
      <TechStackSection />
      <GithubActivitySection />
      <FeaturedProjectsSection projects={projects} />
      <PaperImplementationsSection papers={papers} />
      <RecentBlogsSection posts={posts} />
      <ContactCtaSection />
    </>
  );
}
