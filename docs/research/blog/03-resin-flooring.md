# Blog research 03 - Resin and industrial flooring

Written 2026-11-06. Cluster: epoxy, polyurethane and polyurethane-cement
floors for factories, warehouses, food and beverage plants, hospitals,
garages and car parks. Read section 1 before quoting anything.

Companion to `docs/research/09-kw-flooring.md` (the keyword universe and
page plan for this cluster). This file does not repeat that work: it
turns the cluster into blog posts, checks who ranks for the informational
queries report 09 left unchecked, and attaches sourced facts to each post.

---

## 1. Method and limits

**What was done**

- Read `SEO-STRATEGY.md` sections 3 to 5, `docs/research/README.md`,
  report 09 and the flooring part of report 15, so that every post below
  either fills an existing row in the query registry or is flagged as
  needing a new row.
- Ran **18 web searches** (the cap for this task), all on 2026-11-06, and
  recorded the result lists. The log is in section 1.2.
- Fetched 14 pages successfully: 10 ranking or trade pages (to measure
  length, date and gaps, and for attributed statements) and 4 reference
  pages (a standards body, a regulator, Codex, a climate table). 4 more
  fetches failed, covering 3 documents; they are listed in section 1.3.
- Read the manufacturer data sheets already in the repo
  (`public/tds/mapei/*.pdf`, text extracted with `pdftotext`) and the
  verified extracts in `src/content/mapei/*.json` and
  `src/content/x-calibur/*.json`. Every product figure below was checked
  against the PDF text on 2026-11-06.

**Limits**

1. **The search tool is US-located and is not Google Tanzania.** Result
   order approximates, and does not equal, what a buyer in Dar es Salaam
   sees. Map packs, Instagram, Facebook and WhatsApp listings are
   invisible to it.
2. **No search volumes.** No volume tool is connected. Nothing in this
   file is a volume. Demand is judged only from who bothers to rank and
   from how regional sites structure their content. Where a judgement is
   mine it is marked **(inferred)**.
3. **No People Also Ask data.** The tool does not return PAA boxes.
   Section 1.4 lists question-shaped headings found on ranking pages
   instead. They are not Google PAA.
4. **The tool returns titles and URLs, not positions I can certify.** The
   order of domains in section 1.2 is the order returned.
5. **"Who ranks" for a Tanzanian searcher is inferred** from US-index
   results plus the 21 live checks in report 09 (which found no Tanzanian
   company page for any flooring query).
6. **Vendor numbers are not facts.** Lifespans, cost ranges and
   temperature ratings found on contractor blogs conflict with each other
   and cite nothing. They are reported here only as "what competitors
   say" and must not be copied into a post.
7. **No prices appear in this file**, by the owner's rule. Where a
   ranking page prints prices this file says so and stops there.

### 1.1 Three things found that change how posts must be written

1. **Air humidity and slab humidity are two different limits, and report
   09 blurred them.** FeRFA's "not exceed 75% RH" is a *substrate* reading
   taken with a hygrometer (https://www.ferfa.org.uk/standard/). The
   Mapefloor FC 200 ME data sheet separately says "The air's relative
   humidity should not be greater than 75%". Dar es Salaam's *monthly
   mean air* humidity is 75 to 84% in every month
   (https://en.wikipedia.org/wiki/Dar_es_Salaam, table for Julius Nyerere
   International Airport, 1991 to 2020). So the honest local statement is
   about the air limit on the data sheet, and about dew point. A post
   must not say Dar es Salaam slabs exceed FeRFA's limit: nobody measured
   a slab.
2. **Mapei's "4%" moisture limit prints no test method.** Five flooring
   sheets say substrate moisture must be a maximum of 4%. Two of them
   (Mapefloor I 300 SL ME and Primer SN) add "(check by testing it with a
   sheet of polythene)", which is a check for rising damp, not a way to
   read 4%. Posts may quote the
   limit; they may not say how to measure it until Mapei technical
   services confirm the method (carbide bomb is the usual one, but that
   is my knowledge, not the sheet's).
3. **Polyurethane cement is the only stocked system whose sheet allows
   young concrete.** Mapefloor CPU+/MF: "Do not apply ... on wet
   substrates or on concrete younger than 7 days", and the substrate
   "must appear visually dry". The epoxy sheets require a maximum of 4%.
   This is the single most useful comparison fact in the cluster and no
   ranking page states it with a source.

### 1.2 Search log (18 queries, 2026-11-06, US index)

| # | Query | Domains returned, in order (repeats in brackets) | Local or regional pages | Reading |
|---|---|---|---|---|
| 1 | epoxy vs polyurethane flooring | fastlineservices.co.uk; jclicht.com (2); usa.sika.com; alpinepainting.com; ssconcretepolishing.com; gz-supplies.com; a spam subdomain; a LinkedIn mirror; a wikiHow mirror | 0 | Contractor blogs. The one manufacturer page is about 250 words with no table and no figures (fetched) |
| 2 | why is my epoxy floor bubbling and peeling | duraamen city subdomains (3); newpages.com.my; newpages.asia; a spam subdomain (2); xtremepolishingsystems.com; armorpoxy.com; top4.com.au | 0 | Vendor blogs and press-release sites. No page cites a data sheet limit |
| 3 | epoxy flooring Kenya cost per square metre | achisystems.co.ke (2); bestcareservices.co.ke (9); mwakilishi.com; a netlify.app page; jiji.co.ke; oneflare.com.au (2); kandua.com; uelresins.com | Kenya at least 12, Uganda 1 | Kenyan directories own this by printing prices. One contractor network holds 9 of 18 results |
| 4 | epoxy flooring Tanzania Dar es Salaam warehouse factory floor | policrete.com.au; flortek.ca (2); dev.to; a yolasite page; andreoy.gr; epoxyflooringtech.com.au (2); bestcareservices.co.ke (2); innovativegarageflooring.com (3); sunandaglobal.com; mapei.com/gb (an Indonesian project); three spam pages | Tanzania 0, Kenya 2 | With "Tanzania" and "Dar es Salaam" in the query, not one Tanzanian page came back |
| 5 | concrete slab moisture test before epoxy flooring how long new concrete must dry | stonhard.com (3 country versions); industrial.sherwin-williams.com; wagnermeters.com; jlconline.com; plantservices.com; armorpoxy.com; onestopepoxy.com; everestpaints.com | 0 | North American manufacturers. Good but short, temperate-climate, no tables |
| 6 | how long does epoxy flooring last industrial floor lifespan | becosan.com (2); coohom.com; armorgarage.com (2); duraamen (2); flooringclarity.com; ssconcretepolishing.com; surfacesolutionsusa.com | 0 | Figures conflict (see 1.5). Top page sells an alternative to epoxy |
| 7 | epoxy floor thickness guide mm coating vs self levelling vs screed | a spam mirror; flooringclarity.com; two pages.dev landing pages (Malaysia); a model-engineering forum; a 2019 blogspot; asianpaints.com (2); jinyupaint.com; duraamen.com; armorgarage.com; an Egyptian pages.dev guide; indiamart (2); rentry.co; rawlinspaints.com | 0 | **Weakest SERP checked.** Spam, landing pages and marketplaces. No standards body, no classification table |
| 8 | food factory flooring Kenya polyurethane cement screed East Africa | constructionkenyashowcase.com; mbcc.sika.com/en-af; constructionreviewonline.com; mapei.com category and project pages (za, ch, se, au, ca, eg); a Sika UK case study PDF; specificationonline.co.uk (2); ferfa.org.uk (2); creamermedia.com; sherwin-williams; bimobject | Kenya 2 (a showcase page and a trade-press profile) | No East African guide to food-plant floors exists in the results |
| 9 | garage floor epoxy coating Kenya Nairobi car park floor paint | bestcareservices.co.ke (11); four blogspot blogs (2015, 2015, 2017, 2024); ubuy.ke; desertcart.co.ke; achisystems.co.ke; a vercel.app page | Kenya, all | One directory network plus abandoned blogspot sites and import retailers |
| 10 | hospital flooring epoxy vs vinyl operating theatre floor Africa | a spam subdomain; jiji.co.ke listings (3); engineeringnews.co.za (2014 and 2017); miningweekly.com; armorpoxy.com; duraamen (2) | Kenya 3 classified ads; South Africa 3 news items | No independent comparison. Classified ads rank for a specifier question |
| 11 | anti slip epoxy floor coating wet area slip resistance rating pendulum test | a 2020 trade magazine page; hse.gov.uk RR497 (2); a Croatian journal; an Australian fact-sheet PDF; safetydirectamerica.com (5) | 0 | One vendor holds half the results. The regulator's own guidance is findable but not written for buyers |
| 12 | how to prepare concrete floor for epoxy grinding vs shot blasting vs acid etching | xtremepolishingsystems.com; garagejournal.com forum (10); armorpoxy.com; an Australian PDF; a podcast; onestopepoxy.com; granitegaragefloors.com; duraamen | 0 | A hobby forum holds 10 of 17 results. No page quotes what a manufacturer's data sheet requires |
| 13 | epoxy floor vs tiles which is better Kenya Uganda | bestcareservices.co.ke (3); uelresins.com (2); bettercoat.blogspot.com; ssconcretepolishing.com (2); thesharpdaily.com (2); terrazzoltd.blogspot.com; flooringclarity.com (2); olx.com.pk; top4.com.au | Kenya at least 6, Uganda 2 | Regional pages exist and are thin. The Ugandan one is about 500 words from 2021 with no sources (fetched) |
| 14 | sakafu ya epoxy bei rangi ya sakafu Tanzania | indexbox.co.uk; jiji.co.tz/sw (8: seven category pages and one listing); an EACOP tender PDF; jiji.co.ke/sw "Sakafu ya Epoxy" (4); shop.uelresins.com Tanzania page; smartware.co.tz | Tanzania: classifieds only | **No Swahili article about epoxy floors was returned at all.** Only marketplace category labels |
| 15 | how to clean and maintain an epoxy floor | armorpoxy (3); jclicht.com; xtremepolishingsystems.com (2); hychem.com.au (2); sweepsouth.com (2, South Africa); cleanipedia.com/za; imperialdade.com; jinyupaint.com; mirrors and spam | South Africa 3 | Saturated and generic. Advice conflicts (soap, ammonia). Not winnable alone; fold into the lifespan post |
| 16 | how to stop concrete floor dusting warehouse | becosan.com; okumsupply.com; epoxyflooringtech.com.au; thesweeper.com; armorpoxy.com; laticrete.com (2); a Baidu wiki; newpages.asia; everestpaints.com; garagejournal.com; allgaragefloors.com (2); descoalberta.com; polycote.com; civilconcept.com | 0 | Vendors of densifiers and sweepers. Mid-strength |
| 17 | polyurethane cement vs epoxy floor food processing hot water thermal shock | foodprocessing.com.au (2); a pages.dev landing page; fastlineservices.co.uk; penncoatinc.com (2); fponthenet.net; jinyupaint.com (3 language versions) | 0 | The best page is a 650-word vendor-written article from 2021 with no table (fetched). Temperature claims conflict between vendors |
| 18 | can you put epoxy flooring over existing tiles | a sponsored newspaper piece; spam (2); industrial.sherwin-williams.com; stonhard.com; garagejournal.com (5); mirrors; resin-expert.com; flooringclarity.com (2); four US contractor blogs | 0 | Split verdict: blogs say yes, the manufacturer page says remove ceramic tile first |

**Across all 18 queries: no Tanzanian flooring supplier or applicator
page, no Swahili article, and no page that quotes a manufacturer data
sheet limit with its source.** The only .co.tz results were Jiji pages
and one retailer tag page, all on the Swahili query. nabaki.co.tz did not appear (report 15 found the same over 29
queries; it has no blog and no flooring page). Sika Tanzania did not
appear for any informational query here; report 09 measured its flooring
page at about 250 words.

### 1.3 Fetches that failed

| URL | Result | Consequence |
|---|---|---|
| https://www.astm.org/f2170-19a.html | HTTP 403 | ASTM F2170 is cited only through secondary pages (Sherwin-Williams, Wagner Meters). Probe depths are **not verified against the standard** |
| https://www.icri.org/page/csp-chips | HTTP 403 | Concrete Surface Profile (CSP) numbers are **not verified**. The surface-preparation post must use Mapei's own wording until someone reads ICRI 310.2R |
| https://www.hse.gov.uk/research/rrhtm/rr497.htm and the PDF | HTTP 404 | HSE research report RR497 (slip characteristics of epoxy floors) exists in search results but could not be read. Not used |
| https://www.hse.gov.uk/pubns/geis2.pdf | fetched as a PDF and read page by page | Used. Tables 1 to 4 quoted from pages 3, 4 and 6 |

### 1.4 Question bank (headings on ranking pages - not Google PAA)

Report 09 section 5 already holds the Ugandan and South African FAQ
lists. New on 2026-11-06:

- "How soon can you epoxy coat new concrete?" (title, a manufacturer blog,
  query 5)
- "What if there are high moisture levels?" (same page)
- "Which floors should not be epoxy coated?" (title, a manufacturer
  article, query 18)
- "What really determines how long an epoxy floor lasts" (heading, query 6)
- "When repainting stops being a sensible option" (heading, query 6)
- "What are the challenges in the African market in terms installation
  and maintenance?" (interview heading, Construction Review, updated
  2024-10-24, about 400 words)
