# SEO-STRATEGY.md - Sahihi Construction Chemicals

Written 2026-11-05 from fourteen research reports in `docs/research/`
(index and method limits: `docs/research/README.md`). Companion files:
`GOVERNANCE.md` (rules and budgets), `docs/COMPETITOR-AUDIT-2026-11.md`
(per-site audit), `docs/OPEN-QUESTIONS.md` (owner decisions).

This file is the **query registry**. Before creating any page, check
section 5: one page, one primary query, and two pages never compete.

---

## 0. Read this first: what the research can and cannot say

- **No search-volume data and no Google Tanzania rankings.** Ahrefs is not
  connected, the research search tool is US-located, and it ran out of
  budget part-way (a shared 200-search cap across the fleet). Queries were
  graded by SERP composition, which is the handoff's own method when
  volume is missing, but each agent checked 13 to 25 queries, not the 30+
  asked for. Grades marked "inferred" in the reports were not checked live.
- **No People Also Ask data.** The tool does not return it. Question lists
  in the reports come from ranking pages and forum threads.
- **mapei.com blocks automated fetching.** Product facts were verified
  against Mapei's own PDF data sheets instead (47 of 49 lines), and a few
  rest on catalogues or search snippets. Those are marked in
  `docs/CATALOGUE-EXTRACTION.md`.
- **Next step that fixes most of this:** connect Ahrefs or run one
  Tanzania-located SERP pass, then re-grade. Until then, treat grades as
  direction, not measurement.

---

## 1. The honest verdict on "rank #1 for Mapei"

**"Mapei Tanzania": realistic, not quick, and it depends on one owner
answer before it depends on any code.**

What the SERP looks like today (`docs/research/01`):

- One incumbent holds positions 1-2 for every Mapei + Tanzania head term:
  **mlinzimapei.com**, the site of Mlinzi Construction Chemicals and
  Building Materials Limited (Pugu Road, Dar es Salaam), which states
  "Authorized distributor of Mapei". A duplicate, **mlinzicc.com**, was
  registered on 2026-05-18.
- Its SEO is weak: 54 of 58 pages are titled just "MLINZI", there are no
  meta descriptions, no robots.txt, no sitemap, no schema, and 43 thin
  product pages.
- Mapei itself has no Tanzania page. The country selector lists Egypt,
  Kenya and South Africa, and mapei.co.ke redirects to the UAE site.
- No query was graded HARD. Tile adhesive, grout, Keraflex, Kerapoxy and
  the city variants (Zanzibar, Arusha, Mwanza, Dodoma) are EASY; the nine
  head terms are MEDIUM only because of Mlinzi.
- sahihicc.com is currently a Namecheap parking page registered on
  2026-07-15. It starts from zero authority.

**The Mlinzi question** (`docs/OPEN-QUESTIONS.md` Q1). The price list
and the project sheet supplied for this site are Mlinzi documents, so a
link between the two companies looked likely. **The owner's answer on
2026-11-05: leave it; he does not know of Mlinzi's site, and this site is
for Sahihi.** So the working plan is the third row below: a contest, won
on depth. The table stays because the first row is worth reopening if the
director confirms a link.

| If Mlinzi is... | Then |
|---|---|
| the predecessor, being replaced by Sahihi | 301 every mlinzimapei.com and mlinzicc.com URL to its Sahihi equivalent. This would transfer the existing #1 position and is worth more than everything else in this file combined |
| a sister company that keeps trading | split territory in writing first (handoff 12.9): one primary query, one domain |
| **unrelated (working position)** | win on depth (section 3) and resolve the competing "authorized" claims with Mapei, because Google will not rank two contradictory authorities above the brand's own word |

**What it takes regardless:**
1. A page that owns the query with a title that leads with it (section 6).
2. More and better product pages than the incumbent's 43: one indexed URL
   per stocked product, each with verified specs. The data for 53 is
   already in `src/config/catalogue.ts`.
3. A listing on Mapei's dealer locator with a link. This is the single
   most valuable backlink available and only the owner can get it.
4. A Google Business Profile at the Coca-Cola Road address.
5. Schema, sitemap and titles, which already ship in the scaffold.

