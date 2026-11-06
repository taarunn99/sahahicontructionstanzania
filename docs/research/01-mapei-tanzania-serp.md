# Mapei brand SERPs for Tanzania - research report (2026-11-05)

Prepared for: Sahihi Construction Chemicals Limited (sahihicc.com). Research only. Every claim carries the URL it came from. "Not verified" means I could not confirm it with the tools available.

## 0. Method and limits (read this first)

**What I actually observed.** All SERP data was collected on 2026-11-05 from three indexes, none of which is Google:

1. **Brave Search with the country set to Tanzania** (`search.brave.com/search?q=...&country=tz`), result pages fetched directly. Brave answered 6 of the 18 queries and then served a captcha for the other 12, so Brave data exists only for: Mapei Tanzania, Mapei distributor Tanzania, Mapei Dar es Salaam, Mapei products Tanzania, Mapei tile adhesive Tanzania, Mapei waterproofing Tanzania.
2. **Yahoo Search** (`search.yahoo.com/search?p=...`), result pages fetched directly, no country parameter (the response was served from an Asia-Pacific Yahoo cluster, so it is not a Tanzania-localised view). Yahoo answered all 18 queries. Yahoo shows 7 organic results per page; for 11 queries I have two pages (up to 14 results), for 7 queries only the first page (7 results).
3. **The built-in WebSearch tool (US-only index)** for 6 of the queries. It returned no Tanzania-specific result for any of them (it mostly returned mapei.com South Africa pages, Wikipedia and trade press), which is itself a signal that the topic is thinly covered.

**Limits you must keep in mind.**

