# Blog research 01 - Waterproofing cluster

Date: 2026-11-06
Scope: blog (Journal) topics for waterproofing only: roofs and hidden roofs, bathrooms and wet rooms, basements, water tanks, pools, balconies, leaking walls, masika leaks, membrane chemistry, coverage, waiting times, failures.
Reads with: `docs/research/07-kw-waterproofing.md` (the 92-query universe and 25 graded SERPs), `SEO-STRATEGY.md` sections 3 to 5.
Status: complete against the brief, with the limits in section 1. Nothing in this file is a search volume.

---

## 1. Method and limits (read first)

**What was done.**

- 18 web searches, the full allowance. All 18 returned results. They were spent on informational and how-to queries that report 07 did not check, so the two reports add up rather than overlap.
- About 27 pages fetched directly: the pages that rank (to record date, length, headings, tables, diagrams, FAQs) and reference pages for facts.
- Product figures were read from the manufacturer data sheets already in the repo (`public/tds/`, text extracted with `pdftotext`) and from the verified extracts in `src/content/`. Each data sheet's source URL comes from `src/config/mapei-tds.json` and `src/config/x-calibur-tds.json`. One Mapei UK specification (Mapelastic Smart) was fetched in this run and read the same way.

**Limits. These apply to every row below.**

| Limit | Effect |
|---|---|
| The search tool is US-located | No google.co.tz ranking was measured. A user in Dar es Salaam will see a local pack, more .co.tz results and possibly Swahili results that were not visible here |
| No search volumes | No tool for it. Demand is argued from who publishes on the topic, forum activity recorded in report 07, and news coverage. Every demand statement is a judgment |
| No People Also Ask | The tool returns organic links only. The questions in section 4 are taken from FAQ blocks and headings on ranking pages (quoted in section 2 notes) and from the forum titles in report 07, or are written by me. None is a Google PAA question |
| Result order is the order the tool returned | It approximates rank. It is not a verified position |
| Grades (E easy, M medium, H hard) are my judgment | They describe how weak the visible SERP is, not how fast a new domain will rank. sahihicc.com starts from zero authority |
| "(inf)" | Inferred, not checked live |

**Fetches that failed (so the page was not read).**

| URL | Result |
|---|---|
| https://shabbirihardware.com/blog/waterproofing-solutions-guide-kenya and https://shabbirihardware.com/blog/waterproofing-solutions-kenya | HTTP 404 on both. Seen in two SERPs as a Kenyan hardware supplier's blog. Content not read |
| https://kenyanlist.net/threads/best-waterproofing-methods-for-a-flat-roof-%E2%80%93-and-their-costs.41654/latest | HTTP 522. A Kenyan forum thread on flat roof methods and costs. Content not read |
| https://www.tbs.go.tz/uploads/publications/en-1774358216-BCDC%209%20(4229)%20DTZS%20ISO%2013007%205%202015.pdf | HTTP 404. The draft Tanzania standard for liquid-applied membranes under tiles appeared in a SERP but could not be opened. Same result as report 07 |
| https://hacecuentas.com/en/roof-waterproofing-kg-m2-calculator | Returned a general concrete estimator, not a waterproofing calculator. Disregarded |

**One date to distrust.** https://bestcareservices.co.ke/how-to-prevent-roof-leaks-during-heavy-rains/ displays "06 November 2026", which is the day it was fetched. Treat that page as undated.

**How this file avoids duplicating a planned page.** The solution pillars in `SEO-STRATEGY.md` 5.3 own the commercial queries ("roof waterproofing Tanzania", "bathroom waterproofing", "water tank waterproofing" and so on). Every post below targets a question, a comparison or a number, and links up to the pillar that owns the commercial term. No post takes a pillar's primary query. Where a post matches an idea already listed in `SEO-STRATEGY.md` 5.4 or report 07 section 9, the ID is given so the registry stays single-sourced.

**A flag on 3D.** `GOVERNANCE.md` requires heavy things to be flagged before they are built, Three.js above all. Every 3D idea below is written so it can ship as inline SVG or CSS 3D transforms first. A real 3D model (GLB with a viewer) is the optional upgrade and should be lazy-loaded below the first screen, with the owner's approval per post.

---

## 2. Candidate posts (14)

Title lengths were counted by script; all are 60 characters or fewer.

