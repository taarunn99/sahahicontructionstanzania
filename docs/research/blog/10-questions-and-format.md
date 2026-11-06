# Blog 10 - Search questions and post format (research date 2026-11-06)

Prepared for The Journal on sahihicc.com (Sahihi Construction Chemicals Limited, Dar es Salaam). Research only. Part A is the question bank, Part B is what a post needs to rank and be cited in 2026, with a recommended template. Every guidance claim carries the URL it came from. "Not fetched" and "not verified" mean exactly that.

## 0. Method and limits (read before quoting anything)

**What was done on 2026-11-06.**
- 18 web searches, standard mode (the cap was 18). 17 returned results; 1 was refused (see the log in A.3).
- About 75 direct page fetches: Google Search Central, web.dev, Bing Webmaster Blog, OpenAI and Perplexity crawler docs, the model-viewer docs source, and around 45 ranking pages, FAQ pages and forum threads.
- Read first: `SEO-STRATEGY.md` sections 3 to 9, `DESIGN-HANDOFF.md` sections 12 to 14, and the question banks in `docs/research/07` to `10`.

**Limits.**
- **The search tool is US-located and returns no volumes.** Nothing here is a Google Tanzania position. No search volume is given anywhere in this file. "Evidence" below means how many real questions were seen and where, not how many people search.
- **No People Also Ask box and no "related searches" block was captured.** The tool returns result titles and links only. This is the same limit reports 07 to 10 hit. Nothing in Part A is a verbatim Google PAA entry. The substitutes are: question-form page titles returned by the searches, FAQ blocks and question headings read on the pages, and forum thread titles and posts. Two of the sources (calendar-uk.co.uk "frequently-asked-questions" pages and similar) are sites that publish PAA-style question pages, which is the closest proxy available, but they blocked fetching (403), so only their titles are used.
- **Reddit could not be searched** (the tool refuses the domain). The same refused query also carried quora.com, so **Quora was not searched either**. Facebook was not attempted (blocked for report 15). The YouTube search returned only global English tutorials: no Tanzanian or Swahili video title was found.
- **JamiiForums is reachable.** Four threads were fetched today; others are carried from report 07 and marked.
- Blocked or failed today: tilersforums.com (403), calendar-uk.co.uk (403), angi.com (403), in.weber and middleeast.weber (403), mapei.com (403), renovationfind.com (403), troublefreepool.com (browser check), kenyanlist.net (522 twice), jkcement.com/concrete-spalling (404), and three URLs that the search returned but that were 404 on fetch. Where a question comes from a result title only, the table says "title".
- **Fetched pages are read through a summarising model** that caps each quote at about 125 characters. Questions and quotes below are as that tool returned them. Check a quote against the live page before repeating it in public copy.
- Where an original title used a long dash it is written here with a hyphen (house rule), and the row says so.
- No prices are recorded in this file, by the owner's ruling.

---

# PART A - Question mining

## A.1 The clusters at a glance

Nineteen clusters. "Verbatim" counts questions or question-form titles actually seen. "Local" is whether any East African source was among them. Category is the Journal category in `src/config/blog.ts`.

| # | Cluster | Category | Verbatim seen | Local evidence | Strength |
|---|---|---|---|---|---|
| 1 | Hidden roof and flat concrete roof leaks | waterproofing | 9 | Tanzania (JamiiForums), Kenya | strong |
| 2 | Which roof waterproofing system, and how long it lasts | waterproofing | 10 | none | medium |
| 3 | What waterproofing costs and what drives it | waterproofing | 5 | Kenya, Tanzania (phrase) | thin but local |
| 4 | Bathroom and shower waterproofing before tiling | waterproofing | 10 | none | strong |
| 5 | Water tanks: leaks, potable-safe systems | waterproofing | 10 | Tanzania (JamiiForums) | strong |
| 6 | Swimming pools: adhesive, grout, filling time | waterproofing | 7 | Tanzania (Sika heading) | thin |
| 7 | Rising damp, salt and peeling paint | building-in-tanzania | 10 | Tanzania (JamiiForums) | strong |
| 8 | Tile adhesive or sand and cement | tiling | 10 | Kenya (Nation) | strong |
| 9 | Using tile adhesive correctly | tiling | 10 | none | strong |
| 10 | Tiles lifting, hollow or tenting | tiling | 10 | Kenya (Bamburi quote) | strong |
| 11 | Grout: epoxy or cement, and shower grout | tiling | 10 | none | strong |
| 12 | Tiling cost and how to measure a room | building-in-tanzania | 9 | Tanzania (JamiiForums) | strong, local |
| 13 | Tile levelling systems, lippage, tools | tools-and-technique | 10 | none | strong |
| 14 | Epoxy floors: what, how long, what drives cost | flooring | 10 | Uganda | strong |
| 15 | Epoxy against tiles, over tiles, outdoors | flooring | 9 | Uganda | medium |
| 16 | Self-levelling compound | flooring | 10 | none | strong |
| 17 | Crack injection, bonding old to new, grouts | concrete-repair | 9 | none | medium (titles, few buyer questions) |
| 18 | Spalling concrete and rusted steel | concrete-repair | 10 | none | medium |
| 19 | Sealants and joints | tools-and-technique | 8 | none | thin |

**The eight with the most evidence:** 1 (hidden roof leaks), 8 and 9 together (tile adhesive against sand and cement, and how to use it), 10 (tiles lifting), 12 (tiling cost and measuring, Tanzanian voices), 7 (damp, salt, peeling paint), 14 (epoxy floor basics and cost drivers), 13 (levelling systems), 5 (water tanks). Clusters 4, 11 and 16 are equally well attested in English but have no East African source.

## A.2 The questions

Source key: **fetched** = read on the page today. **title** = question-form title returned by a search today, page not readable or not opened. **r07 / r08 / r09 / r10** = carried from `docs/research/07` to `10` (collected 2026-11-05), not re-fetched today.

### 1. Hidden roof and flat concrete roof leaks

| Question as written | How seen | URL |
|---|---|---|
| "Msaada: Nyumba ya contemporary inavuja" (thread title, 17 Apr 2021) | fetched | https://www.jamiiforums.com/threads/msaada-nyumba-ya-contemporary-inavuja.1860634/ |
| "Afanyeje ili isivuje?" | fetched | same thread |
| "Kivipi Dodoma hakuna mafundi madhubuti?" | fetched | same thread |
| "Namna Kujenga & Kurekebisha Kuvuja Paa la Contemporary Houses (hidden roofing)" | r07 | https://www.jamiiforums.com/threads/namna-kujenga-kurekebisha-kuvuja-paa-la-contemporary-houses-hidden-roofing.1867508/ |
| "Je, ni kweli nyumba mnazoziita contemporary (Hidden roof ) zinapunguza gharama ya kupaua?" | r07 | https://www.jamiiforums.com/threads/je-ni-kweli-nyumba-mnazoziita-contemporary-hidden-roof-zinapunguza-gharama-ya-kupaua.2031420/ |
| "What causes most roof leaks in Nairobi homes?" (linked as the previous article) | fetched | https://bestcareservices.co.ke/how-much-does-it-cost-to-fix-a-leaking-roof-in-nairobi/ |
| "Why Waterproofing Fails on Concrete & Flat Roofs (and How to Prevent It)" (Kenyan LinkedIn post) | title | https://ke.linkedin.com/in/ernest-juma-326ab714b |
| "seven reasons why flat roofs leak" | title | https://buildingcentre.co.uk/news/articles/seven-reasons-why-flat-roofs-leak |
| "How to stop water leakage from concrete roof" | r07 | https://www.bricknbolt.com/blogs-and-articles/construction-guide/how-to-stop-water-leakage-from-concrete-roof |

Forms present: why, how, what should he do. The Swahili wording is the buyer's own and is the only Tanzanian-voice evidence in the whole roof topic.

### 2. Which roof waterproofing system, and how long it lasts

| Question as written | How seen | URL |
|---|---|---|
| "What is the Best Waterproofing for Flat Roofs?" | fetched | https://homeworlddesign.com/what-is-the-best-waterproofing-for-flat-roofs/ |
| "How important is flat roof waterproofing?" | fetched | same |
| "What are the 3 main methods of waterproofing a flat roof?" | fetched | same |
| "What are the differences between the main methods of waterproofing?" | fetched | same |
| "What should you consider when selecting waterproofing for a flat roof?" | fetched | same |
| "How Long Does Roof Waterproofing Last in the Tropics?" | title | https://lp260608-0755-tri-arch-sdn-bhd-a70py9.pages.dev/guide/how-long-does-waterproofing-last-tropical-climate/ |
| "How Long Does Roof Waterproofing Last in Malaysia?" | title | https://lp260609-0118-roof-builder-resources-sdn-bhd-34agwp.pages.dev/guide/how-long-does-roof-waterproofing-last/ |
| "how long should waterproofing last" | title | https://acrylonitriles.netlify.app/post/how-long-should-waterproofing-last/ |
| "Roof membranes: how long do they last" (from the URL slug) | title | https://www.yutzyroofingservice.com/roof-membranes-how-long-do-they-last |
| "The pros and cons of torch on membrane waterproofing" | r07 | https://www.asianpaints.com/blogs/the-pros-and-cons-of-torch-on-membrane-waterproofing.html |

