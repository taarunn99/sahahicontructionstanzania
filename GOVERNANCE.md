# GOVERNANCE.md - Build and Publishing Rules, sahihicc.com

Written 2026-11-05. This is the binding ruleset for the Sahihi
Construction Chemicals site. It carries the gcbuae system
(`DESIGN-HANDOFF.md`) and adds the rulings specific to this project.
Where a rule here conflicts with convenience, the rule wins. Where a rule
must be broken, stop and tell the owner the reason and the cost first.

Read with: `SEO-STRATEGY.md` (the query registry), `DESIGN-CONCEPT.md`
(the look), `AGENTS.md` (code conventions), `docs/OPEN-QUESTIONS.md`
(what the owner has not decided yet).

---

## 0. The two non-negotiables and the priority order

Owner, 2026-11-05:

1. **Rank #1 for Mapei searches in Tanzania**, and as far as is honestly
   winnable across East Africa. What is and is not winnable is written
   down in `SEO-STRATEGY.md` section 1; do not promise past it.
2. **Flawless on every device, phones first.** Performance scores are a
   gate, not an aspiration.

When trade-offs happen, in this order (binding):

1. SEO and indexability
2. Core Web Vitals
3. Mobile, including poor networks
4. Design fidelity and animation
5. Everything else

An animation that costs LCP loses. A flourish that needs a text block
client-rendered loses.

---

## 1. Project rulings (this site, on top of the handoff)

