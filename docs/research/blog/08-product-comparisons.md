# Blog research 08 - product and brand questions

Cluster: the searches people make once they already know a product or
brand name. "X vs Y", "how to mix X", "coverage of X", "X drying time",
"is X waterproof", "what is X used for", and brand questions about Mapei,
Oriental Yuhong and X-Calibur.

Date: 2026-11-06. Research only. No page is built from this file until it
has a row in `SEO-STRATEGY.md` section 5.4 (GOVERNANCE rule).

---

## 1. Method and limits

**What was done**

1. Read `SEO-STRATEGY.md` sections 3 to 5, `src/config/catalogue.ts`,
   `src/config/mapei-coverage.ts` and all 54 verified data sheet extracts
   (44 in `src/content/mapei/`, 5 in `src/content/oriental-yuhong/`, 5 in
   `src/content/x-calibur/`).
2. Ran 15 web searches (the full budget). The queries are listed in
   section 5.
3. Fetched two Mapei documents from `cdnmedia.mapei.com` to cover
   Mapelastic Smart, which has no local extract (see limits).

**Limits. Read these before using any row below.**

- **The search tool is US-located.** Results are what a US searcher sees,
  not what someone in Dar es Salaam sees. Local packs, Jiji listings and
  Swahili results are under-represented.
- **No search volumes.** No keyword tool was available (Ahrefs is not
  authenticated in this session). Every statement about demand is inferred
  from what ranks (official FAQ pages, forum threads, retailer copy), not
  measured. "Easy" and "medium" below are judgments from one results page
  each, not grades.
- **One search per topic.** 15 searches covered 15 topics once. Nothing was
  re-run with a Tanzania or Kenya modifier except search 14.
- **mapei.com product pages could not be fetched** (HTTP 403 on three
  attempts: the UAE and South Africa Mapelastic Smart pages and the Mapei
  Canada FAQ). Only `cdnmedia.mapei.com` PDFs opened.
- **Mapelastic Smart has no verified local extract and no data sheet in
  `public/tds/mapei/`** (open question Q9). Its figures in this file come
  from two fetched Mapei documents, [S1] and [S2] in section 5, and are
  marked that way wherever they appear. One is a 2014 brochure, the other a
  2024 Mapei UK outline specification. Neither is the current UAE data
  sheet.
- **Every figure in this file is copied from a local extract or from [S1]
  or [S2].** Nothing is taken from search snippets, retailers or forums.
  Where a row says "derived", it is arithmetic on two printed figures and
  is labelled so. Where a value is missing from the extract the cell says
  so. It was not filled from memory.
- **Different test methods are not comparable.** Crack-bridging is printed
  under EN 1062-7 for some products and under EN 14891 for others.
  Strength is printed under ASTM for some floors and EN for others. The
  tables keep the method next to the number. A writer must not rank
  products across methods.
- **Pack sizes in the tables are the data sheet's.** What Sahihi stocks
  is in `catalogue.ts` and in the `packs` of `mapei-coverage.ts`, and it
  sometimes differs (Keracolor FF is stocked as a 5 kg alupack, Kerapoxy
  as a 5 kg kit). A published post shows the stocked pack.
- **No prices** appear here and none may appear in the posts.

**File shorthand used in the tables**

| Short | Path |
|---|---|
| `mapei/<slug>.json` | `src/content/mapei/<slug>.json` |
| `oyh/<slug>.json` | `src/content/oriental-yuhong/<slug>.json` |
| `xc/<slug>.json` | `src/content/x-calibur/<slug>.json` |

Field names are the JSON keys: `description`, `standards`,
`technicalData`, `consumption`, `consumptionTable`, `mixing`, `packaging`,
`whereToUse`, `notFor`, `notes`.

**Overlap with the Journal list already in `SEO-STRATEGY.md` 5.4.** Five
candidates below sit next to a post already planned there. One URL should
own each pair. The decision is the owner's, not this file's.

| This file | Already planned in 5.4 | Suggested handling |
|---|---|---|
| Post 2, adhesive ladder | #2 C1 or C2 | Keep both only if #2 stays generic (the class system) and post 2 stays product-named. Otherwise merge post 2 into #2 as its product section |
| Post 3, Keracolor FF or Kerapoxy | #6 Epoxy grout or cement grout | Merge. One post, generic primary query, product names as secondary |
| Post 5, Mapefloor I 300 SL or CPU | #3 Epoxy or polyurethane floor for a food factory | Merge, same reasoning |
| Post 8, coverage chart | #5 How much tile adhesive per square metre | Keep both. #5 is one product family, post 8 is the whole range |
| Post 12, tank lining | #7 Waterproofing an underground water tank | Merge post 12 into #7 as the product choice section |

---

## 2. Candidate posts

Fourteen candidates. Titles are 60 characters or fewer (count in
brackets). "What ranks now" is from one US-located results page per topic.

| # | Working title | Primary query | Secondary queries | Intent | What ranks now | Why Sahihi can win |
|---|---|---|---|---|---|---|
| 1 | Mapelastic Smart, Foundation, Easy or AquaDefense? (50) | Mapelastic Smart vs Mapelastic Foundation | Mapelastic vs Mapelastic Smart; Mapelastic AquaDefense vs Mapelastic; which Mapelastic for bathroom; which Mapelastic for basement; Mapelastic Easy vs Smart | Commercial comparison | No comparison page. Mapei regional product pages, retailer listings (Rawlins Paints, Promain, Alisouq), PDF mirrors, one Slovenian advertorial titled "Mapelastic yes, but which one". Mapei Canada runs an official FAQ on the difference between two Mapelastic products, which shows the question is asked | Nobody has put the four sheets side by side in English. Sahihi stocks all four and has three of the four sheets verified locally. Blocked on a current Smart data sheet (see section 6) |
| 2 | Keraflex Maxi S1, Adesilex P7, Kerabond T or Mapeset? (53) | Keraflex Maxi S1 vs Adesilex P7 | Kerabond T vs Adesilex P7; Mapeset vs Kerabond T; which Mapei tile adhesive for porcelain; Mapei tile adhesive for large format tiles; Keraflex Maxi S1 uses | Commercial comparison | Catalogue PDFs on ArchiExpo, Tile Mountain retail copy, NBS Source listings. No comparison | Four stocked products that form a clean class ladder (C1, C1T, C2T, C2TES1), every row verified, each with a calculator |
| 3 | Keracolor FF or Kerapoxy: which Mapei grout? (44) | Kerapoxy vs Keracolor FF | Mapei epoxy grout vs cement grout; Kerapoxy uses; Keracolor FF joint width; Kerapoxy coverage per m2; is Keracolor FF waterproof | Commercial comparison | Mapei colour-chart pages, a Mapei Singapore blog post on grout types, ArchiExpo PDFs. No product-versus-product page | Both consumption tables are verified, so the post can show kg per m2 for the same tile and joint in both grouts. No ranking page does |
| 4 | Ultraplan Eco 20 vs Ultraplan Contract (38) | Ultraplan Eco 20 vs Ultraplan Contract | Ultraplan Eco 20 drying time; Ultraplan Contract coverage; Mapei self levelling compound thickness; Ultraplan EC20 | Commercial comparison | Mapei South Africa and UAE product pages, a 2020 South African trade press item, retailer listings, PDF mirrors. No comparison | A two-column table from two verified sheets. Low competition. Supports `/mapei/primers-levelling` |
| 5 | Mapefloor I 300 SL or Mapefloor CPU: which floor? (49) | Mapefloor I 300 SL vs Mapefloor CPU | epoxy vs polyurethane cement flooring; Mapefloor CPU thickness; Mapefloor I 300 SL coverage; Mapei food factory flooring; Mapefloor FC 200 vs I 300 SL | Commercial comparison, specifier | Mapei project references (food plants in New Zealand and South Africa), Mapei news and systems pages. No head-to-head | Verified figures for four floors Sahihi stocks, plus a Tanzanian angle (humidity, wash-down). The generic query is hard globally; the product-named one is open |
| 6 | Cementitious or liquid membrane: which waterproofing? (53) | cementitious vs acrylic vs polyurethane waterproofing | cementitious vs liquid membrane; two component vs one component waterproofing; best membrane under tiles; flexible vs rigid waterproofing | Informational comparison | Weber India blog, Sunanda Global, Designing Buildings wiki, Ardex Australia, Polyguard, thisvsthat.io, a civil engineering forum. Generic copy, few numbers | Sahihi can compare real stocked products across three brands with sheet values. Limit: no polyurethane membrane and no stated "acrylic" membrane in the verified files (section 6) |
| 7 | How to mix Mapelastic: ratios, coats, waiting times (51) | how to mix Mapelastic | how to apply Mapelastic Smart; Mapelastic mixing ratio; how many coats of Mapelastic; Mapelastic Foundation application | How-to | Mapei New Zealand, South Africa and Singapore product pages, a US product data PDF, retailers, a Jiji Kenya listing. The search summary showed regional sheets disagreeing on the Smart mix ratio (not verified here) | The ratios, coat counts and waits are verified for three products. A Jiji Kenya listing in the results is the only East African signal seen in this cluster |
| 8 | Mapei coverage chart: kg per m2, product by product (51) | Mapei coverage per m2 | Mapelastic coverage; Keraflex Maxi S1 coverage; Ultraplan coverage per bag; Primer G coverage; Kerapoxy coverage | Reference | Not searched directly. Coverage figures surfaced inside retailer copy and PDF mirrors in searches 9 and 12 | 43 coverage models already exist in `mapei-coverage.ts`, each tied to a verbatim sheet sentence. One table that links to every calculator is a hub no retailer has |
| 9 | Mapei drying times: when to tile, grout or walk (47) | Mapelastic drying time before tiling | Keraflex drying time; Ultraplan drying time; how long before grouting; Mapelastic AquaDefense drying time; Primer G drying time | Reference, how-to | Not searched directly. Search 2 surfaced drying claims in Mapei Canada pages and retailer copy | One table of waits across about 25 stocked products, all verified. Honest hook: the sheets state times at +20 or +23°C, and Dar es Salaam is not that |
| 10 | Is tile adhesive waterproof? What the sheets say (48) | is tile adhesive waterproof | is Mapei tile adhesive waterproof; is Keraflex waterproof; is grout waterproof; water repellent vs waterproof | Informational | Mapei system pages (membrane plus adhesive), retailer listings (Travis Perkins and others) that call adhesive "waterproof" | An honest answer in the maker's own words, with links to the membrane pages. Fits strategy point 5 ("honest framing ranks") |
| 11 | Primer G: dilution ratios, drying time, coverage (48) | Primer G dilution ratio | how to use Primer G; Primer G before self levelling; Primer G drying time; Primer G coverage per m2 | How-to | UK retailers (Sealant Supplies, Promain, Builder Depot), a Tilers Forums thread on exactly this question, Mapei South Africa product page, PDF mirrors | The verified sheets disagree with each other (Primer G sheet 1:1, Ultraplan EC20 sheet 1:3). A post that explains which sheet governs answers the forum question properly |
| 12 | Planiseal 88 or Mapelastic Foundation for a tank? (49) | Planiseal 88 vs Mapelastic Foundation | Planiseal 88 drinking water; Mapei water tank waterproofing; negative pressure waterproofing; Mapecoat DW 25 | Commercial comparison | Mapei product pages, SpecifiedBy and NBS Source listings, a Mapei water tank project page, an Australian distributor PDF on potable water | Three stocked tank products with verified limits. Underground tanks are a named Tanzanian use in strategy point 6. Better as a section of Journal #7 |
| 13 | Mapegrout T60 or Mapegrout ME05: trowel or pour? (48) | Mapegrout T60 vs Mapegrout ME05 | Mapegrout T60 uses; Mapegrout ME05 thickness; repair mortar vs micro concrete; Mapegrout mixing water | Commercial comparison, specifier | Not searched | Each sheet names the other as the alternative, so the comparison is Mapei's own. Both verified |
| 14 | Mapei or Sika: how to compare two data sheets (45) | Mapei vs Sika | Mapei vs Sika tile adhesive; Mapei vs Sika waterproofing; Sika vs Mapei vs Fosroc | Commercial comparison | CB Insights company comparison pages, a Malaysian contractor blog, Tilers Forums threads, a Sika Nigeria page. No authoritative page | **Do not write yet.** See the note below |

