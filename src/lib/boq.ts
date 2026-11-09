/**
 * BOQ clause text for a product page (owner, 2026-11-09).
 *
 * A quantity surveyor pastes this into a bill of quantities. It is built
 * only from what the page already shows: the product's type and name, the
 * standards and classes as the data sheet states them, the theoretical
 * consumption, and the data sheet edition. Nothing is added.
 *
 * - "or approved equivalent": public specifications in Tanzania must not
 *   rest on a brand name alone (Public Procurement Regulations 2024, reg. 21),
 *   so the clause names the product as one compliant example.
 * - No rate, no amount, no price: prices are quoted, never published.
 * - CMCI is never worded as the maker.
 */

export type BoqInput = {
  /** Brand as shown on the page, or null when the brand is not the maker. */
  maker: string | null;
  name: string;
  type: string;
  standards: { standard: string; value: string }[];
  consumption?: string;
  edition?: string;
};

const clean = (text: string) =>
  text
    .replace(/[\u2010-\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

function standardText({
  standard,
  value,
}: {
  standard: string;
  value: string;
}) {
  const v = clean(value);
  if (!v) return clean(standard);
  if (/^in compliance with$/i.test(v))
    return `${clean(standard)} (compliance stated)`;
  return `${clean(standard)} ${v}`;
}

/** Null for tools: they are bought, not written into a bill as work. */
export function boqClause(input: BoqInput): string | null {
  const type = clean(input.type);
  if (/\btool\b/i.test(type)) return null;
  const product =
    input.maker && !input.name.startsWith(input.maker)
      ? `${input.maker} ${input.name}`
      : input.name;
  // Admixtures, fibres, sands and cleaners are used, not applied.
  const verb = /admixture|additive|fibre|sand|cleaner/i.test(type)
    ? "Supply and use"
    : "Supply and apply";
  const standards = input.standards
    .filter((s) => s.standard.trim())
    .map(standardText)
    .filter((s, i, all) => all.indexOf(s) === i);

  // Lower-case the type's first letter, but never an acronym ("HDPE ...").
  const lead = /^[A-Z][a-z]/.test(type)
    ? `${type.charAt(0).toLowerCase()}${type.slice(1)}`
    : type;
  const sheet = `${input.maker ? `the current ${input.maker}` : "the manufacturer's current"} technical data sheet${
    input.edition ? `, edition ${clean(input.edition)} or later` : ""
  }`;
  // Only a true rate ("kg/m²", "l/m"), never a pack or roll size.
  const consumption =
    input.consumption && input.consumption.includes("/")
      ? clean(input.consumption)
      : null;

  const parts = [
    `${verb} ${lead}: ${product}, or approved equivalent${
      standards.length > 0
        ? ` meeting the standards and classes declared in its data sheet: ${standards.join("; ")}`
        : " with the same properties as declared in its technical data sheet"
    }.`,
    consumption
      ? `Theoretical consumption as stated by the manufacturer: ${consumption}.`
      : null,
    `Substrate preparation and application strictly to ${sheet}. Materials delivered in the manufacturer's sealed original packaging, labelled with the batch number.`,
  ];
  return parts.filter(Boolean).join(" ");
}

/** One BOQ row for a spreadsheet: no rate or amount column. */
export function boqCsv(clause: string): string {
  const cell = (text: string) => `"${text.replace(/"/g, '""')}"`;
  return [
    ["Item", "Description", "Unit", "Quantity"].map(cell).join(","),
    ["", clause, "", ""].map(cell).join(","),
  ].join("\r\n");
}
