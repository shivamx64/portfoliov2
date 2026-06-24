import { BlogSidebar } from "@/components/blog/blog-sidebar";

type BlogLayoutProps = {
  children: React.ReactNode;
  activeCategory?: string;
};

export function BlogLayout({ children, activeCategory }: BlogLayoutProps) {
  return (
    <div
      className="
        content-width-wide 
        grid 
        grid-cols-1 
        gap-6 
        pb-10 
        sm:gap-8 
        lg:grid-cols-[240px_minmax(0,1fr)] 
        lg:gap-10
      "
    >
      {/* Sidebar */}
      <aside className="order-2 lg:order-1">
        <div className="lg:sticky lg:top-24">
          <BlogSidebar activeCategory={activeCategory} />
        </div>
      </aside>

      {/* Main content */}
      <main className="order-1 min-w-0">
        {children}
      </main>
    </div>
  );
}