**Note on post 14 (Mapei vs Sika and similar).** The searches exist and
the results page is weak, so a page could rank. Three rules apply before
it is written:

1. `GOVERNANCE.md` (2026-11-06): never mention a competitor's faults on
   the site.
2. `SEO-STRATEGY.md` 5.4: Mapei is a principal, so the wording must be
   cleared with Mapei first.
3. No Sika figure exists in the verified files. Any Sika value would need
   a fetched Sika data sheet with its URL and edition.

The only safe form is a neutral method post: how to read two EN 12004 or
EN 14891 data sheets side by side, with Mapei values from the local files
and no verdict on the other brand. It is recorded here and not
recommended for the first 15.

**Brand questions recorded, not proposed as posts.**

- Oriental Yuhong. Search 10 returned a Wikipedia entry, stock-exchange
  profiles, an Alibaba supplier profile, press releases and Malaysian
  retailers. No independent review ranked. The questions people appear to
  ask are "who is Oriental Yuhong" and "is it a good brand". No company
  fact about Oriental Yuhong was verified in this session.
- X-Calibur. Search 11 returned only the maker's own site (product guides
  and an FAQ titled "What is X-Calibur?"), a document mirror and a
  trademark record. No company fact was verified in this session.
- Recommendation: answer these as FAQ blocks on `/oriental-yuhong` and
  `/x-calibur`, which already own the brand queries in section 5.1. A blog
  post would compete with the hub. Company facts must come from the
  licence, the card, the letter or the maker's own page, not from this
  file.

---

## 3. The best six

Chosen for: a product-named query with no comparison page ranking, and a
table that can be filled from verified files today.

### Post 1 - Mapelastic Smart, Foundation, Easy or AquaDefense?

**Outline**

1. The short answer in four lines: where each one goes.
2. What Mapei calls each product (the four descriptions, verbatim).
3. The comparison table.
4. Water pressure: why Foundation is the only one of the four whose sheet
   states positive and negative pressure figures.
5. Under tiles only: AquaDefense must always be covered.
6. Thickness and coats: what "at least 2 mm in two coats" means on site.
7. How much to order: link each calculator.
8. What goes with them: Mapeband Easy at corners, Mapenet 150 in the first
   coat, Mapeband TPE at movement joints.
9. Where none of the four is right (link Planiseal 88, Antipluviol,
   Idrocrete KR 1000).
10. FAQ.

**Comparison table.** Columns 2 to 4 come from the local file named in the
header. The Smart column comes from [S1] and [S2] only.

| Field | Mapelastic Foundation (`mapei/mapelastic-foundation.json`) | Mapelastic Easy (`mapei/mapelastic-easy.json`) | Mapelastic AquaDefense (`mapei/mapelastic-aquadefense.json`) | Mapelastic Smart (no local file) |
|---|---|---|---|---|
| Data sheet edition | 2069-10-2025 en (IT) | 7559-2-2023 (UAE) | 14224-7-2026 en (IT) | Not a data sheet. Brochure C.P. MK993430 (GB) 05/2014 [S1]; Mapei UK outline specification IW/OS0032/2024 [S2] |
| `description` | Two-component, flexible cementitious mortar for waterproofing concrete surfaces subject to both positive and negative water pressure | Two-component acrylic modified cementitious, flexible waterproof coating easy to apply for waterproofing balconies, terraces, and bathrooms | Ready-to-use, ultra quick-drying, flexible liquid membrane for waterproofing interior and exterior surfaces | Two-component, high-flexibility cementitious mortar (with crack-bridging capacity > 2 mm) applied by trowel or roller for waterproofing balconies, terraces, bathrooms and swimming pools [S1] |
| Mixing ratio (`technicalData`) | component A : component B = 2.2 : 1 (one 22 kg bag with one 10 kg can) | component A : component B = 3 : 1 (one 18 kg bag with a 6 kg can) | None. Ready to use | component A : component B = 2 : 1 [S1] [S2] |
| `standards` | EN 14891 (CM01P); EN 1504-2, PI, MC and IR principles; EMICODE EC1 Plus | In compliance with the requirements of EN 14891 (no class printed) | Certified according to EN 14891, waterproofing under tile (no class printed) | EN 14891 (CM01P) and EN 1504-2, coating (C) principles PI, MC and IR [S2] |
| Crack-bridging, with method | Class A4 (+23°C) (> 1,25 mm), EN 1062-7 static | ≥ 0.75 mm at 23°C (method not in the extract) | 3.2 mm at +23°C, 1.6 mm at -5°C (EN 14891-A.8.2 and A.8.3) | Class A5 (+20°C) (> 2.5 mm), EN 1062-7 static [S1]. The UK specification heading says "up to 2mm" [S2] |
| Initial adhesion | Not in the extract | ≥ 1.5 N/mm² | 1.7 N/mm² (EN 14891-A.6.2) | 1.2 N/mm² (EN 14891-A.6.2) [S1] |
| Water under pressure | No penetration at 5 bar for 3 days, positive side. No penetration at 1.5 bar, negative side | Water impermeability, penetration depth: Nil | No penetration (EN 14891-A.7, 1500 kPa) | Not verified |
| Coats and thickness | At least two coats, final thickness not less than 2 mm. Not more than 2 mm per coat (`notFor`) | At least two coats, final thickness at least 2 mm | Two thin coats, approx. 0.4 mm per coat | 2 coats, 1 mm wet film per coat, final dry film not less than 2 mm [S2] |
| `consumption` | Roller approx. 1.65 kg/m² per mm. Spray 1.75 kg/m² per mm on flat surfaces, 2.1 on rough surfaces | Trowel or roller approx. 1.9 kg/m² per mm of thickness | 1 kg/m² for 2 coats | Trowel or roller 1.6 kg/m² per mm. Spray 2.2 kg/m² per mm [S2] |
| Derived: kg/m² at the 2 mm minimum, roller | 3.3 (derived) | 3.8 (derived) | Not applicable. 1 kg/m² total as printed | 3.2 (derived) |
| Pot life | approx. 60 mins. | approx. 2 hours (at +20°C). The text also says apply within 60 minutes of mixing (`notes`) | Not applicable | 1 hour. Use within 60 minutes [S2] |
| Wait between coats | Second coat approximately 6 hours after the first | Not stated (`notes`) | approx. 60 minutes (when dry touch) | approx. 4 - 5 hours at 23°C and 50% relative humidity [S2] |
| Wait before tiling | Not in the extract | At least 5 days | 3-4 hours (table). Body text says 4 hours after the second coat (`notes`) | Minimum of 5 days. Minimum of 21 days before full immersion [S2] |
| Application temperature | +5°C to +35°C in the application table, +5°C to +40°C in the technical data (`notes`) | +8°C to +40°C | +5°C to +35°C | +8°C to +40°C [S2] |
| `packaging` | 32 kg kits: A 22 kg bag, B 10 kg tank | 24 kg kits: A 18 kg bag, B 6 kg jerrycan | 3.5 kg, 7.5 kg and 15 kg buckets | Units of 30 kg: A 20 kg bag, B 10 kg drum [S2] |
| Key limit (`notFor`) | Not on substrates saturated with water. Protect from rain for the first 24 hours | Not on lightweight substrates. Not on cementitious substrates not sufficiently cured. Protect from rain for the first 24 hours | Must always be covered with ceramic, mosaic or stone. Not on substrates with residual humidity higher than 3%. Not to cover cracks | Not verified from a data sheet. [S1] states "Resistant to UV rays" |
| Where the sheet says to use it (`whereToUse`) | Foundation walls, car-parks, underground environments, basins, channels, swimming pools, lift pits, retaining walls | Bathrooms, showers, balconies, terraces before laying ceramic tiles. Plasterboard, render or cementitious surfaces | Bathrooms and shower cubicles, laundry rooms, saunas, balconies and terraces, before ceramic, stone and mosaic | Balconies, terraces, bathrooms and swimming pools [S1]. Substrates: concrete, existing floors, sand: cement screeds and renders [S2] |

