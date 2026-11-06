# Blog research 05 - Floor preparation, screeds, self-levelling, primers and joints

Research date: 2026-11-06
Client: Sahihi Construction Chemicals Limited, Dar es Salaam (sahihicc.com)
Cluster: self-levelling compound, uneven floors, screed versus self-levelling, primers, damp slabs and moisture barriers, vinyl / SPC / LVT and wood on concrete, movement joints and joint sealants, sealing around windows
Status: research only. Nothing was built. No other file was edited.

---

## 1. Method and limits (read this first)

**What was done.**

- Read `SEO-STRATEGY.md` sections 3 to 5, `docs/research/README.md`, `docs/research/09-kw-flooring.md` (the parts on screeds and SPC) and `src/config/catalogue.ts`.
- Read the manufacturer data sheets already held in the repo for every product this cluster touches: the verified extractions in `src/content/mapei/*.json`, the sheet text in `assets/source/tds-text/`, and the PDFs in `public/tds/x-calibur/` and `public/tds/oriental-yuhong/`. Every product figure below comes from those sheets. The public source URL of each sheet (from `src/config/mapei-tds.json` and `src/config/x-calibur-tds.json`) is given in section 7.
- Ran 18 live web searches (the cap for this report) and requested 27 pages directly. 17 returned readable content.

**The 18 queries run.**

1. self levelling compound Tanzania Dar es Salaam
2. self levelling screed Kenya how thick price per bag coverage
3. how long does self levelling compound take to dry before tiling vinyl wood flooring
4. screed vs self levelling compound difference which to use
5. jinsi ya kusawazisha sakafu kabla ya kuweka tiles
6. SPC flooring installation on concrete subfloor preparation Kenya Tanzania uneven floor moisture
7. floor screed Kenya mix ratio thickness before tiles
8. expansion joint sealant Tanzania polyurethane sealant Dar es Salaam
9. movement joints in tiled floors spacing BS 5385 how often
10. concrete slab moisture test before vinyl wood flooring 75% RH hygrometer BS 8203 ASTM F2170
11. wooden flooring Kenya installation on concrete glue down parquet moisture humidity coast
12. do I need primer before self levelling compound concrete floor why
13. how to level uneven concrete floor before tiling Kenya Nairobi fundi
14. unyevu kwenye sakafu tiles kubanduka chanzo na suluhisho
15. best sealant for gaps around window frames rain leak silicone vs polyurethane Kenya
16. damp proof membrane under concrete floor slab Kenya rising damp floor tiles lifting
17. Sika Tanzania self levelling floor Sikafloor Level tza.sika.com
18. self levelling compound calculator how many bags per square metre mm thickness

**Limits that decide how far to trust this.**

1. **The search tool is US-located. It is not Google Tanzania.** Result order only approximates what a builder in Dar es Salaam sees. Local packs, Instagram, Facebook, TikTok and WhatsApp are invisible to it.
2. **No search volumes.** No volume figure appears anywhere in this file. Demand is judged only from who bothers to rank and from what marketplaces list. Everything marked "inferred" is my judgement, not a measurement.
3. **No People Also Ask data.** The tool does not return it. Section 5 ends with question headings and FAQ questions found on the pages that rank, labelled as such.
4. **No Tanzanian ranking was measured for any query.** "Who ranks now" means "who the US-located tool returned".
5. **Standards were not read at source.** BS 5385-3, BS 8203, BS 8204, ASTM F2170, ISO 11600 and EN 13813 are paywalled or blocked (astm.org and iso.org returned HTTP 403). Figures attributed to them come from the secondary sources named beside each figure. Buy or borrow the standard before a post states "the standard says".
6. **Pages that could not be read:** bostik.com primer guide (404), tbs.go.tz draft standard on sealants (404, twice), italtile.co.za vinyl instructions (403), middleeast.weber sealing guide (403), mapei.com/au parquet system (403), bestcareservices.co.ke parquet page (404), homebuilding.co.uk (navigation only, article body not returned).
7. **Swahili evidence is thin.** Both Swahili queries returned English pages only. See section 2.3.

**Fit with the existing plan.**

- `SEO-STRATEGY.md` section 5.3 gives "self levelling screed Tanzania" to the planned pillar `/solutions/epoxy-flooring/self-levelling`, and section 5.2 gives "Mapei self levelling Tanzania" to `/mapei/primers-levelling`. No post below takes either as its primary query. The posts take informational how-to and how-much queries and link up to those pages.
- Section 5.4 already plans "Resin floors and Dar es Salaam humidity" (query: epoxy flooring humidity) and "Why tiles lift and go hollow" (query: why tiles pop up). Post 6 below is about slab moisture under vinyl, SPC and wood, not resin, and must cross-link to both rather than repeat them.
- Per `CLAUDE.md`, a page is not built until it has a row in section 5. None of these posts has a row yet. Adding the rows is the owner's or the lead session's call.

---

## 2. What the search results show

### 2.1 Headline findings

1. **No Tanzanian page was returned for any of the 18 queries.** For "self levelling compound Tanzania Dar es Salaam" the tool returned UK retailers (protilertools.co.uk, welbm.co.uk), a South African distributor (sadecor.co.za), a Kenyan classified (jiji.co.ke) and several copies of one scraped "ultimate guide" hosted on unrelated domains. Nothing from Tanzania.
2. **The strongest local domain has nothing on this cluster.** Sika Tanzania's flooring page was fetched: about 230 words of body text, one category (industrial flooring), no self-levelling compound, underlayment, screed, primer or sealant named, and no blog or how-to section. Source: https://tza.sika.com/en/construction/flooring.html . The query "Sika Tanzania self levelling floor" returned Sika's New Zealand, UK, Canada and South Africa pages, not the Tanzanian site.
3. **The regional how-to gap is real.** The nearest African content found was a 2019 Sika South Africa news item of about 440 words announcing a levelling product: no mixing ratio, no coverage, no drying times, no primer steps, no table, no diagram. Source: https://zaf.sika.com/en/about-us/media/news/new-reliable-underlayments-make-a-difference.html
4. **The generic results are UK and US retailers and auto-generated pages.** They are beatable on quality: the best ranking page on drying time (protilertools.co.uk, about 1,200 words, 2025) contradicts its own table, cites no test standard and says nothing about temperature or humidity thresholds. Source: https://www.protilertools.co.uk/news/how-long-before-you-can-walk-on-self-levelling-compound
5. **One page shows what winning looks like.** An Indian not-for-profit guide to self-levelling compound (about 2,000 words, 2026) is locally specific: local brands, local currency, monsoon advice, two tables, one cross-section diagram, five FAQs and a linked calculator. That is the model, with Tanzanian climate and Sahihi's verified data sheet figures in place of planning assumptions. Source: https://www.studiomatrx.org/guides/self-leveling-compound-india
6. **Kenyan SPC content skips the subfloor.** The Kenyan SPC FAQ that ranks says only "Level and clean subfloor" and that SPC "performs exceptionally well in high-humidity areas like Malindi and Mombasa". It never mentions levelling compound, primer or a moisture barrier. Source: https://aliglaziers.co.ke/blog/spc-flooring-kenya-faq-ali-glaziers
7. **Damp-proof membrane demand in Kenya is visible in marketplaces, not in articles.** The "damp proof membrane ... Kenya" query returned seven Jiji Kenya listings for polythene DPM (300 to 1200 gauge as advertised) and no Kenyan explainer. The explainers were all UK damp-proofing firms. Listing example: https://jiji.co.ke/viwandani-makadara/building-materials/300-1200-gauge-polythene-damp-proof-membrane-dpm-xoP12N7edHjx1PVvB4gLX0hs.html
8. **Sealants: a Tanzanian rival is active on social media, not in search.** The only Tanzanian signal for "expansion joint sealant Tanzania" was a LinkedIn post by a Dar es Salaam contact promoting a polyurethane joint sealant sold through a building-materials chain. The rest were Chinese exporter landing pages aimed at "Tanzania importers", a South African catalogue page and a bridge-joint reference sheet. No how-to page on joint sizing with a Tanzanian or East African angle was returned.

### 2.2 Source conflicts found in the data sheets (log before writing copy)

