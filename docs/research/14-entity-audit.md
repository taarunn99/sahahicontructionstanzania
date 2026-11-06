# 14 - Entity audit: what already exists online, and territory overlap with group sites

Research date: 2026-11-05. Subject: Sahihi Construction Chemicals Limited (sahihicc.com), Dar es Salaam, Tanzania.

## Method and limits

Method: direct HTTP fetches (curl and WebFetch) of home pages, robots.txt and sitemap.xml; DNS and WHOIS lookups; web searches; and a read of the owner-supplied files in `assets/source/owner-supplied/` (business card, business licence, intro letter, project sheet, two price lists). Every claim below carries its source URL or file name. Statements marked "prior knowledge" come from the researcher's general knowledge and were NOT confirmed in this session. Statements marked "inference" are reasoning, not fact.

Limits, stated plainly:

- **Web search budget ran out early.** The session-wide search quota (shared by all 14 agents) was exhausted after 9 successful searches. The successful ones covered the Sahihi name, the sahihicc domain, Mlinzi and the director name. Searches that could NOT be run: every project-reference entity, the applicator names, social profiles, "Mapei distributor Tanzania", and Oriental Yuhong / X-Calibur Tanzania distributor lists. Those items were checked only by fetching guessed official URLs, and many remain "not verified".
- **mapei.com blocks non-browser fetches** (HTTP 403 on every URL tried, e.g. https://www.mapei.com/za/en/contact-us/branch-offices-and-plants and https://www.mapei.com/ae/en/contact-us). Browser automation was out of scope. Mapei's own distributor data is therefore not verified.
- **LinkedIn, Instagram and Facebook cannot be probed without a login** (LinkedIn returned 403; Instagram returns a generic 200 shell for any handle). Absence of a social profile is therefore "not found", not "does not exist".
- The search tool is US-based; Tanzanian local results and Google Maps / Business Profile data were not observable.
- No BRELA ORS company-registry lookup was possible (login-gated). The licence facts come from the owner's PDF only.

---

## 1. sahihicc.com - current state

| Item | Finding | Source |
|---|---|---|
| Live? | Yes, HTTP 200 on apex and www, HTTP redirects to HTTPS | `curl https://sahihicc.com/` |
| What it serves | The default **"Namecheap Parking Page"** (title tag exactly that; H1 "Your website is ready to go!"; links to cPanel and WebMail). 5,049 bytes. No company content at all. | https://sahihicc.com/ |
| robots.txt | 404 (LiteSpeed default error page) | https://sahihicc.com/robots.txt |
| sitemap.xml | 404 | https://sahihicc.com/sitemap.xml |
| Platform / host | Namecheap shared hosting (cPanel, LiteSpeed), IP 198.54.115.32, nameservers dns1/dns2.namecheaphosting.com | DNS lookup; response header `server: LiteSpeed` |
| Email | MX points at Namecheap hosting mail (mx1/2/3-hosting.jellyfish.systems); SPF record present (`include:spf.web-hosting.com`). info@sahihicc.com is therefore plausibly live on the cPanel account. No DMARC record was checked. | DNS lookup |
| Registration | Created 2026-07-15, expires 2027-07-15, registrar NameCheap, WHOIS privacy on | WHOIS |
| Indexed pages | `site:sahihicc.com` returned zero pages from the domain. The exact-phrase query "sahihicc" also returned nothing relevant. | Web search, 2026-11-05 |
| Variants | sahihicc.co.tz, sahihi.co.tz, sahihicc.net, sahihicc.africa, sahehicc.com, sahihiconstructionchemicals.com, sahihigroup.com, sahihi.com: none resolve (no DNS). | DNS lookup |

Facts that matter for the build:

- The domain has **no history, no indexed URLs and no backlinks to preserve**. No redirect map is needed for sahihicc.com itself.
- The parking page has an empty meta description and the title "Namecheap Parking Page". If Google has crawled it, that title may show briefly for brand searches after launch (inference).
- The domain is 1-year registered and expires 2027-07-15. Renewal and auto-renew should be confirmed. Moving the site to Vercel (as with gcbuae.com) must not break the Namecheap MX and SPF records that carry info@sahihicc.com.
- The domain (15 Jul 2026) predates the business licence (29 Aug 2026, source: `business-licence-20000209142.pdf`). The entity is about ten weeks old as a licensed business.

---

## 2. Sahihi's existing footprint

### 2.1 What was found: nothing public

| Query (exact) | Result |
|---|---|
| "Sahihi Construction Chemicals" | No result names the company |
| "Sahihi Construction Chemicals Limited" Tanzania (extended mode) | No result names the company |
| "Sahihi Construction Chemicals" OR "Sahehi Construction Chemicals" Dar es Salaam | No result names the company |
| "sahihicc" | No relevant result |
| site:sahihicc.com | No pages |
| "Anil Sankaran" Tanzania Mapei OR "construction chemicals" OR Mlinzi OR Sahihi | No matching person found |

No directory listing, news item, brand-site mention, LinkedIn page, Instagram or Facebook profile, or Maps trace was found for Sahihi Construction Chemicals Limited. Social profiles and Google Business Profile are **not verified either way** (see limits). Working assumption: the public footprint is zero and everything must be created from scratch.

### 2.2 Search-engine handling of the name

- Both "sahihicc" and `site:sahihicc.com` were answered with results about **"Sahih" (Islamic hadith collections: Sahih al-Bukhari, Sahih Muslim)**. The search engine treats the token as a misspelling of a very high-volume term. Source: web search results, 2026-11-05 (e.g. https://en.wikipedia.org/wiki/Sahih_Hadith was returned for "sahihicc").
- "Sahihi" is the Swahili word for "correct / accurate" (prior knowledge, not verified in session), so the bare word is generic in East Africa.
- Consequence: the brand will not own the bare query "sahihi". The entity must be anchored on the full string "Sahihi Construction Chemicals" plus "Tanzania" / "Dar es Salaam" in titles, schema `name` / `legalName` / `alternateName`, and every external profile.

### 2.3 Other "Sahihi" businesses that can confuse the entity

| Name | What it is | Where | Source |
|---|---|---|---|
| Sahihi Interior Designers Limited ("Sahihi Group", also "Sahihi Buildings Maintenance") | Interior fit-out contractor, "registered in 2010", works "across Eastern Africa". Has LinkedIn (linkedin.com/company/sahihi), Instagram (sahihi_interiors) and Facebook (SahihiIB). | Nairobi, Kenya | https://www.sahihi.co.ke/ |
| Sahihi Safaris / Sahihi East Africa Safaris | Safari operator, Uganda phone number | Uganda | https://sahihi.africa/ |

The Kenyan "Sahihi Group" is the real confusion risk: same word, construction-adjacent sector, East Africa, and it already holds the `linkedin.com/company/sahihi` slug. Sahihi Construction Chemicals should never be shortened to "Sahihi Group" and should use distinct handles (for example `sahihicc`).

### 2.4 Similar generic names in the same market

- "Construction Chemicals Ltd", a distributor in Sinza, Dar es Salaam, website constructionchemicaltz.com - per the search-result summary of https://ncd.co.tz/listing/construction-chemicals-ltd (listing page not fetched; not verified).
- Sika Tanzania Construction Chemicals Limited (Mbezi Industrial Area / Salasala, Dar es Salaam) - https://tza.sika.com/en/contact.html (from search-result summary).

"<Word> Construction Chemicals Limited" is a crowded naming pattern in Dar es Salaam; the distinguishing token is only "Sahihi".

---

## 3. "Mlinzi"

### 3.1 The entity (fact)

**Mlinzi Construction Chemicals and Building Materials Limited** ("MCC"), Dar es Salaam. Self-described on its own site: "MCC is an Authorized distributor of Mapei and has registered under Company Laws of Tanzania." Source: https://mlinzimapei.com/

| Item | Finding | Source |
|---|---|---|
| Website 1 | **mlinzimapei.com** - live, static HTML, created 2023-10-09, registrar PublicDomainRegistry, expires 2027-10-09 (WHOIS record updated 2026-10-06, so it was recently renewed or edited) | https://mlinzimapei.com/ ; WHOIS |
| Website 2 | **mlinzicc.com** - live, apparently identical copy of the same site (same byte size on the home page and all nine subpages tested), created **2026-05-18**, same nameservers (mysecurecloudhost.com) | https://mlinzicc.com/ ; WHOIS |
| Address | PUGU Road, opp. CBD Hotel, Office No-35, 1st floor, P.O. Box 4948, Dar es Salaam | https://mlinzimapei.com/contact.html |
| Phone / email | +255-749-797-977 ; info@mlinzimapei.com (MX at businessmailservice.in) | same |
| Claims | Authorized distributor of Mapei. Divisions listed in the nav: Agro Products, Construction Chemical, Steel, Plastic & Glasses, Waterproofing. | https://mlinzimapei.com/ |
| Content | About 35 Mapei product pages (e.g. `/Mapelastic-Smart.html`, `/Kerapoxy.html`, `/Mapefloor-cpu-mf.html`, `/Planicrete-SP.html`, `/Ultraplan-Contract.html`) plus 3 articles (e.g. "Why Waterproofing Fails in Tanzania: 5 Key Reasons & Fixes") | https://mlinzimapei.com/construction-chemical.html ; https://mlinzimapei.com/new-articles.html |
| Quality | Template site ("Industro - Industrial HTML Template" is still the title of /about.html; "Designed By Viyaan Technosoft"). Every other page is titled just "MLINZI". Meta descriptions empty. Placeholder counters ("10 Years Experience, 135 Team Members, 957 Happy Clients, 1839 Projects Done") and a repeated placeholder testimonial ("Nishant Apte, Profession"). robots.txt and sitemap.xml both 404. | https://mlinzimapei.com/about.html ; https://mlinzicc.com/ |
| Social | Header has a "Follow Us" block but no social URLs were present in the HTML of any page scanned. No profile verified. | page source of both domains |
| Trade data | A Tendata buyer page exists for "MLINZI CONSTRUCTION CHEMICALS AND BUILDING MATERIA[LS LIMITED]", Tanzania. Shipment counts were gated when fetched; the search summary's "90 shipments from 9 suppliers" figure is not verified. | https://www.tendata.com/en/buyer/mlinzi-construction-chemicals-and-building-materials-limited-TZAId33e6113e19be514c00938871cbc242a.html |
| Mapei confirmation | None found from Mapei (see section 6). | - |

### 3.2 Relationship to Sahihi

Public evidence of a link: **none**. Neither Mlinzi domain mentions Sahihi, Mikocheni, Mwenge, Anil Sankaran, Oriental Yuhong, X-Calibur, CMCI or Bihui (all pages listed above were scanned). The addresses and phone numbers differ (Pugu Road / +255 749 797 977 vs Coca-Cola Road, Mikocheni B / +255 704 722 705).

Non-public indicators (from the owner's files; these are inference, not proof):

1. The Mapei price list PDF carries the document-author metadata "Sankaran Anil" (`mapei-pricelist-2026-09-01.pdf`), and per the project brief the price list and project sheet are titled "Mlinzi". The Sahihi director is therefore the author of a Mlinzi-titled Mapei price list.
2. The project sheet's product-line labels ("Building Line", "Ceramic Line", "Resilient", "Flooring", "Water Proofing", "Admixure") and its Mapei products (Mapelastic Smart, Planicrete SP, Mapefloor CPU MF, Kerapoxy, Ultraplan Contract, Primer G, Adesilex P7/P9) match the product pages on mlinzimapei.com.
3. Naming pattern: **mlinzicc.com** (registered 18 May 2026) and **sahihicc.com** (registered 15 Jul 2026) use the same "<name>cc.com" construction, eight weeks apart.

Inference: Sahihi is most likely either a rebrand / successor of Mlinzi's Mapei business or a new company started by people who ran it. Which of these it is - and whether Mlinzi still trades, still holds the Mapei relationship, and consents to the reuse - is **not verified** and is the single most important open question (section 7).

### 3.3 A second non-public lead: "Sapio"

The X-Calibur price list PDF ("RETAIL PRICE LIST 2026 TZ", TSH incl VAT, 6 items) carries the document-author metadata "SAPIO" (`xcalibur-retail-pricelist-2026.pdf`). **Sapio Building Solutions Ltd** is a Kampala, Uganda company that describes itself as "the authorized distributors of the esteemed global brand Mapei" in Uganda and organises its catalogue by the same Mapei line names (Ceramic Line, Resilient Line, Building Line, Flooring Line, Waterproofing Line, Admixtures Line). Its stated mission language ("long lasting building solutions to enhance the quality and life of your buildings") is close to Sahihi's tagline. Source: https://sapioafrica.com/ ; https://sapioafrica.com/contact-us/ (Plot 121 Kireka Rd, Kampala). Its site does not mention Tanzania, Mlinzi, Sahihi or X-Calibur.

Inference: there may be a regional family of related distributors (Sapio in Uganda, Mlinzi then Sahihi in Tanzania). Not verified. Ask the owner.

---

## 4. Project references - name and place check

Scope: correct names and places only. Nothing here asserts that Sahihi (or Mlinzi) supplied these sites. Source of the list: `projects-2025-2026.xlsx` (16 rows; created 2026-11-03 by user "HP").

| # | As written by owner | Verified correct name | Location and type | Status | Source |
|---|---|---|---|---|---|
| 1 | Lake Cement | **Lake Cement Ltd** (brand: Nyati Cement) | Cement plant at Kimbiji village, Kigamboni District, Dar es Salaam. Industrial. | Verified | https://www.lakecement.co.tz/about/plant ; https://en.wikipedia.org/wiki/List_of_cement_manufacturers_in_Tanzania |
| 2 | Cross Country Developer (Ocean Mall) | Not verified | Not verified | **Not verified** - no official site found (crosscountry.co.tz, crosscountrydevelopers.com, oceanmall.co.tz do not resolve); search not possible | - |
| 3 | Cross Country Developer (Awadha Villa) | Not verified | Not verified | **Not verified**. Note the owner writes "Developer" (singular); the brief says "Developers". | - |
| 4 | Charan Construction | Not verified | Not verified | **Not verified** | - |
| 5 | Said Salim | (a personal name, not in the brief) | - | Private individual. Do not publish. | xlsx |
| 6 | Kimbiji Beach Resort | Resort name not verified | Kimbiji is a coastal ward of Kigamboni District, Dar es Salaam Region, on the Indian Ocean. Hospitality. | Place verified; resort **not verified** | https://en.wikipedia.org/wiki/Kimbiji |
| 7 | Baraza Resort & Spa | Baraza Resort & Spa (official site exists but returned 403) | Bwejuu, south-east coast of Unguja, Zanzibar; part of The Zanzibar Collection (prior knowledge). Hospitality. | Site exists; details **not verified in session** | https://www.baraza-zanzibar.com/ (403) |
| 8 | Afya Wheat Flour Ltd | Not verified | Not verified. Industrial (flour milling) by name. | **Not verified** | - |
| 9 | Agakhan Education | **Aga Khan Education Service, Tanzania** (AKES,T). The official page also uses "Aga Khan Education Services in Tanzania". | Dar es Salaam. Schools listed: Aga Khan Mzizima Secondary School; Aga Khan Nursery and Primary School. Education. Which campus is not stated by the owner. | Name verified; "Agakhan" is a misspelling | https://www.agakhanschools.org/tanzania |
| 10 | Elven Agri (Estim) | **Elven Agri** (legal name not shown on site) | Bagamoyo, Tanzania. Grower and processor of dried tropical fruits and spices; BRC-certified factory. Industrial / food. "(Estim)" presumably names the contractor (inference). | Verified | https://elvenagri.co.tz/ ; https://elvenagri.co.tz/contact/ |
| 11 | Zanzibar Crown Hotel | Not verified | Not verified. Hospitality by name. | **Not verified** (zanzibarcrownhotel.com / .co.tz do not resolve) | - |
| 12 | Estim Construction (Incl. Kawe) | **Estim Construction Company Limited** | P.O. Box 19716, Dar es Salaam. Building and civil contractor. Kawe is a ward north of Mikocheni; the National Housing Corporation lists "KAWE 711" (78% complete) and "Samia Housing Scheme - Kawe" as its projects there. Which Kawe project is meant, and Estim's role, are not verified. | Company verified; Kawe project **not verified** | https://estimconstruction.co.tz/contact/ ; https://www.nhc.co.tz/ ; https://en.wikipedia.org/wiki/Mikocheni |
| 13 | CRJE GCLA-TOXIC Room | CRJE = China Railway Jianchang Engineering (in Tanzania: CRJE (East Africa) Ltd); GCLA = Government Chemist Laboratory Authority (both prior knowledge) | Not verified. Government laboratory. "TOXIC Room" is presumably a toxicology lab room (inference). | **Not verified in session** (crje domains do not resolve; gcla.go.tz TLS failure) | - |
| 14 | Beijing Construction | **Beijing Construction Engineering Group Co., Ltd. (BCEG)** | Chinese state contractor with operations in Tanzania (Wikipedia lists the National Stadium, Tanzania). Which project is meant is not stated. | Company verified; project **not verified** | https://en.wikipedia.org/wiki/Beijing_Construction_Engineering_Group |
| 15 | Africana Village (On Going) | Not verified | Not verified (africanavillage.com returns HTTP 500) | **Not verified** | - |
| 16 | DJV Construction | Not verified | Not verified | **Not verified. Warning:** djvconstruction.com is now an Indonesian gambling page ("PREMANTOTO"). Never link to it. | https://djvconstruction.com/ |

Applicators named in the sheet:

| Name | Finding | Source |
|---|---|---|
| Anka | Not verified (anka.co.tz, ankatz.com do not resolve) | - |
| Ellipsis | Not verified. ellipsis.co.tz is "Ellipsis Digital", an AI consultancy - **a different business; do not link**. | https://ellipsis.co.tz/ |
| Satva | An Instagram account "SATVA CONSTRUCTION SOLUTIONS (@constructionc__chemicals)" describes itself as a "MAPEI CERTIFIED APPLICATOR" in Tanzania (search-result snippet; profile not fetchable). satva.co.tz resolves but returns HTTP 500. | https://www.instagram.com/constructionc__chemicals/ |
| CSI | Not verified (ambiguous acronym) | - |
| Oltagani | oltagani.co.tz resolves and serves an empty directory index (domain registered, no site). Company not verified. | https://oltagani.co.tz/ |
| "Kiron - Victor", "Rama", "Rajabu" | Appear to be individuals' names. Do not publish without consent. | xlsx |

Product-name errors in the same sheet (to fix before any reuse; corrections are inference from Mapei's catalogue and Mlinzi's own page names): "Keraflexi Maxi S1" should read Keraflex Maxi S1; "Keracolour" should read Keracolor; "Aquadefence" should read Mapelastic AquaDefense; "Mapefix PU45" is most likely Mapeflex PU 45 FT (Mlinzi has a page `/Mapeflex-PU-45-FT.html`); "Admixure" should read Admixture.

Summary: of 15 organisation references, 6 names are verified (Lake Cement, Aga Khan Education Service Tanzania, Elven Agri, Estim Construction, BCEG, plus Baraza's site existing), and 9 need the owner to supply the exact legal name, location and client permission.

---

## 5. Group overlap: lapizblue.com and gcbuae.com

### 5.1 lapizblue.com (Lapiz Blue General Trading LLC, UAE)

| Item | Finding | Source |
|---|---|---|
| Platform | Next.js on Vercel; canonical host www; robots allows all except /api/ and /private/ | https://www.lapizblue.com/robots.txt ; response headers |
| Size | 117 sitemap URLs: 10 brand hubs with category pages, 6 tool brands, 31 blog posts | https://www.lapizblue.com/sitemap.xml |
| Home title | "Lapiz Blue \| Premium Building Materials Supplier in UAE" | https://www.lapizblue.com/ |
| Positioning | "UAE supplier and authorized distributor for Mapei, Laticrete, Weber, Profilpas, AkzoNobel Dulux, Kalinga Stone, Pidilite Puma, FILA, Kerakoll, Montolit, DeWalt, Hilti, and Bihui, serving Dubai, Abu Dhabi, Sharjah, and Al Sajaa" | https://www.lapizblue.com/ |
| **Mapei** | Yes, for the **UAE**. Hub `/brands/mapei` titled "Mapei Products \| Authorized Distributor UAE \| Lapiz Blue". Six category pages: tile-adhesives-and-grouts, waterproofing, flooring-systems, sealants-and-anchoring, self-leveling-and-microcement, concrete-additives-and-repair-systems. Example: "Mapei Waterproofing UAE \| Membranes & Coatings - Lapiz Blue". No per-product URLs in the sitemap. | https://www.lapizblue.com/brands/mapei ; https://www.lapizblue.com/brands/mapei/waterproofing |
| Mapei blog | 13 of the 31 posts are Mapei-led. Several have **no geo in the title**, e.g. "Mapei Ultracolor Plus: Everything You Need to Know About This Versatile Grout" (`/blog/mapei-ultracolor-plus`), `/blog/mapei-epoxy-grout-vs-cementitious-grout-which-to-choose`, `/blog/mapei-sports-flooring-enhances-durability-and-safety`, `/blog/fix-concrete-cracks-easily-with-mapei-concrete-repair-solutions`. | https://www.lapizblue.com/sitemap.xml ; https://www.lapizblue.com/blog/mapei-ultracolor-plus |
| Bihui | Yes: `/tools/bihui` titled "Bihui Tools \| Tile Levelling & Cutting UAE \| Lapiz Blue" with 4 category pages | https://www.lapizblue.com/tools/bihui |
| X-Calibur, Oriental Yuhong, CMCI | Not present on the brands page (0 mentions) | https://www.lapizblue.com/brands |
| Geo signals | JSON-LD country AE; `areaServed` AE, SA, OM, QA, KW, BH. No hreflang. | https://www.lapizblue.com/ |
| Tanzania / East Africa / Sahihi | **No mention** on home, about, contact, brands, Mapei hub, Mapei waterproofing, Bihui or the two blog posts checked | pages above |

### 5.2 gcbuae.com (Global Classic Building Materials Trading LLC, Sharjah)

| Item | Finding | Source |
|---|---|---|
| Platform | Next.js on Vercel; canonical host www; robots allows all | https://www.gcbuae.com/robots.txt |
| Size | 336 sitemap URLs | https://www.gcbuae.com/sitemap.xml |
| Sells | KalingaStone quartz / engineered marble / terrazzo slabs, Jaquar bathware, FILA surface care. **No Mapei, no construction chemicals.** | https://www.gcbuae.com/products |
| Tanzania | Appears once, as the label "Dar es Salaam, Tanzania" on the "KalingaStone - Global presence - One material, 66 countries" map on the home page. That is KalingaStone's network, not a group presence. | https://www.gcbuae.com/ |
| Sahihi / East Africa | No mention | pages checked |
| Group page | "The Lapiz Group of Companies: Who We Are" (20 Aug 2026) names **five UAE companies**: Lapiz Blue General Trading LLC, Global Classic Building Materials Trading LLC, Sixty Newton Technical Services LLC, Montolite Building Materials LLC, Alsama Metal Coatings and Ind LLC. **No Tanzanian company is named.** It also states Sixty Newton is an approved applicator for Mapei, Laticrete, AkzoNobel, Weber, Kerakoll, **X-Calibur** and Saveto. | https://www.gcbuae.com/blog/lapiz-group-of-companies |

Related: https://www.60newton.com/ (Sixty Newton, "A Lapiz Blue Group company") - UAE application services; no Tanzania mention.

### 5.3 How gcbuae.com titles pages and structures URLs (the system the new site follows)

URL pattern (lowercase, hyphenated, shallow, no trailing slash, no dates):

```
/                                         home
/products                                 index of lines
/<brand>                                  /kalingastone, /jaquar, /fila
/<brand>/<line>                           /kalingastone/quartz, /jaquar/faucets
/<brand>/<line>/colours/<family>          /kalingastone/quartz/colours/white-quartz
/<brand>/<line>/<item>                    /kalingastone/quartz/calacatta-imperial, /fila/mp90
/blog, /blog/category/<c>, /blog/<slug>   /blog/category/company, /blog/marble-price-dubai
/about, /contact, /privacy-policy, /terms
```

Title examples (all fetched 2026-11-05; plain hyphen separator, 60 characters or less, geo in every commercial title):

| Page type | URL | Title |
|---|---|---|
| Home | / | Global Classic Building Materials - Marble Slab Supplier UAE |
| About | /about | About Global Classic Building Materials - Lapiz Group UAE |
| Contact | /contact | Contact - AED Quotes & Trade Pricing - Global Classic UAE |
| Products index | /products | KalingaStone, Jaquar & FILA Products - Global Classic UAE |
| Brand hub | /kalingastone | KalingaStone Supplier UAE - Quartz, Marble & Terrazzo Slabs |
| Brand hub | /fila | FILA Stone Care UAE - Official Distributor \| Global Classic |
| Line pillar | /kalingastone/quartz | KalingaStone Quartz Slabs UAE - 69 Shades \| Global Classic |
| Category | /kalingastone/quartz/colours/white-quartz | White Quartz Slabs UAE - 16 KalingaStone Shades |
| Item | /kalingastone/quartz/calacatta-imperial | Calacatta Imperial - KalingaStone Quartz Slab UAE |
| Item | /fila/mp90 | FILA MP90 UAE - Water- and oil-repellent protection |
| Series | /jaquar/faucets/aria | Jaquar Aria UAE - Faucets - Price & SKUs \| Global Classic |
| Blog post | /blog/marble-price-dubai | Marble Prices in Dubai (2026): Real Ranges |
| Blog category | /blog/category/company | Company - The Journal - Global Classic UAE |

Observed pattern: `<primary keyword> <GEO> - <authority claim or category list>`, brand name appended only when the budget allows; the bare "Brand | Company" form is never used. Every page has a self-canonical; JSON-LD is Organization + WebSite sitewide, plus BreadcrumbList, FAQPage, ItemList, Product/Offer and Article by page type. Sources: the URLs in the table, and `DESIGN-HANDOFF.md` sections 12.2 and 12.4.

For sahihicc.com the same system maps to `/mapei`, `/mapei/waterproofing`, `/mapei/waterproofing/mapelastic-smart`, with "Tanzania" as the geo token where gcbuae uses "UAE".

### 5.4 Where sahihicc.com could collide

1. **lapizblue.com, geo-modified queries: no collision.** Lapiz Blue is consistently UAE-tagged (titles, schema, `areaServed`). "Mapei distributor Tanzania" and "Mapei distributor UAE" are different SERPs.
2. **lapizblue.com, unmodified product and how-to queries: real collision risk.** Lapiz Blue's geo-free Mapei posts ("Mapei Ultracolor Plus", "epoxy grout vs cementitious grout", "Mapei sports flooring") compete on global informational queries. A Sahihi page with a geo-free title on the same product or topic would put two group-adjacent domains on one query - the exact situation `DESIGN-HANDOFF.md` section 12.9 forbids.
3. **Bihui**: both would have a Bihui hub. Keep each geo-tagged.
4. **X-Calibur**: no supply page on lapizblue.com; Sixty Newton holds the UAE applicator angle. No collision if Sahihi stays on "X-Calibur Tanzania" supply queries.
5. **gcbuae.com: no collision.** No shared brand except FILA (which Sahihi does not list). Sahihi must not publish stone, bathware or FILA content.
6. **The bigger collision is not the UAE sites. It is mlinzimapei.com and mlinzicc.com** - two live domains serving the same site, with about 35 Mapei product pages and three "waterproofing Tanzania" articles aimed at exactly Sahihi's market (section 3). If Sahihi is Mlinzi's successor, three domains will compete for "Mapei Tanzania" unless the Mlinzi domains are 301-redirected. If Sahihi is not the successor, Mlinzi is a direct competitor making the same "Authorized distributor of Mapei" claim.
7. **Other regional Mapei claimants on Tanzania queries**: Nanocube Africa (Nairobi) states it is an "Officially certified distributor and applicator of Mapei Construction Chemicals", "since 2014", and lists Tanzania among countries served (https://nanocubeafrica.com/). Sapio Building Solutions holds Uganda (https://sapioafrica.com/).

### 5.5 Territory split table (proposed)

Rule: one primary query, one page, one domain. Geo token is mandatory in every Sahihi commercial title and H1.

| Query class | Example queries | Owning domain | What the other domains do |
|---|---|---|---|
| Sahihi brand / entity | sahihi construction chemicals, sahihicc, sahihi mikocheni | **sahihicc.com** (/, /about) | Nothing. Group sites mention Sahihi only if the relationship is confirmed (Q1). |
| Brand + Tanzania geo (distributor intent) | mapei distributor tanzania, mapei dar es salaam, mapei zanzibar, mapei dodoma / arusha / mwanza | **sahihicc.com** (/mapei) | lapizblue.com stays UAE-tagged; no Tanzania pages |
| Brand + UAE / GCC geo | mapei distributor uae, mapei dubai, mapei abu dhabi | **lapizblue.com** (/brands/mapei) | sahihicc.com never mentions UAE or AED |
| Product name + Tanzania / TZS | mapelastic smart tanzania, kerapoxy price tanzania, planicrete sp dar es salaam | **sahihicc.com** (item pages, TZS, local stock) | lapizblue.com does not add Tanzania terms |
| Product name + UAE / AED | mapelastic smart uae, keraflex maxi s1 dubai | **lapizblue.com** | sahihicc.com not involved |
| Product name, no geo (global informational) | mapei ultracolor plus, mapelastic smart datasheet | **lapizblue.com** where it already has a post or page; otherwise mapei.com wins anyway | sahihicc.com item pages carry "Tanzania" in title and H1 and do not publish a geo-free guide on the same product |
| Generic how-to, no geo | epoxy grout vs cementitious grout, how to fix concrete cracks, sports flooring durability | **lapizblue.com** (existing posts) | sahihicc.com does not write the same topic; it writes the Tanzania-specific angle instead |
| Tanzania-specific problems and guides | why waterproofing fails in tanzania, waterproofing flat roof dar es salaam, swimming pool waterproofing zanzibar, epoxy flooring for factories tanzania | **sahihicc.com** (/blog) | UAE sites not involved. Mlinzi's three existing articles: redirect if same owner, never copy if not (Q2). |
| Swahili-language queries | kuzuia maji paa, gundi ya vigae | **sahihicc.com** | None |
| Oriental Yuhong / OYH | oriental yuhong tanzania, OYH waterproofing membrane tanzania | **sahihicc.com** | No group overlap found |
| X-Calibur supply, Tanzania | x-calibur tanzania, xtech bond price tanzania | **sahihicc.com** | - |
| X-Calibur application, UAE | x-calibur approved applicator dubai | **60newton.com** | sahihicc.com not involved |
| CMCI | cmci tanzania | **sahihicc.com** | No group overlap found |
| Bihui + Tanzania | bihui tile levelling system tanzania | **sahihicc.com** | - |
| Bihui + UAE | bihui tools uae | **lapizblue.com** (/tools/bihui) | - |
| Laticrete, Weber, Kerakoll, Profilpas, AkzoNobel, Pidilite, Montolit, DeWalt, Hilti | any | **lapizblue.com** | sahihicc.com does not publish on brands it does not hold |
| KalingaStone, Jaquar, FILA, marble / quartz / terrazzo | any | **gcbuae.com** | sahihicc.com does not publish |
| Application / contracting, Tanzania | waterproofing contractor dar es salaam, mapei applicator tanzania | **sahihicc.com** (applicator network page), only if applicators consent to be named | - |
| Application / contracting, UAE | waterproofing contractor dubai | **60newton.com** | - |
| Kenya / Uganda / Rwanda brand queries | mapei kenya, mapei uganda | **Nobody in the group.** Occupied by Nanocube Africa and Sapio. | sahihicc.com does not target unless distribution rights cover those countries (Q6) |
| Lapiz Group entity | lapiz group of companies | **gcbuae.com** (/blog/lapiz-group-of-companies) and lapizblue.com/about | sahihicc.com names the group only if Sahihi is confirmed as a member (Q1) |

Supporting rules (from `DESIGN-HANDOFF.md` section 12.9): no copy reuse between domains; link entities in schema only if the relationship is real; contextual links only, no sitewide reciprocal footer links; distinct NAP and Business Profile per company.

---

## 6. Manufacturer-side verification

| Brand | What was checked | Result |
|---|---|---|
| **Mapei** | mapei.com country sites (ZA, AE, KE, IT, TZ paths) all returned HTTP 403 to direct fetch. Search results for Mlinzi + Mapei returned Mapei South Africa and Mapei UAE contact pages, but no Mapei page naming Sahihi or Mlinzi. | **Not verified.** No Mapei-published source names Sahihi or Mlinzi for Tanzania. Prior knowledge (not verified in session): Mapei's regional subsidiary is Mapei East Africa Ltd in Nairobi; Mapei has no Tanzanian subsidiary. Three third parties publicly claim Mapei status touching Tanzania: Mlinzi ("Authorized distributor of Mapei", https://mlinzimapei.com/), Nanocube Africa ("Officially certified distributor and applicator", serves Tanzania, https://nanocubeafrica.com/), Satva ("MAPEI CERTIFIED APPLICATOR", https://www.instagram.com/constructionc__chemicals/). |
| **X-Calibur** | https://www.x-calibur.us/contact-us lists the network: X-Calibur Construction Chemistry Inc. (US), X-Calibur International FZE ("Asia, Arabia and Africa Headquarters, Export & Franchise Enquiries"), X-Calibur Emirates (Dubai office, Umm Al Quwain factory), X-Calibur Construction Chemistry (EA) Limited (Kenya, +254, www.x-calibur.co.ke), licensees in South Africa (TAL), Egypt (NCC), Tunisia, Sri Lanka, Kuwait, Qatar, India, Hong Kong, Vietnam. | **No Tanzania entity and no mention of Sahihi or Mlinzi.** The page footer reads "(c)2009-2018" and the sitemap lastmod is 2022, so the list may be stale. The Kenyan entity (https://www.x-calibur.co.ke/) is the nearest official presence; whether Sahihi buys from the UAE or via Kenya is unknown. Note the owner writes "Xcalibur"; the brand writes "X-Calibur". |
| **Oriental Yuhong (OYH)** | https://www.oyh.com/ (home, /about.html, /contact.html, /map.html). Regional subsites: China, Malaysia, Cambodia, Singapore, Hong Kong, USA, Mexico. | **No Tanzania, no Africa distributor list, no mention of Sahihi.** Not verified. The global brand name is "OYH" (site title "OYH - A Leading Construction Materials & System Solutions Provider"), matching the logo on the business card. Note: yuhongglobal.com is an unrelated Vietnamese packaging company - do not link to it. |
| **CMCI** | https://cmci.com.sa/ and https://cmci.com.sa/distributer.php (Construction Material Chemical Industries, Dammam, Saudi Arabia). | Distributor page shows Saudi locations only (Jubail, Dammam, Riyadh, Jeddah). **No Tanzania, no Sahihi.** Not verified. |
| **BIHUI** | https://www.bihuitools.com/ returned 403. | Not verified. |

Internal inconsistency to resolve: the business card shows **five** brand logos (Mapei, CMCI, X-Calibur, OYH, BIHUI; `sahihi-business-card-anil-sankaran.pdf`), while the intro letter lists **three** "international partners" (Mapei, Oriental Yuhong, Xcalibur; `sahihi-intro-letter.pdf`).

Bottom line: **no manufacturer publicly confirms Sahihi for Tanzania.** That is normal for a company licensed ten weeks ago, but it means every "authorized distributor" statement on the site rests on documents only the owner holds.

---

## 7. Risks

| # | Risk | Evidence | Suggested handling |
|---|---|---|---|
| R1 | **"Authorized distributor" claims are unverifiable in public** for all five brands, and for Mapei at least two other companies make the same or a stronger claim for Tanzania. | Section 6 | Publish the claim per brand only where a signed, current authorization letter exists. Write "an authorized distributor", never "the" or "exclusive", unless the letter says so. Show the certificate, as gcbuae does. |
| R2 | **Reusing Mlinzi's project references.** All projects are dated 2025-2026 in a Mlinzi-titled sheet; Sahihi's licence is dated 29 Aug 2026. As a legal entity Sahihi cannot have supplied most of them unless it legally succeeded Mlinzi. | `projects-2025-2026.xlsx`; `business-licence-20000209142.pdf` | Do not present them as "Sahihi projects" without proof of succession. Safer wording options depend on the owner's answer to Q2. Client permission is needed for each named site. |
| R3 | **Three-domain cannibalisation** in the same country: mlinzimapei.com, mlinzicc.com, sahihicc.com. | Section 3 | If same ownership: 301 both Mlinzi domains page-by-page to sahihicc.com equivalents and say "formerly Mlinzi" on /about. If not: treat Mlinzi as a competitor and reuse nothing. |
| R4 | **Name spelling drift**: licence, card and letter all say "SAHIHI"; the owner sometimes writes "Sahehi". | Owner files; brief | Lock "Sahihi Construction Chemicals Limited" as `legalName`. Never publish "Sahehi". Consider registering sahehicc.com (currently unregistered) as a defensive redirect. |
| R5 | **Address (NAP) inconsistency**: card says "Coca-Cola road, Mikocheni B, Light Industrial area"; licence says Ward: Mikocheni, Street: Coca Cola Road; intro letter says "Coco-Cola Rd, Mwenge" (also a typo). Mwenge is a neighbourhood of Kijitonyama ward; Mikocheni is a separate ward. | Owner files; https://en.wikipedia.org/wiki/Mwenge,_Dar_es_Salaam ; https://en.wikipedia.org/wiki/Mikocheni | One canonical NAP everywhere (site, schema, Google Business Profile, letterhead), matching the licence: Coca-Cola Road, Mikocheni B Light Industrial Area, Kinondoni, Dar es Salaam. Fix the letter. No plot number, P.O. Box or postcode has been supplied. |
| R6 | **Licence activity vs positioning**: licensed for "Manufacturing Of Chemicals And Chemical Products"; the site positions the company as a distributor. | `business-licence-20000209142.pdf` | Ask whether a trading / import licence class also exists or is needed, and whether local manufacturing or blending is planned. Do not write "manufacturer" on the site unless true. Do not publish the licence activity line verbatim next to distributor claims without the owner's decision. |
| R7 | **Chemicals regulation**: Tanzania maintains a register of companies allowed to deal with chemicals (a 2023 government notice is titled "Industrial and Consumer Chemicals (Management and Control) (Companies Registered to Deal with Chemicals) Notice, 2023"). Sahihi's registration status is unknown. | https://tanzlii.org/akn/tz/act/gn/2023/134/eng@2023-03-03 (title seen in search results; page returned 403) | Ask the owner (Q8). If registered, it is a trust signal worth showing. |
| R8 | **Brand-name collision with "Sahih" and with Sahihi Group (Kenya)**. | Section 2 | Full-name anchoring; distinct social handles; never "Sahihi Group". |
| R9 | **New-entity trust gap**: no footprint, no history, licence expires 28 Aug 2027. Mlinzi's site shows unsupported counters ("1839 Projects Done"). | Sections 1-3 | No invented tenure, staff counts or project totals. State the licence year honestly. |
| R10 | **Bad outbound links**: djvconstruction.com (gambling), ellipsis.co.tz (unrelated AI firm), yuhongglobal.com (unrelated). | Section 4, 6 | Link project and brand names only to URLs confirmed by the owner. |
| R11 | **Personal data**: the sheet contains individuals ("Said Salim", "Kiron - Victor", "Rama", "Rajabu"). | xlsx | Exclude from the site. |
| R12 | **Tagline drift**: card "Enhance Your Building Life"; letter "Enhancing the Life of Buildings & Structures" and "Building Better. Protecting Longer!". | Owner files | Pick one. |
| R13 | **Group relationship undefined**: no public source ties Sahihi to the Lapiz Group; the group page lists five UAE companies only. | Section 5.2 | Do not add `parentOrganization` schema or "a Lapiz Group company" wording unless the owner confirms (Q1). |

---

## Open questions for the owner

1. **Group relationship.** Is Sahihi Construction Chemicals Limited legally part of the Lapiz Group of Companies, a sister company with common shareholders, or an independent client? This decides schema (`parentOrganization`), footer wording and cross-links.
2. **Mlinzi.** What exactly is the relationship between Sahihi and Mlinzi Construction Chemicals and Building Materials Limited? Rebrand, new company by the same people, or acquisition of the Mapei business? Is Mlinzi still trading? Who controls mlinzimapei.com and mlinzicc.com, and can both be 301-redirected to sahihicc.com?
3. **Project references.** For each of the 16 rows: who was the supplying entity on the invoice (Mlinzi or Sahihi)? Do we have each client's permission to be named? Please supply exact legal names and locations for the nine unverified ones: Cross Country Developer(s) / Ocean Mall / Awadha Villa, Charan Construction, Kimbiji Beach Resort, Afya Wheat Flour Ltd, Zanzibar Crown Hotel, CRJE / GCLA (what is the "TOXIC Room"?), Beijing Construction (which project?), Africana Village, DJV Construction. Which Aga Khan school? Which Kawe project?
4. **Authorization documents.** Is there a current, signed distributor letter or certificate from each of Mapei, Oriental Yuhong, X-Calibur, CMCI and BIHUI naming Sahihi Construction Chemicals Limited and Tanzania? Exclusive or non-exclusive? Why does the intro letter list three partners and the card five?
5. **Mapei channel.** Is Sahihi appointed directly by Mapei (which Mapei entity - Italy, UAE, East Africa?) or does it buy through another distributor? Does Mapei know about and accept the move from Mlinzi?
6. **Territory.** Tanzania mainland only, or also Zanzibar? Any rights in Kenya, Uganda or Rwanda? What is the relationship, if any, with Sapio Building Solutions (Uganda) - its name is in the X-Calibur price list's file metadata?
7. **Name and address.** Confirm the single correct spelling (Sahihi, not Sahehi) and the single canonical address. Is it Mikocheni B or Mwenge? Plot number, building name, P.O. Box, postcode, and a Google Maps pin?
8. **Licences and registrations.** Why does the licence say "Manufacturing Of Chemicals And Chemical Products" - is manufacturing or blending planned? Is there a separate trading or import licence? What is the BRELA company incorporation number? Is the company registered with the Government Chemist Laboratory Authority to deal in chemicals? VAT registration number (VRN)?
9. **Existing profiles.** Do any Sahihi accounts already exist (Google Business Profile, LinkedIn, Instagram, Facebook, WhatsApp Business)? Please share the URLs and admin access; none could be found.
10. **Email and hosting.** Is info@sahihicc.com live on the Namecheap cPanel account? It must keep working when the website's DNS moves. Who holds the Namecheap login, and is auto-renew on (expiry 2027-07-15)?
11. **Applicators.** May Anka, Ellipsis, Satva, CSI and Oltagani be named on the site as applicators? Please supply their full registered names and contact pages.
12. **Tagline.** Which is final: "Enhance Your Building Life", "Enhancing the Life of Buildings & Structures" or "Building Better. Protecting Longer!"?
