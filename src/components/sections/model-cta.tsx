import { FlowButton } from "@/components/ui/flow-button";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The call to action under every 3D model and layer build-up (owner, 2026-11-09):
 * once the visitor has turned it, ask for it. Same on phones and desktops.
 */
export function ModelCta({
  topic,
  line = "Turned it, pulled it apart? Ask us for it.",
  className,
}: {
  /** What the WhatsApp message and the email are about. */
  topic: string;
  line?: string;
  className?: string;
}) {
  const mail = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Enquiry: ${topic}`)}`;
  return (
    <div
      className={cn(
        "border-deep/15 text-deep flex flex-col gap-4 rounded-2xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5",
        className,
      )}
    >
      <p className="leading-snug font-bold">{line}</p>
      <div className="flex flex-wrap items-center gap-3">
        <FlowButton href={whatsappLink(topic)}>Quote on WhatsApp</FlowButton>
        <a
          href={mail}
          className="inline-flex min-h-11 items-center font-bold underline underline-offset-4"
        >
          Email us
        </a>
      </div>
    </div>
  );
}
