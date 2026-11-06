/**
 * Blog content shapes (DESIGN-HANDOFF.md section 14, extended on
 * 2026-11-06 with tables, lists and steps because the owner asked for
 * posts that carry data).
 *
 * A plain module: no React, no fs. Post metadata lives in
 * src/config/blog.ts, the words in src/content/blog/<slug>.ts.
 */

export type PostTable = {
  caption: string;
  head: string[];
  rows: string[][];
  /** Where the figures come from, e.g. "Mapei technical data sheets". */
  source?: string;
};

export type PostSection = {
  h2: string;
  /** Plain prose. Paragraphs split on blank lines. Inline links are
   *  [anchor](/path) and bold is **text**. */
  body: string;
  list?: string[];
  /** Numbered steps, for a how-to. */
  steps?: string[];
  table?: PostTable;
  /** A short boxed note under the section. */
  note?: string;
};

export type PostContent = {
  /** The direct answer, 40 to 80 words, plain prose. First paragraph. */
  answer: string;
  sections: PostSection[];
  faq: { q: string; a: string }[];
  /** Every external fact in the post traces to one of these. */
  sources: { label: string; url: string }[];
};

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Words in a post, for the read time and the Article schema. */
export function wordCount(content: PostContent) {
  const text = [
    content.answer,
    ...content.sections.flatMap((section) => [
      section.h2,
      section.body,
      ...(section.list ?? []),
      ...(section.steps ?? []),
      section.note ?? "",
      ...(section.table ? section.table.rows.flat() : []),
    ]),
    ...content.faq.flatMap((item) => [item.q, item.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