Writer's cautions for this table:

- Do not rank the crack-bridging row. Foundation and Smart are printed
  under EN 1062-7, AquaDefense under EN 14891, Easy with no method in the
  extract.
- The three "derived" cells are the per-mm rate times 2 mm. The sheets do
  not print them. Say so in the post, or leave the row out and link the
  calculators.
- The Smart column cannot be published as data sheet values until the
  current UAE sheet is on file.

**Product pages to link**

- `/mapei/waterproofing/mapelastic-smart`
- `/mapei/waterproofing/mapelastic-foundation`
- `/mapei/waterproofing/mapelastic-easy`
- `/mapei/waterproofing/mapelastic-aquadefense`
- `/mapei/waterproofing/mapeband-easy`, `/mapei/waterproofing/mapenet-150`,
  `/mapei/waterproofing/mapeband-tpe` (system parts named in [S2])
- `/mapei/waterproofing/planiseal-88` (the rigid alternative)
- `/mapei/waterproofing` (line pillar)

**Diagram idea.** A building cross-section with four zones coloured by
product: terrace and balcony, bathroom, basement wall and lift pit, pool.
Two arrows on the basement wall show positive-side and negative-side water
pressure, labelled with Foundation's 5 bar and 1.5 bar test figures.

**Interactive or 3D idea.** A three-question selector: where is it, will
it be tiled over, is there water pressure behind the wall. It returns one
product and opens that product's coverage calculator with the area carried
over. A 3D option is an exploded layer stack (substrate, Mapeband Easy at
the corner, first coat with Mapenet 150, second coat, adhesive, tile)
using the existing `model-viewer.tsx`. Flag: 3D is a heavy element and the
owner asked to be told before one is built. The selector is light and
should come first.

---

### Post 2 - Keraflex Maxi S1, Adesilex P7, Kerabond T or Mapeset?

**Outline**

1. The short answer: the four as a ladder, by class.
2. What the class letters on the bag say, in Mapei's own words (T: "no
   vertical slip"; E: "extended open time"; S1: "deformable"). All three
   phrases are in the Keraflex Maxi S1 description.
3. The comparison table.
4. Tile size and tile type: where each sheet draws the line (Mapeset: not
   large format, not glass mosaic; Kerabond T: not non-absorbent tile on
   non-absorbent substrate).
5. Bed thickness: 5 mm limit on Kerabond T, 15 mm on Adesilex P7 and
   Keraflex Maxi S1.
6. Open time in heat: 20 minutes against more than 30.
7. How much per room: link each calculator.
8. FAQ.

**Comparison table.** Each column comes from the file in its header.

| Field | Mapeset (`mapei/mapeset.json`) | Kerabond T (`mapei/kerabond-t.json`) | Adesilex P7 (`mapei/adesilex-p7.json`) | Keraflex Maxi S1 (`mapei/keraflex-maxi-s1.json`) |
|---|---|---|---|---|
| Data sheet edition | 95-5-2023 (UAE) | 78-8-2026 en (IT) | 61-12-2017 (UAE). Old edition (`notes`) | 56-7-2026 (UAE) |
| Class, EN 12004 (`standards`) | C1 | C1T. C2ES2 only if mixed with Isolastic | C2T | C2TES1 |
| `description` | Cement based adhesive for tiles | Cementitious adhesive with no vertical slip for ceramic tiles | High-performance cementitious adhesive with no vertical slip for ceramic and porcelain tiles | High-performance, deformable cementitious adhesive with extended open time and no vertical slip, especially suitable for large-size porcelain tiles and natural stone (shortened) |
| Water per 25 kg bag (`mixing`) | 6.0-6.5 L grey, 5.75-6.25 L white | approx. 6.3-6.8 litres | 6.5-7.0 L | approximately 7-7.5 litres |
| Density of mix | 1600 kg/m³ | 1450 kg/m³ | 1600 kg/m³ | 1600 kg/m³ |
| Pot life | 6-8 hours | over 8 hours | over 8 hours | more than 8 hours |
| Open time | > 20 minutes (EN 1346) | 20 minutes (body text says 20-30, `notes`) | 20 minutes (EN 1346) | > 30 minutes |
| Adjustability time | approx. 45 minutes | approx. 45 minutes | approx. 60 minutes | approximately 45 minutes |
| Grouting, walls | after 4 to 8 hours depending on absorbency | after 4-8 hours | after 4-8 hours depending on absorbency | after 4-8 hours |
| Grouting, floors | after 24 hours | after 24 hours | after 24 hours | after 24 hours |
| Set to light foot traffic | 24 hours (in the sheet; left out of `technicalData`, see `notes`) | 24 hours | 24 hours | 24 hours |
| Ready for use | 14 days | 14 days | 14 days | 14 days. Pools and basins may be filled 21 days after application (`notes`) |
| Initial adhesion after 28 days | 1.0 N/mm² (ISO 13007-1) | 1.4 N/mm² | 1.4 N/mm² (EN 1348) | Not in the extract |
| Deformability | Not stated | Not stated for the water mix | Not stated | S1 - deformable (> 2.5 mm, < 5 mm) |
| Bed thickness limit | Not stated in the extract | Not for beds more than 5 mm thick (`notFor`) | To a thickness of 15 mm (`whereToUse`) | Up to 15 mm (`whereToUse`) |
| `consumption` | approx. 2 kg/m² (trowel No. 4), 2.5-3 kg/m² (No. 5), approx. 5 kg/m² (No. 6) | 2-5 kg/m², no trowel size attached | 2 kg/m² (trowel n. 4), 2.5-3 kg/m² (n. 5), 4 kg/m² (n. 6) | 1.2 kg/m² per mm of thickness |
| Application temperature | +5°C to +40°C | +5°C to +40°C | +5°C to +40°C | +5°C to +40°C |
| EMICODE | EC1 Plus | EC1 Plus | EC1 R PLUS | EC1 Plus |
| Key limits (`notFor`) | Large format tiles. Glass mosaics. Wood, metal, rubber, PVC, linoleum | Non-absorbent tiles on non-absorbent substrates. Gypsum board walls. Wood, metal, rubber, PVC, linoleum | Precast and poured concrete walls. Substrates subject to extreme flexing or vibration. Metal | Concrete not sufficiently cured. Wood. Metal, rubber, PVC, linoleum. Stone subject to efflorescence or staining |
| `packaging` | 25 kg bags, white and grey | 25 kg paper bags, white and grey | 25 kg bags, white and grey | 25 kg bags, grey and white |

Writer's cautions:

- The meaning of "C1" against "C2" is not in the extracts. If the post
  explains it, the sentence needs EN 12004 or a Mapei page as its source.
  Journal post #2 has the same need.
- Kerabond T's C2ES2 class is for the Isolastic mix only. The sheet puts
  those figures on the Isolastic sheet, which is not on file. Isolastic is
  not in the catalogue.
- Adesilex P7's sheet is the 2017 edition. Check for a newer one before
  publishing its column.

**Product pages to link**

- `/mapei/tile-adhesives-grouts/mapeset`
- `/mapei/tile-adhesives-grouts/kerabond-t`
- `/mapei/tile-adhesives-grouts/adesilex-p7`
- `/mapei/tile-adhesives-grouts/keraflex-maxi-s1`
- `/mapei/primers-levelling/primer-g` (named by three of the four sheets
  for gypsum and anhydrite substrates)
- `/mapei/tile-adhesives-grouts` (line pillar)

**Diagram idea.** A four-step ladder, one step per product, each step
adding the letter it gains (C1, then T, then C2, then E and S1), with the
sheet phrase beside each letter and the open time and bed limit under each
step.

**Interactive or 3D idea.** A picker with two inputs, tile type and
longest tile edge, plus one for substrate. It greys out any product whose
`notFor` list excludes that case and shows the sheet sentence that
excludes it. A bed-thickness slider then feeds the existing calculators to
give bags per room. No 3D needed.

---

### Post 3 - Keracolor FF or Kerapoxy: which Mapei grout?

Overlaps Journal #6. Treat as one post.

**Outline**

1. The short answer: cement grout for most floors and walls, epoxy where
   acid, hygiene or aggressive water is the issue.
2. What each one is (CG2WA cement grout; RG epoxy grout that is also an
   R2T adhesive).
3. The comparison table.
4. Joint width: up to 6 mm against at least 1 mm.
5. Working window: about 2 hours of pot life against 45 minutes, and a
   narrower temperature range for the epoxy (+12°C to +30°C).
6. How much grout: the same tile and joint in both, from Mapei's own
   tables.
7. Where Mapei says not to use each one.
8. FAQ.

**Comparison table**