**What can block it:** the authorization conflict, the age of the domain
(expect months, not weeks), and Mapei launching its own Tanzania or East
Africa pages.

**No one can promise position 1.** What this plan does is remove every
reason Google would have to prefer someone else.

### Kenya, Uganda and the region: where "#1 everywhere" stops

Stated plainly, because the handoff requires it:

- **"Mapei Kenya", "Mapei Nairobi", "Mapei distributor Kenya": do not
  target.** Mapei East Africa Ltd is Mapei's own company in Nairobi with a
  stated remit of "Kenya and surrounding countries". A Tanzanian
  distributor outranking the manufacturer's subsidiary on its home market
  is not realistic, and trying invites a channel-conflict call from Mapei.
- **"X-Calibur Kenya": do not target.** X-Calibur has its own Nairobi
  entity and a live .co.ke site.
- **"Mapei Uganda": probably locked.** One source names a Kampala reseller
  (not verified).
- **Rwanda, Burundi, Zanzibar: vacuums.** No Mapei seller surfaced.
- **Zambia, Malawi, Mozambique** sit in Mapei South Africa's SADC patch.
- **Oriental Yuhong is open across East Africa.** No Kenyan or Tanzanian
  seller ranks for it. If any brand can be won regionally, it is OYH.

So the regional play is: **product-level and how-to pages that rank
everywhere English is searched** (a page about Mapelastic Smart has no
country), **OYH as the regional brand**, **Zanzibar as the first geo
page**, and a single `/where-we-supply` hub. Country pages are added only
when there is a real delivery to write about. Brand territories must be
confirmed in writing first (Q4).

---

## 2. The competitive field in one page

Full audit: `docs/COMPETITOR-AUDIT-2026-11.md`.

| Player | What it is | Strength | Weakness to exploit |
|---|---|---|---|
| **mlinzimapei.com / mlinzicc.com** | Mapei distributor claim, Dar es Salaam | ranks 1-2 for Mapei + Tanzania | placeholder titles, no descriptions, sitemap or schema, thin pages. Resolve Q1 first |
| **Sika Tanzania** (tza.sika.com) | the only real catalogue, about 91 product pages with data sheets | brand authority, depth | BreadcrumbList schema only; no FAQ, blog, Swahili or WhatsApp; category pages 200-300 words; project pages all foreign and dated 2020; local tile range mostly C1T |
| **Nabaki Afrika** (nabaki.co.tz) | Conmix distributor on the same Coca-Cola Road, six outlets, fundi training | footprint, 2017 advertorials still rank | no product pages, no meta descriptions, a hidden injected gambling link on the home page, sitemaps that 404 |
| **Spanish Tiles Tanzania** | Kalekim adhesives and waterproofing, rebuilt Oct 2026 | fast, quote basket, prefilled WhatsApp | no specs on chemicals |
| **CTM Tanzania** | tile retailer house brands | publishes TSh prices | no technical content, no epoxy grout |
| **Jiji, directories** | marketplaces | own every price query | get listed; do not fight them |
| **MC-Bauchemie Tanzania** | formed Dec 2023 | rising threat | no local site yet. Track monthly |

**Technical benchmark:** Sika for depth, Spanish Tiles for speed.

**What nobody in this field does** (this is the moat):

- one indexed, specified page per product, with Product schema
- FAQ blocks and direct answers on category pages
- application guides written for Tanzanian conditions
- local project references
- published training and CPD content
- any Swahili at all
- "brand + Tanzania" hub pages with real titles

---

## 3. Strategy

1. **Depth beats age.** One URL per stocked product, real spec values
   from manufacturer data sheets, wholesale-buyer copy. Sika has 91 thin
   pages; Mlinzi has 43 thinner ones. 53 verified pages on day one, each
   interlinked into a line pillar and a solution pillar, is the opening.
2. **Entrenchment is by distributorship.** The head terms belong to
   whoever the manufacturer names. Everything in section 8 that says
   "owner" is ranking work, not admin.
3. **Brand + geo on hubs, generic + geo on solution pillars.** "Mapei
   waterproofing Tanzania" lives on `/mapei/waterproofing`; "waterproofing
   Tanzania" lives on `/solutions/waterproofing`, which is brand-agnostic
   and links to Mapei, X-Calibur and OYH products alike. They never swap.
