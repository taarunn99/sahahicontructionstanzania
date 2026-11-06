# Blog research 04 - Concrete repair and protection

Research date: 2026-11-06. Client: Sahihi Construction Chemicals Limited, Dar es Salaam (sahihicc.com). Research only. Nothing was built and no other file was edited.

Cluster scope: cracks in walls, slabs and columns (structural or not), epoxy crack injection, spalling and rusting rebar, carbonation and chlorides near the coast, repair mortar against ordinary mortar, non-shrink grout for base plates, honeycombing, bonding new concrete to old, chemical anchors, admixtures for waterproof concrete, curing in hot weather.

---

## 1. Method and limits

**What was done.**

- Read `SEO-STRATEGY.md` sections 3 to 5, `docs/research/README.md`, `docs/research/10-kw-repair-strengthening-mining.md` and `src/config/catalogue.ts`, so that nothing below duplicates a planned page.
- Ran **18 web searches** (the cap) and read each result list: domain, title, page type.
- Made 26 direct fetch attempts to grade what ranks and to collect facts; 18 returned readable, on-topic content (the failures are listed in section 5). Five PDFs (ACI RAP-1 and NRMCA CIP 11, 12, 22, 25) were downloaded and read as text.
- Product figures come from the Mapei data sheets already in the repo (`public/tds/mapei/*.pdf`, manifest in `src/config/mapei-tds.json`, extracted values in `src/content/mapei/*.json`). I read the local copies; I did not re-download them today. The manifest says they were fetched from Mapei's CDN on 2026-11-05.

**Limits. Read these before quoting anything.**

1. **The search tool is US-located.** It does not return google.co.tz or google.co.ke results. A searcher in Dar es Salaam will see more local classifieds, forums and Swahili pages than I did. Every "who ranks" note describes a non-localised English SERP.
2. **No search volumes.** No volume tool is connected. No volume, difficulty score or traffic estimate appears anywhere in this file. Priority is argued from SERP composition and from how well Sahihi's stocked products and data sheets answer the query.
3. **No People Also Ask data.** The tool returns links only. Section 4 gives candidate FAQ questions. Where a question is copied from a title that actually ranked, it is marked "(observed title)". Everything else is my proposal and is **inferred**, not observed.
4. **Swahili queries mostly failed in this tool.** Four Swahili searches returned almost nothing on topic (Airbnb listings, medical pages, water-supply news). That is a limit of the tool, not proof that nobody searches in Swahili. What little evidence I found is in section 1.2.
5. **Some sources could not be opened.** monitor.co.ug returned 403. tjet.udsm.ac.tz failed on a certificate error (the same papers were read on commons.udsm.ac.tz, abstracts only). The Penn State course index returned 403 (the curing page itself was read). cement.org pages returned unrelated content. BRE Digest 251 itself is a paid document; only BRE's summary page was read.
6. **Abstracts only for the two University of Dar es Salaam papers.** No numeric finding from them is quoted because none is in the abstracts.
7. Anything marked **inferred** is my reasoning. Anything marked **not verified** was not confirmed in a source I opened.

### 1.1 How this cluster fits the existing plan

The solution pillars in `SEO-STRATEGY.md` section 5.3 own the commercial "+ Tanzania" queries: `concrete repair Tanzania`, `epoxy crack injection`, `non shrink grout Tanzania`, `chemical anchor Tanzania`. The posts below take the **how, why and which** queries and link up to those pillars. No post below uses a pillar's primary query as its own. None of the ten Journal posts already scheduled in section 5.4 is in this cluster, so there is no overlap there. Report 10 listed 15 one-line post ideas (J1 to J15); where a post below develops one of them, the ID is given so the two lists can be merged.

### 1.2 Swahili: what the evidence shows

| Term or phrase | Where seen | Status |
|---|---|---|
| "kuziba ufa za ukuta" (to seal wall cracks), "ufa", "ukuta" | Original post of a JamiiForums thread, 12 July 2015: a member asks what material is needed to seal wall cracks and how to do it himself. The thread has no useful answer. https://www.jamiiforums.com/threads/ujenzi.883716/ | Verified by fetch |
| "fundi" (tradesman), "ukuta" used with an English product word in the same sentence | JamiiForums reply shown in a search result: advice to have the fundi buy a product and apply it to a rain-wetted wall. The thread itself was not opened. | Search snippet only |
| "msingi wa jamvi" (raft foundation), "msingi wa mkanda" (strip foundation) | Search snippet from a Swahili building newsletter and forum posts. https://uwekezajimajengo.substack.com/p/mambo-5-ya-kuzingatia-wakati-wa-ujenzi-593 | Search snippet only |
| "Elimu ya ujenzi", "ujenzi bora" used as branding on posts written in English | Dar es Salaam builder blog. https://mjenziwanyumbatz.blogspot.com/2025/11/major-causes-of-concrete-slab-failure.html | Verified by fetch |
| "nyufa" (cracks, plural), "zege" (concrete), "nondo" (reinforcing bar), "kumwagilia zege" (watering concrete) | My own vocabulary. Searches on these returned nothing on topic in this tool. | **Not verified as search behaviour** |

Three working conclusions, all **inferred**:

