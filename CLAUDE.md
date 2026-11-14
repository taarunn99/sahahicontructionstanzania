# CLAUDE.md - sahihicc.com

Site for **Sahihi Construction Chemicals Limited** (Dar es Salaam,
Tanzania): authorized distributor of Mapei, Oriental Yuhong and
X-Calibur. A catalogue site in the gcbuae.com design system.

@AGENTS.md

## Start of every session

1. Read `GOVERNANCE.md`. It is binding.
2. Check `docs/OPEN-QUESTIONS.md` for anything the owner has answered
   since; an answered question usually unblocks a phase.
3. Before a new page: find its row in `SEO-STRATEGY.md` section 5. If it
   has no row, it does not get built until it has one.

## The rules that are easiest to break

- **No prices. Anywhere.** The owner's price lists are source material
  for what is stocked, nothing more. They are gitignored.
- **No invented facts.** Technical values come from manufacturer data
  sheets; stock and packs from the owner's lists; company facts from the
  licence, the card and the letter. When sources disagree, publish the
  data sheet value and log the conflict. When unsure, leave it out.
- **No long dashes.** Hyphen only. `scripts/audit-copy.mjs` enforces it.
- **The line colour is never text.** `text-line` fails the audit.
- **The first screen is static** and the LCP is never faded.
- **Do not use a browser to judge visuals.** Run `npm run check` and
  `scripts/lighthouse.sh`, then hand over. The owner reviews.
- **Flag heavy things before building them**, Three.js above all.
- **Fix exactly what the owner points at.** Nothing wider.
- **Ask with multiple-choice options**, not prose.

## State on 2026-11-05

- Built: `/`, `/products`, `/about`, `/contact`, and the Mapei cluster:
  `/mapei` hub, five line pillars, 47 product pages. Each product page
  has Mapei's own description, uses and limits, technical data, a
  coverage calculator and the official data sheet as a PDF.
- Built later on 2026-11-05, after the owner said the site had "nothing
  creative, interactive or playful": the interactive layer.
  `/projects` (filterable library from the owner's sheet, launch-gated,
  see `docs/DEPLOY-CHECKLIST.md` 1b); on the home page a scroll-driven
  lines dial, a draggable project strip, a WhatsApp enquiry composer and a
  hero drawing that assembles with the scroll; and one signature element
  per Mapei line in `src/components/sections/signature/` (notch and
  coverage, the pour, defect map, thickness gauge, and the Three.js
  build-up on waterproofing). The owner has not reviewed these yet.
- Lighthouse mobile (applied throttling): 100 on every page measured.
- Product page content is in `src/content/mapei/<slug>.json`, extracted
  verbatim from the data sheets in `public/tds/mapei/`. Calculator models
  are in `src/config/mapei-coverage.ts`. `npm test` checks both against
  the data sheet text and against the tables Mapei prints.