4. **Price intent without prices.** The owner's ruling is no prices on the
   site. Research shows Jiji and CTM win every price query by printing
   TSh. That traffic is real and we cannot take it with a number, so one
   page, `/price-list`, owns "Mapei price list Tanzania" and converts it:
   what affects the price (pack, quantity, system), and a one-tap WhatsApp
   request that returns the current list. This is a deliberate trade and
   the owner should know its cost (Q17).
5. **Honest framing ranks.** Say where a product is not the right choice
   (Antipluviol is not for flat roofs; Mapeset is not for large format;
   cement and epoxy are wrong on coral-stone heritage walls).
6. **Local specificity on every commercial page:** two rainy seasons
   (masika and vuli), coastal humidity of 75-84% against the 75% limit
   resin installers work to, flat concrete "hidden roof" houses (the most
   common leak complaint in Tanzanian forums), underground water tanks,
   saline coastal ground.
7. **Swahili as FAQ blocks first, pages later.** The evidence is that
   Tanzanians keep product words in English ("waterproof", "tiles") and
   describe the problem in Swahili ("inavuja", "rangi kubanduka"). Launch
   in English; add Swahili question-and-answer blocks on the highest
   traffic pillars; build `/sw` as written pages, never machine translated (section 9). Owner, 2026-11-06: key `/sw` pages first, see 5.2a.
8. **Speed matters when a vacuum is open.** The parking page comes down
   first. Ship the Mapei cluster, then refine.

---

## 4. Route map

Lowercase, hyphenated, shallow. A published URL never 404s; any change
gets a 301. Every level named in a breadcrumb is a real page.

```
BUILT (2026-11-05)
/                                       home
/products                               catalogue index: every product by name, one line and link
/about                                  entity page
/contact                                channels + enquiry form
/mapei                                  brand hub - owns "Mapei Tanzania"
/mapei/tile-adhesives-grouts            line pillar
/mapei/waterproofing                    line pillar
/mapei/resin-flooring                   line pillar
/mapei/concrete-repair                  line pillar
/mapei/primers-levelling                line pillar
/mapei/<line>/<item>                    47 item pages (SSG, dynamicParams = false):
                                        description, uses and limits, technical data,
                                        coverage calculator, data sheet PDF
/tds/mapei/<slug>.pdf                   44 official Mapei data sheets
/robots.txt /sitemap.xml /llms.txt /search-index.json

PHASE 1 - still to build
/price-list                             quote route for price intent

PHASE 2 - solution pillars (generic queries, brand-agnostic)
/solutions                              index
/solutions/waterproofing                + /roof /bathroom /basement /water-tank /swimming-pool
/solutions/tile-installation            tile adhesive, grout, tile care
/solutions/epoxy-flooring               + /polyurethane /car-park /self-levelling
/solutions/concrete-repair              + /crack-injection /grouting /anchoring
/solutions/sports-flooring              needs stock list first (Q11)
/solutions/underground-construction     needs stock list first (Q11)

PHASE 3 - the other brands
/x-calibur + /x-calibur/<item>          7 item pages
/oriental-yuhong                        needs stock list (Q10)
/cmci + /cmci/<item>                    8 item pages (built 2026-11-07)

PHASE 4 - authority
/training                               applicator training + CPD
/become-a-reseller                      reseller and applicator network
/projects                               BUILT 2026-11-05 from the owner's sheet; launch-gated on Q5
/projects/<slug>                        needs Q5 and real project detail
/where-we-supply + /where-we-supply/zanzibar
/blog, /blog/category/<c>, /blog/<slug> The Journal

PHASE 5
/sw/...                                 Swahili, written for the page, never machine translated (key pages built 2026-11-06)
```

`lineHref` and `productHref` in `src/config/catalogue.ts` are the only
place a product URL is built. Mapei resolves to routes; the other brands
are still anchors on `/products` until their pages ship. The anchors on
`/products` keep working either way.

---

## 5. Query registry

One primary query per page. Grades: E easy, M medium, H hard, from the
research; "inf" = inferred, not checked live. Lead value is for a
distributor that also appoints applicators.