- The pattern in `SEO-STRATEGY.md` section 3.7 holds here: the problem is described in Swahili ("ufa", "ukuta"), the product keeps an English name. The builder blog above writes its technical posts in English under Swahili branding.
- JamiiForums has a dedicated building board, "Jukwaa la Ujenzi na Makazi" (https://www.jamiiforums.com/forums/jukwaa-la-ujenzi-na-makazi.135/). A person reading it for an hour will collect better Swahili question wording than this tool can.
- Avoid leading with "dawa ya nyufa". In this tool the word "dawa" pulled medical pages for every result. Use "kuziba ufa" or "kuziba nyufa" in any Swahili FAQ block, after a native speaker confirms.

---

## 2. Candidate posts

Thirteen candidates. Titles are 60 characters or fewer. "Who ranks" is what the US-located tool returned on 2026-11-06. Intent: I = informational, D = diagnostic (the reader has a defect in front of them), H = how-to, C = commercial investigation.

| # | Working title | Primary query | Secondary queries and questions | Intent | Who ranks now and their weakness | Why Sahihi can win |
|---|---|---|---|---|---|---|
| 1 | Structural or not? How to read a crack in concrete | structural vs non structural cracks | cracks in concrete walls; cracks in house walls when to worry; hairline cracks in slab; cracks in columns and beams; kuziba ufa za ukuta; are cracks in a concrete slab normal | D, I | Query with "Kenya" added returned only North American, Malaysian and UK foundation contractors (uswaterproofing.com, groundworks.ca, structuralrepairs.com.my four times). All written for poured basement walls. Regional pages: kenyans.co.ke 2023, about 350-400 words, prevention only, no widths; a Dar es Salaam builder blog post of about 300 words listing five causes with no repair method. | No East African page tells an owner how to sort a crack by width, direction, movement and member. Sahihi can build a sourced width ladder from an ACI bulletin, BRE and its own data sheets, and is honest about when to call an engineer. Develops report 10 idea J1. |
| 2 | Epoxy crack injection, step by step: what works | how to inject epoxy into concrete cracks | epoxy injection procedure; crack injection ports spacing; epoxy injection vs crack sealing; what crack width can be injected; can you inject a leaking crack | H | PDFs and document dumps: ACI RAP-1, a state transport spec, a US government preservation procedure, manufacturer method statements, Scribd twice, SlideShare, a LinkedIn article. Two short manufacturer blogs. No page with diagrams and a quantity estimate. | The authoritative material is locked in PDFs. A web page with the same steps, the Epojet LV figures at +23 and +30 degrees C, and a resin calculator is a better result. The pillar `/solutions/concrete-repair/crack-injection` keeps the commercial query. Develops J2. |
| 3 | Rusting rebar and falling concrete: a repair guide | spalling concrete repair | exposed rebar repair; rusted reinforcement in slab; concrete falling off ceiling; concrete cancer repair; is concrete spalling dangerous (observed title); rebar rust treatment | D, H | Coastal East Africa query returned patents, two University of Dar es Salaam journal abstracts, an Australian paint maker PDF, a Malaysian PDF, theconstructor.org (about 600-650 words, no table, no chloride or coastal content, rebar step is "wire brush then coat"). | Sahihi stocks the whole system (Mapefer 1K, Mapegrout T60 ME, Mapegrout ME05) and has every quantity on a data sheet. Local evidence exists from UDSM. Nobody ranks with a coastal Tanzanian page. Develops J4. |
| 4 | Carbonation or chlorides: why rebar rusts by the sea | why does rebar rust in concrete | carbonation of concrete; chloride attack on concrete; concrete cover for coastal buildings; salt air concrete damage; corrosion of reinforcement Dar es Salaam | I | Academic only: UDSM journal abstracts, a Saudi university page, a French engineering encyclopaedia, MDPI, repository PDFs. No plain-language page. | An explainer in plain words with two diagrams and the UDSM campus findings is absent from the SERP. It feeds post 3 and the waterproofing pillar. |
| 5 | Repair mortar or sand and cement: why patches fail | repair mortar vs cement mortar | can I use mortar to patch concrete (observed title); why concrete patch falls off; R4 repair mortar meaning; shrinkage compensated mortar; best mortar for concrete repair | I, C | A Nature journal PDF, Scribd, three academic abstracts, a Swedish forum thread, one general-interest explainer (engineerfix.com). No supplier guide, no table. | Mapegrout T60 ME prints the EN 1504-3 class R4 requirement beside its own result, so the comparison table writes itself from one data sheet. Honest framing: preparation fails more patches than material does. |
| 6 | How to grout a base plate with non-shrink grout | how to grout a base plate | grout thickness under base plate; machine base grouting procedure; non shrink grout mixing ratio water; how many bags of grout; grout or mortar under steel column | H, C | Scribd, a Middle East manufacturer brochure PDF, an ACI abstract, a Canadian manufacturer method statement, a city spec PDF, two eng-tips forum threads (one titled "Determining grout thickness under a machine base plate"). No web guide. | Forum threads ranking is the sign of an unanswered question. Mapegrout ME05 gives thickness range, yield per bag, water per bag and strength at 1, 7 and 28 days. A bag calculator is trivial and nobody has one. Report 10 flagged the tile-grout confusion: say "structural" and "base plate" in the title and H1. |
| 7 | Honeycomb in concrete: patch it or break it out? | honeycomb concrete repair | honeycombing in columns; causes of honeycomb in concrete; is honeycomb in concrete dangerous; how to fix voids after removing formwork | D, H | Indian builder and cement-brand blogs (five of ten), a Malaysian repair contractor, a US contractor, and a Namibian cement maker's 2019 article of about 900 words with no numbers, no diagram and no product classes. | Mapegrout ME05's data sheet names honeycombed concrete as a use. A depth-based decision table (surface, to the bar, behind the bar) with the stocked product for each is missing everywhere. Develops J3. |
| 8 | Bonding new concrete to old: slurry, SBR or epoxy? | bonding new concrete to old concrete | bonding agent for concrete; SBR vs epoxy bonding agent; cold joint in slab; will concrete bond to concrete (observed title, report 10); how to join new slab to old slab | H, C | Not re-checked today. Report 10 (SERP 22) found mid-authority blogs, several short, and graded it medium. | Three stocked answers at three strength levels: Planicrete SP slurry, X-Tech Bond, Eporip with printed open times at +10, +23 and +30 degrees C. The open-time table is the content nobody else has. Develops J9. |
| 9 | Chemical anchors for starter bars: hole, depth, cure | how to use chemical anchor for rebar | chemical anchor embedment depth; hole size for 12 mm rebar chemical anchor; chemical anchor curing time; how many anchors per cartridge; chemical anchor in wet holes | H, C | Scribd five times, an Australian manufacturer PDF, a Polish manufacturer's PDFs and product pages, an Australian approvals page, one Indian builder blog, patents. No East African page. Report 10 called "chemical anchor Tanzania" the emptiest SERP in its set. | Mapefix EP 50 prints hole diameter, minimum and maximum depth, edge distance and a gel-time table that runs to +40 degrees C. In a hot climate the 6 to 12 minute gel time is the fact installers need and nobody surfaces. Develops J10. |
| 10 | Waterproof concrete: what an admixture can do | waterproof concrete admixture | waterproof cement for water tank; crystalline admixture dosage; does waterproof cement work; admixture or membrane for a tank; water cement ratio for waterproof concrete | I, C | Query with Kenya or Tanzania: a multinational's Tanzanian data sheet PDF in positions 1 and 2, nine classified listings on jiji.co.ke, a competitor news item from February 2026, one Kenyan showcase article. PDFs and classifieds, no explainer. | Honest framing ranks: Idrocrete KR 1000's own data sheet says it cannot make up for poorly designed concrete and needs a water/cement ratio under 0.5 and wet curing. A page that says so, with a dosage calculator, is more useful than a PDF. Cross-links to the waterproofing cluster; keep the tank procedure itself on Journal post 7. |
| 11 | Curing concrete in hot weather: how many days? | curing concrete in hot weather | how many days to cure concrete; how long to water a slab; concrete curing 7 days or 14 days (observed title); curing compound vs water curing; when to start curing | I, H | Position 1 was a paid downloadable guide titled "Concrete Curing - 7 Days or 14 Days? A Practical Guide for Hot African Conditions" (selar.com, not opened). Then kenyans.co.ke 2023, about 400-450 words, one number ("seven to 14 days"), no temperatures, no source. Then a US university course page and academic PDFs. | Someone is selling the answer, which is demand evidence. The free pages are thin. Sahihi can publish the sourced numbers, the method comparison and the Mapei data sheet curing instructions, with a Swahili FAQ. |
| 12 | Why a new slab cracks on day one, and how to stop it | plastic shrinkage cracks | cracks in slab after casting; hairline cracks in new concrete; fibres to stop concrete cracking; cracks in slab before it sets; are cracks in concrete slab normal (observed title) | D, I | Query with Kenya: a UK cement maker (two entries), an encyclopaedia PDF, Scribd, an ACI abstract, an Indian homeowner site, a US contractor. No East African page. | Mapefibre NS 12 exists for exactly this and has one printed dose. Pairs with post 11. Honest limit on the data sheet: fibres give no structural benefit. Develops J11. |
| 13 | R1 to R4: reading the class on a repair mortar bag | EN 1504 repair mortar classes | R4 mortar meaning; EN 1504-3 R3 vs R4; structural repair mortar class; what is EN 1504 | I | Not checked. **Inferred** engineer and consultant audience. | Sahihi's sheets cite EN 1504-3, -4, -5 and -7 across five products. Only the R4 thresholds were verified (from the Mapegrout T60 ME sheet). R1 to R3 thresholds need the standard or a second manufacturer sheet before this is written. Lower priority. |

**Priority, with reasons.** Best six: 1, 3, 11, 6, 9, 2. They are developed in section 3. Posts 7, 8 and 5 are the next three and can be written from the same sources. Post 4 can be folded into post 3 if the owner wants fewer, longer posts. Posts 10 and 12 depend on the waterproofing cluster's plan for cross-links. Post 13 waits for a source.

---

## 3. The best six, in detail

Conventions used below. "Sheet" means the Mapei technical data sheet in `public/tds/mapei/`, cited by its key in section 5. Imperial figures from US sources are given as printed; any metric conversion I add is marked "my conversion". Product links should be built with `productHref()` from `src/config/catalogue.ts`. The solution pillars named are planned, not built.

**Weight warning for every 3D idea (CLAUDE.md: flag heavy things before building them).** Each interactive idea below is specified so that it works as inline SVG plus a few lines of state. Where a true 3D model would help, it is offered as an optional second stage and flagged. Nothing here belongs on the first screen, and nothing should be the LCP element.

### 3.1 Post 1 - Structural or not? How to read a crack in concrete

**Primary query:** structural vs non structural cracks. **Reader:** a homeowner or site supervisor looking at a crack and deciding whether to fill it, monitor it or call an engineer.

**Outline**

- H2 The short answer: four things to look at
  - H3 Which member is cracked (plaster and blockwork, slab, beam, column)
  - H3 Direction and pattern
  - H3 Width
  - H3 Is it still moving
- H2 Why concrete cracks at all
  - H3 Shrinkage and temperature
  - H3 Settlement and overload
  - H3 Rusting reinforcement
- H2 A crack width ladder: what each width means for the repair
- H2 Cracks that should go straight to a structural engineer
- H2 How to monitor a crack for a month before deciding
- H2 What the repair is, by crack type
  - H3 Fine and still: resin
  - H3 Wide and still: gravity-fed resin or repair mortar
  - H3 Moving: a sealed joint, not a rigid fill
  - H3 Rust-stained: this is a rebar problem, see the spalling guide
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| Typical causes of cracking listed by ACI: drying shrinkage, thermal contraction or expansion, settlement, lack of appropriate control joints, overload producing flexural, tensile or shear cracks, restraint of movement | [S10] ACI RAP-1 |
| Epoxy injection can restore structural integrity and reduce moisture penetration through cracks 0.002 in. (0.05 mm) wide and greater | [S10] |
| Before any repair, the cause must be assessed and corrected. If the crack is subject to subsequent movement, an epoxy repair may not be applicable | [S10] |
| Cracks caused by corroding reinforcing steel should not be repaired by epoxy injection, because continuing corrosion will cause new cracks | [S10] |
| If a crack does not compromise structural integrity, a non-structural material may be a more suitable fill | [S10] |
| Allowable crack widths for concrete exposed to chlorides are about 0.006 in. (about 0.15 mm, my conversion) | [S11] NRMCA CIP 25, citing ACI 224 |
| BRE's summary for houses: damage categories 0, 1 and 2 (crack widths up to 5 mm) are "aesthetic"; categories 3 and 4 are "serviceability"; category 5 is "stability". Width must not be used alone, and whether cracks are widening with time can change the category | [S15] BRE Group page |
| Full BRE width bands (about 0.1, 1, 5, 5-15, 15-25, over 25 mm) | **Secondary only.** Seen in a search result quoting BRE Digest 251 via a UK council document. Check the Digest (paid) before publishing these bands |
| Epojet LV: "ideal for sealing static cracks"; not for expansion joints; Brookfield viscosity 140 mPa.s | [S5] Epojet LV sheet |
| Eporip: cracks wider than 0.5 mm are sealed by simply placing the resin; narrower cracks must be widened and dusted first | [S6] Eporip sheet |
| Idrocrete KR 1000 (an admixture in new concrete, not a repair): closes microcracks up to 0.4 mm | [S8] Idrocrete KR 1000 sheet |
| Kariakoo, Dar es Salaam: a four-storey building collapsed on 16 November 2024; final toll 29 dead and 88 injured; the President directed an inspection of all Kariakoo buildings. The same report says an earlier probe of 505 buildings found 147 without construction documents and 81 in breach of regulations | [S17] The Citizen, 27 November 2024 |

Caution on the last row. It explains why owners are asking the question, and nothing more. The cause statements in the article are the President's remarks, not a published engineering finding; I did not find the commission's report. Do not link the collapse to any product or defect type in copy. If the owner prefers, leave it out entirely.

**What I could not source and the post must not state without one:** a numeric width at which a crack in a reinforced concrete beam or column becomes "structural". The contractor blogs in the SERP give 2 mm, 3 mm and 5 mm with no source. The honest line is that width alone does not decide it, which is what BRE says.

**Links.** Epojet LV, Eporip, Adesilex PG2 TG, Mapegrout T60 ME, X-Seal PG (for the moving-crack answer), Mapeflex PU 45 FT; `/mapei/concrete-repair`; posts 2 and 3; pillar `/solutions/concrete-repair/crack-injection` when built.

**Data table.** The crack width ladder: width band, what a reader can compare it to, likely cause, whether resin can enter it, the stocked product, the source for each row. Rows come only from the table above (0.05 mm, about 0.15 mm, 0.3 mm from post 2, 0.4 mm, 0.5 mm, 5 mm).

**Diagram.** One concrete frame bay drawn in elevation (column, beam, slab edge, block infill wall) with six crack patterns drawn on it and numbered: plaster crazing, stepped crack in blockwork, vertical crack at the wall and column junction, diagonal crack near a beam support, vertical crack at beam mid-span, crack along a bar line with rust stain. Each number is a row in a legend that says "watch", "repair" or "engineer first". The pattern descriptions need an engineer's review before publishing: the patterns are standard teaching material but I did not fetch a source that draws them.

**Interactive element.** A crack triage card. Four taps: member, direction, width (chips: "hairline", "a card edge fits", "a coin edge fits"), moving or not. Output: one of three verdicts plus the next step and a WhatsApp button that carries the answers. This is a small version of the Repair Method Selector specified in report 10 section 8; build one component and reuse it. The on-screen width gauge in that spec needs a calibration step and is the heavier part: flag it and ship the chips first. No 3D is needed here.

### 3.2 Post 3 - Rusting rebar and falling concrete: a repair guide

**Primary query:** spalling concrete repair. **Reader:** owner, facility manager or contractor facing delaminated cover, rust stains or exposed bars on a slab soffit, beam or column, most often near the coast.

**Outline**

- H2 What you are looking at: spalling in one paragraph
- H2 Why steel rusts inside concrete
  - H3 The alkaline shield
  - H3 Chlorides: salt air, sea sand, saline ground
  - H3 Carbonation
- H2 What has been found in Dar es Salaam
- H2 Why patching with sand and cement does not hold
- H2 The repair, step by step
  - H3 1. Assess and prop: who decides
  - H3 2. Break out to sound concrete, behind the bar
  - H3 3. Clean the steel
  - H3 4. Protect the steel
  - H3 5. Rebuild the section
  - H3 6. Cure
  - H3 7. Protect the surface
- H2 How much material: worked quantities
- H2 When the bar has lost section
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| Rust has two to four times the volume of the original steel; the larger volume leads to delamination and spalling of the cover; loss of bar cross-section reduces structural capacity | [S11] NRMCA CIP 25 |
| Steel in concrete is passive because of high alkalinity (pH above 13). Water-soluble chlorides disrupt the passive layer | [S11] |
| Carbonation: atmospheric carbon dioxide reacts with lime in the concrete, reducing alkalinity. Corrosion begins when the pH at the level of the steel falls below 9 | [S11] |
| Chloride-induced corrosion is more common than carbonation-induced corrosion | [S11] |
| Corrosion is aggravated by moisture, high temperatures and cracking | [S11] |
| ACI 318 exposure class C2 (moisture plus an external chloride source): maximum w/cm 0.40, minimum specified strength 5000 psi. Internal water-soluble chloride limits for reinforced concrete: 1.0%, 0.3% and 0.15% by weight of cement for classes C0, C1, C2 | [S11], reporting ACI 318 |
| Increasing cover reduces the rate of chloride penetration and carbonation and delays the onset of corrosion; curing should preferably run at least 7 days | [S11] |
| University of Dar es Salaam, 1999: cracking and corrosion of reinforced concrete in coastal zones attributed mainly to salt-laden air; remedies discussed include local demolition, reconstruction, epoxy injection and concrete treatment | [S18] Mpinzire, TJET 23(1), 97-105 (abstract) |
| University of Dar es Salaam campus case study: severity of damage depended on environment and concrete quality; reinforcement corrosion mainly associated with carbonation and sulphates, and to a small extent chlorides from contaminated humid air | [S19] Rubaratuka, TJET 23(1), 25-30 and [S20] TJET 24(1), 91-95 (abstracts) |
| ACI: cracks caused by corroding steel should not be repaired by epoxy injection | [S10] |
| Mapefer 1K: one-component anti-corrosion cementitious mortar for reinforcement; EN 1504-7; resistant to saline fog to EN 15183; 5 kg mixed with 1.0-1.1 l of water; two coats, total thickness minimum 2 mm; about 2 hours between coats; repair mortar after 6-24 hours; apply immediately after sandblasting; consumption 100 g/m on an 8 mm bar and 200 g/m on a 16 mm bar; +5 to +35 degrees C | [S3] Mapefer 1K sheet |
| Mapegrout T60 ME: thixotropic, sulphate and chloride resistant, fibre-reinforced structural repair mortar; EN 1504-3 class R4; contains organic corrosion inhibitors; 10 to 60 mm per layer by trowel on vertical surfaces, up to 30 mm overhead, no formwork; yield 12.6 litres per 25 kg bag; 3.75-4.25 l of water per bag by trowel; pot life about 1 hour at +20 degrees C; +5 to +50 degrees C | [S1] Mapegrout T60 ME sheet |
| Same sheet, performance: compressive strength over 20 MPa at 24 hours, over 50 at 7 days, over 60 at 28 days, against an R4 requirement of at least 45 MPa at 28 days; bond to concrete over 2 MPa | [S1] |
| Same sheet, method: remove degraded concrete to a sound substrate; pre-soak to saturated surface dry; remove corrosion deposits by mechanical abrasion before coating bars with Mapefer 1K; cure at once with wet hessian under polythene; spray water within the first 8-12 hours and repeat for at least 48 hours | [S1] |
| Same sheet, limits: not on smooth surfaces; not poured into forms (use Mapegrout ME05); not for anchoring; add no cement or admixtures | [S1] |
| Mapegrout ME05 for formed, poured reinstatement: 15-220 mm; R4; uses include column jacketing, beams and columns, honeycombed concrete | [S2] Mapegrout ME05 sheet |

**Conflicts and gaps to resolve before writing**

- The two UDSM abstracts do not agree on the lead cause: one says salt-laden air, the campus study says carbonation and sulphates with chlorides minor. Present both. The campus is inland of the shore; I did not verify its distance from the sea. No measured chloride value for any Tanzanian site was found (report 10 found none either).
- The Rubaratuka listing shows the author as "A. Rubaratuka" (1999) and "I. Rubaratuka" (2001). Cite as printed on each page.
- Both Mapegrout sheets recommend Mapecure SRA and mention Mapeshield galvanic anodes, and the T60 sheet names Mapefill for anchoring. None of the three is in `catalogue.ts`. Either do not mention them or say plainly that they are not stocked.
- The Mapegrout T60 ME sheet edition is dated 2015.
- A depth to break out behind the bar: the Mapei sheets say "until sound" and give no millimetre figure. One ranking page gives 3.81 cm with no source. Do not print a figure without one.
- Carbonation depth testing with an indicator spray is the obvious "how do I know" section. I did not fetch a source for the method. **Not verified**; source it or leave it out.

**Links.** Mapefer 1K, Mapegrout T60 ME, Mapegrout ME05, Planicrete SP, Antipluviol as the surface protection step (only if its sheet supports use on concrete: check before linking), `/mapei/concrete-repair`, pillar `/solutions/concrete-repair`, posts 1, 4 and 5.

**Data table.** "The system, coat by coat": step, product, thickness or dose, waiting time, quantity rule, data sheet reference. Seven rows, every cell from [S1] to [S3]. A second small table: R4 requirement against Mapegrout T60 ME result at 24 hours, 7 and 28 days.

**Diagram.** A cross-section through a slab soffit in four frames: sound concrete with a passive bar; chloride or carbonation front reaching the bar; rust expanding to "two to four times the volume" and cracking the cover; the repaired section with the bar coated, the break-out profile squared behind the bar and the mortar in layers. Label only with sourced figures.

**Interactive or 3D element.** A layer-peel section: a slider that removes the repair in reverse (surface, mortar layer two, mortar layer one, blue Mapefer 1K coat, cleaned bar, substrate), each stop showing the product, thickness and waiting time. The sheet prints the mixed colour of Mapefer 1K as blue, so the coat is recognisable. Built as stacked SVG layers with a range input it is light. A rotatable 3D block would be clearer for the "behind the bar" point but needs Three.js or a model viewer: **flag before building**, lazy-load below the fold, keep the SVG as the fallback. Add a quantity calculator: bar diameter and exposed length give Mapefer 1K grams (only for 8 mm and 16 mm, the two diameters the sheet prints; no interpolation), and area times depth divided by 12.6 litres gives bags of Mapegrout T60 ME.

### 3.3 Post 11 - Curing concrete in hot weather: how many days?

**Primary query:** curing concrete in hot weather. **Reader:** homeowner building with a fundi, site supervisor, small contractor.

**Outline**

- H2 The short answer
- H2 What curing does, and what is lost without it
- H2 What "hot weather" means for concrete
  - H3 Heat, wind, sun and dry air
  - H3 Coast and inland are different problems
- H2 How many days: what the guides say
- H2 Six ways to cure, compared
- H2 Watering twice a day is not curing
- H2 Hot-weather habits before and during the pour
- H2 Curing repair mortars and grouts
- H2 Questions people ask (FAQ)
- H2 Kwa Kiswahili: maswali ya kawaida (after human translation)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| Curing begins immediately after placement and finishing and continues typically 3 to 7 days; continue as the specification requires, or for at least 3 to 7 days | [S13] NRMCA CIP 11 |
| Concrete in a dry environment can lose as much as 50 percent of its potential strength compared with moist-cured concrete | [S13] |
| Alternate wetting and drying is not an acceptable curing practice | [S13] |
| Methods: fogging or sprinkling, ponding, wet absorbent covers kept wet and weighted down, damp sand or sawdust, plastic sheet at least 0.10 mm thick laid in contact with overlapped and weighted edges, liquid membrane curing compound applied immediately after the water sheen disappears, two coats at right angles | [S13] |
| Reflective (white) sheets and white-pigmented curing compound reduce heat gain in sun | [S13], [S12] |
| At high temperature concrete gains early strength quickly but later strength may be reduced | [S13], [S12] |
| Hot weather as defined by ACI 305R: any combination of high ambient temperature, high concrete temperature, low relative humidity, high wind speed and solar radiation that impairs quality by accelerating moisture loss and hydration | [S12] NRMCA CIP 12 |
| High relative humidity tends to reduce the effects of high temperature | [S12] |
| High concrete temperature raises water demand, which raises the water-cementitious ratio and lowers strength and durability | [S12] |
| Chilled mixing water can lower concrete temperature by up to 6 degrees C, ice by up to 12 degrees C | [S12] |
| Do not sprinkle water on the slab surface to help finishing; avoid adding water to concrete more than 1.5 hours old; dampen subgrade, forms and reinforcement on dry or hot days; start curing as soon as finishing is complete and continue for at least 3 days | [S12] |
| Synthetic fibres may be used to minimise plastic shrinkage cracking | [S12] |
| For most structures, cure at least 7 days above 5 degrees C, or until 70% of specified strength; air-dried concrete gains only 50% of the strength of continuously moist-cured concrete; in hot weather, moist-cure continuously for the whole period | [S14] Penn State CE 584 page |
| For corrosion resistance, cure preferably at least 7 days; longer curing lowers porosity | [S11] NRMCA CIP 25 |
| Mapegrout T60 ME and ME05: cure exposed surfaces immediately with wet hessian covered with polythene; failure to cure can cause plastic shrinkage cracks, especially in hot or windy conditions; spray water within the first 8-12 hours and repeat for at least 48 hours; store bags in shade, use cool water, avoid the hottest part of the day | [S1], [S2] |
| Idrocrete KR 1000: results depend on a water/cement ratio under 0.5 and adequate wet curing | [S8] |
| Mapefibre NS 12: improves resistance to plastic shrinkage cracking; normal dose 600 g per cubic metre; no structural benefit and not a substitute for steel | [S9] Mapefibre NS 12 sheet |
| A Kenyan news explainer gives "seven to 14 days" with no source | [S22] kenyans.co.ke, 2023 |

**Gaps to resolve before writing**

- The sources do not agree on one number: 3 days minimum [S12], 3 to 7 days [S13], 7 days [S14, S11], 7 to 14 days in the regional press [S22]. Publish the range with its sources and say which applies when. Do not print "14 days" as a rule; no authoritative source for it was opened.
- No Tanzanian or East African standard on curing duration was found. **Not verified** whether TBS or the project specifications in common use set one.
- "Coast and inland are different problems" is **inferred** from [S12] (humidity reduces the effect of heat; wind and dry air raise evaporation). It needs Tanzania Meteorological Authority figures for Dar es Salaam, Dodoma, Arusha and Mwanza before any climate number is printed. `SEO-STRATEGY.md` quotes 75-84% coastal humidity from another report; reuse that source, not this file.
- No evaporation-rate threshold was captured (the chart in CIP 12 did not extract as text). Do not quote one.

**Links.** Mapefibre NS 12, Idrocrete KR 1000, Mapegrout T60 ME, Mapegrout ME05, Planicrete SP; posts 12 and 3; Journal post 1 (hidden roof) for slab roofs.

**Data table.** "Six curing methods compared": method, what you need on site, when it can start, what goes wrong, suits which element. All cells from [S13]. A second table: "How many days", one row per source with its condition.

**Diagram.** A slab in section on its first day: sun and wind above, arrows of evaporating water, the surface drying faster than bleed water rises, a plastic shrinkage crack opening; beside it the same slab under wet hessian and polythene. A second small graphic: two bars, moist-cured at 100 and air-dried at "as little as 50", labelled with [S13].

**Interactive element.** A curing planner. Inputs: pour date and time, element (slab, column, wall, repair patch), exposure (shaded, full sun, windy), method available (water and hessian, plastic sheet, curing compound). Output: a day-by-day checklist in plain words that can be sent to the fundi on WhatsApp, with the sourced minimum and the "do not let it dry between wettings" warning. No 3D. Swahili output is the obvious second stage and needs human translation.

### 3.4 Post 6 - How to grout a base plate with non-shrink grout

**Primary query:** how to grout a base plate. **Reader:** steel erector, mechanical contractor, site engineer, factory maintenance lead.

**Outline**

- H2 Grout, mortar, concrete: which goes under a base plate
- H2 Why ordinary sand and cement leaves a gap
- H2 Before the pour
  - H3 Gap and thickness
  - H3 Surface preparation and pre-soaking
  - H3 Formwork, head and vents
- H2 Mixing: water per bag and why not to add more
- H2 Pouring: one side, continuous, no vibration
- H2 Curing the exposed shoulders
- H2 How many bags: worked example
- H2 Hot-weather grouting
- H2 When cement grout is the wrong product
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| ACI definition: grout is a mixture of cementitious material and water, or other binding medium, with fine aggregate, proportioned to pour without segregation. Grout fills spaces; mortar bonds units | [S16] NRMCA CIP 22 |
| Expansive grouts can lose substantial compressive strength if test cubes are not confined | [S16] |
| Mapegrout ME05: high performance, shrinkage compensated, high-flow micro-concrete and thick section grout; uses include grouting machine and turbine baseplates, bridge bearings and crane rails | [S2] Mapegrout ME05 sheet |
| Application thickness 15-220 mm; maximum aggregate 4 mm; EN 1504-3 class R4 | [S2] |
| Water: 3.1-3.3 litres per 25 kg bag (12.4-13.2 kg per 100 kg); do not add more than the recommended dosage | [S2] |
| Yield 12.7 litres per 25 kg bag; density of mix 2200 kg per cubic metre | [S2] |
| Compressive strength over 25 MPa at 1 day, over 45 at 7 days, over 65 at 28 days; flexural 6, 9 and 10 MPa | [S2] |
| Pot life about 1 hour at +20 degrees C; application from +5 to +40 degrees C | [S2] |
| Method: watertight formwork, preferably water tested; pre-soak by filling the formwork; drain to saturated surface dry; mix 2 minutes, rest 2, remix 1; pour or pump continuously into the lowest part with venting; no vibration, rod or tap the form | [S2] |
| Hot conditions: shade the bags and mixer, cool water, avoid the hottest part of the day, mix only what can be placed without interruption; cure exposed surfaces with wet hessian under polythene; water spray within 8-12 hours of striking and for at least 48 hours | [S2] |
| Limits: not for precision anchoring; not on smooth concrete without roughening; not on vertical surfaces without formwork; add no cement or additives | [S2] |

**Gaps to resolve before writing**

- **Minimum gap.** The sheet's range starts at 15 mm. Many base-plate gaps are 25 to 50 mm, inside the range, but a thin precision gap is outside it and the sheet sends precision anchoring to Mapefill, which is not in `catalogue.ts`. Say this plainly. Report 10 raised the same stock question for epoxy grout under vibrating machinery (its SERP 19).
- Thickness guidance from other sources was seen only in search snippets (a project spec with a 1.5 inch minimum, a manufacturer brochure with 3-6 cm). **Not verified by fetch**; do not print.
- The sheet's sentence on water does not say "per bag"; the per-100 kg figure confirms it (noted in `src/content/mapei/mapegrout-me05.json`).
- No flow or expansion test value is printed on the sheet. Do not claim one.
- The word "grout" alone pulls tile grout results (report 10, SERP 2). Title, H1 and first sentence must say base plate.

**Links.** Mapegrout ME05, Mapefix EP 50 (holding-down bolts), Mapei Gun 585 2K, Eporip, Mapegrout T60 ME (for vertical patching without forms); `/mapei/concrete-repair`; pillar `/solutions/concrete-repair/grouting`; post 9.

**Data table.** "Mapegrout ME05 at a glance for base plates": thickness range, water per bag, yield per bag, pot life, temperature range, strength at 1, 7 and 28 days. One source. Second table: bags needed for common plate sizes and gaps, computed from plate area times gap divided by 12.7 litres, with the formula shown and a line saying the shoulders and waste are extra.

**Diagram.** A section through a column base: foundation, pre-soaked roughened surface, levelling shims or nuts, base plate, holding-down bolts, formwork with a raised header box on the pouring side and a low vent on the far side, an arrow showing one-direction flow, hessian on the shoulders. Number each part against the method steps.

**Interactive or 3D element.** A bag calculator: plate length, width, gap, number of plates, optional bolt pockets. Output in litres and 25 kg bags, with water per mix, and a line when the gap is outside 15-220 mm. This is the "optional second tool" in report 10 section 8; build it once. A 3D exploded base (plate lifting off, grout flowing from the header side) would explain the venting point well: **flag before building**; an animated SVG section does the job at a fraction of the weight.

### 3.5 Post 9 - Chemical anchors for starter bars: hole, depth, cure

**Primary query:** how to use chemical anchor for rebar. **Reader:** contractor adding a column, slab extension or staircase to existing concrete; steel fixer; site engineer.

**Outline**

- H2 What a chemical anchor is, and when it beats an expansion bolt
- H2 The design is the engineer's: what this guide does and does not cover
- H2 Hole diameter and depth for each bar size
- H2 Drilling and cleaning: the step that decides the load
- H2 Injecting and setting the bar
- H2 Working time and loading time in a hot climate
- H2 Wet holes, flooded holes and anchors near the sea
- H2 Edge distance and spacing
- H2 How many fixings per cartridge: an estimate from geometry
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| Mapefix EP 50: epoxy resin for structural chemical anchor; for threaded rods and rebar in concrete, cracked or non-cracked, tension and compression zones; uses include dolly bars for second pours, immersed and underwater anchors, anchors in marine surroundings | [S4] Mapefix EP 50 sheet |
| No expansion stress is generated, so it suits anchors close to edges or at tight spacing | [S4] |
| Hole size, depth, bar diameter and loads must be calculated by a qualified design engineer | [S4] |
| Assessed to EAD 330499-01-0601 (anchors) and EAD 330087-00-0601 (post-installed rebar) | [S4] |
| Application from +5 to +40 degrees C, including damp or wet substrates and flooded holes | [S4] |
| Table 1, gel time by substrate temperature: 80 min at +5, 60 at +10, 40 at +15, 30 at +20, 12 at +25, 8 at +35, 6 at +40 degrees C | [S4] |
| Table 1, load time on a dry substrate: 60 h, 48 h, 24 h, 12 h, 10 h, 7 h, 4 h at the same temperatures; on a wet substrate: 120 h, 96 h, 48 h, 24 h, 20 h, 14 h, 8 h | [S4] |
| Table 1 also prints "Package temperature +5 degrees C / +25 degrees C" | [S4] |
| Table 2, threaded rods M8 to M30: hole diameter 10, 12, 14, 18, 22, 28, 30, 35 mm; minimum depth 60, 60, 70, 80, 90, 96, 108, 120 mm; maximum depth 160 to 600 mm; minimum edge distance 35 to 80 mm; minimum spacing 40 to 140 mm; maximum torque 10 to 300 Nm | [S4] |
| Table 5, rebar 8 to 32 mm: minimum depth 60, 60, 70, 75, 80, 90, 96, 100, 112, 128 mm; maximum 160 to 640 mm; minimum edge distance 35 to 85 mm; minimum spacing 40 to 150 mm | [S4] |
| Method: drill; remove all dust with hand tools, compressed air or water blasting; clean and degrease the bar; discard the first 3 shots; fill from the bottom of the hole; insert the bar with a rotary movement until resin comes out; insert within the gel time; load only after the load time | [S4] |
| Cartridge 585 ml; consumption "according to the volume of the hole to be filled" | [S4] |
| Compressive strength 122 N/mm2; service temperature -40 to +72 degrees C | [S4] |
| Limits: not on dusty or crumbling surfaces, not on oil or release agents, not below +5 degrees C | [S4] |

**Gaps to resolve before writing**

- **Rebar hole diameters (Table 5)** extracted badly: the 12 mm entry is garbled (noted in `src/content/mapei/mapefix-ep-50.json`). A person must read that row from the PDF before it is published.
- The sheet prints **no anchors-per-cartridge figure**. Any figure on the site is a geometric estimate: annular volume = pi / 4 x (hole diameter squared minus bar diameter squared) x depth, then 585 ml minus the three discarded shots, divided by that volume. Label it as an estimate and say real consumption is higher.
- The meaning of "Package temperature +5/+25" is my reading (the cartridge should be between those temperatures when used). **Inferred**; confirm with Mapei. If confirmed, it is the most useful local line in the post: keep cartridges out of the sun.
- Characteristic bond values are in the sheet (tables by temperature range and hole condition) but are design inputs. Keep them off the blog; link the PDF.
- Chemical against mechanical anchors (report 10, J10) needs a neutral source on mechanical anchors that I did not fetch.

**Links.** Mapefix EP 50, Mapei Gun 585 2K, Mapegrout ME05, Eporip (bonding the second pour), Planicrete SP; pillar `/solutions/concrete-repair/anchoring`; posts 6 and 8.

**Data table.** Two tables straight from the sheet: "Hole and depth by bar size" (after the rebar row is checked by eye) and "Gel time and load time by temperature", with the +25 to +40 degree rows highlighted as the Tanzanian working range (the highlight is editorial; the numbers are the sheet's).

**Diagram.** A section through one anchor: existing concrete, hole diameter d0, bar diameter d, embedment depth, edge distance c and spacing s dimensioned with the sheet's symbols, resin filling the annulus, and a five-panel strip for drill, blow, brush, inject from the bottom, twist in.

**Interactive or 3D element.** A cartridge and timing calculator. Inputs: rod or rebar, size, depth (clamped to the sheet's minimum and maximum), number of holes, substrate temperature (chips at the sheet's seven temperatures), dry or wet hole. Outputs: gel time, earliest load time, estimated cartridges with the "estimate" label. A small 3D cut-away block that can be rotated to see the annulus is a natural fit and is the one place in this cluster where 3D adds real understanding: **flag before building**, lazy-load, static SVG fallback.

### 3.6 Post 2 - Epoxy crack injection, step by step: what works

**Primary query:** how to inject epoxy into concrete cracks. **Reader:** repair contractor, site engineer, consultant writing a method statement.

**Outline**

- H2 What injection does: glue, not filler
- H2 Cracks that suit injection, and cracks that do not
  - H3 Still and dry: yes
  - H3 Damp: only with a moisture-tolerant resin
  - H3 Moving: no
  - H3 Caused by rusting steel: no, fix the steel
- H2 Choosing the resin by crack width
- H2 The procedure
  - H3 1. Find the cause first
  - H3 2. Clean the crack and its edges
  - H3 3. Set the ports or packers
  - H3 4. Seal the surface between them
  - H3 5. Mix whole kits only
  - H3 6. Inject from the lowest port to refusal
  - H3 7. Remove ports and seal
- H2 Working time at +23 and +30 degrees C
- H2 How much resin: estimating from the crack
- H2 How to check the work
- H2 Safety
- H2 Questions people ask (FAQ)

**Facts and figures the post needs**

| Fact | Source |
|---|---|
| Purpose: restore structural integrity and resistance to moisture penetration; workable from 0.002 in. (0.05 mm) | [S10] ACI RAP-1 |
| Not applicable where the crack will keep moving; not for cracks caused by corroding steel; for damp cracks that cannot be dried, consider a moisture-tolerant epoxy; where the crack is not structural, a non-structural grout may suit better | [S10] |
| For crack widths 0.010 in. (0.3 mm) or smaller, use a low-viscosity epoxy of 500 cps or less; for wider cracks, or access from one side only, a medium to gel viscosity may suit better | [S10] |
| Clean about 1/2 in. (13 mm) each side of the crack; wire brushing preferred because grinders fill the crack with dust | [S10] |
| Cap seal about 1 in. wide by 3/16 in. thick (25 x 5 mm) along the crack; on both faces when the crack goes right through | [S10] |
| Start at the widest section of a horizontal crack; inject vertical cracks from the bottom up; continue to refusal; when the next port bleeds, cap and move on; for hairline cracks try about 200 psi (1.3 MPa) for 5 minutes or closer port spacing | [S10] |
| Checking: cores, normally 2 in. (50 mm) diameter, to see penetration; or impact echo, ultrasonic pulse velocity, spectral analysis of surface waves | [S10] |
| Safety list: data sheets on site, eye protection, gloves, eye wash, ventilation of closed spaces, notify occupants | [S10] |
| Epojet LV: two-component epoxy, very low viscosity, for injection in microcracks, also on wet surfaces; EN 1504-5; Brookfield viscosity of the mix 140 mPa.s; density 1.1 kg/l | [S5] Epojet LV sheet |
| Mixing ratio A : B = 3.2 : 0.8; do not use part kits unless weighed on a precision scale | [S5] |
| Workability 35 minutes at +23 degrees C and 15 minutes at +30; setting 7-8 hours at +23 and 2-3 hours at +30; full hardening 7 days; application +10 to +35 degrees C | [S5] |
| Method: drill 8-9 mm holes beside the crack angled to intercept it; blow out; fit packers; seal the surface with Adesilex PG1 or PG2 and wait at least 12 hours; test with compressed air; inject from the lowest tube until resin overflows from the next; horizontal cracks can be filled by pouring | [S5] |
| Consumption for sealing cracks: 1.1 kg per litre of cavity | [S5] |
| Limits: not below +10 degrees C; not on dusty, crumbling or weak substrates; not for expansion joints | [S5] |
| Eporip as the gravity-fed option: fills cracks wider than 0.5 mm by placing; 1.35 kg per litre of cavity; workability 60 minutes at +23 and 40 minutes at +30 degrees C; not on wet surfaces | [S6] Eporip sheet |
| Adesilex PG2 TG: two-component thixotropic epoxy adhesive (surface seal and packer bedding) | catalogue.ts summary; open its sheet for figures [S7] |

**Conflicts and gaps to resolve before writing**

- **Port spacing.** ACI RAP-1 prints "typically 8 in. (40 mm) on center". The two numbers do not match (8 inches is about 200 mm). Do not publish either until checked against another edition or the ICRI guideline it cites.
- **Pack size.** `catalogue.ts` lists Epojet LV as a 2.5 kg set; the data sheet prints a 4 kg kit. Use the owner's list for stock and log the conflict if it is not already in `docs/CATALOGUE-EXTRACTION.md`.
- The Epojet LV sheet's volumetric shrinkage row is misprinted (noted in its JSON). Leave shrinkage out.
- The sheet says Adesilex PG1 or PG2; the stocked product is Adesilex PG2 TG. Confirm it is the same use before naming it as the cap seal.
- The 140 mPa.s figure sits under ACI's 500 cps line (the units are equal). That comparison is mine; it is arithmetic, not a claim from either source.
- Leaking cracks need a water-reactive resin, which is not in the catalogue. Say so and offer the enquiry route (report 10 made the same call).

**Links.** Epojet LV, Eporip, Adesilex PG2 TG, X-Seal PG and Mapeflex PU 45 FT (moving cracks), Lamposilex (active leaks at a point, if its sheet supports that use: check); pillar `/solutions/concrete-repair/crack-injection`; posts 1 and 3.

**Data table.** "Which crack, which method": rows for still and dry, still and damp, wide and horizontal, moving, leaking, rust-stained; columns for method, stocked product, the governing limit and its source. Second table: Epojet LV working and setting time at +23 and +30 degrees C beside Eporip's.

**Diagram.** A wall in section and elevation side by side: the crack, angled 8-9 mm drill holes crossing it, packers, the surface seal band, and numbered arrows for the injection order from the lowest port upward, with resin shown bleeding from the next port.

**Interactive or 3D element.** A resin estimator: crack length, average width, member thickness give cavity volume, times 1.1 kg per litre for Epojet LV or 1.35 for Eporip, with a stated allowance the user sets for waste and for the crack widening inside the member. A see-through 3D wall showing resin filling the crack plane from the bottom up would explain "inject to refusal" better than words: **flag before building**. A looped SVG animation of the same section is the light version and is enough.

---

## 4. FAQ questions per post

None of these is observed People Also Ask data. "(observed title)" marks a question copied from a page title that ranked in a checked SERP; the rest are **inferred** candidates. Capture real PAA from a Tanzanian browser before finalising. Answers must come from the sources in section 3 or section 5.

**Post 1 - Structural or not?**
1. How do I know if a crack in my wall is structural?
2. Are hairline cracks in a concrete slab normal? (close to an observed title: "Are Cracks in Concrete Slab Normal?")
3. What do wall cracks mean? (observed title, in substance)
4. How do I check whether a crack is still moving?
5. Can I fill a crack myself, and with what? (the JamiiForums question, in English)
6. When should I call a structural engineer about a crack? (observed title, in substance: "When to get a professional to repair concrete cracks")
7. Swahili candidate, after native review: Nataka kuziba ufa wa ukuta, nahitaji nini? (built from the 2015 JamiiForums post)

**Post 2 - Epoxy crack injection**
1. What is the narrowest crack that can be injected?
2. Can epoxy be injected into a wet or leaking crack?
3. Why not inject a crack that has rust stains?
4. How far apart should injection ports be? (answer only after the spacing conflict is resolved)
5. How long before the injected member can be loaded?
6. How much resin does a crack take?
7. How to apply epoxy injection? (observed title)

**Post 3 - Rusting rebar and falling concrete**
1. Is concrete spalling dangerous? (observed title)
2. What is spalling concrete, and what causes it? (observed title, in substance)
3. Can I plaster over exposed rusty steel?
4. Do I have to break out behind the bar?
5. What do I paint on the steel before patching?
6. How thick can repair mortar go on overhead in one layer?
7. Why does the patch fall off again after a year or two?

**Post 4 - Carbonation or chlorides**
1. Why does steel rust inside concrete if concrete protects it?
2. What is carbonation of concrete?
3. Does sea air damage concrete buildings?
4. How much cover should concrete have near the coast? (needs a design-code source; none fetched)
5. Can rusting be stopped once it has started?

**Post 5 - Repair mortar or sand and cement**
1. Can I use mortar to patch concrete? (observed title)
2. What does R4 mean on a repair mortar?
3. Why does a sand and cement patch crack around its edge?
4. Do I need a bonding coat under repair mortar?
5. Can I add cement or water to a bagged repair mortar?

**Post 6 - Grouting a base plate**
1. How thick should the grout be under a base plate? (observed forum title, in substance)
2. Can I use sand and cement under a steel column base?
3. How much water goes in a bag of non-shrink grout?
4. How many bags of grout do I need?
5. Do I vibrate non-shrink grout?
6. When can the machine or column be loaded? (the sheet gives strength at 1, 7 and 28 days; the loading decision is the engineer's)
7. Is this the same as tile grout? (answers the SERP confusion)

**Post 7 - Honeycomb in concrete**
1. Is honeycomb in concrete a structural problem?
2. What causes honeycombing in columns?
3. Can honeycomb be plastered over?
4. When does honeycombed concrete have to be broken out and recast?
5. What do I fill honeycomb with?

**Post 8 - Bonding new concrete to old**
1. Will concrete bond to concrete? (observed title, report 10)
2. What do you put between old concrete and new concrete? (observed title, report 10)
3. SBR or epoxy bonding agent: which one for a structural joint?
4. How long can a bonding coat sit before the new concrete goes on?
5. What happens if the bonding slurry dries first?

**Post 9 - Chemical anchors for starter bars**
1. How deep should I drill for a 12 mm or 16 mm bar? (answer with the sheet's minimum and maximum and "the engineer sets the depth")
2. What size hole for each bar size?
3. How long before a chemical anchor can take load in hot weather?
4. Can a chemical anchor be used in a wet hole?
5. Why must the hole be blown and brushed?
6. How many anchors does one cartridge do? (estimate only)
7. Chemical anchor or expansion bolt near an edge?

**Post 10 - Waterproof concrete admixture**
1. Does waterproof cement really work?
2. How much crystalline admixture per bag of cement? (the sheet doses per 100 kg of cementitious material)
3. Do I still need a membrane in a water tank?
4. What water/cement ratio does waterproof concrete need?
5. Will an admixture seal cracks?

**Post 11 - Curing in hot weather**
1. How many days should concrete be cured?
2. Concrete curing: 7 days or 14 days? (observed title)
3. Why are buildings sprayed with water after concreting? (observed title, in substance)
4. When should curing start?
5. Is watering twice a day enough?
6. Curing compound or water: which is better in sun and wind?
7. Do repair mortars and grouts need curing too?
8. Swahili candidates, after native review: Zege limwagiliwe maji siku ngapi? Kumwagilia mara mbili kwa siku kunatosha? (my wording, **not verified**)

**Post 12 - Why a new slab cracks on day one**
1. Why did my slab crack the same day it was cast?
2. Are plastic shrinkage cracks structural?
3. Do fibres stop concrete cracking?
4. Can fibres replace mesh or steel? (the sheet says no)
5. How are early cracks in a slab repaired?

**Post 13 - R1 to R4**
1. What is EN 1504?
2. What is the difference between R3 and R4 repair mortar?
3. Which class does a column repair need? (the engineer's decision; say so)

---

## 5. Sources

Keys in square brackets are used in section 3. "Read" means the page or PDF text was read. "SERP only" means the URL appeared in a result list and was not opened.

**Manufacturer data sheets (read from the repo copies; URLs from `src/config/mapei-tds.json`, fetched 2026-11-05)**

- [S1] Mapegrout T60 ME, edition 4086-10-2015 (UAE). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_01086_mapegrout-t60-me_en-ae_ab5e4c67c2f74ddfbb53de3da24c19cc.pdf?sfvrsn=fcbce531_0 - local `/tds/mapei/mapegrout-t60.pdf`
- [S2] Mapegrout ME05, edition 497-3-2023-I (UAE). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00497_mapegrout-me05_en-ae_dc8335e6689643aca05021d68f6aeafb.pdf?sfvrsn=c404e378_0 - local `/tds/mapei/mapegrout-me05.pdf`
- [S3] Mapefer 1K, edition 1305-5-2025 en (IT). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_01305_mapefer-1k_en_6013026914f742faa11bf46d1f4714ac.pdf?sfvrsn=6f4cb662_0 - local `/tds/mapei/mapefer-1k.pdf`
- [S4] Mapefix EP 50, edition 5810-7-2022 en (IT). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_05810_mapefix-ep-50_en_4a51f172641e4f2183f3f32f3f0a4259.pdf?sfvrsn=42f7669f_0 - local `/tds/mapei/mapefix-ep-50.pdf`
- [S5] Epojet LV, edition 365-11-2024 (UAE). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00365_epojet-lv_en-ae_37c8621b378e4a22accf073da5da7883.pdf?sfvrsn=3474ae9a_0 - local `/tds/mapei/epojet-lv.pdf`
- [S6] Eporip, edition 366-2-2025 en (IT). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00366_eporip_en_2890a834f1bc46e69a1d2cc8dff6164a.pdf?sfvrsn=be5883db_0 - local `/tds/mapei/eporip.pdf`
- [S7] Adesilex PG2 TG, edition 379-12-2022-I (UAE). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00379_adesilex-pg2-tg_en-ae_8b745cc76f024277a8ae82c0b4e932d6.pdf?sfvrsn=1b81d60b_0 - local `/tds/mapei/adesilex-pg2-tg.pdf` (catalogue summary used; sheet not re-read today)
- [S8] Idrocrete KR 1000, edition 7804-12-2019 (GB). https://cdnmedia.mapei.com/docs/librariesprovider26/products-documents/1_7804-idrocretekr1000-gb_e3533a86173946aea3642fe1dd5b7e3b.pdf?sfvrsn=e496a5a7_0 - local `/tds/mapei/idrocrete-kr-1000.pdf`
- [S9] Mapefibre NS 12, edition 751-06-2026-EN. https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00751_mapefibre-ns-12-_en_f3f5b510b2d44f81bfa8a746b2c5166e.pdf?sfvrsn=b5712531_0 - local `/tds/mapei/mapefibre-ns-12.pdf`
- Planicrete SP, edition 700-4-2023 (UAE) (for posts 5 and 8). https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/1_00700_planicrete-sp_en-ae_381d91c654e841e2b681b6b6b45d683d.pdf?sfvrsn=e7d8901d_0 - local `/tds/mapei/planicrete-sp.pdf`
- X-Tech Bond: **no data sheet in the repo** (`src/config/x-calibur-tds.json` holds five X-Calibur sheets and this is not one). Post 8 needs it.

**Standards bodies and industry institutes (read)**

- [S10] American Concrete Institute, RAP Bulletin 1, Structural Crack Repair by Epoxy Injection (2003). https://www.concrete.org/Portals/0/Files/PDF/RAP-1.pdf
- [S11] National Ready Mixed Concrete Association, CIP 25, Corrosion of Steel in Concrete. https://www.nrmca.org/wp-content/uploads/2021/01/25pr.pdf
- [S12] NRMCA, CIP 12, Hot Weather Concreting. https://www.nrmca.org/wp-content/uploads/2021/01/12pr.pdf
- [S13] NRMCA, CIP 11, Curing In-Place Concrete. https://www.nrmca.org/wp-content/uploads/2021/01/11pr.pdf
- [S16] NRMCA, CIP 22, Grout. https://www.nrmca.org/wp-content/uploads/2021/01/22pr.pdf
- [S15] BRE Group, Assessing cracks in houses (15 April 2014). https://bregroup.com/insights/assessing-cracks-in-houses/

**Universities (read)**

- [S14] Penn State, CE 584 course library, Curing Concrete - Normal, Hot and Cold Weather. https://www.engr.psu.edu/ce/courses/ce584/concrete/library/construction/curing/curing.html
- [S18] Mpinzire, S. R. (1999), Concrete Cracking in Coastal Areas, Tanzania Journal of Engineering and Technology 23(1), 97-105. Abstract only. https://commons.udsm.ac.tz/tjet/vol23/iss1/11
- [S19] Rubaratuka (1999), Defects in Reinforced Concrete Due to Environmental Conditions and Concrete Treatment: A Case Study at the University of Dar es Salaam, TJET 23(1), 25-30. Abstract only. https://commons.udsm.ac.tz/tjet/vol23/iss1/3
- [S20] Rubaratuka (2001), same subject, TJET 24(1), 91-95. Abstract only. https://commons.udsm.ac.tz/tjet/vol24/iss1/9

**News and regional pages (read)**

- [S17] The Citizen, "Kariakoo's final death toll hits at 29 as 88 injured" (27 November 2024). https://thecitizen.co.tz/tanzania/news/national/kariakoo-s-final-death-toll-hits-at-29-as-88-injured-4837496
- [S22] Kenyans.co.ke, "Concrete Curing: 3 Reasons Buildings are Sprayed With Water After Construction" (16 March 2023). https://www.kenyans.co.ke/news/86924-concrete-curing-3-reasons-buildings-are-sprayed-water-after-construction
- Kenyans.co.ke, "Building Houses: 3 Techniques Used to Prevent Masonry Wall Cracks" (2 July 2023). https://www.kenyans.co.ke/news/90939-building-houses-3-techniques-used-prevent-masonry-wall-cracks
- Mjenzi wa Nyumba TZ, "Major Causes of Concrete Slab Failure" (26 November 2025). https://mjenziwanyumbatz.blogspot.com/2025/11/major-causes-of-concrete-slab-failure.html
- JamiiForums, thread "Ujenzi" (12 July 2015). https://www.jamiiforums.com/threads/ujenzi.883716/
- Ohorongo Cement, "Honeycombing in concrete" (1 November 2019). https://ohorongo-cement.com/?p=2860
- The Constructor, "What is Spalling Concrete? Their Causes and Repair". https://theconstructor.org/practical-guide/spalling-concrete-causes-repair/
- State Department for Public Works, Kenya, Inspection Services (read; contains no statistics). https://publicworks.go.ke/node/276

**Could not be opened**

- https://www.monitor.co.ug/uganda/magazines/homes-and-property/warning-signs-that-your-house-is-in-danger-of-falling-apart-1864214 (403)
- https://tjet.udsm.ac.tz/index.php/tjet/article/view/294 (certificate error; same paper read at [S18])
- https://www.engr.psu.edu/ce/courses/ce584/concrete/library/ (403)
- https://www.cement.org/learn/concrete-technology/durability/corrosion-of-embedded-materials and https://www.cement.org/learn/concrete-technology/concrete-construction/hot-weather-concreting (returned unrelated content)
- NRMCA CIP 4, 5 and 7 at the same URL pattern (404). CIP 5, Plastic Shrinkage Cracking, is the source post 12 needs.

**SERP only (ranked, not opened; used to describe who ranks, never for facts)**

- https://selar.com/7z2r998771
- https://www.uswaterproofing.com/learning-center/signs-of-foundation-problemsstructural-vs.-non-structural-wall-cracks
- https://groundworks.ca/resources/wall-cracks-structural-vs-non-structural
- https://structuralrepairs.com.my/how-to-identify-structural-vs-non-structural-cracks-in-buildings/
- https://structuralrepairs.com.my/when-to-get-a-professional-to-repair-concrete-cracks/
- https://structuralrepairs.com.my/honeycombs-in-concrete-the-causes-effects-method-to-repair/
- https://ipm.my/wp-content/uploads/2020/02/Is-Concrete-Spalling-Dangerous.pdf
- https://build-construct.com/structural-engineering/are-cracks-in-concrete-slab-normal-guide/
- https://www.heidelbergmaterials.co.uk/en/ready-mixed-concrete/technical-information/cracked-concrete
- https://engineerfix.com/can-i-use-mortar-to-patch-concrete/
- https://www.baumerk.com/en/blog/how-to-apply-epoxy-injection
- https://www.eng-tips.com/threads/determining-grout-thickness-under-a-machine-base-plate-plate.282982
- https://eng-tips.com/threads/grout-under-base-plates-residential-house.495790
- https://www.middleeast.weber/files/sodamco/2018-10/Bedding%20of%20machine%20plates-brochure.pdf
- https://tza.sika.com/content/dam/dms/tz01/8/sikacem-501-crystallinetz.pdf
- https://constructionkenyashowcase.com/?p=5561
- https://www.bricknbolt.com/blogs-and-articles/construction-guide/honeycomb-concrete-causes-prevention-repair
- https://www.bricknbolt.com/blogs-and-articles/construction-guide/chemical-anchors
- https://cdn.ramset.com.au/wp-content/uploads/2023/07/Ramset-SARB-ANZ-Ed.3-CHEMICAL-ANCHORING-Reinforcing-Bar-Anchorage.pdf
- https://www.jamiiforums.com/forums/jukwaa-la-ujenzi-na-makazi.135/
- https://uwekezajimajengo.substack.com/p/mambo-5-ya-kuzingatia-wakati-wa-ujenzi-593
- https://bregroup.com/store/bookshop/assessment-of-damage-in-low-rise-buildings-progressive-foundation-movement-revised-1995-dg-251

---

## 6. Not verified: one list

1. Any search volume, and any ranking as seen from Tanzania or Kenya.
2. Any People Also Ask question.
3. Swahili search behaviour beyond one 2015 forum post; the Swahili FAQ wording in section 4.
4. A width at which a crack in a reinforced concrete member is "structural"; the full BRE Digest 251 width bands.
5. ACI RAP-1 port spacing (the source prints inconsistent units).
6. Measured chloride or carbonation data for any Tanzanian site; the distance of the UDSM campus from the sea.
7. A break-out depth behind corroded bars; the carbonation indicator test method.
8. A Tanzanian or East African standard for curing duration; climate figures by city; an evaporation-rate threshold.
9. Mapefix EP 50 rebar hole diameters (Table 5 extracted badly); the meaning of the "package temperature" line; any anchors-per-cartridge figure.
10. EN 1504-3 thresholds for classes R1 to R3.
11. The X-Tech Bond data sheet (not in the repo).
12. Whether Mapecure SRA, Mapeshield, Mapefill, Adesilex PG1 or a water-reactive injection resin can be supplied. The Mapei sheets point to them; `catalogue.ts` does not list them.
13. Epojet LV pack size (owner's list 2.5 kg, data sheet 4 kg kit).
14. The findings of the commission on the Kariakoo collapse.
