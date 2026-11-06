import { BrandButton } from "@/components/ui/brand-button";
import { Container } from "@/components/ui/container";
import { siteConfig, whatsappLink } from "@/config/site";

/**
 * Closing call to action: a Mint rounded band with one primary button and
 * the direct lines as real links. It is the LAST section of a page, so it
 * stays opaque, full-width and in normal flow (the fixed footer reveal
 * depends on that).
 */
export function CtaBand({
  label = "Enquiries",
  heading,
  body,
  topic,
  button = "Send an enquiry",
  whatsappHref,
}: {
  label?: string;
  heading: string;
  body: string;
  /** Completes "I would like to enquire about ..." in the WhatsApp opener. */
  topic?: string;
  button?: string;
  /** Replaces the English WhatsApp opener (Swahili pages). */
  whatsappHref?: string;
}) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="bg-line text-foreground grain-sh relative overflow-hidden rounded-3xl">
          <div className="relative z-10 grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.618fr_1fr] lg:items-end lg:p-20">
            <div>
              <p className="label-sh text-muted">{label}</p>
              <h2 className="font-display text-phi-3 mt-5 max-w-2xl tracking-tight text-balance">
                {heading}
              </h2>
              <p className="text-muted mt-6 max-w-xl leading-relaxed">{body}</p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <BrandButton href="/contact" size="lg" variant="solid">
                {button}
              </BrandButton>
              <ul className="space-y-1">
                <li>
                  <a
                    href={whatsappHref ?? whatsappLink(topic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-line inline-block py-2"
                  >
                    WhatsApp {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="u-line inline-block py-2"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
