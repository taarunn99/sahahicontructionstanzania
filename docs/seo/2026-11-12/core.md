# Core pages: metadata rows (2026-11-12)

Registry: `src/config/seo/core.ts` (`coreSeo`, read by each page through
`coreRow(route)`). Every page sets `title.absolute`, `description` and an
`openGraph` block whose `title` equals the `<title>` (the three solutions
pages, `/sale` and `/specifier-pack` used to drop " | Sahihi" from og:title)
and whose `images` come from `resolveOg(route)` with `ogBase.images` as the
fallback until the cards exist.

Home keeps its `<title>` and description in `src/app/layout.tsx` and
`src/config/site.ts`; the row records them. `src/app/manifest.ts` now carries
the same description string. The home `openGraph` repeats the layout's share
words (brand and tagline, `siteConfig.description`) beside the card hook,
because Next replaces a parent's `openGraph` object wholesale.

| route | query | title | len | description | len | notes |
|---|---|---|---|---|---|---|
| `/` | construction chemicals Tanzania | Construction Chemicals in Tanzania - Mapei Distributor | 54 | Construction chemicals in Tanzania from Sahihi, authorized Mapei distributor: tile adhesives, waterproofing, epoxy flooring and concrete repair, Dar es Salaam. | 159 | Unchanged; from layout.tsx and site.ts. H1 carries the query. og:title stays the brand and tagline, as the layout had it |
| `/about` | Sahihi Construction Chemicals | Sahihi Construction Chemicals Limited - Dar es Salaam | 53 | Sahihi Construction Chemicals Limited, Dar es Salaam: authorized Mapei, Oriental Yuhong and X-Calibur distributor, stock in Mikocheni. Director Anil Sankaran. | 158 | Entity page; the licensed name leads. Director from the card (siteConfig.director) |
| `/contact` | Mapei dealer Dar es Salaam | Mapei Dealer in Dar es Salaam - Contact Sahihi for a Quote | 58 | Contact Sahihi Construction Chemicals, Mapei dealer on Coca-Cola Road, Dar es Salaam. WhatsApp, call or email for a Mapei, Oriental Yuhong or X-Calibur quote. | 158 | Research 01 section 1.9. "Dealer" is the searcher's word; authorization wording stays "authorized distributor". New eyebrow above the H1: "Mapei dealer · Dar es Salaam" |
| `/products` | construction chemicals products Tanzania | Construction Chemicals Products in Tanzania - Catalogue | 55 | Mapei, Oriental Yuhong, X-Calibur, CMCI, Vasa and BIHUI products from Sahihi, Dar es Salaam, sorted by the job: tiling, waterproofing, floors, repair, tools. | 157 | Not "Mapei products Tanzania" (a `/mapei` variant). New eyebrow above "What's the job?": "Construction chemicals products · Tanzania". stock: enquire (the page spans held and order-in lines) |
| `/projects` | Mapei projects Tanzania | Mapei Projects in Tanzania - Sites We Have Supplied \| Sahihi | 60 | Projects in Tanzania supplied with Mapei waterproofing, concrete repair, resin flooring and tile adhesives in 2025 and 2026. Filter by line or by product. | 152 | Eyebrow now "Mapei projects in Tanzania · 2025 to 2026" (`projectsPeriod`). Launch-gated (Q5) |
| `/sale` | Mapei offer Tanzania | Mapei Offer in Tanzania - November 2026 Flash Sale \| Sahihi | 59 | Mapei products on offer until 30 November 2026 from Sahihi, Dar es Salaam: tile adhesives, grouts, floor finishes, cleaners. No price printed: ask on WhatsApp. | 158 | Was 64 / 214. Static row dated to `src/config/offers.ts`; rewrite it with the next offer. The eyebrow ("Flash sale · until 30 November") and H1 live in `sale-stage.tsx`, not touched |
| `/specifier-pack` | construction chemicals specification Tanzania | Construction Chemicals Specification Tanzania - BOQ Clauses | 59 | BOQ clauses, declared standards and data sheet editions for every product Sahihi supplies in Tanzania. One spreadsheet for consultants and quantity surveyors. | 158 | Was 63 / 188. "BOQ clauses" is the variant (reports/: a TBA or NHC QS copies the clause). Eyebrow: "Construction chemicals specification · BOQ clauses · Tanzania" |
| `/solutions/waterproofing` | waterproofing Tanzania | Waterproofing Tanzania - Roofs, Basements, Tanks, Wet Areas | 59 | Which waterproofing for which part of the building: roofs, bathrooms, basements, tanks, pools, walls. Mapei, OYH and X-Calibur held in Dar es Salaam. Ask us. | 157 | Was 61 / 164. Eyebrow "Waterproofing · Tanzania" already carried the query |
| `/solutions/tile-installation` | tile adhesive Tanzania | Tile Adhesive Tanzania - Which Adhesive, Grout and Primer | 57 | Which tile adhesive, grout, primer and cleaner for which job: ceramic, porcelain, large tiles, outdoors, pools, stone. Mapei held in Dar es Salaam. Ask us. | 155 | Was 63 / 177. Eyebrow changed from "Tile installation · Tanzania" to "Tile adhesive · Tanzania" |
| `/solutions/concrete-repair` | concrete repair Tanzania | Concrete Repair Tanzania - Spalling, Cracks and Anchoring | 57 | Which product for which concrete repair: spalling, rusting steel, cracks, new onto old, floors, anchoring. Mapei and X-Calibur held in Dar es Salaam. Ask us. | 157 | Was 62 / 176. Eyebrow "Concrete repair · Tanzania" already carried the query |