- **No Google data.** Google is the engine that matters in Tanzania, and I could not query it (a direct fetch of google.com returned a redirect/consent page, and no browser automation was allowed). Treat every position below as "position in Brave-TZ / Yahoo", not "Google position". Rankings should be re-checked in Google Search Console and a Tanzania-located browser before any promise is made to the owner.
- **No search-volume data.** I have no keyword-volume tool. Nothing here says how many people search any of these terms.
- **No Google Maps / local pack / Google Business Profile data.** Not verified whether any competitor has a Business Profile.
- **Search budget ran out.** The session's shared WebSearch budget was exhausted part-way through, so I could not run follow-up discovery searches (for example for Facebook pages or more resellers). The direct Brave/Yahoo fetches were all done before that point; I stopped search-engine querying once the limit notice arrived.
- **mapei.com blocks automated fetchers.** Every mapei.com page returned HTTP 403 to both my fetch tools (only https://www.mapei.com/robots.txt was readable). For four mapei.com pages I therefore read Internet Archive (Wayback Machine) copies dated 2026-01-03 to 2026-10-11. Those are snapshots, not the live pages, and the dealer locator is a JavaScript map whose entries are not in the HTML, so its Tanzania entries are **not verified**.
- **Blocked sites:** jiji.co.tz (403), ubuy.co.tz (403), tanzania.desertcart.com (403), zoomtanzania.net (403), linkedin.com company pages (403/999; individual public posts were readable), facebook.com (not attempted). Their content is known only from SERP titles unless stated.
- **The fetcher sees raw HTML only.** No JavaScript rendering, no Core Web Vitals, no backlink data, no traffic data.
- Titles quoted from other sites have had long dashes replaced with plain hyphens.

---

## 1. SERPs for the 18 queries

Legend for page type: DIST = local distributor/reseller site, BRAND = Mapei's own site, SOCIAL = social profile or post, MKT = marketplace, XB = cross-border import shop, NEWS = trade press, PDF = datasheet/PDF, REF = reference site, IRR = irrelevant.

### 1.1 "Mapei Tanzania"

Brave (country=tz):

| # | Domain / URL | Type | Title |
|---|---|---|---|
| 1 | https://mlinzimapei.com/ | DIST home | Mlinzi Construction Chemicals |
| 2 | https://www.instagram.com/constructionc__chemicals/ | SOCIAL | SATVA CONSTRUCTION SOLUTIONS (@constructionc__chemicals) |
| 3 | https://www.mapei.com/ | BRAND country selector | Select your location - Mapei Global |
| 4 | https://www.ubuy.co.tz/en/brand/mapei | XB brand page | Buy Mapei Products Online at Best Prices - Ubuy Tanzania |
| 5 | https://www.mapei.com/ae/en/contact-us | BRAND (UAE) | Mapei - Contact Mapei |
| 6 | https://www.mapei.com/za/en/contact-us/branch-offices-and-plants?page=6 | BRAND (South Africa) | Branch offices and plants - Mapei |
| 7 | https://www.mapei.com/za/en/home-page | BRAND (South Africa) | Mapei - Chemical Products For Building |
| 8 | https://www.mapei.com/za/en/about-us/mapei-in-southern-africa | BRAND (South Africa) | Mapei in Southern Africa |
| 9 | https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/ | NEWS (2018) | MAPEI extends international presence to East Africa |
| 10 | https://www.adhesivesmag.com/articles/96622-mapei-opens-east-africa-subsidiary | NEWS (2018) | MAPEI Opens East Africa Subsidiary |
| 11 | https://www.instagram.com/mapeimeea/ | SOCIAL | MAPEI Middle East & East Africa (@mapeimeea) |
| 12 | https://www.mapei.com/us/en-us/where-to-buy | BRAND (USA) | Where to buy - Mapei |

Yahoo (page 1 only):

| # | URL | Type | Title |
|---|---|---|---|
| 1 | https://www.mlinzimapei.com/contact.html | DIST contact | Contact Us - MLINZI |
| 2 | https://mlinzimapei.com/ | DIST home | MLINZI |
| 3 | https://www.mapei.com/ | BRAND selector | Select your location - Mapei Global |
| 4 | https://tz.linkedin.com/in/mlinzi-construction-chemicals-084342311 | SOCIAL | Mlinzi Construction Chemicals - Reseller of Mapei ... |
| 5 | https://www.mapei.com/za/en/contact-us/branch-offices-and-plants | BRAND (South Africa) | Branch offices and plants - Mapei |
| 6 | https://www.instagram.com/constructionc__chemicals/ | SOCIAL | SATVA CONSTRUCTION SOLUTIONS |
| 7 | https://nanocubeafrica.com/ | DIST (Kenya) | Nanocube Africa - Premium Waterproofing & Epoxy Solutions |

### 1.2 "Mapei distributor Tanzania"

Brave (country=tz):

| # | URL | Type | Title |
|---|---|---|---|
| 1 | https://mlinzimapei.com/ | DIST home | Mlinzi Construction Chemicals |
| 2 | https://www.instagram.com/constructionc__chemicals/ | SOCIAL | SATVA CONSTRUCTION SOLUTIONS |
| 3 | https://www.mapei.com/za/en/contact-us/branch-offices-and-plants | BRAND (ZA) | Branch offices and plants |
| 4 | https://www.mapei.com/ | BRAND selector | Select your location - Mapei Global |
| 5 | https://www.mapei.com/za/en/dealer-locator/risultati | BRAND (ZA) dealer locator | MAPEI Stockists and Distributors |
| 6 | https://www.mapei.com/ae/en/dealer-locator | BRAND (UAE) dealer locator | Dealer locator - Mapei |
| 7 | https://www.ubuy.co.tz/en/brand/mapei | XB | Buy Mapei Products Online at Best Prices - Ubuy Tanzania |
| 8 | https://www.mapei.com/za/en/dealer-locator | BRAND (ZA) | Dealer Locator - Where to buy MAPEI Products |
| 9 | https://www.mapei.com/ae/en/contact-us | BRAND (UAE) | Contact Mapei |
| 10 | https://www.mapei.com/us/en-us/where-to-buy | BRAND (USA) | Where to buy |

Yahoo (2 pages):

| # | URL | Type | Title |
|---|---|---|---|
| 1 | https://www.mlinzimapei.com/contact.html | DIST | Contact Us - MLINZI |
| 2 | https://nanocubeafrica.com/ | DIST (Kenya) | Nanocube Africa - Premium Waterproofing & Epoxy Solutions |
| 3 | https://mlinzimapei.com/ | DIST | MLINZI |
| 4 | https://tz.linkedin.com/in/mlinzi-construction-chemicals-084342311 | SOCIAL | Mlinzi Construction Chemicals - Reseller of Mapei ... |
| 5 | https://www.mapei.com/ | BRAND | Select your location - Mapei Global |
| 6 | https://www.instagram.com/constructionc__chemicals/ | SOCIAL | SATVA CONSTRUCTION SOLUTIONS |
| 7 | https://nanocubeafrica.com/about.html | DIST (Kenya) | About Us - Nanocube Africa - 10+ Years Waterproofing East Africa |
| 8 | https://www.linkedin.com/feed/update/urn:li:share:7224360926047592449 | SOCIAL | Mlinzi Construction Chemicals posted on LinkedIn |
| 9 | https://www.linkedin.com/posts/satva-construction-solutions-26087b190_for-mapei-products-and-applications-in-tanzania-activity-6918430463992680448-QkIS | SOCIAL | For Mapei products and applications in Tanzania, Call Satva ... |
| 10 | https://www.mapei.com/za/en/contact-us/branch-offices-and-plants | BRAND (ZA) | Branch offices and plants |
| 11 | https://tza.sika.com/en/where-to-buy-building-materials.html | Competitor brand (Sika Tanzania) | Get Best Building Materials in Tanzania - Find Official ... |
| 12 | https://marango.co.tz/products | Hardware importer (no Mapei on page) | PRODUCTS - Marango Ltd |

### 1.3 "Mapei Dar es Salaam"

Brave (country=tz): 1 https://mlinzimapei.com/ (DIST); 2 https://www.mapei.com/ (BRAND selector); 3 https://www.mapei.com/za/en/about-us/mapei-in-southern-africa (BRAND ZA); 4 https://www.mapei.com/ae/en/contact-us (BRAND UAE); 5 https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/ (NEWS 2018); 6 https://www.instagram.com/mapeieastafrica/ (SOCIAL, "MAPEI East Africa"); 7 https://www.mapei.com/za/en/home-page (BRAND ZA); 8 https://www.mapei.com/za/en/contact-us (BRAND ZA); 9 https://www.marketinsidedata.com/en/company/mapei-east-africa/21421026b2c3dcaa96f3286b94f72bf0 (trade-data listing for Mapei East Africa Limited, Kenya); 10 https://www.adhesivesmag.com/articles/96622-mapei-opens-east-africa-subsidiary (NEWS 2018); 11 https://www.instagram.com/constructionc__chemicals/ (SOCIAL, Satva); 12 https://www.facebook.com/mapeiza/ (SOCIAL, Mapei South Africa).

Yahoo (page 1): 1 https://www.mlinzimapei.com/contact.html "Contact Us - MLINZI"; 2 https://mlinzimapei.com/ "MLINZI"; 3 https://tz.linkedin.com/in/mlinzi-construction-chemicals-084342311 "Mlinzi Construction Chemicals - Reseller of Mapei ..."; 4 https://www.mapei.com/home "Select your location"; 5 https://www.linkedin.com/posts/mapei-east-africa_mapeieastafrica-daressalaam-constructiontanzania-activity-7504193089868029952-j2nr "MAPEI Training in Dar-es-Salaam, Tanzania - LinkedIn"; 6 https://www.linkedin.com/posts/mlinzi-construction-chemicals-084342311_mlinzi-dar-tanzania-activity-7500882154260881410-_pe7 (Mlinzi post); 7 https://www.mapei.com/ae/en/dealer-locator (BRAND UAE dealer locator).

### 1.4 "Mapei products Tanzania"

Brave (country=tz): 1 https://mlinzimapei.com/ (DIST); 2 https://www.ubuy.co.tz/en/brand/mapei (XB); 3 https://www.mapei.com/za/en/products-and-solutions (BRAND ZA); 4 https://www.mapei.com/za/en/home-page; 5 https://www.instagram.com/constructionc__chemicals/ (Satva); 6 https://www.mapei.com/za/en/contact-us/branch-offices-and-plants; 7 https://www.mapei.com/; 8 https://www.mapei.com/ae/en/contact-us; 9 https://autospec.co.za/productmedia/mapei/datasheets/about.html (ZA reference); 10 https://www.mapei.com/za/en/about-us/mapei-in-southern-africa; 11 https://www.linkedin.com/posts/nazrul-haque-74171837_mg-hardware-tanzania-mapei-products-avilable-activity-7088612008803102720-2mSY (SOCIAL, "MG HARDWARE - TANZANIA. MAPEI Products avilable"); 12 https://www.mapei.com/us/en-us/products-and-solutions/products.

Yahoo (page 1): 1 https://mlinzimapei.com/ "MLINZI"; 2 https://www.mlinzimapei.com/contact.html; 3 https://www.mapei.com/; 4 Mlinzi LinkedIn profile; 5 https://nanocubeafrica.com/; 6 https://afrotrade.net/eite2023/connect.php?id=318 "KAMAL STEELS LIMITED - Tanzania" (exhibitor listing; page errored when fetched, Mapei link not verified); 7 https://www.ubuy.co.tz/en/product/1HP3MKCVQ-mapei-mapeguard-um-underlayment-membrane-high-performance-ceramic-tile-porcelain-stone-crack-isolation-and-waterproofing-solution-54-sq-ft (XB product).

### 1.5 "Mapei tile adhesive Tanzania"

Brave (country=tz) - **no Tanzanian result at all in the top 12**: 1 https://www.mapei.com/my/en/products-and-solutions/lines/tile-and-stone-installation-system (BRAND Malaysia); 2 https://mapeihome.com/flooranddecor/product/type-1/ (BRAND USA retail); 3 https://www.mapei.com/nz/en/new-zealand-product-lines/products-for-tiling-ceramics-and-stone-materials (BRAND NZ); 4 flooranddecor.com product (US retailer); 5 amazon.com product; 6 https://www.mapei.com/au/en/products-and-solutions/products/detail/large-format-tile-adhesive (BRAND AU); 7 cdnmedia.mapei.com adhesive selection chart (PDF); 8 mapei.com/cn product; 9 mapei.com/au product; 10 https://www.mapei.com/in/en/products-and-solutions/lines/transform-your-space-with-premium-tile-adhesives-and-grouts (BRAND India); 11 mapei.com/ca product; 12 flooranddecor.com product.

Yahoo (2 pages): 1 https://mlinzimapei.com/ "MLINZI" (home, not an adhesive page); 2 Mlinzi LinkedIn profile; 3 mapei.com/in tile adhesives line; 4 https://jiji.co.tz/165-tile-adhesives "Tile Adhesives in Tanzania for sale Prices on Jiji.co.tz" (MKT category); 5 mapei.com/au product search; 6 http://www.sikapex.co.tz/ "SIKAPEX LIMITED" (competitor); 7 Mapei adhesive selection chart (PDF); 8 https://www.mapei.com/; 9 flooranddecor.com; 10 https://www.sika.com/; 11 lowes.com; 12 Satva LinkedIn post "For Mapei products and applications in Tanzania, Call Satva ..."; 13-14 mapeihome.com.

### 1.6 "Mapei waterproofing Tanzania"

Brave (country=tz): 1 https://www.mapei.com/za/en/products-and-solutions/lines/waterproofing-products (BRAND ZA line page); 2 https://mlinzimapei.com/ (DIST home); 3 Satva Instagram; 4 https://nanocubeafrica.com/ (DIST Kenya); 5 mapei.com/za tanks and reservoirs category; 6 mapei.com/ae contact; 7 https://www.mapei.com/ae/en/products-and-solutions/lines/waterproofing-products (BRAND UAE); 8 https://epoxyresinflooring.co.ke/mapei-waterproofing-products-expert-seller-shop-kenya-nairobi/ (Kenyan reseller landing page); 9-12 mapei.com US / Puerto Rico / Indonesia waterproofing pages.

Yahoo (page 1): 1 https://mlinzimapei.com/ "MLINZI"; 2 mapei.com/us waterproofing line; 3 mapei.com/it waterproofing line; 4 Mlinzi contact page; 5 Mlinzi LinkedIn profile; 6 Mlinzi LinkedIn post; 7 Ubuy Tanzania Mapeguard UM product page.

### 1.7 "Mapei grout Tanzania" (Yahoo page 1 only; Brave blocked)

1 https://www.ubuy.co.tz/en/product/1BGVZRLO6-mapei-ultracare-grout-refresh-universal-grout-colorant-sealer-8-oz-bottle-easy-grout-restoration-protection-5001-alabaster (XB product); 2 https://www.ubuy.co.tz/en/product/KELKKSDQ-mapei-ultracolor-plus-fa-rapid-setting-grout-25-lbs-all-colors-rain (XB product); 3 https://mlinzimapei.com/ "MLINZI"; 4 Mlinzi LinkedIn profile; 5 https://www.mapei.com/; 6 mapei.com grouts and sealants brochure (PDF); 7 https://tanzania.desertcart.com/products/112599176-ultracolor-plus-coloured-grout-anthracite-114-by-mapei (XB product).

### 1.8 "Mapei supplier Tanzania" (Yahoo page 1 only)

1 https://www.mlinzimapei.com/contact.html; 2 Mlinzi LinkedIn profile; 3 https://mlinzimapei.com/; 4 https://nanocubeafrica.com/; 5 https://www.mapei.com/; 6 https://www.mapei.com/za/en/contact-us/branch-offices-and-plants; 7 https://www.kamaka.co.tz/ "KAMAKA Company Limited" (hardware importer; no "Mapei" on its home page when fetched).

### 1.9 "Mapei dealer Dar es Salaam" (Yahoo page 1 only)

1 https://www.mlinzimapei.com/contact.html; 2 https://mlinzimapei.com/; 3 Mlinzi LinkedIn profile; 4 https://www.mapei.com/home; 5 Mlinzi LinkedIn post; 6 https://www.mapei.com/ae/en/dealer-locator; 7 Mlinzi LinkedIn post (#mapeiuae).

### 1.10 "Mapei Zanzibar" (Yahoo page 1 only)

1 https://www.mapei.com/home; 2 https://mlinzimapei.com/ "MLINZI"; 3 https://www.mapei.com/ae/en/dealer-locator; 4 https://www.mapeimarine.com/ (BRAND, marine); 5 riadtileco.com "Zanzibar Black Cement Tile" (IRR); 6 Mlinzi LinkedIn post; 7 homeimprovementlighting.com "Zanzibar Black Cement Tile" (IRR). **No page about Mapei in Zanzibar exists in this index.**

### 1.11 "Mapei Arusha" (Yahoo page 1 only)

1 https://www.mapei.com/; 2 mapei.com/us contact; 3 yellowpages-uae.com Mapei distributors UAE (IRR); 4 Mapei grout chart PDF; 5 lapizblue.com Mapei UAE distributor (IRR); 6 https://arushaconcrete.co.tz/products (concrete blocks, IRR); 7 https://www.ctm.co.tz/storefinder/store/ctm-arusha "CTM Arusha" (tile retailer store page). **No Mlinzi, no Mapei-in-Arusha page.**

### 1.12 "Mapei Mwanza" (Yahoo, 2 pages)

1 https://www.mapei.com/; 2 mapei.com/it branch offices; 3 a Facebook profile "Mafipe Wa Mwanza" (IRR); 4 instagram.com/mapeiofficial; 5 https://nanocubeafrica.com/; 6-7 Wikipedia Mwanza; 8 Wikipedia Mapei; 9 an Instagram post; 10 linkedin.com/company/mapei_group; 11 lusakatimes.com (IRR); 12 Mapei company profile PDF; 13 Mapei South Africa LinkedIn. **No relevant local answer.**

### 1.13 "Mapei Dodoma" (Yahoo, 2 pages)

1 https://www.mapei.com/home; 2 mapei.com/it branch offices; 3 mapeimarine.com; 4 a Facebook reel "We supply all building materials We are located Dodoma Makulu ..." (generic hardware, Mapei link not verified); 5 an Instagram reel; 6 cadd.mapei.com; 7 Mapei company profile PDF; 8-12 mapei.com / Wikipedia / LinkedIn; 13 galleherduffy.com (US); 14 archiproducts.com. **No relevant local answer.**

### 1.14 "Mapelastic Tanzania" (Yahoo, 2 pages)

| # | URL | Type | Title |
|---|---|---|---|
| 1 | https://sapioafrica.com/mapelastic-smart/ | DIST (Uganda) product page | Mapelastic Smart - Sapio Building Solutions |
| 2 | https://modernfloorsolutions.com/product/mapelastic-smart/ | Applicator shop (Uganda) product page | Mapelastic Smart - Modern Floors (U) Limited |
| 3 | https://www.mlinzimapei.com/Mapelastic-Smart.html | DIST (Tanzania) product page | Mapelastic Smart - MLINZI |
| 4 | https://creteprotrading.com/product/mapelastic-smart/ | Trader (Dubai) product page | Mapelastic Smart Waterproofing Membrane - CretePro Trading |
| 5 | cdnmedia.mapei.com Mapelastic Smart datasheet | PDF | MAPELASTIC SMART |
| 6 | https://www.mapei.com/in/en/products-and-solutions/products/detail/mapelastic-smart | BRAND (India) | Mapelastic Smart - Technical Sheet & Specifications |
| 7 | https://sudaroof.com/product/mapelastic-smart-2/ | Reseller (site references Khartoum) | Mapelastic Smart - Sudaroof Engineering Enterprises |
| 8 | mapei.com/us product | BRAND | - |
| 9 | Satva LinkedIn post (#mapelasticsmart) | SOCIAL | - |
| 10 | slideshare.net Mapelastic Smart TDS | REF | - |
| 11 | cdnmedia.mapei.com datasheet (Norway) | PDF | - |
| 12 | https://buildseal.co.ke/product/mapelastic-smart/ | Reseller (Kenya) product page with KSh price | MAPELASTIC SMART - BuildSeal Technical Systems |
| 13 | Satva LinkedIn post "Terrace waterproofing with Mapelastic Smart.. call 0682592892" | SOCIAL | - |

Note: the title Yahoo shows for the Mlinzi page ("Mapelastic Smart - MLINZI") is rewritten by the engine; the real `<title>` of that page is just "MLINZI" (see section 3.1).

### 1.15 "Keraflex Tanzania" (Yahoo, 2 pages)

1 https://www.mapei.com/my/en/products-and-solutions/products/detail/keraflex (BRAND Malaysia); 2 mapei.com/no Keraflex (BRAND Norway); 3 https://futurelayers.com/product/keraflex/ (Indian distributor); 4 https://sudaroof.com/product/keraflex/ (reseller, Khartoum references); 5 mapeihome.com Keraflex Super (USA); 6 https://buildcentreafrica.com/shop-1/p/keraflex-maxi-s1 (Build Centre, Kigali, Rwanda); 7 Keraflex datasheet PDF (Malaysia); 8 mapei.com/us Keraflex Plus; 9 appliedbuildingproducts.com; 10 Keraflex datasheet PDF (UAE); 11-12 mapei.com/us; 13 archiexpo PDF; 14 mapei.com/au. **No Tanzanian result.** Mlinzi has a page at https://mlinzimapei.com/Keraflex-Maxi-S1.html but it did not appear.

### 1.16 "Kerapoxy Tanzania" (Yahoo page 1 only)

1 https://www.mapei.com/us/en-us/products-and-solutions/products/detail/kerapoxy; 2-5 four cdnmedia.mapei.com Kerapoxy / Kerapoxy Adhesive datasheet PDFs; 6 mapei.com/us Kerapoxy CQ; 7 Kerapoxy SB datasheet PDF. **No Tanzanian result.** Mlinzi has https://mlinzimapei.com/Kerapoxy.html and https://mlinzimapei.com/kerapoxy-cq.html but neither appeared.

### 1.17 "Mapei price Tanzania" (Yahoo, 2 pages)

1 https://mlinzimapei.com/ "MLINZI" (no prices on site); 2 https://www.ubuy.co.tz/en/product/MBQWBAJN4-ultracolor-plus-fa-powder-grout-10lb-bag-5221-moonbeam (XB); 3 https://www.ubuy.co.tz/en/product/1JB4AWOQY-mapei-ultracolor-plus-fa-rapid-setting-grout-25-lbs (XB); 4 Mlinzi LinkedIn profile; 5 https://jiji.co.tz/165-paint (MKT category, off-topic); 6 https://stonnet.co.tz/wp-content/uploads/2023/05/SCL%20HARDWARE%20MATERIALS%20PRICE%20LIST.pdf (hardware price list PDF; Mapei content not verified); 7 tanzania.desertcart.com Ultracolor Plus (XB); 8 https://www.mapei.com/; 9 https://marango.co.tz/products; 10 uber.com (IRR); 11 Mapei products catalogue PDF; 12 Satva LinkedIn post; 13 https://tza.sika.com/ (competitor); 14 https://jiji.co.tz/building-materials (MKT category).

### 1.18 "wapi kununua Mapei Tanzania" (Swahili: "where to buy Mapei Tanzania"; Yahoo, 2 pages)

1 YouTube "Wapi pa kununua Vipodozi Original Tanzania???" (cosmetics, IRR); 2 prostaid.net (IRR); 3 jamiiforums.com rennet thread (IRR); 4 a Looker Studio spam page (IRR); 5 TikTok (IRR); 6 jamiiforums.com (IRR); 7 YouTube (IRR); 8 jamiiforums.com (IRR); 9 ukowapi.site (IRR); 10 Satva Instagram; 11 Mlinzi LinkedIn post; 12 jamiiforums.com (IRR); 13 Mlinzi LinkedIn post; 14 jamiiforums.com (IRR). **Nobody has a Swahili Mapei page.**

### 1.19 What the SERPs say in one paragraph

Across both non-Google indexes, **one Tanzanian site, mlinzimapei.com, holds position 1 or 2 for every head term** ("Mapei Tanzania", "distributor", "Dar es Salaam", "products", "supplier", "dealer", "price"). Behind it there is no second Tanzanian website at all: the rest is Mapei's foreign country pages (South Africa, UAE, USA), social profiles (Satva, Mlinzi's LinkedIn), a Kenyan applicator (Nanocube) and cross-border import shops (Ubuy, Desertcart). **sahihicc.com does not appear anywhere**, which is expected because the domain currently serves a parking page (section 3.0). For product-name, city and Swahili queries there is essentially no Tanzanian answer.

---

## 2. Mapei's own footprint in Tanzania and East Africa

| Question | Finding | Source |
|---|---|---|
| Does mapei.com have a Tanzania country site? | **No.** The global country selector lists only three African entries: Egypt, Kenya and South Africa. There is no Tanzania, Uganda or Rwanda entry. | Archived copy of https://www.mapei.com/ dated 2026-10-11 (http://web.archive.org/web/20261011144309/https://www.mapei.com/). Live page returned 403 to my fetcher. |
| Is there a Kenya site (mapei.com/ke)? | **No dedicated Kenya site.** The "Kenya" entry in the selector links to https://www.mapei.com/ae/en/home-page (the UAE / Middle East & East Africa site). The Internet Archive index holds no real pages under mapei.com/ke. | Same archived selector; archive index query for `mapei.com/ke*` on 2026-11-05. |
| What happens at mapei.co.ke? | It **redirects to https://www.mapei.com/ae/en/home-page**. | Live redirect observed 2026-11-05 (final URL returned 403 to the fetcher). |
| What is Mapei East Africa Ltd? | Mapei Group subsidiary announced December 2018, "located in Nairobi, Kenya", "focused on developing the markets in Kenya and surrounding countries", under Stefano Iannacone, Middle East and East Africa Regional Director; website given as mapei.co.ke. | https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/ (2018-12-07); also https://www.adhesivesmag.com/articles/96622-mapei-opens-east-africa-subsidiary (title dated 2018-12-12, not fetched). |
| Where is it listed on mapei.com? | On the "Mapei Middle East & East Africa" contact page: "Mapei East Africa - 14th Riverside, 6th Floor, Grosvenor Building, Tatu City, ALP 2, Kiambu, Nairobi, Kenya, +254 709 045 000", URL mapei.co.ke. | Archived copy of https://www.mapei.com/ae/en/contact-us dated 2026-01-05. |
| Does that site target Tanzania? | **No visible targeting.** The contact form's country dropdown offers Bahrain, Egypt, Iraq, Jordan, Kenya, Kuwait, Lebanon, Oman, Palestine, Pakistan, Qatar, UAE, Rwanda, Saudi Arabia, Yemen and "Others". **Tanzania is not in the list.** The word "Tanzania" does not occur on the archived contact page, dealer-locator page or branch-offices page. | Same archived contact page; archived https://www.mapei.com/ae/en/dealer-locator (2026-01-04); archived https://www.mapei.com/it/en/contact-us/branch-offices-and-plants (2026-01-03). |
| Is there a dealer locator, and does it list a Tanzania dealer? | A dealer locator exists at https://www.mapei.com/ae/en/dealer-locator (title "Dealer locator - Mapei"; it is a Google-Maps based search with results at `/dealer-locator/risultati`). **Whether any Tanzanian dealer (Sahihi, Mlinzi or anyone) is listed is not verified** - the entries are loaded by JavaScript and the live site blocks fetchers. A person must check this by hand: open the locator and search "Dar es Salaam". | Archived dealer-locator HTML (2026-01-04). |
| Is Mapei physically active in Tanzania? | Yes, at least through events: Mapei East Africa posted about a **2-day training in Dar es Salaam** (day 1 for local fundis on ceramic, flooring and waterproofing lines; day 2 for consultants, contractors and distributors). No Tanzanian partner is named in the post. The post was about one month old when read. | https://www.linkedin.com/posts/mapei-east-africa_mapeieastafrica-daressalaam-constructiontanzania-activity-7504193089868029952-j2nr |
| Social accounts | @mapeieastafrica on Instagram (about 517 followers, no website link, no mention of Tanzania or distributors in the bio); @mapeimeea (Middle East & East Africa). | https://www.instagram.com/mapeieastafrica/ ; https://www.instagram.com/mapeimeea/ |
| mapei.com crawler policy | robots.txt allows search indexing ("search=yes") and returns 403 to automated fetchers. Not relevant to ranking, but it means Mapei's foreign pages are fully indexable and will always sit in these SERPs. | https://www.mapei.com/robots.txt |

**Implication.** Mapei itself has no page that answers "Mapei Tanzania". The brand's presence in these SERPs is a country selector plus South African and UAE pages. That is the gap an authorized local distributor can fill. The most valuable single asset would be a listing (with link) on the Mapei Middle East & East Africa dealer locator or a mention by the Mapei East Africa LinkedIn/Instagram accounts.

---

## 3. Who claims to sell Mapei in Tanzania - and site audits

### 3.0 Sahihi's own starting point

- **https://sahihicc.com/ currently serves a hosting parking page**: `<title>Namecheap Parking Page</title>`, H1 "Your website is ready to go!". /robots.txt and /sitemap.xml return 404. (Fetched 2026-11-05.)
- **The domain is brand new**: whois shows Creation Date 2026-07-15, registrar NameCheap (command-line whois, 2026-11-05). It has no history and, as far as these indexes show, no rankings.
- The WebSearch tool found **no web mention at all** of "Sahihi Construction Chemicals" (query run 2026-11-05, US index). Sahihi's social profiles, Google Business Profile and directory listings: not verified.
- **Question for the owner (not verified, raised only because of naming):** the incumbent Mlinzi registered a second domain, mlinzicc.com, on 2026-05-18, two months before sahihicc.com, and the "-cc.com" pattern is the same. If Sahihi is a rebrand, successor or sister company of Mlinzi, then 301-redirecting mlinzimapei.com to the new site would be the single biggest ranking lever available. If the two are unrelated, Mlinzi is the direct competitor and also claims to be Mapei's authorized distributor (section 3.1), which must be resolved with Mapei East Africa.

### 3.1 Mlinzi Construction Chemicals (MCC) - mlinzimapei.com - THE incumbent

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

### 3.2 Satva Construction Solutions - no website found

- Instagram bio: "MAPEI CERTIFIED APPLICATOR in Tanzania - Distribution & Application of Construction Chemicals" (cementitious, epoxy and PU flooring, waterproofing); about 2,900 followers. https://www.instagram.com/constructionc__chemicals/
- LinkedIn post (about 4 years old): "For Mapei products and applications in Tanzania, Call Satva", phone 0682592892. The post is a repost of a MAPEI Middle East & East Africa post; the page showed a follower figure of 17,552, which may belong to the reposted Mapei account rather than Satva (not verified). https://www.linkedin.com/posts/satva-construction-solutions-26087b190_for-mapei-products-and-applications-in-tanzania-activity-6918430463992680448-QkIS
- No website was found for Satva (not verified that none exists). Its Instagram profile ranks second on Brave for "Mapei Tanzania" and "Mapei distributor Tanzania" purely because nothing better exists.
- Weakness: social-only presence. A real page beats it. Possible partner rather than rival: a certified applicator is a natural "find an applicator" referral for a distributor.

### 3.3 MG Hardware (Tanzania) - social mention only

A LinkedIn post about 3 years old reads "MG HARDWARE - TANZANIA. MAPEI Products avilable" (poster: Nazrul H.). No address, contacts or website in the post; current status not verified. https://www.linkedin.com/posts/nazrul-haque-74171837_mg-hardware-tanzania-mapei-products-avilable-activity-7088612008803102720-2mSY

### 3.4 Nanocube Africa Limited - nanocubeafrica.com (Nairobi, claims Tanzania coverage)

- Claim: "Officially certified distributor and applicator of Mapei Construction Chemicals in East Africa"; "Active operations across Kenya, Uganda, Rwanda, Tanzania and Dubai". Address: Omega Business Park, Babadogo, Nairobi; +254 727 455956. No Tanzanian address. https://nanocubeafrica.com/ , https://nanocubeafrica.com/about.html
- Platform: hand-coded static HTML (`.html` URLs). Title: "Nanocube Africa - Premium Waterproofing & Epoxy Solutions in East Africa". Meta description and canonical present; meta keywords include "Mapei distributor Kenya" and "Mapei distributor East Africa".
- Schema: one `LocalBusiness` JSON-LD block with `areaServed` Kenya/Uganda/Rwanda/Tanzania/Dubai and an `AggregateRating` of 4.9 from 127 reviews (the reviews themselves are not shown on the page; not verified).
- robots.txt present, sitemap.xml present with only 9 URLs, lastmod 2026-06-21. No per-product pages. 3 blog articles.
- Strength: technically clean, schema, fresh. Weakness: an applicator/services site in Kenya with nine pages and no product catalogue, no Tanzanian address or phone. It ranks for Tanzanian Mapei queries only by default.

### 3.5 Cross-border import shops

- **Ubuy Tanzania** (https://www.ubuy.co.tz/en/brand/mapei): brand page "Buy Mapei Products Online at Best Prices - Ubuy Tanzania" plus individual product pages; ranks 2-7 for "Mapei Tanzania", "products", "grout" and "price" queries. Its snippet says it ships from international warehouses. It lists US-market Mapei SKUs (Ultracolor Plus FA, Mapeguard UM, UltraCare) that are not the East African range. Page fetch blocked (403), so on-page details are not verified. Weakness: not a distributor, no local stock, no technical support, wrong product range; strength: prices and Product-style pages for "price" intent.
- **Desertcart Tanzania** (https://tanzania.desertcart.com/products/112599176-ultracolor-plus-coloured-grout-anthracite-114-by-mapei): same model; fetch blocked (403).

### 3.6 Marketplaces and classifieds

- **Jiji Tanzania**: the category page https://jiji.co.tz/165-tile-adhesives ranks fourth on Yahoo for "Mapei tile adhesive Tanzania" and https://jiji.co.tz/building-materials appears for "Mapei price Tanzania". Whether any Mapei-branded ad exists on jiji.co.tz: not verified (403). For comparison, Mapei Mapelastic ads do exist on Jiji Kenya (https://jiji.co.ke/nairobi-central/building-materials/mapei-mapelastic-foundation-z0km1fxna39aTpbqBcq2JyYi.html).
- **Kupatana**: the search page https://kupatana.com/tz/search?q=mapei returned zero items in its page data when fetched (caveat: I could not confirm the site honours the `q` parameter).
- **ZoomTanzania**: fetch blocked (403); not verified.

### 3.7 Tile showrooms and hardware chains

- **CTM Tanzania** (https://www.ctm.co.tz/): Magento store; site search for "mapei" returns "Your search returned no results" (https://www.ctm.co.tz/catalogsearch/result/?q=mapei). CTM promotes its own "ProGrip adhesives and grouts". Its Arusha store page appears for "Mapei Arusha" only by city match.
- **Kamaka Company Limited** (https://www.kamaka.co.tz/): hardware importer whose corporate office is "Plot No.27, Mikocheni, Coca Cola Road, Dar es Salaam" - the same road as Sahihi. No "Mapei" on its home page; it surfaced on Yahoo for "Mapei supplier Tanzania". robots.txt and sitemap.xml both 404.
- **Marango Ltd** (https://marango.co.tz/products): building-materials importer; lists generic waterproofing systems, no "Mapei" on the pages fetched.
- **Kamal Steels Limited**: an exhibitor listing surfaced for "Mapei products Tanzania" (https://afrotrade.net/eite2023/connect.php?id=318); the page errored on fetch, Mapei connection not verified.
- **Sika Tanzania** (https://tza.sika.com/en/where-to-buy-building-materials.html, title "Get Best Building Materials in Tanzania - Find Official Suppliers - Sika Tanzania", H1 "Find Sika Distributors"): a competitor brand's distributor page that already shows up on page 2 for "Mapei distributor Tanzania". Sika Tanzania describes itself as a fully owned Sika Group subsidiary established in Dar es Salaam in 2016 (https://tza.sika.com/en/about-us/company-profile.html, as summarised by the search tool; page not fetched); expect it and Sikapex (http://www.sikapex.co.tz/) around generic adhesive and waterproofing terms.

### 3.8 Regional resellers that rank for Mapei product names (benchmarks for East Africa)

| Company | Country | Site / platform | Signals | Source |
|---|---|---|---|---|
| Sapio Building Solutions | Uganda (Kampala) | WordPress + Elementor; product pages with Technical Data Sheet and Safety Data Sheet sections | Says "authorized distributors of ... Mapei ... in Uganda". Home title just "Sapio Building Solutions"; no meta descriptions; no H1 on home or product page; no JSON-LD; default WordPress sitemap. Ranks first on Yahoo for "Mapelastic Tanzania". | https://sapioafrica.com/ , https://sapioafrica.com/mapelastic-smart/ |
| Modern Floors (U) Limited | Uganda | WordPress + WooCommerce + Elementor | Product page H1 "Mapelastic Smart"; only BreadcrumbList schema; no meta description. Ranks second for "Mapelastic Tanzania". | https://modernfloorsolutions.com/product/mapelastic-smart/ |
| BuildSeal Technical Systems | Kenya | WordPress + WooCommerce | Product page with a KSh price and `Product`/`Offer` JSON-LD; no meta description. | https://buildseal.co.ke/product/mapelastic-smart/ |
| Build Centre | Rwanda (Kigali) | Squarespace shop | `Product`, `Offer`, `LocalBusiness`, `Organization` JSON-LD; meta description present. Ranks for "Keraflex Tanzania". | https://buildcentreafrica.com/shop-1/p/keraflex-maxi-s1 |
| epoxyresinflooring.co.ke | Kenya | WordPress (Yoast-style schema graph) | Landing page titled "WaterProofing Products Seller Shop in Kenya Nairobi" targeting Mapei Planiseal; body text lists "Dar es Saalam Tanzania" among service areas. | https://epoxyresinflooring.co.ke/mapei-waterproofing-products-expert-seller-shop-kenya-nairobi/ |
| CretePro Trading | UAE (Dubai) | WordPress + WooCommerce + Yoast | Good title/description pattern ("Mapelastic Smart Waterproofing Membrane - CretePro Trading"), FAQPage schema on home. | https://creteprotrading.com/product/mapelastic-smart/ |

Lesson: **a plain per-product page on a regional reseller's site is enough to rank for "[Mapei product] Tanzania" today**, even from Uganda, Rwanda or Dubai, because no Tanzanian page competes. None of these benchmark sites combines all of: unique title, meta description, product H1, Product schema, datasheet, local contact.

---

## 4. Difficulty grades and the play for each query

Grades follow the brief: EASY = no credible direct answer; MEDIUM = one or two real answers; HARD = entrenched domain or the brand itself. Grades are based on Brave-TZ and Yahoo only; Google may differ.

| Query | Grade | Reality check | Page on our site that should own it | The play |
|---|---|---|---|---|
| Mapei Tanzania | MEDIUM | One real answer (Mlinzi, weak on-page, strong domain). Mapei's own result is a country selector with no Tanzania entry. | **Home page** plus a **/mapei/ brand hub** | Title leads with "Mapei Tanzania". Hub lists every Mapei line and product stocked, authorization proof, datasheets, WhatsApp. Organization + LocalBusiness schema with `brand` Mapei. |
| Mapei distributor Tanzania | MEDIUM | Mlinzi, then social profiles and a Kenyan applicator. | **/mapei/ hub** (section "Authorized Mapei distributor in Tanzania") and **About/Authorization page** | Publish the authorization letter or certificate (with Mapei's consent), "distributor since" year, territory, Mapei East Africa contact. Seek dealer-locator listing. |
| Mapei Dar es Salaam | MEDIUM | Mlinzi contact page ranks first. | **Contact / showroom page** | Full NAP (Coca-Cola Road, Mikocheni B), map embed, hours, photos, LocalBusiness schema, Google Business Profile with "Mapei" in services/products. |
| Mapei products Tanzania | MEDIUM | Mlinzi home; Ubuy brand page. | **/mapei/ hub** and **category pages** | Filterable catalogue with real per-product pages; more products and far more depth than Mlinzi's 43 thin pages. |
| Mapei tile adhesive Tanzania | EASY | Brave shows zero Tanzanian results; Yahoo shows Mlinzi's home page and a Jiji category. | **Category page: Mapei tile adhesives** | Selection table (Keraset, Kerabond, Adesilex P9, Keraflex Maxi S1, Ultralite, Kerapoxy) by tile type and substrate, EN 12004 classes, coverage, links to product pages. |
| Mapei waterproofing Tanzania | MEDIUM | mapei.com/za line page first on Brave; Mlinzi home; Nanocube. | **Category page: Mapei waterproofing** | System pages by use (roof slab, wet room, water tank, basement, pool) with Mapelastic, Planiseal, Purtop, Idrostop; Tanzania climate content; project photos. |
| Mapei grout Tanzania | EASY | Only import shops with US-market SKUs. | **Category page: Mapei grouts** | Ultracolor Plus, Keracolor, Kerapoxy range with colour chart, joint-width guide. |
| Mapei supplier Tanzania | MEDIUM | Mlinzi contact page. | **/mapei/ hub** (same page as "distributor"; use "supplier" and "stockist" in copy and H2s) | One page, several synonyms; do not create near-duplicate pages. |
| Mapei dealer Dar es Salaam | MEDIUM | Mlinzi only. | **Contact / showroom page** plus **dealer/reseller page** | "Become a Mapei reseller" and "Where to buy" sections; Google Business Profile. |
| Mapei Zanzibar | EASY | No relevant page exists. | **Delivery/area page: Zanzibar** | Only if genuine: delivery method by ferry, lead times, hotel/resort and marine-exposure use cases, any Zanzibar projects or stockists. |
| Mapei Arusha | EASY | No relevant page exists. | **Delivery/area page: Arusha** | Same rule: real logistics, stockists, projects. |
| Mapei Mwanza | EASY | No relevant page exists. | **Delivery/area page: Mwanza** | Same. |
| Mapei Dodoma | EASY | No relevant page exists. | **Delivery/area page: Dodoma** | Same; government/institutional project angle if true. |
| Mapelastic Tanzania | MEDIUM | Two Ugandan sites and Mlinzi's thin page. | **Product pages**: Mapelastic, Mapelastic Smart, Mapelastic Foundation, Mapelastic AquaDefense (plus a short family overview on the waterproofing category) | Title "Mapei Mapelastic Smart in Tanzania - ...", pack sizes, consumption, TDS/SDS, application steps, FAQs, WhatsApp enquiry, Product schema without price. |
| Keraflex Tanzania | EASY | No Tanzanian result; Mlinzi's page does not rank. | **Product page: Keraflex Maxi S1** (and other Keraflex variants stocked) | As above. |
| Kerapoxy Tanzania | EASY | Only mapei.com and PDFs. | **Product pages: Kerapoxy, Kerapoxy CQ, Kerapoxy Design** | As above, plus colour chart and hygiene/food-area use cases. |
| Mapei price Tanzania | MEDIUM | Mlinzi home (no prices) and import shops that do show prices. Intent conflicts with our no-price rule. | **"Mapei prices in Tanzania - request a quote" page** linked from every product page | Be honest: explain what drives price (pack size, volume, delivery), offer same-day WhatsApp quotes and downloadable trade price list on request. Will rank, but expect some bounce to sites that show a number. |
| wapi kununua Mapei Tanzania | EASY | No Swahili Mapei content exists at all. | **Swahili "Wapi kununua Mapei Tanzania" page** (and ideally a Swahili version of the hub) | Proper Swahili copy written by a native speaker, `hreflang="sw-TZ"`, WhatsApp-first. Volume unknown (no data). |

No query in this set graded HARD in the indexes I could see. The HARD territory is elsewhere: bare "Mapei" (the brand), and "Mapei Kenya", where Mapei East Africa Ltd itself and several Kenyan resellers sit (not measured in this report).

---

## 5. Verdict: is number 1 for "Mapei Tanzania" realistic?

**Yes, it is realistic - but not immediate, and one fact about the incumbent must be settled first.**

### Why it is realistic

1. **The brand does not compete for the query.** mapei.com has no Tanzania country site, no Kenya site (Kenya points to the UAE site), and no Tanzania option in its regional contact form (section 2). Its result for "Mapei Tanzania" is a generic country selector.
2. **There is exactly one local incumbent and its on-page SEO is close to absent**: 54 of 58 pages titled "MLINZI", no meta descriptions, template placeholder H1 on every page, no sitemap, no robots.txt, no structured data, placeholder testimonials and team, a duplicate copy on a second domain (section 3.1).
3. **Everything else in the top 10 is filler**: Instagram and LinkedIn profiles, 2018 press releases, South African and US Mapei pages, import shops.
4. **Regional evidence**: thin single product pages from Uganda, Rwanda and Dubai rank for "[product] Tanzania" (section 3.8). A properly built Tanzanian catalogue should take the product-name, city and Swahili queries first (the EASY rows), and those wins feed the head term.

### What it specifically takes

- **Title pattern.**
  - Home: `Mapei Tanzania - Authorized Mapei Distributor in Dar es Salaam | Sahihi Construction Chemicals` (if that is too long for the owner's taste, keep the first clause intact: "Mapei Tanzania - Authorized Distributor | Sahihi").
  - Brand hub (/mapei/): `Mapei Products in Tanzania - Tile Adhesives, Grouts, Waterproofing | Sahihi`.
  - Category: `Mapei Waterproofing in Tanzania - Mapelastic, Planiseal, Purtop | Sahihi`.
  - Product: `Mapei Mapelastic Smart in Tanzania - Flexible Waterproofing Membrane | Sahihi`.
  - Contact: `Mapei Dealer in Dar es Salaam - Showroom, Mikocheni B | Sahihi`.
  - Each page gets a unique H1 and a hand-written meta description. This alone is something the incumbent does on zero pages.
- **Per-product pages** for every Mapei product actually stocked - at least matching Mlinzi's 43, each with: product-name H1, what it is for, where to use it in Tanzanian conditions, pack sizes, consumption/coverage, TDS and SDS downloads (hosted or linked with Mapei's permission), related system products, FAQs, WhatsApp and enquiry form, `Product` schema with `brand: Mapei` (no price needed), breadcrumbs.
- **A Mapei link or listing.** Ask Mapei East Africa (Nairobi, +254 709 045 000 per the archived contact page) to (a) add Sahihi to the dealer locator at mapei.com/ae/en/dealer-locator with the website URL, and (b) tag or mention Sahihi in a LinkedIn/Instagram post (they already post about Dar es Salaam trainings). A link from mapei.com is the strongest relevance and trust signal available for this exact query. Whether Mapei gives followed links from its locator: not verified.
- **Google Business Profile** for "Sahihi Construction Chemicals Limited" at Coca-Cola Road, Mikocheni B: correct category (building materials supplier / construction chemicals), "Mapei" in the description, products and services, photos of Mapei stock, the sahihicc.com URL, and a steady flow of real reviews. This is what wins "Mapei Dar es Salaam" and "dealer" queries in the map pack. Competitors' profiles: not verified.
- **Technical basics the incumbent lacks**: robots.txt, XML sitemap, canonical tags, Organization + LocalBusiness JSON-LD (name, address, geo, telephone, sameAs), fast mobile pages, Search Console and Bing Webmaster verification from day one, descriptive image alt text.
- **Local citations and links**: consistent name/address/phone on Tanzanian directories and trade bodies, supplier pages of contractors and architects, project case studies, and links from the other principals (X-Calibur, Oriental Yuhong, CMCI, BIHUI distributor lists) - a new domain needs these to be trusted.
- **Proof of authorization on the site** (certificate or letter, with Mapei's written consent to display it and to use the Mapei name and logo).
- **Patience.** sahihicc.com was registered on 2026-07-15 and has no content yet. Realistic sequence: EASY product, city and Swahili queries first (weeks to a few months after indexing), then "distributor/supplier/dealer" terms, then "Mapei Tanzania". I cannot give a verified timeline; no ranking is guaranteed.

### What could block it

1. **Mlinzi's authorization claim.** Mlinzi publicly states it is Mapei's authorized distributor in Tanzania and its domain contains "mapei". If Mapei's dealer locator or Mapei East Africa names Mlinzi and not Sahihi, Sahihi loses the strongest signal and risks a credibility problem. **Verify Sahihi's written authorization and its standing with Mapei East Africa before building the strategy on the word "authorized".**
2. **The Mlinzi-Sahihi relationship (not verified).** If they are the same business or successor, the plan changes completely (301 redirects from mlinzimapei.com and mlinzicc.com, keep the product URLs mapped one-to-one). If they are rivals, expect Mlinzi to react; fixing 54 titles is a one-day job for them, so do not rely on their weaknesses staying.
3. **Brand-new domain.** No age, no links, a parking page that search engines may already have crawled. Replace the parking page with a real indexable page (even a simple one with name, address, Mapei statement and WhatsApp) as soon as possible.
4. **Mapei launches its own East Africa or Tanzania pages.** If mapei.com adds a /ke/ or /tz/ site, the brand will take position 1 for "Mapei Tanzania" and the distributor's ceiling becomes position 2 plus the map pack. That is outside Sahihi's control.
5. **Trademark and brand rules.** Using "Mapei" in page titles, domain paths and Business Profile is normal for an authorized distributor but should be cleared with Mapei; a Business Profile named "Mapei Tanzania" rather than the legal company name risks suspension under Google's naming rules.
6. **"Price" intent.** A no-price catalogue cannot fully satisfy "Mapei price Tanzania"; import shops showing prices will keep part of that traffic.
7. **Thin city pages.** Zanzibar/Arusha/Mwanza/Dodoma pages built from a template with only the city name swapped can be treated as doorway pages. Build them only with real logistics, stockists or projects.
8. **Google is unmeasured here.** All of the above is inferred from Brave and Yahoo. Google may weigh mapei.com country pages, Mlinzi's Business Profile or other sites differently.

### East Africa (Kenya, Uganda, Rwanda) in one paragraph

Number 1 for "Mapei Kenya" is not a realistic target for a Tanzanian distributor: Mapei East Africa Ltd is headquartered in Nairobi and Kenyan resellers (Nanocube, BuildSeal, epoxyresinflooring.co.ke, Jiji Kenya sellers) already hold local relevance. Uganda has Sapio Building Solutions claiming authorized-distributor status and Rwanda has Build Centre. What is realistic is ranking product-name queries region-wide ("Mapelastic Smart East Africa", "Kerapoxy price Dar es Salaam delivery to ...") with strong product pages, and adding country delivery pages only where Sahihi is actually allowed by Mapei to sell and can deliver. Territory rights outside Tanzania: not verified.

---

## 6. Top 10 actions

1. **Settle the authorization and the Mlinzi question this week.** Get Sahihi's Mapei distributor letter in hand; ask Mapei East Africa who is listed for Tanzania in the dealer locator (https://www.mapei.com/ae/en/dealer-locator) and check it manually by searching "Dar es Salaam". Confirm whether Mlinzi (mlinzimapei.com, mlinzicc.com) is related to Sahihi.
2. **Replace the Namecheap parking page on sahihicc.com now** with a minimal indexable page: company name, "Authorized Mapei distributor in Tanzania", address, phone, WhatsApp, with a proper title. Add robots.txt and verify the domain in Google Search Console and Bing Webmaster Tools.
3. **Launch with the title system in section 5**: home page leading with "Mapei Tanzania", a /mapei/ brand hub, category pages (tile adhesives, grouts, waterproofing, flooring, concrete repair, admixtures, sealants), and unique titles/H1s/descriptions on every page.
4. **Build per-product pages for every stocked Mapei product (target: more than Mlinzi's 43)**, starting with the ones that already show demand signals in the SERPs: Mapelastic Smart, Mapelastic, Mapelastic Foundation, Mapelastic AquaDefense, Planiseal 88, Keraflex Maxi S1, Kerapoxy, Kerapoxy CQ, Ultracolor Plus, Adesilex P9, Keraset, Kerabond T, Mapefloor, Topcem, Primer G, Mapesil AC. Each with TDS/SDS, pack sizes, coverage, FAQs, WhatsApp enquiry and Product schema.
5. **Get the Mapei backlink and mention**: dealer-locator listing with URL, and a tagged post from Mapei East Africa's LinkedIn and @mapeieastafrica Instagram; offer to host or co-brand the next Dar es Salaam training and publish a page about it.
6. **Create and fully populate the Google Business Profile** at Coca-Cola Road, Mikocheni B (legal name, correct category, Mapei products, photos, hours, website), then build a review habit with contractors and applicators.
7. **Add structured data and technical hygiene**: Organization + LocalBusiness JSON-LD site-wide, Product + BreadcrumbList on product pages, FAQPage where genuine, XML sitemap, canonical tags, lowercase hyphenated URLs (for example /mapei/mapelastic-smart/).
8. **Publish the uncontested pages early**: a Swahili "Wapi kununua Mapei Tanzania" page (hreflang sw-TZ), a "Mapei prices in Tanzania - request a quote" page, and genuine delivery pages for Zanzibar, Arusha, Mwanza and Dodoma (only with real logistics/stockist/project content).
9. **Build local authority**: consistent NAP citations in Tanzanian directories, links from the other principals' distributor lists (X-Calibur, Oriental Yuhong, CMCI, BIHUI), project case studies with contractor and architect partners, and a dated, authored technical blog (waterproofing in coastal humidity, tiling large-format porcelain, pool and water-tank systems) - the incumbent has three undated posts.
10. **Measure on Google, not on this report**: track the 18 queries in Search Console and with a Tanzania-located rank check monthly; add Kenya/Uganda views later. Revisit the grades once real Google positions and impressions exist, since this research had no Google or search-volume data.