| Field | Keracolor FF (`mapei/keracolor-ff.json`) | Kerapoxy (`mapei/kerapoxy.json`) |
|---|---|---|
| Data sheet edition | 131-12-2025 (UAE) | 141-9-2026 en (IT) |
| `description` | High-performance, polymer-modified, water-repellent, cementitious grout with DropEffect technology for joints up to 6 mm | Two-component acid-resistant epoxy grout for joints of at least 1 mm. Can also be used as an adhesive |
| Class (`standards`) | CG2WA (EN 13888-1, ISO 13007-3) | RG (EN 13888, ISO 13007). R2T as an adhesive (EN 12004) |
| Mixing | 100 parts with 23-25 parts of water by weight, depending on the colour | component A : component B = 9 : 1 |
| Density of mix | 2000 kg/m³ | 1,550 kg/m³ |
| Pot life | approx. 2 hours | 45 mins. |
| Application temperature | +5°C to +40°C | +12°C to +30°C |
| Waiting time for finishing | 10-20 minutes | Not in the extract |
| Set to light foot traffic | 24 hours | 24 h |
| Ready for use | 3 days (7 days for tanks and swimming pools) | 4 days (10 days for basins and swimming pools) |
| Temperature in service | -30°C to +80°C | -20°C to +100°C |
| Strength | No figures printed, compliance with CG2WA only (`notes`) | Flexural 31 N/mm², compressive 55 N/mm² |
| Colours | 16 colours from the MAPEI range | 12 (`notes`) |
| `packaging` | 20 kg paper bags and 4x5 kg alupacks | Units of 10, 5 and 2 kg in total (`notes`) |
| Named uses (`whereToUse`) | Interior and exterior floor and wall tiling, stone, glass and marble mosaics. Swimming pools. Industrial tile floors where resistance to chemical agents is not required (garages, warehouses) | Food industry (dairies, abattoirs, breweries). Industrial floors needing resistance to acid attack. Pools with salt or thermal water. Tanks with aggressive chemicals. Laboratory benches and kitchen worktops |
| Limits (`notFor`) | Never in expansion or movement joints. Do not add water to a mix that is beginning to set | Not for terracotta tiles. Not for movement joints. Do not add water or solvents |
| As an adhesive | Not applicable | 2-4 kg/m² (`consumption`) |

**Grout consumption for the same tile, kg/m²** (from each file's
`consumptionTable`, which copies the table Mapei prints)

| Tile (mm) | Joint 3 mm: Keracolor FF | Joint 3 mm: Kerapoxy | Joint 5 mm: Keracolor FF | Joint 5 mm: Kerapoxy |
|---|---|---|---|---|
| 100x100x7 | 0.6 | 0.7 | 1.1 | 1.1 |
| 200x200x9 | 0.4 | 0.4 | 0.7 | 0.7 |
| 300x300x10 | 0.3 | 0.3 | 0.5 | 0.5 |
| 300x600x10 | 0.2 | 0.2 | 0.4 | 0.4 |
| 600x600x10 | blank in the sheet | 0.2 | 0.3 | 0.3 |

Writer's cautions:

- Mapei's tables round to one decimal. For large tiles many cells read
  0.1, so do not multiply small numbers up to whole projects without the
  calculator.
- The consumption formula is printed as an image in both sheets and is
  not in the extracts (`notes`). `mapei-coverage.ts` does carry it, in the
  `note` of each grout model: (A + B) / (A x B) x C x D x 1.5 for
  Keracolor FF and x 1.6 for Kerapoxy, all in mm, giving kg/m². `npm test`
  checks that maths against the tables Mapei prints. Quote it from that
  file, and look at the PDF once before it is published as "Mapei's
  formula".
- Keracolor FF's table has no 6 mm column although the description says
  joints up to 6 mm. Kerapoxy's table starts at 3 mm although the
  description says at least 1 mm.
- The word in the sheet is "water-repellent", not "waterproof".

**Product pages to link**

- `/mapei/tile-adhesives-grouts/keracolor-ff`
- `/mapei/tile-adhesives-grouts/kerapoxy`
- `/mapei/waterproofing/mapeflex-pu-45-ft` (a sealant for the joints
  neither grout may fill; check the product fits before naming it, since
  the grout sheets name Mapesil, which is not in the catalogue)
- `/mapei/tile-adhesives-grouts/ultracare-hd-cleaner`
- `/mapei/tile-adhesives-grouts` (line pillar)

**Diagram idea.** Two horizontal range bars on one scale: temperature in
service (-30 to +80 against -20 to +100) and, below it, the working window
(application temperature and pot life) for each grout.

**Interactive or 3D idea.** A side-by-side grout calculator: choose a tile
size and joint width once and read the kg for both grouts from Mapei's
printed tables, with bag and kit counts. Both products already have a
"grout" coverage model in `mapei-coverage.ts`, so this is a new view on
existing maths.

---

### Post 4 - Ultraplan Eco 20 vs Ultraplan Contract

**Outline**

1. The short answer: same job, same thickness range, different strength
   and bag size.
2. A naming note: the sheet on file is titled Ultraplan EC20.
3. The comparison table.
4. What each can go under, and when (tiles after 3 hours on both; wood
   differs).
5. Going thicker than 10 mm: what each sheet says to add.
6. Priming: the two sheets give different Primer G dilutions.
7. Bags per room: link both calculators.
8. FAQ.

**Comparison table**

| Field | Ultraplan Eco 20 (`mapei/ultraplan-eco-20.json`) | Ultraplan Contract (`mapei/ultraplan-contract.json`) |
|---|---|---|
| Title as printed, edition | ULTRAPLAN EC20, 4005-10-2026 (UAE) | ULTRAPLAN CONTRACT, 4085-2-2023 (UAE) |
| `description` | Fast-drying self-levelling smoothing compound for thicknesses from 1 to 10 mm per layer | Self-levelling, ultra quickhardening smoothing compound for thicknesses from 1 to 10 mm per coat |
| EN 13813 class (`standards`) | CT-C20-F5-A1FL | Not stated in the sheet (`notes`) |
| EMICODE | EC1 Plus | EC1 Plus |
| Bag (`packaging`) | 23 kg | 25 kg |
| Water per bag (`mixing`) | 5.5-5.75 litres per 23 kg bag (24-25 parts per 100) | 5-5.25 L per 25 kg bag (20-21%) |
| Density of mix | 2000 kg/m³ | 2000-2150 kg/m³ |
| Pot life | 20-30 minutes | 20-35 min (mixing text says 20-30, `notes`) |
| Setting time | 45-60 minutes | Not in the extract |
| Set to light foot traffic | min. 3 h | min. 3 h |
| Before ceramic tiles | min. 3 h | min. 3 h |
| Before resilient flooring | min. 24 h (resilient and carpet) | min. 24 h (resilient and wood) |
| Before wood flooring | min. 48 h | min. 24 h, and not less than 3 mm thick under wood (`notFor`) |
| Compressive strength | > 20.0 N/mm² after 28 days | 12 MPa after 1 day, 20 MPa after 7 days, 30 MPa after 28 days |
| Flexural strength | > 5.0 N/mm² after 28 days | 3 MPa after 1 day, 5 MPa after 7 days, 6 MPa after 28 days |
| `consumption` | 1.6 kg/m² per mm of thickness | 1.7 kg/m² per mm of thickness |
| Derived: m² per bag at 3 mm | 4.8 (23 kg / 4.8 kg/m², derived) | 4.9 (25 kg / 5.1 kg/m², derived) |
| Above 10 mm (max. 20 mm) | Add approx. 30% by weight of 0.5 mm quartz (`notes`) | Add approximately 20-30% of sand, grain size 0/4 or 0/8 (`notes`) |
| Wheeled loads | Minimum of 3 mm recommended for chairs and trolleys (`whereToUse`) | Not stated in the extract |
| Primer G dilution named in this sheet | 1 part Primer G with 3 parts of water (`notes`) | 1:1 with water on dusty or particularly porous concrete (`notes`) |
| Application temperature | +5°C to +40°C. Do not attempt large areas above +30°C (`notFor`) | +5°C to +40°C |
| Limits (`notFor`) | Not for exterior. Not on continuous rising dampness. Not on metal | Not for exterior. Not on continuous rising damp |

Writer's cautions:

- Name: the catalogue and the price list say "Ultraplan Eco 20"; the
  sheet says "Ultraplan EC20" throughout and never "Eco 20". Search 5
  showed Mapei South Africa URLs for both names. Whether they are one
  product was not verified. Settle the name before the title is fixed.
- "Do not attempt large areas above +30°C" is the line that matters most
  in Dar es Salaam. Lead a section with it.
- The two "derived" cells are arithmetic. The sheets do not print a
  coverage per bag.

**Product pages to link**

- `/mapei/primers-levelling/ultraplan-eco-20`
- `/mapei/primers-levelling/ultraplan-contract`
- `/mapei/primers-levelling/primer-g`
- `/mapei/primers-levelling/triblock-p` (the stocked treatment for damp
  substrates, which both Ultraplan sheets exclude. Neither Ultraplan sheet
  names it in the extract, so check the pairing before presenting it as
  the fix)
- `/mapei/resin-flooring/quartz-sand` (the quartz named for thicker
  layers)
- `/mapei/primers-levelling` (line pillar)

**Diagram idea.** One horizontal timeline per product from pour to wood
flooring: 3 h foot traffic, 3 h tiles, 24 h resilient, 24 or 48 h wood.
The two bars differ only at the wood marker, which is the point.

**Interactive or 3D idea.** One thickness slider (1 to 10 mm) and one area
field drive both calculators at once and show bags of each side by side.
Above 10 mm the tool stops and shows the sheet sentence about adding
quartz or sand, since no consumption figure is printed for that mix.

---

### Post 5 - Mapefloor I 300 SL or Mapefloor CPU: which floor?

Overlaps Journal #3. Treat as one post.

**Outline**

1. The short answer: a 2 mm epoxy self-leveller, or a 3 to 6 mm
   polyurethane cement screed where heat and wash-down are in play.
2. The four resin floors Sahihi stocks and what each is.
3. The comparison table.
4. Thickness and temperature: the CPU+/MF sheet ties service temperature
   to thickness.
5. Moisture and humidity before coating: the limits each sheet prints.
6. Programme: pot life, recoat and return to service.
7. The system, not the tin: Primer SN and quartz.
8. Hygiene and food: the standards each sheet cites.
9. FAQ.

**Comparison table**