| Date | Ruling | Source |
|---|---|---|
| 2026-11-05 | **Prices are never displayed.** This is a catalogue. No price, currency amount or price range anywhere: pages, alt text, JSON-LD, llms.txt, docs in the repo | owner |
| 2026-11-05 | The catalogue type has no price field and never gets one. The price lists live only in `assets/source/owner-supplied/`, which is gitignored | derived |
| 2026-11-05 | Every price intent is answered with a quote route (WhatsApp, form, `/price-list`), never a number | derived |
| 2026-11-14 | **The quote list.** One basket for the whole site (owner: a buyer "would be looking for an inquiry of multiple products, which is at least five"): "Add to quote list" on every product and tool page and under every calculator, a floating pill beside the WhatsApp button (never a navbar item), and `/quote`, which lists every product with an Add button and sends the list on WhatsApp, by email or as copied text. The list lives in the visitor's browser only; nothing is posted to the site; no price is stored, asked or shown. `/quote` owns "Mapei price list Tanzania" and says plainly that prices come by quotation; `/price-list` redirects to it | owner |
| 2026-11-14 | **The Journal lives on `/about`** as a designed section and "Blog" is off the navbar (owner: the navbar "is already very populated"). Every blog URL stays live, in the sitemap and linked from About and the footer; nothing redirects | owner |
| 2026-11-05 | Stack: Next.js + TypeScript, GSAP, Motion, Lenis, Three.js | owner |
| 2026-11-05 | Three.js never enters the initial route bundle; one lazy scene per hub at most (`DESIGN-CONCEPT.md` section 7) | derived from priority order |
| 2026-11-05 | The working copy lives at `~/dev/sahihicc`. `~/Desktop/sahihiconstructiontanzania` is a symlink to it, so the owner works from the Desktop path in VS Code while the files stay out of iCloud. Never replace the link with a real Desktop folder | handoff section 3 + owner |
| 2026-11-05 | Palette is **mostly pastel**: Ink text on Chalk and three pastel stages (Sky, Mint, Butter). The footer is the only dark ground | owner |
| 2026-11-06 | Palette is **solid, from the logo** (Sahihi Blue, Tick Green, Signal Yellow), replacing the pastel palette of 2026-11-05. Owner: Tanzanian buyers like colourful sites; "solid and popping just like the logo" | `src/app/globals.css` |
| 2026-11-06 | Product pages follow the manufacturer's own product page layout, in the manufacturer's colour, with its official pack shot and a pill Download button for the data sheet. Pack shots are the manufacturer's files, never generated | `product-detail.tsx`, `scripts/build-packshots.mjs` |
| 2026-11-06 | No named people on the site: the director's name, title, portrait and Person schema are removed (owner: "remove director") | `src/app/about/page.tsx`, `src/config/site.ts` |
| 2026-11-06 | Reverses the row above for the director only: name and title on `/about`, with Person schema, so search engines can identify who stands behind the company (owner). Other people stay off the site; no portrait until Q12 is answered | `src/app/about/page.tsx`, `src/config/site.ts` |
| 2026-11-06 | `/products` carries no technical data: picture, name, one line, Explore. Specifications live on the product pages (owner) | `src/app/products/page.tsx` |
| 2026-11-06 | A link opens a page at the top; back, forward and reload return to the visitor's position (owner) | `src/providers/scroll-memory.tsx` |
| 2026-11-06 | Nabaki (nabaki.co.tz) is the named competitor. Never mention a competitor's faults on the site | `docs/research/15-nabaki-competitor.md` |
| 2026-11-05 | The logo is the vector extraction from the business card. It is never redrawn, restyled or AI-regenerated | owner asked for accuracy |
| 2026-11-05 | Generated imagery is atmosphere only. Never a product pack, never presented as a Sahihi project or site | `DESIGN-CONCEPT.md` 5.2 |
| 2026-11-06 | Exception, by the owner: generated pictures sit on the project cards with no label on the card. One line at the foot of `/projects` says some are illustrative, beside the photo credits the licences require. Swap in real site photographs as they arrive | owner: "remove these illustrative" |
| 2026-11-05 | Cursor-only effects (WebGL button rim, magnetic pull) never load on touch devices | measured, section 4 |
| 2026-11-05 | Calls to action are real `<a href>` links, not buttons that navigate by script | interlinking law, section 8 |
| 2026-11-05 | Mapei product pages offer the official technical data sheet as a download. The PDFs are Mapei's, unaltered, with the edition code shown | owner |
| 2026-11-05 | **Calculators must be exact.** Every figure and formula comes from the manufacturer's data sheet, carries the sentence it was copied from, and is tested against the tables the manufacturer prints. No figure in the data sheet means no calculator | owner |
| 2026-11-05 | Every calculator has a wastage allowance the visitor sets. It is shown, applied once at the end, and never baked into a rate | owner |
| 2026-11-14 | **Documents are shown as issued.** The X-Calibur authorised distributor certificate (`/x-calibur#certificate`) is the owner's file unaltered, with a plain raster for the page and the PDF to download. The BRELA business licence (`/about#documents`) is **view only** (owner: "view it but not download it"): a 900 px raster, no PDF on the site, no download, no drag or right-click save, a CSS "view only" layer over the picture, `X-Robots-Tag: noindex` on the file; the page says a screenshot is still possible. Figures on a paper that the site never prints (TIN, fees, receipt numbers, people's names) stay on the paper: not in copy, alt text or schema. Sources: `src/config/credentials.ts`, `src/config/company-documents.ts` | owner |

Everything in handoff section 17 (the gcbuae owner rulings ledger) also
applies unless this file says otherwise.

---

## 2. Fact law

**Never invent a product, spec, classification, certification, project,
client, authorization or price.**

Sources of truth, in order:

| Kind of fact | Source of truth |
|---|---|
| What is stocked, and in which pack | the owner's price lists |
| Technical values: description, class, consumption, limits | the manufacturer's technical data sheet, quoted as written |
| Company facts: name, address, licence, mission | the BRELA licence, the business card, the introduction letter |
| Authorization wording | the appointment letters: X-Calibur's certificate is on file since 2026-11-14 (`src/config/credentials.ts`, published as issued); the rest not yet supplied: Q2 |

Rules:

- Where the price list and the data sheet disagree, **the data sheet
  value is published** and the conflict goes in the discrepancy register
  (`docs/CATALOGUE-EXTRACTION.md`) for the owner. 70 Mapei rows and 6 X-Calibur rows were
  logged on 2026-11-05.
- Where neither source is certain, the field is **left out**. A missing
  consumption figure is fine. A wrong one is a failed floor.
- Product names are written exactly as the manufacturer writes them
  (UltraCare Multicleaner, Mapefibre NS 12, Mapelastic AquaDefense,
  X-Shield FlexPruf). The spelling landmines are listed in the register.
