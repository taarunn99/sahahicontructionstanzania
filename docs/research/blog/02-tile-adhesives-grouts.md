# Blog research 02 - Tile adhesives and grouts

Date: 2026-11-06
Scope: topic and keyword research for the Journal (`/blog`), cluster "tile adhesives and grouts". Sahihi Construction Chemicals Limited, Dar es Salaam. Products in scope are the nine Mapei ceramic-line items in `src/config/catalogue.ts` plus the primers, levellers and waterproofers that sit under a tiled finish.
Status: usable for planning. Read section 1 before quoting any grade or figure.

---

## 1. Method and limits

**What was done**

- Read `SEO-STRATEGY.md` sections 3 to 5, `docs/research/README.md` and `docs/research/08-kw-tile-adhesive-grout.md` so the topics fit the query registry.
- Ran 18 live web searches (the cap for this report). Each query, and what it returned, is in section 2.2.
- Fetched 14 pages directly to audit ranking content or to confirm a figure. Ten more fetches failed (listed below).
- Took every Mapei figure from the data sheet text already in the repo (`assets/source/tds-text/*.txt`, extracted from the PDFs in `public/tds/mapei/`, which `scripts/fetch-mapei-tds.py` downloaded on 2026-11-05). The source URL quoted for each sheet is the one recorded in `src/config/mapei-tds.json`. I read the extracted text, not mapei.com.
- Opened the Kenya Bureau of Standards draft FDKS 2129-1:2023 as a PDF and read the class tables with `pdftotext`.

**Limits that affect decisions**

1. **No search volumes.** The search tool gives none and Ahrefs is not connected. Nothing in this file is a volume, a difficulty score or a traffic estimate. "Grade" means only: who was on the results page.
2. **The search tool is US-located.** Results approximate, and are not, google.co.tz or google.co.ke. No local pack, no ads, no Tanzanian ordering was visible.
3. **No People Also Ask.** The tool returns links, not PAA boxes. Section 2.3 lists questions that appear verbatim as titles or FAQ entries on ranking pages, with URLs. They are a substitute for PAA, not PAA.
4. **Pages that could not be read** (status in brackets): monitor.co.ug tile adhesive feature (403), idealceramics.com adhesives (403), ctm.co.ke product page (403), in.weber blog (403), uk.weber tiling over tiles (403), middleeast.weber pool PDF (403), iso.org ISO 13007-1 page (403), wacker.com standards insight (404), tcnatile.com FAQ (404), shabbirihardware.com blog post (404). mapei.com redirected and was not followed; report 08 records it as blocked. For these, only the search-result title or summary was seen, flagged "snippet only".
5. **Inferred items are marked "inferred" or "our arithmetic".** Bag counts and unit conversions are arithmetic on a sourced figure, and say so.
6. **US sources for joints.** Movement-joint spacing and grout-joint minimums come from US trade sources (CTaSC, the NTCA magazine) quoting ANSI and TCNA documents that were not read directly. No British, ISO or East African installation standard was fetched. Treat those numbers as context to check with Mapei technical support, not as a local rule.

**Rule check against CLAUDE.md:** posts 1 to 5 in section 2.1 already have a row in `SEO-STRATEGY.md` section 5.4. Posts 6 to 13 do not. They need a row there before anyone builds them.

---

## 2. Findings and candidate posts

### 2.1 Headline findings

1. **East African editorial content appeared for one of the 16 English queries.** Everywhere else, even with "Kenya", "Tanzania" or "Uganda" in the query, the results were Indian manufacturer blogs, UK trade forums, US consultants, and Kenyan and Tanzanian marketplace listings or retailer category pages. The one exception was "best tile adhesive for porcelain tiles Kenya Uganda Tanzania guide": a Ugandan newspaper feature (403, not read), a Kenyan newsletter article (about 650 to 700 words, one brand, no table), two posts on a Kenyan hardware retailer's blog (the one tried returned 404) and a Ugandan site that was not opened (realmuloodi.co.ug).
2. **The ranking content is thin on numbers.** The page ranking for "tile popping" from a cement maker has about 1,000 words and no figure at all. A September 2026 "tile adhesive vs cement" article prints bond-strength figures with no source and a cost table whose rows do not add up. A UK Q and A page for "how much tile adhesive per square metre" has ten tradespeople giving answers from 3 to 10 kg/m2.
3. **Sahihi already holds what those pages lack:** per-trowel and per-millimetre consumption, open times, grouting and service times, class certificates and full grout consumption tables for six products, extracted verbatim and tested by `npm test`, plus a working calculator on every product page.
4. **Two findings that change copy.** (a) Kerapoxy's data sheet gives an application range of +12 C to +30 C, and Dar es Salaam's mean daily maximum is 31.2 C across the year. An epoxy grout post has to say so. (b) Mapei's sheets state that open time can fall "to just a few minutes" in strong sun, drying wind and high temperature, and that a skinned adhesive must not be wetted. That is the local angle for three posts.
5. **Report 08's open item on "cement residue remover" is answered by the Keracolor FF sheet:** Mapei names an acid cleaner (UltraCare Keranet) for cured cementitious residue. UltraCare HD Cleaner is alkaline and is positioned for organic dirt, grease and tile-on-tile preparation. Keranet is not in `catalogue.ts`, so that query should not be given to HD Cleaner.
6. **Report 08's "confirm in TDS" note on tile-over-tile is answered:** Adesilex P7 lists "Tile on tile of existing flooring with tiles up to 900 cm2"; Keraflex Maxi S1 lists "Overlaying ceramic and stone on existing floors"; UltraCare HD Cleaner is described as "ideal for the preparation of existing ceramic and stone material before installing tile-on-tile".
7. **Swahili:** two Swahili-interface calculator pages surfaced (afrotools.com, primecalcpro.com). The first uses "vigae", "sakafu", "kuta", "upotevu" and leaves "grout" in English; the second leaves "Tile" in English and its body is English. No Swahili how-to on adhesive, grout or lifting tiles appeared for either Swahili query. Supply is empty; demand is still unproven.

### 2.2 Candidate posts (13)

Grade: E = no on-topic East African page seen; M = some regional content or strong global manufacturers; H = entrenched tools or standards bodies. All grades are from a US-located tool.

