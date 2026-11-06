# COMPETITOR-AUDIT-2026-11.md

Compiled 2026-11-05 from `docs/research/01` (Mapei SERPs), `02` (Tanzania
field), `03` (Kenya), `04` (region) and `14` (entity audit). This is the
audit the handoff's section 15.1 asks for. Re-run it quarterly; Mlinzi and
MC-Bauchemie monthly.

**Method limits.** The search tool is US-located and its budget ran out
part-way, so no Tanzanian Google rankings were measured: "main rival"
means market and web footprint, not measured rank. mapei.com and
jiji.co.tz block automated fetching. Small local applicators are
under-discovered. Every claim below carries its source in the research
file named.

## 1. The incumbent on the Mapei terms: Mlinzi

Source: `docs/research/01-mapei-tanzania-serp.md` section 3.1, and
`14-entity-audit.md` section 3.

Claim: "MCC is an Authorized distributor of Mapei and has registered under Company Laws of Tanzania" (https://mlinzimapei.com/). A LinkedIn post describes it as "Tanzania's authorized Mapei distributor" (https://www.linkedin.com/posts/mlinzi-construction-chemicals-084342311_constructionexcellence-flooringinnovation-activity-7313488158980038656-mNj1), while the search snippet for its LinkedIn profile reads "Reseller of Mapei" (https://tz.linkedin.com/in/mlinzi-construction-chemicals-084342311, profile itself not fetchable). Address in footer: Pugu Road, opp. CBD Hotel, Office No. 35, 1st floor, P.O. Box 4948, Dar es Salaam; phone +255-749-797-977; email info@mlinzimapei.com. Whether Mapei confirms the authorization: not verified.

Audit (full crawl of 61 URLs on 2026-11-05; 58 returned 200):

| Item | Finding |
|---|---|
| Platform | Hand-built static HTML on a LiteSpeed server; Bootstrap template "Industro" (the About page still has `<title>Industro - Industrial HTML Template</title>`); footer credit "Designed By Viyaan Technosoft". No CMS. Google Analytics/Tag Manager present on the home page. |
| Domain | mlinzimapei.com, created 2023-10-09 (whois). The brand name "mapei" is inside the domain. |
| URL patterns | Flat `.html` files in the root with inconsistent casing: `/Mapelastic-Smart.html`, `/keraset-r.html`, `/Adesilex-g19.html`. Blog URLs contain special characters, e.g. `/Why-waterproofing-fails-in-tanzania-5-critical-reasons-&-how-to-fix-them.html` and a URL containing a curly apostrophe. `/` and `/index.html` both serve the home page with no canonical. |
| Title style | **54 of 58 pages have the identical title "MLINZI"**, including the home page, contact page, all category pages and all 43 product pages. The remaining four: the About page (template placeholder title) and three blog posts, two of which share the same title. |
| Meta descriptions | None on any page. |
| H1 | Every page's first H1 is the template word "Industro". Product pages have no product H1 (the product name is an H2). |
| Canonical / hreflang / Open Graph | None. |
| Structured data | No `application/ld+json` anywhere. Only leftover microdata for a `WebSite`/`SearchAction` search box pointing at a `/search` URL. No Organization, LocalBusiness or Product schema. |
| robots.txt / sitemap.xml | Both return **404**. |
| Per-product pages | Yes - **43 Mapei product pages** (for example Mapelastic Smart, Mapelastic Foundation, Planiseal 88, Keraflex Maxi S1, Kerapoxy, Kerapoxy CQ, Ultracolor Plus, Adesilex P9, Keraset-R, Mapefloor CPU HD, Topcem, Eporip, Idrostop). Thin: about 110-350 words including navigation and footer, a short bullet list copied from Mapei literature, no datasheet PDF, no pack-size table beyond a line, no enquiry form, no WhatsApp link, no Tanzania-specific content. |
| Blog and freshness | 3 undated articles on waterproofing in Tanzania (about 500-600 words each); one cites a 2024 market projection. No dates, no author. A static asset on the site reported Last-Modified 2025-03-07. LinkedIn is more active (a post about 2 months old). |
| Obvious blunders | Placeholder team ("Name - CEO & Founder", "Name - Project Manager"); the same placeholder testimonial repeated three times ("Nishant Apte - Profession"); social icons with empty links; "Dealer" menu item links to "#"; three internal links return 404 (`/category/waterproofing`, `/products/waterproof-cement`, `/products/Idrocrete-KR-1000`); the contact page gives only "DAR ES SALAAM TANZANIA" as the office address; image alt text is empty or "Image". |
| Duplicate domain | **https://mlinzicc.com/ serves a byte-identical copy of the home page** (same 58,469 characters, same title "MLINZI") with no canonical tag; domain created 2026-05-18. LinkedIn contact email has moved to info@mlinziCC.com (https://www.linkedin.com/posts/mlinzi-construction-chemicals-084342311_mlinzi-dar-tanzania-activity-7500882154260881410-_pe7). This splits their signals and may indicate a pending domain move. |
| Strengths | Three-year-old domain containing "mapei"; ranks first in both indexes for all head terms; explicit "Authorized distributor of Mapei" sentence on the home page; 43 indexable product URLs (one already ranks third for "Mapelastic Tanzania" in Yahoo); an active LinkedIn page (about 783 followers). |
| Weakness to exploit | Everything on-page. A site with unique titles ("Mapei [Product] in Tanzania - ..."), real descriptions, Product/LocalBusiness schema, datasheets, a sitemap and working enquiry paths out-classes it on every page-level signal. Their product pages do not rank for "Keraflex Tanzania" or "Kerapoxy Tanzania" even though the pages exist - a direct result of the "MLINZI" titles. |

Sources: https://mlinzimapei.com/ , https://mlinzimapei.com/about.html , https://mlinzimapei.com/new-articles.html , https://mlinzimapei.com/Mapelastic-Smart.html , https://mlinzimapei.com/Kerapoxy.html , https://www.mlinzimapei.com/contact.html , https://www.mlinzimapei.com/ceramic.html , https://mlinzimapei.com/robots.txt (404), https://mlinzimapei.com/sitemap.xml (404), https://mlinzicc.com/ .

**Why this is the first owner question (Q1).** The price list and the
project sheet supplied for the Sahihi site are both Mlinzi documents, and
the price list's author metadata names the Sahihi director. Whether
Mlinzi is the predecessor, a sister company or a third party decides
whether the play is redirects, a territory split, or a straight contest.
See `SEO-STRATEGY.md` section 1.

### Also claiming Mapei for Tanzania

- Claim: "Officially certified distributor and applicator of Mapei Construction Chemicals in East Africa"; "Active operations across Kenya, Uganda, Rwanda, Tanzania and Dubai". Address: Omega Business Park, Babadogo, Nairobi; +254 727 455956. No Tanzanian address. https://nanocubeafrica.com/ , https://nanocubeafrica.com/about.html
- Platform: hand-coded static HTML (`.html` URLs). Title: "Nanocube Africa - Premium Waterproofing & Epoxy Solutions in East Africa". Meta description and canonical present; meta keywords include "Mapei distributor Kenya" and "Mapei distributor East Africa".
- Schema: one `LocalBusiness` JSON-LD block with `areaServed` Kenya/Uganda/Rwanda/Tanzania/Dubai and an `AggregateRating` of 4.9 from 127 reviews (the reviews themselves are not shown on the page; not verified).
- robots.txt present, sitemap.xml present with only 9 URLs, lastmod 2026-06-21. No per-product pages. 3 blog articles.
- Strength: technically clean, schema, fresh. Weakness: an applicator/services site in Kenya with nine pages and no product catalogue, no Tanzanian address or phone. It ranks for Tanzanian Mapei queries only by default.

A 2021 article also names Charan as a Mapei representative
(`docs/research/07`). Three parties plus Sahihi claim the brand. Only
Mapei can settle it, and the dealer-locator listing is what settles it in
search.

## 2. The construction-chemicals field in Tanzania

Source: `docs/research/02-tanzania-competitors.md`.

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

## 3. Classification

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

## 4. Directories and marketplaces

Get listed; do not fight them for head terms.

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

## 5. Gaps nobody fills (the moat)

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

## 6. Kenya and the region, in brief

Full reports: `docs/research/03-kenya-market.md`,
`04-uganda-rwanda-region.md`.

| Market | Mapei | X-Calibur | What is open |
|---|---|---|---|
| Kenya | Mapei East Africa Ltd, Nairobi, Mapei's own company ("Kenya and surrounding countries"). Web presence weak: mapei.co.ke redirects to the UAE site | own Nairobi entity, x-calibur.co.ke | Oriental Yuhong; comparison and how-to content; product-level technical queries |
| Uganda | a Kampala reseller is named in one source (not verified) | not checked | generic category terms; Sika has no country site |
| Rwanda, Burundi | no seller found | not checked | brand and category terms |
| Zanzibar | no seller found | not checked | resort construction: pools, roofs, wet areas |
| Zambia, Malawi, Mozambique | Mapei South Africa's SADC patch | not checked | mining-led supply to Zambia and DRC, only with real deliveries |

Competitor hygiene in Kenya is poor (Sika Kenya's where-to-buy page
carries a "Sika Tanzania" title; Crown Paints' sitemap lists staging
URLs) and nobody publishes serious technical content. Regional threat to
watch: Flexo Concepts (Nairobi), which already lists Dar es Salaam as a
market for flooring.

## 7. Standing rule

Quarterly: re-crawl every tracked site, diff the sitemaps, note new
content clusters, report to the owner. Monthly: Mlinzi (both domains) and
MC-Bauchemie Tanzania. Dead URLs on a rival's site are link-reclamation
targets.
