/**
 * FAQ content shape. A plain module (NOT "use client") so a server page
 * can build FAQPage JSON-LD from the same array the client section renders.
 * Each item is a direct-answer lead plus short points.
 */
export type FaqItem = {
  q: string;
  lead: string;
  points: string[];
};

/** The answer as one plain sentence run - for schema and prose contexts. */
export function faqAnswerText(item: FaqItem) {
  return [item.lead, ...item.points.map((point) => `${point}.`)].join(" ");
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
    })),
  };
}
