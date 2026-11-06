# 07 - Competitor content audit for the blog

Compiled 2026-11-06. Question: what blog, news, guide and "knowledge"
content already exists for Tanzanian and East African construction-chemical
searches, how good is it, and what would a Sahihi post have to do to
outrank it.

Read with `SEO-STRATEGY.md` sections 3 to 5, `docs/COMPETITOR-AUDIT-2026-11.md`
and `docs/research/15-nabaki-competitor.md`. Where this file repeats a
finding from those, it says so.

## Summary

1. **No manufacturer runs a blog for this region.** Sika Tanzania and Sika
   Kenya have solution pages and a magazine whose latest listed edition is
   May 2021.
   Fosroc, MC-Bauchemie, Weber / Saint-Gobain and Mapei publish press
   releases, data sheets and global system pages. Nabaki has no posts.
2. **The regional how-to content that exists is short.** Of the 20 pieces
   listed in section 3, 11 are under 1,000 words and six are under 500.
   The 2017 newspaper piece that still leads "waterproofing Tanzania" in
   the US index is about 500 words.
3. **The best-formatted rival content is three posts by a Nairobi
   applicator** (1,170 to 1,330 words each, table of contents, FAQ block,
   `Article` + `FAQPage` + `BreadcrumbList`, published and modified dates).
   They are Kenya-priced, cite no source and carry one image each.
4. **Whole question types have no East African answer at all**: tile
   adhesive classes, adhesive quantity per square metre, underground tank
   waterproofing, wet-room waterproofing before tiling, epoxy grout against
   cement grout. Those result sets are filled by UK, Indian, US and South
   African pages.
5. **Nobody in the region cites a standard by number, links a data sheet,
   names a technically qualified author, or shows a working calculator
   next to an explanation.** Sahihi's build already has the data sheets and
   the calculators.

---

## 1. Method and limits

**Searches.** 18 web searches on 2026-11-06, standard mode, the full budget
for this task. **The search tool is US-located and returns no search
volumes.** Nothing below is a Google Tanzania or Google Kenya ranking.
"Ranks" means "appeared in one of these 18 US-index result sets, or in the
29 recorded in report 15 section 2". Queries used:

| # | Query |
|---|---|
| 1 | Sika Kenya OR Tanzania waterproofing guide how to flat roof blog knowledge ken.sika.com tza.sika.com |
| 2 | Dr Fixit Kenya OR "East Africa" waterproofing blog guide Pidilite Fosroc Kenya blog |
| 3 | Weber Saint-Gobain Kenya tile adhesive blog guide how to tile "weber" Kenya OR Tanzania |
| 4 | tile adhesive vs cement Kenya which is better for tiling |
| 5 | how to waterproof a flat roof Kenya OR Tanzania OR Uganda guide |
| 6 | epoxy flooring Kenya OR Tanzania guide cost types industrial floor |
| 7 | constructionreviewonline.com tile adhesive OR epoxy flooring OR concrete admixtures OR grout guide Africa knowhow |
| 8 | constructionkenya.com waterproofing OR "tile adhesive" OR "epoxy" guide Kenya cost |
| 9 | Fosroc Kenya OR "East Africa" news blog waterproofing concrete repair article |
| 10 | Mapei East Africa Kenya news article OR blog tile adhesive waterproofing "Mapei East Africa" |
| 11 | MC-Bauchemie Kenya OR Tanzania OR "East Africa" news magazine article waterproofing admixtures |
| 12 | thecitizen.co.tz leaking roof OR waterproofing OR tiles OR "damp" home property building tips Tanzania |
| 13 | how much tile adhesive per square metre Kenya OR Tanzania 20kg bag coverage how many bags |
| 14 | underground water tank waterproofing Kenya OR Tanzania OR Uganda how to stop leaking concrete tank |
| 15 | why tiles pop up OR hollow OR lifting causes Kenya OR Tanzania OR "East Africa" floor tiles tenting |
| 16 | C1 vs C2 tile adhesive difference EN 12004 explained epoxy grout vs cement grout |
| 17 | Tanzania nyumba "hidden roof" OR "paa" inavuja waterproof zege leaking concrete roof Dar es Salaam fix |
| 18 | bathroom shower waterproofing before tiling Kenya OR Tanzania OR Uganda guide leaking bathroom upstairs |

**Page reads.** About 75 pages and about 50 sitemap or API documents
were fetched directly. Three ways of measuring length were used, and every word
count below is approximate:

- **(A)** WordPress REST API (`/wp-json/wp/v2/posts`), counting the words
  in the post body. Used for Construction Review Online, CK and
  Construction Kenya Showcase. This is the most reliable of the three.
- **(H)** Raw HTML, counting the text inside the `<article>` or `<main>`
  element. It can include a byline, breadcrumbs or a related-posts strip.
- **(F)** A fetch tool's estimate of the body, for news sites whose HTML
  does not isolate the article.

Schema findings are the `@type` values in `application/ld+json` in the raw
HTML. Dates are the `datePublished` / `dateModified` values or the sitemap
`lastmod`, as served.

**Could not be read.**

| Site | Result | Consequence |
|---|---|---|
| mapei.com (all locales) | 403 to both fetch methods | Mapei's own content is described from search results only; nothing measured |
| saint-gobain-africa.com | 403 | Weber / Saint-Gobain East Africa described from search results only |
| in.weber (Weber India blog) | 403 | One ranking post known by title and URL only |
| monitor.co.ug | 403 | Two Ugandan "Homes and Property" pieces known by title only |
| capitalfm.co.ke | 403 | One Kenyan news item known by title only |
| kenyanlist.net | 522 | A forum thread that surfaced in three searches was not read |
| cofe-eng-sol.pages.dev | no response | A Kenyan epoxy blog post was not read |
| shabbirihardware.com / .co.ke | 404 | See section 2.13 |

**Other limits.** Search snippets were not treated as evidence for a page's
content. Social channels (LinkedIn, Facebook, YouTube, TikTok) were not
audited, so "shared" could not be measured; no share counts are given
anywhere in this file. Backlinks were not measured. A swimming pool query
and a concrete-repair how-to query were not run for lack of budget; where
section 4 mentions them it says so.

---

## 2. Per publisher: what they publish and where it is weak

### 2.1 Sika Tanzania (tza.sika.com)

