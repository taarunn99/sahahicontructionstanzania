import {
  HotspotMap,
  type HotspotEntry,
} from "@/components/sections/oyh/hotspot-map";
import { product, type Hotspot } from "@/config/oyh-below-grade";

/**
 * Resolves a hotspot's legend into what the map needs: each layer with
 * its OYH products (name, type, link, up to four printed values). Server
 * component; the map is the client island.
 */
export function HotspotSection({
  hotspot,
  valuesPerProduct = 4,
}: {
  hotspot: Hotspot;
  valuesPerProduct?: number;
}) {
  const entries: HotspotEntry[] = hotspot.legend.map((item) => ({
    n: item.n,
    layer: item.layer,
    products: (item.products ?? []).map((slug) => {
      const found = product(slug);
      return {
        slug,
        name: found.name,
        type: found.type,
        href: found.href ?? `#${slug}`,
        external: Boolean(found.href),
        values: (found.values ?? [])
          .slice(0, valuesPerProduct)
          .map((row) => ({ item: row.item, value: row.value })),
      };
    }),
  }));
  return (
    <HotspotMap
      id={`hotspot-${hotspot.id}`}
      title={hotspot.title}
      page={hotspot.page}
      picture={hotspot.picture}
      pins={hotspot.pins}
      entries={entries}
    />
  );
}
