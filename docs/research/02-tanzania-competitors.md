# 02 - Construction chemicals competitor field inside Tanzania (research date 2026-11-05)

Prepared for the Sahihi Construction Chemicals Limited (sahihicc.com) website build. Research only. Every factual line carries the URL it came from. Where something could not be checked it says "not verified".

## 1. Method and limits (read this first)

**What was done.** (a) 13 web searches (discovery sweep, brand-by-brand distributor checks). (b) Direct fetches of the live pages of each audited site on 2026-11-05: home page, one category page, one product page where one exists, `/robots.txt`, `/sitemap.xml` and the child sitemaps, read as raw HTML with curl (title, meta description, meta robots, canonical, hreflang, `application/ld+json` types, generator tags, script and stylesheet counts, image formats, WhatsApp links, placeholder text). (c) Direct fetches of directory and classifieds pages. (d) DNS probes of obvious exact-match and brand domains.

**Limits, stated plainly.**
- **No Tanzanian rankings were measured.** The search tool is a US-only index, and the session-wide search budget (shared by all 14 agents) ran out after my 13th query; 7 further planned queries (Swahili "gundi ya tiles", waterproofing contractors, epoxy contractors, MC-Bauchemie, Weber, Henkel/Bostik/Ardex/Laticrete/Kerakoll, Chryso/a.b.e./Cormix/Conmix) were refused. Nothing in this report says who ranks where on google.co.tz. "Main rival" below means market and web footprint, not a measured position.
- **Discovery of small local applicators is incomplete.** Waterproofing and epoxy flooring contractors in Tanzania mostly could not be found by direct fetching; the local directories that should list them are empty or mis-categorised (section 5). Treat the absence of a name here as "not found by this method", not "does not exist".
- **Blocked sites.** mapei.com (Cloudflare 403), jiji.co.tz (403), zoomtanzania.net (403), tz.kompass.com (403), knauf.com/en-TZ (403), saint-gobain-africa.com (403), bihuitools.com (403) refused both fetchers; yuhong.com.cn timed out. Their on-page signals are "not verified".
- **Performance is an impression from raw HTML only** (HTML weight, script and CSS counts, image formats, response time of a single request from a non-Tanzanian network). No Lighthouse, no CrUX, no rendering of JavaScript.
- **Domain age, backlinks and authority: not verified** (no WHOIS or link-index tool was available).
- Generator strings are quoted exactly as the sites emit them (for example `WordPress 7.1.4`).