| # | Working title (chars) | Primary query | Secondary queries and questions | Intent | Who ranks now, and the weakness | Why Sahihi can win | Registry |
|---|---|---|---|---|---|---|---|
| 1 | Tile Adhesive vs Sand and Cement: Which to Use (46) | tile adhesive vs cement | tile adhesive vs sand and cement; can I use cement to fix tiles; cement vs tile adhesive for porcelain; is tile adhesive stronger than cement; gundi ya tiles au saruji na mchanga (unverified) | Informational, converts traditional-method buyers | globallinker.com forum article (three subdomains), dailyexcelsior.com (25 Sep 2026, about 800 words, unsourced strength figures, cost table in rupees that does not add up), infra.market, in.weber, jkcement.com, mapei.com/in, roff.in, asianpaints.com, drychem.com, birlanu.com. All India. No East African page. Report 08 saw a Kenyan newspaper feature on the same question. Grade M | Every ranking page is written for Indian vitrified tile and rupee costs. A page with data sheet figures, the thin-bed limits Mapei prints, and a Tanzanian frame (heat, porcelain, fundi practice) has no regional rival | 5.4 row 4 |
| 2 | C1, C2, C2TE S1: Tile Adhesive Classes Explained (48) | C1 vs C2 tile adhesive | what does C2TE S1 mean; what is S1 tile adhesive; EN 12004 classes; ISO 13007 tile adhesive; which class for porcelain; what does T and E mean on a bag | Informational, specifier and contractor | mys.sika.com selection page (definitions plus a product grid; numbers for only four codes), laticrete PDF, grupopuma.com, wacker.com PDF, ardex.co.nz poster PDF. Regional: the254report.co.ke (26 Mar 2025, about 650 to 700 words, three codes, one brand, no table, no FAQ) and the KEBS draft PDF itself. Grade M | KEBS and TBS use the same code system, so the page can cite the regulators and then show four stocked products that each carry a different code. Nobody on the results page does both | 5.4 row 2 |
| 3 | How Much Tile Adhesive per Square Metre? (40) | how much tile adhesive per square metre | tile adhesive coverage per 25 kg bag; how many bags of tile adhesive do I need; tile adhesive calculator; how many m2 does one bag cover; adhesive for 60x60 tiles per m2 | Informational with purchase intent next to it | myjobquote.co.uk (Q and A, ten answers Feb to Jul 2026, 3 to 10 kg/m2, no tool), ctm.co.ke and idealceramics.com category pages (snippet only: divide the area by 2.4), protilertools.co.uk product pages, calculate.co.nz, bergerpaints.com tool, tileafrica.co.za grout calculator. Grade M | The answers that rank disagree with each other by a factor of three. Sahihi can print Mapei's rate per trowel and per millimetre, show the bag arithmetic, and hand off to calculators that already exist on the product pages | 5.4 row 5 |
| 4 | Why Floor Tiles Pop Up, Lift or Sound Hollow (44) | why tiles pop up | tiles lifting from floor; hollow sounding tiles; tiles popping in heat; tile tenting; how to fix loose floor tiles; are hollow tiles a problem | Informational, problem-led; homeowner and contractor | flooringclarity.com, 4x4community.co.za forum thread, bricknbolt.com (India), ctasc.com expert answers (US, text only, imperial units), jkcement.com (1 Oct 2024, about 1,000 words, no figures, no diagram), bria.com.ph, aedoconstruction.com (Philippines), mybuilder.com, diynot.com. No East African page. Grade M | A cross-section diagram of each failure, with the numbers Mapei prints (back coverage, open time, cure times), in metric, for a hot coastal city. Report 08 has a Kenyan cement maker on record naming "popping out, cracking and falling of tiles" as the regional problem | 5.4 row 9 |
| 5 | Epoxy Grout vs Cement Grout: Which Goes Where (45) | epoxy grout vs cement grout | is epoxy grout waterproof; is epoxy grout worth it; epoxy grout for bathroom; epoxy grout for kitchen; epoxy grout Tanzania; which grout does not go black | Informational, then commercial | angi.com, astraladhesives.com (India), materialdepot.in, superiorrenovations.co.nz, rubi.com, houzz, laticrete.com (27 Jun 2025, about 1,400 words, no table, five FAQ, North American). "epoxy grout Tanzania Dar es Salaam" returned Jiji categories and overseas sellers, no guide. Grade M generic, E with Tanzania | Two data sheets side by side: class, joint width, pot life, service times, temperature window, consumption tables. Plus the honest note on the +30 C application limit, which no ranking page has reason to raise | 5.4 row 6 |
| 6 | Swimming Pool Tiling: Adhesive, Grout, Fill Times (49) | swimming pool tile adhesive | pool tile grout; epoxy grout for swimming pool; how long before filling a tiled pool; mosaic pool tile adhesive; pool tiles falling off | Informational and commercial; contractors, hotels | jiji.co.tz and jiji.co.ke listings, ctm.co.ke grout product page, egy.sika.com PDF, a tbs.go.tz draft standard PDF, middleeast.weber PDF and search pages, bostik.com category page. No East African guide. Grade E | Mapei prints the three numbers pool builders ask for (fill after 21 days for the adhesive, 7 days for cement grout, 10 days for epoxy grout) and the back-buttering rule. Zanzibar and coast hotel work gives the post a lead value the others lack | none yet |
| 7 | How to Lay Large Format Porcelain Tiles (39) | how to lay large format tiles | 60x120 tile adhesive; 80x80 tiles which adhesive; back buttering large tiles; lippage; adhesive for 120x120 tiles | Informational, contractor | issuu.com (a tile maker's guide), uk.weber, schomburg.com, tileandstonejournal.com, five mapei.com country blogs, lowes.com, florim.com, daltile.com, wacker.com. No Kenyan or Tanzanian page despite the geo terms in the query. Grade M to H | Strong global makers rank, so win on geo and on linking: the Keraflex Maxi S1 page keeps "large format tile adhesive" (report 08 section 9.7) and this post takes the how-to. Mapei's own country blogs are the hardest rivals | none yet |
| 8 | Can You Tile Over Old Tiles? What to Check First (48) | can you tile over existing tiles | tile on tile adhesive; tiling over old floor tiles; how to prepare old tiles for new tiles; tile over tile in bathroom | Informational, homeowner and renovator | thumbtack.com, bobvila.com, uk.weber, news24.com (2017, South Africa), wallsandfloors.co.uk, flooringclarity.com (six pages), angi.com, homesandgardens.com, tilersforums.com. Grade M | Three stocked products state tile-on-tile in their own sheets, with a size limit on one of them. The ranking pages give general advice and no limits | none yet |
| 9 | Trowel Notch Size: Which Trowel for Which Tile? (47) | what size trowel for 60x60 tiles | trowel notch size for floor tiles; 10 mm or 12 mm trowel; trowel No. 5 meaning; do I need to back butter tiles | Informational, fundi and contractor | myjobquote.co.uk Q and A, a dozen tilersforums.com threads, workshop.bunnings.com.au, squote.app. Forum anecdote that disagrees with itself. Grade E to M | Mapei's sheets tie trowel No. 4, 5 and 6 to tile type and to kg/m2. A page that draws the notch, the ridge and the collapsed bed is more useful than a forum thread. BIHUI tiling tools are the natural link, but BIHUI is not catalogued yet | none yet |
| 10 | Grout Joint Width: How Wide Should Tile Joints Be? (50) | grout joint width for porcelain tiles | minimum grout joint; 2 mm or 3 mm joint; rectified tile joint width; tile spacer size; joint width for outdoor tiles | Informational | tileletter.com (US trade magazine, Nov 2019), flooringclarity.com (eight pages), floortrendsmag.com, a US distributor PDF, ctasc.com, tilesamples.eu. US inches throughout. Grade M | A metric page tied to what each grout allows (Keracolor FF up to 6 mm, Kerapoxy from 1 mm) with consumption changing live as the joint widens | none yet |
| 11 | Outdoor Tiling in Heat: Open Time and Movement Joints (53) | outdoor tile adhesive | tiles tenting in heat; movement joints in tiling; expansion joints for floor tiles; balcony tile adhesive; tiling in hot weather | Informational, contractor and homeowner | ctasc.com (four pages), tileletter.com sponsored piece, thequoteyard.com.au, studiomatrx.org (India), stoneworld.com, alshabibtrading.com, mapei.com/us article, palacechemicals.co.uk. Grade M | The only version written for a city with a 31.2 C mean daily maximum. Mapei's own sentences on sun, wind and skinning carry it | none yet |
| 12 | How to Clean New Tiles and Keep Grout Clean (43) | how to clean grout | grout haze on new tiles; grout turning black; how to seal grout; do porcelain tiles need sealing; cement stains on new tiles | Informational, homeowner and facility manager | simplymaid.com.au, universealsealants.co.uk, kitchencabinetkings.com, mumsnet.com threads, homebuilding.co.uk, bunnings workshop. Household-cleaning sites; none explains alkaline, neutral and acid cleaners. Grade M | Three UltraCare sheets give dilution and coverage. The post must be honest that cured cement residue needs an acid cleaner Sahihi does not list | none yet |
| 13 | Adhesive for Marble and Granite: What to Check (46) | adhesive for marble and granite tiles | white tile adhesive for marble; marble staining from adhesive; gundi za marble (seen in report 08); natural stone adhesive | Commercial and informational | tacc.co.ke product page, seven jiji.co.ke listings, the KEBS draft PDF, andreoy.gr, jkcement.com "when to choose white tile adhesive". Kenyan results are listings. Grade E | Weakest fit of the thirteen: the stone-capable adhesive stocked (Keraflex Maxi S1) is listed in grey only, and its sheet excludes stone "subject to efflorescence or staining". Build only if the owner confirms a white, stone-rated line | none yet |

Notes on overlap with planned pages

- Post 3 and the item-page calculators: report 08 proposed a separate calculator page for "how much tile adhesive per sqm". `SEO-STRATEGY.md` 5.4 gives the query to the Journal, and the calculators now live on the item pages. Follow the strategy file: the post owns the question, embeds or links the existing calculators, and no separate tool page is built.
- Post 6 and `/solutions/waterproofing/swimming-pool` (planned, "swimming pool waterproofing Tanzania"): the solution page owns waterproofing; this post owns adhesive and grout and links across.
- Post 7 and the Keraflex Maxi S1 item page: the item page keeps "large format tile adhesive"; the post takes "how to lay".
- Post 12 and the tile-care part of `/solutions/tile-installation`: the pillar owns "tile cleaner Tanzania"; the post owns the how-to questions.
- Posts 4 and 11 share movement joints. Post 4 is diagnosis indoors; post 11 is prevention outdoors. Link them, do not repeat the table.
- A Mapei-versus-another-brand post is deliberately absent: `SEO-STRATEGY.md` 5.4 says to clear that wording with Mapei first.

### 2.3 Questions seen verbatim on ranking pages (not PAA)

| Question or title as printed | Where | URL |
|---|---|---|
| "How much tile adhesive do I need per square metre?" | Q and A page title | https://www.myjobquote.co.uk/questions/how-much-tile-adhesive-do-i-need-per-square-metre |
| "How do I stop my tiles from popping up?" | FAQ entry | https://www.jkcement.com/blog/construction-planning/tile-popping-reasons-and-preventions/ |
| "Why do my tiles make a popping sound?" | FAQ entry | same |
| "How do you prevent tile from cracking?" | FAQ entry | same |
| "What causes tiles to warp?" | FAQ entry | same |
| "What has caused some tiles in my Ceramic Tile Floor to become Hollow Sounding and the Grout To Crack?" | Expert-answer title | https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/ |
| "What is causing my Ceramic Tile to Buckle / Tent up?" | Expert-answer title | https://ctasc.com/expert-answers/what-is-causing-my-ceramic-tile-to-buckle-tent-up/ |
| "Are Tiles That Sound Hollow a Problem?" | Result title (snippet only) | https://ctasc.com/?p=10440 |
| "Is epoxy grout waterproof?" | FAQ entry | https://laticrete.com/blog/2025/june/everything-you-need-to-know-about-epoxy-grout |
| "Is epoxy grout resistant to mold and mildew?" | FAQ entry | same |
| "Does epoxy grout change color over time?" | FAQ entry | same |
| "Does epoxy grout last longer than cement grout?" | FAQ entry | same |
| "Can you tile over tile floors?" | Result title (snippet only) | https://www.thumbtack.com/question/can-you-tile-over-tile-floors-395689498287153153 |
| "Do I need to back-butter my tiles?" | Forum thread title (snippet only) | https://tilersforums.com/threads/do-i-need-to-back-butter-my-tiles.24340 |
| "trowel size for 600x600 floor tiles" | Forum thread title (snippet only) | https://tilersforums.com/threads/trowel-size-for-600x600-floor-tiles.99455 |
| "Sand And Cement As Adhesive?" | Forum thread title (snippet only) | https://www.tilersforums.com/threads/sand-and-cement-as-adhesive.78989 |
| "Choosing the right adhesive for your tiles" | Ugandan newspaper feature (403, not read) | https://www.monitor.co.ug/uganda/magazines/homes-and-property/choosing-the-right-adhesive-for-your-tiles-1623358 |
| "We want the smallest grout joint possible!" | Trade magazine title (snippet only) | https://www.tileletter.com/?p=33445 |

### 2.4 Swahili terms: what the evidence supports

| Term | Evidence in this session | Reliability |
|---|---|---|
| vigae (tiles), sakafu (floor), kuta (walls), upotevu (waste), kikokotoo (calculator) | Swahili calculator page: "Kokotoa eneo la sakafu au ukuta, idadi ya vigae, grout, upotevu, boksi na gharama." https://afrotools.com/sw/zana/kikokotoo-vigae-na-sakafu/ | A real Swahili page, but a tool, not a how-to. "grout" is left in English |
| "Tile" left untranslated inside Swahili headings ("Jinsi ya kukokotoa Tile") | https://www.primecalcpro.com/sw/learn/tile | Template page, body in English. Shows only that the English noun is kept |
| "Grout" inside a Swahili-interface category title ("Tafuta ndani Grout Vifaa vya ujenzi na Vifaa katika Dar es Salaam") | https://jiji.co.tz/sw/dar-es-salaam/building-materials/grout | Platform translation (snippet only) |
| kuweka vigae (to lay tiles), fundi | Example sentence reported in a search summary: "Fundi anasawazisha sakafu kabla ya kuweka vigae." https://elon.io/learn-hardcore-swahili/lexicon/380764/sakafu | Language-learning site, snippet only |
| gundi ya tiles, saruji na mchanga, kupiga tiles, tiles kubanduka, vigae kuinuka | These were MY query words. Neither query returned a Swahili page on the topic | Not evidence of what people type. Unverified |

Reading: the pattern from report 08 holds. English product nouns ("tiles", "grout") sit inside Swahili sentences. That matches `SEO-STRATEGY.md` section 3 point 7: launch in English and add a short Swahili question-and-answer block to posts 1, 3 and 4, written by a native speaker after the counter-staff word check that report 08 section 7 recommends. No Swahili post is proposed here.

---

## 3. Outlines for the best six

Source keys used below (full URLs in section 5):
KMS1 = Keraflex Maxi S1 sheet; P7 = Adesilex P7 sheet; KBT = Kerabond T sheet; MSET = Mapeset sheet; KFF = Keracolor FF sheet; KPX = Kerapoxy sheet; HD, MULTI, SPW = the three UltraCare sheets; PG = Primer G sheet; MEASY = Mapelastic Easy sheet; KEBS = FDKS 2129-1:2023 draft; TBS = TZS 1434-1 record; DAR = Dar es Salaam climate table; CTASC-T and CTASC-H = the two CTaSC expert answers; NTCA = the tileletter.com article.

Product links use the names in `catalogue.ts`. Item routes are `/mapei/tile-adhesives-grouts/<slug>`, `/mapei/primers-levelling/<slug>` and `/mapei/waterproofing/<slug>`.

A note on "3D": CLAUDE.md says to flag heavy things before building them, Three.js above all. Every 3D idea below is specified as inline SVG or CSS 3D transforms first. Where a real model would add something, it is flagged as a heavier option for the owner to approve.

### 3.1 Post 3 - How Much Tile Adhesive per Square Metre?

**Outline**

- H1: How much tile adhesive per square metre?
- H2: The short answer, by product (table A, above the fold, static)
- H2: Why the number changes
  - H3: Trowel notch and bed thickness
  - H3: Tile size, and the back of the tile
  - H3: How flat the floor is
  - H3: Back-buttering
- H2: Bags for a real room (worked example, then the calculator)
- H2: How much grout for the same floor
- H2: What to add for wastage (the visitor's choice; no baked-in percentage)
- H2: When a thicker bed is the wrong fix (link to levelling)
- H2: Questions (FAQ block)

**Facts and figures the post needs**

| Fact | Value as printed | Source |
|---|---|---|
| Mapeset, small tiles, trowel No. 4 (4x4 mm) | approx. 2 kg/m2 | MSET |
| Mapeset, normal tiles, trowel No. 5 (5x5 mm) | 2.5-3 kg/m2 | MSET |
| Mapeset, external floors and walls, trowel No. 6 (6x6 mm) | approx. 5 kg/m2 | MSET |
| Adesilex P7, mosaics and small sizes, trowel n. 4 | 2 kg/m2 | P7 |
| Adesilex P7, normal sizes, trowel n. 5 | 2.5-3 kg/m2 | P7 |
| Adesilex P7, large sizes and exterior floors, trowel n. 6 | 4 kg/m2 | P7 |
| Kerabond T | 2-5 kg/m2 (one range, no trowel stated) | KBT |
| Keraflex Maxi S1 | 1.2 kg/m2 per mm of thickness; up to 15 mm | KMS1 |
| Kerabond T bed limit | not for tiles needing more than 5 mm of adhesive | KBT |
| Back coverage target | 65-70% for internal walls and light traffic; 100% for heavy traffic and all external works | MSET, P7 |
| When back-buttering is required | side over 30 cm outdoors; side over 60 cm; underfloor heating; heavy loads; pools and tanks | KBT |
| Same rule in the S1 sheet | exterior, large format, heated floors, heavy loads, tanks and pools; thin porcelain on floors | KMS1 |
| Mixing water per 25 kg bag | Mapeset grey 6.0-6.5 L; Kerabond T approx. 6.3-6.8 L; Adesilex P7 6.5-7.0 L; Keraflex Maxi S1 approx. 7-7.5 L | MSET, KBT, P7, KMS1 |
| Keracolor FF consumption, 600x600x10 tile, 5 mm joint | 0.3 kg/m2 | KFF table |
| Keracolor FF, 300x300x10 tile | 0.3 kg/m2 at 3 mm; 0.5 kg/m2 at 5 mm | KFF table |
| Kerapoxy, 600x600x10 tile | 0.2 / 0.3 / 0.4 / 0.5 kg/m2 at 3 / 5 / 8 / 10 mm joints | KPX table |
| Grout formula in the repo | (A + B) / (A x B) x C x D x 1.5 for Keracolor FF, x 1.6 for Kerapoxy (mm; kg/m2) | `src/config/mapei-coverage.ts`, tested against the printed tables. The formula is printed as an image in the PDFs; read it off the PDF once before quoting it in copy |
| Spread of answers on the ranking Q and A page | from "3-4 kg/m2" to "7-10 kg/m2" | https://www.myjobquote.co.uk/questions/how-much-tile-adhesive-do-i-need-per-square-metre |
| Rule printed by two Kenyan retailers | divide the area by 2.4 for 25 kg bags (snippet only, pages returned 403) | https://www.idealceramics.com/adhesive-finishing/tile-adhesives.html ; https://www.ctm.co.ke/walls/tile-essentials/tile-adhesives-category.html |

Our arithmetic (label it as such in the post): m2 covered by one 25 kg bag = 25 / rate.

| Product and basis | kg/m2 | m2 per 25 kg bag |
|---|---|---|
| Mapeset or Adesilex P7, trowel No. 4 | 2 | 12.5 |
| Mapeset or Adesilex P7, trowel No. 5 | 2.5-3 | 8.3 to 10.0 |
| Adesilex P7, trowel n. 6 | 4 | 6.3 |
| Mapeset, trowel No. 6 | approx. 5 | 5.0 |
| Kerabond T | 2-5 | 5.0 to 12.5 |
| Keraflex Maxi S1, 3 mm bed | 3.6 | 6.9 (5.6 per 20 kg bag) |
| Keraflex Maxi S1, 5 mm bed | 6.0 | 4.2 (3.3 per 20 kg bag) |
| Keraflex Maxi S1, 10 mm bed | 12.0 | 2.1 (1.7 per 20 kg bag) |
| Keraflex Maxi S1, 15 mm bed (the stated maximum) | 18.0 | 1.4 (1.1 per 20 kg bag) |

Worked example (our arithmetic): 40 m2 at a 5 mm bed of Keraflex Maxi S1 = 240 kg = 9.6, so 10 bags of 25 kg before wastage. Grout for the same floor in 600x600x10 tile at a 5 mm joint with Keracolor FF = 12 kg, so 3 packs of 5 kg.

Do not publish: any link between a notch size in mm and the finished bed thickness. The Keraflex Maxi S1 sheet gives only kg per mm; it prints no trowel figures. Ask Mapei technical support for that mapping or leave it out.

**Links:** Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1 (each to its calculator), Keracolor FF, Kerapoxy, Ultraplan Eco 20 and Ultraplan Contract (for floors too uneven to fix with adhesive), Primer G, `/mapei/tile-adhesives-grouts`.

**Data table:** table A above, as the first screen. Static HTML, no fade.
**Diagram:** one SVG cross-section drawn to scale: notched ridges before the tile is pressed, and the collapsed continuous bed after, with the bed thickness dimensioned. A second small panel shows 65-70% against 100% back coverage as seen on a lifted tile.
**Interactive or 3D:** reuse the existing coverage calculator component with a product switch, so one widget covers all four adhesives and both grouts. Add a CSS-3D "bag stack" that grows as the area slider moves (bags as boxes, the last bag part-filled). Light: no library needed.

### 3.2 Post 4 - Why Floor Tiles Pop Up, Lift or Sound Hollow

**Outline**

- H1: Why floor tiles pop up, lift or sound hollow
- H2: Is a hollow sound a defect?
- H2: Six causes, and how to tell them apart (table B)
  - H3: Voids under the tile
  - H3: Adhesive that skinned before the tile went down
  - H3: A screed that was still shrinking
  - H3: No room to move: tenting
  - H3: Water under the floor
  - H3: The wrong adhesive for the tile
- H2: Why heat makes it worse in Dar es Salaam
- H2: Can it be repaired, or must the floor come up?
- H2: How to stop it on the next floor (checklist)
- H2: Questions (FAQ block)

**Facts and figures**

| Fact | Value as printed | Source |
|---|---|---|
| Hollow sound | "isn't a defect in itself, but it can be a symptom of a defect" | CTASC-H |
| How to confirm the cause | remove tiles "under various conditions and look for the evidence" | CTASC-H |
| Tenting mechanism | "If there are no movement joints when the tile expands then it is constrained" | CTASC-T |
| Porous tiles and tenting | "Porous tiles are more susceptible to this situation because they can absorb more moisture" | CTASC-T |
| Movement joints, interior (US practice) | perimeter joints at walls and restraining surfaces; in the field "at least every 25 feet" (7.6 m, our conversion) | CTASC-T |
| Movement joints in direct sunlight (US practice) | "every 8 to 12 feet in each direction" (2.4 to 3.7 m, our conversion) | CTASC-T |
| Perimeter gap (US practice) | "about a 1/4 inch wide gap without any grout or anything in it" (about 6 mm, our conversion) | CTASC-T |
| Back coverage | 65-70% internal walls and light traffic; 100% heavy traffic and all external works | MSET, P7 |
| Open time in normal conditions | Mapeset 20 min; Adesilex P7 approx. 20 min; Kerabond T 20 min in the table, 20-30 in the text; Keraflex Maxi S1 at least 30 min | MSET, P7, KBT, KMS1 |
| Open time in bad conditions | strong sun, drying wind, high temperature or an absorbent substrate can cut it "to just a few minutes" | P7, KBT, KMS1, MSET |
| Skinned adhesive | do not wet it: water "will form an anti-adhesive film"; re-trowel or replace | P7, KBT, KMS1, MSET |
| Substrate cure before tiling | renders at least one week per cm of thickness; cement screeds at least 28 days | MSET, P7, KBT, KMS1 |
| Hot substrate | cool sun-heated surfaces with water before spreading | KBT, KMS1, P7 |
| Protection after laying | no rain or washing for 24 hours; no strong sun for 5 to 7 days | MSET, P7, KBT, KMS1 |
| Movement joints must not be grouted | "should never be filled with Keracolor FF, but with the appropriate flexible MAPEI sealant" | KFF |
| Joints to respect | "structural, control and perimeter joints present in the substrate" | KBT |
| C1 adhesive limits | Mapeset: not for large format tiles. Kerabond T: not for non-absorbent tiles on non-absorbent substrates | MSET, KBT |
| Dar es Salaam mean daily maximum | 31.2 C for the year; 32.8 C in February | DAR |
| Regional evidence the problem is common | a Kenyan cement maker cited "the prevalence of popping out, cracking and falling of tiles" at a 2022 product launch | https://www.the-star.co.ke/news/2022-03-30-bamburi-cement-enters-mortar-sector-with-tile-adhesive (from report 08; not re-fetched; do not name the company in copy) |

Do not publish: a failure rate, a cost-of-repair multiple, or a bond strength for sand and cement. The only figures seen for those were unsourced.

**Links:** Keraflex Maxi S1 (S1, extended open time), Adesilex P7, Ultraplan Eco 20 and Ultraplan Contract, Primer G, Keracolor FF, post 1, post 11. For joint sealant, check the Mapeflex PU 45 FT, X-Seal PG and YHPUseal-2925 sheets before linking any of them to tile movement joints; the adhesive sheets say only "the appropriate flexible MAPEI sealant" and the Kerapoxy sheet names products that are not in `catalogue.ts`.

**Data table (B):** symptom / likely cause / how to check / fix. Six rows matching the H3s, each "how to check" a thing a homeowner can do (tap with a coin, look at the back of a lifted tile, look for a joint at the wall).
**Diagram:** four small SVG cross-sections in one figure: full bed; spot-bonded tile with voids; skinned ridges that never wetted the tile; a tented pair of tiles with arrows showing compression and a missing perimeter gap.
**Interactive or 3D:** a "tap test" floor plan: a grid of tiles the reader clicks; each plays a solid or hollow tone and reveals the cross-section beneath. SVG plus two short audio samples. Heavier option to flag: a rotatable exploded floor section (slab, screed, adhesive, tile, grout, movement joint) as a single small glTF in a lazy-loaded viewer below the fold; needs the owner's approval before build.

### 3.3 Post 1 - Tile Adhesive vs Sand and Cement: Which to Use

**Outline**

- H1: Tile adhesive or sand and cement?
- H2: Two different methods, not two versions of one
  - H3: Thick bed: sand and cement
  - H3: Thin bed: a factory-made adhesive
- H2: What a classified adhesive is tested for (and what a site mix is not)
- H2: Where sand and cement struggles: porcelain, large tiles, walls, outdoors, over old tiles
- H2: Where a screed still belongs: levelling first, adhesive second
- H2: What it does to weight, height and time (table C)
- H2: Cost without a price list: work in bags per square metre
- H2: Which adhesive for which job (four products, one line each)
- H2: Maswali kwa Kiswahili (short block, after wording is confirmed)
- H2: Questions (FAQ block)

**Facts and figures**

| Fact | Value as printed | Source |
|---|---|---|
| Tanzanian standard for tile adhesives | TZS 1434-1:2011, TBS, implemented 28 July 2011; covers cementitious (C), dispersion (D) and reaction resin (R) adhesives | TBS |
| What a C1 adhesive must reach | tensile adhesion strength >= 0.5 N/mm2 initially, after water immersion, after heat ageing and after freeze-thaw | KEBS, Table 1a |
| What a C2 adhesive must reach | >= 1 N/mm2 under the same four conditions | KEBS, Table 1d |
| Initial adhesion printed on the stocked sheets | Mapeset 1.0 N/mm2; Kerabond T 1.4 N/mm2; Adesilex P7 1.4 N/mm2 (all after 28 days) | MSET, KBT, P7 |
| Thin-bed consumption | 2 to 5 kg/m2 by trowel for the C1 and C2T products | MSET, P7, KBT |
| Thickest adhesive bed stated | up to 15 mm (Keraflex Maxi S1; Adesilex P7 "to a thickness of 15 mm" on irregular substrates) | KMS1, P7 |
| Screed age before thin-bed tiling | at least 28 days; renders one week per cm | MSET, P7, KBT, KMS1 |
| Grouting and traffic after thin-bed fixing | walls after 4-8 hours, floors after 24 hours; light foot traffic 24 hours; ready for use 14 days | MSET, P7, KBT, KMS1 |
| Non-absorbent tiles | Kerabond T (C1T) is not for porcelain and similar tiles on non-absorbent substrates | KBT |
| Over existing tiles | Adesilex P7 up to 900 cm2 tiles; Keraflex Maxi S1 lists overlaying existing floors | P7, KMS1 |
| Levelling instead of a thick bed | Ultraplan Eco 20 and Ultraplan Contract: 1 to 10 mm per layer (catalogue one-liners; take times from their sheets) | `catalogue.ts`; sheets in section 5 |
| What the ranking article claims, unsourced | adhesive ">1.0 N/mm2", sand-cement slurry "0.3-0.5 N/mm2", bed "20-30 mm deep", mix "typically 1:6" | https://www.dailyexcelsior.com/tile-adhesive-vs-cement-cost-strength-and-failure-rates-compared/ |

Not verified, so keep out of copy until sourced: any bond strength for site-mixed sand and cement; the water absorption figure for porcelain (take it from ISO 13006 or a tile maker's data sheet); the usual thickness and mix ratio of a Tanzanian sand-cement bed (ask Sahihi's sales team and two fundis, then state it as field practice, not as a standard). How common sand-cement fixing still is in Tanzania is also unquantified (report 08 section 8.2).

**Links:** Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Ultraplan Eco 20, Ultraplan Contract, Primer G, Planicrete SP (a latex additive "for mortar and cementitious mortar adhesive" per the catalogue: read its sheet before saying anything about improving a site mix), post 2, post 3, post 4.

**Data table (C):** rows = bed thickness, kg per m2, added floor height, what is tested, suitable tile types, wait before grouting; columns = sand-and-cement bed (cells filled only where a source exists, otherwise "varies by mix, not tested") and classified adhesive (from the sheets).
**Diagram:** side-by-side scaled sections of the two build-ups on the same slab, with the height difference dimensioned at a door threshold.
**Interactive or 3D:** a "weight and height" slider: the reader sets room area and bed thickness; the page shows kilograms of adhesive carried up the stairs (from the 1.2 kg/m2 per mm figure) and the floor-height change, as a CSS-3D slab that thickens. Only the adhesive side uses a sourced rate; the sand-cement side shows height only, since no sourced density is in hand.

### 3.4 Post 2 - C1, C2, C2TE S1: Tile Adhesive Classes Explained

**Outline**

- H1: C1, C2, C2TE S1: what the codes on a tile adhesive bag mean
- H2: Who writes the codes (EN 12004, ISO 13007-1, and the Tanzanian and Kenyan standards that use them)
- H2: The letter: C, D or R
- H2: The number: 1 or 2
- H2: The extra letters: T, E, F
- H2: S1 and S2: how far the adhesive can bend
- H2: Four bags, four codes (table D: the stocked ladder)
- H2: Which class does my job need? (by tile, place and substrate)
- H2: What the code does not tell you (open time on a hot day, bed thickness, stone staining)
- H2: Grout has codes too: CG2WA and RG
- H2: Questions (FAQ block)

**Facts and figures**

| Fact | Value as printed | Source |
|---|---|---|
| C1 | tensile adhesion >= 0.5 N/mm2: initial, after water immersion, after heat ageing, after freeze-thaw | KEBS Table 1a |
| C1 open time | >= 0.5 N/mm2 after not less than 20 min | KEBS Table 1a |
| C2 | >= 1 N/mm2 under the same four conditions | KEBS Table 1d |
| F (fast setting) | >= 0.5 N/mm2 after not more than 6 h; open time after not less than 10 min | KEBS Tables 1b, 1e |
| T (reduced slip) | slip <= 0.5 mm | KEBS Table 1c |
| E (extended open time) | >= 0.5 N/mm2 after not less than 30 min | KEBS Table 1c |
| S1 (deformable) | transverse deformation >= 2.5 mm and < 5 mm | KEBS Table 1c; KMS1 prints "S1 - deformable (> 2.5 mm, < 5 mm)" |
| S2 (highly deformable) | >= 5 mm | KEBS Table 1c |
| Kenyan document | FDKS 2129-1:2023, public review draft, "Tile adhesive for ceramic, marble, granite, and porcelain - Part 1" | KEBS |
| Tanzanian document | TZS 1434-1:2011 "Ceramic tiles - Grouts and adhesives - Part 1: Terms, definitions and specifications for adhesives" | TBS |
| Mapeset | C1 (EN 12004 and ISO 13007-1) | MSET |
| Kerabond T | C1T; C2ES2 only if mixed with Isolastic instead of water | KBT |
| Adesilex P7 | C2T | P7 |
| Keraflex Maxi S1 | C2TES1: "cementitious (C), improved (2), non-slip (T), extended open time (E), deformable (S1)" | KMS1 |
| Kerapoxy as an adhesive | R2T: improved (2) reaction resin adhesive (R), slip resistant (T) | KPX |
| Keracolor FF | CG2WA: "improved (2) cementitious (C) grout (G) with reduced water absorption (W) and high abrasion resistance (A)" | KFF |
| Kerapoxy as a grout | RG: reaction resin (R) grout (G) | KPX |
| What goes over a waterproofing membrane | "Bond in place with a C2 class cementitious adhesive"; "Grout all joints with a CG2 class cementitious product" | MEASY |
| A class is not a use list | Kerabond T prints 1.4 N/mm2 initial adhesion yet is C1T, and its sheet excludes non-absorbent tiles on non-absorbent substrates | KBT |

Not verified: the current status of TBS's adoption of the ISO 13007 series (draft documents surfaced again in a pool search, as in report 08; contents not read). Isolastic is not in `catalogue.ts`: mention the C2ES2 route only if Sahihi stocks it.

**Links:** Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Kerapoxy, Keracolor FF, Mapelastic Easy, `/mapei/tile-adhesives-grouts`, post 1, post 7.

**Data table (D):** product / code / open time / bed or trowel / tile-on-tile / pools / "not for" (one line from each sheet's own list). Then the code table from KEBS, in plain words.
**Diagram:** the code "C2TE S1" drawn large and pulled apart into five labelled parts, each with its test shown as a pictogram: a pull-off dolly for adhesion, a tile on a wall with a slip arrow, a clock for open time, a strip of adhesive bent over two supports for S1.
**Interactive or 3D:** a code builder. The reader toggles tile type, size, place and substrate; the code assembles letter by letter and the matching stocked product lights up with its "not for" line. Rules come only from the "where to use" and "do not use" lists in the four sheets, and must be signed off by Mapei technical support before launch (report 08 section 11 makes the same point). Light alternative to a 3D bend test: a CSS animation of the S1 strip deflecting to 2.5 mm and 5 mm markers.

### 3.5 Post 5 - Epoxy Grout vs Cement Grout: Which Goes Where

**Outline**

- H1: Epoxy grout or cement grout?
- H2: What each one is (a cement powder mixed with water; a two-part resin)
- H2: Side by side (table E)
- H2: Where cement grout is the right choice
- H2: Where epoxy earns its place: kitchens, food plants, pools, salt water
- H2: Working time and temperature: the part nobody mentions
  - H3: 45 minutes of pot life
  - H3: The +30 C ceiling and a Dar es Salaam afternoon
- H2: How much of each for the same floor
- H2: Cleaning up: the difference between easy and never
- H2: Neither one is a movement joint
- H2: Questions (FAQ block)

**Facts and figures**

| Fact | Keracolor FF | Kerapoxy | Source |
|---|---|---|---|
| Type and class | cementitious, CG2WA | two-component epoxy, RG; also R2T as an adhesive | KFF, KPX |
| Joint width | up to 6 mm | at least 1 mm (table covers 3, 5, 8, 10 mm) | KFF, KPX |
| Mixing | 23-25% water by weight, by colour | component A : component B = 9 : 1, pre-measured; no water, no solvent | KFF, KPX |
| Pot life | approx. 2 hours | 45 minutes | KFF, KPX |
| Application temperature | +5 C to +40 C | +12 C to +30 C | KFF, KPX |
| Light foot traffic | 24 hours | 24 hours | KFF, KPX |
| Ready for use | 3 days; 7 days for tanks and pools | 4 days; 10 days for basins and pools, and before chemical attack | KFF, KPX |
| Temperature in service | -30 C to +80 C | -20 C to +100 C | KFF, KPX |
| Acid resistance | "good if pH > 3" | "acid-resistant"; "excellent resistance to chemicals" | KFF, KPX |
| Strength printed | not in the JSON extract: read from the PDF | flexural 31 N/mm2; compressive 55 N/mm2 | KPX |
| Named uses | interiors, exteriors, pools, smooth and polished tile, industrial floors "where resistance to chemical agents is not required" | food industry, hygiene areas, industrial floors, pools "particularly suitable for basins containing salt or thermal water", laboratory benches, kitchen work surfaces | KFF, KPX |
| Named limits | never in movement joints; excess water causes efflorescence; never saline or dirty water | not for terracotta; test contrasting colours on porcelain first; residue left on the tile "will be very difficult to remove" | KFF, KPX |
| Joint preparation | clean, raked to at least 2/3 of tile thickness | dry, clean, emptied to at least 2/3 of tile thickness | KFF, KPX |
| Consumption, 300x300x10 tile | 0.3 kg/m2 at 3 mm; 0.5 at 5 mm | 0.3 / 0.5 / 0.9 / 1.1 kg/m2 at 3 / 5 / 8 / 10 mm | KFF, KPX tables |
| Consumption, 600x600x10 tile | 0.3 kg/m2 at 5 mm | 0.2 / 0.3 / 0.4 / 0.5 kg/m2 at 3 / 5 / 8 / 10 mm | KFF, KPX tables |
| Stocked packs and colours | 5 kg; grey | 5 kg; grey and white | `catalogue.ts` (the sheets list more packs and 16 colours for Keracolor FF: publish what is stocked) |

| Fact | Value | Source |
|---|---|---|
| Dar es Salaam mean daily maximum by month | Jan 32.4, Feb 32.8, Mar 32.4, Apr 31.1, May 30.3, Jun 30.0, Jul 29.7, Aug 30.1, Sep 30.8, Oct 31.5, Nov 31.7, Dec 32.1 C; year 31.2 C | DAR |
| Dar es Salaam relative humidity | 79% for the year; 84% in April | DAR |

Inferred, and to be confirmed with Mapei technical support before it is printed: the mean daily maximum is above Kerapoxy's +30 C application limit in ten months of the year, equal to it in June and 29.7 C in July, so epoxy grouting in Dar es Salaam belongs in shaded or conditioned interiors or in the cooler hours, with small mixes. The sheet itself says only "Use the product in temperatures between +12 C and +30 C" and that times "may vary according to the temperature".

Do not publish: "epoxy grout is waterproof" as a flat claim. The Kerapoxy sheet says "a smooth final surface with low water absorption"; use its words. A grout does not replace the membrane under the tile.

**Links:** Keracolor FF, Kerapoxy (both calculators), Mapelastic Easy, Mapelastic Smart, Mapelastic AquaDefense, YHCoat-2060 (membranes under wet-area tile), UltraCare Multicleaner, post 6, post 10, post 12.

**Data table (E):** the two-column table above, trimmed to twelve rows.
**Diagram:** a magnified joint in section for each grout: tile edges, joint raked to two thirds of the tile thickness, grout body, and a droplet sitting on each surface. Beside it, a bar for each grout's application temperature window with Dar es Salaam's monthly maxima drawn across it.
**Interactive or 3D:** a joint explorer: the reader picks tile size, thickness and joint width; the joint is drawn to scale in an isometric SVG tile pair and both consumptions update together from the repo's tested formula, in kg/m2 and in 5 kg packs.

### 3.6 Post 6 - Swimming Pool Tiling: Adhesive, Grout, Fill Times

**Outline**

- H1: Tiling a swimming pool: adhesive, grout and when to fill
- H2: The layers of a tiled pool, from shell to water (diagram first)
- H2: Waterproof before you tile (short; link to the waterproofing pages)
- H2: Which adhesive
  - H3: Mosaic and standard pool tile
  - H3: Full coverage: why back-buttering is not optional under water
- H2: Which grout
  - H3: Cement grout
  - H3: Epoxy grout, salt water and thermal water
- H2: Movement joints and the sealant in them
- H2: The waiting times (table F, then the timeline)
- H2: Tiling in sun and wind on an open pool shell
- H2: Why pool tiles fall off (five causes; link to post 4)
- H2: Questions (FAQ block)

**Facts and figures**

| Fact | Value as printed | Source |
|---|---|---|
| Adhesives that list pools | Keraflex Maxi S1: "Bonding tiles in swimming pools and tanks" and mosaic "also in swimming pools" | KMS1 |
| Adhesives that mention pools for technique | Adesilex P7 and Kerabond T: back-butter in "tanks and swimming pools" (Kerabond T: "when applying to swimming pools and water tanks") | P7, KBT. Neither sheet lists pools under where to use in the extracted list: confirm scope with Mapei before recommending them for immersion |
| Back-buttering in pools | required, "to ensure complete buttering" | KMS1 |
| Wait before grouting | walls after 4-8 hours; floors after 24 hours | KMS1 |
| Fill after adhesive | "Basins and swimming pools may be filled up 21 days after the application of Keraflex Maxi S1" | KMS1 |
| Keracolor FF in pools | listed: "Grouting swimming pools"; fill 7 days after grouting; performance improved with Fugolastic for "harsh conditions (grouting facades, swimming pools...)" | KFF |
| Kerapoxy in pools | "Grouting swimming pools; particularly suitable for basins containing salt or thermal water"; fill 10 days after grouting | KPX |
| Kerapoxy temperature window | apply between +12 C and +30 C; service -20 C to +100 C | KPX |
| Kerapoxy as an adhesive | class R2T; consumption 2-4 kg/m2; "Bonding tiles in plastic reinforced with fibre glass swimming pools" | KPX |
| Protection after tiling | no rain for 24 hours; no direct sun for 5 to 7 days | KMS1 |
| Hot shell | "If the surface is too hot due to direct sunlight, cool it down with water" | KMS1 |
| Open time on an exposed shell | at least 30 minutes in normal conditions; "only a few minutes" in direct sun, dry wind or high temperature | KMS1 |
| Membrane, then tile | wait at least 5 days after Mapelastic Easy before laying tiles; C2 adhesive; CG2 grout; seal expansion joints (Mapelastic Easy is listed for balconies, terraces and bathrooms, not pools: use its rule only as the pattern) | MEASY |
| Pool membranes in the catalogue | Mapelastic Smart: "balconies, terraces, bathrooms and swimming pools"; Mapelastic Foundation: positive and negative water pressure, sheet names sunken pools | `catalogue.ts`; Mapelastic Foundation sheet. Mapelastic Smart has no data sheet in `src/config/mapei-tds.json`: get its curing time before tiling from Mapei |
| Private against public pools | one maker's regional guide advises cement grout for private pools and epoxy for public pools (snippet only; page returned 403) | https://www.middleeast.weber/files/sodamco/2018-10/Tiling_in_swimming-pools.pdf (context only; do not cite a competitor in copy) |

Our arithmetic for the timeline: adhesive day 0, grout from day 1 on floors; the two waits run in parallel, so the earliest fill is day 21 from the last tile (the adhesive governs), provided the grout went in at least 7 days (cement) or 10 days (epoxy) before that. State this as a reading of two sheets and have Mapei confirm it.

Not verified: fill-rate, water-testing and water-chemistry guidance (none read); whether Fugolastic is stocked; which stocked sealant is rated for immersed movement joints.

**Links:** Keraflex Maxi S1, Kerapoxy, Keracolor FF, Mapelastic Smart, Mapelastic Foundation, Mapeband Easy, Mapeband TPE, Mapenet 150, `/mapei/waterproofing`, the planned `/solutions/waterproofing/swimming-pool`, post 5, post 11.

**Data table (F):** step / product / wait before the next step / source line. Six rows from shell to fill.
**Diagram:** an exploded isometric of the pool wall-floor corner: concrete shell, render, membrane with corner tape, adhesive bed with full coverage, mosaic, grout, movement joint with sealant, water line. This is the hero image and should be static SVG.
**Interactive or 3D:** a fill-date planner: the reader enters the date tiling finishes and picks the grout; the page draws the timeline and returns the earliest fill date, with the data sheet sentence beside each bar. Heavier option to flag: the exploded corner as a rotatable model, lazy-loaded on tap. Pools are the one topic in this cluster where a real 3D section would explain more than a drawing, because the corner detail is three-dimensional; it still needs the owner's approval first.

---

## 4. FAQ questions per post

Candidate questions for the FAQ block of each post. Those marked (seen) appear verbatim on a ranking page (section 2.3); the rest are ours and unverified as searches. Answers must come from the sheets cited in section 3.

**Post 1 - Tile adhesive vs sand and cement**
1. Is tile adhesive better than sand and cement?
2. Can I fix porcelain tiles with sand and cement?
3. Can I add cement to tile adhesive to make it go further?
4. How thick can tile adhesive be applied?
5. How long must a new screed dry before tiling with adhesive?
6. Do I still need a screed if I use tile adhesive?
7. Does tile adhesive use more or fewer bags than sand and cement for the same floor?

**Post 2 - Adhesive classes**
1. What is the difference between C1 and C2 tile adhesive?
2. What does C2TE S1 mean?
3. What does S1 mean on a tile adhesive bag?
4. Which class of adhesive do porcelain tiles need?
5. Is a C2 adhesive always better than a C1?
6. What do T and E mean on the bag?
7. What does CG2WA mean on a grout?
8. Do Tanzanian standards use the same codes?

**Post 3 - Adhesive per square metre**
1. How much tile adhesive do I need per square metre? (seen)
2. How many square metres does a 25 kg bag of tile adhesive cover?
3. How many bags of adhesive do I need for 60x60 tiles?
4. Does back-buttering use more adhesive?
5. How much grout do I need per square metre?
6. How much water goes into a 25 kg bag?
7. How much extra should I buy for wastage?

**Post 4 - Tiles popping, lifting, hollow**
1. How do I stop my tiles from popping up? (seen)
2. Why do my tiles make a popping sound? (seen)
3. Are tiles that sound hollow a problem? (seen)
4. Why do floor tiles lift in hot weather?
5. Can lifted tiles be re-fixed, or must the floor be replaced?
6. Can hollow tiles be fixed without removing them?
7. How long does tile adhesive stay workable in the sun?
8. Do floor tiles need a gap at the wall?

**Post 5 - Epoxy vs cement grout**
1. Is epoxy grout waterproof? (seen)
2. Is epoxy grout resistant to mold and mildew? (seen)
3. Does epoxy grout last longer than cement grout? (seen)
4. Does epoxy grout change color over time? (seen)
5. Can I use epoxy grout in a bathroom or kitchen at home?
6. Can epoxy grout be applied in hot weather?
7. How wide can a cement grout joint be?
8. Can I put epoxy grout over old cement grout?

**Post 6 - Swimming pool tiling**
1. Which tile adhesive is used in swimming pools?
2. Should pool tiles be grouted with epoxy or cement grout?
3. How long after tiling can a pool be filled?
4. Which grout suits a salt-water pool?
5. Do pool tiles need waterproofing underneath?
6. Why do pool mosaics come loose?
7. Can pool tiling be done in direct sun?

**Post 7 - Large format tiles**
1. Which adhesive is used for 60x120 tiles?
2. Do large tiles need back-buttering?
3. How flat must the floor be for large format tiles?
4. Can a C1 adhesive be used for large tiles?
5. How thick should the adhesive bed be under large tiles?
6. What joint width do large rectified tiles need?

**Post 8 - Tiling over old tiles**
1. Can you tile over tile floors? (seen)
2. Which adhesive sticks to old glazed tiles?
3. How do I prepare old tiles before tiling over them?
4. Is there a size limit for tiles laid over old tiles?
5. Can I tile over old tiles in a shower?
6. How much will a second layer of tiles raise the floor?

**Post 9 - Trowel notch size**
1. What size trowel do I need for 60x60 floor tiles?
2. What do trowel No. 4, No. 5 and No. 6 mean?
3. Do I need to back-butter my tiles? (seen)
4. Square notch or round notch?
5. How do I check that the trowel is giving full coverage?
6. Does a bigger notch mean more bags?

**Post 10 - Grout joint width**
1. What is the minimum grout joint for porcelain tiles?
2. Can tiles be laid with no joint at all?
3. What joint width suits rectified tiles?
4. Should outdoor joints be wider than indoor joints?
5. How does joint width change how much grout I need?
6. What is the widest joint a cement grout can fill?

**Post 11 - Outdoor tiling in heat**
1. Which tile adhesive is best for outdoor tiles?
2. Why do balcony tiles lift after a hot season?
3. How often do outdoor tiles need a movement joint?
4. Can I tile in direct sunlight?
5. How long must new outdoor tiling be protected from rain and sun?
6. Do dark tiles need more movement joints?

**Post 12 - Cleaning tiles and grout**
1. How do I remove grout haze from new tiles?
2. Which cleaner removes cement stains from tiles?
3. Why does grout turn black?
4. Does grout need sealing?
5. Do porcelain tiles need a stain protector?
6. What is the difference between an alkaline, a neutral and an acid tile cleaner?
7. Which cleaner is safe on polished marble?

**Post 13 - Marble and granite**
1. Can I use ordinary tile adhesive for marble?
2. Why does marble stain from underneath?
3. When is a white adhesive needed?
4. Which adhesive suits granite outdoors?
5. Does natural stone need a stain protector after laying?

Facts for the shorter posts, so nothing is invented when they are written:

- Post 7: Mapeset "Large format tiles" is in its do-not-use list (MSET). Kerabond T requires double-buttering for tiles with a side over 60 cm and lists large tiles only when mixed with Isolastic (KBT). Keraflex Maxi S1 is "especially suitable for the installation of large-size porcelain tiles", bonds "all types and sizes" up to 15 mm, and its sheet recommends a levelling system to hold joint size and reduce height differences (KMS1). Flatness tolerances seen in search summaries (for example 1.5 mm under a 2 m straight edge) come from other makers' guides and were not read: source one from Mapei before printing.
- Post 8: Adesilex P7 "Tile on tile of existing flooring with tiles up to 900 cm2" (P7); Keraflex Maxi S1 "Overlaying ceramic and stone on existing floors (ceramic, marble, etc.)" (KMS1); UltraCare HD Cleaner "ideal for the preparation of existing ceramic and stone material before installing tile-on-tile", deep cleaning at 1:10 to 1:20, about 200 m2 per litre at 1:20 (HD). 900 cm2 is a 30x30 cm tile (our arithmetic).
- Post 9: trowel No. 4 = 4x4 mm, No. 5 = 5x5 mm, No. 6 = 6x6 mm, with the kg/m2 beside each (MSET). The Keraflex Maxi S1 sheet names no trowel size, only "a notch size that guarantees optimum buttering of the back of the tile" (KMS1). BIHUI is "Professional tiling tools" in `src/config/brands.ts` but is not catalogued: no BIHUI trowel sizes are known here.
- Post 10: Keracolor FF "for joints up to 6 mm"; Kerapoxy "for joints of at least 1 mm" (KFF, KPX). US trade guidance: "the joint width shall be three times the actual variation of the facial dimensions of the tile supplied", with "approximately 1/8 inch for rectified products" and "approximately 3/16 inch for pressed porcelain and ceramic tiles" (NTCA, quoting ANSI A108.02; 3.2 mm and 4.8 mm by our conversion). No metric or local standard was read.
- Post 11: application range +5 C to +40 C for all four adhesives; open time and protection sentences as in 3.2; back-buttering outdoors for tiles with a side over 30 cm (KBT); Primer G "is not recommended for external applications" (PG); joint spacing figures as in 3.2 (CTASC-T, US practice).
- Post 12: UltraCare Multicleaner: neutral, 1:200 for daily cleaning with no rinse (about 1,500 m2 per litre), up to 1:20 for heavy cleaning, 1:30 for the first clean after installation on delicate surfaces; safe on polished natural stone (MULTI). UltraCare HD Cleaner: alkaline; not for wood or polished stone (HD). UltraCare Stain Protector W Plus: for natural stone, marble, granite, brickwork, cementine tiles and engineered stone; about 30 m2 per litre, one coat; not on surfaces in direct sun or above +35 C (SPW). Its sheet does not list porcelain or grout joints, so do not offer it as a grout sealer. Cured cementitious residue: "an acid cleaner can be used (e.g. UltraCare Keranet), when the grout is completely cured" (KFF); Keranet is not in the catalogue. Grout cleaning technique and timing (10-20 minutes, two buckets, diagonal strokes) is in KFF.
- Post 13: Keraflex Maxi S1 bonds "stone on internal and external surfaces (stable stone, not sensitive to humidity)" and is not for "slabs of marble and natural stone which are subject to efflorescence or staining" (KMS1). The catalogue lists it in grey only; Adesilex P7 is listed in grey and white but its sheet does not list stone.

---

## 5. Sources

**Mapei data sheets** (source URL as recorded in `src/config/mapei-tds.json`; local copy in `public/tds/mapei/<slug>.pdf`; text read from `assets/source/tds-text/<slug>.txt`)

- KMS1 - Keraflex Maxi S1, edition 56-7-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00056_keraflex-maxi-s1-(fo)_en-ae_1ccf8053ec754469b9bac8dcda5e9406.pdf?sfvrsn=c68e4320_0
- P7 - Adesilex P7, edition 61-12-2017 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00061_adesilex-p7_en-ae_2d24f16c5972417f87c9ea3150a54116.pdf?sfvrsn=980f9260_0
- KBT - Kerabond T, edition 78-8-2026 en (IT): https://cdnmedia.mapei.com/docs/librariesprovider2/products-documents/1_00078_kerabond-t_en_fa4ed92c7ad141a691988608dfccc77a.pdf?sfvrsn=7e206b9f_0
- MSET - Mapeset, edition 95-5-2023 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00095_mapeset_en-ae_570b20a991a04ad3b8dc8ecb4d4ae07d.pdf?sfvrsn=f52619d3_0
- KFF - Keracolor FF, edition 131-12-2025 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00131_keracolor-ff_en-ae_d665ccb953224c9f967787c62773c7f9.pdf?sfvrsn=2699a15e_0
- KPX - Kerapoxy, edition 141-9-2026 en (IT): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00141_kerapoxy_en_4367619c02824f3c94429921a39e9ed8.pdf?sfvrsn=1700020c_0
- HD - UltraCare HD Cleaner, edition 11006-7-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_11006_ultracare-hd-cleaner_en-ae_4ca5a14afa0c4e5881960a89fb9b4511.pdf?sfvrsn=62ef3a27_0
- MULTI - UltraCare Multicleaner, edition 11005-7-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_11005_ultracare-multicleaner_en-ae_662182fe35ea41c39aa34cfd74334f99.pdf?sfvrsn=b3996c21_0
- SPW - UltraCare Stain Protector W Plus, edition 11016-2-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_11016_ultracare-stain-protector-w-plus_en-ae_67eab50b19574595bb2b79dc181150ee.pdf?sfvrsn=d2ffafe1_0
- PG - Primer G, edition 532-6-2025-gb: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00532_primer-g_en_2de65cd07f89466da2d7381ed58e6d80.pdf?sfvrsn=5cc07e08_0
- MEASY - Mapelastic Easy: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_07559_mapelastic-easy_en-ae_8ee9cdbfaa5a4ffdba5f49083423f329.pdf?sfvrsn=bca39104_0
- Mapelastic Foundation: https://cdnmedia.mapei.com/docs/librariesprovider24/products-documents/1_02069_mapelastic-foundation_en_14a2c61a5c12479c9674e70112711a22.pdf?sfvrsn=382e4694_0
- Mapelastic AquaDefense, edition 14224-7-2026 en (IT): https://cdnmedia.mapei.com/docs/librariesprovider34/products-documents/1_14224_mapelastic-aquadefense_en_74286d2ae6f6497b92f3973a7a66110f.pdf?sfvrsn=dbd5d489_0
- Ultraplan Eco 20, edition 4005-10-2026 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_04005_ultraplan-ec20_en-ae_cea8eee25a91458da5434c97806ff517.pdf?sfvrsn=65281587_0
- Ultraplan Contract: https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_04085_ultraplan-contract_en-ae_8e75a0b0050d42fbba78c0e8acbaa3de.pdf?sfvrsn=ec382438_0
- Planicrete SP, edition 700-4-2023 (UAE): https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00700_planicrete-sp_en-ae_381d91c654e841e2b681b6b6b45d683d.pdf?sfvrsn=e7d8901d_0
- Mapeflex PU 45 FT, edition 8102-11-2025 en (IT): https://cdnmedia.mapei.com/docs/librariesprovider20/products-documents/1_08102_mapeflex-pu-45-ft_en_e0022c52e28d48db8187f75fd0db8409.pdf?sfvrsn=6b883ee1_0

**Standards bodies and regulators**

- KEBS - FDKS 2129-1:2023, public review draft (PDF read with pdftotext): https://members.wto.org/crnattachments/2023/TBT/KEN/23_09870_00_e.pdf
- TBS - TZS 1434-1:2011 record (fetched): https://tradebarriers.org/ntm/regulations/view/1200
- TBS draft DTZS ISO 13007-2 (search result only, not read): https://www.tbs.go.tz/uploads/publications/en-1774357744-BCDC%209%20(3855)%20DTZS%20%20ISO%2013007%202.pdf
- ISO 13007-1 catalogue page (403, not read): https://www.iso.org/standard/59419.html

**Climate**

- DAR - Dar es Salaam climate table, Julius Nyerere International Airport 1991-2020, citing NOAA, Deutscher Wetterdienst and the Tokyo Climate Center (fetched): https://en.wikipedia.org/wiki/Dar_es_Salaam

**Trade and consultant sources (fetched)**

- CTASC-T: https://ctasc.com/expert-answers/what-is-causing-my-ceramic-tile-to-buckle-tent-up/
- CTASC-H: https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/
- NTCA: https://www.tileletter.com/about-grout-joint-width/

**Ranking pages audited (fetched)**

- https://www.myjobquote.co.uk/questions/how-much-tile-adhesive-do-i-need-per-square-metre
- https://www.dailyexcelsior.com/tile-adhesive-vs-cement-cost-strength-and-failure-rates-compared/
- https://www.jkcement.com/blog/construction-planning/tile-popping-reasons-and-preventions/
- https://laticrete.com/blog/2025/june/everything-you-need-to-know-about-epoxy-grout
- https://www.the254report.co.ke/p/choosing-the-right-tile-adhesive-a-comprehensive-guide-for-professionals-and-homeowners
- https://mys.sika.com/en/construction/tile-setting/sika-tile-adhesive-selection-guideline.html
- https://afrotools.com/sw/zana/kikokotoo-vigae-na-sakafu/
- https://www.primecalcpro.com/sw/learn/tile

**Seen in results but not readable (snippet only)**

- https://www.monitor.co.ug/uganda/magazines/homes-and-property/choosing-the-right-adhesive-for-your-tiles-1623358 (403)
- https://www.idealceramics.com/adhesive-finishing/tile-adhesives.html (403)
- https://www.ctm.co.ke/progrip-superbond-tile-adhesive-25-kg-product.html (403)
- https://www.ctm.co.ke/walls/tile-essentials/tile-adhesives-category.html (not fetched)
- https://www.in.weber/blog/tile-adhesive-vs-cement-sand-mortar-advantages-disadvantages (403)
- https://www.uk.weber/tile-fixing/tiling-over-tiles (403)
- https://www.middleeast.weber/files/sodamco/2018-10/Tiling_in_swimming-pools.pdf (403)
- https://shabbirihardware.com/blog/adhesives-for-tiles-marble-cement-kenya (404)
- https://www.wacker.com/cms/en-gb/insights/tile-adhesives-standards.html (404)
- https://www.tcnatile.com/faqs/ (404)
- https://tilersforums.com/threads/trowel-size-for-600x600-floor-tiles.99455
- https://tilersforums.com/threads/do-i-need-to-back-butter-my-tiles.24340
- https://www.tilersforums.com/threads/sand-and-cement-as-adhesive.78989
- https://www.thumbtack.com/question/can-you-tile-over-tile-floors-395689498287153153
- https://www.tileletter.com/?p=33445
- https://ctasc.com/?p=10440
- https://jiji.co.tz/sw/dar-es-salaam/building-materials/grout
- https://elon.io/learn-hardcore-swahili/lexicon/380764/sakafu

**From report 08, not re-fetched here**

- https://www.the-star.co.ke/news/2022-03-30-bamburi-cement-enters-mortar-sector-with-tile-adhesive
- https://nation.africa/kenya/life-and-style/dn2/tile-adhesives-or-sand-cement-mixture--3819924

**Searches run (18)**

1. tile adhesive vs sand and cement Kenya Tanzania which is better for fixing tiles
2. why are my floor tiles popping up Kenya tiles lifting hollow sound causes
3. how much tile adhesive per square metre 25kg bag coverage 60x60 tiles
4. epoxy grout vs cement grout which is better bathroom kitchen Kenya
5. jinsi ya kupiga tiles gundi ya tiles au saruji na mchanga
6. C1 C2 C2TE S1 tile adhesive classification meaning EN 12004 ISO 13007 explained
7. best tile adhesive for porcelain tiles Kenya Uganda Tanzania guide
8. can you tile over existing tiles floor tile on tile adhesive preparation
9. what size notched trowel for 600x600 porcelain floor tiles 10mm 12mm back buttering coverage
10. swimming pool tile adhesive and grout Kenya Tanzania Zanzibar which to use
11. tiles kubanduka sakafu sababu vigae kuinuka fundi tiles Tanzania
12. minimum grout joint width porcelain tiles rectified 2mm 3mm floor wall recommended
13. grout turning black mould bathroom how to clean and seal tile grout
14. large format tiles 60x120 installation adhesive Kenya Nairobi how to lay large tiles
15. outdoor tiles lifting tenting heat sun movement joints tiles hot climate balcony terrace adhesive
16. adhesive for marble and granite tiles staining white adhesive natural stone Kenya
17. tile adhesive calculator Kenya Tanzania bags per square metre
18. epoxy grout Tanzania Dar es Salaam tile grout supplier

---

## 6. Open items before any of these is written

1. Give posts 6 to 13 a row in `SEO-STRATEGY.md` section 5, or drop them.
2. Ask Mapei technical support to confirm: the Kerapoxy +30 C limit and how to work around it in Dar es Salaam; the pool fill timeline in 3.6; whether Adesilex P7 and Kerabond T may be recommended for immersion; a notch-to-bed-thickness mapping for Keraflex Maxi S1; movement-joint spacing for interior and exterior floors in this climate; a substrate flatness tolerance for large format.
3. Ask the owner which of these are stocked, since the sheets lean on them and `catalogue.ts` does not list them: Isolastic, Fugolastic, UltraCare Keranet, UltraCare Kerapoxy Cleaner, a silicone joint sealant, a tile levelling system, Keraflex Maxi S1 in white, any BIHUI trowels.
4. Get the Mapelastic Smart data sheet into the manifest before the pool post.
5. Source the porcelain water-absorption figure and, if it is to be used at all, a tested bond strength for site-mixed sand and cement.
6. Run the Swahili word check from report 08 section 7 before writing any Swahili block.
7. Re-run the thirteen primary queries from a Tanzanian location and record People Also Ask.
