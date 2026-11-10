import { specifierCsv, specifierRows } from "@/lib/specifier-pack";

/** The specifier pack as one spreadsheet. Built at build time. No prices. */
export const dynamic = "force-static";

export function GET() {
  return new Response(specifierCsv(specifierRows()), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Sahihi specifier pack - BOQ clauses.csv"',
    },
  });
}