| Field | Mapefloor I 300 SL ME (`mapei/mapefloor-i-300-sl-me.json`) | Mapefloor CPU+/MF (`mapei/mapefloor-cpu-plus-mf.json`) | Mapefloor FC 200 ME (`mapei/mapefloor-fc-200-me.json`) | X-Tech EpoxyFloor SL (`xc/x-tech-epoxyfloor-sl1.json`) |
|---|---|---|---|---|
| Data sheet edition | 6797-6-2019 (UAE) | 8990-11-2023-I en (IT) | 6782-8-2023 (UAE) | Not recorded |
| `description` | Three-component multi-purpose coloured epoxy formulate for industrial floor coatings from 1 to 4 mm thick | High-performance self-smoothing polyurethane cement mortar from 3 to 6 mm | High build epoxy resin floor coating | Three component, self smoothing epoxy floor topping |
| Thickness | 1 to 4 mm in the title, 2 to 4 mm in the characteristics (`notes`) | 3 to 6 mm | No film thickness stated (`notes`) | SL1 grade: 1 to 1.5 mm |
| Workability or pot life | 35 min at +20°C | 15 min at +23°C | 35-45 min | Not in the extract |
| Application temperature | +8°C to +35°C (surroundings, material and substrate) | Surface from +10°C to +30°C | +5°C to +35°C | Not in the extract |
| Dust dry or tack free | 2-4 hours | 2-4 h | Not in the extract | Not in the extract |
| Recoat | On Primer SN fully broadcast: min. 12 h, no maximum. Light broadcast: min. 18 h, max. 24 h | 12 h | Overcoating time 20 h | Not in the extract |
| Foot traffic | approx. 24 hours | Light traffic 24 h | 24 h. Vehicular traffic 48 h | Not in the extract |
| Full hardening | approx. 7 days | 4-5 days | Not in the extract | Not in the extract |
| Compressive strength, with method | 50 N/mm² (ASTM C579-01) | C50 (EN 13813, typical values) | > 80 N/mm² (ASTM C 579 - 01/B); 40 N/mm² (EN 196-1) | > 70 MPa (ASTM D695) |
| Flexural strength | 28 N/mm² (BS6319-3) | F15 (EN 13813) | Not in the extract | Not in the extract |
| Abrasion | Taber 58 after 7 days (ASTM D4060, 1,000 g, 1,000 rev, CS17) | AR0.5 (EN 13813) | Taber 95 (ASTM D 4060-10, CS17, 1000 g, 1000 cycles) | Not in the extract |
| Bond | Not in the extract | ≥ 2 N/mm² (EN 13892-8) | ≥ 1.5 N/mm² (ASTM D4541) | Not in the extract |
| Hardness | Not in the extract | Shore D 83 after 28 days | Not in the extract | Not in the extract |
| Service temperature | Not in the extract | 3 mm: -10°C up to +60°C. 4 mm: -15°C up to +70°C. 6 mm: -25°C up to +80°C (`notes`) | Not in the extract | Not in the extract |
| `consumption` | 3.7 kg/m² at an average thickness of 2 mm, on Primer SN at 0.3 kg/m² | approx. 5.5 kg/m² at 3 mm, 7 kg/m² at 4 mm, 10 kg/m² at 6 mm. Scratch coat approx. 1.7 kg/m² at 1 mm | 0.32 kg/m² per coat (roll coat). 0.35-0.40 kg/m² per coat (non-slip, with Quartz 0.5 at 0.5-1.0 kg/m²) | 17 m² per 17 L pack at 1 mm |
| Kit (`packaging`) | 47 kg (A 17 kg, B 5 kg, C 25 kg). Yields 25.4 liters | 2 x A 2 kg, 2 x B 2.16 kg, C 20 kg bag, 2 x Mapecolor CPU+ 0.23 kg | 25.5 kg (A 22 kg, B 3.5 kg) | 17 liter packs |
| Food and hygiene references (`standards`) | None stated (`notes`). Foodstuffs industry is in `whereToUse` | EN 1186, EN 13130 and prCEN/TS 14234 (foodstuffs sector). Fulfils HACCP requirements. ISO 846 (fungi and bacteria). ISO 4628-1 riboflavin test | None in the extract. Foodstuffs industry is in `whereToUse` | FDA CFR 21 Section 175.300 is listed, with no statement recorded |
| Moisture limits (`notFor`) | Not on damp substrates or with capillary rising damp | Not on wet substrates or on concrete younger than 7 days | Not above 4% substrate moisture. Air relative humidity not greater than 75% | None recorded |
| Primer | Primer SN, required (`notFor`) | Mapefloor CPU+/Primer, or Primer SN fully broadcast with Quartz 0.9 on dry substrates (`notes`) | Primer SN if required, 0.15-0.25 kg/m² | X-Prime GP is the stocked X-Calibur epoxy primer (`xc/x-prime-gp.json`); the pairing is not stated in the extract |

Writer's cautions:

- CPU+/MF consumption is not linear. 1 mm is 1.7 kg/m² but 3 mm is 5.5.
  Do not print a per-mm rate. No 5 mm figure exists.
- I 300 SL ME prints two consumption figures: 3.7 kg/m² at 2 mm, and "at
  least 2.5-3.5 kg/m²" with no thickness. The extract notes that the
  printed yield and density agree with 3.7.
- Do not rank compressive strength across ASTM and EN methods.
- The 75% relative humidity line is in the FC 200 ME sheet. Strategy
  point 6 gives coastal humidity as 75-84%; that range comes from the
  strategy file and was not re-verified here.
- The X-Calibur extract is thin (three technical rows). It supports a
  mention, not a full column in the published table.
- Mapefloor CPU+/Primer is not in the catalogue.

**Product pages to link**

- `/mapei/resin-flooring/mapefloor-i-300-sl-me`
- `/mapei/resin-flooring/mapefloor-cpu-plus-mf`
- `/mapei/resin-flooring/mapefloor-fc-200-me`
- `/mapei/resin-flooring/primer-sn`
- `/mapei/resin-flooring/quartz-sand`
- `/mapei/primers-levelling/triblock-p` (its sheet names damp concrete
  before epoxy and polyurethane systems)
- `/x-calibur/x-tech-epoxyfloor-sl1`, `/x-calibur/x-prime-gp`
- `/mapei/resin-flooring` (line pillar)

**Diagram idea.** A thickness ladder for CPU+/MF: three bars at 3, 4 and
6 mm, each labelled with its kg/m² and its service temperature range,
beside a single 2 mm bar for I 300 SL ME.

**Interactive or 3D idea.** A build-up scrubber using the existing
`build-up-scrub.tsx`: scroll to lay the slab, primer, quartz broadcast and
body coat for each system, with the consumption of each layer appearing as
it lands. A true 3D exploded floor is possible with `model-viewer.tsx`
but is a heavy element; flag it to the owner first.

---

### Post 6 - Mapei drying times: when to tile, grout or walk

(Candidate 9 in section 2.)

**Outline**

1. Why "drying time" is four different questions: next coat, cover it,
   walk on it, put it into service.
2. The temperature caveat: sheet times are laboratory times.
3. Table A: waterproofing.
4. Table B: tile adhesives and grouts.
5. Table C: primers and levelling.
6. Table D: resin floors.
7. Table E: repair and injection.
8. A worked sequence for one bathroom, step by step, without adding the
   waits into a single promised total.
9. FAQ.

**Table A - waterproofing**

| Product | Next coat | Before tiling or covering | In service | File |
|---|---|---|---|---|
| Mapelastic AquaDefense | approx. 60 minutes (when dry touch) | 3-4 hours | Complete drying of a 1 mm thick layer: 12 hours | `mapei/mapelastic-aquadefense.json` |
| Mapelastic Easy | Not stated | At least 5 days | Protect from rain for the first 24 hours | `mapei/mapelastic-easy.json` |
| Mapelastic Foundation | Approximately 6 hours | Not in the extract | Protect from rain and water contact for the first 24 hours | `mapei/mapelastic-foundation.json` |
| Mapelastic Smart | approx. 4 - 5 hours at 23°C and 50% relative humidity | Minimum of 5 days | Minimum of 21 days before full immersion | [S2], no local file |
| Planiseal 88 | After 5 hours, and no later than 24 hours | Not applicable | 7 days before putting into service | `mapei/planiseal-88.json` |
| Antipluviol | Wet-on-wet, continuously | Not applicable | Drying time 1-2 hours | `mapei/antipluviol.json` |
| Mapecoat DW 25 | 6-24 hours | Not applicable | Film sets in 4-5 hours. Final hardening 7 days | `mapei/mapecoat-dw-25.json` |
| YHColorWall-5300 | Not in the extract | Not applicable | Ready for use 72 hours at +30°C | `oyh/yhcolorwall-5300.json` |

**Table B - tile adhesives and grouts**

| Product | Grout walls | Grout floors | Light foot traffic | Ready for use | File |
|---|---|---|---|---|---|
| Mapeset | 4 to 8 hours | 24 hours | 24 hours | 14 days | `mapei/mapeset.json` |
| Kerabond T | 4-8 hours | 24 hours | 24 hours | 14 days | `mapei/kerabond-t.json` |
| Adesilex P7 | 4-8 hours | 24 hours | 24 hours | 14 days | `mapei/adesilex-p7.json` |
| Keraflex Maxi S1 | 4-8 hours | 24 hours | 24 hours | 14 days (pools filled after 21 days) | `mapei/keraflex-maxi-s1.json` |
| Keracolor FF | Not applicable | Not applicable | 24 hours | 3 days (7 days for tanks and swimming pools) | `mapei/keracolor-ff.json` |
| Kerapoxy | Not applicable | Not applicable | 24 h | 4 days (10 days for basins and swimming pools) | `mapei/kerapoxy.json` |
| UltraCare Stain Protector W Plus | Not applicable | Not applicable | 2 hours | Surface drying 2 hours | `mapei/ultracare-stain-protector-w-plus.json` |

**Table C - primers and levelling**

