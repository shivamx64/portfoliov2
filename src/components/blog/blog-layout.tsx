import { BlogSidebar } from "@/components/blog/blog-sidebar";

type BlogLayoutProps = {
  children: React.ReactNode;
  activeCategory?: string;
};

export function BlogLayout({ children, activeCategory }: BlogLayoutProps) {
  return (
    <div className="content-width-wide grid gap-8 pb-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10">
      <BlogSidebar activeCategory={activeCategory} />
      <main className="min-w-0">{children}</main>
    </div>
  );
}
