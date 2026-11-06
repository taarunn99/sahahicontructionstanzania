import manifest from "@/config/packshots.json";

/**
 * The manufacturers' own pack shots (scripts/build-packshots.mjs).
 * Never generated. A product with no official picture returns null and the
 * page shows its name in type instead.
 */
export type Packshot = { src: string; width: number; height: number };

const shots = manifest as Record<
  string,
  Record<string, Packshot & { source: string | null }>
>;

export function packshot(brand: string, slug: string): Packshot | null {
  const found = shots[brand]?.[slug];
  return found
    ? { src: found.src, width: found.width, height: found.height }
    : null;
}