- Built 2026-11-06: `/x-calibur` hub and six product pages (five with
  X-Calibur's data sheet and a calculator); 44 official Mapei pack shots
  (`npm run assets:packshots`, never generated).
- Not built: `/price-list`, solution pillars, the CMCI hub, training.
- Where the files are: `~/dev/sahihicc`, reached from VS Code through the
  symlink `~/Desktop/sahihiconstructiontanzania`. Do not open other apps.
- Owner decisions on 2026-11-06: palette **Bahari Solid** ("drop the
  pastel colour idea, I want solid colours ... popping just like the
  logo"): Ink text, solid Sahihi Blue / Tick Green / Signal Yellow stages
  from the logo, Chalk ground; the footer is the only dark ground. Product
  pages follow the manufacturer's own product page (pack shot card, title
  in the manufacturer's colour, pill Download) through one template,
  `src/components/sections/product/product-detail.tsx`, used by Mapei and
  X-Calibur. The named competitor is Nabaki (docs/research/15).
- Later on 2026-11-06: headings are **Montserrat ExtraBold** (the thin
  serif is gone; body stays Manrope); text on Blue and Green stages is
  **white**, automatically (rules under `:root` in `globals.css`), so the
  Blue is `#0078A8` and the Green `#0F7D1A`; the home hero is a solid Blue
  stage with a Three.js tiled floor
  (`src/components/sections/hero/`, loaded on first interaction); the
  logo's tick-and-sun turns with the scroll, bottom left on every page
  (`src/components/layout/scroll-mark.tsx`); the header is a solid Chalk
  bar on every page.
- Also 2026-11-06: the home page ends with the contact card
  (`src/components/sections/contact-card.tsx`: headline, email, three
  pills, the logo's yellow sun rising from the edge), replacing the
  WhatsApp enquiry composer there (`enquiry-composer.tsx` is kept, unused).
  The director was removed at the owner's request, then named again later the
  same day (see below).
- Third round, 2026-11-06:
  - **Oriental Yuhong** hub and five product pages (`/oriental-yuhong`),
    from the owner's price list and five OYH data sheets; pack pictures
    and application photos are OYH's own, taken out of those data sheets.
  - **Brand palettes**: a `brand-<slug>` class on `<main>` re-points the
    stage colours (OYH red/wine/gold, X-Calibur brick red/grey, CMCI
    greens, BIHUI teal; Mapei keeps Sahihi's). See `globals.css`.
  - **Flow Button** (`src/components/ui/flow-button.tsx`) is the main call
    to action everywhere; `BrandButton` is now an alias for it.
  - **Offer band** on the home page from `src/config/offers.ts` (November
    2026, Mapei, names only, NO prices; hides itself after 2026-11-30).
  - **Contact card** headline fills with the scroll, then a logo-colour
    gradient flows across it; the card is the dark Ink ground.
  - **3D product viewer** (`src/components/media/model-viewer.tsx`): photo
    first, GLB on request. Pilot models for BIHUI tools are in
    `assets/source/bihui-3d/pilot/` (Tripo H3.1, 9 credits, about 3 MB each).
  - **Blog**: `/blog` with 22 posts (`src/config/blog.ts`, `src/content/blog/`),
    research in `docs/research/blog/01..10`, a 3D or interactive hero on every
    post. Rows in `SEO-STRATEGY.md` 5.4.
  - **BIHUI**: `/bihui` and 81 tool pages from `src/config/bihui-catalogue.json`
    (`src/config/bihui.ts` holds the fact rules: doubtful rows show the code
    without a size, two pictures withheld); 3D per tool in
    `src/config/bihui-models.json`. Open items in `docs/OPEN-QUESTIONS.md` Q19.
  - The home page build-up drawing now EXPANDS with the scroll (closed floor to
    labelled layers), the owner's correction of 2026-11-06.
  - PARKED by the owner ("leave it for now"): the two authorisation
    certificates on the About page (no such files were supplied).
- Also 2026-11-06:
  - **BIHUI 3D final:** 75 of 81 tools have a model. Left as pictures:
    concrete-grinder-working-stand and water-cooling-parts (picture withheld),
    floor-protector, carpet-protector, tile-leveling-base (no model), and
    diamond-hand-pad (model looked wrong, in `assets/source/bihui-3d/rejected/`).
  - **Swahili:** real pages at `/sw`, `/sw/mapei` and five `/sw/mapei/<line>`
    (copy in `src/config/sw.ts`, written by Claude at the owner's request; pairs
    and hreflang in `src/config/sw-routes.ts`). The EN / SW switch
    (`src/components/layout/language-switch.tsx`) is in the header from `sm` up
    and in the menu on phones: it goes to the real page where there is one and
    uses Google Translate elsewhere. English is the default; Google's script
    loads only on a translated page. The root `<html>` stays `lang="en"` in the
    static HTML and `main`, header and footer carry `lang="sw"`. Live tools and
    calculators carry `translate="no"`, see GOVERNANCE section 7.
- Fourth round, 2026-11-06:
  - **`/products`** is minimal and interactive: job tiles, brand filter, one
    draggable shelf per line (`src/components/sections/catalogue/`). A card is
    picture, name, one line (`src/config/product-one-liners.ts`) and Explore.
    No technical data on that page; it lives on the product pages.
  - **`/about`** is one magazine issue (`src/components/sections/about/magazine.tsx`,
    GSAP and Motion): cover, contents, feature, photo essay, pinned spreads,
    numbers, masthead.
  - **Director named** on `/about` (Anil Sankaran, from the card): masthead,
    Person schema, `employee` on the Organization, `siteConfig.director`. Only
    the director. No portrait until `docs/OPEN-QUESTIONS.md` Q12 is answered.
  - **Scroll** (`src/providers/scroll-memory.tsx`): a link opens a page at the
    top; back, forward and reload return to where the visitor left it.
  - `.vscode/settings.json` makes Source Control find the repo through the
    Desktop symlink.
- Fifth round, 2026-11-07:
  - **X-Calibur** now seven products from the owner's seven data sheets. Renamed
    from the price list: X-Tech Bond is X-Tech SBR Bond, X-Seal PG is X-Seal PS800,
    X-Seal Primer is X-Seal Universal Primer. X-Prime GP2 is new.
  - **CMCI**: `/cmci` and eight product pages (`src/config/cmci.ts`,
    `src/content/cmci/`), three lines only: petrochemical, commercial, tunnels.
    CMCI is never worded as the maker (GOVERNANCE). Each page offers the
    manufacturer's data sheet as an unaltered PDF from `public/tds/cmci/` (owner,
    2026-11-07). The sheets print the manufacturer's name; page copy does not.
- Sixth round, 2026-11-07 (not yet reviewed by the owner):
  - **Fire rated cement:** `/cmci/fire-rated-cement`, heat stage, Three.js beam
    (`src/components/three-d/fire-beam*`); `HeatBand` on `/cmci`, CMCI product pages and
    `/products` (`src/components/sections/cmci/heat.tsx`).
  - **Vasa:** `/vasa`, `/vasa/spc-flooring`, `/vasa/lvt-flooring`, `/vasa/wall-panels`
    (`src/config/vasa.ts`, 71 decors), on `/products` too.
  - **OYH:** `/oriental-yuhong/hdpe-waterproofing`, product `pmh-3080-plus`,
    `/oriental-yuhong/sports-flooring`. Shared 3D: `src/components/three-d/layer-stack*`.
    `useLazyScene` starts these on scroll, on phones too.
  - **Tanzanite Bridge** is the first project. Open items: `docs/OPEN-QUESTIONS.md` Q21.
  - Higgsfield floor: keep 100 credits, 80 at the very least.
- 2026-11-09: sports manual cut into five per-system PDFs (`public/tds/oriental-yuhong/sports/`);
  Tanzanite Bridge = OYH bitumen membrane; PMH, Vasa and sports held in Dar es Salaam. Four OYH
  products have 3D models (`src/config/oyh-models.json`, viewer `frontOnly`), 45 credits,
  132.75 left. Sealant model rejected.
- 2026-11-09, owner's "Nazrul" folder: `/oriental-yuhong/sports-flooring` gained an acrylic
  court (seven systems), a "which one where" chooser, OYH's three construction films with
  steps (`sports-films.tsx`, loops play only in view; full film loads on play), a material
  calculator in kg and packs (`src/config/oyh-sports.ts`, prices dropped from the xlsx),
  site and drying data from the two guides, and the brochure and guides as downloads.
  Owner answers (Q22): PSV-201; acrylic, EPDM and turf ordered per job, 3-5 days.
- Same day: one page per sports system, `/oriental-yuhong/sports-flooring/<system>` (seven,
  `[system]/page.tsx`); data in `src/config/oyh-sports-systems.ts` (moved out of the hub).
- Seventh round, 2026-11-09 (not yet reviewed by the owner):
  - **3D call to action** (`src/components/sections/model-cta.tsx`) under every 3D model and
    layer build-up; a **sports flooring shelf** on `/products`.
  - **Interlinking:** `RelatedLinks` blocks on Vasa, HDPE, contact, about, blog categories,
    BIHUI tools and the sports pages; "Systems" in the desktop mega panel, the phone menu
    and the footer; brands added to the phone menu; a contents list on phone blog posts.
    Cards are `PeekLink` (`src/components/ui/peek-link.tsx`): a round picture on every card,
    a popup circle that follows the mouse (pictures by href in `src/config/link-pictures.ts`).
  - **Footer** columns side by side; the fixed reveal runs only when the footer fits the
    window, otherwise it scrolls in flow.
  - **404** with the logo's tick and sun as the "0" (`lost-mark.tsx`), two buttons only.
  - **Deploy files:** `error.tsx`, `global-error.tsx`, `manifest.ts`, `/sitemap.txt`, 301s and
    security and cache headers in `next.config.ts`, Meta Pixel off until
    `NEXT_PUBLIC_META_PIXEL_ID` is set (`src/components/analytics/meta-pixel.tsx`). No
    `loading.tsx`: it caused CLS 0.6; the route transition is the loader.
  - **OYH East Africa:** `/oriental-yuhong` targets "OYH East Africa" (SEO-STRATEGY 5.1).
  - **Company profile** as a flip book on home and `/products` (`profile-book.tsx`), PDF in
    `public/tds/`.
- 2026-11-12, Search Console "new reasons" emails: none was an error (see
  `docs/seo/2026-11-12/gsc-indexing.md`, with Google's docs, practitioner practice and a
  page audit beside it). Done: every PDF under `public/tds/` sends `Link: <its page>;
  rel="canonical"` (`scripts/build-canonical-headers.mjs` writes
  `src/config/canonical-headers.json`, `npm run check` fails if stale); `X-Robots-Tag:
  noindex` on `/_next/static`, `/models`, the feed, manifest and favicon (never on HTML,
  never robots.txt); the `vercel.app` alias 308s to www. The real indexing pattern is the
  BIHUI template (150-300 words, 60-73% shared sentences, half indexed); "Product
  snippets: offers/review/aggregateRating" on every product page is the known cost of
  no prices (SEO-STRATEGY 7). Never click "Validate fix" or "Request indexing" without
  the owner's yes. Owner's levers the same day: every BIHUI tool page gained a written
  "What it is for" note with the products it is used with and its guides
  (`src/config/bihui-uses.json`; Claude-written trade use, no fact beyond the catalogue
  row), product pages gained "Tools for this job" and posts "Tools in this guide" from
  the same file, `/products` shows every tool, and the 12 tools whose every row is
  doubtful are folded into the hub (`src/config/bihui-folded.json`, old URLs 301 to the
  category, `bihuiPages` is the set with pages). Product pages of items in the running
  offer carry a yellow strip with the countdown (`offer-strip.tsx`).
- 2026-11-14, the X-Calibur certificate: the owner supplied X-Calibur International's
  "Authorised Distributor" certificate (Tanzania region, five ranges, valid to 31 December
  2026) and allowed it on the site. It is published as issued: the PDF under
  `public/tds/x-calibur/` (canonical header to `/x-calibur`), a raster in `public/documents/`,
  the facts in `src/config/credentials.ts`, the section `/x-calibur#certificate`
  (`src/components/sections/x-calibur/certificate.tsx`, red stage, the five ranges with the
  stocked product under each, the paper in a card that leans to the pointer), a
  `Certification` node on the hub, one line on each X-Calibur product page and on `/about`.
  The hub title now carries "Authorized Distributor". People named on a document stay in the
  picture only. The BRELA licence stays off the site (it prints the TIN) until the owner
  rules; no navbar change.
- Eighth round, 2026-11-11:
  - **Flash sale** on the home page: blinking tab, ticker, countdown, the comic "SALE!"
    burst (`flash-sale.tsx`, `offer-band.tsx`), and the **sale page** `/sale`
    (`src/app/sale/`): a paced 0 to 100% loader on the Sahihi mark that opens like a shutter
    (`sale-stage.tsx`), the packs cut out on a lit Ink row in 3D (`lineup-scene.ts`), the
    list, a WhatsApp order composer. Cut-outs are the manufacturers' own PNG alpha
    (`npm run assets:packshots` writes `public/products/<brand>/cutout/`). 301s from
    `/offer`, `/offers`, `/flash-sale`. Rewrite `coreSeo["/sale"]` with the next offer.
  - **CMCI** from the owner's folder: fire thickness calculator (UL X854), deck and beam
    coat (UL D780, `deck-coat.tsx`), eight UL and test PDFs (`fire-documents.tsx`),
    references, three accessories; **practical 3D** on X-Calibur and CMCI pages: sealant
    joint calculator (`sealant-joint.tsx`), epoxy floor, FlexPruf, SBR and fireproofing
    build-ups (`src/config/build-ups.ts`); scene pictures on CMCI and X-Calibur product
    pages (`src/config/product-scenes.ts`, Higgsfield, logged in IMAGE-PROVENANCE 3l).
  - **Metadata pass** (owner: "all the meta titles and meta descriptions ... keyword
    friendly ... ethically"): one registry row per page in `src/config/seo/<family>.ts`
    (query, buyer words, hand-written description, stock claim); titles through
    `composeItemTitle`, cards through `resolveOg` (`src/lib/seo.ts`); Open Graph cards for
    every page in `public/og/` (`npm run assets:og` after a build); two gates inside
    `npm run check`: `scripts/verify-seo-registry.mjs` and `scripts/audit-metadata.mjs`
    (writes `docs/metadata-inventory-<date>.csv`). Rules in SEO-STRATEGY 5.1b. The 404 has
    its own metadata (noindex only). Adding a page now means adding its row first.
- Owner decisions on 2026-11-05: the `/mapei` hub owns
  "Mapei Tanzania"; Sahihi is independent (no group mention); Mlinzi is
  parked and treated as a third-party incumbent. The launch domain is
  sahihicc.com (sahihi.com belongs to someone else).
- Photographs: 20 generated on 2026-11-06 (Higgsfield, 120 credits) and
  placed: home hero, solutions and materials; Mapei hub masthead and line
  spreads; line page mastheads; About. Registry `src/config/images.ts`,
  build `npm run assets:images`, log `docs/IMAGE-PROVENANCE.md` section 3.
  They are atmosphere: never captioned as a Sahihi project or premises.
- Project cards have pictures (`picture` in `src/config/projects.ts`, sources in
  `docs/IMAGE-PROVENANCE.md` 3d): 4 real, 11 generated, no label on the cards (owner,
  2026-11-06). Credits and an "illustrative" line are at the foot of `/projects`.
  Replace generated ones with real site photographs.
- GitHub: `taarunn99/sahahicontructionstanzania`, branch `main`, PUBLIC by the
  owner's choice on 2026-11-06, including `docs/`. `assets/source/` (price lists,
  licence, card) stays gitignored. Commit or push only when asked.

## Commands

```bash
npm run dev                  # local dev
npm run check                # typecheck + lint + tests + build + alt audit + copy audit
npm test                     # calculator maths + data sheet content verification
npm run assets:tds           # re-download Mapei data sheets, refresh the manifest
scripts/lighthouse.sh        # mobile Lighthouse on the production build
npm run assets:brand         # re-extract logos from the card, rebuild icons + OG
npm run assets:images        # rebuild public/images from the 4K masters
scripts/port-from-gcbuae.sh <path>   # port a file from ~/dev/gcbuae
```