| Conflict | Sheet A | Sheet B | Suggested handling |
|---|---|---|---|
| Primer G dilution on dusty or porous concrete before self-levelling | Ultraplan EC20 sheet: "1 part Primer G with 3 parts of water" | Primer G sheet: "cementitious substrates: dilute Primer G 1:1 with water"; Ultraplan Contract sheet: "Primer G (diluted 1:1 with water)" | Publish the Primer G sheet value (the product's own sheet) and state that the Ultraplan EC20 sheet prints 1:3. Ask Mapei which applies in the Gulf and East Africa. |
| Product name | Catalogue and price list: "Ultraplan Eco 20" | Sheet title: "ULTRAPLAN EC20" | Already noted in `src/content/mapei/ultraplan-eco-20.json`. Blog copy should use the catalogue name once and the sheet name in the citation. |
| Product name | Catalogue: "X-Seal PG" | Sheet title: "X-Seal PS800" (gun and pouring grades) | Use the catalogue name; cite the sheet by its printed title. |
| Wood flooring wait on levelling compound | Ultraplan EC20: wood "min. 48 h" | Ultraplan Contract: resilient and wood "min. 24 h", and "not less than 3 mm when wooden flooring needs to be installed" | Not a conflict, two products. Present side by side; it is the main reason to choose one over the other. |

### 2.3 Swahili terms

Evidence is weak and none of it comes from a Tanzanian search engine.

| Term | Meaning | Evidence | Status |
|---|---|---|---|
| sakafu | floor | Appears with "vigae" in the title of a Swahili tile calculator, "Vigae na sakafu": https://afrotools.com/sw/zana/kikokotoo-vigae-na-sakafu/ | Seen in a live result |
| vigae | tiles | Same page. `SEO-STRATEGY.md` section 3 notes Tanzanians mostly keep the English word "tiles" | Seen in a live result |
| kikokotoo | calculator | Same page URL. Suggests Swahili calculator pages exist and are indexed | Seen in a live result |
| kusawazisha sakafu | to level a floor | My own query wording. The search returned no Swahili page using it | Inferred, not verified |
| unyevu | dampness, moisture | My own query wording. No Swahili page returned | Inferred, not verified |
| mkeka wa mbao | "wooden mat", possibly wood-look vinyl sheet | Carried over from `docs/research/09-kw-flooring.md`; unverified there too | Not verified |

Working conclusion, consistent with section 3 point 7 of the strategy: publish in English, and add a short Swahili question-and-answer block written by a native speaker on the posts about uneven floors and damp floors, where the problem is described in Swahili even when the product word stays English. Ask Sahihi's counter staff what customers actually say for "self-levelling", "primer" and "expansion joint".

---

## 3. Candidate posts (14)

Grades: E easy, M medium, H hard, for a new domain with good content, judged from the weakness of the returned pages. All grades are inferred from a US-located tool. Titles are 60 characters or fewer.

| # | Working title | Primary query | Secondary queries and questions | Intent | Who ranks now, and the weakness | Why Sahihi can win |
|---|---|---|---|---|---|---|
| 1 | Self-Levelling Compound: How Many Bags per Square Metre | self levelling compound per m2 | how much self levelling compound do I need; self levelling compound calculator; how many bags of self leveller for 20 m2; self levelling compound coverage per bag; kg per m2 per mm | Informational with buying intent (the reader is about to order) | UK retailers (protilertools.co.uk, cravendunnill.co.uk product pages), an Indian guide and calculator (studiomatrx.org), generic calculator sites (calculator.academy). Product pages give one coverage line; calculators use a generic 1.5 to 1.7 kg figure with no source. Grade E-M | Two stocked products with sheet-verified rates (1.6 and 1.7 kg/m² per mm) and real bag sizes (23 and 25 kg). A calculator that outputs whole bags of the product actually on the shelf in Dar es Salaam. The site already has tested calculator models |
| 2 | How Soon Can You Tile or Lay Vinyl on Levelling Compound | self levelling compound drying time | how long before tiling on self levelling compound; how long before vinyl on self leveller; when can I walk on self levelling compound; drying time before wood flooring; does humidity slow self levelling compound | Informational | protilertools.co.uk (1,200 words, 2025: table contradicts body text, no standard cited, no humidity thresholds), myjobquote.co.uk Q and A, flooringclarity.com (US), several scraped pages on unrelated domains. Grade E-M | Sheet-verified waiting times split by finish (tiles, resilient, wood) for two products, plus an honest note that the sheet times are measured at +23°C and that Dar es Salaam is hotter and more humid |
| 3 | Screed or Self-Levelling Compound: Which Does a Floor Need | screed vs self levelling compound | difference between screed and self levelling; can I use self levelling compound instead of screed; when to use floor screed; self levelling over screed; how thick should floor screed be | Informational, comparison | flowcrete.eu (about 750 words, 2023, no table, no diagram, no standard, promotes its own products), squote.app (about 2,000 words, UK, has a table but contradicts itself on drying rate by a factor of four), materialsmarket.com, forums (diynot, tilersforums). Grade M | A depth-led decision table using sheet figures at each depth band, the site-mixed screed route with a latex additive that Sahihi stocks, and a build-up diagram. Nobody ranking ties the answer to products with public data sheets |
| 4 | Do You Need a Primer Before Self-Levelling Compound? | primer before self levelling compound | why prime before self levelling; what primer for self levelling compound; can I use PVA instead of primer; pinholes in self levelling compound; how long should primer dry before levelling | Informational | Manufacturer pages (usa.sika.com, bostik.com), retailer guides (toppstiles.co.uk, wallsandfloors.co.uk), a US resin blog on pinholes (duraamen.com). All tied to their own primer, none gives dilution by substrate in one table. Grade M | One table: substrate, primer, dilution, drying time, consumption, all from the Primer G and Triblock P sheets. The honest note that the damp-substrate primer is a different product from the general one |
| 5 | Is Your Slab Dry Enough for Vinyl, SPC or Wood Flooring? | concrete moisture test before flooring | how dry should concrete be before vinyl flooring; 75% RH concrete; how to test moisture in a concrete floor; plastic sheet test concrete; how long should a new slab dry before flooring; moisture barrier for concrete floor | Informational | US meter vendors (wagnermeters.com, lignomatusa.com), US trade magazine (floortrendsmag.com), US blog (flooringclarity.com). All North American, all selling meters, none addresses a climate where the air itself sits at 75 to 84% RH. Grade M (H without the local angle) | The Dar es Salaam humidity table against the 75% line; the damp-substrate primer and its sheet limits; a clear statement of what each stocked product does and does not do on a damp slab |
| 6 | Damp Concrete Floors: Membrane, Barrier or Primer? | damp proof membrane concrete floor | rising damp in floor; floor tiles lifting from damp; how to stop damp coming through concrete floor; DPM under slab thickness; epoxy moisture barrier for concrete floor; damp floor Kenya / Tanzania | Informational, problem-led | Kenya: only Jiji listings for polythene DPM. Explainers: UK damp-proofing firms (permagard.co.uk, petercox.com, safeguardeurope.com, wisepropertycare.com) and designingbuildings.co.uk. Nothing East African. Grade E with a regional angle | Local problem (saline coastal ground and two rainy seasons, both already noted in `SEO-STRATEGY.md` section 3) with a stocked surface-applied answer and its limits. Pairs with the planned "why tiles lift" post |
| 7 | Preparing a Concrete Floor for SPC and LVT in East Africa | SPC flooring subfloor preparation | can SPC be laid on uneven floor; how flat must a floor be for SPC; SPC flooring over tiles; does SPC need underlay on concrete; SPC flooring moisture barrier; LVT glue down subfloor | Informational | US manufacturer PDFs (COREtec via shawinc.com, lowes.com, roomvo.com), a Kenyan seller FAQ (aliglaziers.co.ke: subfloor covered in one line), scraped "SPC flooring ruining your dreams" pages. Grade E | Kenyan and Tanzanian SPC sellers do not explain the subfloor. Sahihi sells what goes under the plank, so it can write the page the plank sellers will not. Check first whether Sahihi sells SPC at all (it is not in `catalogue.ts`) |
| 8 | Gluing a Wooden Floor to Concrete in a Humid Climate | wood flooring on concrete | parquet adhesive for concrete; can you glue hardwood to concrete; wood floor moisture barrier concrete; wooden flooring Kenya / Tanzania installation; why wooden floors cup; parquet on tiles | Informational | US and UK trade sites (jlconline.com, finehomebuilding.com, ukflooringdirect.co.uk, junckers.com, heartpine.com), Kenyan directory and Jiji service listings. No East African how-to. Grade M | A stocked parquet adhesive with sheet limits, a stocked damp-substrate primer named by its sheet for wooden floors, and the levelling compound minimum (3 mm under wood). Coastal humidity angle |
| 9 | How to Fix an Uneven Floor Before Tiling | how to level uneven floor before tiling | uneven concrete floor fix; can I tile over an uneven floor; self levelling vs thick bed adhesive; how flat should a floor be for tiles; grinding high spots concrete; sakafu isiyo sawa (inferred) | Informational, DIY and fundi | UK and US home sites (homebuilding.co.uk, wallsandfloors.co.uk, bobvila.com, makeitright.ca, stonesuperstore.co.uk), forums, scraped pages. No African result for the Kenya-worded query. Grade M | A decision by depth: adhesive bed (sheet limit 15 mm), levelling compound (1 to 10 mm), bonded screed above that. All three are stocked and sheet-verified. Swahili FAQ block candidate |
| 10 | How Thick Can Self-Levelling Compound Be Poured? | how thick can self levelling compound be | maximum thickness self levelling compound; minimum thickness self levelling; can you pour self leveller in two layers; self levelling compound 20 mm; self levelling over tiles | Informational | UK retailer category and product pages, squote.app FAQ, studiomatrx.org FAQ, forums. Answers vary by product and rarely cite the sheet. Grade M | Exact sheet answers: 1 to 10 mm per layer, up to 20 mm with quartz sand added, 3 mm minimum under castor chairs and under wood, plus the second-layer rule. May be better as a section of post 1 or 3 than as its own URL |
| 11 | Movement Joints in Tiled Floors: Where and How Wide | movement joints in tiled floors | expansion joints in floor tiles; how often do you need expansion joints in tiles; tile expansion joint spacing; perimeter joint tiles; why tiles tent or pop; movement joints outdoor tiles | Informational, specifier and tiler | UK trade body (tiles.org.uk, about 600 words, 2025), UK trade magazine (tileandstonejournal.com, 2024), forums, a product instruction PDF. Authoritative but UK-only and thin; internal spacing figures not given on either page. Grade M-H | Heat is the local angle: sun-exposed terraces and verandas in a city with mean daily maxima near 30 to 33°C. Ties directly to the planned "why tiles lift" post and to stocked sealants. Needs the standard itself before publishing spacing for interior floors |
| 12 | Joint Sealant Sizing: Width, Depth and Metres per Pack | joint sealant width to depth ratio | how much sealant per metre; sealant coverage calculator; expansion joint sealant depth; what is a backing rod for; how wide should an expansion joint be; expansion joint sealant Tanzania | Informational with buying intent | Chinese exporter landing pages aimed at "Tanzania importers" (siwaycurtain.com), a South African catalogue page (fowkes.co.za), Gulf manufacturer pages and PDFs (middleeast.weber), alibaba listings, one LinkedIn post from Dar es Salaam. No calculator, no local guide. Grade E with Tanzania, M generic | Three stocked sealants across three chemistries, each with a printed sizing rule and a printed metres-per-pack table. A calculator that returns cartridges or litres. No ranking page offers that |
| 13 | Polyurethane or Polysulphide Sealant: Which Joint, Which One | polyurethane vs polysulphide sealant | polysulphide sealant uses; best sealant for expansion joints in concrete; sealant for water tank joints; high modulus vs low modulus sealant; can you paint polyurethane sealant; sealant movement accommodation | Informational, comparison | Not checked live (no searches left). Inferred from query 8 and 15 results: manufacturer and exporter pages. Grade M (inferred) | Side-by-side from three sheets: movement capability, where each is allowed (traffic, immersion, facades), where each is excluded. Honest about limits (for example one is not for damp surfaces, another not for chlorinated pools) |
| 14 | Sealing Around Windows and Doors Against Driving Rain | how to seal gaps around window frames | best sealant for window frames outside; silicone or polyurethane for windows; water leaking around window frame when it rains; sealing aluminium windows to plaster; window sealant Kenya / Tanzania | Informational, homeowner and fundi | US and UK home sites (angi.com, engineerfix.com about 950 words 2025, klarwindows.co.uk, homedepot.com), Australian DIY forum (bunnings.com.au), auto-generated pages. None covers aluminium frames in plastered blockwork, heavy tropical rain, joint sizing or backing rod depth. Grade M | A stocked sealant whose sheet names "around window and door frame" as a typical use, with joint width and depth rules. Masika and vuli rain angle. Note: no silicone is in `catalogue.ts`, so the post must be honest about where silicone is the better choice |

**Suggested publish order (inferred):** 1, 2, 12, 5, 3, 4, then 9, 6, 7, 8, 14, 11, 13, with 10 folded into 1 or 3.

---

## 4. The best six, in detail

Product names are as in `src/config/catalogue.ts`. Internal links use the built routes; X-Calibur item pages exist at `/x-calibur/<item>`; Oriental Yuhong products are anchors on `/products` until their pages ship. Several sheets also name Mapei products that are **not** in `catalogue.ts` (Eco Prim T Plus ME, Topcem, Mapecem, Mapefoam, Primerseal M, Mapeflex PU40, Mapesil LM). Do not link or imply stock for those until the owner confirms.

Source keys used below (full URLs in section 7): [EC20] Ultraplan EC20 sheet, [UC] Ultraplan Contract sheet, [PG] Primer G sheet, [TP] Triblock P sheet, [LB] Lignobond sheet, [PSN] Primer SN sheet, [PSP] Planicrete SP sheet, [KMS1] Keraflex Maxi S1 sheet, [MF45] Mapeflex PU 45 FT sheet, [XS] X-Seal PS800 sheet, [XSP] X-Seal PS800 Primer sheet, [YH] YHPUseal-2925 sheet, [WIKI-DAR] Dar es Salaam climate table, [FERFA], [DB-SCREED], [DB-DPM], [TTA], [WAGNER], [COREtec].

### 4.1 Post 1 - Self-Levelling Compound: How Many Bags per Square Metre

**Outline**

- H2 The short answer: kilograms per square metre per millimetre
- H2 Work out your average thickness first
  - H3 Measuring an uneven floor with a straightedge or a laser
  - H3 Why the deepest hollow is not the average
- H2 Bags needed, by area and thickness (table)
- H2 Water per bag, and why not to add more
- H2 What changes the number on site
  - H3 Porous or dusty concrete and the primer coat
  - H3 Minimum thickness under castor chairs and under wood
  - H3 Going above 10 mm
- H2 The primer you need on top of the bags
- H2 Calculator
- H2 FAQ

**Facts and figures the post needs**

| Fact | Value | Source |
|---|---|---|
| Ultraplan Eco 20 consumption | 1.6 kg/m² per mm of thickness | [EC20] |
| Ultraplan Eco 20 bag | 23 kg | [EC20] |
| Ultraplan Eco 20 water | 5.5 to 5.75 litres per 23 kg bag (24 to 25 parts per 100) | [EC20] |
| Ultraplan Eco 20 thickness | 1 to 10 mm per layer; above 10 mm (max. 20 mm) add approx. 30% by weight of 0.5 mm quartz | [EC20] |
| Ultraplan Eco 20 minimum under wheeled loads such as chairs and trolleys | 3 mm recommended | [EC20] |
| Ultraplan Contract consumption | 1.7 kg/m² per mm of thickness | [UC] |
| Ultraplan Contract bag | 25 kg | [UC] |
| Ultraplan Contract water | 5 to 5.25 litres per 25 kg bag (20 to 21%) | [UC] |
| Ultraplan Contract thickness | 1 to 10 mm per coat; not less than 3 mm when wooden flooring is to be installed | [UC] |
| Primer G consumption | 0.08 to 0.15 kg/m² | [PG] |
| Pot life | Eco 20: 20 to 30 minutes. Contract: 20 to 35 minutes in the table, 20 to 30 in the mixing text | [EC20], [UC] |
| Generic planning range used by other calculators | 1.5 to 1.7 kg/m² per mm (unsourced on that page; quote only to show Sahihi's figures sit inside it) | https://www.studiomatrx.org/guides/self-leveling-compound-india |

Derived arithmetic (mine, from the sheet rates; recompute in code, do not copy by hand): one 23 kg bag of Ultraplan Eco 20 covers 14.4 m² at 1 mm, 4.8 m² at 3 mm, 2.9 m² at 5 mm, 1.4 m² at 10 mm. One 25 kg bag of Ultraplan Contract covers 14.7 m² at 1 mm, 4.9 m² at 3 mm, 2.9 m² at 5 mm, 1.5 m² at 10 mm. A 20 m² room at an average 5 mm needs 160 kg of Eco 20 (7 bags) or 170 kg of Contract (7 bags). No waste percentage is printed on either sheet; if the post suggests an allowance, label it as site practice, not a manufacturer figure.

**Sahihi products and pages to link**

- Ultraplan Eco 20 (`/mapei/primers-levelling/ultraplan-eco-20`), Ultraplan Contract (`/mapei/primers-levelling/ultraplan-contract`), Primer G (`/mapei/primers-levelling/primer-g`), Quarzo 0.5/1.2 (`/mapei/resin-flooring/quartz-sand`; check the grading against the 0.5 mm quartz the sheet asks for before linking it as the extender)
- Pillar: `/mapei/primers-levelling`; planned `/solutions/epoxy-flooring/self-levelling`
- Journal: "How much tile adhesive per square metre" (planned post 5 in section 5.4) as the sister post

**Data table idea.** Bags needed for 10, 20, 50 and 100 m² at 3, 5 and 10 mm, one block per product, rounded up to whole bags, with the litres of water alongside.

**Diagram idea.** A cross-section of an uneven slab with a straightedge on it: high spot, hollow, the poured level line, and the "average thickness" shaded so the reader sees why the order is based on the average, not the deepest point.

**Interactive or 3D idea.** A calculator with two modes: simple (area and thickness) and survey (enter up to nine depth readings on a 3 x 3 grid of the room). In survey mode a small 3D height map of the floor fills with compound as a "pour level" slider rises, and the bag count updates live. Reuses the models in `src/config/mapei-coverage.ts`. Heavy-item flag: a WebGL or Three.js height map must be flagged to the owner before it is built; an SVG isometric grid does the same job at a fraction of the weight.

**FAQ block**

1. How many square metres does one bag of self-levelling compound cover?
2. How do I work out the average thickness of an uneven floor?
3. How much water goes into one bag?
4. Can I add extra water to make it flow further?
5. What is the thinnest layer I can pour?
6. Can I pour more than 10 mm in one go?
7. How much primer do I need for the same floor?
8. Should I order extra, and how much?

### 4.2 Post 2 - How Soon Can You Tile or Lay Vinyl on Levelling Compound

**Outline**

- H2 The short answer, by floor finish (table)
- H2 Set, walkable, ready to cover: three different times
- H2 Tiles
- H2 Vinyl, SPC, LVT and carpet
- H2 Wooden floors
- H2 What the data sheet times assume
  - H3 +23°C and normal humidity
  - H3 Dar es Salaam is warmer and more humid: what that does
  - H3 Thickness and ventilation
- H2 Pouring a second layer: the timing window
- H2 When the slab underneath is the real problem
- H2 FAQ

**Facts and figures the post needs**

| Fact | Ultraplan Eco 20 | Ultraplan Contract | Source |
|---|---|---|---|
| Setting time | 45 to 60 minutes | not printed as a row | [EC20] |
| Set to light foot traffic | min. 3 h | min. 3 h | [EC20], [UC] |
| Wait before ceramic tiles | min. 3 h | min. 3 h | [EC20], [UC] |
| Wait before resilient and carpet | min. 24 h | min. 24 h (resilient and wood) | [EC20], [UC] |
| Wait before wood flooring | min. 48 h | min. 24 h, and at least 3 mm thick | [EC20], [UC] |
| Compressive strength | above 20 N/mm² at 28 days | 12 MPa at 1 day, 20 MPa at 7 days, 30 MPa at 28 days | [EC20], [UC] |
| Application temperature | +5°C to +40°C; do not attempt large areas above +30°C | +5°C to +40°C | [EC20], [UC] |
| Second layer | apply as soon as the first is set to light foot traffic (approx. 3 hours at +23°C); if the first is completely dry, prime first | if the previous coat is completely dry, prime first | [EC20], [UC] |
| Times vary with conditions | all waiting times are "at +23°C"; "time can vary depending on the thickness of the levelling, the room temperature and humidity" | "the time can vary, depending on the room temperature and humidity" | [EC20], [UC] |
| Not for | exterior, continuous rising damp, metal | exterior, continuous rising damp | [EC20], [UC] |

| Climate fact | Value | Source |
|---|---|---|
| Dar es Salaam mean relative humidity by month | 75% (September) to 84% (April); annual 79% | [WIKI-DAR] (credits Deutscher Wetterdienst for humidity, 1991 to 2020) |
| Mean daily maximum | 29.7°C (July) to 32.8°C (February) | [WIKI-DAR] (credits NOAA) |
| Wettest months | April 263.6 mm, May 172.2 mm, March 169.6 mm; November 114.4 mm, December 110.2 mm | [WIKI-DAR] |

Do not state how many extra hours humidity adds. Neither sheet gives a figure and none was found in a citable source. The honest wording is that the sheet minimums are minimums at +23°C, that drying slows in humid still air, and that moisture-sensitive finishes should be checked with a meter. The competitor range of "48 to 72 hours for vinyl and wood" seen in search results could not be traced to a manufacturer and must not be repeated.

**Sahihi products and pages to link**

- Ultraplan Eco 20, Ultraplan Contract, Primer G, Triblock P (`/mapei/primers-levelling/triblock-p`), Lignobond (`/mapei/primers-levelling/lignobond`), Keraflex Maxi S1 (`/mapei/tile-adhesives-grouts/keraflex-maxi-s1`) for the tiling step
- Pillar: `/mapei/primers-levelling`. Journal: planned post 8 (resin floors and humidity) and post 5 of this file

**Data table idea.** Finish (tiles, vinyl / SPC / LVT, carpet, wood) against product (Eco 20, Contract): earliest time to cover, minimum thickness, and the condition attached.

**Diagram idea.** A horizontal timeline from pour to 48 hours with markers: pot life ends, set, walk on it, tile it, lay vinyl, lay wood, one track per product.

**Interactive or 3D idea.** A "when can I cover it" picker: choose product, finish and pour time of day; it returns the earliest clock time and date from the sheet minimums, with a fixed caution line about temperature and humidity. No 3D needed here.

**FAQ block**

1. How long until I can walk on self-levelling compound?
2. How long before I can tile over it?
3. How long before vinyl, SPC or LVT?
4. How long before a wooden floor?
5. Does humidity slow it down?
6. Can I use a fan or open windows to speed it up?
7. Can I pour a second layer the same day?
8. Why did my levelling compound crack or dust?

### 4.3 Post 3 - Screed or Self-Levelling Compound: Which Does a Floor Need

**Outline**

- H2 The deciding question: how many millimetres are you making up?
- H2 What each one is
  - H3 Sand and cement screed
  - H3 Self-levelling compound
- H2 Side by side (table)
- H2 By depth: which to use
  - H3 Up to 10 mm
  - H3 10 to 20 mm
  - H3 Above 20 mm, up to 50 mm
  - H3 Above 50 mm
- H2 Using both: screed for the build-up, compound for the finish
- H2 How long each takes before tiles
- H2 Bonding a new screed to old concrete
- H2 What neither will fix: damp, cracks that move, a weak slab
- H2 FAQ

**Facts and figures the post needs**

| Fact | Value | Source |
|---|---|---|
| Self-levelling range, both stocked products | 1 to 10 mm per layer | [EC20], [UC] |
| Above 10 mm with Ultraplan Eco 20 | max. 20 mm, with approx. 30% by weight of 0.5 mm quartz added | [EC20] |
| Self-levelling classification | Ultraplan Eco 20: EN 13813 CT-C20-F5-A1FL | [EC20] |
| Site-mixed screed with Planicrete SP: finish tolerance | "true and level to a tolerance in plane of ±3 mm in 3 m" | [PSP] |
| Site-mixed screed with Planicrete SP: cure before tiling | "at least 28 days (or 1 week per cm thickness)" | [PSP] |
| Site-mixed screed above 50 mm | "use a properly graded concrete mix designed to meet job requirements" | [PSP] |
| Bond coat for a new screed on old concrete | cement slurry with Planicrete SP, screed laid while the slurry is wet; never use the latex neat | [PSP] |
| Tile adhesive's own rule on screeds | cementitious screeds cured at least 28 days before tiling unless made with special binders; render one week per cm | [KMS1] |
| Thick-bed adhesive limit, for small corrections while tiling | up to 15 mm | [KMS1] |
| Typical sand and cement screed thicknesses (UK practice, secondary source) | bonded 25 to 40 mm; unbonded about 50 mm minimum; floating above 65 mm, 75 mm for heavier loads | [DB-SCREED] |
| Typical screed mix (UK practice, secondary source) | 1:3 to 1:4.5 cement to sand | [DB-SCREED] |
| Standard for screeds | BS 8204 (named by the secondary source; not read) | [DB-SCREED] |
| Time to tile on self-levelling compound | min. 3 h on both products | [EC20], [UC] |

The contrast that makes the post: 3 hours against 28 days before tiling, both from Mapei sheets. Do not quote a "1 mm per day" drying rule: one ranking page prints it two different ways and neither the Mapei sheets nor the secondary source fetched here state it. The Planicrete SP mixing ratio table was not extracted for this report; take the ratios from the sheet when writing.

**Sahihi products and pages to link**

- Ultraplan Eco 20, Ultraplan Contract, Primer G, Planicrete SP (`/mapei/concrete-repair/planicrete-sp`), Eporip (`/mapei/concrete-repair/eporip`) for cracks before levelling, Keraflex Maxi S1
- Pillars: `/mapei/primers-levelling`, planned `/solutions/epoxy-flooring/self-levelling`, planned `/solutions/tile-installation`
- Journal: planned post 4 (tile adhesive or sand and cement)

**Data table idea.** Sand and cement screed against self-levelling compound: thickness range, how it is placed, flatness achieved, time to walk on, time to tile, time before vinyl or wood, what it needs underneath, source for each cell.

**Diagram idea.** Two labelled floor build-ups side by side at the same scale: slab, bond coat, 40 mm screed, adhesive, tile; and slab, primer, 5 mm compound, adhesive, tile.

**Interactive or 3D idea.** A depth chooser: a slider from 0 to 80 mm "to make up". As it moves, an exploded 3D floor section changes its layers (primer and compound; compound with quartz; bonded screed; concrete) and the recommendation text and waiting time change with it. Flag before building if done in Three.js; a layered SVG with CSS transforms is the light version.

**FAQ block**

1. What is the difference between screed and self-levelling compound?
2. Can I use self-levelling compound instead of a screed?
3. How thick should a floor screed be?
4. Can I pour self-levelling compound over a new screed, and when?
5. Which is faster if I need to tile this week?
6. Which should go under vinyl, SPC or a wooden floor?
7. Do I still need a primer on a screed?
8. Will either one stop damp coming up through the floor?

### 4.4 Post 4 - Do You Need a Primer Before Self-Levelling Compound?

**Outline**

- H2 The short answer
- H2 What a primer does under levelling compound
  - H3 Evens out absorption
  - H3 Stops the mix drying too fast
  - H3 Binds dust
- H2 What goes wrong without it: pinholes, poor flow, debonding
- H2 Which primer for which floor (table)
  - H3 Dusty or porous concrete and screeds
  - H3 Gypsum and anhydrite
  - H3 Old tiles, terrazzo and stone
  - H3 Damp concrete
  - H3 Between two layers of compound
- H2 Dilution, coverage and drying time
- H2 Mistakes: too thick a film, pouring on wet primer, priming a damp slab with the wrong product
- H2 FAQ

**Facts and figures the post needs**

| Fact | Value | Source |
|---|---|---|
| What Primer G is | synthetic resin primer in water dispersion, very low VOC; EMICODE EC1 Plus | [PG] |
| Stated purposes | improves adhesion of smoothing compounds; gives uniform absorption | [PG] |
| What it does under self-levelling compound, in Mapei's words | "Primer G reduces the formation of air bubbles and helps prevent over-rapid drying making self-levelling easier" | [PG] |
| Dilution on cementitious substrates before self-levelling | 1:1 with water | [PG] |
| Dilution on gypsum-based substrates | neat | [PG] |
| Dilution between smoothing layers | 1:1 with water | [PG] |
| Conflicting figure on the Ultraplan EC20 sheet | "1 part Primer G with 3 parts of water" on dusty or very porous concrete | [EC20] - see section 2.2 |
| Drying time before levelling | concrete 30 minutes; gypsum 30 to 60 minutes | [PG] |
| Consumption | 0.08 to 0.15 kg/m² | [PG] |
| Film warning | do not apply so much that it forms a surface film | [PG] |
| Where Primer G is not recommended | external use, rising damp, magnesium substrates; it does not waterproof gypsum | [PG] |
| Ceramic and natural stone under Ultraplan Eco 20 | the sheet names Eco Prim T Plus ME, not Primer G | [EC20] - product not in `catalogue.ts` |
| Cracks before levelling | repair with Eporip first | [EC20], [UC] |
| Damp substrates | Triblock P: three-component epoxy-cementitious primer for damp substrates; for cementitious substrates with residual humidity above the level recommended for wooden, resilient and resin floors, and for old ceramic or terrazzo on damp substrates | [TP] |
| Triblock P consumption | 250 to 300 g/m² per coat non-absorbent, 400 to 500 g/m² per coat absorbent; two criss-cross coats, 4 to 6 hours apart | [TP] |
| Triblock P overcoating window | minimum 24 hours, maximum 7 days | [TP] |
| Triblock P not for | free-standing water; dusty or flaky surfaces; anhydrite or gypsum; old smoothing layers; cracks subject to movement | [TP] |
| Why other manufacturers say to prime | to reduce pinholing on absorbent substrates (guidance summarised in search results; the page itself returned 404). Not needed: the Primer G sheet line above makes the same point from a source Sahihi can cite | Not verified at source |

**Sahihi products and pages to link**

- Primer G, Triblock P, Ultraplan Eco 20, Ultraplan Contract, Eporip, Primer SN (`/mapei/resin-flooring/primer-sn`) only in a one-line pointer that resin floors use a different primer
- Pillar: `/mapei/primers-levelling`

**Data table idea.** Substrate (new concrete, dusty old screed, gypsum, anhydrite, old tiles, damp concrete, previous layer of compound) against primer, dilution, drying time, consumption and source. Leave the old-tiles row marked "ask us" until the owner confirms whether Eco Prim T Plus is stocked.

**Diagram idea.** Two cross-sections of the same pour: unprimed (air rising from the pores as pinholes, water being sucked into the slab, a ragged edge of flow) and primed (sealed pores, even flow).

**Interactive or 3D idea.** A "which primer" selector: pick the substrate and whether it is damp; it returns the primer, the dilution, litres needed for the area entered and the wait before pouring. A simple water-drop absorption test animation (drop soaks in fast, slow, or beads) helps the reader classify their own floor. No 3D needed.

**FAQ block**

1. Do I always need a primer before self-levelling compound?
2. Can I use PVA or diluted wood glue instead?
3. How long should the primer dry before I pour?
4. How much do I dilute the primer on concrete?
5. What causes pinholes in self-levelling compound?
6. Which primer goes on a damp concrete floor?
7. Do I prime between two layers of compound?
8. Can I prime old tiles and level over them?

### 4.5 Post 5 - Is Your Slab Dry Enough for Vinyl, SPC or Wood Flooring?

**Outline**

- H2 Why a concrete floor that looks dry can still ruin a floor finish
- H2 Where the moisture comes from
  - H3 Water left from the pour
  - H3 Ground moisture with no membrane under the slab
  - H3 Rain during construction: masika and vuli
- H2 How dry is dry enough: the 75% line
- H2 Dar es Salaam air, month by month (table and chart)
- H2 How to test a slab
  - H3 Hygrometer and in-slab probes
  - H3 Carbide meter
  - H3 The polythene sheet check, and what it cannot tell you
- H2 If the slab fails the test
  - H3 Wait and ventilate
  - H3 A surface-applied damp-substrate primer, and its limits
  - H3 When the cause is rising damp
- H2 Then level, then lay
- H2 FAQ

**Facts and figures the post needs**

| Fact | Value | Source |
|---|---|---|
| Dar es Salaam mean relative humidity | Jan 77, Feb 76, Mar 80, Apr 84, May 81, Jun 78, Jul 77, Aug 76, Sep 75, Oct 76, Nov 78, Dec 78; year 79 (%) | [WIKI-DAR], 1991 to 2020, Julius Nyerere International Airport; humidity credited to Deutscher Wetterdienst. Go to the primary source before publishing |
| Rainfall | 1,117.4 mm a year in the table (the article text says about 1,150 mm); April 263.6 mm | [WIKI-DAR] |
| Resin flooring association limit, hygrometer method | epoxy "Not exceed 75% RH"; polyurethane "Not exceed 85% RH" | [FERFA] |
| ASTM F2170 as summarised by a meter vendor | concrete "should have a relative humidity reading of 75% or less before installation", varying by flooring manufacturer; probes at 40% of slab depth when drying from one side, 20% from both; 3 tests for the first 1,000 square feet and 1 per additional 1,000; 24 hours to equilibrate | [WAGNER] - vendor summary, standard not read |
| One SPC maker's own limits, to show that limits vary by product | flatness 3/16 inch in 10 feet; pH 7 to 10; 6 mil polythene film required for floating installation over concrete | [COREtec] |
| Damp-proof membrane under a slab (UK guidance, secondary) | at least 300 micrometres (1200 gauge) with sealed joints, continuous with the damp-proof course in the walls | [DB-DPM] |
| Parquet adhesive sheet on rising damp | do not lay on screeds not protected against rising damp; "always lay a vapour-proof sheath between the ground and the load-bearing screed" | [LB] |
| Parquet adhesive sheet on testing | check screed humidity through its entire thickness with an electric or carbide hygrometer; the maximum is the one prescribed by the flooring manufacturer | [LB] |
| Damp-substrate primer | Triblock P: for cementitious substrates with residual humidity higher than recommended for wooden, resilient and resin floors | [TP] |
| Triblock P application | two coats, 250 to 500 g/m² per coat depending on absorbency; floors or smoothing compound applied from 24 hours up to 7 days after | [TP] |
| Triblock P limits | not on free-standing water, not on anhydrite or gypsum, not over old smoothing layers, rigid so not on moving cracks | [TP] |
| Levelling compounds and damp | both Ultraplan products: do not use on substrates subject to continuous rising damp | [EC20], [UC] |
| Epoxy primer limit, for the cross-link to resin floors | Primer SN: substrate moisture no higher than 4% and no capillary rising damp (checked with a sheet of polythene) | [PSN] |

Statements to avoid until sourced: any limit attributed to BS 8203 (not read; no source fetched names it), a 65% RH limit for wood (seen only in search summaries and one unsourced UK page), any "one month per inch" slab drying rule (not found in a citable source here). The inference that ambient air at 75 to 84% RH slows slab drying in Dar es Salaam is reasonable building physics but is mine; word it as a caution and send the reader to a test.

**Sahihi products and pages to link**

- Triblock P, Ultraplan Eco 20, Ultraplan Contract, Primer G, Lignobond, Primer SN (cross-link only)
- Pillars: `/mapei/primers-levelling`, `/mapei/resin-flooring`
- Journal: planned post 8 (resin floors and humidity), planned post 9 (why tiles lift), post 6 of this file (damp floors)

**Data table idea.** The twelve-month humidity and rainfall table for Dar es Salaam with a column marking months at or above 75% RH (all twelve) and the two rainy seasons, so a contractor can see that there is no "dry air" month to wait for.

**Diagram idea.** A ground-floor slab in section showing three moisture routes (construction water leaving upward, ground moisture rising where there is no membrane, rain entering at the edges) and where each remedy sits: membrane under the slab, damp-substrate primer on top, levelling compound, floor finish.

**Interactive or 3D idea.** An exploded 3D floor build-up the reader can pull apart layer by layer (hardcore, membrane, slab, damp-substrate primer, levelling compound, adhesive, plank), with a toggle "no membrane under the slab" that shows moisture reaching the finish. Alongside it, the monthly humidity chart with a draggable 75% line. Flag the 3D model as a heavy item before building.

**FAQ block**

1. How long should a new concrete slab dry before vinyl or wood flooring?
2. What moisture level is safe for vinyl, SPC and LVT?
3. How do I test a concrete floor for moisture without a meter?
4. Is SPC flooring waterproof, and does that mean the slab does not matter?
5. Can I lay flooring during the rainy season?
6. What can I put on a damp slab so I can still lay the floor?
7. Does self-levelling compound act as a moisture barrier?
8. My house has no membrane under the slab. What are my options?

### 4.6 Post 12 - Joint Sealant Sizing: Width, Depth and Metres per Pack

**Outline**

- H2 Why joints fail: the shape of the bead, not the brand
- H2 Width: how much the joint moves decides how wide it must be
- H2 Depth: the rule on each data sheet (table)
- H2 Backing rod and bond breaker: why the sealant must only stick to two sides
- H2 Primer for joint edges
- H2 Metres per cartridge, sausage or litre (table)
- H2 Floors and traffic joints
- H2 Facades and around window and door frames
- H2 Water tanks and wet joints
- H2 Calculator
- H2 FAQ

**Facts and figures the post needs**

| Fact | Value | Source |
|---|---|---|
| Mapeflex PU 45 FT: type and class | paintable, rapid, high modulus polyurethane sealant and adhesive; ISO 11600 class F20 HM; EN 15651-1 F-EXT-INT-CC and EN 15651-4 PW-EXT-INT-CC, class 20 HM | [MF45] |
| Mapeflex PU 45 FT: movement in service | up to 20% of the average joint width | [MF45] |
| Mapeflex PU 45 FT: depth rule | width up to 10 mm: depth same as width; 11 to 20 mm: 10 mm in all cases; over 20 mm: half the width | [MF45] |
| Mapeflex PU 45 FT: metres per 600 ml | 5 x 5 mm: 24; 10 x 10: 6; 15 x 10: 4; 20 x 10: 3; 25 x 12.5: 1.9; 30 x 15: 1.3 | [MF45] |
| Mapeflex PU 45 FT: backing | closed-cell polyethylene cord at the bottom of expansion and contraction joints to set the depth | [MF45] |
| Mapeflex PU 45 FT: cure | dust dry 35 minutes; 3.3 mm in 24 h, 5.2 mm in 48 h, 8.5 mm in 7 days | [MF45] |
| Mapeflex PU 45 FT: properties | Shore A 40; elongation at break 700%; service -40°C to +70°C | [MF45] |
| Mapeflex PU 45 FT: not for | dusty or flaky surfaces; damp surfaces; stone and marble joints; bituminous surfaces that bleed oil | [MF45] |
| Mapeflex PU 45 FT: stocked pack | 600 ml, grey | `src/config/catalogue.ts` |
| X-Seal PG (sheet title X-Seal PS800): type | polysulphide joint sealant, gun and pouring grades; can be used in immersed conditions and in contact with potable water | [XS] |
| X-Seal PG: movement accommodation | butt joints 25%, lap joints 50% (BS 6093) | [XS] |
| X-Seal PG: joint range | 5 to 60 mm wide, 10 to 25 mm deep; width to depth 2:1 for movement joints | [XS] |
| X-Seal PG: minimum depth | 5 mm impervious substrates; 10 mm porous substrates; 20 mm traffic and hydrostatic joints | [XS] |
| X-Seal PG: metres per litre | 10 x 10 mm: 10.00; 20 x 15: 3.33; 20 x 20: 2.50; 25 x 15: 2.70; 25 x 25: 1.60; 30 x 20: 1.66 (full table on the sheet) | [XS] |
| X-Seal PG: cure | pot life 2 hours at 35°C; initial cure 24 hours at 25°C; full cure 7 days at 25°C | [XS] |
| X-Seal PG: limits | not in rain or wet conditions; do not part mix; not in contact with asphalt; no full immersion before full cure | [XS] |
| X-Seal PG: stocked pack | 4 litres (pouring grade) | `src/config/catalogue.ts` |
| X-Seal Primer | 1 litre is sufficient for 225 linear metres of 10 mm joint; touch dry 10 minutes at 30°C; re-prime if left more than 24 hours | [XSP] |
| YHPUseal-2925: type | single-component, moisture-curing polyurethane elastic joint sealant; typical uses include joints in concrete panel and wall systems and around window and door frames | [YH] |
| YHPUseal-2925: movement capability | ±25% (ASTM C719) | [YH] |
| YHPUseal-2925: joint rules | movement joints 8 to 40 mm wide; at least 8 mm deep, or width to depth 1:0.5 for facade joints and 1:0.8 for floor joints, whichever is greater | [YH] |
| YHPUseal-2925: properties | Shore A about 30; elongation at break 800% or more; service -40°C to 90°C | [YH] |
| YHPUseal-2925: not for | bitumen, natural rubber or EPDM; joints in and around chlorinated swimming pools; enclosed spaces with no air exchange | [YH] |
| YHPUseal-2925: stocked pack | 600 ml, grey | `src/config/catalogue.ts`, [YH] |
| External tiled floors: intermediate movement joints | "at intervals between 3m to 5m" (BS 5385 Part 3: 2024 as quoted by the UK tile trade body); joints "should penetrate the full depth of tile, bedding and levelling screed" | [TTA] - standard not read |

Derived arithmetic (mine): a rectangular bead uses width x depth in mm, divided by 1,000, in litres per metre. This reproduces the X-Seal table to rounding (25 x 15 mm = 0.375 litres per metre, about 2.7 metres per litre) and every row of the Mapeflex 600 ml column (10 x 10 mm = 0.1 litres per metre, 6 metres per 600 ml). The Mapeflex 300 ml column is not exactly half the 600 ml column at the two largest sizes, so the calculator should use the printed table where one exists and the formula only for sizes between rows. YHPUseal-2925 has no printed metres-per-pack table; the formula output for it must be labelled as calculated, not as the manufacturer's figure.

**Sahihi products and pages to link**

- Mapeflex PU 45 FT (`/mapei/waterproofing/mapeflex-pu-45-ft`), X-Seal PG (`/x-calibur/x-seal-pg`), X-Seal Primer (`/x-calibur/x-seal-primer`), YHPUseal-2925 (`/products` anchor until the Oriental Yuhong pages ship), Mapeproof Swell (`/mapei/waterproofing/mapeproof-swell`) as the pointer for construction joints below ground, which are a different job
- Hubs: `/mapei/waterproofing`, `/x-calibur`, planned `/oriental-yuhong`
- Journal: posts 11, 13 and 14 of this file; planned post 9 (why tiles lift)

**Data table idea.** The three sealants side by side: chemistry, movement capability, allowed joint width, depth rule, where the sheet allows it (traffic floors, facades, around frames, immersion, potable water), where the sheet forbids it, pack stocked.

**Diagram idea.** One joint in section, drawn three ways: correct (backing rod, hourglass bead bonded to two sides), too deep (bead tears in the middle), and three-sided adhesion with no backing rod (bead tears at the edge).

**Interactive or 3D idea.** A sealant calculator: joint width, depth and total length in, cartridges or litres out, with a warning when the chosen depth breaks the selected product's printed rule. Beside it, a 3D joint section with an "open and close" slider that stretches and compresses the bead to the product's movement limit (20% or 25%) and turns red beyond it. A CSS or SVG transform is enough; no heavy library is needed.

**FAQ block**

1. How deep should sealant be in an expansion joint?
2. What is a backing rod and do I need one?
3. How many metres does a 600 ml sausage of sealant do?
4. How wide should a movement joint be?
5. Do I need to prime the joint before sealing?
6. Which sealant can go in a water tank joint?
7. Can I paint over polyurethane sealant?
8. Why did my sealant split down the middle or peel off one side?

---

## 5. FAQ questions for the remaining eight posts

These are question lists only; answers must be written from the data sheets when the post is drafted.

**Post 6 - Damp Concrete Floors: Membrane, Barrier or Primer?**
1. Why is my concrete floor damp when there is no leak?
2. What is a damp-proof membrane and where does it go?
3. How thick should the polythene under a slab be?
4. Can I fix a damp floor without breaking up the slab?
5. Will tiles stick to a damp floor?
6. Is a damp-substrate primer the same as waterproofing?
7. Why are my floor tiles lifting or showing white salts?

**Post 7 - Preparing a Concrete Floor for SPC and LVT in East Africa**
1. How flat does a floor need to be for SPC?
2. Can SPC or LVT be laid over existing tiles?
3. Do I need an underlay or polythene sheet on concrete?
4. Can I lay SPC on a new slab straight away?
5. Should I use levelling compound before SPC?
6. Why are my SPC joints separating or the planks lifting?
7. Is SPC a good choice on the coast?

**Post 8 - Gluing a Wooden Floor to Concrete in a Humid Climate**
1. Can I glue a wooden floor straight onto concrete?
2. How dry must the screed be before parquet?
3. What adhesive is used for parquet on concrete?
4. Do doors and windows need to be in before the floor is laid?
5. How thick must levelling compound be under a wooden floor?
6. When can I sand the floor after gluing?
7. Why do wooden floors cup or lift near the coast?

**Post 9 - How to Fix an Uneven Floor Before Tiling**
1. Can I tile straight over an uneven floor?
2. How do I check how uneven my floor is?
3. Can I just use thicker tile adhesive to level the floor?
4. When should I grind high spots instead of filling hollows?
5. Self-levelling compound or screed for a floor that is 20 mm out?
6. How long after levelling can I tile?
7. Do large-format tiles need a flatter floor?

**Post 10 - How Thick Can Self-Levelling Compound Be Poured?**
1. What is the maximum thickness in one pour?
2. What is the minimum thickness?
3. Can I pour two layers to go thicker?
4. Can I add sand to self-levelling compound to go deeper?
5. Can I use self-levelling compound outdoors?
6. Can self-levelling compound be the final floor surface?

**Post 11 - Movement Joints in Tiled Floors: Where and How Wide**
1. Do tiled floors really need expansion joints?
2. How far apart should movement joints be outdoors?
3. Where do perimeter joints go?
4. Can I fill a movement joint with grout?
5. Do joints in the slab need to carry through the tiles?
6. Why did my tiles lift into a tent shape in the heat?
7. What sealant goes in a tile movement joint?

**Post 13 - Polyurethane or Polysulphide Sealant: Which Joint, Which One**
1. What is the difference between polyurethane and polysulphide sealant?
2. Which is better for joints in concrete floors with traffic?
3. Which can stay under water?
4. What does high modulus mean?
5. Which sealant can be painted?
6. Do both need a primer?
7. How long does each take to cure?

**Post 14 - Sealing Around Windows and Doors Against Driving Rain**
1. Why does water come in around my window frame when it rains?
2. What sealant should I use between an aluminium frame and plaster?
3. How wide a gap can sealant bridge?
4. Do I need a backing rod around a window?
5. Can I seal over old cracked sealant?
6. Silicone or polyurethane for the outside of windows?
7. Should the joint be sealed inside, outside or both?

**Question headings found on ranking pages (stand-in for People Also Ask, which the tool does not return).**

- "Do I always need self-leveling compound before tiles or wood?", "What is the maximum thickness I can pour in one go?", "How much self-leveling compound will I need?", "Can I walk on it, and when can I lay the floor?", "Is SLC waterproof or suitable for bathrooms?" - https://www.studiomatrx.org/guides/self-leveling-compound-india
- "Can I use self-levelling compound instead of a screed for a new floor?", "How thick can self-levelling compound be poured in one go?", "Does self-levelling compound need a primer?", "Can I put underfloor heating pipework in self-levelling compound?" - https://squote.app/knowledge/flooring/self-levelling-compound-vs-screed
- "How Long Does it Take for Self-Levelling Compound to Dry?", "How Long Before You Can Walk on Self-Levelling Compound?", "What if I Walk on Self-Levelling Compounds Too Soon?" - https://www.protilertools.co.uk/news/how-long-before-you-can-walk-on-self-levelling-compound
- "Is SPC Flooring Suitable for Kenyan Coastal Areas?", "Can SPC Flooring Be Installed Over Existing Floors?", "Can I Install SPC Flooring Myself?" - https://aliglaziers.co.ke/blog/spc-flooring-kenya-faq-ali-glaziers

---

## 6. Not verified, and questions for the owner

**Not verified**

1. Any Tanzanian search position, any search volume, any People Also Ask box.
2. The text of BS 5385-3, BS 8203, BS 8204, ASTM F2170, ISO 11600 and EN 13813. All figures tied to them are from the secondary sources named. The meaning of the EN 13813 code CT-C20-F5 is not explained in any source fetched here.
3. Movement joint spacing for interior tiled floors. Only the exterior figure (3 m to 5 m) was found in a citable source.
4. A moisture limit for wood flooring on concrete. The parquet adhesive sheet defers to the flooring maker.
5. How much longer levelling compound takes to dry at Dar es Salaam humidity. No figure exists in the sheets.
6. The Tanzania Bureau of Standards draft adopting ISO 7389 on sealants: the PDF was listed in search results but returned 404.
7. Dar es Salaam climate figures are from Wikipedia's table, which credits NOAA and Deutscher Wetterdienst. The primary tables were not opened.
8. One ranking page's line that a 75 mm screed takes "75 hours" to dry looks like an error on the page or in my reading of it. Not used.
9. Swahili search terms for this cluster (section 2.3).

**Questions for the owner (multiple choice)**

1. Primer G dilution before self-levelling on concrete: (a) publish 1:1 from the Primer G sheet and note the other sheet says 1:3; (b) ask Mapei first and hold the post; (c) publish both without a recommendation.
2. Products the Mapei sheets call for that are not in the catalogue (Eco Prim T Plus, Topcem, backing rod, Primerseal M): (a) stocked, add them; (b) available to order, say "ask us"; (c) not available, leave them out of posts.
3. SPC, LVT and wooden flooring: (a) Sahihi sells the flooring itself; (b) Sahihi sells only what goes under and around it; (c) Sahihi can refer to a flooring partner.
4. Silicone sealant for windows and wet areas: (a) stocked, add to the catalogue; (b) not stocked, the post says where silicone is the better choice and stops there; (c) drop post 14.
5. Heavy visuals: (a) allow one Three.js model for the cluster (the floor build-up, reused in posts 3 and 5); (b) SVG and CSS only; (c) decide per post after seeing an SVG version.

---

## 7. Sources

**Manufacturer data sheets (held in the repo; public source URLs from the manifests)**

- [EC20] Ultraplan EC20 (catalogue name Ultraplan Eco 20), edition 4005-10-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_04005_ultraplan-ec20_en-ae_cea8eee25a91458da5434c97806ff517.pdf?sfvrsn=65281587_0 - local `public/tds/mapei/ultraplan-eco-20.pdf`
- [UC] Ultraplan Contract, edition 4085-2-2023 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_04085_ultraplan-contract_en-ae_8e75a0b0050d42fbba78c0e8acbaa3de.pdf?sfvrsn=ec382438_0 - local `public/tds/mapei/ultraplan-contract.pdf`
- [PG] Primer G, edition 532-6-2025-gb: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00532_primer-g_en_2de65cd07f89466da2d7381ed58e6d80.pdf?sfvrsn=5cc07e08_0 - local `public/tds/mapei/primer-g.pdf`
- [TP] Triblock P, edition 2043-11-2022 gb: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_02043_triblock-p_en_17787dc623bb4498b9b7bd643103991c.pdf?sfvrsn=c7fbf6a1_0 - local `public/tds/mapei/triblock-p.pdf`
- [LB] Lignobond, edition 271-4-2016-gb: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00271_lignobond_en_d74378c4245941c295cf3daf4b0dc394.pdf?sfvrsn=254e2ec3_0 - local `public/tds/mapei/lignobond.pdf`
- [PSN] Primer SN: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_02901_primer-sn_en-ae_ce84efefb9dd4295ab9f25ba58c9456f.pdf?sfvrsn=2da70fe0_0 - local `public/tds/mapei/primer-sn.pdf`
- [PSP] Planicrete SP: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00700_planicrete-sp_en-ae_381d91c654e841e2b681b6b6b45d683d.pdf?sfvrsn=e7d8901d_0 - local `public/tds/mapei/planicrete-sp.pdf`
- [KMS1] Keraflex Maxi S1: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00056_keraflex-maxi-s1-(fo)_en-ae_1ccf8053ec754469b9bac8dcda5e9406.pdf?sfvrsn=c68e4320_0 - local `public/tds/mapei/keraflex-maxi-s1.pdf`
- [MF45] Mapeflex PU 45 FT, edition 8102-11-2025 en (IT): https://cdnmedia.mapei.com/docs/librariesprovider20/products-documents/1_08102_mapeflex-pu-45-ft_en_e0022c52e28d48db8187f75fd0db8409.pdf?sfvrsn=6b883ee1_0 - local `public/tds/mapei/mapeflex-pu-45-ft.pdf`
- Eporip: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00366_eporip_en_2890a834f1bc46e69a1d2cc8dff6164a.pdf?sfvrsn=be5883db_0 - local `public/tds/mapei/eporip.pdf`
- [XS] X-Seal PS800 (catalogue name X-Seal PG): https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Seal_PS8001.pdf - local `public/tds/x-calibur/x-seal-pg.pdf`
- [XSP] X-Seal PS800 Primer (catalogue name X-Seal Primer): https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Seal_PS800_Primer.pdf - local `public/tds/x-calibur/x-seal-primer.pdf`
- [YH] YHPUseal-2925, issue date February 2025, supplied by the owner (no public URL in the manifest): local `public/tds/oriental-yuhong/yhpuseal-2925.pdf`; manufacturer site named on the sheet: https://www.oyhglobal.com

**Standards bodies, trade bodies and reference sources**

- [TTA] The Tile Association (UK), "External Floor Tiling Incorporating Movement Joints", 31 January 2025: https://www.tiles.org.uk/external-floor-tiling-incorporating-movement-joints/
- Tile and Stone Journal, movement joints and uncoupling membranes, 14 October 2024: https://www.tileandstonejournal.com/help-and-advice/movement-joints-and-uncoupling-membranes-critical-elements-of-a-good-tiling-job/
- [FERFA] FeRFA, The Resin Flooring Association, "The FeRFA Standard": https://www.ferfa.org.uk/standard/
- [DB-SCREED] Designing Buildings, "Screed", last edited 15 September 2020: https://www.designingbuildings.co.uk/wiki/Screed
- [DB-DPM] Designing Buildings, "Damp proof membrane DPM", last edited 19 January 2023: https://www.designingbuildings.co.uk/wiki/Damp_proof_membrane_DPM
- [WAGNER] Wagner Meters, guide to concrete moisture testing (vendor summary of ASTM F2170 and F1869): https://www.wagnermeters.com/concrete-moisture-test/concrete-info/testing-moisture-levels/
- [COREtec] COREtec SPC installation guidelines (Shaw): https://pdmsview.shawinc.com/USFloors/COREtec/Installation/SPC-Installation-Guidelines-Unbranded-10162018
- [WIKI-DAR] Wikipedia, Dar es Salaam, climate table 1991 to 2020: https://en.wikipedia.org/wiki/Dar_es_Salaam

**Ranking and competitor pages examined**

- https://tza.sika.com/en/construction/flooring.html
- https://zaf.sika.com/en/about-us/media/news/new-reliable-underlayments-make-a-difference.html
- https://www.studiomatrx.org/guides/self-leveling-compound-india
- https://www.studiomatrx.org/utilities/self-leveling-compound-calculator (seen in results, not fetched)
- https://www.protilertools.co.uk/news/how-long-before-you-can-walk-on-self-levelling-compound
- https://www.flowcrete.eu/en-gb/our-news/blog/whats-the-difference-between-sand-cement-vs-self-leveller-screeds/
- https://squote.app/knowledge/flooring/self-levelling-compound-vs-screed
- https://aliglaziers.co.ke/blog/spc-flooring-kenya-faq-ali-glaziers
- https://engineerfix.com/how-to-properly-seal-window-frames-outside/
- https://www.junckers.com/wood-flooring/guidance/installation-methods/glue-down-system
- https://afrotools.com/sw/zana/kikokotoo-vigae-na-sakafu/ (seen in results, not fetched)
- https://jiji.co.ke/viwandani-makadara/building-materials/300-1200-gauge-polythene-damp-proof-membrane-dpm-xoP12N7edHjx1PVvB4gLX0hs.html (seen in results, not fetched)
- https://jiji.co.ke/sw/nairobi-central/building-and-trades-services/pro-self-leveling-compound-epoxy-floor-paint-application-ahGWheBRZPtS2MJxcHu4Nurd.html (seen in results, not fetched)
- https://siwaycurtain.com/factory-wholesale-price-for-sv-311-polyurethane-sealant-for-construction-for-tanzania-importers.html (seen in results, not fetched)
- https://fowkes.co.za/catalogue/adhesives-sealants/sealants-polyurethane/polyurethane-sealants-expansion-joint (seen in results, not fetched)
- https://tz.linkedin.com/in/saheelgohel (seen in results, not fetched)

**Requested but not readable**

- https://www.bostik.com/uk/en_GB/knowledge-hub/choosing-floor-primer-for-self-levelling-compound/ (404)
- https://www.tbs.go.tz/uploads/publications/en-1774358044-BCDC 9(4213) DTZS ISO 7389 2002.pdf (404)
- https://www.italtile.co.za/media/wysiwyg/pdf/XL_VINYL_INSTALLATION_INSTRUCTIONS.pdf (403)
- https://www.middleeast.weber/files/sodamco/2018-10/Sealing_of_expansion_joints.pdf (403)
- https://mapei.com/au/en/products-and-solutions/solutions/detail/system-for-the-installation-of-parquetry-over-a-concrete-substrate---t02 (403)
- https://www.astm.org/f2170-19a.html (403)
- https://www.iso.org/standard/31635.html (403)
- https://bestcareservices.co.ke/directory/parquet-floor-installation.html (404)
- https://www.homebuilding.co.uk/advice/tiling-an-uneven-floor (navigation only)

**Repo files relied on**

- `SEO-STRATEGY.md` sections 3 to 5; `docs/research/README.md`; `docs/research/09-kw-flooring.md`
- `src/config/catalogue.ts`; `src/config/mapei-tds.json`; `src/config/x-calibur-tds.json`; `src/config/oriental-yuhong-tds.json`
- `src/content/mapei/{ultraplan-eco-20,ultraplan-contract,primer-g,triblock-p,lignobond,mapeflex-pu-45-ft}.json`
- `assets/source/tds-text/{primer-sn,planicrete-sp,keraflex-maxi-s1,eporip}.txt`