**One finding outside my topic that the team must know:** on 2026-11-05 `https://sahihicc.com/` and `https://www.sahihicc.com/` both returned a page titled "Namecheap Parking Page" with H1 "Your website is ready to go!" (source: direct fetch of https://sahihicc.com/). `sahihicc.co.tz` and `sahihi.co.tz` did not resolve in DNS (registration status not verified).

## 2. Discovery sweep - who is actually in the field

### 2.1 Multinationals with a Tanzanian entity

| Player | Status in Tanzania | Source |
|---|---|---|
| Sika Tanzania Construction Chemicals Ltd | Wholly owned subsidiary, established 2016, Mbezi Industrial Area Plot 135, Salasala, Dar es Salaam. Ranges: waterproofing, sealing and bonding, refurbishment, roofing, flooring, industrial, structural strengthening. | https://tza.sika.com/en/about-us/company-profile.html |
| Sika Tanzania - expansion | Announced 2026-03-09 (10th anniversary): upgrade of the Dar es Salaam plant and a new plant in Mwanza for the Lake Zone. Says it supplied the Julius Nyerere Hydropower Project, the SGR and the Kigongo-Busisi Bridge. Investment amount not disclosed. | https://thecitizen.co.tz/tanzania/business/construction-chemicals-manufacturer-to-expand-production-as-demand-grows-5384772 |
| Master Builders Solutions (ex-BASF Tanzania Ltd) | BASF commissioned an admixture plant in Dar es Salaam in 2018 under a tolling agreement. The Tanzanian MBS web presence is now folded into Sika: `mbcc.sika.com/en-tz` 301-redirects to `tza.sika.com`, and `master-builders-solutions.com/en-tz/` returns 404. | https://www.basf.com/southernafrica/en/media/news-releases-south-africa/2018/BASF-opens-a-new-production-site-in-Tanzania ; direct fetch of https://mbcc.sika.com/en-tz |
| MC-Bauchemie Tanzania Limited | Established December 2023, announced 2024-02-21, Dar es Salaam, MD Henry Mulima. Starts with admixtures, cement grinding aids and waterproofing; concrete repair and floor coatings "to be introduced gradually". No Tanzanian website: the country selector points to the Ethiopian site. | https://www.mc-bauchemie.com/news/press-release/mc-bauchemie-establishes-company-in-tanzania.html ; https://www.mc-bauchemie.et/ |

### 2.2 Multinationals served from Kenya or through a named local contact

| Brand | What could be verified | Source |
|---|---|---|
| Mapei | Mapei East Africa Ltd is based in Nairobi (trade press). `mapei.co.ke` now 301-redirects to `https://www.mapei.com/ae/en/home-page` (the UAE locale). No Mapei page naming a Tanzanian distributor was found; a search for "Mapei distributor Tanzania" returned none. | https://www.stoneworld.com/articles/90517-mapei-extends-international-presence-to-east-africa ; direct fetch of https://mapei.co.ke/ |
| Xypex | Has a Tanzania landing page. Contact is a named individual (Hamish Hamilton, +255 22-2775138), no company name or address. Reference: Lower Ruvu Water Purification Plant. | https://da.xypex.com/Tanzania ; https://da.xypex.com/tanzania/projects |
| Conmix (UAE) | Logo shown as a partner brand on Nabaki's home page (image file `conmix.png`). Nabaki is therefore the visible Conmix channel. | https://nabaki.co.tz/ |
| Penetron | A third-party directory says Nabaki distributes Penetron and Decra. Not confirmed on Nabaki's own site; penetron.com names no Tanzanian distributor. Treat as not verified. | https://streamlinefeed.co.ke/directory/nabaki-afrika ; https://www.penetron.com/contact |
| Kalekim (Turkey) | Tile adhesives, grouts and waterproofing stocked by Spanish Tiles Tanzania. | https://spanishtiles.co.tz/collections/kalekim-waterproofing.html |
| Fosroc | fosroc.com lists Tanzania only in a country dropdown; its office locator rendered empty. No Tanzanian distributor verified. Fosroc was acquired by Saint-Gobain (completed February 2025). | https://www.fosroc.com/contact-us ; https://en.wikipedia.org/wiki/Fosroc |
| Saint-Gobain Weber | East African webercol datasheets are issued by Saint-Gobain Development East Africa Ltd, Nairobi. No Tanzania entity verified. A Kariakoo trader, Sunflower Investment, lists "Saint-Gobain's Construction Adhesives From France". | https://www.saint-gobain-africa.com/en/assets/view/media/11661 ; https://yellow.co.tz/business-category/adhesives |
| Pidilite / Dr. Fixit | Pidilite East Africa Ltd is a Kenyan operation in partnership with the Ramco Group. "ASL Tz Limited (Ramco Group)" is listed in Dar es Salaam. A Crown Paints Kenya waterproofing price list carries an Arusha address. No official Tanzanian Dr. Fixit distributor verified. | https://allbusiness.africa/business/pidilite-east-africa ; https://yellow.co.tz/business-category/paint-wholesale-manufacturers ; https://crownpaints.co.ke/wp-content/uploads/2023/02/Waterproofing-Pricelist-04OctUpdate-2.pdf |
| Chryso | East Africa admixture sales reported as run from Nairobi. Tanzanian presence not verified. | https://africanminingmarket.com/?p=19127 |
| X-Calibur | Africa base reported in Nairobi; x-calibur.us names no Tanzanian distributor. | https://constructionkenya.com/3356/x-calibur-nairobi-chemicals-plant ; https://www.x-calibur.us/about_us |
| Oriental Yuhong, CMCI, BIHUI | No Tanzanian distributor page found in search; principals' sites were unreachable or blocked. Not verified. | search of 2026-11-05; https://en.wikipedia.org/wiki/Oriental_Yuhong |
| Henkel/Polybit, Bostik, Ardex, Don Construction Products, Kerakoll, Laticrete, Cormix | Not verified (search budget exhausted). dcp-int.com exposes only a `/uk/en` locale in its home page links. | https://www.dcp-int.com/uk/en |

### 2.3 Local distributors, retailers and traders

| Player | What it is | Source |
|---|---|---|
| Nabaki Afrika Ltd | Multi-brand building products distributor, Coca Cola Road, Mikocheni Light Industrial Area (the same road as Sahihi). Four pillars: Home, Construction, Extractives, ESG. Claims six outlets. Runs the "Mtaalam" fundi training programme since 2010 (200+ trained, WhatsApp groups, facilities in Dar and Arusha). | https://nabaki.co.tz/ ; https://nabaki.co.tz/mtaalams/ |
| Spanish Tiles Tanzania | Tile and bathroom showrooms (Dar es Salaam, Arusha, Dodoma) with Kalekim adhesive, grout and waterproofing ranges. | https://spanishtiles.co.tz/ |
| Dar Ceramica Centre | Tile and sanitary ware chain (Kawe head office, Gerezani, Tegeta, Mbeya, Arusha, Dodoma, Mwanza, Geita). Sells SikaCeram tile adhesives and grout online. | https://darceramica.co.tz/product/tiles-glue-25-kg-sikaceram-205-super/ ; https://www.goafricaonline.com/tz/directory/construction-materials |
| CTM Tanzania | South African tile retailer's Tanzanian store. Sells own-brand Pro Grip adhesives with shilling prices. | https://www.ctm.co.tz/tiles/tile-essentials/tile-adhesives.html |
| Imports International (T) Ltd | Chang'ombe, Dar es Salaam. Advertises TEC 4 mm fibreglass-reinforced bitumen membranes, gypsum and POP. | https://sokoniadvertiser.com/ramadan-special-offer-on-premium-bitumen-waterproofing-membranes/ |
| Solvochem Tanzania Ltd | Mtwara. Listed for cement additives, concrete admixtures and waterproofing. Own site not found. | https://www.directory.africa-business.com/business/b776706c83/SOLVOCHEM-TANZANIA-LTD- |
| "Construction Chemicals Limited" | Dar es Salaam directory entry, +255 652 908 600, email at constructionchemicaltz.com. That domain did not resolve. | https://yellow.co.tz/business-category/real-estate-agents-developers-valuers/business-details/20061-construction-chemicals-limited |
| Wall putty makers | Extra Power Skimming Putty (Rockmax brand, Dar es Salaam); Mayangwa Company Ltd (Tanga, skim coat and Spectrum paints). Adjacent category. | https://www.goafricaonline.com/tz/directory/construction-materials |
| Paint manufacturers (adjacent) | Goldstar Paints, Kiboko Paints, Insignia (Coral), Berger Paints, Kansai Plascon Tanzania. Roof and damp-proof coatings overlap at the edge only. | https://yellow.co.tz/business-category/paint-wholesale-manufacturers |
| Foreign specialist contractors | Technical Finishes KZN (South Africa) supplied the epoxy terrazzo flooring at JNIA Terminal 3. Shows large flooring jobs can go to non-local firms. | https://www.kznindustrialnews.co.za/2019/07/31/kzn-company-adds-polish-to-new-tanzania-airport-terminal/ |

Dedicated local waterproofing applicators and epoxy flooring contractors with their own websites: **none found by this method** (see limits).

## 3. Competitor audit table

Read "Schema" as the `@type` values found in `application/ld+json` on the pages fetched. "None" means none in the raw HTML.

| # | Company and URL | Sells / brands | Platform | Sitemap state | Schema found | Per-product pages | Swahili / hreflang | WhatsApp | Biggest blunder | Weakness to exploit |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sika Tanzania - https://tza.sika.com/ | Full Sika range, made and packed locally | Adobe Experience Manager behind Cloudflare | `/sitemap.xml` is 404; robots.txt declares an index of 24 child sitemaps plus a PDF sitemap of 161 datasheets | Home: Organization, PostalAddress, ImageObject. Product and category: BreadcrumbList only | Yes, about 91 | `en-TZ` only, no Swahili | None | Home page has no meta description; a category lives at the numeric slug `/construction/72233/` | No Product or FAQ schema, no Swahili, no WhatsApp, no local project pages, no blog |
| 2 | Nabaki Afrika - https://nabaki.co.tz/ | Conmix, Woodoc, IPS logos; waterproofing, coatings, adhesives, roofing, plumbing | WordPress, Slider Revolution | robots.txt lists 5 sitemaps that all return 404; the real `wp-sitemap.xml` exposes theme demo pages | None | No | No hreflang; Swahili words only (Mtaalam, fundi) | Not on home page | Hidden off-screen gambling link injected into the home page | No catalogue at all, compromised and slow site, zero product or spec content |
| 3 | Spanish Tiles Tanzania - https://spanishtiles.co.tz/ | Tiles, bathrooms; Kalekim adhesives, grouts, waterproofing | Hand-built static HTML on Apache | Clean `sitemap.xml`, 518 URLs, all lastmod 2026-10-30 | Home: HomeAndConstructionBusiness, Organization, PostalAddress, GeoCoordinates, WebSite. Collections: BreadcrumbList | Yes for tiles and bathrooms (321); chemicals only at collection level | None | Yes, pre-filled, +255 748 444 441 | Chemicals pages list only names and pack sizes | No specs, TDS, coverage or guidance for chemicals |
| 4 | Dar Ceramica Centre - https://darceramica.co.tz/ | Tiles, sanitary ware; SikaCeram adhesives and grout | WordPress, WooCommerce, Elementor, AIOSEO Pro | Sitemap index of 10; 330 products; lastmod to 2026-11-02 | Product page: Product, Offer, UnitPriceSpecification, BreadcrumbList | Yes | None | Yes, +255 786 865 293 | Lorem ipsum filler text live on the product page | Empty product descriptions, very heavy pages |
| 5 | CTM Tanzania - https://www.ctm.co.tz/ | Tiles, bathrooms; Pro Grip adhesives, grouts, sealers | Magento-style store behind Cloudflare | `/sitemap.xml` is 404; robots.txt points to the South African sitemap on ctm.co.za | None on home or product page | Yes, with prices | hreflang en-TZ, en-KE, en-ZA, en-BW, en-NA; two Swahili banner phrases | Yes, +255 743 050 580 | Adhesive spec table says "Product type: Dual Flush Toilets" | DIY retail only; no technical depth, no project range |
| 6 | MC-Bauchemie Tanzania - no .tz site (https://www.mc-bauchemie.et/) | Admixtures, grinding aids, waterproofing | n/a for Tanzania | n/a | n/a | No Tanzanian pages | n/a | n/a | "Tanzania" in the country selector lands on the Ethiopian site with Ethiopian contacts only | No local web presence at all |
| 7 | Master Builders Solutions TZ - https://mbcc.sika.com/en-tz | Admixtures | Redirect | n/a | n/a | n/a | n/a | n/a | Old `master-builders-solutions.com/en-tz/` returns 404 | Brand searches now resolve to Sika; no standalone rival |
| 8 | Xypex Tanzania - https://da.xypex.com/Tanzania | Crystalline waterproofing | Sitefinity 10.1 (ASP.NET) | robots.txt points to the global xypex.com sitemap | Corporation | No local product pages | None | None | Title is the generic global one; contact is a person with a landline, no company or address | One thin page |
| 9 | Imports International (T) - https://www.imports-int.com/ | TEC bitumen membranes, gypsum, POP | WordPress, default install | Sitemap lists the default post | Organization (plugin default) | No | None | Only in classified ads | Site title is "My Blog", description "My WordPress Blog", sole post "hello-world" dated 2025-06-03 | No real website |
| 10 | Mapei East Africa - https://mapei.co.ke/ | Mapei full range (our principal) | Not verified (403) | Not verified | Not verified | Not verified | Not verified | Not verified | Kenyan domain redirects to the UAE locale home page | No Tanzania-specific Mapei page exists to compete with ours |
| 11 | X-Calibur - https://www.x-calibur.us/ | Our principal: repair, flooring, waterproofing | Custom PHP, Bootstrap, jQuery | 253 URLs, newest lastmod 2022-12-22 | None | Category-level pages plus TDS and SDS libraries | None | Mentioned | No canonical tags; footer copyright reads 2009-2018 | Stale global site with no Tanzania content |
| 12 | Conmix - https://www.conmix.com/ | Nabaki's principal: construction chemicals, plaster, ready mix | PHP 7.4.33 | 124 URLs, newest lastmod 2023-01-26 | None | Division pages | None | None | Home title is about ready-mix concrete in the UAE | No Tanzanian relevance |
| 13 | Goldstar Paints - https://goldstarpaints.co.tz/ | Paints; one roof coating | WordPress, WooCommerce, Elementor | `wp-sitemap.xml` index of 18 | None | Yes (paints) | None | Mentioned | 459 KB home HTML served uncompressed, 8.6 s response | Adjacent only; no waterproofing content |
| 14 | Kiboko Paints - https://kibokopaints.com/ | Paints | WordPress, WooCommerce, Elementor | `wp-sitemap.xml` index of 8 | None | Yes (paints) | None | None | No meta description; 13 render-blocking head scripts | Adjacent only |
| 15 | Insignia (Coral Paints) - https://www.insignia.co.tz/ | Paints, Ronseal | WordPress, WPML 4.4.11 | `wp-sitemap.xml` index of 8 | None in JSON-LD (theme microdata only) | No | hreflang `en` only | Mentioned | Home title "Insignia &#8211; Welcome"; 21 of 23 images have no alt text | Adjacent only |

Two further adjacent blunders worth a line: `bergerpaints.co.tz` redirects to https://bergerpaintsintl.com/ whose home page carries `meta robots: noindex, follow`; and https://crownpaints.co.tz/ shows a hosting placeholder titled "Default Page | EACdirectory" (Last-Modified 2013).

## 4. Per-site notes

### 4.1 Sika Tanzania - https://tza.sika.com/ (main rival and the content benchmark)

- **Titles.** Home: `Sika Tanzania`. Category: `Waterproofing solutions and products`. Product: `SikaCeram®-205 Super TZ | Tile Setting Systems`. Where-to-buy page: `Get Best Building Materials in Tanzania - Find Official Suppliers | Sika Tanzania`. Sources: https://tza.sika.com/ ; https://tza.sika.com/en/construction/waterproofing.html ; https://tza.sika.com/en/construction/72233/tile-setting-systems/sikaceram-205-supertz.html ; https://tza.sika.com/en/where-to-buy-building-materials.html
- **Meta description.** Absent on the home page, the projects page and the distribution page. Present and specific on category and product pages (the SikaCeram-205 description states EN 12004 class C2TE).
- **URL pattern.** `/en/construction/<field>/<group>/<product>.html`. One whole branch ("Building Finishing", which holds tile setting) sits at the numeric slug `/en/construction/72233/`. Source: https://tza.sika.com/en/construction.sitemap.xml
- **Sitemaps.** `/sitemap.xml` returns 404. robots.txt declares `https://tza.sika.com/en.sitemap.xml` (index of 24 child sitemaps) and `https://tza.sika.com/content/sika-webdms/tz01.sitemap-seo.xml` (161 PDF documents, lastmod 2020-04-16 to 2026-09-07). Child counts: products 92 URLs (lastmod up to 2026-09-18), construction 38, solutions-for-projects 22, projects 15, campaign-pages 7. Source: https://tza.sika.com/robots.txt
- **Schema.** Home: Organization, PostalAddress, ImageObject. Category and product: BreadcrumbList only. No Product, no FAQPage, no HowTo, no LocalBusiness.
- **Spec depth.** Deep: per-product page of about 1,400 words with a linked PDS, plus the PDF sitemap. This is the standard to match.
- **Blog and freshness.** No blog. "What's New Magazine" is a single page (lastmod 2025-02-21) linking PDFs. Campaign pages are current, including `Specifiers-Connect-2026` (campaign sitemap lastmod up to 2026-10-01), so Sika is actively courting specifiers through events.
- **Projects.** All 15 project URLs are under `/projects/international-references/` (Amsterdam, South Africa, Sardinia) with lastmod in March-April 2020. Sika's Tanzanian flagship jobs (JNHPP, SGR, Kigongo-Busisi) appear in the press but not as pages in its sitemap. Sources: https://tza.sika.com/en/projects.sitemap.xml ; https://thecitizen.co.tz/tanzania/business/construction-chemicals-manufacturer-to-expand-production-as-demand-grows-5384772
- **Language.** `html lang="en-TZ"`. The home page carries 113 hreflang alternates, none Swahili. Product pages carry `en-TZ` only.
- **Performance impression.** Home HTML 224 KB uncompressed; category and product pages 113-172 KB uncompressed, 12-19 KB on the wire; 2 external scripts, 1 stylesheet, no render-blocking scripts in the head. Images referenced as PNG and JPG; no WebP or AVIF and no `loading="lazy"` seen in raw HTML. Fast server (0.5-2.1 s).
- **Lead capture.** Forms only. No `wa.me` or WhatsApp link and no `tel:` link in the raw HTML of any page fetched. The where-to-buy page shows no distributor names in its HTML.
- **robots.txt oddity.** `Disallow: /*?*` for all bots, and a GPTBot block that lists campaign pages only.
- **Strengths.** Global domain, local manufacturing, real datasheets, mining and tunnelling solution pages, specifier events, now also absorbs Master Builders traffic.
- **Weakness to exploit.** No Swahili, no WhatsApp, no Product or FAQ markup, no Tanzanian project pages, no how-to content, a corporate template that cannot answer "bei", "wapi kununua" or "fundi" intent.

### 4.2 Nabaki Afrika - https://nabaki.co.tz/ (main rival on the ground, weakest on the web)

- **Titles.** Home: `Nabaki Africa &#8211; Nabaki Africa`. Pillar page: `Nabaki Construction &#8211; Nabaki Africa`. No product pages exist to quote.
- **Meta description.** None on any of the six pages fetched.
- **Platform.** WordPress (`generator: WordPress 7.1.4`), Slider Revolution 6.7.28. `nabaki.com` redirects to `nabaki.co.tz`.
- **Hacked content.** The home page contains a `div` positioned at `left: -7901px; top: -8247px` with the text "combine the strength of African construction with the thrill of online gaming" and a link to `1win-south-africa.co.za`. Source: raw HTML of https://nabaki.co.tz/ fetched 2026-11-05.
- **Sitemaps.** robots.txt (Last-Modified 2025-05-16) lists `sitemap915.xml`, `sitemap370.xml`, `sitemap852.xml`, `sitemap699.xml`, `sitemap191.xml`; the two tested return 404. The working `wp-sitemap.xml` lists 81 pages that include theme demo pages (`/team-plain-style/`, `/contact-2/`, `/contact-3/`, `/coming-soon/`, `/maintenance/`, `/gallery-grid-5-columns/`) and 9 demo "portfolio" posts from 2019 such as `/portfolio/failure-of-apple-acquisition/` and `/portfolio/family-violence/`. Sources: https://nabaki.co.tz/robots.txt ; https://nabaki.co.tz/wp-sitemap-posts-page-1.xml ; https://nabaki.co.tz/wp-sitemap-posts-portfolio-1.xml
- **Schema.** None. **hreflang.** None.
- **Catalogue.** None. The Construction pillar page names categories (decorative coatings, waterproofing, roofing, adhesives) but no brands, products, specs, datasheets or prices; it offers a brochure on request. Source: https://nabaki.co.tz/nabaki-construction/
- **News.** `/recent-updates/` shows a heading and no posts.
- **Performance impression.** Response times of 2.3 to 22 seconds across ten requests; 14 scripts, 9 stylesheets; all 14 home page images lack alt text; PNG heavy.
- **Strengths.** About three decades of trading (per directory copy), six outlets claimed, the Mtaalam programme (a ready-made applicator network and WhatsApp community), in-country stock, and physical proximity to Sahihi on Coca Cola Road. The home page states annual turnover above USD 12 million.
- **Weakness to exploit.** Everything online. A buyer searching a product name, a spec or a brand finds nothing on Nabaki's site, and the site is carrying spam.

### 4.3 Spanish Tiles Tanzania - https://spanishtiles.co.tz/ (rising threat and the local speed benchmark)

- **Titles.** Home: `Spanish Tiles Tanzania | Tiles, Bathrooms & Finishes`. Collection: `Kalekim Tile Adhesives | Spanish Tiles Tanzania` with description "Kalekim Tile Adhesives, in stock. See them at our Dar es Salaam, Arusha and Dodoma showrooms."
- **Platform.** Static `.html` files on Apache, no generator tag, Last-Modified between 2026-10-29 and 2026-11-03. This is a brand new rebuild.
- **Sitemap.** 518 URLs, every lastmod 2026-10-30: 321 `/products/`, 139 `/collections/`, 22 `/types/`, 11 `/journal/`, 25 root pages.
- **Schema.** Home: HomeAndConstructionBusiness, Organization, PostalAddress, GeoCoordinates, WebSite. Collection pages: BreadcrumbList.
- **Chemicals.** 14 Kalekim collections including `kalekim-tile-adhesives`, `kalekim-grouts`, `kalekim-waterproofing`. The waterproofing page lists nine items (Izoflex, Izolatex, Izostop, Betoplus admixture and others) by name and pack size only. No specs, coverage, datasheets or prices.
- **Funnel.** "Add to quote" basket, a pre-filled WhatsApp button, showroom booking. It is the same no-price catalogue model Sahihi plans.
- **Journal.** 10 articles, tile and bathroom topics (for example `tiles-for-pools-terraces-and-wet-areas`). None on waterproofing or adhesives chemistry.
- **Performance impression.** Home HTML 46 KB (11 KB on the wire), 2 scripts, 2 stylesheets, WebP images, 65 of 71 images lazy-loaded.
- **Weakness to exploit.** Chemicals are an add-on to tiles; no technical content, no schema on products, no Swahili.

### 4.4 Dar Ceramica Centre - https://darceramica.co.tz/ (reseller, not a rival for projects)

- **Titles.** Home: `Tiles, Sanitary Ware & Sanitary Fittings | Dar Ceramica`. Product: `Tiles Glue 25 Kg SikaCeram-205 Super | Dar Ceramica Centre`.
- **What matters.** It sells Sika's adhesives online at a published price (Sh51,000.00 for the 25 kg bag, "prices apply to customers in Dar es Salaam") with Product and Offer schema generated by WooCommerce.
- **Blunders.** The product description is empty and the Shipping and Delivery tab holds Latin filler ("Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui"). No meta description on the product page. Home HTML is 374 KB with 75 scripts and 113 stylesheets, 7 of them render-blocking scripts in the head.
- **Strengths.** At least eight branch locations listed, toll-free number 0800714050, WhatsApp, online cart.
- **Read.** A channel partner candidate for Mapei adhesives and grouts, currently in Sika's pocket.

### 4.5 CTM Tanzania - https://www.ctm.co.tz/

- **Titles.** Home: `CTM Tanzania - Buy Tiles, Taps & Bathroom Online`. Category: `Tile Adhesives` (the meta description is also just "Tile Adhesives"). Product: `ProGrip Kilimanjaro Tile Adhesive - 25 Kg`.
- **Catalogue.** Four own-brand Pro Grip items in the adhesives category, priced Sh 30,000 to Sh 109,000; the Kilimanjaro 25 kg bag is Sh 39,000, coverage 2.75 to 3.5 square metres, with an area calculator, delivery and click-and-collect.
- **Blunders.** `/sitemap.xml` is 404 and robots.txt points to `https://www.ctm.co.za/media/sitemap_za.xml`. No JSON-LD on the home or product page. The adhesive's spec table reads "Product type: Dual Flush Toilets". No home meta description. 10 render-blocking head scripts.
- **Swahili.** Two banner phrases only: "Nunua Mtandaoni, Uletewe Nyumbani!" and "Wasiliana Nasi Kwa".
- **Read.** Owns the DIY, price-led end. Not a competitor for contractors and specifiers.

### 4.6 MC-Bauchemie Tanzania Limited (rising threat, currently invisible)

- Company formed December 2023; press release 2024-02-21; MD Henry Mulima. Source: https://www.mc-bauchemie.com/news/press-release/mc-bauchemie-establishes-company-in-tanzania.html
- No Tanzanian site. The Ethiopian site https://www.mc-bauchemie.et/ shows only Addis Ababa contacts. `www.mc-bauchemie.co.tz` answered with a TLS certificate that does not match the host name (curl error 60).
- Read: a serious manufacturer with stated plans to add concrete repair and floor coatings, but nothing online to rank yet. Watch for a `.co.tz` launch.

### 4.7 Xypex Tanzania - https://da.xypex.com/Tanzania

- Title `Xypex | Concrete Waterproofing by Crystallization`, H1 "Welcome to Xypex in Tanzania", no meta description, generator `Sitefinity 10.1.6544.0 SE`, JSON-LD `Corporation`. One strong reference (Lower Ruvu, "over 50 tons"). Contact is an individual and a landline.
- Read: owns its own brand term only. Crystalline waterproofing as a category is open.

### 4.8 Imports International (T) Ltd - https://www.imports-int.com/

- The domain shows an untouched WordPress install: title "My Blog", description "My WordPress Blog", H1 "Blog", one post `/2025/06/03/hello-world/`.
- All marketing runs through classified posts on sokoniadvertiser.com (three posts between 2025-11-25 and 2026-03-12) with WhatsApp +255 658 300 619.
- Read: a price-led membrane importer with no web asset.

### 4.9 Principals and partners (not competitors)

- **Mapei.** `mapei.co.ke` redirects to the UAE locale of mapei.com, which blocked the fetch. Consequence: there is no Mapei-owned page targeting Tanzania.
- **X-Calibur.** https://www.x-calibur.us/ - title `X-Calibur | Construction Chemicals Manufacturer & Supplier`; sitemap of 253 URLs with nothing newer than 2022-12-22; no canonical tags; no JSON-LD; TDS and SDS library pages exist at `/products/technical-data-sheets` and `/products/safety-data-sheets`.
- **Conmix.** https://www.conmix.com/ - home title about ready-mix concrete in the UAE; sitemap of 124 URLs dated 2022-08 to 2023-01. This is Nabaki's construction chemicals principal.

### 4.10 Paint manufacturers (adjacent)

Goldstar, Kiboko, Insignia and Berger all run WordPress sites with paint catalogues. On the home pages fetched, the word "waterproof" appears zero times on Goldstar and zero times on Insignia. They are not contesting construction-chemical terms today. Sources: https://goldstarpaints.co.tz/ ; https://www.insignia.co.tz/ ; https://kibokopaints.com/ ; https://bergerpaintsintl.com/

## 5. Directories and marketplaces on "[product] suppliers Tanzania" terms

| Site | What it holds for our terms | Accepts listings? | Source |
|---|---|---|---|
| Jiji Tanzania (jiji.co.tz) | Classified category pages for grout, sealants, waterproof tile products and flooring materials, with Swahili mirrors under `/sw/` (for example "Tafuta ndani Grout Vifaa vya ujenzi"). It surfaced in 7 of my 13 US-index searches. Page content not verified (403). | Classifieds; posting flow not verified | https://jiji.co.tz/building-materials/grout ; https://jiji.co.tz/sw/building-materials/grout ; https://jiji.co.tz/165-sealants |
| GoAfrica Online (goafricaonline.com/tz) | "Building waterproofing" category: 0 results, and the page is `noindex,follow` while empty. "Coatings and surface finishes": 0 results. "Construction materials": 107 results, none a construction chemicals specialist on page 1. | Yes ("promote your business on this page"; paid "Visibility and Leads" packs exist; whether a basic listing is free is not stated) | https://www.goafricaonline.com/tz/directory/building-waterproofing ; https://www.goafricaonline.com/tz/directory/construction-materials |
| Yellow Tanzania (yellow.co.tz) | Has categories named Waterproofing Contractors, Waterproofing Materials, Adhesives, Floor Laying and Resurfacing, Tiles, Chemicals. Quality is poor: the Waterproofing Contractors page lists 25 general contractors; Adhesives has 1 listing; Floor Laying has 1 (an online marketing agency). Sika is filed under "Real Estate Agents, Developers and Valuers" with the dead URL `www.tz.sika.com`. | Yes: `/add-your-business`; pages say "Upgrade a free listing to premium" | https://yellow.co.tz/business-category/waterproofing-contractors ; https://yellow.co.tz/add-your-business |
| Africa Business Pages (africa-business.com) | Company profiles (Nabaki Afrika, Solvochem Tanzania). | Yes: "Register Free", paid upgrades | https://africa-business.com/business/dcc10469c6/Nabaki-Afrika |
| Sokoni Advertiser (sokoniadvertiser.com) | Construction Materials category holds 3 posts, all from Imports International. Post pages send an `X-Robots-Tag: noindex, nofollow` header. | Yes: "Add your listing" form | https://sokoniadvertiser.com/category/construction-materials/ |
| Kupatana (kupatana.com) | No building materials category on the home page; a site search for "waterproofing" returned phones and cars. Not a factor. | Yes, free ads | https://kupatana.com/ |
| Streamline (streamlinefeed.co.ke) | Kenyan directory with a Nabaki profile "Listed since 2026". | Not stated; has "Advertise" | https://streamlinefeed.co.ke/directory/nabaki-afrika |
| Mustakbil Tanzania | Two building-materials companies listed. | Not stated | https://tz.mustakbil.com/companies/tanzania/building-materials |
| ZoomTanzania, Kompass Tanzania, Dun and Bradstreet | Not verified (403 or not fetched). | Not verified | https://www.dnb.com/business-directory/company-information.lumber_and_other_construction_materials_merchant_wholesalers.tz.na.dar_es_salaam.html |

Useful non-commercial reference: the Tanzania Bureau of Standards publishes tile adhesive and grout standards (TZS 1434-1:2011; draft adoptions of ISO 13007-1, 13007-2, 13007-5 and ISO 14448). No competitor site references them. Sources: https://tradebarriers.org/ntm/documents/view/859 ; https://www.tbs.go.tz/uploads/publications/en-1774357770-BCDC%209%20(3854)%20DTZS%20ISO%2013007%201.pdf

## 6. Classification

**Main rivals (3).**
1. **Sika Tanzania** - the only competitor with a real indexed product catalogue across waterproofing, tile setting, flooring, repair, strengthening and mining, backed by local plants.
2. **Nabaki Afrika** - the strongest local distributor by physical footprint and applicator network, next door on Coca Cola Road, and the weakest website in the field.
3. **Spanish Tiles Tanzania (Kalekim)** - a brand-carrying retailer that has just shipped a fast, structured, quote-and-WhatsApp catalogue and already lists adhesives, grouts and waterproofing.

**Technical benchmark to match.** Sika Tanzania for depth (one page per product, a PDS on every page, a PDF sitemap, solution pages by project type). Spanish Tiles for front-end hygiene (46 KB pages, WebP, lazy loading, clean sitemap, LocalBusiness-type schema). Match both; neither does both.

**Rising threats to track.**
- **MC-Bauchemie Tanzania** - present since December 2023 with a stated roadmap into repair and flooring, no site yet.
- **Sika's Mwanza plant** - announced 2026-03-09; expect Lake Zone location pages and distributor pushes.
- **Spanish Tiles** adding specs to its Kalekim pages would close the gap quickly; its rebuild is one week old.

**Partners misread as competitors.**
- Mapei East Africa, X-Calibur, Oriental Yuhong, CMCI, BIHUI - principals. Their global pages may outrank a new site for bare brand names, but none has a Tanzania page.
- Dar Ceramica and CTM - tile retailers and potential stockists; Dar Ceramica already resells a rival's adhesive.
- Jiji, Yellow Tanzania, GoAfrica - listing channels to occupy, not rivals.
- Nabaki's Mtaalam fundis, independent applicators and hardware resellers - customers.
- Master Builders Solutions - no longer a separate web rival; it is Sika.

## 7. Gaps to exploit (what nobody in this field does)

Each line is checked against the pages audited above. It is a statement about those sites only.

1. **Brand plus country pages are uncontested.** No Mapei, X-Calibur, Oriental Yuhong, CMCI or BIHUI page targets Tanzania; searches on 2026-11-05 for "Mapei distributor Tanzania", "Oriental Yuhong Tanzania distributor waterproofing", "X-Calibur Construction Chemistry Tanzania distributor" and "Sahihi Construction Chemicals Limited Tanzania Mapei" returned no Tanzanian distributor page and no Sahihi page.
2. **Nobody pairs a real spec page with Product schema.** Sika has the specs but only BreadcrumbList. Dar Ceramica has Product schema but an empty description with filler text. CTM has neither.
3. **No FAQPage or HowTo markup anywhere** in the pages fetched.
4. **No Swahili pages and no `sw` hreflang on any competitor.** The only Swahili found is two CTM banner phrases, Nabaki's programme name, and Jiji's `/sw/` classified mirrors. Jiji is taking Swahili product queries by default.
5. **No local project references.** Sika's indexed project pages are all foreign and date from 2020; Nabaki's "portfolio" is theme demo content.
6. **No application guides for chemicals.** Spanish Tiles' journal is about tiles and bathrooms. Nobody explains how to waterproof a flat roof in a coastal climate, choose C1 versus C2 adhesive, or prepare a slab for epoxy.
7. **No published training or CPD content.** Sika runs specifier events through campaign pages; Nabaki trains fundis offline. Neither publishes the material.
8. **WhatsApp is missing at the top end.** Neither Sika nor Nabaki's home page has a WhatsApp link. Only the tile retailers do.
9. **Sports flooring has no visible local owner** (none found; not verified by search). Mining and underground is covered only by Sika's solution pages.
10. **The local competitor sites are technically broken.** A hacked home page (Nabaki), dead sitemaps (Nabaki, CTM), placeholder sites (Imports International, Crown Paints TZ), noindex on a home page (Berger), lorem ipsum on product pages (Dar Ceramica).
11. **Directories are empty for our categories.** GoAfrica's Tanzanian waterproofing and coatings categories have zero companies; Yellow's categories are mis-filled.
12. **Standards are unreferenced.** No one cites TZS 1434 or ISO 13007 / EN 12004 classes in a way a consultant can use, other than Sika inside individual product descriptions.

## 8. Top 10 actions

1. **Get the domain off the parking page now.** sahihicc.com currently shows "Namecheap Parking Page". Put up a holding page with company name, address, phone, WhatsApp and brand list while the build proceeds, and consider registering `sahihicc.co.tz` (did not resolve on 2026-11-05).
2. **One indexed page per product, built to beat Sika's template:** unique title of the form "[Product] - [what it is] | [Brand] Tanzania", a written meta description, a spec table in HTML (not only a PDF), pack sizes, coverage, standards class, TDS and SDS downloads, related system products, and Product plus BreadcrumbList JSON-LD. No prices needed; use an enquiry and WhatsApp call to action.
3. **Publish brand hub pages first:** "Mapei Tanzania", "Oriental Yuhong (OYH) Tanzania", "X-Calibur Tanzania", "CMCI Tanzania", "BIHUI Tanzania", each stating the authorised-distributor status with evidence (certificate or principal's letter) and linking to every product of that brand.
4. **Build category pages around buyer language, in English and Swahili:** waterproofing, tile adhesives and grouts (gundi ya tiles), epoxy and PU flooring, concrete repair, structural strengthening, sports flooring, mining and underground. Ship real Swahili pages with `hreflang="sw-TZ"` and `en-TZ`; no competitor has any.
5. **Add FAQPage and HowTo content on every category:** short, practical guides (roof slab waterproofing, wet-room system, pool tiling, epoxy floor preparation, crack injection). This is the content gap across the whole field.
6. **Create Tanzanian project reference pages** with location, scope, system used and photos. Sika has none indexed.
7. **Make WhatsApp the primary conversion path** with a pre-filled message per product ("I am interested in [product], quantity ...") and an "add to enquiry list" basket, matching what Spanish Tiles does for tiles and bettering it with specs.
8. **Match the local speed benchmark:** pages under roughly 50 KB of HTML, WebP or AVIF images with lazy loading, no render-blocking scripts, one clean `sitemap.xml` listed in robots.txt, a self-referencing canonical on every page. Spanish Tiles already does this; Sika's is light too.
9. **Occupy the empty directory slots:** list on GoAfrica (waterproofing, coatings, construction materials), Yellow Tanzania (Waterproofing Materials, Adhesives, Floor Laying and Resurfacing, Chemicals), Africa Business Pages, and post category ads on Jiji in English and Swahili. Keep name, address and phone identical everywhere.
10. **Turn rivals' channels into ours:** approach Dar Ceramica, CTM and Spanish Tiles as Mapei and BIHUI stockists; publish a "find an applicator" and "become a reseller" page; start a published training calendar and CPD pages for consultants and architects to answer Nabaki's Mtaalam programme and Sika's Specifiers Connect in public, where they are silent.

## 9. Follow-ups this research could not close

- Re-run the seven refused searches (Swahili adhesive terms, waterproofing contractors, epoxy contractors, Weber, Henkel/Bostik/Ardex/Laticrete/Kerakoll, Chryso/a.b.e./Cormix, MC-Bauchemie site) once search budget is available, ideally from a Tanzanian location or with a rank tracker set to google.co.tz.
- Verify Tanzanian distributors for Fosroc, Weber, Dr. Fixit, Penetron and Don Construction Products by contacting the principals.
- Audit mapei.com, jiji.co.tz and zoomtanzania.net in a real browser (they block automated fetches).
- Pull domain age and backlink profiles for tza.sika.com, nabaki.co.tz, spanishtiles.co.tz, darceramica.co.tz and ctm.co.tz from a link index.
