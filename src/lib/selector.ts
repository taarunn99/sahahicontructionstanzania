import type {
  ResolvedPick,
  ResolvedPlace,
} from "@/components/sections/solutions/selector";
import { brandBySlug } from "@/config/brands";
import { productHref, products } from "@/config/catalogue";
import { packshot } from "@/config/packshots";
import type { SelectorPick, SelectorPlace } from "@/config/selector";
import { whatsappLink } from "@/config/site";

/**
 * Turns a selector config (src/config/*-selector.ts) into what the selector
 * component shows: the product's name, brand, type, page and pack shot. A
 * slug that is not in the catalogue fails the build.
 */
export function resolvePick(pick: SelectorPick): ResolvedPick {
  const product = products.find(
    (item) => item.brand === pick.brand && item.slug === pick.slug,
  );
  if (!product) {
    throw new Error(`selector: no product ${pick.brand}/${pick.slug}`);
  }
  return {
    name: product.name,
    brand: brandBySlug[pick.brand].name,
    type: product.type,
    href: productHref(product),
    image: packshot(pick.brand, pick.slug)?.src ?? null,
    quote: pick.quote,
  };
}

/** `ask(place)` is the WhatsApp topic for that place. */
export function resolvePlaces(
  places: SelectorPlace[],
  ask: (place: SelectorPlace) => string,
): ResolvedPlace[] {
  return places.map((place) => ({
    slug: place.slug,
    label: place.label,
    problem: place.problem,
    main: place.main.map(resolvePick),
    details: place.details.map(resolvePick),
    cautions: (place.cautions ?? []).map((caution) => ({
      ...resolvePick(caution),
      note: caution.note,
    })),
    whatsapp: whatsappLink(ask(place)),
  }));
}

/** How many different products a selector shows (cautions not counted). */
export function selectorProductCount(places: ResolvedPlace[]): number {
  return new Set(
    places.flatMap((place) =>
      [...place.main, ...place.details].map((pick) => pick.href),
    ),
  ).size;
}
