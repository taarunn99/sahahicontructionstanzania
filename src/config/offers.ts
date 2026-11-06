import { productHref, products } from "@/config/catalogue";

/**
 * THE CURRENT OFFER - from the owner's sheet "SPECIAL OFFERS", November
 * 2026 (assets/source/owner-supplied/oyh/special-offer-2026-11.pdf).
 *
 * NO PRICES. The sheet carries prices and stock quantities; neither is
 * published (standing owner ruling: this site never shows a price). The
 * page names the products on offer and sends the visitor to WhatsApp for
 * the offer price.
 *
 * The band shows only until `until` (checked when the site is built), so
 * an old offer cannot outlive its month on a fresh deploy. Replace this
 * file's contents for the next offer, or empty `items` to remove the band.
 *
 * Four lines on the sheet are not in the catalogue yet (no page): they are
 * listed by the sheet's own name, without a link.
 */

type OfferItem = { name: string; href: string | null };

const inCatalogue = (slug: string): OfferItem => {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`offers: unknown product "${slug}"`);
  return { name: product.name, href: productHref(product) };
};
const named = (name: string): OfferItem => ({ name, href: null });

export const offer = {
  label: "November offer",
  brand: "Mapei",
  /** Last day of the offer, ISO date. */
  until: "2026-11-30",
  items: [
    inCatalogue("adesilex-pg2-tg"),
    inCatalogue("mapegrout-t60"),
    named("Mapefill SP ME"),
    named("Mapegrout T 80"),
    named("Planigrout 300 ME"),
    inCatalogue("mapegrout-me05"),
    inCatalogue("adesilex-p7"),
    inCatalogue("kerabond-t"),
    inCatalogue("keracolor-ff"),
    named("Ultracolor Plus"),
    inCatalogue("mapecoat-dw-25"),
    inCatalogue("mapefloor-fc-200-me"),
    inCatalogue("mapefloor-pu-410"),
    inCatalogue("mapefloor-finish-415-me"),
    inCatalogue("mapefloor-finish-450-me"),
    inCatalogue("primer-sn"),
    inCatalogue("ultracare-stain-protector-w-plus"),
    inCatalogue("ultracare-hd-cleaner"),
    inCatalogue("ultracare-multicleaner"),
    inCatalogue("lignobond"),
    inCatalogue("triblock-p"),
    inCatalogue("ultraplan-eco-20"),
    inCatalogue("mapefibre-ns-12"),
    inCatalogue("antipluviol"),
    inCatalogue("mapefix-ep-50"),
  ] as OfferItem[],
};

/** True while the offer is running, at build time. */
export const offerIsLive = () =>
  offer.items.length > 0 && new Date() <= new Date(`${offer.until}T23:59:59`);
