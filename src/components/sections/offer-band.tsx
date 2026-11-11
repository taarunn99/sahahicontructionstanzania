import Link from "next/link";

import { Container } from "@/components/ui/container";
import {
  ComicBurst,
  FlashTab,
  FlashTicker,
  OfferCountdown,
  type FlashCopy,
} from "@/components/sections/flash-sale";
import { FlowButton } from "@/components/ui/flow-button";
import { offer, offerIsLive, offerPage } from "@/config/offers";
import { whatsappLink } from "@/config/site";

/** English words for the flash pieces (flash-sale.tsx). Kept in this
 * server file: a plain object exported from a "use client" module reaches
 * a server component as a reference, not as the object. */
const FLASH_EN: FlashCopy = {
  tab: "Flash sale",
  bubble: {
    word: "Sale!",
    line: `${offer.items.length} Mapei products`,
    cta: "See the offer",
    close: "Close the sale bubble",
  },
  ticker: [
    "Flash sale",
    "Mapei products on offer",
    "Limited quantities",
    "Ends 30 November",
    "Ask for the offer price on WhatsApp",
  ],
  units: ["days", "hrs", "min", "sec"],
  ended: "The offer has ended",
};

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
  copy?: {
    label: string;
    heading: string;
    body: string;
    button: string;
    /** The sale page button. */
    page: string;
    flash: FlashCopy;
  };
  whatsappHref?: string;
}) {
  if (!offerIsLive()) return null;
  const flash = copy?.flash ?? FLASH_EN;
  const href = whatsappHref ?? whatsappLink(`the ${offer.label} on ${offer.brand}`);

  return (
    <section
      id="offer"
      aria-labelledby="offer-heading"
      className="bg-surface border-deep relative scroll-mt-20 border-y"
    >
      <FlashTab label={flash.tab} target="offer" bubble={flash.bubble} />
      <FlashTicker words={flash.ticker} />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.618fr] lg:gap-14">
          <div>
            <p className="label-sh inline-flex flex-wrap items-center gap-2.5">
              <span className="flash-blink flash-blink-ink font-display rounded-full px-3 py-1 font-extrabold">
                {flash.tab}
              </span>
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
            <OfferCountdown
              until={offer.until}
              units={flash.units}
              ended={flash.ended}
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <FlowButton href={offerPage}>
                {copy?.page ?? "See the sale page"}
              </FlowButton>
              <FlowButton href={href}>
                {copy?.button ?? "Get the offer price on WhatsApp"}
              </FlowButton>
            </div>
          </div>
          <div className="flex flex-col gap-10">
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
            {/* The burst, big, in the room under the product list (owner,
                2026-11-11: "here there would be a lot of space and make it
                bigger but dont overlap it on any button or tile"). In normal
                flow, so it can never sit on a chip or a button. Goes to the
                sale page. */}
            <ComicBurst
              id="band"
              href={offerPage}
              bubble={flash.bubble}
              cta={copy?.page ?? "See the sale page"}
              large
              className="w-72 max-w-full self-start [perspective:900px] sm:w-[26rem] lg:w-[32rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
