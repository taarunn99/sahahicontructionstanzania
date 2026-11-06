# 15 - Nabaki Afrika (nabaki.co.tz): competitor audit, rankings and plan (research date 2026-11-06)

Prepared for the Sahihi Construction Chemicals Limited (sahihicc.com) build. Research only. Every claim about Nabaki's site carries the URL it came from. "Not verified" means exactly that.

## Summary

- **Nabaki is strong on the ground and close to invisible in search.** It has traded since 1994, lists eight locations in five cities, claims 120+ staff and 200+ trained installers, and sits on the same road as Sahihi. Its website is 12 real pages on a law-firm WordPress theme with no product, brand or category pages, no blog posts, no H1 on 11 of those 12 pages, no meta descriptions, no structured data, no data sheets, no prices and a hidden gambling link on the home page.
- **In 29 US-index searches run on 2026-11-06, nabaki.co.tz did not appear once**, not for any of the 15 target queries and not for its own name or bare domain. Nabaki shows up only through other people's pages: a 2017 op-ed it wrote for The Citizen, two Construction Review articles, and directory profiles. No Sahihi or Mlinzi page appeared either. This is not a Google Tanzania measurement (see limits).
- **So the pages to beat for "construction chemicals in Tanzania" are not Nabaki's.** They are Sika Tanzania's company profile, the MC-Bauchemie and BASF press releases, and The Citizen's Sika story. Beating Nabaki on the open web is the easy part; beating Sika's domain is the real work.
- **"Construction companies in Tanzania" is a contractor query.** It returns Dun and Bradstreet directory pages, "top construction companies" list articles and contractor profiles. A supplier's home page cannot rank there. One honest resource page (how contractor registration classes work, how to check a contractor) has a plausible but uncertain route to page one.
- **Where Nabaki will stay ahead for a long time:** its own brand name, roofing, plumbing and pool terms outside Sahihi's range, map results that reward its eight branches, and 30 years of offline reputation. "Never beaten on any search" cannot be promised and should not be the goal. "Ahead on every construction-chemical search" is realistic.
- **The first action is still the parking page.** https://sahihicc.com/ returned the title "Namecheap Parking Page" again on 2026-11-06. Nothing below matters until that changes.

Already covered before this report: `02-tanzania-competitors.md` section 4.2 audited six Nabaki pages and found the hacked link, the dead sitemaps and the missing catalogue; `07-kw-waterproofing.md` found the 2017 Citizen advertorial. This report re-verifies those, goes deeper (21 pages plus the WordPress API), adds the rankings pass, the directory footprint and the plan.

## 0. Method and limits

**What was done on 2026-11-06.**
- Direct fetches with curl (raw HTML, desktop Chrome user agent, from a non-Tanzanian network) of about 40 nabaki.co.tz URLs, 22 of them HTML pages: home, robots.txt, the sitemap index and all seven child sitemaps, the four pillar pages, about, branches, contact, Mtaalam, news, gallery, shop, two personnel pages, one portfolio page, the author archive, three theme demo pages, the RSS feed, the internal search, and the WordPress REST endpoints for pages and posts. Each page was parsed for title, meta description, robots, canonical, hreflang, headings, JSON-LD, scripts, stylesheets, images, alt text, WhatsApp, `tel:` and `mailto:` links, PDF links and price strings.
- Byte sizes of the 44 same-host assets referenced in the home page HTML.
- 29 web searches, standard mode (the budget was about 30).
- Fetches of 11 third-party pages that mention Nabaki or rank for the target queries.

**Limits.**
- **The search tool is US-located and returns no volumes.** Positions below are the order the tool returned, not positions on google.co.tz or on a phone in Dar es Salaam. No search volumes are given anywhere in this file. Anything not measured is marked "inferred" or "not verified".
- **Google Maps and the local pack were not measured.** Nabaki's Google Business Profile, its review count and its map ranking are not verified. This matters: map results are where a company with eight branches is strongest.
- **Whether Google has nabaki.co.tz indexed, and for what, is not verified.** No `site:` check was possible and no link index (Ahrefs) is connected. No domain authority or backlink count appears in this file.
- Blocked: dnb.com (403), mabumbe.com (403), linkedin.com (403), facebook.com (400), zoomtanzania.net (403). The Tanzania Green Building Council site did not resolve under two guessed domains. The Wayback Machine answered two queries and then went offline, so the history of the old nabaki.com catalogue is not verified.
- Performance is an impression from raw requests, not Lighthouse or field data.
- Word counts are whitespace-split counts of visible body text. The header, menu and footer repeat on every page and account for about 85 words (the empty Shop page measures 84).

## 1. Audit of nabaki.co.tz

### 1.1 Company facts and trust signals (as Nabaki states them)

| Fact | What the site says | Source |
|---|---|---|
| Founded | "HELPING BUILD TANZANIA SINCE 1994"; "founded by Tania and Hamish Hamilton in 1994 from a small room in Bugurini Malapa" | https://nabaki.co.tz/ |
| Size | "six outlets across the country, 120+ team members, thousands of loyal customers, and an annual turnover of more than $12 million" | https://nabaki.co.tz/ |
| Counters on the home page | 30+ years of experience, 8 open branches, 5000+ local contractors, 200+ professional technicians (values in the HTML; they display as 0 until JavaScript runs) | https://nabaki.co.tz/ |
| Award | "voted one of the top ten midsized companies in KPMG's 'Top 100' Ranking (for three years running!)" | https://nabaki.co.tz/ |
| People | Russel Stuart CEO; Hamish Hamilton Co Founder and Chairman; Tania Hamilton Co Founder | https://nabaki.co.tz/about-us/ |
| Customer base claim | "a vast database of ( 100k+ ) clients, contractors and suppliers" | https://nabaki.co.tz/about-us/ |
| Local content | "As a Tanzanian-owned business, we are compliant with the Government's Local Content regulations, and legally able to supply partners working in the country's extractives sector" | https://nabaki.co.tz/about-us/ |
| Green building | "founding member of the Tanzania Green Building Council"; runs the NGO Nipe Fagio, established 2013 | https://nabaki.co.tz/nabaki-esg/ |
| Training | Mtaalam Programme since 2010; "a core group of 200+ technical professionals"; workshops that "attract 100+ people"; certificates of attendance; dedicated WhatsApp groups; a Mtaalam Manager; training facilities in Dar es Salaam and Arusha | https://nabaki.co.tz/mtaalams/ |
| Mining | A Mwanza office "located conveniently close to many of the large mine sites" | https://nabaki.co.tz/nabaki-extractives/ |
| Hours and contacts | Mon - Fri 08:00-16:30; +255 754 765 508; info@nabaki.co.tz; Coca Cola Road, Mikocheni Light Industrial Area, Dar es Salaam | https://nabaki.co.tz/contact/ |