### 5.1 Brand and entity

| Primary query | Owning page | Grade | Variants in the cluster |
|---|---|---|---|
| construction chemicals Tanzania | `/` | M (inf) | construction chemicals in Tanzania (now in the title and H1), construction chemical companies in Tanzania, construction chemicals suppliers Dar es Salaam, building chemicals suppliers Tanzania. Named rival: Nabaki, see `docs/research/15-nabaki-competitor.md`; the pages actually ahead are Sika's |
| Mapei Tanzania | `/mapei` | M | Mapei distributor Tanzania, Mapei Dar es Salaam, Mapei supplier / dealer Tanzania, Mapei products Tanzania |
| Sahihi Construction Chemicals | `/about` | E | Sahihi CC, Sahihi Construction Chemicals Limited. The bare word "sahihi" is Swahili for correct and is not winnable; always use the full name |
| Mapei projects Tanzania | `/projects` | E (inf) | Mapei projects Dar es Salaam, Mapei waterproofing projects Tanzania, where Mapei is used in Tanzania. Thin until projects carry detail (Q5) |
| Mapei price list Tanzania | `/price-list` | M | Mapei price Tanzania, bei ya Mapei |
| X-Calibur Tanzania (BUILT 2026-11-06, with seven item pages at `/x-calibur/<item>`) | `/x-calibur` | E | X-Calibur construction chemicals Tanzania, X-Calibur distributor Tanzania |
| Oriental Yuhong Tanzania | `/oriental-yuhong` | E | OYH waterproofing Tanzania, Yuhong membrane, Oriental Yuhong East Africa / Kenya |
| CMCI Tanzania (BUILT 2026-11-07, with eight item pages at `/cmci/<item>`) | `/cmci` | E | CMCI fireproofing Tanzania, cementitious fireproofing Tanzania, Monokote Tanzania, Avikote Tanzania |
| BIHUI Tanzania | `/bihui` | E | BIHUI tile tools Tanzania (BIHUI is a tiling tools brand, not adhesives) |

### 5.1a Added 2026-11-07

| Route | Owns | Notes |
| --- | --- | --- |
| `/cmci/fire-rated-cement` | fire rated cement Tanzania, fire rated cement | Steel fireproofing, says it is not refractory cement |
| `/vasa` | vasa authorized dealer Tanzania, vasa flooring Tanzania | Brand hub |
| `/vasa/spc-flooring` | SPC flooring Tanzania | 3D layers, decor picker |
| `/vasa/lvt-flooring` | LVT flooring Tanzania | 3D layers, decor picker |
| `/vasa/wall-panels` | wall panels Tanzania | Film and digital panels |
| `/oriental-yuhong/hdpe-waterproofing` | HDPE waterproofing Tanzania, HDPE membrane Tanzania | 3D layers, water path, documents |
| `/oriental-yuhong/pmh-3080-plus` | PMH-3080 Plus | Product page |
| `/oriental-yuhong/sports-flooring` | sports flooring Tanzania, running track, sports court, acrylic court | Seven systems in 3D, chooser, OYH films with steps, material calculator (no prices), guides and brochure |
| `/oriental-yuhong/sports-flooring/all-plastic-track` | running track Tanzania, polyurethane running track | System page: 3D, film, stages |
| `/oriental-yuhong/sports-flooring/breathable-track` | breathable running track, permeable track Tanzania | System page: 3D, film, stages |
| `/oriental-yuhong/sports-flooring/hybrid-track` | hybrid running track Tanzania | System page: 3D, film, stages |
| `/oriental-yuhong/sports-flooring/silicon-pu-court` | silicon PU court Tanzania, basketball court flooring | System page: 3D, film, calculator, drying, guide |
| `/oriental-yuhong/sports-flooring/acrylic-court` | acrylic tennis court Tanzania, acrylic sports court | System page: 3D, calculator, drying, guide |
| `/oriental-yuhong/sports-flooring/artificial-turf` | artificial turf Tanzania, artificial grass football pitch | System page: 3D, film, calculator |
| `/oriental-yuhong/sports-flooring/epdm-walking-track` | EPDM flooring Tanzania, rubber flooring playground | System page: 3D, calculator, site steps |