| # | Working title | Primary query | Secondary queries and questions | Intent | Who ranks now, and the weakness | Why Sahihi can win |
|---|---|---|---|---|---|---|
| 1 | Why hidden roof houses leak, and the fix that lasts | hidden roof leaking | hidden roof house leaking Tanzania; nyumba ya contemporary inavuja; flat roof problems Kenya; how to waterproof a concrete gutter; hidden roof slope; is a hidden roof a good idea | Informational, problem-led. Homeowners and builders | businessdailyafrica.com "Why the flat-roof craze is failing homeowners" (15 June 2026, about 900 to 1,000 words, syndicated on mwanaspoti.co.tz); mwakilishi.com (same day, about 550 to 600 words); kenyans.co.ke (16 July 2023, about 300 words); mjenziwanyumbatz.blogspot.com, a Dar es Salaam builder (18 March 2026, about 500 words); JamiiForums threads. Weakness: news and a short builder post. No diagram, no table, no product data, no coverage figure anywhere. Only one result is Tanzanian | Fresh regional news coverage (June 2026) shows live demand. Nobody shows where the water gets in or what to put there. A cross-section diagram plus data sheet figures for the coatings and sealants that fit each leak point is a clear step up. Already Journal post 1 in `SEO-STRATEGY.md` 5.4 (J1 in report 07) |
| 2 | How much waterproofing per square metre? A kg/m2 guide | waterproofing coverage per square metre | how much waterproofing membrane per m2; how many kg of waterproofing for a bathroom; Mapelastic coverage per m2; how many coats of waterproofing; waterproofing calculator | Informational with a tool. Contractors, fundis, quantity surveyors, homeowners buying material | Product and retail pages (source.thenbs.com, wickes.co.uk, hardwarecity.com.sg, mapei.com Turkey), US road-agency specification PDFs, tradecalculator.co.uk (about 600 words, quotes three brands' rates, links no data sheet). Weakness: every result is one product or one market. No page sets cementitious, liquid and roof coatings side by side with the data sheet behind each number | Sahihi already has verified per-product consumption and working calculators (`src/config/mapei-coverage.ts`). A single comparison table with a source line per number is something the SERP does not have. J10 in report 07 |
| 3 | How long after waterproofing can you tile? | how long after waterproofing can you tile | how long does waterproofing take to dry; can you tile over waterproofing the same day; how long between coats of waterproofing; do you need a flood test before tiling; how long before filling a pool after waterproofing | Informational, precise answer. Tilers, site supervisors, homeowners | angi.com, schluter.com FAQ pages (four URLs, sheet membrane only), tilersforums.com and contractortalk.com threads, flooringclarity.com (10 September 2025, about 1,400 words; its only figure is "24 hours to several days"), manomano.co.uk. Weakness: forums, one brand's FAQ, and generic ranges. No table of real products. Nothing East African | The data sheets give exact, different answers (4 hours for one product, 5 days for another). A table of those figures, each cited, answers the query better than any ranking page. New topic: not in report 07's list |
| 4 | Cementitious, liquid or acrylic membrane: which one? | cementitious vs liquid membrane waterproofing | cementitious vs acrylic waterproofing; types of waterproofing membrane; which waterproofing is best for a terrace; is cementitious waterproofing flexible; can two systems be used together | Comparison. Engineers, contractors, informed homeowners | studiomatrx.org guides (India); asianpaints.com (about 850 words, no table, no coverage, crack-bridging or cure figure, one FAQ on rupee cost); in.weber; concretenetwork.com; sunandaglobal.com; a civil4m.com forum question. Weakness: Indian and US vendor blogs with no numbers. No East African page | A comparison built from printed values (crack-bridging in mm, water pressure in bar, whether the membrane must be covered) is rare. Sahihi stocks every type, so the table is real stock, not theory. Extends J5 in report 07 |
| 5 | Waterproofing an underground water tank | underground water tank waterproofing | how to waterproof an underground water tank; underground tank leaking; kisima cha ardhini kuvuja; coating safe for drinking water tank; how long before filling a tank after waterproofing; how to seal a pipe through a tank wall | How-to. Homeowners, builders, estate developers, hotels | jiji.co.ke service adverts (six URLs); bestcareservices.co.ke service pages; drfixit.co.in guide (about 1,300 to 1,500 words, no coverage, no cure time, no potable certification); sunandaglobal.com (about 1,300 words, names no potable-water standard, no figures); akvopedia.org; kenyans.co.ke tank news. Weakness: adverts and Indian vendor blogs that never give a number or name a drinking-water approval | Three stocked products carry a printed potable-water statement and a printed wait before filling. Section diagram plus a tank surface-area calculator. Journal post 7 in `SEO-STRATEGY.md` 5.4 (J6 in report 07) |
| 6 | Before masika: a waterproofing checklist for your house | waterproofing before rainy season | how to prevent roof leaks during heavy rains; when to waterproof a roof in Tanzania; masika rains leaking roof; best month to waterproof in Dar es Salaam; can you waterproof in the rain | Seasonal informational. Homeowners, landlords, facility managers | News: mwananchi.co.tz and thecitizen.co.tz weather forecasts; bestcareservices.co.ke "How to prevent roof leaks during heavy rains?" (about 550 words, a Nairobi maintenance table priced in shillings, no data sheets, no diagram); jiji.co.tz leak-glue listings; a South African Sika DIY PDF. Weakness: nothing is written for Tanzania's seasons. No page ties product curing windows to the rainfall calendar | Publishable every January. Dar es Salaam rainfall and humidity by month (NOAA 1991 to 2020) against the rain-protection time each data sheet prints gives a real "when", not generic advice. J4 in report 07 |
| 7 | How to waterproof a bathroom before tiling | how to waterproof a bathroom before tiling | how to waterproof a shower floor; how high should bathroom waterproofing go up the wall; do I need to waterproof bathroom walls; waterproofing around a floor drain; bathroom leaking to the room below | How-to. Homeowners, fundis, tilers | screwfix.com, checkatrade.com, howtospecialist.com, homedepot.com, asianpaints.com, diydoctor.org.uk, tilewarehouse.co.uk, bostik.com (UAE). Adding "Kenya" to the query changed nothing: no East African page appeared. Weakness: UK and US retail guides for plasterboard bathrooms and brands not sold here | Generic version is H. With a Tanzanian frame (concrete slab bathrooms, squat and wet-floor showers, leaks into the flat below) and stocked products, E (inf). Feeds the `/solutions/waterproofing/bathroom` pillar. J8 in report 07 |
| 8 | Why waterproofing fails: seven causes and the fixes | why waterproofing fails | waterproofing failure causes; why is my roof still leaking after waterproofing; waterproofing membrane peeling; bubbles in waterproofing; how long does waterproofing last | Informational, diagnostic. Contractors, engineers, owners with a failed job | asianpaints.com; tremcocpg-asiapacific.com; holmeswaterproofing.co.za ("Top 20 Reasons"); constructionspecifier.com (balconies); kryton.com blog; studiomatrx.org (11 July 2026, about 1,600 to 1,700 words, two tables, two diagrams, cites Indian standards: the best-made page seen in this run); a Kenyan LinkedIn post "Why Waterproofing Fails on Concrete and Flat Roofs". Weakness: list posts with no data; the one strong page is written for Indian codes | Each failure can be tied to a printed limit on a data sheet (maximum residual moisture, minimum thickness, rain protection time, "must always be covered"). That is evidence, not opinion. The studiomatrx page is the format to match. New topic |
| 9 | Leaking balcony: do the tiles have to come up? | balcony leaking through tiles | how to waterproof a balcony without removing tiles; balcony leaking into room below; can you waterproof over tiles; terrace waterproofing under tiles; balcony upstand height | Problem-led. Homeowners, landlords, apartment managers | workshop.bunnings.com.au forum (three threads), diynot.com and buildhub.org.uk forums, capstonetiling.com.au, nobrokerhood.com (India), scb.co.th. Weakness: forums and Australian contractor blogs that disagree with each other. No manufacturer-backed answer | One stocked membrane's data sheet lists "old ceramic tiles" as a substrate, which answers the title with a source. Honest framing (when the tiles must come up) ranks. Feeds a balcony and terrace pillar if the owner approves one (report 07 decision 3). New topic |
| 10 | Swimming pool waterproofing: the layers under the tiles | swimming pool waterproofing before tiling | how to waterproof a concrete pool; pool losing water; how long before filling a pool after tiling; epoxy grout for swimming pools; pool waterproofing Zanzibar | How-to and specification. Pool builders, hotels and lodges, engineers | jiji.co.ke adverts; method-statement PDFs (specifile.co.za, constructionchemicals.com.au, Sika Vietnam, instarmac.co.uk); kalekim.com; middleeast.weber. Weakness: PDFs and brand system pages. No East African guide | Mapei UK's specification prints the two numbers pool builders ask for: tile after 5 days, full immersion after 21 days. A layer-by-layer exploded diagram suits the topic. Feeds `/solutions/waterproofing/swimming-pool`. Not in report 07's list |
| 11 | Leaking basement wall: fix it from inside or outside? | negative side waterproofing | basement wall leaking from inside; positive vs negative side waterproofing; how to stop water coming through a concrete wall; lift pit waterproofing; how to stop an active leak in concrete | Informational, engineering. Contractors, engineers, building owners | kryton.com, drylok.com, waterproofmag.com, structuraltechnologies.com, basementsystems.com, a Koster brochure, a Sika global PDF. Weakness for a local page: all US and European, none mention East Africa. Generic grade H; with Tanzania or Dar es Salaam, E (inf) | Mapelastic Foundation's sheet prints tested pressures for both sides (5 bar positive, 1.5 bar negative). Few ranking pages quote a tested figure. Covers J13 and J14 in report 07 |
| 12 | Is waterproof cement enough to stop a leak? | waterproof cement Tanzania | water proof cement; cement ya water proof; waterproofing admixture for concrete; does waterproof cement work; waterproof cement for water tank | Myth-check. Homeowners, fundis, small builders | Two JK Cement data sheet PDFs on a netlify.app domain; jiji.co.tz/sw cement listings; constructionreviewonline.com (updated 24 May 2022, about 1,000 words, no table, diagram or FAQ); the 2017 thecitizen.co.tz advertorial; da.xypex.com; nyaticement.vercel.app. Weakness: nobody answers the question. PDFs rank because there is no page | "Water proof cement" is the default folk remedy in the JamiiForums threads quoted in report 07. The admixture data sheet itself states the conditions under which it works, which is the honest answer. Grade E. J15 in report 07 |
| 13 | Flat concrete roof: which waterproofing survives the sun? | best waterproofing for flat concrete roof | flat roof waterproofing Kenya; how to stop a concrete slab roof leaking; UV resistant roof coating; white roof coating heat; ponding water on a flat roof | Comparison, problem-led. Homeowners with slab roofs, contractors | bestcareservices.co.ke (ten URLs in one SERP: service pages with shilling price tables, no data sheets, no diagrams); Kenyan LinkedIn posts; jiji.co.ke; a kenyanlist.net forum thread (not readable). Weakness: one service firm fills the Kenyan SERP with near-duplicate pages | Exposed versus covered is the decision nobody explains. One stocked roof coating prints solar reflectance and elongation; another membrane's sheet says it "must always be covered". Must link up to `/solutions/waterproofing/roof` and stay off its primary query. J5 in report 07 |
| 14 | Damp wall or leak? How to tell before you repaint | peeling paint damp walls | rising damp treatment; kwanini rangi inabanduka ukutani; how to tell rising damp from a leak; salt on walls; damp proof paint | Diagnostic. Homeowners, landlords, painters | bestcareservices.co.ke damp-rise service page; wapmaxinc.blogspot.com (Kenya, January 2026); cemcrete.co.za; home-dzine.co.za; UK damp firms. No Tanzanian page. Weakness: service pages and UK content written for brick and frost | The paint-peeling thread in report 07 dates from 2013 and is still the reference for Dar es Salaam. Data sheets state plainly what each product is not for (rising damp with salts, condensation), which makes an honest decision table. Covers J3 and J11 in report 07. Needs a technical check before publishing (see section 6) |

**Swahili terms.** One Swahili search was run ("paa linavuja mvua jinsi ya kuzuia nyumba kuvuja"). It returned no Swahili guide on leaking roofs: the results were an English Nation Media article (mirrored on mwananchi.co.tz), a Swahili FEMA flyer on mould, and unrelated pages. So "paa linavuja" stays unverified as a phrase people search, exactly as in report 07 section 5.2. One new observation: the Nyati Cement blog post on rainy-season construction (25 April 2025) is written in English with whole sections in Swahili, which is evidence that a Tanzanian manufacturer publishes bilingual posts rather than separate language versions. The attested terms to use in FAQ blocks remain those in report 07 section 5.1: kuvuja and inavuja, nyumba ya contemporary, gata ya zege, water proof cement, kisima cha ardhini, rangi kubanduka, unyevunyevu, chumvi.

---

## 3. Outlines for the best six

Source keys in square brackets resolve to URLs in section 5. "Derived" means simple arithmetic on a printed figure, done by me; the data sheet does not print the result.

### 3.1 Why hidden roof houses leak, and the fix that lasts

Primary query: hidden roof leaking. Post 1 in `SEO-STRATEGY.md` 5.4.

**Outline**

- H2 What a hidden roof is, and why it is built
  - H3 A low-slope sheet roof behind a parapet wall
  - H3 Why owners choose it
- H2 The five places a hidden roof lets water in
  - H3 The box gutter (gata ya zege)
  - H3 Where the sheets meet the parapet wall
  - H3 The outlets and downpipes
  - H3 The top of the parapet
  - H3 The sheets themselves: slope, laps and fixings
- H2 How to find which one is leaking
  - H3 Read the stain: where it shows inside and when
  - H3 A hose test, one zone at a time
- H2 The repair, leak point by leak point
  - H3 Lining a concrete gutter
  - H3 Sealing the sheet-to-wall junction
  - H3 Outlets and cracks
- H2 Building one that will not leak
  - H3 Slope, gutter width and outlet size are an engineer's decision
  - H3 Access for cleaning
- H2 What it takes: materials per square metre
- H2 Questions people ask (FAQ, with a Swahili block)

**Facts and figures the post needs**

| Fact | Value as found | Source |
|---|---|---|
| The problem is in the news now | "Why the flat-roof craze is failing homeowners", 15 June 2026 | [W1] |
| Causes named by an architect and a structural engineer | Gutter too narrow or shallow; sheets ending over the gutter so water overshoots; undersized outlets causing backflow; outlets clogged in the dry season; workmanship rather than the design | [W1] [W2] |
| Definition used in that reporting | "A flat roof has a slope of less than seven degrees." | [W2] |
| Most common contractor error, per a 2023 report | "guiding the rainwater to the parapet walls" instead of into a concrete gutter | [W3] |
| A Dar es Salaam builder's rule of thumb | "a slope of between 3° and 10°"; parapet "between 0.8 meters to 1.2 meters above the roof". A builder's blog, not a standard: quote as practice, do not present as a requirement | [W4] |
| UK flat-roof practice for comparison | "designed to have a minimum fall of 1:40" to give "at least 1:80 in the finished construction" | [W5] |
| Local wording and forum evidence | "gata ya zege", "maungio ya bati na ukuta", eight JamiiForums threads from 2021 to 2025 | report 07, sections 5 to 7 |
| YHColorWall-5300 on roofs | 3 kg/m² on roofs, 2 kg/m² on walls; 0.8 to 1.0 kg/m² per coat; primer coat diluted with 15 to 20% water, then at least two undiluted coats; elongation at break ≥550%; solar reflectance 82%; SRI 103; substrate moisture ≤4%; ready for use 72 hours at +30°C | [O2] |
| YHColorWall-5300 limits | "not suitable for permanent water immersion"; do not apply "on substrates with rising moisture"; relative humidity should not exceed 80% until cured; "not recommended for pedestrian traffic" | [O2] |
| X-Shield FlexPruf | Uses listed include "Roof waterproofing"; "UV stable"; elongation >100%; crack bridgability >2 mm; 1 L (1.7 kg) per m² per coat, "Normal applications require 2 coats"; corners and penetrations reinforced with fabric | [X1] |
| YHPUseal-2925 | Typical applications include "flashing, common roofing detail applications"; movement capability ±25% (ASTM C719); joint width at least 8 mm and not more than 40 mm, depth at least 8 mm | [O4] |
| Mapelastic Smart | For "balconies, terraces, bathrooms, and swimming-pools"; crack-bridging "up to 2mm"; 1.6 kg/m² per mm by trowel or roller; two coats, final thickness not less than 2 mm; Mapeband Easy at wall-to-floor junctions with a minimum 50 mm overlap | [M-SMART] |
| Lamposilex for a running leak | Pot life approx. 1 minute at +20°C; 1.8 kg fills a one-litre cavity; cavity at least about 2 cm wide and 2 cm deep | [M-LAMP] |

**Open point to settle before writing the repair section.** No data sheet read in this run names a concrete box gutter as a use. YHColorWall-5300 is a roof coating but excludes permanent immersion, and a gutter with blocked outlets holds water. Which stocked product lines a gutter is a question for Mapei, OYH and X-Calibur technical services. Until answered, the post should describe the lining by type and link products only for uses their sheets print.

**Sahihi products and pages to link**

YHColorWall-5300, X-Shield FlexPruf, Mapelastic Smart, YHPUseal-2925, Mapeflex PU 45 FT, Mapeband Easy, Mapenet 150, Lamposilex, YHRepair-2516. Pages: `/oriental-yuhong`, `/x-calibur`, `/mapei/waterproofing`, and `/solutions/waterproofing/roof` when built.

**Visuals**

- Data table: "Leak point, what you see inside, why it happens, what fixes it", five rows, with the material type and its data sheet consumption in the last column.
- Diagram: a cross-section through parapet, sheet roof, box gutter and outlet with the five leak points numbered. Labels in English with the Swahili term beside it where report 07 attests one.
- Interactive or 3D: a cutaway corner of a hidden roof house where tapping "rain" animates the water path at each leak point, and tapping a point opens its fix. Ship as an isometric SVG with CSS states first. A rotatable GLB model is the upgrade and needs the Three.js flag.

### 3.2 How much waterproofing per square metre? A kg/m2 guide

Primary query: waterproofing coverage per square metre. J10 in report 07.

**Outline**

- H2 The short answer: it depends on thickness, not on area alone
- H2 Coverage by product, from the data sheets (the table)
- H2 How to measure the area properly
  - H3 Floors plus the upturn on the walls
  - H3 Tanks and pools: walls, floor, and sometimes the soffit
  - H3 Rough and uneven surfaces use more
- H2 Worked examples
  - H3 A 2 m by 1.5 m bathroom
  - H3 A 100 m² roof slab
  - H3 A 5,000 litre underground tank
- H2 Coats, thickness and why thin is not a saving
- H2 What else goes on the order: tape, mesh, primer, sealant
- H2 Calculator
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Product | Rate as printed | Thickness or coats as printed | kg per m² at the stated build (derived) | Source |
|---|---|---|---|---|
| Mapelastic AquaDefense | "1 kg/m² for 2 coats" | Two coats of approx. 0.4 mm each | 1.0 | [M-AQUA] |
| Mapelastic Easy | "Approx. 1.9 kg/m² per mm of thickness" by trowel or roller | "Final thickness at least 2 mm" | 3.8 | [M-EASY] |
| Mapelastic Smart | 1.6 kg/m² per mm by trowel or roller; 2.2 by spray | Two coats, final dry film not less than 2 mm | 3.2 by roller, 4.4 by spray | [M-SMART] |
| Mapelastic Foundation | approx. 1.65 kg/m² per mm by roller; 1.75 by spray on flat surfaces; 2.1 on rough surfaces | "final thickness of at least 2 mm"; not more than 2 mm per coat | 3.3 by roller | [M-FOUND] |
| Planiseal 88 | "approx. 1.5 kg/m2 per mm of thickness" | "approximately 2-3 mm" | 3.0 to 4.5 | [M-P88] |
| YHCoat-1000 | 2 kg/m² in 2 coats in wet areas; 3 kg/m² in 2 to 3 coats elsewhere | As printed | 2.0 or 3.0 | [O1] |
| YHCoat-2060 | 1.0 kg/m² per coat | 1.0 mm dry film in 2 coats; a third coat at 1.0 kg/m² "For areas subject to high water ingress" | about 2.0, or 3.0 with the third coat | [O3] |
| YHColorWall-5300 | 2 kg/m² on walls; 3 kg/m² on roofs | 0.8 to 1.0 kg/m² per coat | 2.0 or 3.0 | [O2] |
| X-Shield FlexPruf | "1L (1.7kg) per m² per coat" | "Normal applications require 2 coats"; first coat 1 L/m², later coats 0.5 to 1.0 L/m² | 3.4 at two full coats | [X1] |
| Mapecoat DW 25 | "400-600 g/m² in two coats" | Final thickness approx. 300 to 450 µm | 0.4 to 0.6 | [M-DW25] |
| Antipluviol | 0.2 to 1 L/m² depending on absorbency | Wet-on-wet until saturated | n/a (litres) | [M-ANTI] |
| Lamposilex | 1.8 kg fills a one-litre cavity | n/a | n/a (by volume) | [M-LAMP] |

Other figures for the body text:

| Fact | Value as found | Source |
|---|---|---|
| Uneven surfaces use more | Mapelastic Easy: figures "are for a seamless film on a flat surface and are higher if applied on uneven substrates" | [M-EASY] |
| Mesh overlap adds area | Mapeband Easy joints "must overlap at least 5 cm" | [M-BANDEASY] |
| Sealant yield | Mapeproof Swell: approx. 3 metres per 320 ml cartridge; Mapeflex PU 45 FT: 6 m per 600 ml in a 10 x 10 mm joint | [M-SWELL]; `src/config/catalogue.ts` |
| Pack sizes | From `src/config/catalogue.ts` (owner's stock lists). No prices |  |

**Two conflicts to resolve before publishing.** (a) YHColorWall-5300 prints 3 kg/m² for roofs but 0.8 to 1.0 kg/m² per coat with "at least two undiluted coats": two coats do not reach 3 kg/m². Ask OYH how many coats the roof figure assumes. (b) The Mapelastic Smart figures come from a Mapei UK outline specification, not a product data sheet (none is on file: see `docs/CATALOGUE-EXTRACTION.md`). Label the row accordingly.

**Sahihi products and pages to link**

Every product in the table links to its own page, where the single-product calculator already lives: Mapelastic AquaDefense, Mapelastic Easy, Mapelastic Smart, Mapelastic Foundation, Planiseal 88, Mapecoat DW 25, Antipluviol, Lamposilex, YHCoat-1000, YHCoat-2060, YHColorWall-5300, X-Shield FlexPruf. Also Mapeband Easy, Mapenet 150, `/mapei/waterproofing`, `/products`.

**Visuals**

- Data table: the coverage table above, sortable by kg per m², with pack size and "kits for 10 m²" columns computed at build time.
- Diagram: one square metre drawn three times at 1 mm, 2 mm and 3 mm, each with the kilograms it takes for one cementitious membrane, to show that thickness drives the quantity.
- Interactive or 3D: a compare-all calculator. Inputs: floor length and width, upturn height, extra wall area. Output: kilograms and number of packs for every product side by side, reusing the models in `src/config/mapei-coverage.ts` (OYH and X-Calibur models to be added from the table). A simple CSS 3D room that grows with the inputs and shades the coated surfaces is enough; no library needed.

### 3.3 How long after waterproofing can you tile?

Primary query: how long after waterproofing can you tile. New topic.

**Outline**

- H2 The short answer: from 4 hours to 5 days, depending on the membrane
- H2 Waiting times by product, from the data sheets (the table)
- H2 Why the times differ
  - H3 Ready-to-use liquid membranes dry
  - H3 Two-component cementitious membranes cure
- H2 What stretches the wait in Dar es Salaam
  - H3 Humidity above the test condition
  - H3 A damp or young screed underneath
  - H3 Thick coats
- H2 The steps between the last coat and the first tile
  - H3 Check it is dry
  - H3 Water test where the data sheet asks for one
  - H3 Choose the adhesive class the data sheet names
- H2 Before the membrane: how long must the screed cure?
- H2 After tiling: when can the shower, balcony or pool take water?
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Product | Between coats | Before tiling | Other waits printed | Source |
|---|---|---|---|---|
| Mapelastic AquaDefense | approx. 60 minutes (when dry to the touch) | Table: "3-4 hours". Body text: tiles "can be laid 4 hours after the application of the second coat (at +23°C and 50%" relative humidity) | Complete drying of a 1 mm layer: 12 hours. Protect from rain for at least 1 hour after the first coat and 3 hours after the second. Light foot traffic after 3 hours | [M-AQUA] |
| Mapelastic Easy | Not stated | "wait at least 5 days for curing before laying ceramic tiles" (longer in cold conditions, shorter in good weather, per the sheet) | Protect from rain for the first 24 hours | [M-EASY] |
| Mapelastic Smart | approx. 4 to 5 hours at 23°C and 50% relative humidity | "can be tiled over after a minimum of 5 days" | "Allow minimum of 21 days before full immersion" | [M-SMART] |
| Mapelastic Foundation | approximately 6 hours | Not found in the extract | Protect from rain and water for the first 24 hours | [M-FOUND] |
| Planiseal 88 | After 5 hours and no later than 24 hours | n/a (rigid coating, protected by a screed on floors) | "Waiting time before putting into service: 7 days" | [M-P88] |
| YHCoat-1000 | 12 hours at +10°C; 6 hours at +20°C; 3 hours at +30°C | Not found in the lines read | Not a trafficable finish: "Protect with a leveling screed" | [O1] |
| YHCoat-2060 | "Ensure each coat is completely dry before applying the next" | No hour figure: "Once the waterproof coating is completely dry, conduct a flooding test", then proceed | "In humid conditions, the drying speed of the product may slow down" | [O3] |
| X-Shield FlexPruf | "once the coat beneath has dried" | Not found in the extract | "Do not water test or immerse until the coating has cured for 5 days" | [X1] |

Other figures for the body text:

| Fact | Value as found | Source |
|---|---|---|
| Test condition behind the Mapei times | +23°C and 50% relative humidity | [M-AQUA] [M-SMART] |
| Dar es Salaam humidity | Monthly average relative humidity 75% to 84%, annual 79% (1991 to 2020 table) | [W6] |
| Maximum substrate moisture | Mapelastic AquaDefense: not on cementitious substrates "with residual humidity higher than 3%"; YHColorWall-5300: substrate moisture ≤4% | [M-AQUA] [O2] |
| Curing of new render before the membrane | "at least 7 days per cm of thickness applied" in good weather | [M-EASY] |
| Adhesive named for fast return to service | Tiles laid with "C2F-class MAPEI adhesives" and grouted can be opened to foot traffic "within 12 hours of starting the work" | [M-AQUA] |
| Flood testing guide for decks | ASTM D5957: not during the first 24 hours after installation (48 hours below 10°C); head "not more than 100 mm"; slopes not greater than 2%. Intended for parking garages and plaza decks, not building roofing: cite as a reference method only | [W7] |
| What ranking pages say | "Most manufacturers specify a cure time ranging from 24 hours to several days." (shows the gap a product table fills) | [W8] |

**Gaps to close with the manufacturers.** Tiling waits for YHCoat-1000, YHCoat-2060 (in hours), X-Shield FlexPruf and Mapelastic Foundation were not found in the text read. Ask for them or leave those cells as "see data sheet". Do not estimate.

**Sahihi products and pages to link**

Mapelastic AquaDefense, Mapelastic Easy, Mapelastic Smart, Mapelastic Foundation, Planiseal 88, YHCoat-1000, YHCoat-2060, X-Shield FlexPruf. For the tiling step: Keraflex Maxi S1 (C2TES1), Adesilex P7 (C2T), Kerapoxy, Keracolor FF. Pages: `/mapei/waterproofing`, `/mapei/tile-adhesives-grouts`, `/solutions/waterproofing/bathroom` when built. Cross-link to the tile cluster's posts.

**Visuals**

- Data table: the waiting-time table above.
- Diagram: a horizontal timeline per product (coat 1, coat 2, water test, tile, grout, in service) drawn to one scale, so 4 hours against 5 days is seen at a glance.
- Interactive or 3D: a schedule planner. The reader picks a membrane and the time the second coat went on; the page returns the earliest tiling time and service time at data sheet conditions, with a standing note that humid weather lengthens it. A 3D option: an exploded stack of slab, screed, membrane, adhesive, tile and grout that assembles layer by layer as the timeline is scrubbed. CSS transforms are enough.

### 3.4 Cementitious, liquid or acrylic membrane: which one?

Primary query: cementitious vs liquid membrane waterproofing. Extends J5 in report 07.

**Outline**

- H2 Three families, in plain words
  - H3 Rigid cementitious coatings
  - H3 Flexible two-component cementitious membranes
  - H3 Ready-to-use liquid membranes and roof coatings
- H2 The comparison, in printed numbers (the table)
- H2 Four questions that decide it
  - H3 Will it be covered by tiles or screed, or left in the sun?
  - H3 Is the water under pressure, and from which side?
  - H3 Will the structure crack or move?
  - H3 Does it touch drinking water?
- H2 Which one where: bathroom, balcony, roof, basement, tank, pool
- H2 Where each one is the wrong choice
- H2 Can two types be used on one job?
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Product | Family, as the maker describes it | Crack-bridging or flexibility as printed | Water pressure as printed | Covered or exposed, as printed | Source |
|---|---|---|---|---|---|
| Planiseal 88 | "Osmotic cementitious mortar" | "can only be used for rigid waterproofing" | Negative pressure up to 1 atmosphere | Must be protected by a 4 to 5 cm screed on floors; "must not be exposed to traffic" | [M-P88] |
| YHCoat-1000 | "two-component, polymer-modified cementitious waterproofing slurry" | Not stated in the extract | Water impermeability at 1.5 bar for 7 days: approx. 0 mm (BS EN 14891, A7) | "does not provide a traffickable finish. Protect with a leveling screed" | [O1] |
| Mapelastic Easy | "Two-component acrylic modified cementitious, flexible waterproof coating" | Crack-bridging at 23°C: ≥0.75 mm | Penetration depth: nil | Under ceramic tiles in wet areas, balconies and terraces | [M-EASY] |
| Mapelastic Smart | "two component, high flexibility cementitious mortar" | "crack bridging capacity up to 2mm" | Not in the document read | Balconies, terraces, bathrooms, swimming pools | [M-SMART] |
| Mapelastic Foundation | "Two-component, flexible cementitious mortar" | Static crack-bridging Class A4 (>1.25 mm) at +23°C | No penetration at 5 bar for 3 days (positive); no penetration at 1.5 bar (negative) | Foundations, basements, tanks, pools; resistant to chlorides and sulphates in sea water or ground once cured | [M-FOUND] |
| X-Shield FlexPruf | "flexible elasto-cement coating" | Elongation >100%; crack bridgability >2 mm | Water permeability >10 bar | "UV stable"; roofs, wet areas, pools, tanks | [X1] |
| Mapelastic AquaDefense | "Ready-to-use, ultra quick-drying, flexible liquid membrane" | Crack-bridging 3.2 mm at +23°C; 1.6 mm at -5°C | No penetration at 1500 kPa | "must always be covered with ceramic, mosaic or stone" | [M-AQUA] |
| YHCoat-2060 | "one-component waterproofing coating" on a polymer emulsion | Crack bridging approx. 2 mm at 23°C; elongation at break ≥85% | Water penetration approx. 0 mm at 5 bar for 72 hours | Wet rooms; keyed finish for direct tiling | [O3] |
| YHColorWall-5300 | "cold-applied, one-component waterborne liquid waterproofing membrane" | Elongation at break ≥550% | "not suitable for permanent water immersion" | Exposed: UV resistant, solar reflectance 82%, SRI 103 | [O2] |

Other figures for the body text:

| Fact | Value as found | Source |
|---|---|---|
| Honest limit: a water repellent is not a membrane | Antipluviol is not for "horizontal surfaces, such as terraces and flat roofs", nor for structures "subject to water under pressure" | [M-ANTI] |
| Honest limit: liquid membrane and damp | Mapelastic AquaDefense: not on substrates "subject to recurring rising damp"; "Do not use Mapelastic AquaDefense to cover cracks" | [M-AQUA] |
| Standard the tile-under membranes are tested to | EN 14891, as printed on the Mapei sheets (Mapelastic Foundation and Smart: "CM01P") | [M-FOUND] [M-SMART] |
| What the ranking comparison lacks | About 850 words, no table, no coverage, crack-bridging or cure figure | [W9] |

**A wording risk.** "Acrylic" is the word buyers use, but only one stocked product is described by its maker with that word (Mapelastic Easy, "acrylic modified cementitious"). X-Shield FlexPruf is printed as "acrylic" on the owner's list while the maker calls it elasto-cement (`src/config/catalogue.ts` leaves the chemistry out pending the owner). The YHColorWall-5300 sheet says "polymer emulsion", not acrylic. The post can use "acrylic" in the title and explain the term, but must describe each product in its maker's words.

**Sahihi products and pages to link**

All nine in the table, plus Antipluviol, Idrocrete KR 1000 (the integral route), Mapecoat DW 25 (drinking water coating). Pages: `/mapei/waterproofing`, `/oriental-yuhong`, `/x-calibur`, `/solutions/waterproofing` when built.

**Visuals**

- Data table: the comparison above, with a filter by use.
- Diagram: a decision tree in four questions (covered or exposed, pressure and side, movement, drinking water) ending at a family, not a brand.
- Interactive or 3D: a "where is the water?" selector. The reader taps a part of a building (bathroom, balcony, roof, basement wall, tank, pool) on an isometric house and the table filters to the families that suit it, each with its printed limit. Isometric SVG first; a GLB house is the upgrade.

### 3.5 Waterproofing an underground water tank

Primary query: underground water tank waterproofing. Post 7 in `SEO-STRATEGY.md` 5.4.

**Outline**

- H2 Why underground tanks leak
  - H3 Joints between floor and wall
  - H3 Pipes through the wall
  - H3 Porous or cracked concrete and blockwork
  - H3 Water pushing in from outside
- H2 New tank: build the waterproofing in
  - H3 Dense concrete and an admixture
  - H3 Waterstop at every construction joint
  - H3 Swelling sealant around pipes
- H2 Coating the inside
  - H3 What "safe for drinking water" means on a data sheet
  - H3 Cementitious coating
  - H3 Epoxy lining
  - H3 Coves at the corners
- H2 Repairing a tank that already leaks
  - H3 Stop running water first
  - H3 Then recoat
- H2 How much material: tank surface area and coverage
- H2 How long before filling, and how to clean first
- H2 Questions people ask (FAQ, with a Swahili block)

**Facts and figures the post needs**

| Fact | Value as found | Source |
|---|---|---|
| Planiseal 88 and drinking water | "suitable for contact with drinking water"; "certified to AS/NZS 4020:2018 for use with potable water"; uses include "basins, reservoirs, concrete or masonry tanks and pipes containing drinking water" | [M-P88] |
| Planiseal 88 application | 2 to 3 coats by brush; next coat after 5 hours and within 24; final thickness approximately 2 to 3 mm; approx. 1.5 kg/m² per mm; negative pressure up to 1 atmosphere | [M-P88] |
| Planiseal 88 before filling | "Waiting time before putting into service: 7 days"; then "thoroughly clean all the surfaces and remove all the water used for cleaning before filling" | [M-P88] |
| Planiseal 88 limit | Rigid only; not "on surfaces subject to dynamic stresses" | [M-P88] |
| Mapecoat DW 25 and drinking water | Uses include "Lining tanks used for containing drinking water"; tested to Italian Ministerial Decree 174 of 06-04-2004 for water for human consumption; complies with EU 10/2011 for food contact | [M-DW25] |
| Mapecoat DW 25 application | 400 to 600 g/m² in two coats (approx. 300 to 450 µm); 6 to 24 hours between coats; mixing ratio A:B 4:1 | [M-DW25] |
| Mapecoat DW 25 before filling | "at least 1 week after applying the product before putting storage tanks into service" at approximately +20°C; "rinse thoroughly with plenty of clean, hot water" | [M-DW25] |
| Mapecoat DW 25 limit | Not on damp surfaces "unless treated beforehand with Triblock P"; not on surfaces "subject to capillary rising damp" | [M-DW25] |
| X-Shield FlexPruf and drinking water | "Can be used in contact with potable water"; BS 6920 listed under standards; uses include "Water tank coating" | [X1] |
| X-Shield FlexPruf application | 1 L (1.7 kg) per m² per coat, two coats; "Do not water test or immerse until the coating has cured for 5 days" | [X1] |
| Lamposilex for running leaks | "For instant stopping of water leaks, even water under pressure"; certified to AS/NZS 4020:2018 for potable water; pot life approx. 1 minute at +20°C; 1.8 kg per litre of cavity | [M-LAMP] |
| Mapelastic Foundation for water pushing in | No penetration at 1.5 bar negative; "waterproof against negative pressure of up to 1.5 atm (15 m column of water)"; resistant to chlorides and sulphates once cured | [M-FOUND] |
| Idrocrete KR 1000 in new concrete | 1 to 3 kg per 100 kg of cementitious materials; works only with "a water/cement ratio of less than 0.5 and an adequate wet curing time"; "cannot be used to make up for poorly designed concrete" | [M-KR1000] |
| Mapeproof Swell around pipes | Volumetric expansion in water: minimum 100%; approximately 3 metres per cartridge; used for "Sealing lights and drainage outlets in swimming pools and tanks" | [M-SWELL] |
| Idrostop PVC at joints | Stocked profile BIC 20, 200 mm, 15 m roll | `src/config/catalogue.ts`; [M-IDRO] |
| How common underground tanks are (Kenya) | A 2023 news report converts a KNBS 2019 figure into "about 120,000" underground tanks. Secondary source: check KNBS before quoting | [W10] |
| Local practice | A JamiiForums user planning a 100,000 litre "kisima cha ardhini" is told to add "water proof cement" | report 07, section 7 |
| What ranking guides lack | No coverage figure, no wait before filling, no named drinking-water approval | [W11] [W12] |

**Two cautions.** (a) No drinking-water statement was found in the Mapelastic Foundation extract. Present it for stopping ground water coming in, not as a drinking-water lining, unless Mapei confirms otherwise. (b) AS/NZS 4020, the Italian decree and BS 6920 are foreign approvals. Whether TBS or a water authority in Tanzania requires anything further was not found in this run. Say what the sheets say and no more.

**Sahihi products and pages to link**

Planiseal 88, Mapecoat DW 25, Triblock P, X-Shield FlexPruf, Lamposilex, YHRepair-2516, Mapelastic Foundation, Idrocrete KR 1000, Idrostop PVC BI BE ME, Mapeproof Swell, Mapeband TPE. Pages: `/mapei/waterproofing`, `/x-calibur`, `/solutions/waterproofing/water-tank` when built.

**Visuals**

- Data table: "Coating, what the data sheet says about drinking water, kg per m², wait before filling", one row per product, source line under each.
- Diagram: a section through an underground tank showing the waterstop in the floor-to-wall joint, the swelling bead around the inlet pipe, the cove at the corner and the coating on the inside face, with arrows for water pressure from both sides.
- Interactive or 3D: a tank calculator. Inputs: length, width, depth (or capacity in litres). Outputs: internal surface area, and kilograms and packs of each coating. A CSS 3D box resizes with the inputs and peels open to show the layers. A GLB cutaway is the upgrade.

### 3.6 Before masika: a waterproofing checklist for your house

Primary query: waterproofing before rainy season. J4 in report 07.

**Outline**

- H2 When the rain comes: Dar es Salaam month by month (the chart)
- H2 The best window for outdoor waterproofing, and why
  - H3 Dry days
  - H3 Humidity and curing
  - H3 How long each coating must stay dry after application
- H2 The checklist: eight places to look before March
  - H3 Roof outlets and gutters
  - H3 Parapets and the sheet-to-wall junction
  - H3 Slab roofs: cracks, ponding and old coatings
  - H3 Balconies and terraces
  - H3 Window sills and wall cracks
  - H3 The base of external walls
  - H3 Underground tank covers and inlets
  - H3 Bathrooms above occupied rooms
- H2 What can still be done once it is raining
- H2 Vuli is a second chance: the October to December rains
- H2 Outside Dar es Salaam: one long wet season upcountry
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Value as found | Source |
|---|---|---|
| Dar es Salaam rainfall by month, mm (Julius Nyerere International Airport, 1991 to 2020; NOAA) | Jan 54.2, Feb 70.8, Mar 169.6, Apr 263.6, May 172.2, Jun 31.3, Jul 15.8, Aug 17.8, Sep 20.2, Oct 77.3, Nov 114.4, Dec 110.2; year 1,117.4 | [W6] |
| Rainy days per month (1.0 mm or more) | Jan 4.2, Feb 4.2, Mar 11.3, Apr 16.6, May 11.3, Jun 3.9, Jul 3.0, Aug 3.1, Sep 3.6, Oct 5.4, Nov 8.5, Dec 7.5; year 82.6 | [W6] |
| Relative humidity by month, % | Jan 77, Feb 76, Mar 80, Apr 84, May 81, Jun 78, Jul 77, Aug 76, Sep 75, Oct 76, Nov 78, Dec 78; year 79 | [W6] |
| The two seasons, in a Tanzanian publisher's words | "the long rains (Masika) from March to May" and "the short rains (Vuli) from October to December" | [W13] |
| 2026 forecast (dated: replace each year) | Tanzania Meteorological Authority, reported 8 February 2026: masika expected from March until May or June 2026; normal to above-normal rain for Dar es Salaam, Tanga, the Coast Region, Kagera, Geita and the islands | [W14] |
| Rain protection after application | Mapelastic AquaDefense: 1 hour after the first coat and 3 hours after the second. Mapelastic Easy and Mapelastic Foundation: the first 24 hours. YHCoat-2060: cover "if exposed to rainwater" before fully dried; no outdoor work on rainy days | [M-AQUA] [M-EASY] [M-FOUND] [O3] |
| Humidity limit on one roof coating | YHColorWall-5300: relative humidity should not exceed 80% until the membrane has fully cured; ready for use 72 hours at +30°C | [O2] |
| What the two rows above imply (my inference, to be stated as such) | June to September has 3 to 4 rainy days a month and average humidity of 75 to 78%; March to May averages 80 to 84%. Exposed roof coating fits the dry months better than the weeks before masika |  [W6] [O2] |
| Hot-weather precaution | Keep powder and liquid out of direct sunlight; protect fresh material in dry, hot or windy weather | [M-EASY] [M-FOUND] |
| Emergency repair in running water | Lamposilex and YHRepair-2516 are made to stop running water | [M-LAMP] [O5] |
| A wall treatment that is not for roofs | Antipluviol: not for "terraces and flat roofs" | [M-ANTI] |
| What the ranking page offers | A Nairobi maintenance table priced in shillings; no data sheets; no diagram | [W15] |

**Sahihi products and pages to link**

YHColorWall-5300, X-Shield FlexPruf, Mapelastic Smart, Mapelastic AquaDefense, Antipluviol, Mapeflex PU 45 FT, YHPUseal-2925, Lamposilex, YHRepair-2516, Mapeband Easy. Pages: `/mapei/waterproofing`, `/oriental-yuhong`, `/x-calibur`, `/contact`, post 3.1 (hidden roofs), and the roof pillar when built.

**Visuals**

- Data table: the month-by-month table (rain, rainy days, humidity) with a "good window" column, and a second small table of rain-protection times per product.
- Diagram: a house section with the eight inspection points numbered to match the checklist.
- Interactive or 3D: a rainfall calendar. Bars for monthly rain, a line for humidity, the current month highlighted, and a countdown in weeks to March. Below it, the checklist with tick boxes that persist in the browser and print cleanly. All SVG; no 3D needed here. If a 3D element is wanted, reuse the isometric house from 3.4 with the eight points as hotspots.

---

## 4. FAQ blocks, per post

Questions marked (R) are adapted from FAQ blocks or headings on pages that rank now; (F) from the forum titles recorded in report 07; unmarked ones are mine. None is a Google People Also Ask question. Answers must come from the sources in section 3 or be left out.

**1. Why hidden roof houses leak, and the fix that lasts**
- Why does my hidden roof leak only in heavy rain? (R)
- Is the problem the hidden roof design or the workmanship? (R)
- How wide and deep should the gutter be? (R) Answer: an engineer sizes it; no figure was verified.
- Can a leaking hidden roof be fixed without removing the sheets?
- Nyumba ya contemporary inavuja: nifanye nini? (F)
- Gata ya zege inawekwa waterproof gani? (F, wording from attested terms)

**2. How much waterproofing per square metre? A kg/m2 guide**
- How many kilograms of waterproofing do I need for a bathroom?
- How many coats of waterproofing are needed?
- How far up the wall do I measure?
- Does a rough surface use more material?
- Is one thick coat as good as two thin coats?
- How many square metres does one kit cover?

**3. How long after waterproofing can you tile?**
- How long after applying a liquid membrane can one tile? (R)
- Can I tile the same day I waterproof?
- How long should I wait between coats?
- Does humid weather change the waiting time?
- Do I need a flood test before tiling?
- How long before a tiled pool or tank can be filled?

**4. Cementitious, liquid or acrylic membrane: which one?**
- Which lasts longer: liquid membrane or cementitious waterproofing? (R) Answer only with what data sheets state; no lifespan figure was verified.
- Can both systems be used together? (R)
- Which waterproofing is best for terraces? (R)
- Is cementitious waterproofing crack-resistant? (R)
- Which membranes can be left exposed to the sun?
- Which type is safe for a drinking water tank?

**5. Waterproofing an underground water tank**
- What is the best type of waterproofing for a water tank? (R)
- Can you waterproof an existing leaking underground water tank? (R)
- What certifications should I look for in potable water tank waterproofing? (R)
- How long after coating can I fill the tank?
- How do I seal the pipe where it passes through the tank wall?
- Kisima cha ardhini kinavuja: kinazibwaje? (F, wording from attested terms)

**6. Before masika: a waterproofing checklist for your house**
- When is the best time of year to waterproof a roof in Dar es Salaam?
- Can waterproofing be applied during the rainy season?
- How soon can rain fall on a new coating?
- What should I check on the roof before the rains?
- Does the same advice apply before vuli?

**7. How to waterproof a bathroom before tiling**
- Do bathroom walls need waterproofing, or only the floor?
- How high should the waterproofing go up the wall?
- How is the floor drain made watertight?
- Can I waterproof over old tiles?
- Why does my bathroom leak into the room below?

**8. Why waterproofing fails: seven causes and the fixes**
- Why is my roof still leaking after it was waterproofed?
- Why is the membrane peeling or blistering?
- Does waterproofing fail because of the product or the application?
- How do I check a waterproofing job before it is tiled over?
- How long does a waterproofing treatment typically last? (R) Answer only if a manufacturer figure is obtained.

**9. Leaking balcony: do the tiles have to come up?**
- Can a balcony be waterproofed without removing the tiles? (R)
- Does sealing the grout stop a balcony leaking?
- When must the tiles be lifted?
- Why does water come through at the edge of the balcony?

**10. Swimming pool waterproofing: the layers under the tiles**
- Is concrete alone enough to hold water in a pool?
- How long after waterproofing can pool tiles be laid?
- How long before the pool can be filled?
- Which grout is used in a swimming pool?
- How do I find where a pool is losing water?

**11. Leaking basement wall: fix it from inside or outside?**
- What is the difference between positive and negative side waterproofing?
- Can a basement wall be waterproofed from the inside?
- How do you stop water that is actively running through concrete?
- How is a lift pit waterproofed?

**12. Is waterproof cement enough to stop a leak?**
- What is waterproof cement?
- Does adding a waterproofing admixture make concrete waterproof?
- Can I use water proof cement instead of a membrane on a slab roof?
- Water proof cement inatosha kuzuia kisima kuvuja? (F, wording from attested terms)

**13. Flat concrete roof: which waterproofing survives the sun?**
- What is the best waterproofing for a flat concrete roof?
- Does a white roof coating make the house cooler?
- Can water be left standing on a waterproofed roof?
- Does a slab roof need a slope?

**14. Damp wall or leak? How to tell before you repaint**
- Kwanini nyumba nyingi Dar hubanduka rangi nje na ndani? (F, verbatim thread title)
- How do I tell rising damp from a leak?
- Can I paint over a damp wall?
- What is the white salt on my wall?
- If no damp proof membrane was put in when building, is there still a fix? (F, translated)

---

## 5. Sources

**Manufacturer data sheets and specifications (figures read from these documents).**

- [M-AQUA] Mapelastic AquaDefense, edition 14224-7-2026: https://cdnmedia.mapei.com/docs/librariesprovider34/products-documents/1_14224_mapelastic-aquadefense_en_74286d2ae6f6497b92f3973a7a66110f.pdf?sfvrsn=dbd5d489_0
- [M-EASY] Mapelastic Easy, edition 7559-2-2023 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_07559_mapelastic-easy_en-ae_8ee9cdbfaa5a4ffdba5f49083423f329.pdf?sfvrsn=bca39104_0
- [M-FOUND] Mapelastic Foundation, edition 2069-10-2025: https://cdnmedia.mapei.com/docs/librariesprovider24/products-documents/1_02069_mapelastic-foundation_en_14a2c61a5c12479c9674e70112711a22.pdf?sfvrsn=382e4694_0
- [M-SMART] Mapei UK Ltd outline specification, Mapelastic Smart, ref. IW/OS0032/2024 (a Mapei document, not a product data sheet; fetched and read in this run): https://cdnmedia.mapei.com/docs/librariesprovider12/default-document-library/mapelastic-smart---outline-specification.pdf?sfvrsn=ce75ff88_3
- [M-P88] Planiseal 88, edition 1148-01-2020 (Mapei Australia): https://cdnmedia.mapei.com/docs/librariesprovider14/products-documents/1_01148_planiseal-88-(former-idrosilex-pronto)_en-au_58b909ceedf44fd9bf024834c5964354.pdf?sfvrsn=6ddb3d71_0
- [M-LAMP] Lamposilex, edition 204-01-2024 (Mapei Australia): https://cdnmedia.mapei.com/docs/librariesprovider14/products-documents/1_00204_lamposilex_en-au_48bb0ff45e754546890c64b9462c1894.pdf?sfvrsn=39abdfaf_0
- [M-DW25] Mapecoat DW 25, edition 2049-3-2026: https://cdnmedia.mapei.com/docs/librariesprovider51/products-documents/1_02049_mapecoat-dw-25_en_3ef7e47bba774003b5ee04baca78d41d.pdf?sfvrsn=c3d423b9_0
- [M-KR1000] Idrocrete KR 1000, edition 7804-12-2019 (GB): https://cdnmedia.mapei.com/docs/librariesprovider26/products-documents/1_7804-idrocretekr1000-gb_e3533a86173946aea3642fe1dd5b7e3b.pdf?sfvrsn=e496a5a7_0
- [M-ANTI] Antipluviol, edition 326-7-2026: https://cdnmedia.mapei.com/docs/librariesprovider38/products-documents/1_00326_antipluviol_en_c8402448126f41f09753ef3b3962e761.pdf?sfvrsn=e27c6183_0
- [M-SWELL] Mapeproof Swell, edition 2063-1-2024: https://cdnmediautt.mapei.com/docs/librariesprovider5/products-documents/1_02063_mapeproof-swell_en_80f3ae4288824eaeab375cf61b8ccaa1.pdf?sfvrsn=e4899586_0
- [M-BANDEASY] Mapeband Easy, edition 7631-03-I-2026: https://cdnmedia.mapei.com/docs/librariesprovider2/products-documents/1_07631_mapeband-easy_en_b28a580a98f243819b95f6fd9ebf62d0.pdf?sfvrsn=aeed0172_0
- [M-IDRO] Idrostop PVC BI BE ME, edition 2138-8-2023 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_02138_idrostop-pvc-bi-be-me_en-ae_fef96434bc1d4100adce83fc8c1ff203.pdf?sfvrsn=18cb9aa7_0
- [X1] X-Shield FlexPruf: https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Shield_FlexPruf.pdf (repo copy read: `public/tds/x-calibur/x-shield-flexpruf.pdf`)
- [O1] YHCoat-1000, edition Feb. 2025, supplied by the owner: `public/tds/oriental-yuhong/yhcoat-1000.pdf`
- [O2] YHColorWall-5300, supplied by the owner: `public/tds/oriental-yuhong/yhcolorwall-5300.pdf`
- [O3] YHCoat-2060, supplied by the owner: `public/tds/oriental-yuhong/yhcoat-2060.pdf`
- [O4] YHPUseal-2925, supplied by the owner: `public/tds/oriental-yuhong/yhpuseal-2925.pdf`
- [O5] YHRepair-2516, supplied by the owner: `public/tds/oriental-yuhong/yhrepair-2516.pdf`

The five OYH sheets have no public URL on file. Report 05 records that OYH's export portal, https://order.oyh.com/, offers data sheet downloads; it was not fetched in this run. Published posts will link to the copies served from `/tds/oriental-yuhong/` on sahihicc.com.

**Pages fetched for facts.**

- [W1] https://www.businessdailyafrica.com/bd/markets/real-estate/why-the-flat-roof-craze-is-failing-homeowners-5497310
- [W2] https://mwakilishi.com/news/2026-06-15/why-more-homeowners-are-regretting-hidden-roof-designs
- [W3] https://www.kenyans.co.ke/news/91322-costly-mistake-made-when-constructing-hidden-roof
- [W4] https://mjenziwanyumbatz.blogspot.com/2026/03/how-to-build-hidden-roof-to.html
- [W5] https://www.designingbuildings.co.uk/wiki/Flat_roof
- [W6] https://en.wikipedia.org/wiki/Dar_es_Salaam (climate table credited there to NOAA, Deutscher Wetterdienst and the Tokyo Climate Center; cite NOAA in published copy after checking the original)
- [W7] https://store.astm.org/d5957-98r21.html (ASTM D5957-98(2021), Standard Guide for Flood Testing Horizontal Waterproofing Installations)
- [W8] https://www.flooringclarity.com/tiling-waterproof-membrane-what-homeowners-need-know/
- [W9] https://www.asianpaints.com/blogs/liquid-membrane-vs-cementitious-waterproofing.html
- [W10] https://www.kenyans.co.ke/news/89543-5-reasons-why-new-homeowners-are-ditching-underground-water-tanks
- [W11] https://www.drfixit.co.in/resources/blog/renovation/water-tank-waterproofing-what-you-should-know
- [W12] https://sunandaglobal.com/waterproofing-solutions-for-potable-water-storage-in-underground-tanks/
- [W13] https://nyaticement.vercel.app/blog/monsoon-construction
- [W14] https://www.thecitizen.co.tz/tanzania/news/national/six-regions-brace-for-heavy-rains-as-masika-season-approaches-5350224
- [W15] https://bestcareservices.co.ke/how-to-prevent-roof-leaks-during-heavy-rains/

**Pages fetched for SERP analysis only.**

- https://www.studiomatrx.org/guides/waterproofing-failures-bathroom-india
- https://tradecalculator.co.uk/answers/how-much-wet-room-tanking/
- https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/
- https://www.designingbuildings.co.uk/wiki/BS_8102 (lists three protection methods for below-ground structures: barrier materials, structurally integral watertight construction, drained cavity; gives no year or grades, so not used as a fact source)

**Seen in search results, not opened.** These support "who ranks" statements only; nothing in section 3 rests on them.

- https://www.schluter.com/schluter-us/en_US/faq/shower-system-kerdi-wait-before-tile-install
- https://angi.com/articles/your-shower-tile-really-waterproof.htm
- https://tilersforums.com/threads/bathroom-renovation-time-for-concrete-to-cure.21011
- https://www.contractortalk.com/threads/waterproofing-wait-time-for-tiling.285306/latest
- https://www.wickes.co.uk/Mapei-Mapelastic-Aquadefense-7-5kg/p/114253
- https://bestcareservices.co.ke/directory/flat-roof-waterproofing-service.html
- https://www.mwanaspoti.co.tz/bd/markets/real-estate/why-the-flat-roof-craze-is-failing-homeowners-5497310
- https://www.studiomatrx.org/guides/waterproofing-membrane-types-india
- https://www.in.weber/blog/types-waterproofing/compare-3-types-waterproofing-types-liquid-waterproofing
- https://www.concretenetwork.com/concrete/waterproofing_concrete_foundations/cementitious_waterproofing.htm
- https://civil4m.com/posts/24041/
- https://jiji.co.ke/ruiru/building-and-trades-services/underground-potable-water-tank-protective-coating-uo0OQIVumiQQ1vjksuRP07cW.html
- https://akvopedia.org/wiki/Special:MobileDiff/8638...33996
- https://www.specifile.co.za/wp-content/uploads/2024/03/Waterproofing-Tiling-of-Pools-Datasheet.pdf
- https://www.middleeast.weber/waterproofing/waterproofing-swimming-pools
- https://workshop.bunnings.com.au/t5/Outdoor/How-to-seal-a-leaking-outdoor-balcony/m-p/224502
- https://www.capstonetiling.com.au/blog/melbourne-balcony-leak-fixes
- https://jkcement.netlify.app/TDS/WPC11%20-TDS%20-%202026.pdf
- https://jiji.co.tz/sw/165-cement/waterproof
- https://da.xypex.com/Tanzania
- https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242
- https://tremcocpg-asiapacific.com/blog/top-3-reasons-for-waterproofing-failures
- https://holmeswaterproofing.co.za/?p=4826
- https://www.constructionspecifier.com/waterproofing-multifamily-balconies-common-mistakes-leading-to-major-failures/3/
- https://blog.kryton.com/2021/10/waterproofing-membrane-failure/
- https://ke.linkedin.com/in/ernest-juma-326ab714b
- https://mwananchi.co.tz/tanzania/news/national/weatherman-warns-of-flooding-and-landslides-in-dar-es-salaam-and-other-13-regions-4899604
- https://drylok.com/learn/blog/waterproofing-a-below-grade-space-from-the-inside-or-outside
- https://waterproofmag.com/2011/01/negative-side-waterproofing/
- https://www.kryton.com/in-the-news/2018/01/30/sealing-active-water-leaks/
- https://www.nation.africa/kenya/business/renovating-your-home-to-withstand-extreme-weather-4678258
- https://fema.gov/sw/print/pdf/node/661438
- https://bestcareservices.co.ke/directory/damp-rise-treatment-service.html
- https://wapmaxinc.blogspot.com/2026/01/when-water-seeps-through-foundation-to.html
- https://www.cemcrete.co.za/rising-damp.html
- https://vc4a.com/ventures/pct-waterproofing-east-africa/?lang=es
- https://www.engineeringnews.co.za/article/waterproofing-membrane-solutions-suited-to-local-conditions-2026-05-08
- https://www.coatingsworld.com/issues/2014-11-01/view_features/water-shortages-in-africa-drive-up-demand-for-water-storage-tanks-and-coating-technology
- https://www.screwfix.com/guides/building-doors/tiling/how-to-tile-a-bathroom-floor
- https://www.checkatrade.com/blog/how-to/tiling-bathroom/
- https://tza.sika.com/dms/getdocument.get/dd7e5a03-bf0f-435c-b8ea-10cbcd9c8891/sika-raintite.pdf
- https://zaf.sika.com/en/residential-and-homeimprovement/step-by-step-diy-projects/how-to-waterproof-a-tiled-roof.html

**Repo files used.** `docs/research/07-kw-waterproofing.md`, `SEO-STRATEGY.md`, `src/config/catalogue.ts`, `src/config/mapei-coverage.ts`, `src/config/mapei-tds.json`, `src/config/x-calibur-tds.json`, `src/config/oriental-yuhong-tds.json`, `src/content/mapei/*.json`, `src/content/oriental-yuhong/*.json`, `src/content/x-calibur/x-shield-flexpruf.json`, `docs/CATALOGUE-EXTRACTION.md`.

---

## 6. Not verified, and what to do about it

| Item | Status | Action |
|---|---|---|
| Search volumes and Tanzanian rankings for every query here | Not measured | Connect a rank and volume tool set to Tanzania, or run one Tanzania-located pass |
| People Also Ask questions | None captured | Same pass; then reorder section 4 |
| Which stocked product is right for lining a concrete box gutter | No data sheet names this use | Ask Mapei, OYH and X-Calibur technical services before writing post 1's repair section |
| YHColorWall-5300 roof consumption (3 kg/m²) against its per-coat rate (0.8 to 1.0 kg/m², at least two coats) | The two figures do not reconcile | Ask OYH how many coats the roof figure assumes |
| Tiling waits for YHCoat-1000, YHCoat-2060, X-Shield FlexPruf and Mapelastic Foundation | Not found in the text read | Ask the makers or leave as "see data sheet" |
| Mapelastic Smart product data sheet | Still not on file; figures are from Mapei UK's outline specification | Obtain the data sheet; until then label the source |
| Whether Tanzania requires a local approval for coatings in contact with drinking water | Not found | Ask TBS or the water authority; publish only the foreign approvals the sheets print |
| Draft Tanzania standard adopting ISO 13007-5 (liquid-applied membranes under tiles) | Seen in a SERP; the PDF returned 404 | Check status with TBS before citing |
| Hidden roof slope and parapet figures | One builder's blog only | Treat as practice, not as a requirement; have an engineer review post 1 |
| "About 120,000" underground tanks in Kenya | News report's own conversion of a KNBS figure | Check KNBS before quoting; no Tanzanian figure was found |
| Dar es Salaam climate table | Read on Wikipedia, which credits NOAA | Check the NOAA normals directly before publishing the chart |
| Swahili phrases "paa linavuja", "dawa ya kuzuia maji kuvuja" | No page found using them | Ask Sahihi's counter staff what customers say |
| Damp diagnosis rule (damp above about 1 metre is more likely a leak) | Vendor-authored article only | Verify with Mapei technical before post 14 uses it |
| Content of the two Kenyan pages that could not be opened (a hardware supplier's blog, a forum thread) | Not read | Open by hand once; they may be the closest regional competition |