- Claims are scoped exactly as printed. "Suitable for contact with
  drinking water" is not "approved for drinking water". A class stated
  for one product is never carried to its namesake.
- Consumption is theoretical and varies with site conditions. Any page
  showing one says so and links the data sheet.
- Mapei's data sheets may be quoted but not altered. Quote exactly.
- Text shown as Mapei's own words lives in `src/content/mapei/*.json` and
  is checked, string by string, against the text of the PDF it came from
  (`scripts/verify-mapei-content.mjs`, 1,889 strings on 2026-11-05). A
  changed word or digit fails `npm run check`. Never hand-edit a value in
  those files to "improve" it: fix the extraction or leave it out.
- Calculator figures live in `src/config/mapei-coverage.ts`, each with its
  `source` sentence. `scripts/test-coverage.mjs` proves the grout formula
  reproduces every cell of Mapei's printed tables (Keracolor FF 39 of 39,
  Kerapoxy 108 of 108), the sealant maths reproduces Mapei's table (12 of
  12), and every source sentence is in its data sheet. "Exact" means
  exact to Mapei's published figure: real consumption on site still varies
  with substrate and workmanship, and the page says so.
- Authorization wording per brand lives in `src/config/brands.ts` and
  nowhere else. Mapei and Oriental Yuhong are "authorized distributor" on
  the strength of the introduction letter; X-Calibur on its own certificate
  (2026-11-14, `src/config/credentials.ts`, shown as issued on
  `/x-calibur#certificate`). CMCI and BIHUI appear only as logos on a
  business card, so they are "brand partner" until the letters arrive.
  Never "exclusive", "sole" or "official" without a document that says so.
  A published document is the owner's file, unaltered; people it names
  stay in the picture and out of the copy and the schema.
- Project references: the owner asked for the projects library on
  2026-11-05, so `/projects` is built from the supplied sheet (names and
  products only, applicators left out, one row held). It must NOT go live
  until the owner confirms the list in writing (Q5): the sheet is headed
  "Mlinzi" and predates Sahihi's licence. It is a launch gate in
  `docs/DEPLOY-CHECKLIST.md`.
- Typos and defects in a source are flagged, never silently fixed and
  never leaked into published copy.

---

## 3. Rendering rules (SSR-first, animation islands only)

- **Server Components by default.** Static generation preferred.
- `"use client"` only for: animation wrappers, forms, search, the header
  and footer behaviour, the WhatsApp button, signature elements.
- **All text, headings, product data, specs and images exist in the
  server-rendered HTML.** Pattern: a server component renders the
  content, a client island attaches behaviour.
- **View-source test:** every piece of indexable content is in the raw
  HTML response. If not, the build is wrong.
- Explorers, accordions, tabs, filters: all items server-rendered;
  controls only toggle CSS `hidden`, opacity or grid rows. Every card
  links to its own page.
- The page is readable and navigable with JavaScript disabled. 14% of
  Tanzanian mobile traffic is Opera, some of it in data-saving modes.
- Catalogue data never enters the client bundle. The chrome receives
  computed props from the server (`src/config/chrome.ts`); the search
  index is a static JSON file fetched when the search box first opens.

---

## 4. Performance budgets (hard gates)

| Metric | Budget |
|---|---|
| LCP (mobile, throttled) | under 2.0 s |
| CLS | under 0.05 |
| INP | under 200 ms |
| Lighthouse mobile | target 100 x4; **below 95 performance blocks merge** |
| Single asset on the wire | 300 KB or less (check the `/_next/image` response) |
| Mobile page weight | 1 MB or less |
| Hero image | about 200 KB; card images about 100 KB |
| First paint on slow 3G | under 3.5 s |

Baseline measured 2026-11-05, production build, `scripts/lighthouse.sh`
(mobile, applied throttling). 57 pages exist. Measured: home, catalogue,
about, contact, the Mapei hub, all five line pillars and 29 of the 47
product pages, across all five lines.

