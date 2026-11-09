import { Container } from "@/components/ui/container";
import { PeekLink } from "@/components/ui/peek-link";
import { linkPicture } from "@/config/link-pictures";
import { cn } from "@/lib/utils";

export type RelatedLink = {
  label: string;
  href: string;
  sub?: string;
  /** Overrides the picture found for the href. */
  picture?: string;
};

/**
 * "Keep going": the contextual links at the foot of a page (owner, 2026-11-09:
 * every page interlinked, the same on phones and desktops). Plain links in the
 * HTML, so crawlers follow them and nothing hides on a small screen.
 */
export function RelatedLinks({
  links,
  heading = "Keep going.",
  label = "Related",
  className,
}: {
  links: RelatedLink[];
  heading?: string;
  label?: string;
  className?: string;
}) {
  if (!links.length) return null;
  return (
    <section className={cn("py-14 sm:py-20", className)}>
      <Container>
        <p className="label-sh text-muted">{label}</p>
        <h2 className="font-display text-phi-3 mt-4 tracking-tight">
          {heading}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <PeekLink
                href={link.href}
                label={link.label}
                sub={link.sub}
                picture={link.picture ?? linkPicture(link.href)}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