All ten titles are 53-60 characters, all ten descriptions 152-159. No
price, no superlative, no banned phrase, hyphens only
(`node scripts/audit-copy.mjs`: clean).

## Open Graph cards

`scripts/build-og-cards.mjs` renders one 1200x630 PNG per built route with
`ImageResponse` from `next/og.js`, in plain Node, after `next build` and
never inside it:

```bash
next build
node scripts/build-og-cards.mjs            # public/og/*.png + src/config/og-manifest.json
node scripts/build-og-cards.mjs --force    # re-render everything
node scripts/build-og-cards.mjs --only /mapei,/sale --out /tmp/og-check   # dry run
```

`package.json` is frozen for this pass; the lead adds
`"assets:og": "node scripts/build-og-cards.mjs"`.

- Routes: every `.next/server/app/**/*.html` except `_not-found` and
  `_global-error`. Swahili pages share their English twin's card (`/sw` ->
  `/`, `/sw/mapei` -> `/mapei`, `/sw/mapei/<line>` -> `/mapei/<line>`).
- Output: `public/og/<route with / as __>.png` (home is `home.png`) and
  `src/config/og-manifest.json` as `{ "<route>": { url, alt } }`. The alt is
  the title with " | Sahihi" taken off, then ", Sahihi Construction
  Chemicals", under 125 characters, hyphens only. `resolveOg(route)` in
  `src/lib/seo.ts` reads the manifest.
- Idempotent and fast: a route whose PNG is newer than its HTML is skipped
  (about 0.07 s a card when rendered). A full run rebuilds the manifest from
  the build; `--only` merges into the existing one.
- The card: solid brand ground (Sahihi Blue for Mapei, OYH red, X-Calibur
  brick, CMCI green, BIHUI teal, Vasa red, Ink for core and blog pages), a
  Chalk panel with a Signal Yellow bar, the title in Montserrat ExtraBold at
  a size that fits (76 down to 30 px, wrapped by Satori), and the line
  "Sahihi Construction Chemicals · Dar es Salaam". The SERP suffix
  " | Sahihi" is left off the drawn title because that line already says it.
- Pictures, all existing files, nothing generated: Mapei and OYH cut-out
  pack shots (`assets/og-src/`) straight on the colour ground; BIHUI
  catalogue photographs (`public/products/bihui/`) and blog 3D posters
  (`public/models/blog/`) in a white box; hub and solution photographs
  (`public/images/`) cropped to the right-hand slot. A picture under 300 px
  on its long side, or a page without one (X-Calibur, CMCI products, `/sale`,
  `/specifier-pack`, `/blog`, `/bihui`), gets a full-width type card.
  Satori reads PNG, JPEG and SVG only, so webp sources go through sharp to a
  PNG data URL in memory.

For `docs/IMAGE-PROVENANCE.md` (the lead appends): Open Graph cards in
`public/og/` are composed by `scripts/build-og-cards.mjs` from pictures
already in the repo (manufacturer pack shots, BIHUI catalogue photographs,
the blog's 3D posters and the hub photographs logged above); nothing new is
generated.