**Branches** (all on one page, https://nabaki.co.tz/branches/): Mikocheni head office (Coca Cola Road); Masaki (Slipway, Chole Road); Boko (New Bagamoyo Road, Domi House); Kariakoo (Mtaa wa Sikukuu / Kiungani); Zanzibar (Mombasa Road, Mchina wa Mwanzo); Arusha (Business Park, off Njiro, Themi industrial area); Mwanza (Makarashari); Dodoma (Mpwapwa Road, Sao Hill Yard). Each has a mobile number. That is eight locations in five cities. The home page text still says "six outlets" while its counter says 8.

**Inconsistencies a search engine also sees.** The site title says "Nabaki Africa" while the body says "Nabaki Afrika". Founding is 1994 on the site but 1993 on Africa Business Pages and MarcoPolis. Turnover is "more than $12 million" on the site and "over $14,000,000" on Africa Business Pages. The Streamline directory gives a different address (Old Bagamoyo Road, P.O. Box 105051) and a landline (+255 22 277 4020). GoAfrica lists the company as "NABAKI AFRIKA CONSTRUCTION". Sources: https://nabaki.co.tz/ ; https://africa-business.com/business/dcc10469c6/Nabaki-Afrika ; https://marcopolis.net/?p=5531 ; https://streamlinefeed.co.ke/directory/nabaki-afrika ; https://www.goafricaonline.com/tz/directory/construction-companies

### 1.2 Brands and range

**On Nabaki's own site, four partner logos and nothing else.** The home page "OUR PARTNERS" strip holds four images with empty alt text, named `conmix.png`, `ips.png`, `mix.png` and `woodoc.png` (https://nabaki.co.tz/). Across the 12 real pages fetched, the words Mapei, Sika, Fosroc, Dr Fixit, Weber, Xypex, Penetron, Decra, Marley, Kalekim, Laticrete, Ardex and Bostik appear zero times. So do "tile adhesive", "grout", "epoxy" and "admixture". "Waterproof" appears four times, always inside a sentence listing what the company can help with. Nabaki's site names no construction-chemical product at all.

**What third parties say Nabaki sells.**

| Brand or range | Evidence | Source | Confidence |
|---|---|---|---|
| Xypex (crystalline waterproofing) | Nabaki's own 2017 Citizen article names Xypex Admix C-1000 NF, Patch n Plug and Concentrate. Xypex's Tanzania distributor page names "Hamish Hamilton", who is Nabaki's co-founder and chairman | https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242 ; https://da.xypex.com/Tanzania ; https://nabaki.co.tz/about-us/ | High. Report 02 recorded the Xypex contact as an unnamed individual; he is Nabaki's chairman |
| Bitumat Synroof (acrylic roof coating) | Named in the same Citizen article and in Construction Review | same ; https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/ | Medium. Named as a recommendation; distributorship not stated |
| Decra and Fortiza (stone-coated roof tiles) | Construction Review calls Nabaki the "official distributor for Tanzania" for Decra; Africa Business Pages lists both | https://constructionreviewonline.com/nabaki-afrika-supply-genuine-decra-for-housing-project/ ; https://africa-business.com/business/dcc10469c6/Nabaki-Afrika | High for Decra |
| Marley gutters, Fischer fixings, Woodoc, Q20, Leister welders, Flowplumb plumbing | Product list in the Africa Business Pages profile | https://africa-business.com/business/dcc10469c6/Nabaki-Afrika | Medium. Self-supplied directory copy, undated |
| "Adhesives, Grouts and Sealants" and "Construction Chemicals, Coatings, Rust Convertors and Admixtures" | Category names in the same profile. No brand is given for either | same | Medium |
| Conmix | Logo on Nabaki's home page. A search snippet from Construction Review says a different firm, Doors East Africa, was appointed Conmix distributor in 2011 (page not fetched) | https://nabaki.co.tz/ ; https://constructionreviewonline.com/doors-east-africa-concrete-solutions/ | Low. Conflicting |
| Penetron | Streamline directory only | https://streamlinefeed.co.ke/directory/nabaki-afrika | Low. Promotional template text |
| Mapei, Sika, Fosroc, Dr Fixit, Weber | No evidence found on Nabaki's site, in its directory profiles or in any of the 29 searches | - | Nabaki selling these: not verified, no sign of it |

Read: Nabaki is a roofing, water, plumbing and finishes distributor with a waterproofing line (Xypex, Bitumat) and an unbranded chemicals shelf. It is not a tile-adhesive, resin-flooring or concrete-repair specialist. The overlap with Sahihi is waterproofing first, then general "construction chemicals" by name.

### 1.3 Platform and URL structure

- **CMS.** WordPress, `generator: WordPress 7.1.4`. Theme **Attorna** (a law-firm theme: paths under `/wp-content/themes/attorna/`), GoodLayers page builder, Slider Revolution 6.7.28, Contact Form 7. Server header `Apache`. Source: raw HTML of https://nabaki.co.tz/
- **Domains.** https://nabaki.com/ redirects to https://nabaki.co.tz/ in one hop; `www` and `http` both 301 to https://nabaki.co.tz/. The Wayback Machine holds captures of nabaki.com from 2004-04-05 and of nabaki.co.tz from 2018-05-07 (CDX queries on web.archive.org). Old press links point at nabaki.com, so that link equity passes through the redirect.
- **URL pattern.** Flat WordPress pages: `/about-us/`, `/nabaki-construction/`, `/branches/`. No `/products/`, no categories, no brand paths; https://nabaki.co.tz/products returns 404 with the title "Page not found".
- **Navigation.** Home, About Us, Our Pillars, Nabaki News, Contact Us in the header; pillars, Branches, Mtaalam and Gallery in the footer. Every real page links to the same 13 internal URLs and nothing deeper, because nothing deeper exists.

### 1.4 Sitemaps and indexable pages by type

- https://nabaki.co.tz/robots.txt is `Allow: /` plus five sitemap lines (`sitemap915.xml`, `sitemap370.xml`, `sitemap852.xml`, `sitemap699.xml`, `sitemap191.xml`). All five return 404. Random-number sitemap names in robots.txt are a common trace of a past compromise; that reading is an inference.
- `/sitemap.xml` redirects to the WordPress default https://nabaki.co.tz/wp-sitemap.xml, an index of seven child sitemaps.

| Type (child sitemap) | URLs | What they are |
|---|---|---|
| Pages (`wp-sitemap-posts-page-1.xml`) | 81 | **12 real pages** (last modified 2024 or 2025): home, about-us, our-pillars, nabaki-home, nabaki-construction, nabaki-extractives, nabaki-esg, mtaalams, branches, contact, recent-updates, gallery. The last two are near-empty. **69 theme demo pages** dated 2016 to 2019: `/lending-law/`, `/practice-area-1/`, `/homepage-2/`, `/contact-3/`, `/coming-soon/`, `/maintenance/`, 18 blog layouts, 21 portfolio layouts, 8 gallery layouts, `/shop/`, `/cart/`, `/checkout/`, `/my-account/` |
| Personnel | 4 | Three people; the CEO twice (`/personnel/russel-stewars/` and `/personnel/russel-stewart/`). Each page is a name and a job title |
| Portfolio | 9 | Law-firm demo posts from 2019: `/portfolio/family-violence/`, `/portfolio/public-company-fraud/`, `/portfolio/car-accident-insurance/` |
| Portfolio and personnel taxonomies | 7 | `financial`, `accidental`, `violence`, `team` |
| Users | 1 | `/author/masteryoda/`, whose title is "admin - Nabaki Africa" |
| **Posts** | **0** | The REST endpoint https://nabaki.co.tz/wp-json/wp/v2/posts returns `[]` and the RSS feed has no items. Nabaki has never published a post on this install |
| Products, categories, brands | 0 | None exist |

Total in the sitemap: 102 URLs, of which 16 are about Nabaki (12 pages and 4 personnel stubs). The other 86, about 84%, are theme demo content. Nothing is `noindex`; the demo pages carry `meta robots: max-image-preview:large` and self-canonicals, so "Lending Law" and "Family Violence" are offered to Google as Nabaki pages. Last real edits: 2025-03-17 (home, about, pillars). Sources: the child sitemaps under https://nabaki.co.tz/wp-sitemap.xml ; https://nabaki.co.tz/wp-json/wp/v2/pages?per_page=100 ; https://nabaki.co.tz/feed/

### 1.5 Titles, descriptions, headings

Titles are the WordPress default, page name plus site name, with no keyword, place or product. Quoted from the HTML:

| URL | Title tag | Meta description | H1 |
|---|---|---|---|
| https://nabaki.co.tz/ | `Nabaki Africa &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/nabaki-construction/ | `Nabaki Construction &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/about-us/ | `About Us &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/branches/ | `Branches &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/mtaalams/ | `MTAALAMS &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/contact/ | `Contact &#8211; Nabaki Africa` | none | none |
| https://nabaki.co.tz/lending-law/ (demo) | `Lending Law &#8211; Nabaki Africa` | none | "Lending Law" |

- **No meta description on any of the 22 HTML pages fetched.** No Open Graph tags. No hreflang. `html lang="en-US"`.
- **No H1 on 11 of the 12 real pages.** Headings are H3 only ("HELPING BUILD TANZANIA SINCE 1994", "OUR CORE PILLARS"). The one real page with an H1 is the near-empty Gallery page (H1 "Gallery"). The other H1s on the domain are on demo pages, the empty Shop page and one of the two CEO stubs.
- The home page never uses the phrase "construction chemicals" or "building materials". "Construction materials" appears once, in body text.

### 1.6 Structured data

None. Zero `application/ld+json` blocks on every page fetched: no Organization, no LocalBusiness for any of the eight branches, no Product, no BreadcrumbList, no FAQPage.

### 1.7 Content depth

| Page | Body words (incl. about 85 of header and footer) | Note |
|---|---|---|
| https://nabaki.co.tz/ | 522 | About 90 of them are the injected gambling paragraph |
| https://nabaki.co.tz/about-us/ | 894 | The deepest page on the site. Values, team, nine "competitive advantage" paragraphs |
| https://nabaki.co.tz/nabaki-construction/ | 354 | **The text is the Nabaki Home copy pasted unchanged** ("Homes are at the heart of our business..."). It is a duplicate of https://nabaki.co.tz/nabaki-home/ plus one image caption |
| https://nabaki.co.tz/nabaki-extractives/ | 206 | Three paragraphs, no product named |
| https://nabaki.co.tz/nabaki-esg/ | 592 | Green building, the Nipe Fagio NGO, staff development. Nothing about products |
| https://nabaki.co.tz/mtaalams/ | 263 | Three paragraphs on the programme. No dates, no syllabus, no sign-up |
| https://nabaki.co.tz/branches/ | 197 | Eight addresses and phone numbers. No map, no hours per branch, no page per branch |
| https://nabaki.co.tz/contact/ | 115 | One phone, one email, one address, a form |
| https://nabaki.co.tz/recent-updates/ ("Nabaki News") | 86 | A heading and nothing else |
| https://nabaki.co.tz/gallery/ | 86 | One caption |
| Category pages | - | Do not exist |
| Product pages | - | Do not exist |

Leftover template copy is live: the home page describes the ESG pillar as "We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field", which is the law-firm theme's text (https://nabaki.co.tz/).

### 1.8 What Nabaki does not publish

- **Data sheets:** none. No `.pdf` link on any page fetched. The construction page offers "a specialist brochure" on request (https://nabaki.co.tz/nabaki-construction/).
- **Prices:** none. No TZS or USD figure other than the turnover claim.
- **Blog or news:** an empty "Nabaki News" page and zero posts.
- **Branch or location pages:** one list page; no per-city URL.
- **Swahili:** none beyond the words Mtaalam and fundi and the line "'Nabaki Afrika' is Kiswahili for 'I remain in Afrika'".
- **WhatsApp:** no `wa.me` or WhatsApp link anywhere. The Mtaalam page mentions WhatsApp groups in prose only.
- **Click-to-call:** no `tel:` link anywhere. Phone numbers are plain text, so a phone user cannot tap to call. The only action link is `mailto:info@nabaki.co.tz` and a Contact Form 7 form.
- **Projects:** none. The "portfolio" is demo content.
- **Map embed, video, calculator, search that returns products:** none. The site search for "waterproofing" returns two untitled items dated July 31, 2024 (https://nabaki.co.tz/?s=waterproofing).

### 1.9 Hacked content

The home page still contains a block positioned off-screen (`left: -7901px; top: -8247px`) reading "We are excited to combine the strength of African construction with the thrill of online gaming through 1win south africa. Nabaki Africa, a leading construction company in Africa, specializes in providing high-quality materials..." with a link to `https://1win-south-africa.co.za`. Source: raw HTML of https://nabaki.co.tz/ fetched 2026-11-06. Report 02 saw the same block on 2026-11-05. Two side notes: this injected paragraph is the only place on the home page where the words "construction company" appear, and hacked content with hidden links is against Google's spam policies (general knowledge, not fetched today; any effect on Nabaki's rankings is not verified).

### 1.10 Speed and mobile

- **No compression.** A request with `Accept-Encoding: gzip, deflate, br` returned the home HTML at its full 92,782 bytes with no `content-encoding` header, and the main script at its full 399,791 bytes. No `cache-control` or `expires` header on either. Sources: https://nabaki.co.tz/ ; https://nabaki.co.tz/wp-content/plugins/goodlayers-core/plugins/script.js
- **Weight.** The 44 same-host assets referenced by the home page total 5.23 MB (JavaScript 754 KB, CSS 827 KB, images about 3.6 MB; the HTML references 14 external scripts and 9 stylesheets). A browser would skip some responsive logo variants, so the real first load is somewhat lower; this is a sum of references, not a Lighthouse figure.
- **One image is 2.28 MB.** `https://nabaki.co.tz/wp-content/uploads/2024/07/h.png` is a parallax background drawn at 5% opacity. Two more JPGs are 530 KB and 356 KB. Every content image is PNG or JPG; no WebP or AVIF; one image on the page is lazy-loaded.
- **Server.** Time to first byte was 1.6 to 4.5 seconds over 27 requests (non-Tanzanian network); the server's own `server-timing` header reports 716 ms before the template starts.
- **Mobile, inferred from HTML.** A viewport tag is present and the theme has a mobile menu, so it is responsive in the basic sense. Against that: 14 scripts including jQuery and Slider Revolution, counters that read "0" until JavaScript runs, no tap-to-call, no WhatsApp, 14 of 14 home images without alt text. On the 3G and 4G speeds recorded in report 13 this page is slow.

### 1.11 Scorecard against Sahihi's current build

| Item | Nabaki (nabaki.co.tz) | Sahihi build (per CLAUDE.md, 2026-11-05) |
|---|---|---|
| Live and indexable | Yes, since at least 2018 on .co.tz | **No. Parking page** |
| Product pages | 0 | 47 Mapei pages |
| Data sheets | 0 | 44 PDFs |
| Calculators | 0 | One per product |
| Brand hubs | 0 | `/mapei` |
| Keyword titles, descriptions, H1 | None | Yes |
| Structured data | None | Organization and WebSite JSON-LD components exist in `src/components/seo/`; the rest is planned (strategy section 7) |
| Branches | 8 in 5 cities | 1 (Coca-Cola Road). Others: not known |
| Years trading | Since 1994 | New entity online |
| Installer network | 200+ Mtaalams, since 2010 | `/training` not built |
| Third-party mentions | The Citizen, Construction Review, MarcoPolis, directories | None found in search |

## 2. Where Nabaki ranks

29 searches on 2026-11-06, US index, standard mode. "Top 10" is the first ten results in the order returned. Titles are as the tool returned them; where it returned a slug, a plain description is given in brackets. **nabaki.co.tz appeared in none of the 29 result sets. No sahihicc.com, mlinzimapei.com or mlinzicc.com page appeared in any.** Third-party pages about Nabaki are marked **[N]**.

### 2.1 construction chemicals in Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | thecitizen.co.tz | Construction chemicals manufacturer to expand production as demand grows (Sika) |
| 2 | mbcc.sika.com | BASF commissions a production site for construction chemicals in Dar es Salaam |
| 3 | basf.com | BASF opens a new production site in Tanzania (2018) |
| 4 | european-coatings.com | MC-Bauchemie establishes company in Tanzania |
| 5 | european-coatings.com | same article, second URL |
| 6 | tza.sika.com | Company profile |
| 7 | polymerspaintcolourjournal.com | MC-Bauchemie establishes company in Tanzania |
| 8 | mc-bauchemie.com | MC-Bauchemie establishes company in Tanzania |
| 9 | polymerspaintcolourjournal.com | same article, second URL |
| 10 | tanzaniainvest.com | Tanzania starts construction of chemical plant for water disinfection |

Nabaki: absent in all 17 results. Sahihi and Mlinzi: absent.

### 2.2 construction chemicals Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | thecitizen.co.tz | Construction chemicals manufacturer to expand production as demand grows |
| 2 | tza.sika.com | Company profile |
| 3 | mbcc.sika.com | BASF commissions a production site... |
| 4 | basf.com | BASF opens a new production site in Tanzania |
| 5 | european-coatings.com | MC-Bauchemie establishes company in Tanzania |
| 6 | european-coatings.com | same, second URL |
| 7 | polymerspaintcolourjournal.com | MC-Bauchemie establishes company in Tanzania |
| 8 | mc-bauchemie.com | MC-Bauchemie establishes company in Tanzania |
| 9 | tanzaniainvest.com | Chemical plant for water disinfection |
| 10 | polymerspaintcolourjournal.com | same, second URL |

Nabaki's own domain: absent. **[N]** its Africa Business Pages profile came 22nd of 23 (directory.africa-business.com). Sahihi and Mlinzi: absent.

### 2.3 construction chemicals Dar es Salaam

| # | Domain | Title |
|---|---|---|
| 1 | thecitizen.co.tz | Construction chemicals manufacturer to expand production... |
| 2 | tza.sika.com | Company profile |
| 3 | mbcc.sika.com | BASF commissions a production site... |
| 4 | european-coatings.com | MC-Bauchemie establishes company in Tanzania |
| 5 | european-coatings.com | same, second URL |
| 6 | mc-bauchemie.com | MC-Bauchemie establishes company in Tanzania |
| 7 | basf.com | BASF opens a new production site in Tanzania |
| 8 | polymerspaintcolourjournal.com | MC-Bauchemie establishes company in Tanzania |
| 9 | polymerspaintcolourjournal.com | same, second URL |
| 10 | builtin.com | BDM - Infrastructure (job advert) |

Nabaki: absent in all 15. Sahihi and Mlinzi: absent.

### 2.4 construction companies in Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | dnb.com | Construction Companies in Tanzania, United Republic of |
| 2 | dnb.com | Construction Companies in Dar-es-salaam |
| 3 | dnb.com | Construction Companies in Arusha |
| 4 | cnbcafrica.com | Challenges facing Tanzania's construction industry (video) |
| 5 | libraryrepository.udsm.ac.tz | (University of Dar es Salaam repository item) |
| 6 | dnb.com | Highway, Street, and Bridge Construction Companies in Tanzania |
| 7 | cceonlinenews.com | Leading construction and civil engineering companies in Tanzania |
| 8 | cceonlinenews.com | same, second URL |
| 9 | dnb.com | Residential Building Construction Companies in Tanzania |
| 10 | hrms.ate.or.tz | ADVENT CONSTRUCTION (employers' association member page) |

Nabaki's own domain: absent in all 17. **[N]** 13th was GoAfrica's "Construction companies and building contractors in Tanzania" page, which lists "NABAKI AFRIKA CONSTRUCTION" among its 36 entries. Sahihi and Mlinzi: absent. See section 4.

### 2.5 construction chemical companies in Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | en.wikipedia.org | Msufini Tanzania Limited (a chlorine plant, not construction chemicals) |
| 2 | european-coatings.com | MC-Bauchemie establishes company in Tanzania |
| 3 | mbcc.sika.com | BASF commissions a production site... |
| 4 | thecitizen.co.tz | Construction chemicals manufacturer to expand production... |
| 5 | european-coatings.com | same as 2, second URL |
| 6 | basf.com | BASF opens a new production site in Tanzania |
| 7 | polymerspaintcolourjournal.com | MC-Bauchemie establishes company in Tanzania |
| 8 | polymerspaintcolourjournal.com | same, second URL |
| 9 | tanzaniainvest.com | Chemical plant for water disinfection |
| 10 | tanzaniainvest.com | same, second URL |

Nabaki: absent in all 17. Sahihi and Mlinzi: absent. No page in this result set is a list of companies; the query has no page that answers it.

### 2.6 building materials Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | allafrica.com | (news story, April 2026) |
| 2 | catalog.ihsn.org | Selection of Building Materials towards Sustainable Building Construction in Urban Tanzania |
| 3 | journals.uct.ac.za | (journal article) |
| 4 | nation.africa | Why building materials in Tanzania now cost more |
| 5 | mwananchi.co.tz | Tanzania sees surplus in construction materials, eyes lagging sectors |
| 6 | thecitizen.co.tz | Surging material costs paralyze Tanzania's construction sector |
| 7 | indexbox.co.uk | Tanzania - gypsum boards market analysis |
| 8 | journals.uct.ac.za | same as 3, second URL |
| 9 | chronicle.co.zw | Export to Tanzania, building material suppliers urged |
| 10 | indexbox.co.uk | Tanzania - cement tiles market analysis |

Nabaki: absent in all 26, in its own core category. Lower down: tz.mustakbil.com (18), eastafricatenders.com (20), jiji.co.tz (21, 23), saint-gobain-africa.com (25). Sahihi and Mlinzi: absent.

### 2.7 waterproofing Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | thecitizen.co.tz | HOME and PROPERTY: How to waterproof your building **[N]** written by Nabaki, 2017 |
| 2 | sunandaglobal.com | Case study of Absa Bank Tanzania Limited |
| 3 | sunandaglobal.com | same, second URL |
| 4 | constructionreviewonline.com | How to waterproof a building in Tanzania **[N]** |
| 5 | da.xypex.com | Xypex Tanzania distributor site **[N]** contact is Nabaki's chairman |
| 6 | constructionreviewonline.com | same article as 4, second URL **[N]** |
| 7 | goafricaonline.com | (waterproofing directory, French URL, 0 results) |
| 8 | goafricaonline.com | (building waterproofing directory, 0 results) |
| 9 | da.xypex.com | Xypex Tanzania projects **[N]** |
| 10 | sokoniadvertiser.com | (membrane advert) |

Nabaki's own domain: absent in all 23. But five of the top ten are Nabaki's content or Nabaki's principal, and its Streamline profile came 15th. **This is the one SERP where Nabaki genuinely holds ground.** Sahihi and Mlinzi: absent.

### 2.8 waterproofing products Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | tbs.go.tz | Draft Tanzania standard DTZS ISO 13007-5 (PDF) |
| 2 | da.xypex.com | Xypex Tanzania distributor site **[N]** |
| 3 | thecitizen.co.tz | How to waterproof your building **[N]** |
| 4 | mmr.sika.com | Sika customer magazine (Myanmar site) |
| 5 | sunandaglobal.com | Case study of Absa Bank Tanzania Limited |
| 6 | sunandaglobal.com | same, second URL |
| 7 | da.xypex.com | Xypex Tanzania projects **[N]** |
| 8 | jiji.co.tz | Waterproof sealants (Swahili category page) |
| 9 | jiji.co.tz | (single classified listing, waterproof sealant) |
| 10 | sokoniadvertiser.com | (membrane advert) |

Nabaki's own domain: absent in all 18. **[N]** also at 11 (Construction Review), 13 (Streamline) and 16 (Africa Business Pages). Sahihi and Mlinzi: absent. mapei.com's Egyptian waterproofing page came 17th.

### 2.9 tile adhesive Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | tbs.go.tz | Draft Tanzania standard DTZS ISO 14448 (PDF) |
| 2 | tradebarriers.org | TZS 1434-1:2011 Ceramic tiles - Grouts and adhesives |
| 3 | tradebarriers.org | same, second URL |
| 4 | tbs.go.tz | Draft Tanzania standard DTZS ISO 13007-5 (PDF) |
| 5 | jiji.co.tz | (tile category, waterproof) |
| 6 | jiji.co.tz | (tile category, gray) |
| 7 | agrinet.co.za | Stick a Tile Mosaic 2 in 1 (South Africa) |
| 8 | indianbusinessportal.in | Tile Adhesives |
| 9 | capitalfm.co.ke | Bamburi Cement ventures into the mortar market with tile adhesive (Kenya) |
| 10 | agrinet.co.za | Stick a Tile Superstick (South Africa) |

Nabaki: absent in all 23. No Tanzanian supplier's own page in the top ten. Sahihi and Mlinzi: absent.

### 2.10 epoxy flooring Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | kznindustrialnews.co.za | KZN company adds polish to new Tanzania airport terminal |
| 2 | kznindustrialnews.co.za | same, second URL |
| 3 | goafricaonline.com | (coatings directory, French URL) |
| 4 | goafricaonline.com | (coatings and surface finishes directory) |
| 5 | bestcareservices.co.ke | Epoxy floor installation and maintenance services in Nairobi and Kenya |
| 6 | jiji.co.tz | Hardener (Swahili category page) |
| 7 | epoxyfloorsolutionskenya.lovable.app | Luxury metallic epoxy floor (Kenya) |
| 8 | jiji.co.tz | Flooring materials |
| 9 | bestcareservices.co.ke | Epoxy flooring service in Nairobi, Kiambu and Kenya |
| 10 | constructionreviewonline.com | Future of epoxy flooring in Africa |

Nabaki: absent in all 27. No Tanzanian business page at all. Sahihi and Mlinzi: absent.

### 2.11 concrete repair Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | tbs.go.tz | Draft Tanzania standard on repair of water-leakage cracks (PDF) |
| 2 | allbusiness.africa | Contract award: repair of concrete damages at RoRo and Berths 1-7, Dar es Salaam port |
| 3 | assets.publishing.service.gov.uk | District Roads Improvement, Bagamoyo (report) |
| 4 | jiji.co.tz | Concrete (category) |
| 5 | journals.udsm.ac.tz | Strategies for promoting the use of concrete pavements in Tanzania |
| 6 | repository.udsm.ac.tz | same paper |
| 7 | repository.costech.or.tz | same paper |
| 8 | worldcement.com | Sika to establish concrete admixtures factory in Tanzania |
| 9 | gov.uk | (road improvement monitoring report) |
| 10 | cemnet.com | Sika opens new production facility in Tanzania |

Nabaki's own domain: absent in all 21. **[N]** the Construction Review waterproofing article came 12th. A Kenyan Jiji listing for Mapegrout T80 came 13th. Sahihi and Mlinzi: absent.

### 2.12 tile grout Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | tbs.go.tz | Draft Tanzania standard DTZS ISO 13007-4 (PDF) |
| 2 | jiji.co.tz | Grout (Swahili category page) |
| 3 | materialbank.com | (a US tile named "Zanzibar") |
| 4 | jiji.co.tz | (tile category, gray) |
| 5 | idealceramics.com | Tile Grout (Kenya) |
| 6 | eastafricatenders.com | Tiles and tiling companies in Tanzania |
| 7 | ctm.co.ke | (a tile, Kenya) |
| 8 | jiji.co.ke | Grout (Kenya) |
| 9 | elittile.com | (a US tile named "Tanzania", PDF) |
| 10 | agrinet.co.za | Tylon cement-based tile grout (South Africa) |

Nabaki: absent in all 30. Sahihi and Mlinzi: absent.

### 2.13 Mapei Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | en.wikipedia.org | Mpiji River (irrelevant) |
| 2 | stoneworld.com | Mapei extends international presence to East Africa |
| 3 | mapei.com (Italy, English) | Infrastructures: a real driver of growth for Africa |
| 4 | mynewsdesk.com | (Mapei Sweden newsroom search) |
| 5 | mapei.com (South Africa) | Contact us |
| 6 | en.wikipedia.org | Mape, Zumalai (irrelevant) |
| 7 | dlab.epfl.ch | (irrelevant) |
| 8 | archello.com | Mapei brand page |
| 9 | bccresearch.com | Mapei SpA company history |
| 10 | issuu.com | IMIESA magazine, February 2022 |

Nabaki: absent in all 20. Sahihi: absent. Mlinzi: absent in this index (report 01 found mlinzimapei.com at 1 to 2 on Yahoo and Brave, so engines differ). A follow-up search "Mapei distributor Tanzania Dar es Salaam Mlinzi OR Sahihi" returned only mapei.com South African pages.

### 2.14 Sika Tanzania

| # | Domain | Title |
|---|---|---|
| 1 | cemnet.com | Sika opens new production facility in Tanzania |
| 2 | european-coatings.com | Sika extends sites in Africa |
| 3 | european-coatings.com | Sika opens new production facility in Africa |
| 4 | zkg.de | Sika expands in Africa and extends sites in Tanzania and Ivory Coast |
| 5 | justgiving.com | About Shika (irrelevant) |
| 6 | worldcement.com | Sika to establish concrete admixtures factory in Tanzania |
| 7 | tza.sika.com | Company profile |
| 8 | sika.com | Media release, 2017 (PDF) |
| 9 | thecitizen.co.tz | Swiss company launches operation in Tanzania |
| 10 | zkg.de | Sika opens new production facility in Tanzania |

Nabaki: absent in all 20. Sahihi and Mlinzi: absent. Sika's brand SERP is deep with trade press; this is what a manufacturer's footprint looks like.

### 2.15 construction chemicals suppliers Dar es Salaam

| # | Domain | Title |
|---|---|---|
| 1 | tza.sika.com | Company profile |
| 2 | european-coatings.com | MC-Bauchemie establishes company in Tanzania |
| 3 | mc-bauchemie.com | MC-Bauchemie establishes company in Tanzania |
| 4 | european-coatings.com | same as 2, second URL |
| 5 | mbcc.sika.com | BASF commissions a production site... |
| 6 | builtin.com | BDM - Infrastructure (job advert) |
| 7 | polymerspaintcolourjournal.com | MC-Bauchemie establishes company in Tanzania |
| 8 | se.prod.mc01.lux-medien.com | MC-Bauchemie press release (mirror) |
| 9 | polymerspaintcolourjournal.com | same as 7, second URL |
| 10 | thecitizen.co.tz | Construction chemicals manufacturer to expand production... |

Nabaki: absent in all 17. Sahihi and Mlinzi: absent. GoAfrica's construction-materials directory came 13th and 14th.

### 2.16 Close variants and brand checks (top results in brief)

| Query | What came back | Nabaki | Sahihi / Mlinzi |
|---|---|---|---|
| top construction companies in Tanzania | cceonlinenews.com list (1, 2), tz.mofcom.gov.cn (3), constructionreviewonline.com "Top construction companies in Tanzania" (4), oxfordbusinessgroup.com (5), dnb.com (6, 7), mordorintelligence.com (8), ate.or.tz Advent profile (9), constructafrica.com (10) | absent | absent |
| list of construction companies in Dar es Salaam | dnb.com (1, 2, 3, 9, 10), udsm.ac.tz (4, 5), ate.or.tz Advent profile (6, 8), scotts-international.com (7) | absent | absent |
| building materials suppliers Dar es Salaam | five job-board company pages for one Dubai trader in the top seven, village.ai (Kamaka), vc4a.com (Elambo), jiji.co.tz, africa-business.com (Kara Traders), goafricaonline.com | absent, in its core category | absent |
| construction materials suppliers Tanzania | vc4a.com, chronicle.co.zw, a tender notice, goafricaonline.com (5, 6, 7), dnb.com (8, 9) | absent | absent |
| waterproofing materials suppliers Dar es Salaam | sokoniadvertiser.com (1), jiji.co.tz (2, 5, 6, 7), goafricaonline.com (3, 4, 11) | **[N]** Streamline profile at 12 | absent |
| construction chemicals distributors Tanzania waterproofing tile adhesive epoxy supplier | tza.sika.com (1), MC-Bauchemie coverage (2 to 7), basf.com (8) | **[N]** Africa Business Pages profile at 9 | absent |
| registered contractors Tanzania CRB class one contractors list directory | tanzlii.org (by-laws and Act), thecitizen.co.tz, mondaq.com, devex.com contractor profiles, cceonlinenews.com | absent | absent. No official CRB register page was returned |
| Nabaki Afrika | bouncewatch.com profile first, then unrelated pages | **own site not returned for its own name** | - |
| nabaki.co.tz | unrelated bank pages; bouncewatch.com at 11; africa-business.com at 13 | **own site not returned for its own domain** | - |
| "Nabaki Afrika" Mikocheni directory listing... | africa-business.com (two profiles), constructionreviewonline.com (Decra), marcopolis.net (three URLs), streamlinefeed.co.ke, mabumbe.com, bouncewatch.com | third-party only | - |
| "Nabaki" tile adhesive OR grout OR epoxy OR "construction chemicals" Tanzania | tbs.go.tz standards, South African and Kenyan retailers, jiji | no page tying Nabaki to tile adhesive, grout or epoxy | - |
| Nabaki Afrika Tanzania distributor brands Xypex Bitumat Decra Conmix products | constructionreviewonline.com (1, 2), linkedin.com, africa-business.com, da.xypex.com | third-party only | - |
| Sahihi Construction Chemicals Tanzania | Sika, MC-Bauchemie and BASF pages | **[N]** Africa Business Pages profile at 15 | **no Sahihi page exists in the index** |

### 2.17 What the rankings pass says

1. **Nabaki's website is not a search competitor in this index.** Zero appearances in 29 result sets. On a site with no keyword titles, almost no H1s, no descriptions, no posts and no product pages that is the expected result, but Google Tanzania may still show the home page for the brand name and a Business Profile for local searches (both not verified).
2. **Nabaki's search presence is borrowed.** The Citizen (2017, about 550 words, "This article was written by Nabaki Afrika who has over two decades of waterproofing experience"), Construction Review (updated 2022, about 900 words, links to nabaki.com) and Xypex's distributor stub hold the waterproofing results. Directory profiles pick up the scraps elsewhere.
3. **Sika, MC-Bauchemie and BASF own the "construction chemicals" head terms**, through one company-profile page and press coverage. None of those pages is a catalogue, a supplier list or a buying guide.
4. **Tile adhesive, tile grout, epoxy flooring and concrete repair have no Tanzanian supplier page at all in the top ten.** Standards PDFs, Jiji categories and foreign retailers fill the space. These are open, as reports 08 to 10 already said.
5. **Sahihi does not exist in search yet.** A search for its own name returns competitors.

## 3. Who else is in those results

| Domain | What it is | Weakness |
|---|---|---|
| tza.sika.com | Sika's Tanzanian subsidiary site. One page (the company profile) carries most "construction chemicals" queries | It ranks with an about-us page, not a buyer's page. No WhatsApp, no Swahili, BreadcrumbList schema only (report 02) |
| mc-bauchemie.com, european-coatings.com, polymerspaintcolourjournal.com | One February 2024 press release about MC-Bauchemie Tanzania, repeated on three domains and often twice each | A dated announcement. No products, no contact route for a Tanzanian buyer, no Tanzanian site |
| basf.com, mbcc.sika.com | 2018 BASF plant press release; the Master Builders site now sits inside Sika | Eight years old and about a business that has since changed hands |
| thecitizen.co.tz | National newspaper. Holds the Sika expansion story and the 2017 Nabaki waterproofing op-ed | News and advertorial, short, not updated. It can be matched by a better guide and joined with a fresh authored piece |
| constructionreviewonline.com | Kenyan trade publication. "How to waterproof a building in Tanzania", "Top construction companies in Tanzania", epoxy articles | Thin (about 900 words), six companies in the "top" list, last updated 2022 to 2023. Accepts company content |
| dnb.com | Dun and Bradstreet directory pages. Dominates every "construction companies" query | Auto-generated lists with revenue estimates. No guidance. Blocks crawlers |
| goafricaonline.com | Pan-African directory. Appears on waterproofing, coatings, construction materials and construction companies | Waterproofing and coatings categories show 0 results; listings have no descriptions. Open to new listings |
| jiji.co.tz | Classifieds. Category pages in English and Swahili on every product query | No specification, no authorised sellers. It wins price intent, which Sahihi does not contest |
| tbs.go.tz, tradebarriers.org | Tanzania Bureau of Standards drafts and standard listings. First on tile adhesive, grout and concrete repair | PDFs with no commercial intent. Cite them; do not fight them |
| da.xypex.com | Xypex's one-page Tanzania distributor stub | One thin page with a name and a landline |
| cceonlinenews.com | Trade news site with a 2020 list of eight contractors, about 750 words | Old, short, no links out |
| sunandaglobal.com, sokoniadvertiser.com | An Indian maker's single case study; an importer's adverts | One page each. No depth |

## 4. Search intent for "construction companies in Tanzania"

### 4.1 What ranks

Every result is about **contractors**: firms that build. Not one is a materials or chemicals supplier's own page.

- **Directories (the majority).** Dun and Bradstreet holds five of the top ten with category pages by city and by trade (dnb.com, 403 to our fetch). GoAfrica's "Construction companies and building contractors in Tanzania" lists 36 firms (https://www.goafricaonline.com/tz/directory/construction-companies).
- **List articles.** Construction Review's "Top construction companies in Tanzania" (updated 2023-01-23, about 900 words, six contractors: Advent, Estim, Becco, Salem, Nordic, Mohammedi Builders; 25 reader comments) and CCE Online News's "Leading construction and civil engineering companies in Tanzania" (2020-06-29, about 750 words, eight contractors). Sources: https://constructionreviewonline.com/top-construction-companies-in-tanzania/ ; https://cceonlinenews.com/construction/profession/leading-construction-and-civil-engineering-companies-in-tanzania-2/
- **Individual contractor profiles** on association and aid-sector sites (ate.or.tz, devex.com).
- **Context pieces**: a CNBC Africa video, a university repository item, Oxford Business Group, market-report sellers.
- The official Contractors Registration Board site (https://www.crb.go.tz/, live) did not appear for this query or for the CRB-specific variant.

### 4.2 Can a construction-chemicals supplier rank here?

- **The home page or any product page: no.** The intent is "who can build for me" or "who are the big builders". A supplier's commercial page does not answer it, and a page that pretends Sahihi is a construction company would mislead buyers and break the project's own no-invented-facts rule.
- **A supplier can appear inside the results.** GoAfrica's construction-companies page already lists "Yapfix White Cement" (wall putty, tile adhesive, grout) second and "NABAKI AFRIKA CONSTRUCTION" on its first page. That is how Nabaki "ranks" for this query: as a line in someone else's directory. Sahihi can have the same line within days, in the correct category.
- **A resource page: plausibly, slowly.** The two list articles that rank are short, old and unsourced. A page that is clearly better for the searcher could earn a place on page one or two. It would compete with dnb.com's five slots and two trade publications, on a brand-new domain. Honest odds: uncertain, and not before 9 to 18 months. It is still worth building because the same page serves Sahihi's actual customers (contractors) and earns links.

### 4.3 The page that could legitimately earn a place

One Journal page, written as a guide, with Sahihi's role stated in the first screen ("Sahihi supplies construction chemicals to contractors. We do not build.").

Content that would make it the best answer on the query:
- How contractor registration works in Tanzania: the Contractors Registration Board, classes, types (building, civil, specialist, electrical, mechanical), and what a class permits. **Every statement must be taken from crb.go.tz or the Contractors Registration Act and cited**; the snippets seen in search (for example that foreign contractors are limited to classes I and II) came from secondary sources and are not verified.
- How to check that a contractor is registered, step by step, with a link to the Board.
- What to ask a contractor before signing, including the materials questions Sahihi is qualified to write: which waterproofing system, which adhesive class, who applies it, what data sheet.
- Where to find contractors: CRB, the directories above, professional bodies (ERB, AQRB, ACET).
- No "top 10" ranking by opinion. If names are listed, the criterion must be checkable (for example a public CRB class) and dated. A list of project partners belongs on `/projects`, and only with their consent (open question Q5).

Supporting it: a `/for-contractors` page that is openly commercial (data sheets, coverage calculators, method statements, site support, how to open an account). That page targets Sahihi's buyers, not this query.

Both pages need a row in `SEO-STRATEGY.md` section 5 before they are built.

## 5. Plan to beat Nabaki

### 5.1 The position in one paragraph

Nabaki's advantages are all offline: 30 years, eight branches, 200+ trained installers, a customer base, a chairman who is personally Xypex's Tanzanian contact. Its website converts none of that into search presence. Sahihi's build already has what Nabaki's lacks (product pages, data sheets, calculators, real titles). So the contest splits in two. On the open web, Sahihi passes Nabaki the week it is indexed, and then faces Sika. On maps and by reputation, Nabaki stays ahead until Sahihi earns reviews, citations and mentions of its own.

### 5.2 Pages Sahihi must have

Titles are 60 characters or fewer. Routes follow `SEO-STRATEGY.md` section 4. "New row" means the page is not in the query registry yet and needs one before it is built.

| # | Page and proposed URL | Primary query | Proposed title | Must contain | Nabaki has it? |
|---|---|---|---|---|---|
| 1 | Home `/` (built) | construction chemicals Tanzania (registry 5.1). Add as variants: construction chemicals in Tanzania, construction chemical companies in Tanzania, construction chemicals suppliers Dar es Salaam | Construction Chemicals in Tanzania - Mapei, OYH, X-Calibur | One H1 with the query. A plain statement of what is stocked in Dar es Salaam, by line. The three principals with proof of appointment. Links to every pillar. Organization and LocalBusiness JSON-LD with the NAP block. WhatsApp and tap-to-call | Has a home page with no H1, no query words in the title, no schema |
| 2 | About `/about` (built) | Sahihi Construction Chemicals | About Sahihi Construction Chemicals - Dar es Salaam Supplier | Licence facts, address, people, appointment letters. This is the page that answers "is this company real" against a 30-year rival, so evidence matters more than adjectives | Yes, 894 words, its best page. No schema |
| 3 | Waterproofing pillar `/solutions/waterproofing` (Phase 2) | waterproofing Tanzania | Waterproofing in Tanzania - Roof, Bathroom, Tank, Basement | Systems by problem (flat roof, wet room, tank, basement, pool), the products for each across all three brands, data sheet links, a FAQ block, climate notes (masika, vuli, coastal humidity). **Build this first of the pillars: it is the only SERP where Nabaki's content actually ranks** | No category page. Ranks through a 2017 op-ed |
| 4 | Guide `/blog/how-to-waterproof-a-building-in-tanzania` (new row; fits Journal) | how to waterproof a building in Tanzania | How to Waterproof a Building in Tanzania: Roof to Basement | A real guide of 1,500+ words that beats the 550-word Citizen piece and the 900-word Construction Review piece on the same title: design stage, flat roofs, wet areas, below ground, tanks, repairs, common failures, what each costs in effort (no prices), HowTo steps, photos when they exist | The Citizen and Construction Review pieces are Nabaki's |
| 5 | Tile pillar `/solutions/tile-installation` (Phase 2) | tile adhesive Tanzania | Tile Adhesive and Grout in Tanzania - C1, C2 and Epoxy | Class table citing TZS 1434-1 and ISO 13007, which adhesive for which tile and substrate, grout types, links to the Mapei items and calculators | No. Nabaki's site never mentions tile adhesive |
| 6 | Flooring pillar `/solutions/epoxy-flooring` (Phase 2) | epoxy flooring Tanzania | Epoxy Flooring in Tanzania - Systems for Factory Floors | Systems by use, substrate preparation, humidity limits, applicator referral | No |
| 7 | Repair pillar `/solutions/concrete-repair` (Phase 2) | concrete repair Tanzania | Concrete Repair in Tanzania - Mortars, Grouts, Injection | Repair classes, grouts, crack injection, anchoring, the draft TBS crack-repair standard as a reference | No |
| 8 | Brand hubs `/x-calibur`, `/oriental-yuhong` (Phase 3) | X-Calibur Tanzania; Oriental Yuhong Tanzania | X-Calibur Tanzania - Authorized Distributor, Dar es Salaam / Oriental Yuhong Tanzania - Waterproofing Membranes, OYH | Appointment evidence, product list, data sheets | No brand page of any kind. Four logos without alt text |
| 9 | Training `/training` (Phase 4, bring forward) | applicator training Dar es Salaam (inferred, not checked) | Applicator Training, Dar es Salaam - Tiling, Waterproofing | Dated sessions, syllabus, who teaches, how to register, certificates, photos of real sessions. Only once sessions are actually scheduled | Yes offline (Mtaalam, since 2010). Online: 263 words, no dates, no sign-up |
| 10 | Reseller and applicator page `/become-a-reseller` (Phase 4) | construction chemicals reseller Tanzania (inferred) | Resellers and Applicators Wanted - Construction Chemicals | Terms, regions wanted, what support is given, a form | Describes a network; offers no way to join |
| 11 | Coverage `/where-we-supply` (Phase 4) | construction chemicals Arusha / Mwanza / Dodoma / Zanzibar (inferred) | Construction Chemicals Delivered Across Tanzania | Only true statements: where stock is held, how delivery works, lead times, any appointed reseller per city. No fake branch pages (report 13 section 3.3 on doorway pages) | One list page of eight branches, 197 words, no schema |
| 12 | Contractor guide `/blog/construction-companies-in-tanzania` (new row) | construction companies in Tanzania | Construction Companies in Tanzania: CRB Classes Explained | Section 4.3 above | No |
| 13 | Contractors page `/for-contractors` (new row) | construction chemicals for contractors Tanzania (inferred) | For Contractors in Tanzania - Data Sheets and Site Support | Section 4.3 above | No |
| 14 | Market guide `/blog/construction-chemical-companies-in-tanzania` (new row; owner decision) | construction chemical companies in Tanzania | Construction Chemical Companies in Tanzania: Who Does What | A sourced, neutral map of manufacturers and distributors in the country and what each covers, Sahihi included. The current SERP has no page that answers this query. It names competitors, so the owner must approve it, and every line needs a source | No |
| 15 | Projects `/projects` (built, launch-gated on Q5) | Mapei projects Tanzania | (existing) | Real references with consent. Nabaki has none online | No. Demo "portfolio" about law cases |
| 16 | Contact `/contact` (built) | - | (existing) | Tap-to-call, WhatsApp, map link, hours, LocalBusiness JSON-LD | No tap-to-call, no WhatsApp, no map |

Pages Nabaki has that Sahihi should **not** copy: four near-empty "pillar" pages, an empty news page, an empty gallery.

### 5.3 On-page gaps to exploit

Each is something Nabaki's site fails at today (section 1) and Sahihi's build either already does or can do cheaply.

1. A keyword and a place in every title; a written description on every page. Nabaki has neither on any page.
2. Exactly one H1 per page. Nabaki has an H1 on one real page out of 12.
3. Organization, LocalBusiness, Product, BreadcrumbList and FAQPage JSON-LD. Nabaki has none.
4. A product page, a data sheet and a calculator per item. Nabaki has no product pages.
5. Tap-to-call and prefilled WhatsApp on every page. Nabaki has neither.
6. Alt text on every image (already audited by `npm run check`). Nabaki has none on its home page.
7. Compressed, cached, light pages. Nabaki serves 5 MB uncompressed.
8. A clean sitemap listed in robots.txt. Nabaki's robots.txt lists five dead ones and about 84% of its live sitemap is theme demo content.
9. Fresh, dated content. Nabaki has zero posts.
10. Swahili question-and-answer blocks on the pillars (strategy section 3 point 7). Nabaki has no Swahili.

Do not mention Nabaki's hacked link or any other fault of a competitor on the site or in marketing. Win on substance.

### 5.4 Local SEO

- **Google Business Profile is the highest-value single action after going live.** Nabaki's profile, reviews and photos were not verified, but a 30-year business with eight branches almost certainly has them, and for searches made in Mikocheni or with "near me" the map pack decides the result. Create the profile at the Coca-Cola Road address with the exact legal name (categories as in `SEO-STRATEGY.md` section 8 point 3), add products, photos of the real premises and stock, hours, WhatsApp. Then ask every satisfied customer and applicator for a review, steadily, never in bulk.
- **One NAP block everywhere** (report 13 section 5.1), character for character. Nabaki's own footprint shows what to avoid: two spellings of its name, two founding years, two addresses, three phone numbers across its site and directories (section 1.1).
- **Sahihi has one location.** Do not invent branches. Nabaki's eight are a real advantage for city searches in Arusha, Mwanza, Dodoma and Zanzibar; the honest answers are `/where-we-supply`, appointed resellers in those cities, and their own Business Profiles.
- **Citations Nabaki has that Sahihi should match.** Verified today:

| Where Nabaki is listed | URL | Action for Sahihi |
|---|---|---|
| GoAfrica Online, "Construction companies and building contractors" | https://www.goafricaonline.com/tz/directory/construction-companies | List under Construction materials and Building waterproofing (the waterproofing category shows 0 results, so a listing there is alone on a page that already ranks). Do not list as a contractor |
| Africa Business Pages (two profiles) | https://africa-business.com/business/dcc10469c6/Nabaki-Afrika | Register a profile with the full product-line list. A Nabaki profile on this directory surfaced in seven of the 29 searches |
| Streamline (Kenya) | https://streamlinefeed.co.ke/directory/nabaki-afrika | Low value, template text. Optional |
| Construction Review Online (two articles; links to nabaki.com) | https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/ | Pitch one authored technical article and enquire about the company directory (report 13 section 5.2) |
| The Citizen (authored op-ed, 2017) | https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242 | Offer an expert piece for the Home and Property section before the next rainy season. If paid, it must be labelled |
| MarcoPolis (2016 interview with the chairman) | https://marcopolis.net/?p=5531 | Not replicable on request. Note only |
| Xypex distributor page | https://da.xypex.com/Tanzania | The equivalent for Sahihi is a listing on Mapei's, X-Calibur's and Oriental Yuhong's sites (strategy section 8 points 2 and 4) |
| BounceWatch, Mabumbe | https://bouncewatch.com/explore/startup/nabaki-afrika ; https://mabumbe.com/companies/nabaki-afrika-limited/ | Auto-generated or not fetched. Ignore |
| LinkedIn, Facebook, Instagram, X | linked from https://nabaki.co.tz/ | Create LinkedIn and Facebook pages with the NAP block; add them as `sameAs` |

- **Add from report 13:** Yellow Tanzania, OpenStreetMap, Bing Places. Not verified for Nabaki: Yellow Tanzania (its search is script-driven), ZoomTanzania, Kompass, Dun and Bradstreet.

### 5.5 Link sources realistically obtainable in Tanzania

In rough order of value. None is guaranteed.

1. **Principals.** Mapei East Africa, X-Calibur and Oriental Yuhong naming Sahihi as Tanzanian distributor on their own sites. This is the one kind of link Nabaki has for waterproofing (Xypex) and the one that turns "authorized distributor" from a claim into a fact a search engine can read.
2. **Trade and national press.** Construction Review, CCE Online News, The Citizen, Daily News. Nabaki's entire search presence rests on two of these. Angles: the distributor appointments, a rainy-season waterproofing guide, a first training intake.
3. **Regulators and professional bodies.** An ERB-accredited CPD course (strategy section 8 point 6); guest sessions with CRB, AQRB, ACET. Nabaki cites KPMG and the Green Building Council; Sahihi needs its own third-party proof.
4. **Tanzania Green Building Council.** Nabaki says it is a founding member (https://nabaki.co.tz/nabaki-esg/). The council's site could not be reached, so membership terms are not verified. Worth one enquiry.
5. **Exhibitor lists.** Buildexpo Tanzania and Sabasaba (report 13 section 6.3).
6. **Resellers, applicators and project partners** with their own sites linking to the product pages they use.
7. **Universities and technical colleges**: guest lectures, donated materials for a lab, a prize (report 13 section 6.4).
8. **Directories** in 5.4. Low value each, but they are where Nabaki currently surfaces.

Never buy links, never use hidden text, never trade listings for discounts. Nabaki's home page is a live example of what a compromised link profile looks like.

### 5.6 Content topics, drawn from what ranks today

| Topic | Why | Where |
|---|---|---|
| How to waterproof a building in Tanzania | Exact title of the two pieces that hold the waterproofing SERP | Journal (row 4 above) |
| Why "hidden roof" houses leak | Already Journal post 1 | Journal |
| Crystalline or membrane or cementitious: which waterproofing for a water tank | Nabaki's line is crystalline (Xypex). A fair comparison lets Sahihi's range be found by people researching the alternative. Clear the wording with the principals | Journal |
| Tile adhesive classes under TZS 1434-1 and ISO 13007 | Standards PDFs rank first for tile adhesive and grout; nobody explains them | Tile pillar and Journal post 2 |
| Epoxy flooring in Dar es Salaam humidity | No Tanzanian page ranks for epoxy flooring | Journal post 8 |
| Repairing leaking cracks in concrete (the draft TBS guidance explained) | A standards PDF is first for concrete repair | Repair pillar |
| Construction companies in Tanzania: classes and how to check a contractor | Section 4 | Journal (row 12) |
| Construction chemical companies in Tanzania: who does what | No page answers this query | Journal (row 14), owner decision |
| Training calendar and session write-ups | Nabaki trains 100+ people a session and publishes nothing | `/training` and Journal |
| Project write-ups with the system used | Nabaki publishes none | `/projects/<slug>` after Q5 |

### 5.7 Actions ranked by expected impact

| # | Action | Impact | Difficulty | Plausible time to effect |
|---|---|---|---|---|
| 1 | Replace the parking page; deploy the built site; Search Console domain property; submit the sitemap | Everything else depends on it | Low | Indexing in days to a few weeks |
| 2 | Google Business Profile, verified, complete, with a steady review habit | High for local and brand searches; the only answer to Nabaki's physical footprint | Low to start, slow to mature | Profile live in 1 to 3 weeks; meaningful review count in 3 to 6 months |
| 3 | Named listings and links on Mapei, X-Calibur and Oriental Yuhong sites | High. The strongest signal available to a new domain | Depends on the principals | 1 to 3 months of asking |
| 4 | Home page tuned to the "construction chemicals" cluster with Organization and LocalBusiness schema | High for the owner's first named query | Low | With indexing; positions move over 2 to 6 months |
| 5 | Waterproofing pillar and the "how to waterproof a building in Tanzania" guide | High. Displaces the content Nabaki actually ranks with | Medium (writing from data sheets) | 2 to 4 months after publishing |
| 6 | Tile, epoxy and repair pillars | High. Open SERPs, no Tanzanian page ranks | Medium | 1 to 3 months after publishing |
| 7 | Citations: GoAfrica (materials and waterproofing), Africa Business Pages, Yellow Tanzania, LinkedIn, Facebook, OpenStreetMap, one NAP | Medium. Matches where Nabaki surfaces today | Low | 2 to 6 weeks |
| 8 | One authored piece in The Citizen or Construction Review before the long rains | Medium to high. Nabaki's 2017 piece still ranks first after nine years | Medium, may cost money | 1 to 3 months |
| 9 | `/training` with real dated sessions, and `/become-a-reseller` | Medium online, high commercially. The public answer to Mtaalam | High (needs real sessions) | 3 to 6 months |
| 10 | X-Calibur and Oriental Yuhong hubs | Medium. Uncontested brand queries | Low once stock lists exist | Weeks after publishing |
| 11 | Contractor guide and `/for-contractors` | Medium, uncertain for the head query | Medium (must be sourced from CRB) | 9 to 18 months for the head query, if at all |
| 12 | `/where-we-supply` and appointed resellers in Arusha, Mwanza, Dodoma, Zanzibar | Medium. Nabaki's branch cities | High (needs real partners) | 6 to 12 months |
| 13 | Ahrefs connection and a Tanzania-located ranking pass; monthly check of Nabaki's sitemap and post count | Enables measurement; warns if Nabaki rebuilds | Low | Immediate |

### 5.8 What is hard, and what would have to be true

- **Domain age and history.** nabaki.com has been on the web since at least 2004 and redirects to nabaki.co.tz. sahihicc.com is a parked domain with no history. New domains usually take some months to earn stable positions regardless of quality (general experience, not a measured fact). No date can be promised.
- **Brand strength.** People search "Nabaki" by name; nobody searches "Sahihi Construction Chemicals" yet. Brand demand is earned offline: vans, invoices, site boards, training, word of mouth.
- **Backlinks.** Nabaki has old editorial mentions (The Citizen, Construction Review, MarcoPolis) and a manufacturer listing. Sahihi has none found. Counts on both sides are not verified without a link index.
- **Sika is the real ceiling.** For "construction chemicals Tanzania", Sika Tanzania's own domain and its press are ahead of every distributor. Passing a local manufacturer's site for the generic head term is harder than passing Nabaki.
- **Nabaki can fix its site.** Twelve pages, a clean-up and a catalogue would close most of the on-page gap in a quarter. The lead Sahihi builds in content, reviews and principal links is what would remain. Check https://nabaki.co.tz/wp-sitemap.xml and https://nabaki.co.tz/wp-json/wp/v2/posts monthly.
- **"Never beaten on any search" is not achievable.** Nabaki will keep its own name, Xypex, Decra, roofing, plumbing, pools and most map results near its branches.

For Sahihi to be reliably ahead of Nabaki on construction-chemical searches, these would have to be true: the site is live and indexed; the pillars and guide in 5.2 are published; the Business Profile is verified with real reviews; at least one principal names Sahihi on its site; the NAP is consistent; and Nabaki has not rebuilt. On the evidence above that is plausible within about 3 to 6 months of going live for most product and solution queries. For a top-three place on "construction chemicals in Tanzania" the same things would have to be true plus enough independent mentions (press, regulators, principals) to stand beside Sika; 6 to 12 months is plausible and not certain. For "construction companies in Tanzania" see section 4: a guide page might reach page one in 9 to 18 months; the commercial pages will not.

### 5.9 Could not verify

- Any position on Google Tanzania, desktop or mobile, and any search volume.
- Nabaki's Google Business Profile, reviews, map rankings and social follower counts.
- Whether and how Google has indexed nabaki.co.tz; any backlink or authority figure for either domain.
- Whether Nabaki currently distributes Conmix or Penetron; which adhesive, grout and admixture brands it stocks.
- Whether the old nabaki.com carried a product catalogue (Wayback went offline mid-check).
- Nabaki's listings on Yellow Tanzania, ZoomTanzania, Kompass, Dun and Bradstreet, LinkedIn and Facebook (blocked or script-driven).
- Tanzania Green Building Council membership terms (site unreachable).
- CRB class rules quoted in search snippets; they must be read on crb.go.tz before publishing.
- Whether Sahihi has, or plans, any location other than Coca-Cola Road.

## Sources

Nabaki's site, fetched 2026-11-06:
- https://nabaki.co.tz/
- https://nabaki.co.tz/robots.txt
- https://nabaki.co.tz/wp-sitemap.xml
- https://nabaki.co.tz/wp-sitemap-posts-page-1.xml
- https://nabaki.co.tz/wp-sitemap-posts-personnel-1.xml
- https://nabaki.co.tz/wp-sitemap-posts-portfolio-1.xml
- https://nabaki.co.tz/wp-sitemap-taxonomies-personnel_category-1.xml
- https://nabaki.co.tz/wp-sitemap-taxonomies-portfolio_category-1.xml
- https://nabaki.co.tz/wp-sitemap-taxonomies-portfolio_tag-1.xml
- https://nabaki.co.tz/wp-sitemap-users-1.xml
- https://nabaki.co.tz/sitemap915.xml (404; also sitemap370, sitemap852, sitemap699, sitemap191)
- https://nabaki.co.tz/about-us/
- https://nabaki.co.tz/our-pillars/
- https://nabaki.co.tz/nabaki-home/
- https://nabaki.co.tz/nabaki-construction/
- https://nabaki.co.tz/nabaki-extractives/
- https://nabaki.co.tz/nabaki-esg/
- https://nabaki.co.tz/mtaalams/
- https://nabaki.co.tz/branches/
- https://nabaki.co.tz/contact/
- https://nabaki.co.tz/recent-updates/
- https://nabaki.co.tz/gallery/
- https://nabaki.co.tz/shop/
- https://nabaki.co.tz/personnel/hamish-hamilton/
- https://nabaki.co.tz/personnel/russel-stewart/
- https://nabaki.co.tz/portfolio/family-violence/
- https://nabaki.co.tz/author/masteryoda/
- https://nabaki.co.tz/lending-law/
- https://nabaki.co.tz/homepage-2/
- https://nabaki.co.tz/about-us-2/
- https://nabaki.co.tz/feed/
- https://nabaki.co.tz/?s=waterproofing
- https://nabaki.co.tz/wp-json/wp/v2/posts
- https://nabaki.co.tz/wp-json/wp/v2/pages?per_page=100
- https://nabaki.co.tz/products (404)
- https://nabaki.co.tz/wp-content/uploads/2024/07/h.png
- https://nabaki.co.tz/wp-content/plugins/goodlayers-core/plugins/script.js
- https://nabaki.com/ (redirects to https://nabaki.co.tz/)
- https://web.archive.org/cdx/search/cdx?url=nabaki.co.tz and https://web.archive.org/cdx/search/cdx?url=nabaki.com (first and last captures)

Third-party pages fetched 2026-11-06:
- https://www.thecitizen.co.tz/tanzania/oped/home-property-how-to-waterproof-your-building-2586242
- https://constructionreviewonline.com/knowhow/waterproof-building-tanzania/
- https://constructionreviewonline.com/nabaki-afrika-supply-genuine-decra-for-housing-project/
- https://constructionreviewonline.com/top-construction-companies-in-tanzania/
- https://cceonlinenews.com/construction/profession/leading-construction-and-civil-engineering-companies-in-tanzania-2/
- https://www.goafricaonline.com/tz/directory/construction-companies
- https://www.goafricaonline.com/tz/directory/construction-materials
- https://africa-business.com/business/dcc10469c6/Nabaki-Afrika
- https://streamlinefeed.co.ke/directory/nabaki-afrika
- https://bouncewatch.com/explore/startup/nabaki-afrika
- https://marcopolis.net/?p=5531
- https://da.xypex.com/Tanzania
- https://www.crb.go.tz/ (home page only)
- https://sahihicc.com/ (still the Namecheap parking page)

Could not be fetched: https://www.dnb.com/business-directory/company-information.construction.tz.html (403), https://mabumbe.com/companies/nabaki-afrika-limited/ (403), https://www.linkedin.com/company/nabakiafrikaltd (403), https://www.facebook.com/NabakiAfrikaLtd/ (400), https://www.zoomtanzania.net/ (403).

Seen in search results only, not fetched (cited where used):
- https://thecitizen.co.tz/tanzania/business/construction-chemicals-manufacturer-to-expand-production-as-demand-grows-5384772
- https://tza.sika.com/en/about-us/company-profile.html
- https://mbcc.sika.com/en-ke/about-us/news/basf-commissions-a-production-site-for-construction-chemicals-in-dar-es-salaam-tanzania
- https://www.basf.com/southernafrica/en/media/news-releases-south-africa/2018/BASF-opens-a-new-production-site-in-Tanzania
- https://www.mc-bauchemie.com/news/press-release/mc-bauchemie-establishes-company-in-tanzania.html
- https://www.european-coatings.com/news/markets-companies/mc-bauchemie-establishes-company-in-tanzania/
- https://www.polymerspaintcolourjournal.com/mc-bauchemie-establishes-company-in-tanzania/
- https://constructionreviewonline.com/doors-east-africa-concrete-solutions/
- https://constructionreviewonline.com/installations-materials/waterproof-building-tanzania
- https://sunandaglobal.com/pu-waterproofing-coating-absa-bank-tanzania/
- https://www.goafricaonline.com/tz/directory/building-waterproofing
- https://www.goafricaonline.com/tz/directory/coatings-surface-finishes
- https://sokoniadvertiser.com/6mb8
- https://www.kznindustrialnews.co.za/2019/07/31/kzn-company-adds-polish-to-new-tanzania-airport-terminal/
- https://www.tradebarriers.org/ntm/documents/view/860
- https://www.stoneworld.com/articles/90517-mapei-extends-international-presence-to-east-africa
- https://hrms.ate.or.tz/members/advent-construction-3700
- https://jiji.co.tz/sw/building-materials/grout

Searches run (29, standard mode, US index, 2026-11-06): construction chemicals in Tanzania; construction chemicals Tanzania; construction chemicals Dar es Salaam; construction companies in Tanzania; construction chemical companies in Tanzania; building materials Tanzania; waterproofing Tanzania; waterproofing products Tanzania; tile adhesive Tanzania; epoxy flooring Tanzania; concrete repair Tanzania; tile grout Tanzania; Mapei Tanzania; Sika Tanzania; construction chemicals suppliers Dar es Salaam; Nabaki Afrika; nabaki.co.tz; Nabaki Afrika Tanzania distributor brands Xypex Bitumat Decra Conmix products; top construction companies in Tanzania; list of construction companies in Dar es Salaam; building materials suppliers Dar es Salaam; Sahihi Construction Chemicals Tanzania; construction chemicals distributors Tanzania waterproofing tile adhesive epoxy supplier; "Nabaki Afrika" Mikocheni directory listing building materials Dar es Salaam; "Nabaki" tile adhesive OR grout OR epoxy OR "construction chemicals" Tanzania; construction materials suppliers Tanzania; waterproofing materials suppliers Dar es Salaam; registered contractors Tanzania CRB class one contractors list directory; Mapei distributor Tanzania Dar es Salaam Mlinzi OR Sahihi.