| Template | Pages measured | Perf | A11y | BP | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| `/` | 1 | 100 | 100 | 100 | 100 | 0.9 s | 10 ms | 0 |
| `/products` | 1 | 100 | 100 | 100 | 100 | 0.8 s | 10 ms | 0 |
| `/about`, `/contact` | 2 | 100 | 100 | 100 | 100 | 0.8 s | 10 ms | 0.001 |
| `/mapei` hub | 1 | 100 | 100 | 100 | 100 | 0.8 s | 10 ms | 0.007 |
| `/mapei/<line>` | 5 | 100 | 100 | 100 | 100 | 0.8 s | 10 ms | 0.015 or less |
| `/mapei/<line>/<item>` | 29 | 100 | 100 | 100 | 100 | 0.8 s | 10 ms | 0.003 or less |

Page weight is 430 to 540 KiB per page.

How to read the product-page row: the sweep found two layout-shift bugs
(4 pages scored 87-89). Both were fixed and the affected pages re-measured
at 100. Nine product pages were measured on the final build; the other 20
were measured before the second fix and scored 100 then. 18 product pages
were never individually measured. They share one template, but re-run the
full sweep before launch: `bash -c 'scripts/lighthouse.sh $(cat routes)'`.

**Read these numbers honestly:**

- They are lab numbers from localhost. The real gate is PageSpeed
  Insights and Search Console field data after deployment.
- With Lighthouse's default *simulated* throttling the same build scored
  90 to 96, with LCP reported near 3 s. The trace shows observed LCP
  equal to observed first paint: on localhost every script arrives before
  the first frame, and the simulator then assumes those scripts block the
  paint. Applied throttling removes the artefact. If PageSpeed Insights
  reports a late LCP on the deployed site, investigate; do not wave it
  away with this note.
- **Initial JavaScript is about 230 KB gzipped per route**, which is over
  the handoff's 150 KB figure. About 140 KB is React and the Next
  runtime; about 60 KB is GSAP with ScrollTrigger and SplitText, loaded on
  every route by the chrome; the rest is Motion and Lenis. It is all
  `async` and does not block paint (TBT 30 ms), but it is the first place
  to cut if field INP slips. The next cut is loading GSAP after first
  interaction on touch devices.
- HTML is 200 to 430 KB uncompressed because `inlineCss` (a FIXED handoff
  setting) writes the stylesheet into the document and twice more into
  the React payload. It compresses well. Revisit if page weight nears the
  budget.

What was changed to get here, so it is not undone:

- The WebGL button rim (ogl) boots only on hover-capable fine-pointer
  devices, on the first pointer movement, and its frame loop sleeps when
  idle. Before: one GL context and one permanent rAF loop per button on
  every device; TBT 380 ms. After: 20-30 ms.
- The italic display font is not preloaded.
- The body font (Manrope) is `font-display: optional`. With `swap`, a late
  font re-wrapped paragraphs and moved the spec block of a product page
  (CLS 0.23; the trace named "Web font"). The display serif stays `swap`.
  Cost: on a slow FIRST visit the body text stays in the system sans for
  that page view.
- The breadcrumb is one self-scrolling line on phones. A wrapping trail
  changed its line count when the font loaded (CLS 0.26).
- The search index left the HTML.

Standing rules:

- Images: AVIF + WebP via `next/image`, explicit dimensions, `sizes`
  always set with `fill`, lazy below the fold.
- Never fade the LCP element. The first screen has no entrance animation.
- Video: posters, `preload="none"`, in-view play only. No YouTube embeds
  as decoration.
- Third-party scripts: zero in the critical path. Analytics load after
  interaction or idle.
- Fonts: self-hosted by `next/font`, `swap`, preload only what the first
  screen needs.
- Respect `Save-Data` and `effectiveType`: no video, no WebGL, no Three.js
  on Save-Data or 2G/3G.

### Mandatory notification rule

If any element will exceed a budget or measurably degrade LCP or INP,
**stop and tell the owner before building it**: what it costs, why, and a
lighter alternative. This includes requests from the owner. Do not
silently build heavy things; do not silently strip them either. Three.js
is the standing example on this project.

---

## 5. Responsive and mobile

