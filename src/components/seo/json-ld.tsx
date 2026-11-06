/**
 * Serialises one or more schema.org nodes as a single JSON-LD @graph.
 * `<` is escaped so a stray "</script>" in any value cannot close the tag.
 * Only emit schema that mirrors content visible on the same page.
 */
export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