| Product | Wait | File |
|---|---|---|
| Primer G | 30 min on concrete, 30-60 min on gypsum, before levelling compound or adhesive | `mapei/primer-g.json` |
| Triblock P | Dry to the touch after approx. 4-6 hours. 4-6 hours between coats. Light foot traffic 24 hours. Further applications from 24 hours up to a maximum of 7 days | `mapei/triblock-p.json` |
| Ultraplan Eco 20 (sheet: EC20) | Foot traffic min. 3 h. Tiles min. 3 h. Resilient and carpet min. 24 h. Wood min. 48 h | `mapei/ultraplan-eco-20.json` |
| Ultraplan Contract | Foot traffic min. 3 h. Tiles min. 3 h. Resilient and wood min. 24 h | `mapei/ultraplan-contract.json` |
| Lignobond | Foot traffic after 24 hours. Sanding after approximately 3 days | `mapei/lignobond.json` |

**Table D - resin floors**

| Product | Recoat window | Foot traffic | Full hardening | File |
|---|---|---|---|---|
| Primer SN | min. 12 h, max. 48 h without quartz. min. 12 h, no maximum with quartz (at +23°C and 50% R.H.) | approx. 24 hours | approx. 7 days | `mapei/primer-sn.json` |
| Mapefloor I 300 SL ME | min. 12 h, no maximum (full broadcast). min. 18 h, max. 24 h (light broadcast) | approx. 24 hours | approx. 7 days | `mapei/mapefloor-i-300-sl-me.json` |
| Mapefloor FC 200 ME | 20 h | 24 h (vehicles 48 h) | Not in the extract | `mapei/mapefloor-fc-200-me.json` |
| Mapefloor CPU+/MF | 12 h | 24 h, light traffic | 4-5 days | `mapei/mapefloor-cpu-plus-mf.json` |
| Mapefloor PU 410 | Not in the extract | 24 hours, light | 7 days | `mapei/mapefloor-pu-410.json` |
| Mapefloor Finish 450 ME | Not in the extract | 24 h | 3 days | `mapei/mapefloor-finish-450-me.json` |

**Table E - repair and injection**

| Product | Wait | File |
|---|---|---|
| Mapefer 1K | approx. 2 hours between the 2 coats. 6-24 hours before the repair mortar | `mapei/mapefer-1k.json` |
| Mapegrout T60 ME | max 1-2 hours between layers | `mapei/mapegrout-t60.json` |
| Lamposilex | Pot life approx. 1 minute at +20°C | `mapei/lamposilex.json` |
| Epojet LV | Setting time 7-8 hours at +23°C, 2-3 hours at +30°C. Complete hardening 7 days | `mapei/epojet-lv.json` |
| Eporip | Open time 3-4 hours at +23°C, 1 hour 30 minutes to 2 hours 30 minutes at +30°C. Complete hardening 7 days | `mapei/eporip.json` |

Writer's cautions:

- Where a sheet prints a reference condition it is +20°C or +23°C,
  usually with 50% relative humidity. Only four stocked products in these
  files print a +30°C figure: Epojet LV, Eporip, YHCoat-1000 (pot life
  about 30 minutes at +30°C, `oyh/yhcoat-1000.json`) and YHColorWall-5300.
  Say that plainly. Do not convert other times to "Dar es Salaam times".
- Mapelastic Easy prints "at least 5 days" and adds that the wait may be
  longer in cold conditions or reduced in good weather (`notes`).
- Do not add the rows of a system into one total. The sheets give
  minimums for each step, not a programme.

**Product pages to link.** Every product in the five tables, each to its
own page, plus the five line pillars. This post is the widest internal
link hub in the cluster: about 30 product pages.

**Diagram idea.** A horizontal job clock for one bathroom: Primer G (30
min), Ultraplan (3 h to tile), Mapelastic AquaDefense (60 min between
coats, 3-4 h to tile), adhesive (24 h to grout the floor), Keracolor FF
(24 h to walk, 3 days ready). Each step is its own bar with the sheet
value on it. No summed total.

**Interactive or 3D idea.** A filterable table: pick a line (waterproofing,
tiling, levelling, resin, repair) and a question (next coat, cover, walk,
service) and the table reduces to one column of answers, each linking to
the product page and the data sheet PDF. Plain HTML and a few lines of
script. No 3D.

---

## 4. Verified figures for the other eight candidates

So a writer can build tables for these too. Same rules: every value is
from the file named.

**Candidate 6 - cementitious or liquid membrane (three brands)**

| Product | Type as the sheet words it | Components | Consumption | Other verified figures | File |
|---|---|---|---|---|---|
| Mapelastic Easy | Acrylic modified cementitious, flexible waterproof coating | 2 (A:B = 3:1) | approx. 1.9 kg/m² per mm, at least 2 mm | Crack-bridging ≥ 0.75 mm at 23°C. EN 14891 | `mapei/mapelastic-easy.json` |
| Mapelastic Foundation | Flexible cementitious mortar | 2 (A:B = 2.2:1) | approx. 1.65 kg/m² per mm by roller, not less than 2 mm | 5 bar positive, 1.5 bar negative, no penetration | `mapei/mapelastic-foundation.json` |
| Planiseal 88 | Osmotic cementitious mortar | 1 powder plus water (4.2 - 4.6 litres per 20 kg bag) | approx. 1.5 kg/m² per mm, final thickness approximately 2-3 mm | Rigid only (`notes`). Not on surfaces subject to dynamic stresses. Certified to AS/NZS 4020:2018 for potable water | `mapei/planiseal-88.json` |
| YHCoat-1000 | Polymer-modified cementitious waterproofing slurry | 2 (Part A : Part B = 3 : 10 by weight) | 2 kg/m² by 2 coats in wet areas. 3 kg/m² by 2-3 coats elsewhere | Density 2.0 kg/L. Pull-off ≥ 1.0 MPa (ASTM D7234). Pot life about 30 minutes at +30°C. Not a traffickable finish. 6 kg pail | `oyh/yhcoat-1000.json` |
| X-Shield FlexPruf | Flexible elasto-cement coating | Kit | 1 L (1.7 kg) per m² per coat. Normal applications require 2 coats | Yield 12.8 liters per kit. 22 kg kits. ANSI A118.10 and BS 6920 are listed with no statement recorded | `xc/x-shield-flexpruf.json` |
| Mapelastic AquaDefense | Ready-to-use flexible liquid membrane | 1 | 1 kg/m² for 2 coats | Must always be covered with ceramic, mosaic or stone. Tiling after 3-4 hours | `mapei/mapelastic-aquadefense.json` |
| YHCoat-2060 | One-component coating with a polymer emulsion as film-forming agent | 1 | About 2.0 kg/m², 12.5 m² per set at 1 mm dry film. 1.0 mm dry film by 2 coats | Density 1.5-1.7 kg/L. Solid content 78-81% by weight. 25 kg pail. For wet rooms | `oyh/yhcoat-2060.json` |
| YHColorWall-5300 | Cold-applied, one-component waterborne liquid membrane | 1 | Wall 2 kg/m². Roof 3 kg/m² | Density 1.35 kg/L. Solids 65% by weight, 60% by volume. Substrate moisture ≤ 4%. Ready for use 72 hours at +30°C. "UV resistant and UV stable" (`advantages`). 20 kg pail | `oyh/yhcolorwall-5300.json` |
| Mapefloor PU 410 | Two-component self-levelling polyurethane binder for elastic and waterproof parking deck systems | 2 (A:B = 16 : 3.9) | 1.0 kg/m² in approx. 1 mm, plus Quartz 0.25 at 0.3 kg/m² | Elongation to break 80%. EN 1062-7 static class A3, dynamic class B2. A floor system layer, not a roof or wet-room membrane | `mapei/mapefloor-pu-410.json` |

Gaps: no stocked polyurethane roof or wet-room membrane has a verified
file. Neither OYH one-component sheet uses the word "acrylic" in the
extract, so neither may be called acrylic. Retitle the post around "two
component cementitious or one component liquid" unless a PU membrane data
sheet arrives with the OYH stock list (Q10).

**Candidate 7 - how to mix Mapelastic**

| Product | Mixing as printed | File |
|---|---|---|
| Mapelastic Easy | A : B = 3 : 1 (one 18 kg bag with a 6 kg can). Do not add cement, aggregates, or water. At least two coats by brush, trowel or roller | `mapei/mapelastic-easy.json` |
| Mapelastic Foundation | A : B = 2.2 : 1 (one 22 kg bag with one 10 kg can). About 3 minutes of mixing, a 2 minute rest, then up to 2 more minutes (`notes`). Do not add cement, aggregates or water. Roller or trowel, or spray | `mapei/mapelastic-foundation.json` |
| Mapelastic Smart | Pour all component B (liquid) into a clean container, then slowly add component A powder while blending with an electric mixing paddle. Mix for approximately 2 minutes. Use within 60 minutes. Ratio 2:1 | [S2] |
| Mapelastic AquaDefense | Ready to use. No mixing | `mapei/mapelastic-aquadefense.json` |
| YHCoat-1000 | Slowly add powder (B) to liquid (A) in a clean container and mix. Part A : Part B = 3 : 10 by weight | `oyh/yhcoat-1000.json` |

**Candidate 8 - coverage chart.** Use `src/config/mapei-coverage.ts`
directly: 43 models, each with its rate, its stocked pack and the verbatim
sheet sentence in `source`. The `consumption` arrays in the extracts carry
the same figures with their basis. No new source is needed. Mapelastic
Smart's entry is the only one sourced from a document other than the
product's own data sheet (the file's `note` says so).

**Candidate 10 - is tile adhesive waterproof**