**What exists.** No blog and no news section. The sitemap index lists 24
child sitemaps (https://tza.sika.com/en.sitemap.xml). Content that is not
a product page:

| Section | Pages | Newest `lastmod` | What it is |
|---|---|---|---|
| Solutions for projects | 22 | 2025-09-01 (most are 2024-08) | Global Sika pages by project type: mining, dams, airports, wet rooms, food and beverage, car parks |
| Residential and home improvement | 7 | 2026-07-12 | Room pages: bathroom, kitchen, swimming pool, garage |
| Projects | 15 | 2020-04-17 | All 13 references are international (Amsterdam, Linz, Manchester, Hoover Dam and so on) |
| Campaign pages | 7 | 2026-10-01 | Promotions and event sign-ups ("Specifiers Connect 2026") |
| Documents and resources | 10 | 2025-07-16 | Data sheet index, brochures, two video pages, design software, BIM |
| What's New Magazine | 1 | 2025-02-21 | A download page; the latest edition is "No. 05, release date May 2021" |
| Services and trainings | 1 | 2022-11-22 | 177 words (H), no dates, no syllabus |

No URL in the 38-page construction sitemap contains "how", "guide",
"knowledge", "blog", "faq" or "tips".

**The pieces that matter.**

- "Waterproofing & Tile Setting Solutions for Wet Rooms" - about 600 words
  (H), 8 H2s, a "6 Easy Steps to Waterproofing & Tiling a Bathroom"
  section, embedded video. JSON-LD: `ImageObject` only. No meta
  description. https://tza.sika.com/en/solutions-for-projects/wet-rooms.html
- "Floor & Wall Solutions for Food & Beverage Factories" - about 2,470
  words (H), 12 H2s, 74 images. The deepest page on the site and the
  strongest single piece any competitor has on resin floors.
  https://tza.sika.com/en/solutions-for-projects/food-beverage.html
- "Bathroom" (about 350 words) and "Swimming Pool" (about 280 words): a
  list of product families by layer. `BreadcrumbList` only.
  https://tza.sika.com/en/residential-and-homeimprovement/Bathroom.html ,
  https://tza.sika.com/en/residential-and-homeimprovement/Swimming-Pool.html
- "Application Videos": seven embedded videos, about 200 words, `lastmod`
  2020-04-17. One is a project in Veytaux, Switzerland.
  https://tza.sika.com/en/documents-resources/application-videos.html

**Weaknesses.** Group template copy with nothing about Tanzania: no
climate, no local standard, no local project, no local photo. No author,
no article dates, no FAQ, no tables, no `Article` or `FAQPage` schema. Most
pages have no meta description. The magazine has not had an issue since
May 2021. The calculator Sika Kenya offers is not on the Tanzanian site.

### 2.2 Sika Kenya (ken.sika.com)

**What exists.** The same structure, 23 child sitemaps
(https://ken.sika.com/en.sitemap.xml), almost every page re-stamped in
April 2026. What Kenya has that Tanzania lacks:

- **"Tile Grout & Adhesive Consumption Calculator"** - about 140 words (H)
  around an embedded tool. `Article` + `BreadcrumbList` JSON-LD,
  `dateModified` 2026-06-19. The tool sits in three iframes that show only
  after the visitor accepts all cookies; the served HTML says "For this
  content to be displayed, you need to accept all cookies".
  https://ken.sika.com/en/documents-resources/tile-grout-adhesive-calculator.html
- A tools section of four pages (sand app, mix design app, fibre concrete
  calculation, design software). https://ken.sika.com/en/tools.sitemap.xml
- Two local references: Nile Bridge, Jinja and Britam Tower, Nairobi. The
  Britam page is about 170 words, dated 2017, with `Project` schema.
  https://ken.sika.com/en/projects/local-references/britam-tower-nairobi-kenya.html
- "Solutions for Residential" - about 2,800 words (H), 17 H2s, 80 images:
  a room-by-room product map.
  https://ken.sika.com/en/solutions-for-projects/residential.html
- "Tile Setting Systems" - about 380 words.
  https://ken.sika.com/en/solutions-for-projects/tile-setting-systems.html
- A tiler competition campaign page, about 640 words.
  https://ken.sika.com/en/campaign/Kenya-Tiler-Competition.html

**Weaknesses.** Still no blog. The FAQ sitemap exists and lists zero URLs
(https://ken.sika.com/en/faq.sitemap.xml). The calculator has no
explanation of the numbers it produces and is hidden behind cookie consent.
Two local references in total. The same May 2021 magazine.

### 2.3 Fosroc

**What exists.** No Kenyan or East African blog was found. fosroc.com's
sitemap lists 1,518 URLs: 1,169 product pages, 134 under `/news`, 112 case
studies, 39 sector pages and 33 solution pages
(https://www.fosroc.com/sitemap.xml). News is corporate: exhibitions,
sponsorships, plant openings. One item concerns the region, the Nairobi
plant announcement
(https://www.fosroc.com/news/fosroc-enters-east-african-market-with-investment-in-new-manufacturing-facility-in-nairobi).
No case-study URL contains Kenya, Tanzania, Uganda, Nairobi, Dar or Africa.
Three sitemap entries are placeholders named `new-blog-entry`,
`new-blog-entry-2` and `new-blog-entry-3`.

In search, Fosroc's East African footprint is one Construction Review
article from 2016 (about 560 words (H), modified 2020-05-08,
https://constructionreviewonline.com/company-reviews/fconstruction-chemicals-maker-fosroc-makes-foray-into-kenya-market)
and Jiji classified listings for Nitocote CM210 and Conplast WP200
(for example https://jiji.co.ke/nairobi-central/building-materials/fosroc-cm210-nitocote-waterproofing-tanks-wCeK3KRIW0tw46cuvO0qllTL.html).

**Weaknesses.** No how-to content, nothing local, nothing recent for the
region.

### 2.4 Dr Fixit / Pidilite

**What exists.** No East African site or blog was found. The brand shows up
through a Kenyan paint maker's price list PDF
(https://crownpaints.co.ke/wp-content/uploads/2023/02/Waterproofing-Pricelist-04OctUpdate-2.pdf)
and Jiji listings. The content that ranks is the Indian blog:

- "Waterproofing Guidelines: A Comprehensive Guide" - about 3,200 words
  (H, includes a related-posts strip), date shown as 03/06/2024, FAQ
  section. https://www.drfixit.co.in/resources/blog/renovation/waterproofing-a-comprehensive-guide
- "Best water tank leakage solution to prevent costly damage" - about
  1,870 words (H), date shown as 01/10/2025, `BlogPosting` +
  `BreadcrumbList`, FAQ section, eight numbered lists, split into overhead
  and underground tanks. It appeared in the result set for the East
  African tank query (search 14).
  https://www.drfixit.co.in/resources/blog/home-care-decor/effective-water-tank-leakage-solutions-to-prevent-damage

**Weaknesses.** Written for India: monsoon timing and Indian product
names. Author is the brand, not a person. No sources.

### 2.5 Mapei (global) and Mapei East Africa

**Not measured: mapei.com returned 403 to every fetch**, as it did in the
earlier audits. From search results only:

- A magazine section, Realta Mapei, with "expert opinion" columns
  (https://mapei.com/it/en/realta-mapei/columns/expert-opinion?page=5).
- A South African news and events archive with year and topic filters
  (https://www.mapei.com/za/en/news-and-events?topic=admix).
- Project pages and system pages. One system page, on the Australian
  locale, came second for the East African tank query:
  "System for Repair of Concrete and Waterproofing of Potable Water Storage Tanks"
  (https://mapei.com/au/en/products-and-solutions/solutions/detail/system-for-repair-of-concrete-and-waterproofing-of-potable-water-storage-tanks).
- Search 10, for Mapei East Africa news or blog content, returned no
  article and no blog: only Jiji listings, retailers abroad and global
  product-line pages.

**What this means.** The principal's content is global and system-led.
None of it is about East Africa. It is material to cite and link, not
content to beat, and no Mapei page explains a Mapei product in Tanzanian
conditions.

### 2.6 MC-Bauchemie East Africa

**What exists.** Press releases only.

- "New MC-Bauchemie company established in Kenya" - about 870 words (H),
  12 images, no JSON-LD.
  https://www.mc-bauchemie.com/news/global-news/mc-bauchemie-establishes-new-company-in-kenya.html
- "MC-Bauchemie establishes company in Tanzania", repeated on trade sites
  (https://www.mc-bauchemie.com/news/press-release/mc-bauchemie-establishes-company-in-tanzania.html ,
  https://www.european-coatings.com/news/markets-companies/mc-bauchemie-establishes-company-in-tanzania/ ,
  https://www.polymerspaintcolourjournal.com/mc-bauchemie-establishes-company-in-tanzania/).
  Report 15 section 2.2 found this one release on five of the top ten
  places for "construction chemicals Tanzania".
- A customer magazine in PDF, "MC aktiv"; the issue that surfaced is from
  2019 on the Lithuanian domain
  (https://www.mc-bauchemie.lt/assets/magazine/MC_aktiv_1_19_English_web.pdf).

**Weaknesses.** No guide, no product explanation and no Tanzanian page.
The press releases rank for head terms and answer no buyer question.

### 2.7 Weber / Saint-Gobain East Africa

**Not measured: saint-gobain-africa.com returned 403.** Search 3 returned
only data sheet PDFs at numeric asset URLs with no page titles, for example
https://www.saint-gobain-africa.com/en/assets/view/media/11666 and
https://www.saint-gobain-africa.com/en/assets/view/media/10051 . No blog,
guide or how-to page surfaced. The Weber content that does rank for a
regional query is Indian: "Tile Adhesive VS Cement-Sand Mortar | Advantages
& Disadvantages" (https://www.in.weber/blog/tile-adhesive-vs-cement-sand-mortar-advantages-disadvantages,
403, not read).

**Weaknesses, as far as could be seen.** East African content is data
sheets behind opaque URLs. Nothing explanatory.

### 2.8 Nabaki Afrika

**What exists.** No posts on its own site (report 15 sections 1.7 and
5.3). Its content is two placed articles:

- The Citizen, "HOME & PROPERTY: How to waterproof your building" -
  published 2017-04-15, modified 2021-04-25, about 500 words (F),
  `NewsArticle` schema, one image. Credit line: "This article was written
  by Nabaki Afrika". Names the products it sells. Walls and floors are
  listed as problem areas but get no specific advice. No table, no FAQ, no
  source. https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242
- Construction Review Online, "How to waterproof a building in Tanzania" -
  about 1,150 words (H; report 15 estimated about 900), "Updated on May
  24, 2022", `Article` + `BreadcrumbList` + `Person` schema, no H2, one
  H3, no table, no FAQ. Opens and closes with an invitation to
  contact the company.
  https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/

**Weaknesses.** Both are advertorial, both are years old, neither has a
table, a step list a builder could follow, a quantity, a standard or a
source. They rank on host authority and an exact-match title.

### 2.9 Mlinzi (third-party incumbent on Mapei terms)

**What exists.** Three undated posts linked from
https://mlinzimapei.com/new-articles.html :

- "Why Waterproofing Fails in Tanzania: 5 Critical Reasons & How to Fix
  Them" - about 500 words (H, whole page 560), 7 H2s.
  https://mlinzimapei.com/Why-waterproofing-fails-in-tanzania-5-critical-reasons-&-how-to-fix-them.html
- "Waterproofing Tanzania: Your Guide to Mold Free Homes" - about 200 words
  in the article block, 475 on the whole page (H).
  https://mlinzimapei.com/waterproofing-tanzania-your-guide-to-mold-free-homes.html
- "Waterproof Cement: The Solution for Tanzania's Construction Challenges"
  - about 430 words (H), one table, names one product. It quotes a market
  projection with no source. Its title tag is the mould post's title.
  https://mlinzimapei.com/waterproof-cement-the-solution-for-tanzania%E2%80%99s-construction-challenges.html

**Weaknesses.** No dates, no author, no JSON-LD, no meta descriptions, one
image at most, a placeholder phone number in the header, special characters
in the URLs. Generic text with "Tanzania" added. But these are the only
Tanzania-titled posts by anyone selling the products.

### 2.10 Nanocube Africa (Nairobi applicator)

**What exists.** Three posts, the best-built competitor content found.

| Post | Published / modified | Words (H) | Structure |
|---|---|---|---|
| "The Complete Guide to Building Waterproofing in East Africa" - https://nanocubeafrica.com/blog/waterproofing-guide-east-africa.html | 2026-03-10 / 2026-06-21 | about 1,300 | Table of contents, 8 H2s, 5 H3s, step list, cost section, FAQ |
| "Epoxy Flooring: Why It's the Best Choice for Industrial Spaces in Kenya" - https://nanocubeafrica.com/blog/epoxy-flooring-industrial-spaces.html | 2026-02-18 / 2026-06-21 | about 1,170 | Table of contents, 7 H2s, 7 H3s, an epoxy against polyurethane section, cost section, FAQ |
| "Top 5 Construction Chemicals Transforming East Africa's Building Industry" - https://nanocubeafrica.com/blog/construction-chemicals-east-africa.html | 2026-01-25 / 2026-06-21 | about 1,330 | Table of contents, 5 H2s, 6 H3s, a where-to-buy section, FAQ |

All three carry `Article` + `FAQPage` + `BreadcrumbList` JSON-LD and title
tags written as queries ("Epoxy Flooring Kenya 2026: Cost, Types & Best
Contractor Guide").

**Weaknesses.** Kenya only. In the two posts checked closely (waterproofing
and epoxy): the epoxy post does not contain the word Tanzania, neither
mentions Dar es Salaam, both print rates in Kenyan shillings, neither names
a standard (EN, ISO or KEBS) and neither attributes a figure to a source.
All three have one image, no HTML table, no video and no calculator. The
author is the company. The titles say "2026" while the text is general.

### 2.11 Construction Review Online (Nairobi trade publisher)

**What exists.** A large WordPress site. Its "Knowhow" index on the day of
the audit was led by guest posts unrelated to Africa, for example
"Building in Nevada's Data Center Boom? Protect Your Payment Rights Before
You Break Ground" and "7 Steps Before Evidence Vanishes After a Florida
Jobsite Injury" (https://constructionreviewonline.com/knowhow/). The footer
links to "Guest Posting" and "News Writers" pages
(https://constructionreviewonline.com/guest-post/).

API searches for our topics returned:

| Topic searched | Closest posts | Words (A) | Dates |
|---|---|---|---|
| waterproofing | Project news from the US, Romania, Morocco and Dubai. Nothing instructional in the first ten | - | - |
| tile adhesive | "Bamburi Cement Launches Tile Adhesive" - https://constructionreviewonline.com/bamburi-cement-launches-tile-adhesive/ | 322 | 2022-04-02 |
| | "Mapei releases a new fast-setting tile adhesive and smoothing compound" - https://constructionreviewonline.com/mapei-releases-a-new-fast-setting-tile-adhesive-and-smoothing-compound/ | 403 | 2019-08-15 |
| | "Top waterproofing companies in South Africa" - https://constructionreviewonline.com/top-waterproofing-companies-in-south-africa/ | 2,915 | modified 2023-01-23 |
| epoxy | "Ten of the worlds leading manufacturers of epoxy flooring products" - https://constructionreviewonline.com/ten-of-the-worlds-leading-manufacturers-of-epoxy-flooring-products/ | 911 | modified 2023-01-23 |
| | "Top concrete flooring companies" - https://constructionreviewonline.com/top-concrete-flooring-companies/ | 437 | modified 2023-01-23 |
| admixture | "Chemical Admixtures have truly transformed concrete" - https://constructionreviewonline.com/chemical-admixtures-have-truly-transformed-concrete/ | 509 | 2015-04-01 |
| company profiles | "Build Construction Chemicals Limited Stick with experts" - https://constructionreviewonline.com/build-construction-chemicals-limited-stick-with-experts/ | 876 | 2017-02-21 |
| concrete repair, grout, tiling | Only infrastructure project news | - | - |

Schema is `Article` + `BreadcrumbList` + `Person`. Many older posts share
the published date 2021-08-02, which looks like a migration date, so true
ages are hidden.

**Weaknesses.** Company lists, press-release rewrites and paid profiles.
Most have no H2, none has a table. Almost no technical how-to on
construction chemicals, and the one Tanzanian piece is a supplier's
advertorial. The "Future of epoxy flooring in Africa" article that report
15 saw in tenth place did not come back in these API searches and was not
re-read.

### 2.12 CK (constructionkenya.com) and Construction Kenya Showcase

**CK** publishes home-builder guides and news.

| Post | Words (A) | H2s | Published / modified |
|---|---|---|---|
| "Steps to Waterproofing Your Foundation Like a Pro" - https://www.constructionkenya.com/7237/waterproofing-foundation/ | 657 | 6 numbered steps | 2019-09-17 / 2026-07-19 |
| "3 Types of Flat Roof Houses" - https://www.constructionkenya.com/8040/flat-roof-houses/ | 1,275 | 8 | 2024-01-27 / 2026-07-19 |
| "Most Popular Types of Concrete Floor Finishes" (one section is epoxy resin) - https://www.constructionkenya.com/9862/types-of-concrete-finishes/ | 1,359 | 12, with 11 images | 2024-02-26 / 2026-07-19 |
| "Different Types of Flooring for Modern Homes" - https://www.constructionkenya.com/2993/different-types-of-flooring/ | 970 | 12, one table | 2025-11-04 / 2026-07-19 |

Named authors, `Article` + `Person` schema, meta descriptions, one image
per section in the list posts. Nearly every post shows the same modified
date, 2026-07-19, so the freshness is a bulk re-stamp. **Weaknesses:**
general building practice with no local product, standard or number;
foundation waterproofing is described with French drains and drainage
mats; photos are credited "courtesy". API searches for "tile adhesive" and
"epoxy" returned no post on either subject.

**Construction Kenya Showcase** publishes trade features, often tied to a
supplier.

| Post | Words (A) | Published |
|---|---|---|
| "How to Waterproof Flat Roofs" - https://constructionkenyashowcase.com/how-to-waterproof-flat-roofs/ | 317 | 2023-12-19 |
| "The ABC of Construction Chemicals" - https://constructionkenyashowcase.com/the-abc-of-construction-chemicals/ | 938 | 2022-04-27 |
| "Five Types of Concrete Admixtures and their Application" - https://constructionkenyashowcase.com/five-types-of-concrete-admixtures-and-their-application/ | 564 | 2022-06-17 |
| "Choosing the Most Suitable Floor for your Project" (ends with a named supplier's section) - https://constructionkenyashowcase.com/choosing-the-most-suitable-floor-for-your-project/ | 1,125 | 2021-11-22 |
| "Bamburi Cement Launches Tile Adhesive" - https://constructionkenyashowcase.com/bamburi-cement-launches-tile-adhesive/ | 355 | 2022-03-31 |

**Weaknesses:** the author is "Construction Kenya Showcase Writer"; most
posts have no H2 at all; no tables, no data, no sources. Its 2026 items on
our topics are short supplier news.

### 2.13 The Citizen and other news sites

- **The Citizen (Tanzania).** One instructional piece exists, the 2017
  op-ed in 2.8. Search 12, aimed at the paper's home and property coverage
  of leaks, damp and tiles, returned nothing else from it.
- **Kenyans.co.ke.** "Techniques Behind Waterproofing Flat Roofs" -
  2022-11-24, about 350 to 400 words (F), named reporter, `NewsArticle`
  schema, three images, no brands, no costs, no sources. It was the first
  result for search 5.
  https://www.kenyans.co.ke/news/82243-techniques-behind-waterproofing-flat-roofs
  "3 Reasons Why Floor Tiles Bulge After Construction & Their Remedies" -
  2023-06-06, about 240 words (F). The three reasons are tile type, tree
  roots and soil; movement joints and adhesive coverage are not mentioned.
  First result for search 15.
  https://www.kenyans.co.ke/news/90130-3-reasons-why-floor-tiles-bulge-after-construction
- **K24 Digital (Kenya).** "How to stop roof leaks and protect your home
  before heavy rains begin" - 2026-08-05, about 450 words (H), named
  author, `NewsArticle` schema.
  https://k24.digital/lifestyle/home-and-living/how-to-stop-roof-leaks-and-protect-your-home-before-heavy-rains-begin/
- **The Star (Kenya).** "Building and construction shifting to ready-made
  material" - 2022-07-03, about 1,300 words (F), a column by a cement
  maker's technical manager arguing for tile adhesive over cement paste.
  No table, no named standard.
  https://www.the-star.co.ke/opinion/columnists/2022-07-04-building-and-construction-shifting-to-ready-made-material
- **Daily Monitor (Uganda).** Two "Homes and Property" pieces surfaced and
  could not be read (403):
  https://www.monitor.co.ug/uganda/magazines/homes-and-property/effective-waterproofing-solutions-for-buildings-4766182 ,
  https://www.monitor.co.ug/uganda/magazines/homes-and-property/a-guide-to-sound-construction-practices-5196316

**Weaknesses.** News-desk pieces: short, no data, no product knowledge,
written once and never updated.

### 2.14 BuildAfrique

https://buildafrique.com/ is a Kenyan project development and investment
group's site, not a publisher of construction-chemical content. Its API
returned no post for waterproofing, tile adhesive or epoxy. Not a content
rival.

### 2.15 Kenyan contractor and retailer pages that fill the result sets

- **Bestcare Facilities Management.** Its service pages took nine or more
  places in searches 5 and 6. "Flat Roof Waterproofing Services in Nairobi
  and Kenya" is about 1,690 words (H) with 8 H2s, 11 tables and 34 lists;
  `BlogPosting` schema whose `datePublished` was the date of the fetch, so
  the date is generated. The title tag ends in a phone number.
  https://bestcareservices.co.ke/flat-roof-waterproofing-services-in-nairobi-and-kenya/
  The epoxy page is about 640 words with one price table
  (https://bestcareservices.co.ke/epoxy-floor-coating-service-in-nairobi-kiambu-and-kenya/);
  the bathroom page about 600 words with 12 H2s
  (https://bestcareservices.co.ke/bathroom-waterproofing-service-in-nairobi-kiambu-kenya).
  Two of its ranking `/directory/` URLs returned 404.
- **Shabbiri Hardware.** Five of its blog URLs appeared in searches 4, 5,
  8 and 10 (for example
  https://shabbirihardware.com/blog/waterproofing-solutions-guide-kenya and
  https://shabbirihardware.com/blog/adhesives-for-tiles-marble-cement-kenya).
  Both of those returned 404: the old domain says the shop has moved to
  shabbirihardware.co.ke, and the same paths on the new domain are also
  404. These are ranking pages with nothing behind them.
- **Wings Contractors** (country not confirmed). "Preparing your roof for
  the long rains" - 2026-05-15, about 310 words (H), a six-point checklist with 7 H2s.
  https://wings-contractors.pages.dev/blog/preparing-your-roof-for-the-long-rains/

**Weaknesses.** Templated, service-led, price-led, and not Tanzanian. Useful mainly as
proof that tables, cost sections and seasonal titles get pages into these
result sets.

---

## 3. Pieces to beat

Twenty pieces. "Where it showed" refers to the searches in section 1 or to
report 15. "Journal n" is the post number in `SEO-STRATEGY.md` section 5.4.
"New row" means the registry has no row for this page yet, so it cannot be
built until it has one.

None of the "what ours adds" notes involves printing a price, and none
should be written so as to name another company.

| # | Piece and URL | Words (approx) | Date | Where it showed | What a better piece adds | Sahihi page |
|---|---|---|---|---|---|---|
| 1 | "How to waterproof a building in Tanzania" - https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/ | 1,150 (H) | updated 2022-05-24 | Searches 1 and 12; 4th for "waterproofing Tanzania" in report 15 | H2 per building element (roof, wet rooms, walls, below ground, tanks); a system table by element with data sheet values; numbered steps; masika and vuli timing; FAQ; sources; a named author | New row (report 15 section 5.2 row 4) |
| 2 | "HOME & PROPERTY: How to waterproof your building" - https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242 | 500 (F) | 2017-04-15 | Search 12; 1st for "waterproofing Tanzania" in report 15 | The walls and floor advice it promises and omits; a diagnosis section (leak or rising damp); anything written after 2017 | Same page as 1 |
| 3 | "The Complete Guide to Building Waterproofing in East Africa" - https://nanocubeafrica.com/blog/waterproofing-guide-east-africa.html | 1,300 (H) | 2026-03-10 | Read directly; not in a result set | Tanzania and the coast rather than Nairobi; data sheet figures in place of rates; a selection table; sources; more than one image | `/solutions/waterproofing` pillar plus the page for 1 |
| 4 | "Epoxy Flooring: Why It's the Best Choice for Industrial Spaces in Kenya" - https://nanocubeafrica.com/blog/epoxy-flooring-industrial-spaces.html | 1,170 (H) | 2026-02-18 | Read directly | Substrate moisture and humidity limits from the data sheets; a system-by-use table; when epoxy is the wrong choice | Journal 3 and 8; `/solutions/epoxy-flooring` |
| 5 | "Top 5 Construction Chemicals Transforming East Africa's Building Industry" - https://nanocubeafrica.com/blog/construction-chemicals-east-africa.html | 1,330 (H) | 2026-01-25 | Read directly | A plain explainer of the product families with what each does and where it fails, each linked to a stocked item and its data sheet | New row ("what are construction chemicals") |
| 6 | "The ABC of Construction Chemicals" - https://constructionkenyashowcase.com/the-abc-of-construction-chemicals/ | 940 (A) | 2022-04-27 | API search | Headings (it has none), a table of families, standards per family, a glossary | Same page as 5 |
| 7 | "Why Waterproofing Fails in Tanzania: 5 Critical Reasons & How to Fix Them" - https://mlinzimapei.com/Why-waterproofing-fails-in-tanzania-5-critical-reasons-&-how-to-fix-them.html | 500 (H) | undated | Read directly | Each failure tied to a cause that can be checked on site, with the data sheet limit that was broken (substrate moisture, cure time, overcoating window) | Journal 1, or a new row |
| 8 | "Waterproof Cement: The Solution for Tanzania's Construction Challenges" - https://mlinzimapei.com/waterproof-cement-the-solution-for-tanzania%E2%80%99s-construction-challenges.html | 430 (H) | undated | Read directly | What buyers mean by "waterproof cement": admixture, cementitious coating or flexible membrane, with a table of which is which and where each belongs | New row ("waterproof cement Tanzania") |
| 9 | "Techniques Behind Waterproofing Flat Roofs" - https://www.kenyans.co.ke/news/82243-techniques-behind-waterproofing-flat-roofs | 350 to 400 (F) | 2022-11-24 | 1st in search 5 | The concrete "hidden roof" house specifically; falls, outlets and parapet details; a repair sequence; the limits of each coating | Journal 1 |
| 10 | "How to Waterproof Flat Roofs" - https://constructionkenyashowcase.com/how-to-waterproof-flat-roofs/ | 320 (A) | 2023-12-19 | 2nd in search 5 | Everything: it has no headings, steps or numbers | Journal 1 |
| 11 | "3 Types of Flat Roof Houses" - https://www.constructionkenya.com/8040/flat-roof-houses/ | 1,275 (A) | 2024-01-27 | API search | East African roof build-ups in place of built-up and single-ply roofs; a repair-or-renew decision table | Journal 1; `/solutions/waterproofing/roof` |
| 12 | "How to stop roof leaks and protect your home before heavy rains begin" - https://k24.digital/lifestyle/home-and-living/how-to-stop-roof-leaks-and-protect-your-home-before-heavy-rains-begin/ | 450 (H) | 2026-08-05 | Search 12 | A pre-masika and pre-vuli checklist for Tanzania with the product each fault calls for | New row (seasonal post) |
| 13 | "Steps to Waterproofing Your Foundation Like a Pro" - https://www.constructionkenya.com/7237/waterproofing-foundation/ | 660 (A) | 2019-09-17 | API search | Basements and retaining walls in saline coastal ground; positive and negative side; joints | `/solutions/waterproofing/basement`; new row for a Journal post |
| 14 | "3 Reasons Why Floor Tiles Bulge After Construction & Their Remedies" - https://www.kenyans.co.ke/news/90130-3-reasons-why-floor-tiles-bulge-after-construction | 240 (F) | 2023-06-06 | 1st in search 15 | The causes it leaves out: no movement joints, poor coverage, wrong adhesive class, screed moisture; a diagnosis table; how to relay | Journal 9 |
| 15 | "Building and construction shifting to ready-made material" - https://www.the-star.co.ke/opinion/columnists/2022-07-04-building-and-construction-shifting-to-ready-made-material | 1,300 (F) | 2022-07-03 | Search 15 | A side-by-side table (bond, bed thickness, tile types, open time) from data sheets and the standard; when sand and cement is still acceptable | Journal 4 |
| 16 | "Tile Grout & Adhesive Consumption Calculator" - https://ken.sika.com/en/documents-resources/tile-grout-adhesive-calculator.html | 140 (H) plus a tool | modified 2026-06-19 | Sitemap | A calculator that works without a consent wall, with the formula shown, a worked example and a table by trowel notch and tile size | Journal 5 |
| 17 | "Waterproofing & Tile Setting Solutions for Wet Rooms" - https://tza.sika.com/en/solutions-for-projects/wet-rooms.html | 600 (H) | sitemap 2024-08-27 | Sitemap | An upstairs-bathroom guide: falls, corners, pipe penetrations, cure time before tiling, flood test, with photos or a section diagram | `/solutions/waterproofing/bathroom`; new row for a Journal post |
| 18 | "Floor & Wall Solutions for Food & Beverage Factories" - https://tza.sika.com/en/solutions-for-projects/food-beverage.html | 2,470 (H) | sitemap 2024-08-27 | Sitemap | The hardest to beat on depth. Ours wins on being local and specific: what the TMDA GMP guideline asks of a floor, epoxy against polyurethane by temperature and washdown, a selection table | Journal 3 and 10 |
| 19 | "Best water tank leakage solution to prevent costly damage" - https://www.drfixit.co.in/resources/blog/home-care-decor/effective-water-tank-leakage-solutions-to-prevent-damage | 1,870 (H) | shown as 01/10/2025 | Search 14 | The Tanzanian underground tank: groundwater, saline soil, potable-water suitability from the data sheet, new build against repair | Journal 7 |
| 20 | "Flat Roof Waterproofing Services in Nairobi and Kenya" - https://bestcareservices.co.ke/flat-roof-waterproofing-services-in-nairobi-and-kenya/ | 1,690 (H) | generated | Searches 1, 5 | Fewer and truer tables; a supplier's view (which system, how much material) in place of a service menu | `/solutions/waterproofing/roof` |

**Global pieces holding East African questions.** These are not regional
competitors, but they are what a searcher gets today, so they set the bar
on clarity:

- Adhesive quantity (search 13): https://www.tilemountain.co.uk/blog/how-much-tile-adhesive-do-i-need/ ,
  https://www.homebuilding.co.uk/advice/how-much-tile-adhesive-do-i-need ,
  https://www.tileafrica.co.za/calculate-your-grout ,
  https://www.bergerpaints.com/tools/tile-adhesive-calculator
- Adhesive classes (search 16): https://wacker.com/cms/en-gb/insights/tile-adhesives-standards.html ,
  https://mys.sika.com/en/home-improvement/tiling-system.html ,
  https://tilersforums.com/threads/tile-adhesive-grout-classifications-s1-s2-c2-etc-explained.38990/page-2
- Epoxy against cement grout (search 16): https://www.finehomebuilding.com/project-guides/tiling/whats-the-difference-epoxy-vs-cement-grout
- Wet rooms (search 18): https://www.bostik.com/global/en/knowledge-list/knowledge/how-to-waterproof-a-bathroom ,
  https://www.branz.co.nz/design-build/articles/waterproofing-tiled-showers
- Tanks (search 14): https://www.kryton.com/in-the-news/2005/04/18/eight-tips-for-choosing-concrete-waterproofing-system-for-tanked-structures/

---

## 4. Content gaps: what nobody in the region covers well

Each line is a statement about the 18 result sets and the sites audited
above, not about the whole web.

| # | Gap | Evidence | Registry |
|---|---|---|---|
| 1 | **Tile adhesive classes explained (C1, C2, S1) against TZS 1434-1 and ISO 13007** | Search 16 returned a German chemicals firm, a UK forum, Sika Malaysia and US sites. No African page. Report 15 found TBS standards PDFs first for "tile adhesive Tanzania" and nobody explaining them | Journal 2 |
| 2 | **How much tile adhesive per square metre** | Search 13 returned UK, New Zealand and South African pages, and its summary found no Kenyan or Tanzanian figure. The one regional tool (Sika Kenya) is consent-gated and unexplained. Sahihi already has per-product calculators in `src/config/mapei-coverage.ts` | Journal 5 |
| 3 | **Underground water tank waterproofing** | Search 14 returned no East African page: Canadian, Australian, Indian and Malaysian sources, and one Mapei system page | Journal 7 |
| 4 | **Waterproofing a bathroom before tiling** | Search 18 returned five locales of one adhesive maker's knowledge page, New Zealand and UK guides and one Kenyan service page. Sika Tanzania's wet-room page is the nearest regional content | New row |
| 5 | **Why tiles lift, tent and sound hollow** | The only regional piece is 240 words and blames tile type, trees and soil | Journal 9 |
| 6 | **The Tanzanian flat concrete roof** | Search 17, with Swahili terms, returned an Indian builder's guide, Jiji listings for brush-on sealants and a distributor stub. Kenyan pieces discuss terrazzo, bitumen and planted roofs in general terms | Journal 1 |
| 7 | **Resin floors for Tanzanian conditions** | Search 6 returned no Tanzanian page (the same result as report 15 section 2.10). Kenyan pages lead with shilling rates and say little about substrate moisture or humidity | Journal 3, 8, 10 |
| 8 | **Tile adhesive against sand and cement, with evidence** | The regional pieces are a manufacturer's newspaper column and product-launch news; the rest are Indian manufacturer blogs (search 4) | Journal 4 |
| 9 | **Epoxy grout against cement grout** | Only a US magazine article surfaced (search 16) | Journal 6 |
| 10 | **"Waterproof cement": what the term covers** | Classified listings use the phrase as a product name (https://jiji.co.ke/ruiru/building-materials/waterproof-cement-for-tanks-flatroof-plaster-pWxJClEwK3wLy5yxInH4EO6u.html); one 430-word post addresses it | New row |
| 11 | **A sourced "how to waterproof a building in Tanzania"** | The two ranking pieces are advertorials from 2017 and 2022 | New row |
| 12 | **Seasonal content for masika and vuli** | Two "before the rains" pieces from 2026, a Kenyan news item and a contractor's checklist; nothing Tanzanian | New row |
| 13 | **Concrete repair how-tos: crack injection, non-shrink grouting, anchoring** | No regional how-to appeared in any search or API query; Construction Review's "concrete repair" results were all infrastructure news. No dedicated search was run, so this is an absence in passing, not a tested gap | Pillar pages in 5.3; Journal rows needed |
| 14 | **Swahili** | No Swahili guide surfaced; search 17 returned Jiji's `/sw/` listings only. Agrees with the competitor audit, gap 4 | Strategy section 3 point 7: FAQ blocks first |
| 15 | **Swimming pool waterproofing and tiling** | Not searched in this pass. Sika Tanzania has a 280-word product-family page. Untested | `/solutions/waterproofing/swimming-pool` |

**Gaps in how the content is made**, true of every regional piece read:

- **No sources.** None links a data sheet. None cites a standard by
  number. The Star column refers to "existing standards" without naming one.
- **No accountable author.** Bylines are a company, a "writer" or a news
  reporter. The one technically qualified author is identified by job
  title only.
- **No real data in tables.** The tables found are price lists and service
  menus. Nobody tabulates consumption, pot life, cure time or class.
- **No explained calculator.** One tool in the region, gated.
- **No local photographs or diagrams.** One stock image per post is the
  norm.
- **No regional video.** The only how-to videos are Sika's group videos on
  a page last modified in 2020.
- **Stale or bulk-stamped dates.** 2017 and 2022 for the Tanzanian pieces;
  one shared modified date across a whole site for CK; a generated date at
  Bestcare.

**The gap Sahihi cannot fill.** Kenyan pages that rank on cost queries
print rates per square metre. The no-prices ruling means Sahihi will not
win "cost" and "price" queries with a number. The honest substitute is a
"what decides the cost" section (system, thickness, substrate condition,
quantity) with the calculator and a route to `/price-list` once it exists.

---

## 5. Format lessons and a template

### 5.1 What the ranking pieces do

1. **An exact-match title on a trusted host outlasts length.** The 2017
   Citizen piece is about 500 words and still led its query in report 15.
   The title is the query and "Tanzania" is in the first two sentences.
   Sahihi has no host authority yet, so it must win on the page: same
   title discipline, far more substance.
2. **The regional ceiling is about 1,300 words.** The best-built regional
   guides run 1,170 to 1,330 words. Global guides holding the same
   questions run about 1,900 to 3,200. News-desk pieces run 240 to 450.
3. **Headings are questions or steps.** CK uses numbered H2 steps;
   Nanocube uses H2s phrased as the query ("Epoxy vs. Polyurethane: Which
   Should You Choose?"). Trade-press pieces with no H2 are the weakest.
4. **A table of contents and a FAQ block appear on the best-built posts**
   (Nanocube, Dr Fixit). Only Nanocube was seen marking it up as
   `FAQPage`.
5. **Dates are shown and kept fresh.** Construction Review prints
   "Updated on"; CK and Nanocube keep a modified date.
6. **Schema in use:** `Article`, `NewsArticle` or `BlogPosting`, with
   `BreadcrumbList` and a `Person` or `Organization` author. `FAQPage` on
   one regional site. No `HowTo` anywhere.
7. **Tables get used where pages fill a result set**, but for prices and
   service menus, not data.
8. **Images are thin.** One per post is typical; list posts carry one per
   item.
9. **What none of them does:** cite sources, show data sheet values, name
   a qualified author, explain a calculation, mark where a product should
   not be used, or write for Tanzania.

### 5.2 Recommended template for a Sahihi post

**Length.** 1,400 to 2,200 words for a guide (above the 1,300 regional
ceiling, within the range of the global pieces). 900 to 1,300 words for a
single-question post such as a comparison or a quantity, where the pieces
to beat are 240 to 660 words. Length comes from tables, steps and limits,
never from padding.

**Sections, in order.**

1. **Title and H1.** The query in the reader's words, 60 characters or
   fewer, with Tanzania or Dar es Salaam where it reads naturally.
2. **Byline strip.** Named person and role, published date, updated date,
   and "checked against" naming the data sheets used.
3. **The short answer.** 40 to 60 words that answer the query outright.
   Static, on the first screen.
4. **Key facts table.** Three to six rows of data sheet values or standard
   classes, each with its source.
5. **In Tanzania.** The local condition that changes the answer: masika
   and vuli, coastal humidity, the flat concrete roof, saline ground,
   underground tanks. Sourced facts only.
6. **The body.** H2s written as the questions people ask. Numbered steps
   for a procedure. One comparison table where the post is a choice.
7. **Where it goes wrong, and when not to use it.** The honest-framing
   rule in strategy section 3 point 5.
8. **How much you need.** The coverage calculator for the product, with
   the formula and one worked example.
9. **Products for this job.** Two to four stocked items, each linked to its
   page and its data sheet PDF.
10. **Questions.** Four to six, with one or two in Swahili once a person
    has checked the wording.
11. **Sources.** Numbered: data sheets, TBS and ISO standards, regulator
    guidance.
12. **Next step.** WhatsApp or the enquiry form. "What decides the cost"
    in place of any price.

**Schema.** `Article` (headline, description, image, `datePublished`,
`dateModified`, `author` as a `Person` tied to `/about`, publisher) plus
`FAQPage` plus `BreadcrumbList` in one graph, as `SEO-STRATEGY.md` section
7 already plans. Only for content visible on the page. No `HowTo` is
needed: no competitor uses it. No offers and no prices.

**Internal links.** One link up to the owning solution pillar or line
pillar. Two to four links to item pages. One to the calculator. Two to
sibling posts. One to `/contact` or `/price-list`. In return, the pillar
and each named item page link to the post.

**Images.** One real photograph or a drawn section diagram per major
section when they exist, each with alt text. A build-up diagram (substrate,
primer, membrane, adhesive, tile) does more than a stock photo.

**Upkeep.** Show the updated date. Review waterproofing posts before each
rainy season and change the date only when the text has changed.

**Rules that apply to every post.** No prices. No values that are not on a
data sheet or in a cited standard. No copy that names or runs down another
company; brand-against-brand comparisons wait for the principal's
clearance (strategy section 5.4). Plain hyphens only. Each post needs a
row in `SEO-STRATEGY.md` section 5 before it is built.

### 5.3 Suggested order for the first 15

Ranked by how empty the result set is and how ready Sahihi's material is.
"New row" items wait on the registry.

| # | Post | Piece to beat (section 3) | Row |
|---|---|---|---|
| 1 | How to waterproof a building in Tanzania | 1, 2, 3 | New row |
| 2 | Why flat concrete roofs leak, and the fix that lasts | 9, 10, 11 | Journal 1 |
| 3 | C1 or C2: which tile adhesive class the job needs | none regional | Journal 2 |
| 4 | How much tile adhesive per square metre | 16 | Journal 5 |
| 5 | Tile adhesive or sand and cement | 15 | Journal 4 |
| 6 | Why tiles lift and go hollow | 14 | Journal 9 |
| 7 | Waterproofing an underground water tank | 19 | Journal 7 |
| 8 | Waterproofing a bathroom before tiling | 17 | New row |
| 9 | Epoxy or polyurethane floor for a food factory | 4, 18 | Journal 3 |
| 10 | Resin floors and coastal humidity | 4 | Journal 8 |
| 11 | Epoxy grout or cement grout | none regional | Journal 6 |
| 12 | What "waterproof cement" means: admixture, coating or membrane | 8 | New row |
| 13 | What construction chemicals are, family by family | 5, 6 | New row |
| 14 | Before the rains: a roof and wall checklist | 12 | New row |
| 15 | What the TMDA GMP guideline expects of a factory floor | 18 | Journal 10 |

---

## 6. Sources

Every URL fetched or cited, grouped. "Not read" means the server refused
the request.

**Sika Tanzania and Sika Kenya**
- https://tza.sika.com/robots.txt
- https://tza.sika.com/en.sitemap.xml
- https://tza.sika.com/en/whats-new-magazine.html
- https://tza.sika.com/en/services-trainings.html
- https://tza.sika.com/en/documents-resources/application-videos.html
- https://tza.sika.com/en/solutions-for-projects/wet-rooms.html
- https://tza.sika.com/en/solutions-for-projects/food-beverage.html
- https://tza.sika.com/en/residential-and-homeimprovement/Bathroom.html
- https://tza.sika.com/en/residential-and-homeimprovement/Swimming-Pool.html
- https://tza.sika.com/en/projects.sitemap.xml
- https://tza.sika.com/en/campaign-pages.sitemap.xml
- https://tza.sika.com/en/construction.sitemap.xml
- https://ken.sika.com/robots.txt
- https://ken.sika.com/en.sitemap.xml
- https://ken.sika.com/en/whats-new-magazine.html
- https://ken.sika.com/en/documents-resources/tile-grout-adhesive-calculator.html
- https://ken.sika.com/en/solutions-for-projects/tile-setting-systems.html
- https://ken.sika.com/en/solutions-for-projects/residential.html
- https://ken.sika.com/en/projects/local-references/britam-tower-nairobi-kenya.html
- https://ken.sika.com/en/campaign/Kenya-Tiler-Competition.html
- https://ken.sika.com/en/faq.sitemap.xml
- https://ken.sika.com/en/tools.sitemap.xml
- https://ken.sika.com/en/construction.sitemap.xml

**Fosroc, Dr Fixit, MC-Bauchemie**
- https://www.fosroc.com/
- https://www.fosroc.com/sitemap.xml
- https://www.fosroc.com/news
- https://www.fosroc.com/news/fosroc-enters-east-african-market-with-investment-in-new-manufacturing-facility-in-nairobi
- https://www.drfixit.co.in/resources/blog/renovation/waterproofing-a-comprehensive-guide
- https://www.drfixit.co.in/resources/blog/home-care-decor/effective-water-tank-leakage-solutions-to-prevent-damage
- https://crownpaints.co.ke/wp-content/uploads/2023/02/Waterproofing-Pricelist-04OctUpdate-2.pdf
- https://www.mc-bauchemie.com/news/global-news/mc-bauchemie-establishes-new-company-in-kenya.html
- https://www.mc-bauchemie.com/news/press-release/mc-bauchemie-establishes-company-in-tanzania.html
- https://www.european-coatings.com/news/markets-companies/mc-bauchemie-establishes-company-in-tanzania/
- https://www.polymerspaintcolourjournal.com/mc-bauchemie-establishes-company-in-tanzania/
- https://www.mc-bauchemie.lt/assets/magazine/MC_aktiv_1_19_English_web.pdf

**Mapei and Weber / Saint-Gobain (not read: 403)**
- https://www.mapei.com/it/en/realta-mapei
- https://mapei.com/it/en/realta-mapei/columns/expert-opinion?page=5
- https://www.mapei.com/za/en/news-and-events
- https://www.mapei.com/za/en/news-and-events?topic=admix
- https://mapei.com/au/en/products-and-solutions/solutions/detail/system-for-repair-of-concrete-and-waterproofing-of-potable-water-storage-tanks
- https://www.saint-gobain-africa.com/
- https://www.saint-gobain-africa.com/en/assets/view/media/11666
- https://www.saint-gobain-africa.com/en/assets/view/media/10051
- https://www.in.weber/blog/tile-adhesive-vs-cement-sand-mortar-advantages-disadvantages

**Nabaki's placed articles, Mlinzi, Nanocube**
- https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242
- https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/
- https://mlinzimapei.com/new-articles.html
- https://mlinzimapei.com/Why-waterproofing-fails-in-tanzania-5-critical-reasons-&-how-to-fix-them.html
- https://mlinzimapei.com/waterproofing-tanzania-your-guide-to-mold-free-homes.html
- https://mlinzimapei.com/waterproof-cement-the-solution-for-tanzania%E2%80%99s-construction-challenges.html
- https://nanocubeafrica.com/
- https://nanocubeafrica.com/blog.html
- https://nanocubeafrica.com/blog/waterproofing-guide-east-africa.html
- https://nanocubeafrica.com/blog/epoxy-flooring-industrial-spaces.html
- https://nanocubeafrica.com/blog/construction-chemicals-east-africa.html

**Construction Review Online**
- https://constructionreviewonline.com/knowhow/
- https://constructionreviewonline.com/guest-post/
- https://constructionreviewonline.com/wp-json/wp/v2/posts (searches: waterproofing, tile adhesive, epoxy, epoxy flooring, concrete repair, grout, admixture, tiling, companies in Tanzania)
- https://constructionreviewonline.com/company-reviews/fconstruction-chemicals-maker-fosroc-makes-foray-into-kenya-market
- https://constructionreviewonline.com/build-construction-chemicals-limited-stick-with-experts/
- https://constructionreviewonline.com/bamburi-cement-launches-tile-adhesive/
- https://constructionreviewonline.com/mapei-releases-a-new-fast-setting-tile-adhesive-and-smoothing-compound/
- https://constructionreviewonline.com/top-waterproofing-companies-in-south-africa/
- https://constructionreviewonline.com/ten-of-the-worlds-leading-manufacturers-of-epoxy-flooring-products/
- https://constructionreviewonline.com/top-concrete-flooring-companies/
- https://constructionreviewonline.com/chemical-admixtures-have-truly-transformed-concrete/

**CK and Construction Kenya Showcase**
- https://www.constructionkenya.com/wp-json/wp/v2/posts (searches: waterproofing, tile adhesive, epoxy, tiles, leak)
- https://www.constructionkenya.com/7237/waterproofing-foundation/
- https://www.constructionkenya.com/8040/flat-roof-houses/
- https://www.constructionkenya.com/9862/types-of-concrete-finishes/
- https://www.constructionkenya.com/2993/different-types-of-flooring/
- https://constructionkenyashowcase.com/wp-json/wp/v2/posts (searches: waterproofing, tile adhesive, epoxy, flat roof)
- https://constructionkenyashowcase.com/how-to-waterproof-flat-roofs/
- https://constructionkenyashowcase.com/the-abc-of-construction-chemicals/
- https://constructionkenyashowcase.com/five-types-of-concrete-admixtures-and-their-application/
- https://constructionkenyashowcase.com/choosing-the-most-suitable-floor-for-your-project/
- https://constructionkenyashowcase.com/bamburi-cement-launches-tile-adhesive/

**News sites**
- https://www.kenyans.co.ke/news/82243-techniques-behind-waterproofing-flat-roofs
- https://www.kenyans.co.ke/news/90130-3-reasons-why-floor-tiles-bulge-after-construction
- https://k24.digital/lifestyle/home-and-living/how-to-stop-roof-leaks-and-protect-your-home-before-heavy-rains-begin/
- https://www.the-star.co.ke/opinion/columnists/2022-07-04-building-and-construction-shifting-to-ready-made-material
- https://www.monitor.co.ug/uganda/magazines/homes-and-property/effective-waterproofing-solutions-for-buildings-4766182 (not read: 403)
- https://www.monitor.co.ug/uganda/magazines/homes-and-property/a-guide-to-sound-construction-practices-5196316 (not read: 403)
- https://www.capitalfm.co.ke/business/2022/03/bamburi-cement-ventures-into-the-mortar-market-with-tile-adhesive (not read: 403)

**Contractor, retailer and other pages**
- https://buildafrique.com/
- https://bestcareservices.co.ke/flat-roof-waterproofing-services-in-nairobi-and-kenya/
- https://bestcareservices.co.ke/epoxy-floor-coating-service-in-nairobi-kiambu-and-kenya/
- https://bestcareservices.co.ke/bathroom-waterproofing-service-in-nairobi-kiambu-kenya
- https://bestcareservices.co.ke/directory/waterproofing-systems-services.html (404)
- https://bestcareservices.co.ke/directory/epoxy-flooring-service.html (404)
- https://shabbirihardware.com/blog/waterproofing-solutions-guide-kenya (404)
- https://shabbirihardware.com/blog/adhesives-for-tiles-marble-cement-kenya (404)
- https://shabbirihardware.com/blog/top-tile-adhesive-brands-akfix-fevicol-tangit-kenya (seen in results; not fetched)
- https://wings-contractors.pages.dev/blog/preparing-your-roof-for-the-long-rains/
- https://kenyanlist.net/threads/best-waterproofing-methods-for-a-flat-roof-%E2%80%93-and-their-costs.41654/latest (not read: 522)
- https://cofe-eng-sol.pages.dev/blog/epoxy-flooring-types-kenya (not read: no response)
- https://jiji.co.ke/nairobi-central/building-materials/fosroc-cm210-nitocote-waterproofing-tanks-wCeK3KRIW0tw46cuvO0qllTL.html
- https://jiji.co.ke/ruiru/building-materials/waterproof-cement-for-tanks-flatroof-plaster-pWxJClEwK3wLy5yxInH4EO6u.html

**Global pages seen holding East African questions (search results; not audited)**
- https://www.tilemountain.co.uk/blog/how-much-tile-adhesive-do-i-need/
- https://www.homebuilding.co.uk/advice/how-much-tile-adhesive-do-i-need
- https://www.tileafrica.co.za/calculate-your-grout
- https://www.bergerpaints.com/tools/tile-adhesive-calculator
- https://wacker.com/cms/en-gb/insights/tile-adhesives-standards.html
- https://mys.sika.com/en/home-improvement/tiling-system.html
- https://tilersforums.com/threads/tile-adhesive-grout-classifications-s1-s2-c2-etc-explained.38990/page-2
- https://www.finehomebuilding.com/project-guides/tiling/whats-the-difference-epoxy-vs-cement-grout
- https://www.bostik.com/global/en/knowledge-list/knowledge/how-to-waterproof-a-bathroom
- https://www.branz.co.nz/design-build/articles/waterproofing-tiled-showers
- https://www.kryton.com/in-the-news/2005/04/18/eight-tips-for-choosing-concrete-waterproofing-system-for-tanked-structures/
- https://www.bricknbolt.com/blogs-and-articles/construction-guide/how-to-stop-water-leakage-from-concrete-roof

**Internal**
- `SEO-STRATEGY.md` sections 3 to 5 and 7
- `docs/COMPETITOR-AUDIT-2026-11.md`
- `docs/research/15-nabaki-competitor.md` sections 2, 3 and 5
