import Link from "next/link";

import { OfferCountdown } from "@/components/sections/flash-sale";
import { FLASH_EN } from "@/components/sections/offer-band";
import { Container } from "@/components/ui/container";
import { offer, offerIsLive, offerPage } from "@/config/offers";
import { whatsappLink } from "@/config/site";

/**
 * The strip on a product page whose product is in the current offer (owner,
 * 2026-11-12: "a small, heightened section, not a pop-up, 10% of the
 * viewport, showing that the item is on sale, with the countdown"). Yellow,
 * under the fixed header, before the product itself; the countdown ticks
 * on the client, everything else is static HTML. Renders nothing for a
 * product that is not on offer, and nothing once the offer has ended.
 */
export function OfferStrip({ slug }: { slug: string }) {
  if (!offerIsLive()) return null;
  const item = offer.items.find((entry) => entry.slug === slug);
  if (!item) return null;

  return (
    <aside
      aria-label={`${item.name} is in the ${offer.label}`}
      className="bg-surface border-deep mt-16 border-b sm:mt-20 print:hidden"
    >
      <Container className="flex min-h-[10svh] flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 leading-snug">
          <span className="flash-blink flash-blink-ink font-display rounded-full px-3 py-1 text-sm font-extrabold">
            {FLASH_EN.tab}
          </span>
          <span className="font-display text-lg font-extrabold sm:text-xl">
            {item.name} is on offer.
          </span>
          <span className="hidden text-sm sm:inline">
            {offer.label}, until the last day of the month.
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <OfferCountdown
            until={offer.until}
            units={FLASH_EN.units}
            ended={FLASH_EN.ended}
            compact
          />
          <Link href={offerPage} className="u-line text-sm font-semibold">
            See the sale
          </Link>
          <a
            href={whatsappLink(`the ${offer.label} price of ${item.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="u-line text-sm font-semibold"
          >
            Offer price on WhatsApp
          </a>
        </div>
      </Container>
    </aside>
  );
}