| Product | The word the sheet uses | File |
|---|---|---|
| Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1 | "adhesive". None of the four `description` fields uses "waterproof" | the four adhesive files |
| Keracolor FF | "water-repellent" cementitious grout | `mapei/keracolor-ff.json` |
| Mapelastic AquaDefense | "liquid membrane for waterproofing", used "before applying ceramic, stone, and mosaic coverings" | `mapei/mapelastic-aquadefense.json` |
| Primer G | "does not waterproof gypsum substrates even though it considerably reduces their porosity and absorption" | `mapei/primer-g.json` |
| Antipluviol | "water-repellent protective coating". Not for horizontal surfaces, not for structures subject to water under pressure, not for basins or reservoirs | `mapei/antipluviol.json` |
| UltraCare Stain Protector W Plus | Sealer with "oil, stain, water resistant properties" | `mapei/ultracare-stain-protector-w-plus.json` |

Caution: the extracts hold the description and capped lists, not every
sentence of each sheet. Before the post says "the sheet never claims
waterproofing", check the four adhesive PDFs in `public/tds/mapei/`.

**Candidate 11 - Primer G** (`mapei/primer-g.json` unless noted)

| Field | Value |
|---|---|
| Dilution, gypsum before tiles or levelling | Neat (`notes`) |
| Dilution, cementitious substrates before self-levelling compounds | 1:1 (`notes`) |
| Dilution, anchoring coat for gypsum plasters | 1:2 (`notes`) |
| Dilution, primer for wallpaper adhesives | 1:3 (`notes`) |
| Dilution named in the Ultraplan EC20 sheet | 1 part Primer G with 3 parts of water (`mapei/ultraplan-eco-20.json`, `notes`) |
| Dilution named in the Ultraplan Contract sheet | 1:1 with water (`mapei/ultraplan-contract.json`, `notes`) |
| Drying time | 30 min on concrete, 30-60 min on gypsum |
| Consumption | Between 0.08 and 0.15 kg/m² |
| Dry solids content | 18% |
| VOC | 0 g/l (2004/42/EC). EMICODE EC1 Plus |
| Application temperature | +5°C to +35°C |
| Packs | 25, 10 and 5 kg drums and 1 kg bottles |
| Limits | Not for external applications or where rising damp is present. Not on magnesium substrates. Do not apply so much that it forms a surface film |

The sheet does not say whether the ratios are by weight or volume, or
whether consumption is for neat or diluted product (`notes`).

**Candidate 12 - tank lining**

| Field | Planiseal 88 (`mapei/planiseal-88.json`) | Mapelastic Foundation (`mapei/mapelastic-foundation.json`) | Mapecoat DW 25 (`mapei/mapecoat-dw-25.json`) |
|---|---|---|---|
| What it is | Osmotic cementitious mortar suitable for contact with drinking water | Two-component flexible cementitious mortar for positive and negative water pressure | Two-component epoxy paint, suitable for contact with drinking water |
| Drinking water statement | Certified to AS/NZS 4020:2018 for use with potable water (Australian edition of the sheet) | None in the extract | Complies with EU 10/2011. Italian Ministerial Decree 174 of 06-04-2004 is cited |
| Flexible or rigid | Rigid only (`notes`) | Flexible. Crack-bridging class A4 (> 1,25 mm) | Not stated |
| Negative pressure | Up to 1 atmosphere (`whereToUse`) | No penetration at 1.5 bar | Not stated |
| Thickness | approximately 2-3 mm | Not less than 2 mm | approximately 300-450 µm in 2 coats |
| Consumption | approx. 1.5 kg/m² per mm | approx. 1.65 kg/m² per mm by roller | 400-600 g/m² in two coats |
| Into service | 7 days | Not in the extract | Final hardening 7 days |
| Pack | 20 kg bags | 32 kg kits | 15 kg and 5 kg units |

Whether Mapelastic Foundation may be used in contact with drinking water
is not in the local extract. Do not state it either way without the sheet.

**Candidate 13 - Mapegrout T60 or ME05**

| Field | Mapegrout T60 ME (`mapei/mapegrout-t60.json`) | Mapegrout ME05 (`mapei/mapegrout-me05.json`) |
|---|---|---|
| Edition | 4086-10-2015 (UAE) | 497-3-2023-I (UAE) |
| `description` | Thixotropic, sulphate and chloride resistant, fibre-reinforced structural repair mortar | High performance, shrinkage compensated, high-flow micro-concrete and thick section grout |
| Class | EN 1504-3 R4 | EN 1504-3 R4, CC |
| Consistency | Thixotropic | Fluid |
| Maximum aggregate | 2.5 mm | 4 mm |
| Application thickness | Not in the extract | 15 - 220 mm |
| Water per 25 kg bag | 3.75-4.25 litres by trowel, 4.00-4.50 by spray | 12.4-13.2 kg per 100 kg of powder (3.1-3.3 litres in the mixing sentence) |
| Yield | 12.6 litres / 25 kg | 12.7 liters per 25 kg |
| Density of mix | 2280 kg/m³ | 2200 kg/m³ |
| Compressive strength | > 20 MPa after 24 hours, > 50 after 7 days, > 60 after 28 days | > 25 MPa after 1 day, > 45 after 7 days, > 65 after 28 days |
| Flexural strength | > 5, > 6, > 8 MPa (24 hours, 7 days, 28 days) | 6, 9, 10 MPa (1, 7, 28 days) |
| Pot life | ca. 1 hour | approx. 1 hour (at +20°C) |
| Application temperature | +5°C to +50°C | +5°C to +40°C |
| What the sheet says to use instead (`notFor`) | Do not pour into forms: use Mapegrout ME 06 or ME 05 | Not on vertical surfaces without formwork: use Mapegrout T60 ME or T80 |
| Shared limit | Not for anchoring (Mapefill range) | Not for precision anchoring (Mapefill range) |

Mapefill, Mapegrout ME 06 and T80 are not in the catalogue. Name them
only as the sheet's own cross-reference.

**Candidate 14 - Mapei or Sika.** No table. No Sika figure is verified.
See the note under section 2.

---

## 5. FAQ questions per post

Answers must come from the tables above. Questions marked (gap) cannot be
answered from the verified files today.

**Post 1 - Mapelastic family**

1. What is the difference between Mapelastic Smart and Mapelastic
   Foundation?
2. Which Mapelastic can take water pressure from behind the wall?
3. Can Mapelastic AquaDefense be left uncovered?
4. How thick must Mapelastic be, and in how many coats?
5. How long after Mapelastic can I tile?
6. Is Mapelastic Smart resistant to sunlight? (answer from [S1] only)
7. Can Mapelastic Foundation be used in a drinking water tank? (gap)

**Post 2 - tile adhesives**

1. Which Mapei adhesive is for large porcelain tiles?
2. What does C2TES1 mean on a Keraflex Maxi S1 bag?
3. Can I use Mapeset for large format tiles?
4. How thick a bed can each adhesive take?
5. How long is the open time, and why does it matter in heat?
6. How many square metres does a 25 kg bag cover?
7. What is the difference between C1 and C2? (gap: needs the standard)

**Post 3 - grouts**

1. When do I need epoxy grout instead of cement grout?
2. What joint width does each grout suit?
3. Is Keracolor FF waterproof?
4. How much Kerapoxy do I need per square metre?
5. How long before a grouted pool can be filled?
6. Can Kerapoxy be used as a tile adhesive?
7. Why can I not grout a movement joint?

**Post 4 - Ultraplan**

1. What is the difference between Ultraplan Eco 20 and Ultraplan
   Contract?
2. How thick can I pour in one layer?
3. How soon can I tile over Ultraplan?
4. How many square metres does one bag cover at 3 mm?
5. Do I need a primer first, and how is it diluted?
6. Can Ultraplan be used outdoors?
7. Are Ultraplan Eco 20 and Ultraplan EC20 the same product? (gap)

**Post 5 - resin floors**

1. Epoxy or polyurethane cement: which for a food factory?
2. How thick is each system?
3. What temperature can each floor take in service?
4. How dry must the slab be before coating?
5. How long before forklifts can use the floor? (FC 200 ME: vehicles 48
   h; the others give foot traffic and full hardening only)
6. How much material per square metre?
7. Which primer goes under each floor?

**Post 6 - drying times**

1. How long before I can tile over Mapelastic?
2. How long before grouting floor tiles?
3. How soon can I walk on a self-levelling compound?
4. How long does epoxy flooring take to cure fully?
5. Do drying times change in hot, humid weather? (answer: the sheets
   state laboratory conditions; give only the +30°C figures that are
   printed)
6. How long before a waterproofed tank can be filled?
7. How long does Primer G take to dry?

**Candidates 6 to 13, three each**

- 6: Is cementitious waterproofing flexible? / Which membrane can stay
  exposed to the sun? / Which membranes must be tiled over?
- 7: What is the mixing ratio of Mapelastic? / Can I add water to
  Mapelastic? / How long do I have after mixing?
- 8: How much does one kit of Mapelastic cover? / How many bags of tile
  adhesive for 20 m²? / How is grout quantity worked out?
- 10: Is tile adhesive waterproof? / Is grout waterproof? / What goes
  under tiles in a shower?
- 11: Do I dilute Primer G? / How long does Primer G take to dry? / Can
  Primer G be used outside?
- 12: Which Mapei product is suitable for drinking water? / Rigid or
  flexible lining for a tank? / How long before a tank can be filled?
- 13: Which Mapegrout for a vertical repair? / Which for pouring into
  formwork? / How much water per bag?
- 14: none until the wording is cleared.

---

## 6. Could not verify

1. **Mapelastic Smart.** No current data sheet on file. Figures come from
   a 2014 brochure [S1] and a 2024 UK outline specification [S2]. The two
   disagree on crack-bridging wording ("> 2 mm" and class A5 "> 2.5 mm" in
   [S1]; "up to 2mm" in [S2]). A search summary suggested a US sheet with
   a 1:1 mix ratio; not checked. Post 1 and candidate 7 are blocked on the
   UAE sheet.
2. **Ultraplan Eco 20 against Ultraplan EC20.** The sheet on file is
   titled EC20. Whether it is the product on the price list is an existing
   note in the extract and was not resolved here.
