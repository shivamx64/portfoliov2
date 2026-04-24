import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="content-width py-20">
      <div className="max-w-2xl space-y-5 border-t border-border/60 pt-8">
        <p className="eyebrow">404</p>
        <h1 className="font-heading text-3xl font-medium tracking-[-0.05em] text-foreground sm:text-4xl">
          This page does not exist.
        </h1>
        <p className="text-base leading-8 text-muted-foreground">
          The route might have moved, or the content may not be published yet.
        </p>
        <ButtonLink href="/" variant="outline">
          Return home
        </ButtonLink>
      </div>
    </div>
  );
}