The audience (StatCounter, October 2026; TCRA, June 2026): Google 98% of
search in Tanzania; 69% of traffic is mobile; 92% of mobile is Android;
Opera is 14% of mobile browsers; average mobile download 14 Mbps;
smartphone penetration 45%.

- Design at 360px first. Test at 360 / 390 / 768 / 1024 / 1440 / 1920 /
  2560. At 2560 the container widens to 112rem and stops.
- The page never pans sideways. `html { overflow-x: clip }` is the net;
  overflow bugs get fixed at the source.
- Touch targets at least 44px. No hover-only information.
- Inputs are 16px or larger (smaller makes iOS zoom the page).
- Pins, the fixed footer reveal, cursor effects and WebGL are desktop
  patterns. Phones get taps, stacks and normal flow.
- `tel:`, `wa.me` and `mailto:` are real links with their value as text.
- Safe-area insets respected (`viewport-fit=cover`).
- `prefers-reduced-motion` on every animation, no exceptions.
- Shared chrome changes are verified on every route and at a phone
  viewport before pushing.

---

## 6. Technical SEO (implement once, verify every build)

- `metadataBase`, title template `%s - Sahihi Construction Chemicals`,
  `title.absolute` on hubs, pillars, items and posts.
- **Canonical on every route.** A page without its own
  `alternates.canonical` inherits `/` and declares itself a copy of home.
- `robots.ts`: allow all, point to the sitemap, nothing else. It is the
  only robots source. **Zero `noindex` anywhere.** AI crawlers allowed.
- `sitemap.ts`: only routes that exist; real `lastModified` dates, never
  "now". Anchors are not URLs.
- `/llms.txt` generated from the same registries as the pages.
- JSON-LD only where it matches visible content, serialised through
  `JsonLd` or with `.replace(/</g, "\\u003c")`. Empty config fields
  resolve to `undefined`, never `""`.
- One `h1` per page; ordered heading levels; `nav` / `main` / `footer`
  landmarks.
- **Every image has a descriptive alt** that describes the subject. Run
  `node scripts/audit-image-alts.mjs` after every build.
- Branded 404 with a real 404 status. `poweredByHeader: false`.
- Host level (owner): canonical host 301 (www), HTTPS + HSTS, confirm
  production is not a preview environment adding `X-Robots-Tag: noindex`.
- `hreflang`: `en` + `x-default` now; `en`, `sw`, `x-default` when
  Swahili ships.
- URL changes always get a 301 in config. A published URL never 404s.

---

## 7. Content rules

Voice: assured, spare, technical. An engineering house that happens to
rank. Written from the warehouse and the site visit.

- Speak to specifiers and applicators: class, consumption, pack,
  substrate, cure time.
- Short declarative sentences. Concrete nouns and numbers.
- Say where a product is not the right choice.
- **Banned:** "premium quality", "wide range", "best in class",
  "one-stop", "world-class", "in today's world", "when it comes to",
  rhetorical questions as transitions, keyword-stuffed lists.
- **No long dashes, ever.** No em or en dashes in copy, titles, metadata,
  alt text or JSON-LD. Plain hyphen: " - " between clauses, "2-4 mm".
  `scripts/audit-copy.mjs` fails the check on one.
- H1 is the primary query intent. Variants live in H2s.
- H2s phrased as the real question, followed by a 40-80 word direct
  answer. Then depth.
- FAQ answers 50 words or less, complete on their own, as a display lead
  plus short points.
- Local specificity is mandatory on commercial pages: the two rainy
  seasons, coastal humidity, flat concrete roofs, underground tanks,
  city names. Only facts with a source in `docs/research/`.
- Every piece needs one thing only Sahihi can say (stock, training,
  a site observation).
- Swahili: never machine-translated pages. Published Swahili is written for
  the page, and it is written by Claude from the English copy, fact for fact
  (owner, 2026-11-06: "you only write i trust you"; this replaces
  "human-written only"). Copy lives in `src/config/sw.ts`.
  The header's EN / SW switch (owner, 2026-11-06) is not an exception: Google
  Translate runs in the visitor's browser only after they tap SW, nothing is
  published or indexed, and English stays the default. Anything whose text
  changes while in use is marked `translate="no"` so it cannot show a stale
  figure. Keep that on every new calculator or live tool.