3. **Search demand.** No volumes, US-located results, one results page
   per topic.
4. **Local results.** Search 14 returned nothing from Tanzania, Kenya or
   Uganda. One Jiji Kenya listing appeared in search 9. This is thin
   evidence in both directions.
5. **Polyurethane and acrylic membranes.** No verified file describes a
   stocked polyurethane waterproofing membrane, and no OYH extract uses
   the word acrylic.
6. **C1 against C2, and the meaning of grout class letters.** Not in the
   extracts. Needs the standard or a Mapei page.
7. **Company facts for Oriental Yuhong and X-Calibur.** Nothing verified.
8. **Any Sika figure.** None verified.
9. **Mapelastic Foundation and drinking water.** Not in the extract.
10. **Coastal humidity of 75-84%.** Quoted from `SEO-STRATEGY.md` section
    3, not re-verified.
11. **Accessory products named by the sheets but not in the catalogue**
    (Isolastic, Mapesil, Mapefloor CPU+/Primer, Mapefill, Mapegrout ME 06
    and T80, Mapetex SEL N, Mapeband Flex Roll). Stock not checked.

---

## 7. Sources

**Fetched manufacturer documents (figures used)**

- [S1] Mapei S.p.A., brochure "Mapelastic Smart - product for
  waterproofing", C.P. MK993430 (GB) 05/2014.
  https://cdnmedia.mapei.com/docs/librariesprovider55/waterproofing---brochures/mapelastic-smart.pdf?sfvrsn=63af3e85_3
- [S2] Mapei UK Ltd, "Outline Specification", Mapelastic Smart, Ref:
  IW/OS0032/2024.
  https://cdnmedia.mapei.com/docs/librariesprovider12/default-document-library/mapelastic-smart---outline-specification.pdf?sfvrsn=ce75ff88_3

**Fetch attempts that failed (HTTP 403, nothing used)**

- https://www.mapei.com/ae/en/products-and-solutions/products/detail/mapelastic-smart
- https://mapei.com/za/en/products-and-solutions/products/detail/mapelastic-smart
- https://mapei.com/ca/en-ca/faq/faq-detail/what-is-the-difference-between-mapelastic-hpg-and-mapelastic-aquadefense

**Local verified files**

- `src/content/mapei/*.json` (44), `src/content/oriental-yuhong/*.json`
  (5), `src/content/x-calibur/*.json` (5)
- `src/config/mapei-coverage.ts`, `src/config/catalogue.ts`
- `SEO-STRATEGY.md` sections 3 to 5, `GOVERNANCE.md`,
  `docs/OPEN-QUESTIONS.md` (Q9, Q10),
  `docs/research/12-mapei-catalogue-b.md` (section 41)

**The 15 searches (US-located, 2026-11-06) and the result pages noted.**
Used only to see what ranks. No figure in this file comes from them.

1. "Mapelastic Smart vs Mapelastic Foundation difference"
   - https://www.mapei.com/ca/fr-ca/produits-et-solutions/produits/detail/mapelastic-foundation--na-
   - https://rawlinspaints.com/products/9901-mapei-mapelastic-smart.html
   - https://www.promain.co.uk/mapei-mapelastic-smart.html
   - https://www.rtvslo.si/oglasna-sporocila/mapelastic-da-ampak-kateri/696537
2. "Mapelastic AquaDefense vs Mapelastic which to use shower"
   - https://mapei.com/ca/en-ca/faq/faq-detail/what-is-the-difference-between-mapelastic-hpg-and-mapelastic-aquadefense
   - https://www.mapei.com/ca/en-ca/products-and-solutions/products/detail/mapelastic-aquadefense
   - https://repaintnow.com/?p=8727
3. "Keraflex Maxi S1 vs Adesilex P7 vs Kerabond T which Mapei tile
   adhesive"
   - https://pdf.archiexpo.com/pdf/mapei/keraflex-maxi-s1/3921-405745.html
   - https://www.tilemountain.co.uk/keraflex-maxi-s1-grey-slow-setting-adhesive-20kg
   - https://direct.source.thenbs.com/product/keraflex-maxi-s1/ruaJa4GyNUhCsrx2SBd9bB/pJYHVcaUVri9SsGEd8RGRS
4. "Kerapoxy vs Keracolor FF epoxy grout or cement grout Mapei"
   - https://www.mapei.com/it/en/tools-and-downloads/miscellaneous/coloured-grouts-and-sealants
   - https://www.mapei.com/sg/en/blog/detail/tech-talk/2019/05/28/types-of-grouts-for-tile-stone-works
   - https://pdf.archiexpo.com/pdf/mapei/keracolorff/3921-405786.html
5. "Ultraplan Eco 20 vs Ultraplan Contract self levelling difference"
   - https://mapei.com/za/en/products-and-solutions/products/detail/ultraplan-eco-20
   - https://www.mapei.com/za/en/products-and-solutions/products/detail/ultraplan-ec20
   - https://www.mapei.com/ae/en/products-and-solutions/products/detail/ultraplan-contract
   - https://www.kznindustrialnews.co.za/2020/04/01/new-greener-self-levelling-compound-launched/
6. "polyurethane cement flooring vs epoxy self levelling food factory
   Mapefloor CPU vs Mapefloor I 300 SL"
   - https://mapei.com/ae/en/news-and-articles/event-detail/2025/04/24/mapei-highlights-advanced-industrial-flooring-at-saudi-food-manufacturing-2025
   - https://www.mapei.com/sg/en/projects/detail/new-zealand-food-processing-company
   - https://www.mapei.com/za/en/projects/detail/fresher-foods-food-processing-factory-6585
   - https://www.mapei.com/it/en/products-and-solutions/products/detail/mapefloor-i-300-sl
7. "cementitious vs acrylic vs polyurethane waterproofing membrane which
   is better"
   - https://www.in.weber/blog/types-waterproofing/compare-3-types-waterproofing-types-liquid-waterproofing
   - https://sunandaglobal.com/types-of-waterproofing-liquid-applied-membranes
   - https://www.designingbuildings.co.uk/wiki/How_to_Choose_the_Right_Waterproofing_System
   - https://thisvsthat.io/cementitious-waterproofing-vs-polyurethane-waterproofing
   - https://polyguard.com/blog/cementitious-waterproofing
8. "Mapei vs Sika tile adhesive waterproofing which is better"
   - https://www.cbinsights.com/compare/mapei-vs-sika
   - https://waterproofing-my.vercel.app/blog/sika-vs-mapei-vs-fosroc
   - https://www.tilersforums.com/goto/post?id=932065
   - https://nga.sika.com/en/construction/building-finishing.html
9. "how to mix Mapelastic Smart ratio coverage per m2 how many coats"
   - https://mapei.com/nz/en/products-and-solutions/products/detail/mapelastic-smart
   - https://mapei.com/za/en/products-and-solutions/products/detail/mapelastic-smart
   - https://www.buildsite.com/pdf/mapei/Mapelastic-Smart-Product-Data-850069.pdf
   - https://jiji.co.ke/sw/nairobi-central/building-materials/mapei-mapelastic-smart-10kg-liquid-20kg-powder-wateproof-zIwPeCMesemVFBm8B04Qvxc9.html
10. "Oriental Yuhong waterproofing brand review quality who is Oriental
    Yuhong"
    - https://www.wikipedia.org/wiki/Oriental_Yuhong
    - https://dongfangyuhong.m.en.alibaba.com/company_profile.html
    - https://prnewswire.com/news-releases/oriental-yuhongs-biannual-report-for-2020-net-profit-grew-by-50-63-year-on-year-301121432.html
11. "X-Calibur Construction Chemistry who are they X-Shield FlexPruf
    elasto-cement waterproofing"
    - https://www.x-calibur.us/faq
    - https://www.x-calibur.us/about_us
    - https://www.x-calibur.us/products/coating-systems/general-purpose-waterproof-coatings
12. "Mapei Primer G dilution ratio how to use before self levelling
    compound"
    - https://tilersforums.com/threads/mapei-primer-g-dilution-self-levelling.74088
    - https://www.sealantsupplies.co.uk/products/mapei-primer-g/?s=mapei
    - https://www.promain.co.uk/mapei-primer-g.html
    - https://mapei.com/za/en/products-and-solutions/products/detail/primer-g
13. "Planiseal 88 vs Mapelastic Foundation water tank drinking water
    waterproofing"
    - https://mapei.com/au/en/products-and-solutions/products/detail/planiseal-88--former-idrosilex-pronto-
    - https://www.specifiedby.com/mapei/planiseal-88-osmotic-cementitious-mortar-suitable-for-contact-with-drinking-water-for-waterproofing-masonry-and-concrete-structures
    - https://www.mapei.com/sg/en/projects/detail/water-tank-chachalnia
    - https://multifors.com.au/wp-content/uploads/2025/07/solutions-for-potable-watere36f258679c562e49128ff01007028e9.pdf
14. "Mapelastic Smart Tanzania OR Kenya OR Uganda how to use Mapei
    waterproofing"
    - https://mapei.com/za/en/products-and-solutions/products/detail/mapelastic-smart
    - https://www.mapei.com/in/en/tech-talk/detail/blog/2019/03/11/mepelastic-smart
    - https://www.eboss.co.nz/library/mapei-products-nz/mapelastic-smart
15. "is Mapei tile adhesive waterproof Keraflex Adesilex"
    - https://www.mapei.com/it/en/products-and-solutions/products/detail/keraflex
    - https://www.travisperkins.co.uk/tile-adhesives-and-grouts/mapei-keraflex-non-rapid-white-adhesive-20kg/p/212814
    - https://mapei.com/us/es-us/gamma-keraflex/system-for-waterproofing-and-overlaying-old-flooring-with-ceramic-tiles-in-shower-cubicles-bathrooms-and-changing-rooms