Note: three of the "how long" pages are thin landing pages on throwaway hosts. That the form is being mass-targeted elsewhere in the tropics is the signal; none answers it for East Africa.

### 3. What waterproofing costs and what drives it

| Question as written | How seen | URL |
|---|---|---|
| "How much does it cost to fix a leaking roof in Nairobi?" | fetched | https://bestcareservices.co.ke/how-much-does-it-cost-to-fix-a-leaking-roof-in-nairobi/ |
| "Best waterproofing methods for a flat roof - and their costs" (Kenyan forum thread; original title uses a long dash) | title; 522 on two fetches | https://kenyanlist.net/threads/best-waterproofing-methods-for-a-flat-roof-%E2%80%93-and-their-costs.41654/latest |
| "Estimated Cost of Residential Roof Repair Services in Nairobi, Kenya for Common Issues" | title | https://bestcareservices.co.ke/?p=40182 |
| "Planning to hire a professional for torch-on waterproofing but you are just not sure what to expect price-wise?" | r07 | https://www.procompare.co.za/prices/torch-on-waterproofing |
| "gharama ya kuziba hiyo mivujo" (the cost of sealing those leaks; phrase in a JamiiForums roof thread) | r07 | see `docs/research/07-kw-waterproofing.md` section 5 for the thread |

Cost drivers the ranking Kenyan pages list (names only, no figures): the membrane type priced as separate lines (bituminous sheet, PVC sheet, liquid applied), roof area, and whether it is a repair or a full system. Seen in the result summaries for https://bestcareservices.co.ke/directory/roof-waterproofing.html and https://bestcareservices.co.ke/roof-waterproofing-service-in-nairobi-kiambu-kenya/ . **No Tanzanian or Ugandan page answered a waterproofing cost question in search 2.** That is the vacuum `/price-list` and a cost-driver post can take without printing a number.

### 4. Bathroom and shower waterproofing before tiling

