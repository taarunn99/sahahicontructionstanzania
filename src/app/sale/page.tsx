import type { Metadata } from "next";
import Link from "next/link";

import { FlashTicker, OfferCountdown } from "@/components/sections/flash-sale";
import { OfferComposer } from "@/components/sections/sale/offer-composer";
import { SaleStage, type SaleItem } from "@/components/sections/sale/sale-stage";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { products } from "@/config/catalogue";
import { offer, offerIsLive, offerPage } from "@/config/offers";
import { packshot } from "@/config/packshots";
import { coreRow } from "@/config/seo/core";
import { siteConfig, whatsappLink } from "@/config/site";
import { ogBase, resolveOg } from "@/lib/seo";

/**
 * THE SALE PAGE - owns "Mapei offer Tanzania" (SEO-STRATEGY.md 5.1a). The
 * band on the home page sends people here (owner, 2026-11-11: "a
 * call-to-action button ... that should lead to a specific page that is the
 * sale page ... crazy animation ... I want the products to pop").
 *
 * NO PRICES (standing ruling). The page names what is on offer, in 3D and in
 * a plain list, and sends the visitor to WhatsApp for the offer price with
 * the packs and quantities already in the message.
 *
 * Pictures are the manufacturer's own pack shots (src/config/packshots.ts);
 * a product without one is drawn as type. After the offer's last day the
 * page says so and points at the catalogue.
 */

// Title and description: src/config/seo/core.ts (dated to this offer; the
// row is rewritten with the next one).
const ROW = coreRow("/sale");
const TITLE = ROW.titleOverride;
const DESCRIPTION = ROW.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: offerPage },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: offerPage,
    images: resolveOg(offerPage) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Sale", href: offerPage },
];

const ticker = [
  "Flash sale",
  `${offer.items.length} Mapei products`,
  "Limited quantities",
  "Ends 30 November",
  "Ask for the offer price on WhatsApp",
];

export default function SalePage() {
  const live = offerIsLive();
  const items: SaleItem[] = offer.items.map((item) => {
    const product = item.slug
      ? products.find((p) => p.slug === item.slug)
      : undefined;
    const shot = item.picture ? packshot("mapei", item.picture) : null;
    return {
      name: item.name,
      type: product?.type ?? "Mapei product",
      href: item.href,
      // The cut-out for the lineup; the flat pack shot where none exists.
      src: shot?.cutout ?? shot?.src ?? null,
    };
  });
  const whatsapp = whatsappLink(`the ${offer.label} on ${offer.brand}`);

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "ItemList",
            name: `${offer.brand} ${offer.label}`,
            numberOfItems: offer.items.length,
            itemListElement: offer.items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              ...(item.href ? { url: `${siteConfig.url}${item.href}` } : {}),
            })),
          },
        ]}
      />

      {live ? (
        <>
          <FlashTicker words={ticker} />
          <SaleStage
            items={items}
            heading={`${offer.items.length} ${offer.brand} products on offer.`}
            until="30 November"
          />
        </>
      ) : (
        <section className="bg-surface border-deep border-b">
          <Container className="pt-28 pb-16 sm:pt-36 sm:pb-24">
            <Breadcrumb items={crumbs} />
            <h1 className="font-display text-phi-2 mt-8 max-w-3xl tracking-tight text-balance">
              The {offer.label} has ended.
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed">
              The next one is announced on the home page. Everything we stock
              is in the catalogue, with data sheets and calculators.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FlowButton href="/mapei">Mapei in Tanzania</FlowButton>
              <FlowButton href="/products">All products</FlowButton>
            </div>
          </Container>
        </section>
      )}

      <section
        id="offer-list"
        className="border-deep scroll-mt-20 border-y bg-(--pop-red) text-white"
      >
        <Container className="py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <p className="label-sh opacity-90">
                {offer.label} · {offer.brand} · limited quantities
              </p>
              <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
                {live ? "Every pack on the list." : "What was on the list."}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed opacity-90">
                Tap a name for its data sheet, coverage calculator and pack
                sizes. The offer price comes by WhatsApp: send the packs and
                the quantities and we reply the same day.
              </p>
              {live && (
                <div className="[&_.bg-deep]:bg-white [&_.bg-deep]:text-deep">
                  <OfferCountdown
                    until={offer.until}
                    units={["days", "hrs", "min", "sec"]}
                    ended="The offer has ended"
                  />
                </div>
              )}
              <FlowButton href={whatsapp} className="mt-7 border-white text-white">
                Get the offer price on WhatsApp
              </FlowButton>
            </div>
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {items.map((item, index) => {
                const inner = (
                  <>
                    <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                      {item.src ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={item.src}
                          alt={`${item.name} pack`}
                          width={56}
                          height={56}
                          loading="lazy"
                          className="size-full object-contain"
                        />
                      ) : (
                        <span className="bg-surface text-deep font-display size-full p-1 text-center text-[0.5rem] leading-tight font-extrabold">
                          Mapei
                        </span>
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] tracking-[0.14em] uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block text-sm leading-tight font-semibold">
                        {item.name}
                      </span>
                    </span>
                  </>
                );
                const classes =
                  "flex min-h-16 items-center gap-3 rounded-2xl border border-white/30 bg-white/10 p-2 transition-colors";
                return (
                  <li key={item.name}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`${classes} hover:bg-white hover:text-deep`}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <span className={classes}>{inner}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      {live && (
        <section id="order" className="bg-surface scroll-mt-20 py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">Your order, your words</p>
            <h2 className="font-display text-phi-3 mt-4 mb-10 max-w-3xl tracking-tight text-balance">
              Pick the packs. We reply with the offer price.
            </h2>
            <OfferComposer
              items={items.map(({ name, src }) => ({ name, src }))}
              label={`${offer.brand} ${offer.label}`}
            />
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20">
        <Container>
          {live && <Breadcrumb items={crumbs} />}
          <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
            Offer on the named products only, while stocks last, until{" "}
            {offer.until === "2026-11-30" ? "30 November 2026" : offer.until}.
            Prices are given on request by WhatsApp or email and are not
            published on this site. Product names are trademarks of Mapei
            S.p.A.; pictures are Mapei&apos;s own pack shots.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href="/mapei">Mapei in Tanzania</FlowButton>
            <FlowButton href="/products">All products</FlowButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