- Never copy text from gcbuae.com, lapizblue.com, mlinzimapei.com or any
  other site. Same facts, different words.

---

## 8. Interlinking (hub and spoke, mandatory)

- Every new page gets at least 3 contextual internal links in and 3 out
  at publish time, with descriptive anchors ("Keraflex Maxi S1 tile
  adhesive", never "click here").
- Pillars link to every child; children link back, to their solution
  pillar, to 4 related items, and to previous and next.
- Solution pillars link to every product that serves them, across
  brands, and back.
- Every post links to at least 2 product or pillar pages and 1 other
  post, and carries a product CTA.
- Breadcrumbs on everything; one crumbs array renders the trail and its
  schema; every level is a real page.
- No orphan pages. Crawl for orphans before deploy.
- Links are anchors. A control that navigates is an `<a>`.

---

## 9. Checks

Before every commit:

```bash
npm run check        # typecheck, lint, build, alt audit, copy audit
```

Before every push that touches a page or the chrome:

```bash
scripts/lighthouse.sh                 # all routes, mobile, >= 95 performance
```

Per-page publish checklist:

- [ ] One primary query assigned in `SEO-STRATEGY.md`; no cannibalization
- [ ] Title 60 characters or less with the budget used; description
      140-160; canonical; OG; all unique
- [ ] One H1; question H2s with direct answers where informational
- [ ] Content in the raw HTML (view-source test)
- [ ] JSON-LD valid and matching visible content
- [ ] Images sized, AVIF/WebP, descriptive alt, lazy below the fold
- [ ] 3 links in, 3 links out, breadcrumb, in the sitemap
- [ ] Lighthouse mobile 95+ / 100 SEO / 100 accessibility
- [ ] Checked at 360px and 2560px; reduced motion verified
- [ ] No price, no long dash, no line colour as text, no hex literal
- [ ] Every fact traces to a source; nothing invented

Launch checklist: `docs/DEPLOY-CHECKLIST.md`.

---

## 10. Things to flag to the owner proactively

- any budget breach, before building
- anything that would client-render indexable content
- a new page that would compete with an existing page's query
- any URL structure change (needs a 301 plan)
- a fact that cannot be sourced, or a source conflict
- competitor changes (Mlinzi and MC-Bauchemie monthly)
- unclaimed queries, schema types and content gaps noticed along the way
- anything that would put a price, a project claim or an authorization
  claim on the site without a document behind it

## 11. Working agreement

- Flag before building, not after. Give the cost and a lighter option.
- Ask with tappable multiple-choice options, not prose questions.
- Do not drive a browser to judge visuals. Run the checks, hand over;
  the owner reviews and returns precise notes. Lighthouse is a metric
  gate and is allowed.
- Fix exactly what is pointed at. Nothing wider.
- Image-generation credits: check the balance, preflight the cost, state
  the total. Approval is situational, never standing. (2026-11-05: the
  owner approved unlimited use for this setup session only.)
- One commit per risky visual change.
- Write decisions into these files so the next session inherits them.

## CMCI wording (owner, 2026-11-07)

The CMCI range is three lines: petrochemical, commercial, tunnels. Say "the CMCI
range" and "Sahihi supplies". Never write that CMCI makes a product, and never set
CMCI as `manufacturer` in schema. Page copy, schema and repo docs do not name the company
behind the data sheets. Technical values must match those sheets (`npm test`). The
owner ruled on 2026-11-07 that each page offers the sheet itself: published
unaltered in `public/tds/cmci/`, with the maker's name as printed. Never edit one.

## Vasa and dealer wording (owner, 2026-11-07)

Vasa and CMCI are "authorized dealer" on the owner's word; no letter is on file (OPEN-QUESTIONS
Q2, Q21). "Fire rated cement" is the buyers' search term: the page says it is fireproofing for
structural steel, never refractory cement, and not every CMCI product is cement (MK-6s is gypsum
based). Fire statements only as each data sheet prints them. No temperature or time on the 3D
beam: it is an illustration, and says so.
