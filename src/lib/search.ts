/**
 * Site search - pure functions shared by the server (which builds the
 * index from the catalogue) and the client search box (which filters it).
 */
export type SearchEntry = {
  label: string;
  sub: string;
  href: string;
  group: string;
  /** Lower-cased haystack, prebuilt once on the server. */
  keywords: string;
};

export function searchEntry(
  label: string,
  sub: string,
  href: string,
  group: string,
  extra = "",
): SearchEntry {
  return {
    label,
    sub,
    href,
    group,
    keywords: `${label} ${sub} ${group} ${extra}`.toLowerCase(),
  };
}

/** Every query word must appear; label-prefix matches rank first. */
export function searchEntries(
  index: SearchEntry[],
  query: string,
  limit = 12,
): SearchEntry[] {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (words.join("").length < 2) return [];
  const first = words[0];
  return index
    .filter((entry) => words.every((word) => entry.keywords.includes(word)))
    .sort(
      (a, b) =>
        Number(b.label.toLowerCase().startsWith(first)) -
        Number(a.label.toLowerCase().startsWith(first)),
    )
    .slice(0, limit);
}
