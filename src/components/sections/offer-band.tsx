import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { offer, offerIsLive } from "@/config/offers";
import { whatsappLink } from "@/config/site";

/**
 * The offer band on the home page (owner, 2026-11-06: "november offer,
 * just highlight it by the home page"). A Yellow stage straight under the
 * hero: what is on offer, by name, and one button to WhatsApp for the
 * offer price. No price is printed (src/config/offers.ts).
 * Server component; renders nothing once the offer's last day has passed.
 */
export function OfferBand({
  copy,
  whatsappHref,
}: {
  /** Swahili pages pass their own words; the products stay as named. */
  copy?: { label: string; heading: string; body: string; button: string };
  whatsappHref?: string;
}) {
  if (!offerIsLive()) return null;

  return (
    <section
      aria-labelledby="offer-heading"
      className="bg-surface border-deep border-y py-12 sm:py-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.618fr] lg:gap-14">
          <div>
            <p className="label-sh inline-flex items-center gap-2.5">
              <span
                aria-hidden
                className="bg-deep inline-block size-2 rounded-full"
              />
              {copy?.label ?? offer.label} · {offer.brand}
            </p>
            <h2
              id="offer-heading"
              className="font-display text-phi-3 mt-5 tracking-tight text-balance"
            >
              {copy?.heading ??
                `${offer.items.length} ${offer.brand} products on offer this month.`}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed">
              {copy?.body ??
                "Limited quantities, until the end of November. Send us the products and the quantities and we reply with the offer price."}
            </p>
            <FlowButton
              href={
                whatsappHref ??
                whatsappLink(`the ${offer.label} on ${offer.brand}`)
              }
              className="mt-7"
            >
              {copy?.button ?? "Get the offer price on WhatsApp"}
            </FlowButton>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {offer.items.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-4 text-sm"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="border-deep inline-flex min-h-11 items-center rounded-full border px-4 text-sm">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
