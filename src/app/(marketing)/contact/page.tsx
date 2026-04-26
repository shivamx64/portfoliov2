import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/shared/page-header";
import { socialLinks } from "@/config/social";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: "Get in touch about backend, platform, or infrastructure work.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        eyebrow="Contact"
        title="Send the useful context"
        description="Backend roles, infra work, writing, or a system with an interesting failure story."
      />
      <section className="content-width grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <ContactForm />
        <aside className="h-fit space-y-5 border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:pl-6">
          <div className="space-y-2">
            <h2 className="font-heading text-xl font-medium tracking-[-0.04em] text-foreground">
              Direct channels
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              The form goes to email. These links are here if a direct path is easier.
            </p>
          </div>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}: {link.value}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