`/cmci` now also targets "CMCI authorized dealer Tanzania".

`/oriental-yuhong` now leads with **"OYH East Africa"** and **"OYH products in East Africa"** (owner, 2026-11-09, #1 the goal): title, H1, description, an East Africa section, three FAQ entries, `provider.areaServed` (Tanzania, East Africa) in JSON-LD, anchor text "OYH products in East Africa" from the HDPE and sports pages, the search index, llms.txt, and the 301s `/oyh-east-africa` and `/oriental-yuhong-east-africa`. It keeps "Oriental Yuhong Tanzania" in the title. No navbar change (owner). No office or stock outside Tanzania is claimed.

### 5.2 Mapei line pillars and items

| Primary query | Owning page | Grade |
|---|---|---|
| Mapei tile adhesive Tanzania | `/mapei/tile-adhesives-grouts` | E |
| Mapei waterproofing Tanzania | `/mapei/waterproofing` | M |
| Mapei epoxy flooring Tanzania (Mapefloor) | `/mapei/resin-flooring` | E (inf) |
| Mapei grout Tanzania (Mapegrout, repair) | `/mapei/concrete-repair` | E |
| Mapei self levelling Tanzania (Ultraplan, Primer G) | `/mapei/primers-levelling` | E (inf) |
| `<product name>` Tanzania, one each | `/mapei/<line>/<item>` | E. "Mapelastic Tanzania", "Keraflex Tanzania" and "Kerapoxy Tanzania" returned nothing relevant |

Item pages to build first, by demand signal in the SERPs: Mapelastic
Smart, Mapelastic Foundation, Mapelastic AquaDefense, Planiseal 88,
Keraflex Maxi S1, Kerapoxy, Kerabond T, Adesilex P7, Primer G, Mapefloor
I 300 SL ME.

### 5.2a Swahili pages (owner, 2026-11-06)

Each page is paired with its English twin by hreflang. Search terms are
candidates, chosen from how people describe the work: no volume data yet, so
check them in Search Console after launch.

| Primary query | Page | English twin |
|---|---|---|
| kemikali za ujenzi Tanzania | `/sw` | `/` |
| Mapei Tanzania (Swahili searchers) | `/sw/mapei` | `/mapei` |
| gundi ya tiles Tanzania | `/sw/mapei/tile-adhesives-grouts` | `/mapei/tile-adhesives-grouts` |
| self-levelling, primer ya sakafu | `/sw/mapei/primers-levelling` | `/mapei/primers-levelling` |
| ukarabati wa zege, nyufa za zege | `/sw/mapei/concrete-repair` | `/mapei/concrete-repair` |
| sakafu za epoxy Tanzania | `/sw/mapei/resin-flooring` | `/mapei/resin-flooring` |
| kuzuia maji, kuzuia kuvuja, waterproofing | `/sw/mapei/waterproofing` | `/mapei/waterproofing` |

### 5.3 Solution pillars (generic)

| Primary query | Owning page | Grade | Lead value |
|---|---|---|---|
| waterproofing Tanzania | `/solutions/waterproofing` | E-M | high |
| roof waterproofing Tanzania | `.../waterproofing/roof` | E | high. Lead with the "hidden roof" leak |
| bathroom waterproofing | `.../waterproofing/bathroom` | E | medium |
| basement waterproofing Tanzania | `.../waterproofing/basement` | E (inf) | high |
| water tank waterproofing | `.../waterproofing/water-tank` | E (inf) | high |
| swimming pool waterproofing Tanzania | `.../waterproofing/swimming-pool` | E (inf) | high, Zanzibar resorts |
| tile adhesive Tanzania | `/solutions/tile-installation` | E | high, volume line |
| epoxy flooring Tanzania | `/solutions/epoxy-flooring` | E | high. No Tanzanian business ranked for any of 21 checked flooring queries |
| polyurethane flooring food factory | `.../epoxy-flooring/polyurethane` | H generic, E with Tanzania | high |
| car park deck coating | `.../epoxy-flooring/car-park` | H generic, E with Tanzania | high |
| self levelling screed Tanzania | `.../epoxy-flooring/self-levelling` | E (inf) | medium |
| concrete repair Tanzania | `/solutions/concrete-repair` | E | high |
| BOQ clause, specification for consultants and QS | `/specifier-pack` | E | high. Built 2026-11-10 for the TBA and NHC route (reports/); no prices |
| epoxy crack injection | `.../concrete-repair/crack-injection` | E | medium |
| non shrink grout Tanzania | `.../concrete-repair/grouting` | E | high |
| chemical anchor Tanzania | `.../concrete-repair/anchoring` | E | medium |
| sports flooring Tanzania | `/solutions/sports-flooring` | E (inf) | medium. Blocked on Q11 |
| tunnel waterproofing, shotcrete | `/solutions/underground-construction` | M | project-scale. Blocked on Q11 |

**Do not target "mining chemicals Tanzania".** That SERP is reagents and
explosives. Mine sales are also procurement-gated: a 2025 shotcrete
expression of interest required a Local Content Plan and proof of
Tanzanian ownership (Q13).

### 5.4 The Journal

Six pillars, clusters beneath (handoff section 14). The gap competitors
leave is comparisons, climate how-tos and geo posts. First ten, in
publish order:

| # | Post | Primary query |
|---|---|---|
| 1 | Why "hidden roof" houses leak, and the fix that lasts | hidden roof leaking Tanzania |
| 2 | C1 or C2: which tile adhesive class a Tanzanian job needs | C1 vs C2 tile adhesive |
| 3 | Epoxy or polyurethane floor for a food factory | epoxy vs polyurethane flooring |
| 4 | Tile adhesive or sand and cement | tile adhesive vs cement |
| 5 | How much tile adhesive per square metre | tile adhesive per sqm |
| 6 | Epoxy grout or cement grout | epoxy grout vs cement grout |
| 7 | Waterproofing an underground water tank | underground water tank waterproofing |
| 8 | Resin floors and Dar es Salaam humidity | epoxy flooring humidity |
| 9 | Why tiles lift and go hollow | why tiles pop up |
| 10 | What TMDA's GMP guideline expects of a factory floor | GMP flooring Tanzania |

Built 2026-11-06, one row per post (`src/config/blog.ts` is the live
registry; its build check refuses a duplicate primary query):

| Post | Primary query | Category |
|---|---|---|
| /blog/why-hidden-roof-houses-leak | hidden roof leaking | Waterproofing (pillar) |
| /blog/underground-water-tank-waterproofing | underground water tank waterproofing | Waterproofing |
| /blog/waterproofing-coverage-per-square-metre | waterproofing coverage per square metre | Waterproofing |
| /blog/cementitious-vs-liquid-membrane-waterproofing | cementitious vs liquid membrane waterproofing | Waterproofing |
| /blog/tile-adhesive-per-square-metre | how much tile adhesive per square metre | Tiling (pillar) |
| /blog/why-floor-tiles-pop-up | why tiles pop up | Tiling |
| /blog/epoxy-grout-vs-cement-grout | epoxy grout vs cement grout | Tiling |
| /blog/tile-adhesive-vs-sand-and-cement | tile adhesive vs cement | Tiling |
| /blog/keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t | Keraflex Maxi S1 vs Adesilex P7 | Tiling |
| /blog/mapei-waiting-times-before-tiling-grouting-walking | Mapelastic drying time before tiling | Tiling |
| /blog/why-epoxy-floors-blister-and-peel | why epoxy floor bubbles and peels | Flooring (pillar) |
| /blog/epoxy-floor-thickness | epoxy floor thickness | Flooring |
| /blog/self-levelling-compound-per-square-metre | self levelling compound per m2 | Flooring |
| /blog/when-to-tile-on-self-levelling-compound | self levelling compound drying time | Flooring |
| /blog/screed-or-self-levelling-compound | screed vs self levelling compound | Flooring |
| /blog/joint-sealant-width-depth-coverage | joint sealant width to depth ratio | Tools and technique |
| /blog/trowel-notch-size-for-tile-size | trowel notch size for tile size | Tools and technique (pillar) |
| /blog/how-to-mix-tile-adhesive | how to mix tile adhesive | Tools and technique |
| /blog/spalling-concrete-repair | spalling concrete repair | Concrete repair (pillar) |
| /blog/how-to-grout-a-base-plate | how to grout a base plate | Concrete repair |
| /blog/construction-companies-tanzania-crb-classes | construction companies in Tanzania | Building in Tanzania (pillar) |
| /blog/masika-vuli-builders-rain-calendar | masika and vuli rainy season | Building in Tanzania |

Brand-versus-brand comparisons (Mapei vs Sika) rank well and were used on
gcbuae, but here the brand is a principal: clear the wording with Mapei
before publishing one.

Full lists (15 ideas per stream, 60 in total) are in research reports 07
to 10.

---

## 6. Title and description system

- 60 characters or less, and use the whole budget: primary query +
  authority claim + category enumeration. Helpers: `seoTitle`,
  `seoDescription` in `src/lib/seo.ts`.
- **Never ship a bare "Brand | Company" title** (the Kerakoll lesson).
- The word buyers type leads, on exactly one page.
- Layout template is `%s - Sahihi Construction Chemicals`. Hubs, pillars,
  items and posts use `title.absolute`. Never put the geo in the template.
- Descriptions 140-160 characters: what it is + proof + stock + how to
  get a quote. Never a price.
- No long dashes. No pipe-stuffed lists.

Planned titles (character counts in brackets):

| Page | Title |
|---|---|
| `/` today (change when convenient: the hub is live) | Construction Chemicals Tanzania - Mapei Distributor \| Sahihi (60) |
| `/` once `/mapei` ships | Construction Chemicals Tanzania - Mapei, OYH, X-Calibur (55) |
| `/mapei` | Mapei Tanzania - Authorized Distributor, Dar es Salaam (54) |
| `/mapei/tile-adhesives-grouts` | Mapei Tile Adhesive Tanzania - Keraflex, Adesilex, Grout (56) |
| `/mapei/waterproofing` | Mapei Waterproofing Tanzania - Mapelastic, Planiseal 88 (55) |
| `/mapei/resin-flooring` | Mapefloor Epoxy & PU Flooring Tanzania - Mapei Systems (54) |
| item | Keraflex Maxi S1 Tanzania - Mapei C2TES1 Tile Adhesive (54) |
| `/solutions/waterproofing` | Waterproofing Tanzania - Roofs, Basements, Wet Areas (52) |
| `/solutions/epoxy-flooring` | Epoxy Flooring Tanzania - Industrial & Hygienic Floors (54) |
| `/x-calibur` | X-Calibur Distributor Tanzania - Epoxy, Sealants, SBR (53) |
| `/oriental-yuhong` | Oriental Yuhong (OYH) Tanzania - Waterproofing Membranes (56) |

`/` and `/mapei` both carry the word Mapei. That is intended: the home
names the brand as a modifier, the hub leads with it. When the hub ships,
the home title drops "Distributor" so the two stop overlapping. The owner
confirmed on 2026-11-05 that the `/mapei` hub, not the home page, owns
"Mapei Tanzania" (decision D8).

After any template change, crawl the build and write a metadata inventory
CSV; gate on zero duplicate titles.

---

## 7. Structured data plan

Only where it mirrors visible content. One array renders the visible
thing and its schema.

| Where | Types | Status |
|---|---|---|
| Every page | `Organization` + `LocalBusiness`, `WebSite` | shipped |
| Trail pages | `BreadcrumbList` from the visible crumbs | shipped |
| Home | `ItemList` (lines) + `FAQPage` | shipped |
| `/products` | `CollectionPage` + `ItemList` | shipped |
| `/about` | `AboutPage` + `Person` | shipped |
| `/contact` | `ContactPage` | shipped |
| Pillars | `BreadcrumbList` + `ItemList` + `FAQPage` | Phase 1 |
| Items | `BreadcrumbList` + `Product` (name, brand, category, description, image, sku; **no offers**) | Phase 1 |
| Posts | `Article` + `FAQPage` + `BreadcrumbList` in one graph | Phase 4 |
| `/training` | `Course` list | Phase 4 |

Two facts to plan around (`docs/research/13`):

- **A Product page with no price earns no Google product rich result.**
  Google requires offers with a price, a review or an aggregate rating.
  Ship `Product` anyway for entity clarity and answer engines, and expect
  Search Console to list it as a non-critical issue. That is the cost of
  the no-prices ruling, not a bug.
- **FAQ rich results were withdrawn on 2026-05-07.** `FAQPage` still
  helps extraction and answer engines; it will not expand the SERP
  listing.

---

## 8. Off-site and entity work (owner actions, not in the repo)

In priority order. Items 1 to 4 are ranking work.

1. **Replace the parking page today.** Deploy this scaffold, or a single
   indexable holding page, to sahihicc.com. MX and SPF records sit on
   Namecheap hosting and must survive the DNS move or email stops.
2. **Mapei dealer locator listing** with the site URL. Ask Mapei East
   Africa to list Sahihi for Tanzania, and to tag Sahihi from its
   LinkedIn and Instagram.
3. **Google Business Profile** at Coca-Cola Road, Mikocheni B, exact legal
   name. Categories that exist: "Building materials supplier" (primary),
   "Construction material wholesaler", "Waterproofing service". Add
   products, photos, hours; then add its entity URL to
   `siteConfig.social.googleBusiness`.
4. **Listings on the other principals' sites**: X-Calibur, Oriental
   Yuhong, CMCI, BIHUI distributor pages.
5. **Search Console** domain property + sitemap; **Bing Webmaster Tools**;
   IndexNow first push (`npm run indexnow`).
6. **ERB CPD accreditation.** The Engineers Registration Board accredits
   external CPD providers (30 PDUs a year, 4-6 week review, valid two
   years). An accredited Sahihi course is a listing on a regulator's site
   and the content of `/training`. Same approach with AQRB and CRB.
7. **LinkedIn company page** and consistent NAP in Tanzanian directories.
   Do not link to tccia.com (it redirects to a gambling site) or to
   djvconstruction.com and ellipsis.co.tz from the project list (one is a
   gambling page, the other an unrelated company).
8. **Register sahihicc.co.tz** and 301 it. Brand protection only; it has
   no ranking value over the .com.
9. **Trade shows and media**: exhibitor listings and one authored piece
   in Construction Review or The Citizen per quarter.

---

## 9. International and language

- One .com. No ccTLD strategy, no `/ke` or `/ug` clones, no city-page
  farms. Search Console country targeting no longer exists, and
  doorway pages are a spam-policy risk.
- `hreflang`: `en` + `x-default` now. When Swahili ships, `en`, `sw`,
  `x-default` (not `en-TZ` / `sw-TZ`), so the same pages serve Kenya and
  Uganda.
- Hosting: Vercel's only African region is Cape Town (cpt1). Static
  generation keeps this irrelevant for pages; keep server actions light.

---

## 10. Measurement

- Baseline on 2026-11-05: zero of every tracked query (the domain is a
  parking page).
- Track the registry queries in Search Console weekly, and with one
  Tanzania-located rank check monthly.
- WhatsApp is the primary lead line. Track taps with a deferred GA4 event
  bound on interaction, never in the critical path.
- Quarterly: re-crawl every tracked competitor, diff sitemaps, report.
  Mlinzi and MC-Bauchemie monthly.

---

## 11. The first 90 days

| Weeks | In the repo | Owner |
|---|---|---|
| 1 | deploy the scaffold over the parking page; Q2 (appointment letters). Decided 2026-11-05: Q1 parked, Q3 no group, D1 Bahari, D8 hub | DNS, Search Console, Bing, GBP application, ask Mapei for the dealer listing |
| 2-4 | Phase 1: `/mapei`, five pillars, 47 item pages, `/price-list` | confirm the catalogue questions (Q8); get pack shots and data sheets (Q9) |
| 5-7 | Phase 2: solution pillars and application pages; first three Journal posts | OYH, CMCI, BIHUI stock lists (Q10); project permissions (Q5) |
| 8-10 | Phase 3 brand hubs; `/training`, `/become-a-reseller` | ERB CPD application; LinkedIn page |
| 11-13 | `/projects`, `/where-we-supply/zanzibar`, seven more posts; re-grade the registry on real Search Console data | first reviews on the Business Profile |