| Question as written | How seen | URL |
|---|---|---|
| "Do I need to tank shower walls before tiling?" | fetched | https://www.myjobquote.co.uk/questions/do-i-need-to-tank-shower-walls-before-tiling |
| "We're fitting a new shower enclosure and our tiler has mentioned tanking the walls first. Is this always necessary?" | fetched | same |
| "Do I need a waterproof membrane?" | title | https://www.myjobquote.co.uk/questions/do-i-need-a-waterproof-membrane |
| "How do you waterproof a wall before tiling?" | title | https://www.calendar-uk.co.uk/frequently-asked-questions/how-do-you-waterproof-a-wall-before-tiling |
| "do i need to waterproof walls before tiling" | title | https://hydrokinetical.netlify.app/post/do-i-need-to-waterproof-walls-before-tiling |
| "how do you prepare a shower floor before tiling" | title | https://mds.oandg.co.uk/posts/how-do-you-prepare-a-shower-floor-before-tiling |
| "Waterproofing before tiling" (tilers' forum thread) | title; 403 | https://www.tilersforums.com/threads/waterproofing-before-tiling.100519/ |
| "Waterproofing 101: Questions to Ask Before Your Shower Gets Tiled" (podcast episode) | title | https://www.audible.co.uk/podcast/Waterproofing-101-Questions-to-Ask-Before-Your-Shower-Gets-Tiled/B0GXQ4153D |
| "Can tile adhesive be used in wet areas?" and "Does tile adhesive prevent water seepage?" | fetched | https://tileadhesiveranchi.blogspot.com/2025/02/faqs-tile-adhesive-vs-cement-sand-mortar.html |
| "How is Bathroom Waterproofing Made? Importance of Waterproofing in Wet Areas" | r07 | https://www.baumerk.com/en/blog/how-is-bathroom-waterproofing-made |

A recurring sub-question in the result summaries is how long to wait after the membrane before tiling. The sources give product-specific waits, so the answer on Sahihi's page must come from the data sheet of the product named.

### 5. Water tanks: leaks and potable-safe systems

| Question as written | How seen | URL |
|---|---|---|
| "Nataka kujenga kisima cha ardhini cha maji" (thread title) | r07 | https://www.jamiiforums.com/threads/nataka-kujenga-kisima-cha-ardhini-cha-maji.1572980/ |
| "je unene wa ukuta uweje na nitumue mawe au tofali?" | r07 | same thread |
| "How can I identify where my water tank is leaking from?" | fetched | https://www.drfixit.co.in/resources/blog/home-care-decor/effective-water-tank-leakage-solutions-to-prevent-damage |
| "Can a water tank be repaired without draining all the water?" | fetched | same |
| "Which materials work best for fixing cracks in a concrete tank?" | fetched | same |
| "What steps should be followed to fix an external crack in a water tank?" | fetched | same |
| "Why is specialized waterproofing needed for potable water underground tanks?" | fetched | https://sunandaglobal.com/waterproofing-solutions-for-potable-water-storage-in-underground-tanks/ |
| "What are the main types of waterproofing for underground water tanks?" | fetched | same |
| "What certifications should I look for in potable water tank waterproofing?" | fetched | same |
| "Can you waterproof an existing leaking underground water tank?" | fetched | same |

The certification question matters under the fact law: a drinking-water claim may be made only for a product whose data sheet makes it.

### 6. Swimming pools (thin)

| Question as written | How seen | URL |
|---|---|---|
| "How should you apply tile adhesive for swimming pool tiles?" | fetched | https://www.freepressjournal.in/focused-view/swimming-pool-tile-adhesive-and-grout-for-permanently-submerged-conditions |
| "Swimming Pool Tile Adhesive And Grout For Permanently Submerged Conditions" | fetched (title) | same |
| "Grout Today Plaster Tomorrow? Cure time in heat" (pool owners' forum) | title; browser check | https://www.troublefreepool.com/goto/post?id=2068971 |
| "How to repair loose swimming pool pavers?" | fetched (title) | https://www.workshop.bunnings.com.au/discussion/156665/how-to-repair-loose-swimming-pool-pavers |
| "Should I Install Limestone Coping on my Pool?" | fetched (related list) | https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/ |
| "Tiling in and around Swimming Pools" (section heading, Sika Tanzania) | r08 | https://tza.sika.com/en/construction/72233/tile-setting-systems.html |
| "Swimming Pool Tiling Step by Step" (video) | title | https://www.youtube.com/watch?v=IERMJfWcPeQ |

Only four are literal questions. The "how long before filling" form was the point of search 11 and the summaries show manufacturers disagreeing by weeks; no page was found that asks it as a heading. Treat this cluster as a candidate, not a proven one.

### 7. Rising damp, salt and peeling paint

| Question as written | How seen | URL |
|---|---|---|
| "Kwanini nyumba nyingi Dar hubanduka rangi nje na ndani?" (thread title, 16 Dec 2013) | fetched | https://www.jamiiforums.com/threads/kwanini-nyumba-nyingi-dar-hubanduka-rangi-nje-na-ndani.570010/ |
| "Je ni mafundi wetu hawajui namna ya kuandaa kuta kabla ya kupaka rangi au ni ubora wa rangi zetu?" | fetched | same thread |
| "Ili kuepuka tatizo hili tufanyeje?" | fetched | same thread |
| "Kama hukuweka dump proof wakati unaanza kujenga kuna uwezekano wa kupata soln ya kuzuia kuta kufyonza unyevunyevu??" | r07 | https://www.jamiiforums.com/threads/kwanini-nyumba-nyingi-dar-hubanduka-rangi-nje-na-ndani.570010/page-2 |
| "What Exactly Is Rising Dampness?" | fetched | https://www.bergerpaints.com/blogs/top-10-rising-dampness-questions-with-solutions-from-experts |
| "How Can I Detect Rising Dampness?" | fetched | same |
| "What Causes Rising Dampness?" | fetched | same |
| "Is Rising Dampness a DIY Fix?" | fetched | same |
| "How Can I Prevent Rising Dampness?" | fetched | same |
| "Can Rising Dampness Affect The Structural Integrity Of a Building?" | fetched | same |

Also seen as a title: "What Is Rising Damp in Buildings & How Do You Stop It?" (https://www.protectahome.co.uk/what-is-rising-damp-in-buildings/). Search 17 returned no coastal-specific page, although report 07 records Tanzanian forum posts blaming salt in Dar es Salaam sand and ground.

### 8. Tile adhesive or sand and cement

| Question as written | How seen | URL |
|---|---|---|
| "Tile adhesives or sand-cement mixture?" (Nation, Kenya) | r08 | https://nation.africa/kenya/life-and-style/dn2/tile-adhesives-or-sand-cement-mixture--3819924 |
| "Tile Adhesive vs Cement Mortar: Which One is Better for Tile Installation?" | fetched | https://birlanu.com/blog/tile-adhesive-vs-cement-mortar |
| "Why is tile adhesive considered better than cement mortar for tiles?" | fetched | same |
| "Which is better for vitrified tiles, tile adhesive or cement mortar?" | fetched | same |
| "What is the difference between tile adhesive and cement-sand mortar?" | fetched | https://tileadhesiveranchi.blogspot.com/2025/02/faqs-tile-adhesive-vs-cement-sand-mortar.html |
| "Is tile adhesive more expensive than cement-sand mortar?" | fetched | same |
| "Can I mix sand and cement with tile adhesive?" | fetched | same |
| "Does using tile adhesive reduce labor costs?" | fetched | same |
| "Tile Adhesive vs Cement: which one is cheaper?" | title | https://melacoll.com/blog/why-should-you-choose-tile-adhesive-instead-of-cement-mortar |
| "Tile Adhesive Vs Mortar - Can I Use Tile Adhesive Instead Of Mortar To Lay Tiles" | fetched | https://hpmcfactory.com/tile-adhesive-vs-mortar-can-i-use-tile-adhesive-instead-of-mortar.html |

Also a title: "Is tile adhesive better than cement?" (https://ihpmc.com/news/is-tile-adhesive-better-than-cement). The field is Indian manufacturers and cellulose suppliers; the one East African page is a newspaper feature.

### 9. Using tile adhesive correctly

All fetched from https://tileadhesiveranchi.blogspot.com/2025/02/faqs-tile-adhesive-vs-cement-sand-mortar.html unless noted.

| Question as written | Source |
|---|---|
| "How long does it take for tile adhesive to set?" | fetched |
| "Do I need to use a notched trowel with tile adhesive?" | fetched |
| "Can I use tile adhesive for large-format tiles?" | fetched |
| "Do I need to soak tiles before using tile adhesive?" | fetched |
| "Can I install tiles over existing tiles using tile adhesive?" | fetched |
| "Can I use tile adhesive for outdoor tile installations?" | fetched |
| "Can tile adhesive be used on uneven surfaces?" | fetched |
| "What is the shelf life of tile adhesive?" | fetched |
| "What types of tile adhesives are available?" | fetched |
| "Can you tile directly on floorboards?" | fetched, https://www.myjobquote.co.uk/questions/do-i-need-to-tank-shower-walls-before-tiling (related list) |

**Gap to know about.** No page seen today asks "What is the difference between C1 and C2 tile adhesive?", "What does S1 mean?" or "How much tile adhesive per square metre?" as a heading, and search 3 returned no coverage figure at all. Those three remain the unverified candidates of report 08 section 6.2. Journal posts 2 and 5 in `SEO-STRATEGY.md` 5.4 target exactly these, so their demand is inferred, not observed. The Tanzanian evidence that people struggle with quantities is in cluster 12.

### 10. Tiles lifting, hollow or tenting

| Question as written | How seen | URL |
|---|---|---|
| "What has caused some tiles in my Ceramic Tile Floor to become Hollow Sounding and the Grout To Crack?" | fetched | https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/ |
| "What is causing my tiles to bulge up?" | title | https://ctasc.com/?p=13464 |
| "Why did my Tile tent after 16 years?" | title | https://ctasc.com/?p=10503 |
| "What Causes Tile to Pop Up: Common Causes and Practical Fixes" | fetched | https://www.flooringclarity.com/what-causes-tile-pop-common-causes-practical-fixes/ |
| "Can a popped tile be glued back?" | fetched | same |
| "How soon do tiles fail after installation?" | fetched | same |
| "Are there adhesives that prevent popping?" | fetched | same |
| "How do I avoid hollow spaces under tiles during installation?" | fetched | https://birlanu.com/blog/tile-adhesive-vs-cement-mortar |
| "How does tile adhesive prevent hollow spaces under tiles?" | fetched | https://tileadhesiveranchi.blogspot.com/2025/02/faqs-tile-adhesive-vs-cement-sand-mortar.html |
| "24 year old tile over cement slab floor failing-tenting and popping up" (forum thread) | title | https://tilersforums.com/goto/post?id=977961 |

Local anchor (r08): Bamburi's sales director naming "the prevalence of popping out, cracking and falling of tiles" in Kenya, https://www.the-star.co.ke/news/2022-03-30-bamburi-cement-enters-mortar-sector-with-tile-adhesive . The answers on the pages read agree on three causes: poor adhesive contact, moisture, and no movement joints.

### 11. Grout: epoxy or cement, and shower grout

All fetched from https://tilehub.com/blogs/tilehub/best-grout-for-shower-tiles unless noted.

| Question as written | Source |
|---|---|
| "What is the best grout for a shower?" | fetched |
| "Is epoxy grout worth the extra cost in a shower?" | fetched |
| "Do I need to seal epoxy grout in a shower?" | fetched |
| "Does epoxy grout prevent mold in a shower?" | fetched |
| "Sanded vs unsanded grout for shower walls - which do I use?" (original uses a long dash) | fetched |
| "How long does shower grout last?" | fetched |
| "Can I use white grout in a shower?" | fetched |
| "Epoxy grout vs cement grout - which should I use?" | title; 404 on fetch, https://dev2-nextjs.materialdepot.in/qna/epoxy-grout-vs-cement-grout |
| "How does epoxy grout compare to polymer grout & standard cement grout?" | title, https://www.hometalk.com/40984440/diy/craft |
| "Why did the black grout stain my tile?" | fetched (related list), https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/ |

Also titles: "What's the Difference Between Epoxy and Cement Grout?" (https://www.houzz.in/magazine/whats-the-difference-between-epoxy-and-cement-grout-stsetivw-vs~89399608) and "Epoxy Grout vs. Cement Grout: Which Is Right for Your Project?" (https://angi.com/articles/epoxy-grout-vs-cement-grout.htm, 403 on fetch). A point several result summaries make and buyers get wrong: epoxy grout does not make a shower waterproof; the membrane under the tile does. That is a ready H2.

### 12. Tiling cost and how to measure a room (Tanzanian voices)

| Question as written | How seen | URL |
|---|---|---|
| "Naomba kujua gharama za kuweka tiles kwa chumba kimoja" (thread title, 8 Jan 2020) | fetched | https://www.jamiiforums.com/threads/naomba-kujua-gharama-za-kuweka-tiles-kwa-chumba-kimoja.1676374/ |
| "Sasa hiyo square meter unaipataje?" | fetched | same thread |
| "Yaani utajuaje chumba ni square meter kadhaa?" | fetched | same thread |
| "Naomba msaada wa izi calculation za vipimo" | fetched | same thread |
| "Gharama za Kuweka Gypsum na Tiles- Nyumba ya 14m x11m -Dar" (thread title, 21 Mar 2015) | fetched | https://www.jamiiforums.com/threads/gharama-za-kuweka-gypsum-na-tiles-nyumba-ya-14m-x11m-dar.823119/ |
| "Nyumba imeishawekwa rough floor?" | fetched | same thread |
| "Je unahitaji skating ya tiles pia?" | fetched | same thread |
| "Naomba kujuzwa gharama za tiles hizi" (thread title) | title | https://www.jamiiforums.com/threads/naomba-kujuzwa-gharama-za-tiles-hizi.1967688/ |
| "How much does a tiler charge owr square metre" (sic) and "Large format tile installation cost" | fetched (related list) | https://www.myjobquote.co.uk/questions/do-i-need-to-tank-shower-walls-before-tiling |

This is the clearest local finding of the session: Tanzanian askers want the cost of tiling one room and do not know how to turn a room into square metres. A post that teaches the measurement and hands off to the coverage calculators already on the Mapei item pages answers the real question without a price. Any Swahili heading must be written by a native speaker, per `SEO-STRATEGY.md` section 3 point 7.

### 13. Tile levelling systems, lippage and tools

| Question as written | How seen | URL |
|---|---|---|
| "Should I Use a Tile Leveling System?" | fetched | https://tilers-place.pages.dev/tile-leveling-system-f-a-q/ |
| "Are tile leveling systems necessary?" | fetched | same |
| "Will using a tile leveling clip create empty voids underneath the tile?" | fetched | same |
| "Can a Tile Leveling System fix bowed tiles?" | fetched | same |
| "What Is Tile Lippage?" and "How much tile Lippage is acceptable?" | fetched | same |
| "Do I Use 1/16, 1/32 or 1/8 Leveling Clips" | fetched | same |
| "Does the floor need to be level before installation?" | fetched | https://flooringsupplyshop.com/blogs/news-releases/tuscan-leveling-system-installation-faq |
| "Can the system be used with large format tile and slab installations?" | fetched | same |
| "Can tiles be walked on while mortar is still wet?" | fetched | same |
| "Where can I buy the Tuscan Leveling System?" | fetched | same |

Titles also seen: "tile leveling systems explained are they worth it" (https://bladesdirect.net/blogs/diamond-blade-1/tile-leveling-systems-explained-are-they-worth-it), "Choosing a Tile-Leveling System" (https://www.finehomebuilding.com/project-guides/tiling/choosing-a-tile-leveling-system). No trowel-notch or spacer-size question was found, though search 13 asked for them. The first source is a mirror host as the search returned it.

### 14. Epoxy floors: what, how long, what drives cost

| Question as written | How seen | URL |
|---|---|---|
| "What is Epoxy Floor?" | fetched | https://uelresins.com/floorworks/?p=31 |
| "What is the Price of Epoxy Flooring in Uganda?" | fetched | same |
| "How much does Epoxy Floor Cost in Uganda?" | r09 | https://uelresins.com/floorworks/?p=55 |
| "How Long does Epoxy Floor Last?" | r09 | same |
| "Are epoxy floors waterproof?" | r09 | same |
| "How Strong is Epoxy Floor" | r09 | same |
| "What is the curing time for epoxy flooring?" | r09 | https://kandua.com/cost-guides/epoxy-flooring-prices-per-square-meter-in-south-africa |
| "Are there different grades of epoxy, and do they impact the cost?" | r09 | same |
| "How do I get an accurate quote for my epoxy flooring project?" | r09 | same |
| "Is DIY epoxy flooring a cost-effective option?" | r09 | same |

Cost drivers the Ugandan page lists (fetched today, names only): project size, site location, condition of the subfloor, sealer coat, need for a build-up layer, epoxy product type, decorative finish, installation labour. Search 5 returned Kenyan service pages and nothing Tanzanian, matching report 09's finding that no Tanzanian business ranks for flooring queries.

### 15. Epoxy against tiles, over tiles, outdoors

| Question as written | How seen | URL |
|---|---|---|
| "Which is better, epoxy floor or tiles?" | r09 | https://uelresins.com/floorworks/?p=55 |
| "Why Use Epoxy instead of Marble or Granite Tiles?" | r09 | same |
| "Is epoxy flooring good for outdoors?" | r09 | same |
| "Can epoxy flooring be applied over existing tiles or concrete?" | r09 | https://kandua.com/cost-guides/epoxy-flooring-prices-per-square-meter-in-south-africa |
| "Epoxy floors: Are tiles and terrazzo floors finally being phased out?" | r09 | https://nilepost.co.ug/homes/63210/epoxy-floors-are-tiles-and-terrazzo-floors-finally-being-phased-out |
| "Will Epoxy Flooring be Waterproof" (video) | title | https://www.youtube.com/watch?v=mOMYUCZKMTM |
| "How to Epoxy over Old Tile Floors" (video) | title | https://www.youtube.com/watch?v=WJXfqzH3JwU |
| "Epoxy Over Ceramic Tile Floor" (video) | title | https://www.youtube.com/watch?v=-kVqaiAZjFg |
| "Pour Epoxy Over Tile & Grout - Step By Step Tutorial" (video) | title | https://www.youtube.com/watch?v=SHTeQ9YxsY4 |

### 16. Self-levelling compound

| Question as written | How seen | URL |
|---|---|---|
| "How long does self-levelling compound take to dry before tiling?" | fetched | https://www.wallsandfloors.co.uk/blog/how-to-use-self-levelling-compound/ |
| "How deep can you pour self-levelling compound in one go?" | fetched | same |
| "Do you need to prime the floor before using self-levelling compound?" | fetched | same |
| "Can you use self-levelling compound on a wooden floor?" | fetched | same |
| "Does self-levelling compound fix a sloping or structurally uneven floor?" | fetched | same |
| "How do you mix self-levelling compound?" | fetched | same |
| "Why is my self-leveling compound not drying?" | title | https://www.calendar-uk.co.uk/frequently-asked-questions/why-is-my-self-leveling-compound-not-drying |
| "How thick should self-levelling compound be?" | title | https://calendar-uk.co.uk/frequently-asked-questions/how-thick-should-self-levelling-compound-be |
| "What is the best self levelling compound?" | title | https://www.calendar-uk.co.uk/frequently-asked-questions/what-is-the-best-self-levelling-compound |
| "Can You Lay Tile Over Self-Leveling Compound Safely" | title | https://www.flooringclarity.com/can-you-lay-tile-self-leveling-compound-safely/ |

The sources disagree on thickness and waiting time because the figures are product-specific. Sahihi's answer must quote the data sheet of the stocked product and nothing else.

### 17. Crack injection, bonding old concrete to new, grouts

| Question as written | How seen | URL |
|---|---|---|
| "Epoxy vs. Polyurethane Crack Injection - how to choose?" (original uses a long dash) | fetched | https://inblock.com.pl/en/epoxy-vs-polyurethane-crack-injection-how-to-choose/ |
| "Epoxy or Polyurethane Foam?" | fetched | https://www.waterproofmag.com/2010/04/epoxy-or-polyurethane-foam |
| "Foundation repairs: the pitfalls of injection" | title; 403 | https://www.renovationfind.com/blog/foundation-repairs-the-pitfalls-of-injection/ |
| "Repair of cracks in concrete by using Epoxy and Polyurethane injection resins" | title | https://www.nbmcw.com/product-technology/construction-chemicals-waterproofing/concrete-admixtures/repair-of-cracks-in-concrete-by-using-epoxy-and-polyurethane-injection-resins.html |
| "What is Crack Injection? Repairing Damaged Concrete with Expert Techniques" | r10 | https://www.concretesolutions.co.nz/articles/crack-injection-techniques |
| "What Is Injection and How Does It Work" and "How are Injections Applied" | r10 | https://www.sika.com/en/knowledge-hub/injection-basics.html |
| "What Do You Put Between Old Concrete and New Concrete?" | r10 | https://customconcreteprepandpolish.com/?p=2785 |
| "Will Concrete Bond To Concrete?" | r10; today the URL served the builder's home page, not the article | https://gambrick.com/will-concrete-bond-to-concrete/ |
| "WHY USE EPOXY BASED GROUTS?" | r10 | https://can.sika.com/en/construction/concrete-repair-protection/grouting/resin-based-grouting.html |

These are mostly supplier headings. The buyer's own wording ("when should I worry about a crack") was searched for and not found as a heading. The answers summarised by the tool agree on one usable rule: epoxy for dry structural cracks, polyurethane for wet or moving ones, and a structural engineer for cracks caused by movement.

### 18. Spalling concrete and rusted steel

| Question as written | How seen | URL |
|---|---|---|
| "Concrete Spalling: What is it and How Can You Repair it?" | fetched | https://www.mpbirlacement.com/concrete-spalling-what-is-it-and-how-can-you-repair-it/ |
| "What causes of concrete spalling?" (sic) | fetched | same |
| "How can you prevent concrete spalling?" | fetched | same |
| "How can you repair concrete spalling?" | fetched | same |
| "Can spalling concrete be repaired?" | fetched | same |
| "What is the main cause of concrete spalling?" | fetched | same |
| "Which cement helps prevent spalling?" | fetched | same |
| "Is spalling concrete dangerous?" | fetched | https://apex-la-structure.lovable.app/blog/concrete-spalling-what-causes-it-and-how-to-fix-it |
| "How to repair concrete spalling" (DIY forum thread) | title | https://workshop.bunnings.com.au/t5/Outdoor/How-to-repair-concrete-spalling/m-p/170763 |
| "What is Spalling in Concrete?" | title | https://everything-about-concrete.com/what-is-spalling-in-concrete.html |

No page in search 18 compared non-shrink grout with repair mortar, and none was coastal. Salt-driven corrosion on the Dar es Salaam and Zanzibar coast is Sahihi's angle, but it needs a source before it is written as fact.

### 19. Sealants and joints (thin)

| Question as written | How seen | URL |
|---|---|---|
| "What is the difference between acetoxy and neutral cure silicone?" | fetched | https://tradecalculator.co.uk/reference/uk-sealant-types/ |
| "Can I paint over silicone sealant?" | fetched | same |
| "How long does sealant take to cure?" | fetched | same |
| "What sealant should I use in a bathroom?" | fetched | same |
| "Silicone vs Polyurethane Sealant: Which One Should You Use" | fetched (title) | https://www.journeymanhq.com/?p=713797 |
| "Siliconized vs Polyurethane Expansion Joint Sealants: Which One Should You Use" | fetched (title) | https://www.journeymanhq.com/?p=708526 |
| "Cost vs. Lifespan: Which Is Cheaper Long-Term?" | fetched | same |
| "silicone vs acrylic vs polyurethane sealant which is best for your project" | title; 404 on fetch | https://directory.selleys.com.au/home-improvement-building-materials/adhesives-sealants-bonding-products/silicone-vs-acrylic-vs-polyurethane-sealant-which-is-best-for-your-project |

### Local-intent forms ("in Nairobi", "in Kenya", "in Uganda", "Dar", "where can I buy")

Not a question cluster: a record of how the place is attached to the query on pages that rank.

| Form as written | Where | URL |
|---|---|---|
| "... in Nairobi?" | "How much does it cost to fix a leaking roof in Nairobi?" | https://bestcareservices.co.ke/how-much-does-it-cost-to-fix-a-leaking-roof-in-nairobi/ |
| "... Service in Nairobi, Kiambu and Kenya" | "Roof Waterproofing Service in Nairobi, Kiambu and Kenya"; "Epoxy Flooring Service in Nairobi, Kiambu and Kenya" | https://bestcareservices.co.ke/directory/roof-waterproofing.html ; https://bestcareservices.co.ke/directory/epoxy-flooring-service.html |
| "... in Uganda?" | "What is the Price of Epoxy Flooring in Uganda?" | https://uelresins.com/floorworks/?p=31 |
| "... in Kenya?" and "Kenyan Coastal Areas" | "How Much Does SPC Flooring Cost in Kenya?"; "Is SPC Flooring Suitable for Kenyan Coastal Areas?" (r09) | https://aliglaziers.co.ke/blog/spc-flooring-kenya-faq-ali-glaziers |
| "... in the Tropics?" | "How Long Does Roof Waterproofing Last in the Tropics?" | see cluster 2 |
| "-Dar" / "Dar" in the thread title | "Gharama za Kuweka Gypsum na Tiles- Nyumba ya 14m x11m -Dar"; "Kwanini nyumba nyingi Dar hubanduka rangi..." | see clusters 12 and 7 |
| "Where can I buy ...?" | "Where can I buy the Tuscan Leveling System?" | https://flooringsupplyshop.com/blogs/news-releases/tuscan-leveling-system-installation-faq |

**Not found:** any page carrying a "near me" form, and any Tanzanian page carrying an "in Tanzania" or "in Dar es Salaam" question for waterproofing or epoxy cost. Searches 2 and 5 named Tanzania and returned only Kenyan, Ugandan and South African pages. On a US-located tool that is weak evidence of a vacuum, not proof.

## A.3 Search log (18 of 18 used)

| # | Query (shortened) | Result |
|---|---|---|
| 1 | waterproof a leaking concrete flat roof, FAQ forms | roof-life and flat-roof guides, mostly Malaysia and UK; one Kenyan LinkedIn post |
| 2 | waterproofing cost per square metre Kenya OR Tanzania OR Uganda | Kenyan service pages and one Kenyan forum thread; nothing Tanzanian or Ugandan |
| 3 | tile adhesive vs cement mortar, per square metre, FAQ | Indian manufacturer and supplier pages; no coverage figure anywhere |
| 4 | floor tiles popping up, hollow, tenting (reddit OR quora) | trade Q&A and tiler forums; no Reddit or Quora result |
| 5 | epoxy flooring cost per square metre Kenya Tanzania, lifespan | Kenyan service pages, one Ugandan page, South African cost guides; nothing Tanzanian |
| 6 | bathroom shower waterproofing before tiling, "do I need to" | UK and US guides and Q&A pages |
| 7 | epoxy grout vs cement grout FAQ | Houzz, Angi, retailer guides |
| 8 | self levelling compound: how thick, how long, prime | UK FAQ pages, retailer guides, tiler forums |
| 9 | concrete crack repair FAQ, epoxy vs polyurethane injection, spalling | injection vendors and trade magazines; nothing on spalling |
| 10 | underground water tank leaking, Kenya OR Tanzania OR Uganda, potable | supplier pages (India, Canada), one Kenyan Jiji listing; no East African guide |
| 11 | swimming pool waterproofing and tiling FAQ, how long before filling | manufacturer data sheets and pool forums |
| 12 | silicone vs polyurethane sealant, expansion joint, FAQ | comparison pages of mixed quality, one Mapei Singapore page (403) |
| 13 | tile leveling system, spacers, trowel notch, lippage FAQ | tool makers and trade guides |
| 14 | tiles, tile adhesive, fundi, gharama (jamiiforums.com only) | 10 Tanzanian threads on tile and paving cost |
| 15 | waterproofing, tile adhesive, epoxy floor (reddit.com and quora.com only) | **refused: the tool cannot search reddit.com** |
| 16 | waterproofing, tile adhesive, epoxy floor, Tanzania OR Kenya (youtube.com only) | 10 global English tutorials; nothing local or Swahili |
| 17 | rising damp, peeling paint, efflorescence, coastal house FAQ | UK damp guides, Berger India question list, one Philippine page; nothing coastal-specific |
| 18 | spalling concrete, rusted rebar, non shrink grout vs repair mortar | cement makers' guides, DIY forum threads; no grout comparison |

## A.4 What Part A does and does not show

1. **The Tanzanian voice exists in two places only: leaking hidden roofs and peeling paint (reports 07 and today), and tiling cost with room measurement (new today).** Everything else is English-language evidence from India, the UK, the US and Kenya. It shows what is asked about the topic, not that Tanzanians ask it.
2. **Cost questions are always "how much", and the pages that rank answer with a number.** Sahihi cannot. The forms that can be answered without a price are "what does the cost depend on" (clusters 3 and 14 list the drivers competitors name) and "how do I work out the quantity" (cluster 12).
3. **The most repeated answer across clusters is "it depends on the product: read the data sheet".** Waiting times, thicknesses, pool filling times and cure times all differ by source. Sahihi holds 44 Mapei data sheets on its own domain. Answering with the data-sheet figure for a named, stocked product is the one thing the ranking pages do not do.
4. **Unproven but planned:** C1 against C2, S1, and adhesive per square metre (cluster 9 gap). They are sensible, and the calculators support them, but treat their demand as inferred until a Tanzania-located Google pass records People Also Ask.
5. **Every post still needs its row in `SEO-STRATEGY.md` section 5 before it is built** (CLAUDE.md, start-of-session rule 3). This file supplies question wording for H2s and FAQ blocks; it does not assign queries.

---

# PART B - What a post needs to rank and be cited in 2026

## B.1 What Google currently recommends (primary sources, fetched 2026-11-06)

| Topic | What the source says | URL |
|---|---|---|
| Generative AI features (AI Overviews, AI Mode) | "The best practices for SEO continue to be relevant." Google treats this as SEO: "Optimizing for generative AI search is optimizing for the search experience, and thus still SEO." Guide added 2026-05-15 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| Eligibility for AI features | "A page must be indexed and eligible to be shown in Google Search with a snippet." No extra requirement | https://developers.google.com/search/docs/appearance/ai-features |
| A site-wide switch now exists | The guide says "a site must be included in Search generative AI features in Search Console"; the control page describes a site-wide "Search generative AI control in Search Console" to "manage your site's inclusion in generative AI features on Google Search". The default state is not stated on either page: **check it when the property is verified** | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide ; https://developers.google.com/search/docs/crawling-indexing/control-what-you-share |
| What kind of content | "Non-commodity" content: first-hand experience and "unique, expert-led content"; "a summary of existing content simply restates information already available elsewhere". Clear structure: "headings that provide a clear structure to navigate content" | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| Query fan-out | AI features issue "multiple related searches across subtopics and data sources", so a post is retrieved for sub-questions as well as its head query | https://developers.google.com/search/docs/appearance/ai-features |
| Measuring | "use the Generative AI performance report in Search Console"; "No third-party tool has access to our internal ranking or AI systems" | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| People-first content | Self-check questions such as "Does the content provide original information, reporting, research, or analysis?" and "Does the content have any easily-verified factual errors?" | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| E-E-A-T | "Of these aspects, trust is most important." It is not a ranking factor in itself: the starter guide lists "Thinking E-E-A-T is a ranking factor" and answers "No, it's not." | https://developers.google.com/search/docs/fundamentals/creating-helpful-content ; https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Who, How, Why | "Is it self-evident to your visitors who authored your content?"; "avoid using deceptive authorship information"; "Is the use of automation, including AI-generation, self-evident to visitors through disclosures or in other ways?" | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| Generative AI in production | "generative models don't retrieve facts, but predict a likely sequence of words": check accuracy before publishing, including titles, descriptions, structured data and alt text. "Sharing information about how a piece of content was created can help give your readers more context." Updated 2026-10-01 with rater-guideline references (sections 4.6.5 and 4.6.6) | https://developers.google.com/search/docs/fundamentals/using-gen-ai-content |
| Scaled content | "Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings"; spam also covers "attempting to manipulate generative AI responses in Google Search" | https://developers.google.com/search/docs/essentials/spam-policies |
| Article structured data | Types: `Article`, `NewsArticle` or `BlogPosting`. "There are no required properties". Recommended: `author` (with `name` and `url`), `datePublished`, `dateModified`, `headline`, `image`. Images in 16x9, 4x3 and 1x1, at least 50K pixels, crawlable. For an organisation author: use `Organization`, and "If the author is an organization, you could link to the organization's home page." | https://developers.google.com/search/docs/appearance/structured-data/article |
| Structured data rules | "JSON-LD (recommended)"; "Don't mark up content that is not visible to readers of the page."; "Try to use the most specific applicable type"; "Google does not guarantee that your structured data will show up in search results."; multiple items on one page are understood nested or separate, linked with `@id` | https://developers.google.com/search/docs/appearance/structured-data/sd-policies |
| Breadcrumb | Supported. Requires `itemListElement` of at least two `ListItem`s with `position`, `name`, `item`. "This feature is available on desktop" only (changelog 2025-01-22: "they only appear on desktop search results, not mobile") | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb ; https://developers.google.com/search/updates |
| Features that still exist | The gallery lists Article, Breadcrumb, Course list, Local business, Organization, Product, Profile page, Q&A, Video and others. It lists neither FAQ nor HowTo | https://developers.google.com/search/docs/appearance/structured-data/search-gallery |
| Dates | "Add a user-visible date to the page and feature it prominently", labelled; set `datePublished` and/or `dateModified`; visible and structured values must match; give the correct timezone if any; no future dates | https://developers.google.com/search/docs/appearance/publication-dates |
| Titles | "Write descriptive and concise text for your <title> elements."; "there's no limit on how long a <title> element can be" but title links are truncated to fit the device. Google may build the title link from the title, the H1, og:title, anchors and WebSite data | https://developers.google.com/search/docs/appearance/title-link |
| Meta descriptions | "There's no limit on how long a meta description can be"; unique per page; "Snippets are primarily created from the page content itself." | https://developers.google.com/search/docs/appearance/snippet |
| Featured snippets | Chosen by Google's systems; you cannot mark a page as one ("You can't."). `nosnippet` or a low `max-snippet` removes eligibility | https://developers.google.com/search/docs/appearance/featured-snippets |
| Images | Use `<img>`: "Google doesn't index CSS images." Alt text is "the most important attribute"; no keyword lists. Descriptive file names. Google reads "captions and image titles". Formats: BMP, GIF, JPEG, PNG, WebP, SVG, AVIF. With `srcset` or `<picture>`, "always specify a fallback URL using the `src` attribute." Preferred image via `og:image` or `primaryImageOfPage` (section added 2026-03-02) | https://developers.google.com/search/docs/appearance/google-images |
| Lazy loading | Native lazy loading or IntersectionObserver are fine; do not load content on scroll or click, because Google does not interact with the page; do not lazy-load what is visible at once | https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading |
| Links | Crawlable `<a href>` only. "Good anchor text is descriptive, reasonably concise, and relevant to the page that it's on."; "Don't chain up links next to each other."; "Every page you care about should have a link from at least one other page on your site."; citing sources: "using external links can help establish trustworthiness." | https://developers.google.com/search/docs/crawling-indexing/links-crawlable |
| Core Web Vitals | LCP within 2.5 seconds, INP under 200 milliseconds, CLS under 0.1. Good vitals "aligns with what our core ranking systems seek to reward"; the page does not call them a standalone ranking factor | https://developers.google.com/search/docs/appearance/core-web-vitals |
| LCP detail | "Never lazy-load your LCP image"; set `fetchpriority="high"`; the LCP resource "should be discoverable from the HTML source"; target 2.5 seconds or less for 75% of visits | https://web.dev/articles/optimize-lcp |
| CLS detail | "Always include `width` and `height` size attributes on your images and video elements" or reserve space with CSS `aspect-ratio`; target 0.1 or less for 75% of visits | https://web.dev/articles/optimize-cls |
| INP detail | Good is 200 milliseconds or less, poor is above 500, measured over all clicks, taps and key presses of a visit. INP is "the successor metric to First Input Delay (FID)" | https://web.dev/articles/inp |

## B.2 Deprecated, withdrawn, or stated by Google not to matter

| Item | Status | URL |
|---|---|---|
| **FAQ rich result** | Withdrawn. Changelog 2026-05-08: "This feature will no longer appear in Google Search starting May 7, 2026." Documentation removed 2026-06-15; the old doc URL now redirects to the changelog. No entry says whether to remove `FAQPage` markup or that leaving it does harm. This confirms the date in `SEO-STRATEGY.md` section 7 | https://developers.google.com/search/updates ; https://developers.google.com/search/docs/appearance/structured-data/faqpage |
| **HowTo rich result** | Deprecated. Limited to desktop on 2023-08-08; then "Google Search no longer shows How-to rich results on desktop, which means this result type is now deprecated" (update of 2023-09-14) | https://developers.google.com/search/blog/2023/08/howto-faq-changes |
| Breadcrumb on mobile | Gone since 2025-01-22; desktop only | https://developers.google.com/search/updates |
| Other structured data retired | 2025-06-12 "phasing out support for a few structured data features"; 2025-09-09 documentation removed for course info, estimated salary, learning video, special announcement, vehicle listing; 2026-01-06 practice problem removed. "Course list" is still in the gallery, so the `/training` plan stands | https://developers.google.com/search/updates ; https://developers.google.com/search/docs/appearance/structured-data/search-gallery |
| Special markup or files for AI | "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search." and "there's no special schema.org markup you need to add". On llms.txt: "It's completely fine if you decide to create and maintain LLMS.txt files" for other services; Google Search ignores them, with no help and no harm | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| Chunking and AI-specific rewriting | Listed as myths: no need to split content into small pieces ("no ideal page length") or to write differently for AI | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| Word-count targets | "there's no magical word count target, minimum or maximum". The helpful-content page lists as a warning sign: "Are you writing to a particular word count because you've heard or read that Google has a preferred word count?" | https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| Freshening dates | Warning sign: "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| Meta keywords | "Google Search doesn't use the keywords meta tag" | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Heading order and count, for Google | Semantic order "is fantastic for screen readers", but for Search "it doesn't matter if you're using them out of order"; "no magical, ideal amount of headings". Keep ordered headings anyway for accessibility (handoff 12.10) | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| First Input Delay | Replaced by INP as the responsiveness vital. The date of the change is not on the page fetched and is not stated here | https://web.dev/articles/inp |

**Not fetched, so not asserted:** the Search Quality Rater Guidelines PDF itself (only Google's pages that cite it); any Google page on sitemaps `lastmod`; any Google page granting a search feature to 3D models on article pages; schema.org's own pages for `HowTo` and `FAQPage`. A Bing post on structuring content for AI answers that I expected at a 2025 URL returned 404 and is not used.

## B.3 Other answer engines (primary sources)

| Engine | What its own documentation says | URL |
|---|---|---|
| Bing and Copilot | AI Performance report (public preview, 2026-02-10) shows total citations, cited pages and sampled grounding queries. Microsoft's advice for being cited: clear headings, tables and FAQ sections; support claims with examples, data and sources; keep content fresh and notify with IndexNow; keep text, images and video consistent about the same entity; local businesses keep address and hours current | https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/ |
| ChatGPT search | "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers." GPTBot is the separate training crawler; ChatGPT-User fetches on a user's request | https://developers.openai.com/api/docs/bots |
| Perplexity | Recommends "allowing PerplexityBot in your site's robots.txt file"; PerplexityBot "is not used to crawl content for AI foundation models" | https://docs.perplexity.ai/guides/bots |

`src/app/robots.ts` allows every user agent, so OAI-SearchBot and PerplexityBot are already allowed. Nothing to change; do not add per-bot blocks later without rereading these three pages.

## B.4 Recommendations

Each item is marked **[sourced]** where a page above supports it, or **[judgment]** where it is my recommendation from the house rules in `DESIGN-HANDOFF.md` and the evidence in Part A. No primary source gives a word count, an answer length or a publishing cadence; anything of that kind below is judgment.

### B.4.1 Post template (sections in order)

1. **Breadcrumb**: Home / Journal / Category / Post, from the same array as the JSON-LD. [sourced: breadcrumb doc; handoff 12.6]
2. **Label line**: category, read time, "Published <date>", and "Updated <date>" only after a real edit. Dates visible and labelled. [sourced: publication-dates]
3. **H1**: the primary query as a person would ask it. One H1. [judgment; handoff 13.2]
4. **The direct answer**: first paragraph of body text, 40 to 80 words, plain prose, complete on its own, no brand name. This is where the answer goes: before any background, before any list. The 40 to 80 range is the house rule (handoff 14.2), not a Google figure: Google says only that featured snippets are picked by its systems and need "enough text". [judgment, consistent with featured-snippets doc]
5. **Hero figure**: static image with descriptive alt and a visible caption. [sourced: google-images, optimize-lcp]. One suggestion to weigh, not sourced: on a phone a 2:1 hero sits between the H1 and the answer; if the answer can sit above the hero without breaking the design, the first screen then contains the answer.
6. **Key facts block** where the topic is tabular (a comparison, a coverage figure, a waiting time): one small table or a 3 to 5 item list, every value from a data sheet and linked to it. [sourced: Bing names tables; Google asks for clear structure]. This needs a table block in the content model, which today is prose only (handoff 14.1): flag before building.
7. **Five or six H2 sections**, each H2 a real question from Part A in the reader's wording, each opening with a one-sentence answer, then 120 to 250 words of depth. Sub-questions matter because of query fan-out. [sourced: ai-features on fan-out; judgment on lengths]
8. **One "where this does not apply" section**: the limits of the product or method, and when the answer is a structural engineer. This is the honest-framing rule and the main first-hand signal. [judgment; strategy section 3 point 5; sourced in spirit by "non-commodity content"]
9. **Product call to action**: one band, one primary page, a WhatsApp enquiry, no price. [house rule]
10. **FAQ**: 3 to 5 further questions from the same cluster that were not used as H2s, answers of 50 words or fewer, visible on the page. [judgment; Bing names FAQ sections]
11. **Sources**: a short list linking the manufacturer data sheets (the PDFs under `/tds/`) and any standard or authority cited. [sourced: links doc on trust; Bing on evidence]
12. **Author block and "how this was written"**: see B.4.3.
13. **Three related posts.** [house rule]

**Length.** Cluster posts 800 to 1,200 words and pillars 1,500 to 2,500 are the house ranges (handoff 14.2). Keep them as an editing budget, not a target: Google says length alone does not matter and lists writing to a word count as a warning sign. A post that answers its question in 700 words is finished. [sourced: seo-starter-guide, creating-helpful-content]

**What makes it non-commodity.** Each post should carry at least two things the ranking pages in Part A do not: a figure quoted from the data sheet of a named, stocked product; and a condition of building in Tanzania (two rainy seasons, coastal humidity, hidden roofs, saline ground, underground tanks) that is itself sourced. [sourced: ai-optimization-guide on first-hand and expert-led content]

### B.4.2 JSON-LD to emit

One `@graph` per post, built from the same registry entry and the same arrays that render the page (handoff 12.6):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://sahihicc.com/blog/<slug>#article",
      "headline": "<title>",
      "description": "<meta description>",
      "image": ["<16x9 url>", "<4x3 url>", "<1x1 url>"],
      "datePublished": "<YYYY-MM-DD>T08:00:00+03:00",
      "dateModified": "<YYYY-MM-DD>T08:00:00+03:00",
      "author": { "@id": "https://sahihicc.com/#organization" },
      "publisher": { "@id": "https://sahihicc.com/#organization" },
      "mainEntityOfPage": "https://sahihicc.com/blog/<slug>",
      "isPartOf": { "@id": "https://sahihicc.com/#website" },
      "inLanguage": "en"
    },
    { "@type": "BreadcrumbList", "itemListElement": ["<from the visible crumbs>"] },
    { "@type": "FAQPage", "mainEntity": ["<from the visible FAQ array>"] }
  ]
}
```

- **`BlogPosting`, not bare `Article`.** Both are supported; Google asks for "the most specific applicable type". This is a one-word change to the plan in `SEO-STRATEGY.md` section 7. [sourced: article doc, sd-policies]
- **Author and publisher are the Organization node** already on every page, by `@id`. That node should expose `name` and `url` so the author resolves to a name and a link, as Google recommends for authors. [sourced: article doc]
- **Three image crops** (16x9, 4x3, 1x1), each crawlable and at least 50K pixels. The 1200x630 Open Graph JPG is close to 16x9 only by eye (it is 1.9:1): generate a true 16x9 crop for the schema. [sourced: article doc]
- **Dates with the +03:00 offset** (East Africa Time), equal to the visible dates. Without an offset Google assumes Googlebot's timezone. [sourced: article doc, publication-dates]
- **`BreadcrumbList`**: keep. It shows on desktop only. [sourced]
- **`FAQPage`: keep it, expect nothing from Google.** The rich result is gone and Google says no special markup is needed for AI features. `src/lib/faq.ts` already builds it from the visible array at no cost, and no source says it harms. No source I fetched says the markup itself improves citation in any answer engine: what Bing recommends is the visible FAQ section. If the owner prefers the smallest honest graph, dropping it loses nothing in Google. [judgment]
- **Do not add `HowTo`.** Deprecated in Google since September 2023. Write steps as an ordered list in the body. [sourced]
- **Do not add `Product` to posts**, and never `offers`: products live on item pages. Link to them. [house rule]
- Mark up only what is visible. [sourced: sd-policies]

### B.4.3 Author and review dates for a company blog with no named people

- **Byline: "By Sahihi Construction Chemicals"**, linked to `/about`. The author is the organisation, said plainly. Google's test is that authorship is self-evident and not deceptive; an invented expert name or a stock "technical team" persona fails it. [sourced: creating-helpful-content; article doc on Organization authors]
- **Do not show "Reviewed by" unless a real, named person reviewed the post and agrees to be named.** If the owner or a Mapei technical contact does review a post, name them with their role and add `reviewedBy` then, not before. [judgment from the same sources]
- **A one-line "how this was written" note** under the author block: which data sheets the figures come from (linked), and the date they were last checked against them. If drafting is AI-assisted, Google's own question is whether that is "self-evident to visitors through disclosures or in other ways"; whether and how to say so is the owner's decision, and the accuracy check against the data sheets is required either way. [sourced: creating-helpful-content, using-gen-ai-content]
- **Two dates, both honest.** "Published" never changes. "Updated" and `dateModified` change only when the content changes in substance. Never bump a date to look fresh. [sourced: publication-dates, creating-helpful-content]
- **Review rule**: re-read every post against its data sheets when `npm run assets:tds` shows a sheet has changed, and at 12 months at the latest (handoff 13.2). If nothing changed, the date stays. [judgment]

### B.4.4 Internal linking: posts to products and back

- **Out of each post**: one link to its primary commercial page (the solution pillar or Mapei line pillar that owns the money query) early in the body; one or two links to the item pages whose data-sheet figures the post quotes, placed at the sentence that quotes them; one link to a sibling post; the CTA band. That meets the "2 product or pillar pages + 1 post" rule of handoff 12.8. [house rule; anchor guidance sourced]
- **Anchors** name the destination ("Mapelastic Smart data and coverage calculator"), are short, and are never stacked side by side. [sourced: links-crawlable]
- **Back from product pages**: a "Guides that use this product" list on each item page and "Guides" on each pillar, generated from the registry so it cannot go stale. This needs a `products: string[]` field (item slugs) on each entry in `src/config/blog.ts`; the reverse lookup then gives every item page its posts. One array, both directions. [judgment; handoff principle "one array renders the visible thing"]
- **No orphans**: every post is linked from its category page, the Journal index, at least one sibling and at least one product or pillar page. [sourced: "Every page you care about should have a link from at least one other page"]
- **Outbound**: link the data sheet PDF on Sahihi's own domain and, where a standard or regulator is cited, the authority's page. No `nofollow` on those. [sourced: links-crawlable]

### B.4.5 Images and 3D models

**Images**
- Real `<img>` elements (next/image does this), never CSS backgrounds for content images. [sourced]
- Alt text describes what is shown and how it relates to the text, in a sentence, with no keyword list; `scripts/audit-image-alts.mjs` already gates empty alts. [sourced]
- A visible caption (`figcaption`) on every content image: Google reads captions, and the caption is where an illustration is called an illustration. Generated imagery must never be captioned or implied to be a Sahihi project photograph; record each in `docs/IMAGE-PROVENANCE.md`. [sourced for captions; judgment and house fact law for provenance]
- Descriptive file names; images placed next to the paragraph they illustrate. [sourced: google-images, seo-starter-guide]
- The hero is the LCP element: in the HTML, not lazy, high fetch priority, never faded (house rule). Everything below the first screen uses native `loading="lazy"`. [sourced: optimize-lcp, lazy-loading]
- `width` and `height` (or an aspect ratio) on every image. [sourced: optimize-cls]
- `og:image` is the preferred image; 1200x630 JPG as the handoff specifies. [sourced: google-images]

**3D models**
- **Flag before building** (CLAUDE.md: heavy things, Three.js above all). A 3D element is a reader feature. I fetched no Google document that gives a 3D model on an article page any search feature.
- **Every 3D element has a static fallback image that is the real content.** The fallback is an ordinary `<img>` in the server-rendered HTML, with alt and caption, at the same aspect ratio as the 3D frame. It is what Google indexes, what loads on a slow phone, and what shows with WebGL or scripts off. `src/config/blog.ts` already states this intent ("Every 3D kind has a drawn or photographed fallback that is what loads with the page"). [sourced: google-images, lazy-loading]
- **Nothing a reader needs may exist only in the 3D view.** Google does not click or scroll, so anything revealed only by interaction is not seen. Layer names, thicknesses and sequence go in the text and the caption. [sourced: lazy-loading]
- **Load order**: fallback image first; the 3D library and model only when the element nears the viewport (IntersectionObserver) or on a "View in 3D" tap. Never in the first screen, never as the LCP element. [sourced: optimize-lcp, lazy-loading; house rule]
- **Reserve the space** with a fixed aspect ratio so the swap causes no layout shift. [sourced: optimize-cls]
- If `<model-viewer>` is the component: `poster` is documented as an image shown "before a model is loaded and ready to render"; `loading="lazy"` (the default) "loads the model when it is near the viewport"; `reveal="manual"` keeps the poster until the script dismisses it; `alt` gives screen-reader text. Use the fallback image as the poster and set `alt`. Source read: the docs data file in the project's repository, because modelviewer.dev renders its docs with scripts and returned no text. [sourced: https://raw.githubusercontent.com/google/model-viewer/master/packages/modelviewer.dev/data/docs.json]
- Respect reduced-motion settings and give the 3D view a keyboard-reachable control. Measure INP on a mid-range phone after adding it. [judgment; INP threshold sourced]

### B.4.6 Title and meta description pattern

House constraints stay: 60 characters or fewer, `title.absolute`, no geo in the template, no pipes, hyphen only, never a price, locked once approved (strategy section 6, handoff 14.2). Google sets no character limit; it truncates to the device width and may rewrite from the H1, so the title and H1 should agree. [sourced: title-link]

**Title pattern:** `<the query as typed> - <the specific thing the post delivers>`. Add "Tanzania" or "Dar es Salaam" only when the query carries it or the local condition is the subject.

| Kind | Pattern | Example (characters) |
|---|---|---|
| Why / problem | Why <problem> - and the Fix That Lasts | Why Hidden Roof Houses Leak - and the Fix That Lasts (52) |
| Comparison | <A> or <B>: Which One a <context> Needs | C1 or C2 Tile Adhesive: Which One a Tanzanian Job Needs (55) |
| Quantity | <Material> per Square Metre - <basis> | Tile Adhesive per Square Metre - by Trowel and Tile Size (56) |
| How / method | How to <task> - <the step people skip> | How to Waterproof a Shower Before Tiling - Step by Step (55) |
| Cost without a price | What <job> Costs in Tanzania - What Drives It | What Epoxy Flooring Costs in Tanzania - What Drives It (54) |

Examples are illustrations of the pattern, not approved titles; each needs its registry row first.

**Meta description pattern (140 to 160 characters, house rule):** `<the direct answer in one sentence>. <what is on the page: table, steps, calculator>. <the basis: figures from the manufacturer's data sheet>.` No price, no "learn more". Google sets no length limit and builds most snippets from the page itself, so the description is a pitch for the click, and the on-page direct answer is what gets extracted. [sourced: snippet]

### B.4.7 Publishing cadence

No primary source prescribes one. What the sources do say: do not mass-produce pages to manipulate rankings, do not write to a quota, do not freshen dates. [sourced: spam-policies, creating-helpful-content]. Within that, my recommendation: [judgment]

1. **Launch with 6 posts**, one per Journal category where a registry row exists, so every category page has content and every post has siblings to link to.
2. **Then 2 a week for 5 weeks**, reaching 16. That is fast enough to use the open vacuum (strategy section 3 point 8) and slow enough for each post to be checked line by line against its data sheets.
3. **Then 2 to 3 a month**, chosen from Search Console and the Generative AI performance report once there is data, and from a Tanzania-located People Also Ask pass.
4. **On each publish or real edit**: sitemap entry with the true modification date, and an IndexNow ping for that URL only (handoff 12.5; Bing recommends IndexNow for freshness).
5. **Quarterly**: reread the three oldest posts against their data sheets; update only what changed.

Order within the first 16: the handoff's publish order (section 14.5) holds, and Part A suggests leading with the clusters that have Tanzanian voices: hidden roof leaks (cluster 1), tiling cost and measuring a room (cluster 12), damp and peeling paint (cluster 7).

## B.5 Where this differs from the current plan (for the owner to rule on)

| Topic | Current plan | Suggested | Why |
|---|---|---|---|
| Post schema type | `Article` (strategy section 7) | `BlogPosting` | Most specific supported type |
| `FAQPage` on posts | Emit | Emit, with no expectation; or drop | Rich result withdrawn 2026-05-07; no source shows a benefit from the markup itself |
| Search Console | Verify, submit sitemap | Also check the site-wide Search generative AI control, and use the Generative AI performance report | New since the strategy was written; default state not documented on the pages fetched |
| Registry | No product field | Add `products: string[]` and `sources` per post | Generates the back-links from item pages and the visible Sources list |
| Content model | Prose only | Allow one table or ordered list block | Comparisons and coverage figures are tabular; Bing names tables |
| Byline | "the Organization, honestly" | Same, plus a "how this was written" line and labelled Published / Updated dates | Google's Who and How questions |
| Schema images | One hero | Three crops: 16x9, 4x3, 1x1 | Article doc recommendation |
| Answer position | After the hero | Consider above the hero on mobile | Judgment only |

---

# Sources

## Google Search Central and web.dev (fetched 2026-11-06)

- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/control-what-you-share
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/faqpage (redirects to the changelog; the FAQ documentation was removed 2026-06-15)
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/updates (changelog; only the first 100,000 characters were read, which covers 2025 and 2026) and its feed https://developers.google.com/search/updates/search_docs_updates.rss
- https://developers.google.com/search/blog/2023/08/howto-faq-changes
- https://developers.google.com/search/docs/appearance/publication-dates
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/featured-snippets
- https://developers.google.com/search/docs/appearance/google-images
- https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://web.dev/articles/optimize-lcp (page dated 2025-03-31)
- https://web.dev/articles/optimize-cls (page dated 2025-02-07)
- https://web.dev/articles/inp (page dated 2025-09-02)

## Other engines and components

- https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/
- https://blogs.bing.com/webmaster (index of posts, for dates)
- https://developers.openai.com/api/docs/bots (redirect target of https://platform.openai.com/docs/bots)
- https://docs.perplexity.ai/guides/bots
- https://raw.githubusercontent.com/google/model-viewer/master/packages/modelviewer.dev/data/docs.json

## Question sources read today

- https://www.jamiiforums.com/threads/msaada-nyumba-ya-contemporary-inavuja.1860634/
- https://www.jamiiforums.com/threads/kwanini-nyumba-nyingi-dar-hubanduka-rangi-nje-na-ndani.570010/
- https://www.jamiiforums.com/threads/naomba-kujua-gharama-za-kuweka-tiles-kwa-chumba-kimoja.1676374/
- https://www.jamiiforums.com/threads/gharama-za-kuweka-gypsum-na-tiles-nyumba-ya-14m-x11m-dar.823119/
- https://bestcareservices.co.ke/how-much-does-it-cost-to-fix-a-leaking-roof-in-nairobi/
- https://bestcareservices.co.ke/roof-waterproofing-service-in-nairobi-kiambu-kenya/
- https://uelresins.com/floorworks/?p=31
- https://homeworlddesign.com/what-is-the-best-waterproofing-for-flat-roofs/
- https://www.myjobquote.co.uk/questions/do-i-need-to-tank-shower-walls-before-tiling
- https://www.drfixit.co.in/resources/blog/home-care-decor/effective-water-tank-leakage-solutions-to-prevent-damage
- https://sunandaglobal.com/waterproofing-solutions-for-potable-water-storage-in-underground-tanks/
- https://www.freepressjournal.in/focused-view/swimming-pool-tile-adhesive-and-grout-for-permanently-submerged-conditions
- https://www.workshop.bunnings.com.au/discussion/156665/how-to-repair-loose-swimming-pool-pavers
- https://www.bergerpaints.com/blogs/top-10-rising-dampness-questions-with-solutions-from-experts
- https://birlanu.com/blog/tile-adhesive-vs-cement-mortar
- https://tileadhesiveranchi.blogspot.com/2025/02/faqs-tile-adhesive-vs-cement-sand-mortar.html
- https://hpmcfactory.com/tile-adhesive-vs-mortar-can-i-use-tile-adhesive-instead-of-mortar.html
- https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/
- https://www.flooringclarity.com/what-causes-tile-pop-common-causes-practical-fixes/
- https://tilehub.com/blogs/tilehub/best-grout-for-shower-tiles
- https://tilers-place.pages.dev/tile-leveling-system-f-a-q/
- https://flooringsupplyshop.com/blogs/news-releases/tuscan-leveling-system-installation-faq
- https://www.wallsandfloors.co.uk/blog/how-to-use-self-levelling-compound/
- https://inblock.com.pl/en/epoxy-vs-polyurethane-crack-injection-how-to-choose/
- https://www.waterproofmag.com/2010/04/epoxy-or-polyurethane-foam
- https://www.mpbirlacement.com/concrete-spalling-what-is-it-and-how-can-you-repair-it/
- https://apex-la-structure.lovable.app/blog/concrete-spalling-what-causes-it-and-how-to-fix-it
- https://tradecalculator.co.uk/reference/uk-sealant-types/
- https://www.journeymanhq.com/?p=713797 and https://www.journeymanhq.com/?p=708526

Pages read that yielded no question and are not otherwise cited: https://infra.market/blog/everything-you-need-to-know-about-tile-adhesive/ , https://archup.net/vetonit-tile-adhesive-for-pools/ , https://www.kryton.com/in-the-news/2004/10/21/ten-questions-to-help-choose-waterproofing-system-for-tanked-structure/ , https://ctasc.com/?p=13464 (served the site's home title).

Title-only sources (returned by a search, not readable or not opened) are given in full in the tables of A.2, each marked "title".

## Carried from earlier reports (collected 2026-11-05, not re-fetched)

- `docs/research/07-kw-waterproofing.md` section 6 (JamiiForums threads, ranking headings)
- `docs/research/08-kw-tile-adhesive-grout.md` section 6 (Nation Kenya, Sika Tanzania headings, Bamburi quote, unverified candidates)
- `docs/research/09-kw-flooring.md` section 5 (UEL Uganda, Kandua, Nile Post, Ali Glaziers)
- `docs/research/10-kw-repair-strengthening-mining.md` section 4 (repair and injection headings)