- "Has anyone applied this paint over a cement garage floor with a sealer
  coating without doing all the recommended acid treatment" (a buyer's
  unanswered question on a Kenyan import-retailer listing, query 9)
- "Is epoxy flooring cheaper than tile" (title, query 13)

### 1.5 What competitors say that Sahihi must not repeat

Found on ranking pages, uncited, mutually inconsistent. Listed so writers
recognise them and leave them out.

- Lifespan: "5 to 10 years", "3 to 5 years", "10 to 15 years", "up to 20
  years" and "more than 30 years" in homes, all from sellers, none with a
  source (queries 4, 6, 13).
- Maintenance and energy savings percentages on a Kenyan directory page,
  with standards named and nothing linked (fetched).
- Service temperature ratings for polyurethane cement that differ by more
  than 100 degrees between vendors (query 17).
- Flexural strength "of more than 10,000 psi" with no test standard
  (Ugandan page, fetched).

### 1.6 Swahili: what the evidence supports

| Term | Evidence | Verdict |
|---|---|---|
| sakafu ya epoxy | Jiji Kenya's Swahili interface names its category "Sakafu ya Epoxy" (https://jiji.co.ke/sw/165-epoxy-flooring). Returned again on 2026-11-06 | Real phrase. Demand unverified. It is an interface label, not proof that people type it |
| vifaa vya sakafu | Jiji Tanzania Swahili category "Vifaa vya Sakafu" (https://jiji.co.tz/sw/165-flooring-materials) | Real, generic |
| hardener, resin, epoxy, concrete, putty | Jiji Tanzania keeps these English words inside Swahili category pages (https://jiji.co.tz/sw/building-materials/hardener, https://jiji.co.tz/sw/manufacturing-materials-and-tools/resin) | Product words stay in English |
| rangi ya sakafu, bei ya epoxy | Typed into the query; no returned page used either phrase | **Not verified.** Same finding as report 09 |
| Swahili words for blistering, peeling, slippery, dusty | None found. `SEO-STRATEGY.md` section 3 records "rangi kubanduka" (paint peeling) for walls from report 13 | **Not verified for floors.** Ask sales staff what customers write on WhatsApp before any Swahili FAQ is drafted |

Working rule, unchanged from the strategy: English posts, with a short
Swahili question-and-answer block written by a native speaker on the
posts most likely to reach homeowners and small contractors (posts 1, 6,
12 and 14 below).

---

## 2. Candidate posts (14)

Grades: E easy, M medium, H hard, for a new domain with a well-made page,
judged from the result lists above. All grades are **(inferred)**; none
is a measured Tanzanian position. "Row" says whether `SEO-STRATEGY.md`
section 5.4 already has a row for the post. A post with no row needs one
added before it is built (project rule).

| # | Working title (60 characters or fewer) | Primary query | Secondary queries and questions | Intent | Who ranks now, and the weakness | Why Sahihi can win | Grade | Row |
|---|---|---|---|---|---|---|---|---|
| 1 | Why epoxy floors blister and peel, and how to prevent it | why epoxy floor bubbles and peels | epoxy flooring humidity; epoxy floor peeling off concrete; pinholes in epoxy floor; epoxy floor blisters after rain; can you epoxy a damp floor; what is dew point in epoxy flooring | Problem-solving, pre-purchase trust | US, Malaysian and Australian vendor blogs and press-release sites (query 2). None cites a data sheet. None mentions a humid coastal climate | Data sheets in the repo print the exact limits (4% moisture, 75% air humidity, 3°C above dew point, 24 hours' protection from water). Dar es Salaam's humidity table gives a local hook no ranking page has. Triblock P is a stocked answer for damp slabs | E-M | Yes: row 8 "Resin floors and Dar es Salaam humidity". Recommend widening its primary query to the failure wording and keeping "epoxy flooring humidity" as a variant |
| 2 | Epoxy, polyurethane or PU cement: which factory floor? | epoxy vs polyurethane flooring | PU concrete vs epoxy for food plants; polyurethane cement flooring; which floor resists hot water; does epoxy yellow in the sun; aromatic vs aliphatic polyurethane; epoxy or PU for cold rooms | Comparison, specifier | Contractor blogs; one manufacturer page of about 250 words with no table (fetched); a 650-word vendor-written trade article from 2021 (fetched). Two-way comparisons only: polyurethane cement is missing or blurred into "urethane" | A three-way table built from three stocked data sheets, with the thermal-shock figures by thickness that only the Mapefloor CPU+/MF sheet prints. Generic head term is H; the three-way and "Tanzania" variants are E | H generic, E with geo and for the three-way variants | Yes: row 3 |
| 3 | How thick should an epoxy floor be? Coating to screed | epoxy floor thickness | how many mm is self levelling epoxy; floor coating vs screed; epoxy coating vs epoxy flooring; how thick is PU cement screed; thickness for forklift traffic; epoxy paint vs self levelling epoxy | Informational, specification | Spam mirrors, landing pages, marketplaces, one paint-maker blog (query 7). No standards body, no classification | FeRFA's eight types with duty and thickness are public and nobody in the SERP uses them. Sahihi stocks one product in each of four thickness bands, each with consumption per square metre from its data sheet | E | No. New row needed |
| 4 | How soon can you epoxy new concrete? Moisture tests | how soon can you epoxy new concrete | concrete moisture test before epoxy; how long must a slab dry before coating; plastic sheet test concrete; relative humidity test slab; 28 days concrete before epoxy; can you coat green concrete | How-to, pre-purchase | Three North American manufacturer articles of 650 to 1,500 words (fetched). Good, short, temperate. No tables, no rainy-season scheduling, thresholds differ from the Mapei sheets | A decision table that sets each stocked system's own waiting rule side by side (epoxy: 4% maximum; PU cement: 7 days and visually dry; Triblock P for damp slabs) plus masika and vuli scheduling | M | No (report 09 J7). New row needed |
| 5 | Anti-slip epoxy floors: grades, tests and trade-offs | anti slip epoxy floor | non slip floor coating for wet areas; R10 vs R11 flooring; pendulum test value 36; quartz broadcast epoxy floor; slip resistant floor for commercial kitchen; ramp anti slip coating | Informational, safety and compliance | One vendor holds five of ten results; the regulator's sheet is technical and not written for buyers (query 11) | The HSE tables are quotable; the Mapefloor FC 200 ME sheet gives a non-slip build-up with broadcast rates; Quartz ME comes in five grades. Nobody joins the test numbers to an actual build-up | M | No. New row needed |
| 6 | What drives the cost of an epoxy floor in Tanzania | epoxy flooring cost Tanzania | epoxy flooring price per square meter Tanzania; why is epoxy flooring expensive; how much epoxy per square metre; how to compare epoxy flooring quotes; epoxy floor paint vs epoxy flooring cost | Commercial investigation | For Kenya: one directory network with 9 of 18 results, all printing prices (query 3). For Tanzania: South African, Australian and Ugandan cost guides (report 09, query 5). No Tanzanian page | Sahihi cannot print prices, so it answers the question underneath: kilograms per square metre by system, from data sheets, with a material calculator and a quote checklist. No ranking page shows the quantities | E | No (report 09 J1). New row needed. Must not collide with `/price-list`, which owns "Mapei price list Tanzania" |
| 7 | Grinding, shot blasting or acid: prep before epoxy | how to prepare concrete floor for epoxy | grinding vs shot blasting; acid etching before epoxy; do I need to grind before epoxy; removing laitance; primer for epoxy floor; how strong must concrete be for epoxy | How-to | A hobby forum holds 10 of 17 results; the rest are tool and kit sellers (query 12) | Four Mapei sheets say the same thing in the same words (mechanical preparation, 25 N/mm² compressive, 1.5 N/mm² tensile, vacuum, primer). A page that quotes them is more authoritative than a forum | M | No. New row needed. CSP figures blocked until ICRI is read |
| 8 | How long does an epoxy floor last, and how to keep it | how long does epoxy flooring last | epoxy floor lifespan warehouse; how to clean epoxy floor; when to recoat an epoxy floor; can epoxy floor be repaired; does epoxy scratch | Informational | Vendor pages with conflicting uncited ranges; the top result sells an alternative (query 6). Cleaning SERP saturated (query 15) | Honest framing: no standard gives a number, and here is what decides it. Uses abrasion, hardening and cleaning statements from the data sheets. Regional pages claim "30 years" with no source | M-H | No. New row needed |
| 9 | Dusty warehouse floor? Coatings that stop concrete dust | warehouse floor coating Tanzania | how to stop concrete floor dusting; dust proof floor coating; forklift floor coating; line marking on warehouse floor; epoxy floor for godown | Problem-solving, commercial | Densifier and sweeper vendors (query 16); for "+ Tanzania" foreign contractors and Kenyan directories (query 4) | Local query is empty. Mapefloor FC 200 ME lists warehouses, factories, hangars, workshops and garages as uses, with traffic times | E with geo, M generic | No (report 09 J4). New row needed. **Do not promise a floor hardener: stock is unconfirmed (report 09 open item 5)** |
| 10 | Food factory floors: brewery, dairy and abattoir guide | food factory flooring requirements | brewery floor coating; dairy floor lactic acid; abattoir floor Tanzania; cold room floor coating; HACCP flooring; commercial kitchen floor coating | Informational, specifier | Global manufacturers and one vendor-written trade article; nothing East African (queries 8 and 17) | Mapefloor CPU+/MF's sheet lists the sectors by name, with HACCP, ISO 846 and thermal-shock figures. Codex wording on floors is quotable | E with geo | No (report 09 J3). New row needed. **Cannibalisation risk** with the planned pillar `/solutions/epoxy-flooring/polyurethane`: keep this post informational and sector-led, and let the pillar own "polyurethane flooring food factory" |
| 11 | Hospital and lab floors: seamless resin or vinyl? | hospital flooring Tanzania | operating theatre floor epoxy; laboratory floor coating; epoxy vs vinyl hospital floor; antibacterial floor coating; coved skirting hospital | Comparison, specifier | Classified ads and decade-old South African trade news (query 10) | Two stocked systems list hospitals, laboratories, sterile and aseptic rooms as uses. Links to registry row 10 (GMP flooring) | E | No (report 09 J5). New row needed. Sahihi stocks no vinyl sheet that is confirmed, so the comparison must stay neutral |
| 12 | Garage and workshop floors: epoxy paint or coating? | garage floor coating Tanzania | epoxy garage floor; epoxy paint vs epoxy coating; workshop floor oil resistant; one part epoxy paint; how many coats of epoxy on a garage floor | Commercial, homeowner and small business | One Kenyan directory network, abandoned blogspot blogs, import retailers selling foreign kits (query 9) | A stocked, locally available coating with a per-coat rate, against imported kits with no local support | E | No (report 09 J6). New row needed |
| 13 | Car park deck coatings: what each layer does | car park floor coating layers | car park top deck coating; aromatic vs aliphatic topcoat; crack bridging car park membrane; ramp anti slip coating; basement car park floor paint | Informational, specifier | Global manufacturers only (report 09, query 11) | Mapefloor PU 410 and Mapefloor Finish 450 ME sheets give the layer build-up, broadcast rates and crack-bridging classes | E with geo | No (report 09 J15). New row needed. **Cannibalisation risk** with the planned pillar `/solutions/epoxy-flooring/car-park`. No data sheet for Mapefloor Finish 415 ME is in the repo, so no figure may be quoted for it |
| 14 | Can you epoxy over tiles? When it works, when it fails | can you epoxy over tiles | epoxy floor vs tiles; epoxy over old terrazzo; resin floor over ceramic tiles; epoxy vs tiles for a factory | Informational, homeowner and factory owner | Split: blogs say yes, a manufacturer article says remove ceramic tile (query 18). Regional "epoxy vs tiles" pages are thin and uncited (query 13) | Honest, sourced answer: Mapefloor CPU+/MF's sheet says not on ceramic "with no appropriate specific preparation"; Triblock P's sheet names old ceramic and terrazzo floors with residual humidity as a use | M | No (report 09 J12 covers the "vs tiles" half). New row needed |

**Recommended publishing order:** 1, 3, 6, 2, 4, 5, then 12, 9, 14, 7,
10, 11, 13, 8. Posts 1 and 2 already have registry rows. Post 3 has the
weakest SERP. Post 6 has the highest buying intent.

**Internal structure:** every post links up to the pillar
`/solutions/epoxy-flooring` (when built) and to `/mapei/resin-flooring`,
across to two sibling posts, and down to the product pages named in
section 3. Posts 1 and 4 must link to each other and split the ground
cleanly: post 1 is diagnosis (what went wrong), post 4 is procedure (how
to test and when to start).

---

## 3. The best six: outlines, facts, links and visuals

### Source keys used in the facts tables

Each key is a manufacturer data sheet. Full URLs are in section 5. Local
copies are served at `/tds/mapei/<slug>.pdf`.

| Key | Data sheet | Edition |
|---|---|---|
| TDS-FC200 | Mapefloor FC 200 ME | 6782-8-2023 (UAE) |
| TDS-I300 | Mapefloor I 300 SL ME | 6797-6-2019 (UAE) |
| TDS-CPU | Mapefloor CPU+/MF | 8990-11-2023-I en (IT) |
| TDS-SN | Primer SN | 2901-5-2023 (UAE) |
| TDS-PU410 | Mapefloor PU 410 | 2065-5-2026 en (IT) |
| TDS-F450 | Mapefloor Finish 450 ME | 8913-10-2022-I (UAE) |
| TDS-TRI | Triblock P | 2043-11-2022 gb |
| TDS-QTZ | Quartz ME | 181/9302/9303/9304-9-2024 (UAE) |
| TDS-XSL | X-Tech EpoxyFloor SL | no edition printed |
| TDS-XGP | X-Prime GP | no edition printed |

Other keys: **FeRFA** = https://www.ferfa.org.uk/standard/ ; **HSE** =
https://www.hse.gov.uk/pubns/geis2.pdf ; **DAR** =
https://en.wikipedia.org/wiki/Dar_es_Salaam (climate table citing NOAA
and Deutscher Wetterdienst, 1991 to 2020) ; **SW-GREEN** = the
Sherwin-Williams green-concrete article ; **WAGNER** = the Wagner Meters
drying article ; **STON** = the Stonhard article ; **CODEX** =
https://www.fao.org/4/y1579e/y1579e02.htm.

Product page paths: Mapei flooring items are at
`/mapei/resin-flooring/<slug>`, Triblock P at
`/mapei/primers-levelling/triblock-p`, Eporip at
`/mapei/concrete-repair/eporip`, X-Calibur items at `/x-calibur/<slug>`.

**A note on 3D.** The project rule is to flag heavy things before
building them, Three.js above all. Every "interactive or 3D" idea below
is specified so it can be built first as layered SVG with CSS transforms
(no library). A true 3D model is an upgrade the owner approves
separately.

---

### Post 1 - Why epoxy floors blister and peel, and how to prevent it

Slug `/blog/why-epoxy-floors-blister-and-peel`. Fills registry row 8.

**Outline**

- H2 The short answer: water, air or dirt under the resin
- H2 Five failures and what each one looks like
  - H3 Blisters weeks or months later: moisture rising through the slab
  - H3 A dull, sticky or whitened surface: coating in humid air or below the dew point
  - H3 Pinholes and craters on day one: open pores in the primer coat
  - H3 Sheets lifting cleanly: laitance, dust, oil or no primer
  - H3 Soft patches that never harden: part-mixed kits or thinning
- H2 Why the coast is harder on resin floors
  - H3 Humidity in Dar es Salaam, month by month
  - H3 Dew point in plain words, and the 3°C rule
  - H3 Masika and vuli: when a new slab gets rewetted
- H2 What the data sheets actually require
- H2 Prevention checklist before the first drum is opened
- H2 If the slab is damp: the options
  - H3 Wait and retest
  - H3 An epoxy-cement primer made for damp substrates
  - H3 A system whose sheet tolerates younger concrete
- H2 Can a blistered floor be repaired?
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| Mapefloor FC 200 ME: "Do not apply the product directly on substrates with moisture content higher than 4% and/or with capillary rising damp" | TDS-FC200 |
| Mapefloor FC 200 ME: "The air's relative humidity should not be greater than 75%" | TDS-FC200 |
| Mapefloor FC 200 ME: "Protect the applied coating from water for at least 24 hours after application" | TDS-FC200 |
| Mapefloor I 300 SL ME and Primer SN: moisture maximum 4%, no capillary rising damp "(check by testing it with a sheet of polythene)" | TDS-I300, TDS-SN |
| Mapefloor I 300 SL ME and Primer SN: "The temperature of the substrate must be at least 3°C higher than the dew-point temperature" | TDS-I300, TDS-SN |
| Mapefloor I 300 SL ME: "Make sure there are no open pores on the surface of the substrate, otherwise, air bubbles could escape and form pinholes in the self-levelling finishing coat" | TDS-I300 |
| Mapefloor I 300 SL ME: back-roll "with a spiked roller while the product is still wet ... to remove any air entrapped in the product" | TDS-I300 |
| Mapefloor FC 200 ME: "Do not mix partial quantities of the components to avoid mixing errors; the product may not harden correctly"; "Do not dilute ... with solvent or water" | TDS-FC200 |
| Substrate must have compressive strength of at least 25 N/mm² and tensile strength of at least 1.5 N/mm²; prepare by "shot-blasting or grinding with a diamond disk" to remove "cement laitance" | TDS-FC200, TDS-I300, TDS-SN |
| Mapefloor CPU+/MF: substrate temperature "at least 3°C above the dew point"; "The relative humidity of the air must be lower than 80%" | TDS-CPU |
| Mapefloor PU 410: "The air relative humidity must be max. 80%"; moisture maximum 4% | TDS-PU410 |
| Triblock P: "Three-component, epoxy-cementitious primer for damp substrates"; used for "treating damp concrete surfaces before applying protective and anti-corrosion epoxy products, or polyurethane dressing systems which are impermeable to water vapour". Not on "surfaces with free-standing water". Further coats between 24 hours and 7 days | TDS-TRI |
| FeRFA substrate limits by hygrometer: epoxy "Not exceed 75% RH"; polyurethane "Not exceed 85% RH" | FeRFA |
| Dar es Salaam mean relative humidity by month: Jan 77, Feb 76, Mar 80, Apr 84, May 81, Jun 78, Jul 77, Aug 76, Sep 75, Oct 76, Nov 78, Dec 78; year 79. Long rains April and May, short rains November and December | DAR |
| Dar es Salaam mean daily maximum 29.7 to 32.8°C; mean daily minimum 19.1 to 24.9°C | DAR |

Writer's cautions: (a) the 75% figure for FC 200 ME is an air limit at
the time of application; monthly *means* at or above 75% do not mean
there is never a dry enough hour, and hourly data was not fetched;
(b) no slab reading exists for any Tanzanian site; (c) do not print how
to measure "4%" (section 1.1).

**Links.** Mapefloor FC 200 ME, Mapefloor I 300 SL ME, Primer SN,
Triblock P, Mapefloor CPU+/MF, Eporip (crack filling named in the
sheets), Quarzo 0.5/1.2. Pillar `/mapei/resin-flooring`. Sibling posts 4
and 7.

**Visuals**

- *Data table:* "Limits at a glance" - one row per stocked system
  (FC 200 ME, I 300 SL ME, CPU+/MF, PU 410, Finish 450 ME), columns for
  maximum substrate moisture, air humidity limit, dew-point rule,
  application temperature range, time to protect from water. Blank cells
  stay blank where a sheet prints nothing (the FC 200 ME sheet, for
  example, prints an air humidity limit and no dew-point rule).
- *Diagram:* a cross-section of a slab on ground with five numbered
  failure paths (rising vapour lifting a blister, condensation film on a
  cold slab, air escaping a pore, a laitance layer shearing, a soft
  unmixed patch). SVG, one colour per cause.
- *Interactive:* a dew-point checker. Inputs: air temperature, relative
  humidity, slab surface temperature. Output: the dew point, the margin
  against the 3°C rule, and whether air humidity is over the limit of
  the chosen product. The dew-point formula and its constants must be
  taken from a cited source; none was fetched in this research. A second
  element: the monthly humidity table drawn as a 12-bar chart with each
  product's air limit as a line.

---

### Post 2 - Epoxy, polyurethane or PU cement: which factory floor?

Slug `/blog/epoxy-vs-polyurethane-vs-pu-cement`. Fills registry row 3.

**Outline**

- H2 Three resins, three jobs
- H2 Side by side: what the data sheets say
- H2 Epoxy: hard, seamless, for dry and cleanable areas
  - H3 Where it is the right answer
  - H3 Where it is not: damp slabs, hot wash-down, direct sun
- H2 Polyurethane: elastic, crack-bridging, UV-stable when aliphatic
  - H3 Car park decks and outdoor areas
  - H3 Aromatic and aliphatic in equatorial sun
- H2 Polyurethane cement: heat, thermal shock and wet processes
  - H3 Thermal shock by thickness
  - H3 Why it goes down on younger concrete
  - H3 What it gives up: colour stability
- H2 Which one by building: a decision table
- H2 Combining them: epoxy body, polyurethane finish
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| Mapefloor I 300 SL ME: epoxy, 2 to 4 mm; compressive strength 50 N/mm² (ASTM C579-01), flexural 28 N/mm², Taber abrasion 58 after 7 days; application +8 to +35°C; set to foot traffic about 24 hours; full hardening about 7 days. Uses printed: chemical and pharmaceutical, foodstuffs, laboratories, sterile rooms, hospitals, mechanised warehouses, shopping centres | TDS-I300 |
| Mapefloor I 300 SL ME: not on damp substrates or substrates with capillary rising damp | TDS-I300 |
| Mapefloor FC 200 ME: "Coatings made from Mapefloor FC 200 ME may change colour or fade if exposed to sunlight but this has no effect on its performance characteristics" | TDS-FC200 |
| Mapefloor CPU+/MF: polyurethane-cement mortar, 3 to 6 mm; "thermal shock resistance up to +80°C, with operating temperatures range from -20°C to +70°C, depending on the thickness" | TDS-CPU |
| Mapefloor CPU+/MF thermal shock by thickness: 3 mm, -10°C up to +60°C; 4 mm, -15°C up to +70°C; 6 mm, -25°C up to +80°C | TDS-CPU |
| Mapefloor CPU+/MF: "Do not apply ... on wet substrates or on concrete younger than 7 days"; "The substrate surface must appear visually dry" | TDS-CPU |
| Mapefloor CPU+/MF: recoating 12 hours, light traffic 24 hours, complete hardening 4 to 5 days at 23°C; pot life 15 minutes at +23°C | TDS-CPU |
| Mapefloor CPU+/MF: EN 13813 classes AR0.5, C50, F15; "Resistant to fungi and bacteria, certified according to ISO 846"; "Fulfills HACCP requirements"; slip resistance (EN 13036-4) "Class I (wet indoor surfaces) Class II (dry indoor surfaces)" | TDS-CPU |
| Mapefloor CPU+/MF: "exposed to UV lights could lead to noticeable colour changes; this phenomenon does not affect the performance of the coating in any way" | TDS-CPU |
| Mapefloor CPU+/MF: Primer SN may be used under it "only for fully cured and dry substrates with a humidity content < 4% and when no thermal shocks are expected during the service life of the floor" | TDS-CPU |
| Mapefloor PU 410: polyurethane binder for car park systems; elongation at break 80%; "good crack-bridging capability even at low temperatures up to -10°C"; EN 1062-7 static class A3, dynamic class B2 | TDS-PU410 |
| Mapefloor Finish 450 ME: "Two-component, aliphatic, elastic coloured polyurethane finish resistant to wear and UV rays"; "ideal for use in external environments" | TDS-F450 |
| Mapefloor FC 200 ME: "If required Mapefloor FC 200 ME can be overcoated with Mapefloor Finish 450 ME" | TDS-FC200 |
| FeRFA substrate moisture limits: epoxy 75% RH, polyurethane 85% RH. Minimum substrate strength: epoxy 26 N/mm² compressive and 1.5 N/mm² tensile; polyurethane 30 to 35 N/mm² and 1.7 N/mm² | FeRFA |
| Trade-press statements, vendor-written, use with attribution only: "Epoxies also don't handle cold or thermal shock conditions very well"; polyurethane cements have "good resistance to thermal cycling and excellent chemical resistance, especially to lactic acid" | https://www.foodprocessing.com.au/content/the-food-plant/article/flooring-solutions-a-guide-for-the-food-and-beverage-manufacturing-industry-893051731 |
| Codex: "the surfaces of walls, partitions and floors should be made of impervious materials with no toxic effect in intended use"; "floors should be constructed to allow adequate drainage and cleaning" (CAC/RCP 1-1969, Rev. 3 (1997), Amended 1999, section 4.2.2; a later revision exists and its numbering was not checked) | CODEX |

Writer's cautions: no chemical-resistance comparison is possible from
the extracts (the CPU+/MF sheet points to a separate table; the epoxy
sheets print none). Do not rank the three on chemicals. Do not rank them
on cost. No data sheet for Mapefloor Finish 415 ME is in the repo.

**Links.** Mapefloor I 300 SL ME, Mapefloor FC 200 ME, Mapefloor CPU+/MF,
Mapefloor PU 410, Mapefloor Finish 450 ME, Primer SN, X-Tech EpoxyFloor
SL1. Sibling posts 3, 10 and 13. Registry row 10 (GMP flooring) when
published.

**Visuals**

- *Data table:* the three-way comparison, one stocked product per
  column, rows exactly as printed: thickness, application temperature,
  youngest substrate allowed, substrate moisture limit, thermal shock,
  time to light traffic, full hardening, behaviour in sunlight, sectors
  named on the sheet.
- *Diagram:* the thermal-shock ladder for Mapefloor CPU+/MF: three bars
  (3, 4 and 6 mm) on a temperature axis from -25 to +80°C, with a hot
  wash-down and a cold room marked on the axis. Only the three printed
  ranges are drawn.
- *Interactive:* a "which resin" selector with four questions (wet or
  dry process, hot liquids or not, sun or no sun, age and dryness of the
  slab). Each answer greys out the systems whose data sheet rules them
  out and shows the sentence from the sheet that does it. Ends with a
  WhatsApp hand-off carrying the answers.

---

### Post 3 - How thick should an epoxy floor be? Coating to screed

Slug `/blog/epoxy-floor-thickness-guide`. Needs a new registry row.

**Outline**

- H2 Thickness is the specification, not a detail
- H2 The eight resin floor types, from 150 microns to over 6 mm
- H2 Coating, self-levelling or screed: what the words mean
  - H3 Floor coating (rolled, under 1 mm)
  - H3 Self-levelling or flow-applied (about 1 to 4 mm)
  - H3 Heavy-duty flowable and screed (4 mm and above)
  - H3 A cement self-leveller is not a resin floor
- H2 What thickness buys: load, impact, heat, and hiding a rough slab
- H2 Thickness and material: kilograms per square metre
- H2 What it costs you to go thinner than the job needs
- H2 Picking a band by traffic
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| FeRFA type 1 Floor Seal, light duty, 150 µm; type 2 Floor Coating, light to medium, 150 to 300 µm; type 3 High Build Floor Coating, medium, 300 to 1000 µm; type 4 Multi-layer Flooring, medium to heavy, over 2 mm; type 5 Flow Applied Flooring, medium to heavy, 2 to 3 mm; type 6 Resin Screed Flooring, medium to heavy, over 4 mm; type 7 Heavy Duty Flowable Flooring, heavy to very heavy, 4 to 6 mm; type 8 Heavy Duty Resin Flooring, very heavy, over 6 mm | FeRFA |
| FeRFA surface regularity under a 2 m straightedge: SR1 3 mm, SR2 5 mm (normal standard for commercial and industrial use), SR3 10 mm | FeRFA |
| Mapefloor FC 200 ME: "High build epoxy resin floor coating"; 0.32 kg/m² per coat in the roll-coat system, two coats; 25.5 kg kit. **The sheet prints no film thickness** | TDS-FC200 |
| X-Tech EpoxyFloor SL1: "thickness: 1 to 1.5mm"; "17m2 per 17L pack at 1mm"; compressive strength above 70 MPa (ASTM D695) | TDS-XSL |
| Mapefloor I 300 SL ME: "may be applied in layers from 2 to 4 mm thick"; 3.7 kg/m² at an average thickness of 2 mm; one 47 kg kit yields 25.4 litres of mixed material. The title line of the same sheet says "from 1 to 4 mm": quote the 2 to 4 mm figure and log the conflict | TDS-I300 |
| Mapefloor CPU+/MF: 3 to 6 mm; about 5.5 kg/m² at 3 mm, about 7 kg/m² at 4 mm, about 10 kg/m² at 6 mm; scratch coat about 1.7 kg/m² at 1 mm. Not linear per millimetre | TDS-CPU |
| Mapefloor CPU+/MF: anchoring grooves cut in the concrete "must be approximately double the thickness" of the mortar | TDS-CPU |
| Primer SN: 0.3 to 0.70 kg/m² per coat; up to 50% by weight of quartz sand may be added "to even out rough surfaces" | TDS-SN |
| X-Prime GP: "5m² per liter at 200 microns", "10m² per liter at 100 microns"; volume solids 90% | TDS-XGP |

Arithmetic of mine from the figures above, to be shown as "calculated",
and checked against `src/config/mapei-coverage.ts` before publishing: one
47 kg kit of Mapefloor I 300 SL ME covers about 12.7 m² at 2 mm; one
25.5 kg kit of Mapefloor FC 200 ME covers about 39.8 m² for both coats
at 0.32 kg/m² each; one Mapefloor CPU+/MF set (28.78 kg by adding the
printed pack weights) covers about 5.2 m² at 3 mm and about 2.9 m² at
6 mm.

Writer's cautions: mapping a stocked product to a FeRFA type is my
inference, since no Mapei or X-Calibur sheet in the repo states a FeRFA
type. Say "falls in the thickness band of", never "is a FeRFA type 5".
The pillar `/solutions/epoxy-flooring/self-levelling` owns "self
levelling screed Tanzania" (cement levellers such as Ultraplan Eco 20):
this post links to it and does not compete.

**Links.** Mapefloor FC 200 ME, X-Tech EpoxyFloor SL1, Mapefloor I 300 SL
ME, Mapefloor CPU+/MF, Primer SN, X-Prime GP, Quarzo 0.5/1.2, Ultraplan
Eco 20 and Ultraplan Contract (for the "not a resin floor" section).
Each product page's coverage calculator.

**Visuals**

- *Data table:* FeRFA's eight types (type, name, duty, thickness) with a
  fifth column, "stocked product in this band", filled only where a data
  sheet thickness places it.
- *Diagram:* a to-scale thickness ladder: eight bars from 0.15 mm to
  over 6 mm drawn at true relative height beside a 1 mm reference (the
  edge of a coin is not sourced; use a ruler graphic). Most readers have
  never seen how thin a coating is beside a screed.
- *Interactive or 3D:* an exploded floor build-up the reader can rotate
  and pull apart: slab, primer, body coat, broadcast sand, finish. A
  thickness slider (0.3 mm to 6 mm) swaps the build-up and updates
  kilograms per square metre and square metres per kit from the data
  sheet points only (no interpolation between printed points for
  CPU+/MF). This is the "Floor System Builder" from report 09 section 9,
  reduced to one variable. Build as layered SVG first; flag before any
  Three.js.

---

### Post 4 - How soon can you epoxy new concrete? Moisture tests

Slug `/blog/how-soon-can-you-epoxy-new-concrete`. Needs a new registry
row (report 09 J7).

**Outline**

- H2 Cured is not the same as dry
- H2 The usual rule, and why a calendar is not a test
- H2 Three tests, from free to instrumented
  - H3 Plastic sheet test
  - H3 Calcium chloride test
  - H3 In-slab relative humidity probe
- H2 What each stocked system asks for before it goes down
- H2 Slabs on ground, rain and the two wet seasons
  - H3 Rising damp is a different problem from a young slab
  - H3 Planning a pour and a coating around masika and vuli
- H2 When the programme cannot wait
  - H3 A primer made for damp substrates
  - H3 A system that accepts 7-day concrete
- H2 A site record worth keeping (date, readings, weather)
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| "Standard specifications recommend a minimum 28 day cure period for 'green concrete' before an epoxy floor coating" (manufacturer article, undated, about 650 words) | SW-GREEN |
| Test methods named: ASTM F2170 (in-slab relative humidity), ASTM F1869 (calcium chloride), ASTM D4263 (plastic sheet) | SW-GREEN |
| "A result of less than 80% RH is generally accepted by most resinous flooring manufacturers"; calcium chloride "less than 3 pounds per 1,000 square feet in 24 hours"; plastic sheet of 12 by 12 inches or larger, read after 24 hours | SW-GREEN |
| The same article says some systems "can be successfully installed on 'green' concrete as early as 7 days after being poured" (a general statement about that maker's range, not about any stocked product) | SW-GREEN |
| "Concrete takes about 28 days to dry for every inch of slab thickness, which is the general rule of thumb" (unattributed on the page; treat as a rule of thumb, not a standard) | WAGNER |
| RH probe depth: 40% of slab thickness for slabs drying from one side, 20% for slabs drying from both sides (stated by the page as the F2170 method; **not verified against the standard**, section 1.3) | WAGNER |
| "The ambient relative humidity is important because it controls whether water can evaporate from the slab" | WAGNER |
| Curing "can take as long as 60 days" depending on air temperature and humidity (manufacturer blog, 2022) | STON |
| FeRFA: epoxy substrate not to exceed 75% RH, polyurethane 85% RH, by hygrometer. Note this differs from the 80% in the US article: quote both with their sources | FeRFA |
| Mapei epoxy sheets: substrate moisture maximum 4%, no capillary rising damp (all three); polythene sheet check (I 300 SL ME and Primer SN only) | TDS-FC200, TDS-I300, TDS-SN |
| Primer SN: surface "must be preferably dry or slightly damp" and also "moisture ... must be a maximum of 4%". The sheet pulls two ways; quote the 4% | TDS-SN |
| Mapefloor CPU+/MF: not on "concrete younger than 7 days"; substrate "must appear visually dry"; no capillary rising damp | TDS-CPU |
| Triblock P: for "highly-compact cementitious substrates with a residual humidity content higher than the level recommended for laying wooden, resilient and resin floors"; 250 to 300 g/m² per coat on non-absorbent surfaces, 400 to 500 g/m² on absorbent, two coats; next application from 24 hours to 7 days | TDS-TRI |
| Dar es Salaam: long rains April and May, short rains November and December; annual rainfall 1,117.4 mm; monthly mean humidity 75 to 84% | DAR |

Writer's cautions: three thresholds from three sources use three
different measures (percent moisture, percent RH in the slab, pounds of
vapour). They cannot be converted into each other and the post must say
so. The manufacturer's own sheet governs. Whether RH probes or calcium
chloride kits can be bought or hired in Tanzania is **not verified**:
ask the owner before the post tells readers to use one.

**Links.** Triblock P, Primer SN, Mapefloor CPU+/MF, Mapefloor I 300 SL
ME, Mapefloor FC 200 ME, X-Prime GP. Sibling posts 1 and 7.

**Visuals**

- *Data table:* "What each system needs from the slab": product, minimum
  age printed, maximum moisture printed, damp allowed or not, primer
  named on the sheet. A second small table: three tests, what each
  measures, what it costs in time, what it cannot tell you.
- *Diagram:* slab cross-section showing why the surface reads drier than
  the middle: a moisture gradient, the two probe depths (40% and 20%),
  and the ground under a slab with and without a membrane.
- *Interactive:* a readiness planner. Inputs: pour date, slab thickness,
  indoors or exposed, chosen system. Output: the earliest date the
  chosen data sheet allows, the test to run first, and a flag if the
  window falls in April-May or November-December. It must present the
  result as "earliest the sheet allows, subject to a test", never as
  clearance to coat.

---

### Post 5 - Anti-slip epoxy floors: grades, tests and trade-offs

Slug `/blog/anti-slip-epoxy-floors`. Needs a new registry row.

**Outline**

- H2 A smooth resin floor and water
- H2 How slip resistance is measured
  - H3 The pendulum test and what 36 means
  - H3 Surface roughness (Rz)
  - H3 R ratings from the ramp test, and why R9 or R10 is not a wet-area rating
- H2 How grip is built into a resin floor
  - H3 Broadcasting quartz into the wet coat
  - H3 Sand size: finer is easier to clean, coarser grips more
  - H3 Sealing the sand in: what the finishing coat does
- H2 Grip against cleanability: choosing by area
  - H3 Dry warehouse aisles
  - H3 Wet process and kitchens
  - H3 Ramps and car park decks
- H2 Grip wears: inspection and recoating
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| "Slips and trips are the most common cause of injury at work" (UK figure; say so) | HSE, page 1 |
| Pendulum test value: 0 to 24 high slip potential; 25 to 35 moderate; 36 and above low (Table 1, from UKSRG 2011) | HSE, page 3 |
| Rz surface roughness in water-wet pedestrian areas: below 10 µm high slip potential; 10 to 20 µm moderate; 20 µm and above low (Table 2) | HSE, page 4 |
| "As a general rule, a higher level of surface roughness is needed to maintain slip resistance with a more viscous (thicker) contaminant" | HSE, page 4 |
| DIN 51130 R classes by slip angle: R9 6 to 10°, R10 10 to 19°, R11 19 to 27°, R12 27 to 35°, R13 over 35° (Table 3). DIN 51097 barefoot classes: A 12 to 17°, B 18 to 23°, C over 24° (Table 4) | HSE, page 6 |
| "Floor surfaces that are classified by the DIN 51130 standard as R9 (or in some instances R10) will be slippery when used in wet or greasy conditions" | HSE, page 6 |
| Mapefloor FC 200 ME non-slip build-up: first coat 0.35 to 0.40 kg/m², broadcast with Quartz 0.5 at 0.5 to 1.0 kg/m², finishing coat 0.35 to 0.40 kg/m² | TDS-FC200 |
| Mapefloor FC 200 ME: "If a higher degree of non-slip finish is required, sand with a larger particle size may be used. In such cases, the consumption rate of the next coat will be higher" | TDS-FC200 |
| Mapefloor FC 200 ME: after the first coat hardens, "remove any excess sand and remove the last grains of sand with an industrial-grade vacuum cleaner" | TDS-FC200 |
| Quartz ME grades: 0.25, 0.5, 0.9, 1.2 and 1.9; uses include "To create non-slip surface finishes" | TDS-QTZ |
| Mapefloor CPU+/MF slip resistance (EN 13036-4): "Class I (wet indoor surfaces) Class II (dry indoor surfaces)" | TDS-CPU |
| Mapefloor PU 410 car park layer: 1.0 kg/m² binder, Quartz 0.25 at 0.3 kg/m² as filler, broadcast in excess with Quartz 0.5, 0.9 or 1.2 at 4.0 kg/m² | TDS-PU410 |

Writer's cautions: **no pendulum value or R rating is printed on the
Mapefloor FC 200 ME, Mapefloor I 300 SL ME or X-Tech EpoxyFloor SL
sheets.** The post must not assign one. Ask Mapei for test reports per
sand grade. The HSE thresholds are UK guidance; no Tanzanian (OSHA
Tanzania or TBS) slip requirement was searched for or found, so say "UK
guidance, widely used as a reference". The statement that rougher floors
are harder to clean is common knowledge with no fetched source: find one
or phrase it as the supplier's own advice. The catalogue lists the
stocked sand as Quarzo 0.5/1.2; confirm which grades are actually on the
shelf.

**Links.** Mapefloor FC 200 ME, Quarzo 0.5/1.2, Mapefloor CPU+/MF,
Mapefloor PU 410, Mapefloor Finish 450 ME, Primer SN. Sibling posts 10,
12 and 13.

**Visuals**

- *Data table:* the HSE pendulum and Rz bands side by side, then the
  R9 to R13 angle table, then "non-slip build-up by product" with the
  printed kilograms per square metre for each layer.
- *Diagram:* three magnified cross-sections of a floor surface: smooth
  self-levelled, lightly broadcast and sealed, fully broadcast and
  sealed. Water film drawn on each to show why peaks above the film
  matter.
- *Interactive or 3D:* a tilting-ramp explainer of the R scale. The
  reader drags a ramp from 0 to 40° and the R band lights up at the
  printed angle ranges; a toggle for "dry / wet" shows the HSE warning
  text for R9 and R10. A second control swaps sand grade (0.25 to 1.9)
  on a textured tile to show grain size at true relative scale. No
  claimed rating is attached to any grade.

---

### Post 6 - What drives the cost of an epoxy floor in Tanzania

Slug `/blog/epoxy-flooring-cost-drivers-tanzania`. Needs a new registry
row (report 09 J1). No prices anywhere on the page.

**Outline**

- H2 Why nobody honest can quote a floor per square metre unseen
- H2 The six things a quote is made of
  - H3 The system and its thickness
  - H3 The state of the slab: repairs, levels, moisture
  - H3 Preparation: grinding or shot blasting
  - H3 Area, edges and details (coves, drains, joints, ramps)
  - H3 Finish: anti-slip, colour, line marking, UV-stable topcoat
  - H3 Access and programme: night shifts, phasing, shutdowns
- H2 Material per square metre: the part you can calculate today
- H2 Why a thicker floor is not simply "more of the same"
- H2 How to compare two quotes line by line
- H2 Ask for the current price list
- H2 FAQ

**Facts and figures**

| Fact | Source |
|---|---|
| Mapefloor FC 200 ME roll-coat system: primer (if required) 0.15 to 0.25 kg/m², then two coats at 0.32 kg/m² each. Kit 25.5 kg | TDS-FC200 |
| Mapefloor FC 200 ME non-slip system: two coats at 0.35 to 0.40 kg/m² each plus Quartz 0.5 at 0.5 to 1.0 kg/m² | TDS-FC200 |
| Mapefloor I 300 SL ME at 2 mm: 3.7 kg/m² plus Primer SN 0.3 kg/m² and a quartz broadcast of 0.7 to 1.0 kg/m². Kit 47 kg | TDS-I300 |
| Mapefloor CPU+/MF: about 5.5, 7 and 10 kg/m² at 3, 4 and 6 mm | TDS-CPU |
| X-Tech EpoxyFloor SL1: 17 m² per 17 litre pack at 1 mm | TDS-XSL |
| Mapefloor PU 410 car park wearing layer: 1.0 kg/m² plus 0.3 kg/m² filler and 4.0 kg/m² broadcast | TDS-PU410 |
| Mapefloor Finish 450 ME: 0.2 to 0.5 kg/m² "depending on the selected system" | TDS-F450 |
| Mapefloor FC 200 ME: rates are affected by "substrate surface temperature, humidity, type of roller used"; a larger sand raises the consumption of the next coat | TDS-FC200 |
| Primer SN: 0.3 to 0.70 kg/m² per coat "depending on the characteristics of the substrate such as roughness, absorbency, temperature" | TDS-SN |
| Cracks "must be repaired by filling them with Eporip" before coating | TDS-FC200, TDS-I300 |
| Shelf life: 24 months for Mapefloor FC 200 ME, I 300 SL ME and Primer SN; 12 months for Mapefloor CPU+/MF, PU 410 and Finish 450 ME (matters for ordering and stock) | each sheet |
| FeRFA types and thicknesses, to explain what a quote should name | FeRFA |
| Every Kenyan and Ugandan page returned for the cost query prints a price range; the ranges differ widely, including between pages on the same site (recorded as a finding, figures deliberately not copied) | Search 3; https://bestcareservices.co.ke/warehouse-flooring-services-in-nairobi-and-kenya/ ; https://uelresins.com/floorworks/?p=31 |

Arithmetic of mine, to be shown as "calculated from the data sheet":
resin mass per square metre is about 0.64 kg for a two-coat FC 200 ME
coating, about 4.0 kg for I 300 SL ME at 2 mm with its primer, and about
5.5 kg for CPU+/MF at 3 mm: roughly 6 times and 9 times the coating.
That ratio, not a shilling figure, is the honest answer to "why does the
quote vary so much".

Writer's cautions: this post sits beside `/price-list` (which owns
"Mapei price list Tanzania"). It must link there for the price request
and must not target that query. Labour, preparation and equipment costs
are real drivers but no sourced figure exists for them: describe them,
do not quantify them.

**Links.** `/price-list` (when built), `/contact`, every flooring product
page and its calculator, Eporip, Quarzo 0.5/1.2. Sibling posts 3 and 7.

**Visuals**

- *Data table:* "Material per square metre by system": system, layers,
  kilograms per square metre per layer as printed, total, square metres
  per kit (calculated). No currency column.
- *Diagram:* a stacked bar per system showing where the mass sits
  (primer, body, sand, finish), so a reader sees that a screed is mostly
  body coat and a car park system is mostly sand.
- *Interactive:* a material take-off calculator. Inputs: area, system,
  thickness where the sheet offers a choice, anti-slip or smooth.
  Output: kits of each component, rounded up, with a "send this list on
  WhatsApp for a quotation" button that pre-fills the list. It reuses
  the models in `src/config/mapei-coverage.ts`; nothing new is invented.
  This is the conversion point for a site with no prices.

---

## 4. FAQ blocks

Questions only. Answers are written at drafting time from the facts in
section 3; a question whose answer would need an unsourced number is
marked **(needs source)** and is dropped if none is found.

**Post 1 - Why epoxy floors blister and peel**

1. Why did my epoxy floor bubble a few weeks after it was laid?
2. Can epoxy be applied to a damp concrete floor?
3. What humidity is too high to apply an epoxy floor coating?
4. What is the dew point, and why does the slab have to be 3°C above it?
5. Is it safe to coat a floor during the rainy season in Dar es Salaam?
6. What causes pinholes in a self-levelling epoxy floor?
7. Can a blistered epoxy floor be patched, or must it be removed?
8. Does a primer stop moisture coming through the slab?

**Post 2 - Epoxy, polyurethane or PU cement**

1. Is polyurethane flooring better than epoxy?
2. What is the difference between polyurethane and polyurethane cement?
3. Which floor can take hot water wash-down?
4. Does epoxy flooring turn yellow in sunlight?
5. Which resin floor suits a cold room or freezer?
6. Can polyurethane be applied over an epoxy floor?
7. Which floor can go onto a slab that is only a week old?
8. Which is more chemical resistant? **(needs source: the chemical
   resistance tables were not extracted)**

**Post 3 - How thick should an epoxy floor be**

1. How thick is epoxy flooring in millimetres?
2. What is the difference between an epoxy coating and a self-levelling
   epoxy floor?
3. Is a thicker epoxy floor always stronger?
4. What thickness do I need for forklift traffic? **(needs source: FeRFA
   gives duty bands, not vehicle types)**
5. How many kilograms of epoxy do I need per square metre?
6. Is a self-levelling screed the same as a self-levelling epoxy?
7. Can a 1 mm floor hide an uneven slab?

**Post 4 - How soon can you epoxy new concrete**

1. How long should new concrete dry before epoxy?
2. Is 28 days always enough?
3. How do I test a concrete floor for moisture at home or on site?
4. What does a plastic sheet test tell me, and what does it miss?
5. What moisture level is acceptable for an epoxy floor?
6. Can I coat a slab on the ground that has no damp-proof membrane?
7. Which floor system can be laid on young concrete?
8. Where can I get a slab moisture test done in Tanzania? **(needs an
   answer from the owner)**

**Post 5 - Anti-slip epoxy floors**

1. Are epoxy floors slippery when wet?
2. What does a pendulum test value of 36 mean?
3. Is R10 enough for a wet floor?
4. How is an epoxy floor made non-slip?
5. Which sand size should I choose for a wet process area?
6. Does an anti-slip floor become harder to clean? **(needs source)**
7. Does the grip wear off, and can it be restored?
8. What finish suits a car park ramp?

**Post 6 - What drives the cost of an epoxy floor**

1. Why can't I get a price per square metre for epoxy flooring online?
2. How much epoxy do I need for 100 square metres?
3. Why is self-levelling epoxy so much more than epoxy paint?
4. Does floor preparation really change the cost?
5. Is it cheaper to coat over existing tiles?
6. What should a complete epoxy flooring quotation list?
7. How do I get the current Mapei price list in Tanzania?
8. Does colour or an anti-slip finish add to the material needed?

**Posts 7 to 14 - three starter questions each**

| Post | Questions |
|---|---|
| 7 Preparation | Do I have to grind the floor before epoxy? / Is acid etching good enough? / How strong must the concrete be? |
| 8 Lifespan and care | How long does an epoxy floor last? **(needs source: no standards-body figure was found)** / What should I clean an epoxy floor with? / When should an epoxy floor be recoated? |
| 9 Warehouse dust | Why does my concrete floor keep making dust? / Will a coating stop dusting? / How soon can forklifts drive on a new coating? |
| 10 Food factories | What floor does a food factory need? / Which floor resists lactic acid and hot wash-down? / Is the floor HACCP compliant, and what does that claim mean? |
| 11 Hospitals and labs | Is epoxy or vinyl better for an operating theatre? / Are resin floors antibacterial? / What is a coved skirting and why does it matter? |
| 12 Garages and workshops | Is epoxy paint the same as an epoxy coating? / How many coats does a garage floor need? / When can I park on it? |
| 13 Car park decks | What are the layers of a car park coating? / Why do top decks need a different finish? / What does crack-bridging mean? |
| 14 Over tiles | Can you epoxy over ceramic tiles? / What about old terrazzo? / Is epoxy better than tiles for a factory floor? |

Swahili FAQ blocks: none drafted. Section 1.6 explains why. Posts 1, 6,
12 and 14 are the candidates once a native speaker and the sales team
supply the words customers actually use.

---

## 5. Sources

**Manufacturer data sheets (read in full from the repo copies, 2026-11-06)**

- Mapefloor FC 200 ME - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_06782_mapefloor-fc-200-me-_en-ae_21cad3ea2f2a43b78ba4fd3c081e1037.pdf?sfvrsn=355a5b63_0
- Mapefloor I 300 SL ME - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_06797_mapefloor-i-300-sl-me_en-ae_cbc566a4e7e14207be31c45582684f1f.pdf?sfvrsn=5767db07_0
- Mapefloor CPU+/MF - https://cdnmedia.mapei.com/docs/librariesprovider33/products-documents/1_mf-eng_ac65eb55103b455aaf32b464b36dec6b.pdf?sfvrsn=e11958dd_0
- Primer SN - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_02901_primer-sn_en-ae_ce84efefb9dd4295ab9f25ba58c9456f.pdf?sfvrsn=2da70fe0_0
- Mapefloor PU 410 - https://cdnmedia.mapei.com/docs/librariesprovider54/products-documents/1_02065_mapefloor-pu-410_en_a3790c419b4e4ce2a9d8452f6e504230.pdf?sfvrsn=304b8e21_0
- Mapefloor Finish 450 ME - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_08913_mapefloor-finish-450-me_en-ae_69289d5eb0f84b09b67c840af00a28b9.pdf?sfvrsn=26c110cc_0
- Triblock P - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_02043_triblock-p_en_17787dc623bb4498b9b7bd643103991c.pdf?sfvrsn=c7fbf6a1_0
- Quartz ME - https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_09304_quartz-1-2-me_en-ae_05f72f6e58ca4bb09af38b673d57de5f.pdf?sfvrsn=e9ef6df1_0
- X-Tech EpoxyFloor SL - https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Tech_EpoxyFloor_SL.pdf (figures taken from the verified extract `src/content/x-calibur/x-tech-epoxyfloor-sl1.json`; the PDF was not re-read today)
- X-Prime GP - figures from `src/content/x-calibur/x-prime-gp.json`; source URL in `src/config/x-calibur-tds.json` (not re-read today)

**Standards bodies, regulators and reference data (fetched 2026-11-06)**

- FeRFA, resin flooring classification, substrate limits, surface regularity - https://www.ferfa.org.uk/standard/
- HSE, "Assessing the slip resistance of flooring: a technical information sheet" (pages 1 to 6 read) - https://www.hse.gov.uk/pubns/geis2.pdf
- Codex Alimentarius, General Principles of Food Hygiene, CAC/RCP 1-1969, Rev. 3 (1997), Amended 1999, section 4.2.2 - https://www.fao.org/4/y1579e/y1579e02.htm
- Dar es Salaam climate table, Julius Nyerere International Airport, 1991 to 2020 (cites NOAA, Deutscher Wetterdienst, Tokyo Climate Center) - https://en.wikipedia.org/wiki/Dar_es_Salaam

**Manufacturer and trade articles used for attributed statements (fetched 2026-11-06)**

- Sherwin-Williams, "How Soon Can You Epoxy Coat Freshly Poured 'Green' Concrete?" - https://industrial.sherwin-williams.com/na/us/en/resin-flooring/contractor-center/technical-articles/epoxy-coat-freshly-poured-green-concrete.html
- Sherwin-Williams, "Which Floors Should Not Be Epoxy Coated?" - https://industrial.sherwin-williams.com/na/us/en/resin-flooring/contractor-center/technical-articles/floors-epoxy-coated.html
- Wagner Meters, "How Long Does Concrete Take to Dry vs. Cure?" (page says last updated 2026-10-26) - https://www.wagnermeters.com/concrete-moisture-test/concrete-info/how-to-speed-up-concrete-drying-time/
- Stonhard, "How soon can you epoxy coat new concrete?" (2022) - https://www.stonhard.com/ca/blog/how-soon-can-you-epoxy-coat-new-concrete/
- FoodProcessing.com.au, "Flooring solutions: a guide for the food and beverage manufacturing industry" (2021-08-06, vendor-written) - https://www.foodprocessing.com.au/content/the-food-plant/article/flooring-solutions-a-guide-for-the-food-and-beverage-manufacturing-industry-893051731

**Ranking pages measured (fetched 2026-11-06; not sources of fact)**

- https://usa.sika.com/en/construction/floor-wall/resource-center/what-is-the-best-floor-for-me-/epoxy-vs--urethane.html (about 250 words, no table, no figures)
- https://www.becosan.com/epoxy-lifespan/ (2025-12-12, about 1,100 words, no sources, sells an alternative)
- https://uelresins.com/floorworks/?p=55 (2021-01-05, about 500 words, nine questions under a "Top 10" title, no sources)
- https://bestcareservices.co.ke/warehouse-flooring-services-in-nairobi-and-kenya/ (about 900 words, page shows today's date, prices printed, no sources, no FAQ content)
- https://constructionreviewonline.com/knowhow/2018/07/embracing-epoxy-flooring-as-an-ideal-flooring-solution-for-africa (updated 2024-10-24, about 400 words, an interview with one supplier)

**Seen in search results only, not opened**

- https://jiji.co.ke/sw/165-epoxy-flooring ; https://jiji.co.tz/sw/165-flooring-materials ; https://jiji.co.tz/sw/building-materials/hardener ; https://jiji.co.tz/sw/manufacturing-materials-and-tools/resin ; https://shop.uelresins.com/fibreglass-and-resin-materials-supplier-in-tanzania
- https://uelresins.com/floorworks/?p=31 ; https://achisystems.co.ke/book/epoxy-floors-services.html ; https://kandua.com/-/cost/epoxy-flooring-cost/
- https://www.hse.gov.uk/researcH/rrhtm/rr497.htm (returned by search; 404 on fetch)

**Carried from report 09, not re-fetched today**

- WHO TRS 986 Annex 2, clauses 12.27 and 12.29 - https://www.who.int/publications/m/item/trs986-annex2
- TMDA GMP inspection guideline, third edition, July 2025 - https://www.tmda.go.tz/publications/40
- Sika Tanzania flooring pages (length measurement) - https://tza.sika.com/en/construction/flooring.html

**Failed fetches:** see section 1.3.

---

## 6. Open items before any of these posts is drafted

1. **Registry rows.** Posts 1 and 2 have rows. Posts 3 to 14 need rows in
   `SEO-STRATEGY.md` section 5.4 before they are built. Posts 10 and 13
   need a decision on overlap with the planned pillars.
2. **How Mapei measures "4%" substrate moisture** (section 1.1). Ask
   Mapei technical services. Affects posts 1, 4 and 6.
3. **Slip test data** for Mapefloor FC 200 ME by sand grade, and for
   Mapefloor I 300 SL ME. None is printed. Affects post 5.
4. **Chemical resistance tables** for Mapefloor CPU+/MF and the epoxy
   systems were not extracted. Affects posts 2 and 10.
5. **ICRI 310.2R and ASTM F2170** could not be read. Affects posts 4 and
   7. Someone with access should confirm CSP ranges and probe depths.
6. **Which quartz grades are on the shelf**, and whether moisture-test
   kits or testing services exist locally. Owner question.
7. **Mapefloor Finish 415 ME** has a catalogue entry and no data sheet in
   the repo. No figure may be quoted for it (post 13).
8. **Swahili failure words** for floors (section 1.6). Sales team
   question, already listed as open item 7 in report 09.
9. **Hourly humidity for Dar es Salaam** (Tanzania Meteorological
   Authority) would let post 1 say when in the day the air drops below a
   product's limit. Not fetched.
10. **A Tanzania-located search pass** with People Also Ask recorded, and
    volumes from a keyword tool, remain undone for this cluster.
