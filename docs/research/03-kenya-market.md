# 03 - Kenya market, SERP record and reach strategy (research date 2026-11-05)

Prepared for: Sahihi Construction Chemicals Limited (Dar es Salaam, sahihicc.com)
Scope: can a Tanzanian distributor's .com site win search demand in Kenya, for which queries, and with what site architecture.

## 0. Method and limits (read this first)

- **Search source.** SERP records come from the WebSearch tool available to this agent. It is US-only. It is not google.co.ke, it is not geo-located to Nairobi or Mombasa, and it returns a link list, not a rendered Google page (no local pack, no ads, no AI overview, no "People also ask"). Treat every "position" below as "order returned by the tool from a US vantage point", not as a Kenyan Google rank. A Kenyan searcher will see more local results (map pack, .co.ke sites, Jiji) than these lists show.
- **One run per query.** Each of the 13 required queries was run once. After 19 successful searches the session-wide search budget (shared by all agents) was exhausted, so there were no re-runs, no query variants, no `site:` index checks, and several planned discovery searches (Fosroc Kenya, Dr. Fixit Kenya, OYH East Africa, X-Calibur EA, Sahihi's own footprint) did not run. Where that leaves a gap it is marked "not verified".
- **Page audits.** Done by fetching raw HTML with an HTTP client (browser user-agent) and reading title, meta description, canonical, hreflang, H1, JSON-LD types, robots.txt and sitemap.xml. No browser rendering, so JavaScript-injected content and schema are not seen. Platform is inferred from markup signals, not confirmed by the owner.
- **Blocked sites.** mapei.com returned HTTP 403 to every automated request (all country paths), so Mapei's own pages are cited from search-result summaries only and are not page-verified. tacc.co.ke (Tile and Carpet Centre), idealceramics.com, jiji.co.ke and bostik.com/kenya returned a Cloudflare challenge (403) and were not audited. bascopaints.com (Duracoat) timed out.
- **No tool data.** No Ahrefs/Semrush/Search Console access. There are no search volumes, no domain ratings and no backlink counts in this report. Difficulty grades are judgment from the observed result sets and page quality, not measured metrics.
- **Titles.** Page titles are transcribed as found, except that typographic dashes are written as plain hyphens.

---

## 1. SERP record (13 queries)

Order = order returned by the tool. "Type" is my classification. Irrelevant noise results (travel pages, unrelated Wikipedia entries) are summarised, not listed.

### 1.1 "Mapei Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | stoneworld.com | US trade press | 2019 item "MAPEI extends international presence to East Africa" - https://www.stoneworld.com/articles/90517-mapei-extends-international-presence-to-east-africa |
| 2 | mapei.com/it/en | Manufacturer magazine article | "Infrastructures: a real driver of growth for Africa" - https://www.mapei.com/it/en/realta-mapei/detail/infrastructures-a-real-driver-of-growth-for-africa |
| 3 | concretetrends.co.za | South African trade press | https://concretetrends.co.za/?p=43409 |
| 4 | mapei.com/ca/en-ca | Manufacturer locations page (Canadian site) | "Our Global Locations" filtered to Africa - https://www.mapei.com/ca/en-ca/about-us/Our-Global-Locations?continent=africa |
| 5 | en.wikipedia.org | Encyclopedia | "Mapei" - https://en.wikipedia.org/wiki/Mapei |
| 6 | mynewsdesk.com | Press room (Sweden) | https://www.mynewsdesk.com/se/mapei-2/search |
| 7 | cbinsights.com | Company profile | https://www.cbinsights.com/company/mapei/alternatives-competitors |
| 8-10 | wikipedia, expedia, fortune | Noise | "Mpeketoni", "Mapepie" travel pages etc. |

Finding: no Kenyan-domain page, no Kenyan Mapei landing page and no Kenyan dealer in the list. The Kenya office is surfaced through Mapei's Canadian site.

### 1.2 "Mapei distributor Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | mapei.com/ca/en-ca | Manufacturer locations page | "Our Global Locations" - https://www.mapei.com/ca/en-ca/about-us/Our-Global-Locations?continent=africa |
| 2 | tunnelingonline.com | US trade press, 2018-12-07 | "MAPEI Extends International Presence to East Africa" - https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/ |
| 3 | stoneworld.com | US trade press | same release - https://www.stoneworld.com/articles/90517-mapei-extends-international-presence-to-east-africa |
| 4 | forconstructionpros.com | US trade press | same release - https://www.forconstructionpros.com/concrete/press-release/21035718/mapei-corporation-usa-mapei-extends-international-presence-to-east-africa |
| 5 | mapei.com/my/en | Manufacturer branch list (Malaysian site) | "Branch offices and plants" page 6 - https://www.mapei.com/my/en/contact-us/branch-offices-and-plants?page=6 |
| 6 | tileletter.com | US trade press | https://www.tileletter.com/?p=17220 |
| 7 | adhesivesmag.com | US trade press | "MAPEI Opens East Africa Subsidiary" - https://adhesivesmag.com/articles/96622-mapei-opens-east-africa-subsidiary |
| 8 | en.wikipedia.org | Encyclopedia | "Mapei" |
| 9 | concretetrends.co.za | Trade press | https://concretetrends.co.za/?p=43409 |
| 14 | jiji.co.ke | Classified listing | "Mapelastic Foundation ..." - https://jiji.co.ke/nairobi-central/building-materials/mapelastic-foundation-best-for-alkali-salty-water-areas-xDU1ooO9UAsbMhIygvFOAW8Z.html |

Finding: the "distributor" intent is answered by 2018-2019 press releases. No dealer-locator page for Kenya appears.

### 1.3 "Mapei Nairobi"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | stoneworld.com | Trade press | 2019 launch item (URL above) |
| 2 | concretetrends.co.za | Trade press | https://concretetrends.co.za/?p=43409 |
| 3 | mapei.com/ae/en | Manufacturer contact page (UAE site) | "Mapei Middle East & East Africa" - https://www.mapei.com/ae/en/contact-us |
| 4 | jiji.co.ke | Classified listing | "Mapei Ultraplan Contract self levelling compound 25kgs" - https://jiji.co.ke/nairobi-central/building-materials/mapei-ultraplan-contract-self-levelling-compound-25kgs-iLJuuptJ9tCTV9ayGRZKR771.html |
| 5 | mapei.com/ca/en-ca | Locations page | (URL above) |
| 12 | jiji.co.ke | Classified listing | "Mapei Adesilex PG4 and PG2 epoxy based structural adhesive kit" - https://jiji.co.ke/nairobi-central/building-materials/mapei-adesilex-pg4-and-pg2-epoxy-based-structural-adhesive-kit-uvTBVThvqIiTKCbWTMjWK1EZ.html |
| rest | travelocity, wikipedia, expedia, yellowpages-uae | Noise | |

### 1.4 "Mapei tile adhesive Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | buco.co.za | South African retailer product | Mapeset ceramic tile adhesive 20kg - https://buco.co.za/tile-adhesive-ceramic-20kg-mapaset-1327612 |
| 2 | shabbirihardware.com | Kenyan hardware blog post | "Top tile adhesive brands ... Kenya" - https://shabbirihardware.com/blog/top-tile-adhesive-brands-akfix-fevicol-tangit-kenya (returned HTTP 404 when fetched on 2026-11-05) |
| 3 | toolstation.com | UK retailer product | https://toolstation.com/mapei-floor-wall-tile-adhesive/p63842 |
| 4 | mapei.com/za/en | Manufacturer category (South Africa) | Standard adhesives, with "Dealer locator" - https://www.mapei.com/za/en/products-and-solutions/products/products-for-ceramics-and-stone-materials/standard-adhesives |
| 5 | fepy.com | UAE e-commerce product | Mapei Keraset 20kg |
| 6 | leroymerlin.co.za | SA retailer product | Mapei Keraset-R 20kg |
| 7-13 | screwfix, indiamart, diy.ie, bowens.com.au etc. | Foreign retailers | |
| 14 | jiji.co.ke | Classified category | Tile adhesives - https://jiji.co.ke/165-tile-adhesives |

Finding: no Kenyan product page for a Mapei tile adhesive appears at all. Foreign retailers fill the list.

### 1.5 "Mapei waterproofing Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | jiji.co.ke | Classified listing | "Mapei Mapelastic Smart waterproofing flexible cementitious coating" - https://jiji.co.ke/embakasi/building-materials/mapei-mapelastic-smart-waterproofing-flexible-cementitious-coating-leodwIvd2nGTBRUkXpG0FXsv.html |
| 2 | jiji.co.ke/sw | Classified listing (Swahili path) | "Mapei Aquaflex Roofplus liquid waterproofing membrane 20kgs" - https://jiji.co.ke/sw/nairobi-central/building-materials/mapei-aquaflex-roofplus-liquid-waterproofing-membrane-20kgs-nls4HrLzPe84cHmGplY9NMH3.html |
| 3 | homedepot.com | US retailer Q and A | Mapelastic AquaDefense |
| 4 | mapei.com/za/en | Manufacturer news (South Africa) | https://www.mapei.com/za/en/news-and-events?topic=mapelastic |
| 5 | mapei.com/my/en | Manufacturer line page (Malaysia) | https://www.mapei.com/my/en/products-and-solutions/lines/waterproofing-products |
| 6-7 | environdec.com | EPD documents | |
| 12 | standardmedia.co.ke | Kenyan news | "Saudi firm enters Kenyan market with eyes on waterproof technology" - https://www.standardmedia.co.ke/business/real-estate/article/2001499585/saudi-firm-enters-kenyan-market-with-eyes-on-waterproof-technology |
| 15, 18 | shabbirihardware.com | Kenyan hardware blog | "waterproofing solutions guide kenya" (the sibling URL returned 404 on fetch) |

In a separate extended search, a Kenyan applicator page also appeared: epoxyresinflooring.co.ke "WaterProofing Products Seller Shop in Kenya Nairobi" (Flexo Concepts, Mapei Planiseal and Mapelastic AquaDefense) - https://epoxyresinflooring.co.ke/mapei-waterproofing-products-expert-seller-shop-kenya-nairobi/

### 1.6 "Mapei Mombasa"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | mapei.com/cn/en-cn | Manufacturer branch list (China site) | https://www.mapei.com/cn/en-cn/contact-us/branch-offices-and-plants?page=2 |
| 2-3 | en.wikipedia.org | Encyclopedia | "Mombasa Island", "Mombasa" |
| 4 | stoneworld.com | Trade press | 2019 Nairobi launch item |
| 5 | mapei.com/eg/en | Manufacturer news (Egypt) | https://www.mapei.com/eg/en/news-and-articles?year=2025 |
| rest | Google Arts, Merriam-Webster, hoppa etc. | Noise about the city | |

Finding: nothing on the web answers this query. No Mapei office, dealer or stockist page for Mombasa was returned.

### 1.7 "Mapei East Africa"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | adhesivesmag.com | Trade press | "MAPEI Opens East Africa Subsidiary" |
| 2 | forconstructionpros.com | Trade press | launch release |
| 3 | mapei.com/ae/en | Manufacturer contact page | "Mapei Middle East & East Africa" - https://www.mapei.com/ae/en/contact-us |
| 4 | tunnelingonline.com | Trade press | launch release |
| 5 | hardwoodfloorsmag.com | Trade press | https://hardwoodfloorsmag.com/2018/12/10/mapei-extends-international-presence-east-africa/ |
| 6 | mapei.com/ae/en | Manufacturer news | "Mapei Middle East & Africa Regional Meeting 2025 Held in Dubai" - https://www.mapei.com/ae/en/news-and-articles/event-detail/2025/07/21/mapei-middle-east---africa-regional-meeting-2025-held-in-dubai |
| 8 | stoneworld.com | Trade press | launch item |
| 9-10 | worldcement.com, agi.it | News | Mapei Egypt plant, April 2025 |

### 1.8 "construction chemicals Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | the-star.co.ke | Kenyan news, 2023 | "Long Chain helps to cut construction time, costs with chemicals" - https://www.the-star.co.ke/news/2023-12-21-long-chain-helps-to-cut-construction-time-costs-with-chemicals |
| 2 | master-builders-solutions.com | Manufacturer news, 2014 | "BASF opens concrete admixture production facility in Nairobi, Kenya" - https://www.master-builders-solutions.com/en-asiapacific/about-us/news/basf-opens-concrete-admixture-production-facility-in-nairobi-kenya |
| 3-5 | hydrocarbonprocessing.com, africanreview.com, worldcement.com | Trade press, 2014 | same BASF plant story |
| 6 | constructionkenya.com | Kenyan trade press | X-Calibur Nairobi plant - https://constructionkenya.com/3356/x-calibur-nairobi-chemicals-plant (returned 404 on fetch) |
| 12 | fosroc.com | Manufacturer news, 2016-07-28 | "Fosroc enters East African market with investment in new manufacturing facility in Nairobi" - https://www.fosroc.com/news/fosroc-enters-east-african-market-with-investment-in-new-manufacturing-facility-in-nairobi |
| 15 | innovapriority.com | Foreign exporter country landing page | "Manufacturers, Exporters, Suppliers of Construction Chemicals - Innova Priority in Kenya" - https://www.innovapriority.com/kenya/construction-chemicals.html |
| 19 | thestandard.ke | Kenyan news | "PS Arumonyang: construction chemicals key to affordable housing" |
| 21 | allbusiness.africa | Directory | Pidilite East Africa - https://allbusiness.africa/business/pidilite-east-africa |

Finding: this head term is answered by old news. No Kenyan supplier category page sits in the top results. A foreign exporter's "/kenya/" landing page is in the list, which shows a non-Kenyan site can appear for it.

### 1.9 "waterproofing Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1-2 | bestcareservices.co.ke | Kenyan service page | "Waterproofing Services in Nairobi and Kenya" - https://bestcareservices.co.ke/waterproofing-services-in-nairobi-and-kenya/ |
| 3-4 | thestandard.ke / standardmedia.co.ke | Kenyan news | Anqa (Saudi firm) market entry |
| 5 | ken.sika.com | Manufacturer category | "Waterproofing" - https://ken.sika.com/en/construction/waterproofing.html |
| 6-7 | shabbirihardware.com | Kenyan hardware blog | waterproofing guides (404 on fetch) |
| 10 | adsoftheworld.com | Ad case study | Duracoat Aquatech Rainshield |
| 12, 14 | aliglaziers.co.ke | Kenyan retailer product | "KOLAS T7 Highly Fibrated Bitumen Emulsion" - https://aliglaziers.co.ke/Kolas-T7-Highly-Fibrated-Bitumen-Emulsion |
| 15 | mbcc.sika.com | Manufacturer country page | https://mbcc.sika.com/en-ke (HTTP 522 on fetch) |
| 16 | goafricaonline.com | Directory | https://www.goafricaonline.com/ke/directory/building-waterproofing |
| 17 | marcopolis.net | Interview/profile | Crown Paints Kenya, Permacote and Dr Fixit |
| 19 | jiji.co.ke | Classified listing | Fosroc Nitocote CM210 |
| 21 | crownpaints.co.ke | PDF | "Waterproofing Pricelist" 2023 |

### 1.10 "tile adhesive Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | crownpaints.co.ke | PDF data sheet | "Tile Adhesive TDS" - https://www.crownpaints.co.ke/wp-content/uploads/2014/10/Tile-Adhesive-TDS.pdf |
| 2, 6-10 | standardmedia.co.ke, the-star.co.ke, kenyanews.go.ke, nairobilawmonthly.com | Kenyan news, 2022 | Bamburi Cement launches tile adhesive |
| 3 | members.wto.org | Standard notification PDF | Kenya standard for tile adhesives (KS 2129-1) - https://members.wto.org/crnattachments/2023/TBT/KEN/23_09870_00_e.pdf |
| 4, 11 | jiji.co.ke | Classified category | https://jiji.co.ke/165-tile-adhesives |
| 12, 14 | ctm.co.ke | Retailer product and category | "ProGrip Superior Tile Adhesive - 25 Kg" - https://www.ctm.co.ke/progrip-superior-tile-adhesive-25-kg-product.html |
| 13, 18 | idealceramics.com | Retailer brand and product | Miritini / Stickatile - https://www.idealceramics.com/brands/miritini.html |
| 15, 17 | shabbirihardware.com | Hardware blog and brand page | Kalekim etc. |
| 16 | nation.africa | Kenyan news feature | "Tile adhesives or sand cement mixture" - https://nation.africa/kenya/life-and-style/dn2/tile-adhesives-or-sand-cement-mixture--3819924 |
| 19 | tacc.co.ke | Retailer product | "Kalekim Tile Adhesive: 1952 White 25kg" - https://tacc.co.ke/product/kalekim-tile-adhesive-1952-white-25kg/ |

Finding: local brands with shelf prices (ProGrip, Stickatile, Kalekim, Bamburi, Crown) own this term. Mapei is absent.

### 1.11 "epoxy flooring Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1, 5 | epoxyfloorsolutionskenya.lovable.app | Contractor site on a free app-builder subdomain | https://epoxyfloorsolutionskenya.lovable.app/ |
| 2-3 | bestcareservices.co.ke | Service directory page | "Epoxy Flooring Service in Nairobi, Kiambu and Kenya" |
| 4, 6 | achisystems.co.ke | Directory | epoxy floors services |
| 7 | cofe-eng-sol.pages.dev | Blog on a free hosting subdomain | "Epoxy flooring types Kenya" |
| 8-9 | bettercoat.blogspot.com | Blogspot posts, 2024 | |
| 10, 15 | industrialflooringkenya.blogspot.com | Blogspot, 2015-2016 | |
| 11 | fosroc.com | Manufacturer case study | "The Global Trade Centre, Kenya" - https://www.fosroc.com/case-studies/the-global-trade-centre |
| 12-13 | jiji.co.ke | Classifieds | |
| 14 | epoxy-tiles.vercel.app | Contractor site on a free subdomain | |

Finding: the softest result set of the 13. Free subdomains and decade-old Blogspot posts hold positions. Intent is contractor/service, not product supply.

### 1.12 "Oriental Yuhong Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | en.wikipedia.org | Encyclopedia | "Oriental Yuhong" - https://en.wikipedia.org/wiki/Oriental_Yuhong |
| 2-5 | wikipedia, businessdailyafrica.com, devex.com | Unrelated | "M Oriental Bank" and similar name collisions |
| 6 | prnewswire.co.uk | Press release, 2018 | "Oriental Yuhong Attends 2018 FOCAC Beijing Summit" - https://www.prnewswire.co.uk/news-releases/oriental-yuhong-attends-2018-focac-beijing-summit-692482221.html |
| rest | investchile, szse.cn, finance sites | Corporate/finance | |

Finding: zero Kenyan sellers, zero Kenyan pages. The query is unanswered.

### 1.13 "X-Calibur construction chemicals Kenya"

| # | Domain | Type | Title / what it is |
|---|---|---|---|
| 1 | constructionkenya.com | Kenyan trade press | X-Calibur Nairobi plant (404 on fetch) |
| 2, 7, 10 | standardmedia.co.ke | Kenyan news | "US construction firm shifts base to Nairobi" - https://www.standardmedia.co.ke/business/real-estate/article/2000178896/us-construction-firm-shifts-base-to-nairobi |
| 3-4, 8, 12 | constructionreviewonline.com | Trade press | "US firm now eyes construction market in Kenya" - https://constructionreviewonline.com/us-firm-now-eyes-construction-market-in-kenya/ |
| 5 | constructionreviewonline.com | Trade press | X-Calibur concrete technology training |
| 6, 9 | concretedecor.net | Trade press | Easycove names X-Calibur as distributor |
| 11, 13 | x-calibur.us | Manufacturer | old "demosite" news and about pages |

Finding: X-Calibur's own Kenyan site (x-calibur.co.ke, see 3.7) did not appear in this run, but it exists and is live.

---

## 2. Mapei East Africa Ltd

**What it is.** A Mapei Group subsidiary in Nairobi, announced in December 2018. Trade press carried the group statement: "Mapei East Africa Ltd will be focused on developing the markets in Kenya and surrounding countries - an area having almost 300 million citizens", and that it was "Led by Middle East and East Africa Regional Director, Stefano Iannacone" (published 2018-12-07; leadership may have changed since). Source: https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/ and https://hardwoodfloorsmag.com/2018/12/10/mapei-extends-international-presence-east-africa/

**Where.** Search summaries of Mapei's own location pages give the office as Grosvenor Building, Tatu City, Kiambu (Nairobi), phone +254 709 045 000, website mapei.co.ke (https://www.mapei.com/ca/en-ca/about-us/Our-Global-Locations?continent=africa and https://www.mapei.com/ae/en/contact-us - both 403 to my client, so not page-verified). The phone and website are independently confirmed on a Kenyan association member page: https://kaao.co.ke/members/mapei-east-africa-ltd/ A trade-data listing title gives "P O Box 9436 00100 Nairobi" (https://www.volza.com/company-profile/mapei-east-africa-ltd-p-o-box-9436-00100-nairobi-kenya-14698459/ - title only, page blocked).

**Web presence - verified.** `https://www.mapei.co.ke/` and `https://mapei.co.ke/` both return **301 to https://www.mapei.com/ae/en/home-page**, the UAE site (checked by HTTP request, 2026-11-05). So there is no standalone Kenyan Mapei website: the Kenyan domain is a redirect into the Middle East site, whose contact page is titled "Mapei Middle East & East Africa" (https://www.mapei.com/ae/en/contact-us). Whether a `/ke/` country section exists on mapei.com could not be tested (every mapei.com path, valid or not, returned 403 to my client). No `/ke/` URL appeared in any of the seven Mapei searches.

**SERP strength.** Weak on its own name. For "Mapei Kenya", "Mapei Nairobi", "Mapei distributor Kenya" and "Mapei East Africa", the results are 2018-2019 press releases on US trade sites plus Mapei's Canadian, Malaysian, Chinese and UAE pages that happen to list the Nairobi office (section 1.1-1.3, 1.7). No Kenyan product page, dealer locator or price page from Mapei was returned for "Mapei tile adhesive Kenya" or "Mapei waterproofing Kenya"; Jiji classifieds and foreign retailers fill those lists (1.4, 1.5). Caution: mapei.com is a very strong domain. If Mapei ever publishes a real Kenya section, it will outrank a distributor for brand terms.

**Territory - Tanzania and Uganda.** No page found that lists Mapei East Africa's countries explicitly. Evidence available:
- The 2018 statement says "Kenya and surrounding countries" with "almost 300 million citizens" - a population figure far larger than Kenya alone, which implies the wider region (my inference; no country list was published). Source: https://tunnelingonline.com/mapei-extends-international-presence-to-east-africa/
- The Kenyan association listing describes it as "Location East Africa; Kenya operation represented as Mapei East Africa Ltd": https://kaao.co.ke/members/mapei-east-africa-ltd/
- A trade-data listing title pairs the company with "Kenya, Uganda" and another states "USD 2.97 Million Imports and 22.78 Thousand Exports" (https://www.volza.com/company-profile/mapei-east-africa-ltd-p-o-box-9436-00100-nairobi-kenya-14698459/ and https://www.marketinsidedata.com/en/company/mapei-east-africa/21421026b2c3dcaa96f3286b94f72bf0). Both pages were blocked; these are titles only and **not verified**. If accurate, exports out of Kenya are small relative to imports.
- A search summary of Mapei South Africa's page says it distributes Mapei products throughout the SADC region (https://www.mapei.com/za/en/about-us/mapei-in-southern-africa - not page-verified). Tanzania belongs to both the EAC and SADC, so which Mapei entity (East Africa, South Africa, or Middle East) actually appoints and supplies Sahihi is unknown from public sources. **This is the first question for the owner.**
- A search for "Mapei Tanzania distributor Dar es Salaam" returned no Tanzanian Mapei distributor and no Sahihi page.

**Distributors and resellers in Kenya.** No official Kenyan dealer list was found. Observed sellers (authorization status of each is **not verified**):
- Shabbiri Hardware (Ongata Rongai and Tuala): 4 Mapei SKUs in its sitemap - Planiseal 88, Mapelastic Foundation, Mapetex Sel, Mapenet 150 - sold as "Genuine Mapei" with shelf prices (KSH 4,500 for Planiseal 88 20kg): https://shabbirihardware.co.ke/products/mapei-planiseal-88-grey-osmotic-waterproofing-cement-20kg-foundation-tank-concrete-waterproofing
- Flexo Concepts Limited (Nairobi applicator): "we are experts in use and application of waterproofing products from Mapei" - it does not claim to be an authorized distributor: https://epoxyresinflooring.co.ke/mapei-waterproofing-products-expert-seller-shop-kenya-nairobi/
- Jiji.co.ke sellers listing Mapelastic Smart, Aquaflex Roofplus, Ultraplan Contract, Adesilex PG4/PG2, Mapelastic Foundation (URLs in 1.2, 1.3, 1.5).

Reading: Mapei product is physically in the Nairobi market and has brand demand, but nobody - not Mapei, not a dealer - has built the Kenyan web presence for it.

---

## 3. Audit of the strongest Kenyan sites found

All checks 2026-11-05 on raw HTML. "No JSON-LD" means none in the served HTML.

| # | Site | Platform (inferred) | Title style | Schema | Per-product pages | Blog / guides | Blunders seen | Strength | Weakness to exploit |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Sika Kenya - https://ken.sika.com/ | Adobe Experience Manager markers (`/etc.clientlibs`) | Bare: home "Sika Kenya"; category "Waterproofing"; category "Tile Adhesives/Tilling"; product "SikaCeram®-100 GP is a general purpose, cementitious tile adhesive" | Organization + PostalAddress (home); BreadcrumbList (category, product). No Product schema | Yes - 112 URLs in products sitemap; 259 URLs incl. TDS PDFs in the SEO sitemap; 22 project URLs | No real blog ("whats-new-magazine" sitemap has 1 URL) | (a) Home and category pages have no meta description. (b) The Kenyan where-to-buy page carries the Tanzanian title "Get Best Building Materials in Tanzania - Find Official Suppliers \| Sika Tanzania" - https://ken.sika.com/en/where-to-buy-building-materials.html (c) "Tilling" typo in a category name and URL | Local legal entity and address (Josh Industrial Estate, Mombasa Road, Nairobi), country subdomain with en-KE hreflang, Kenya-specific SKUs ("KE" suffix), local TDS PDFs | Titles never say "Kenya" or the use case. No how-to, comparison or cost content. Template-driven, slow to react |
| 2 | Mapei East Africa - https://www.mapei.co.ke/ | n/a | n/a | n/a | n/a | n/a | Kenyan domain 301s to the UAE home page; no Kenyan catalogue | Brand and group domain authority | No Kenyan landing pages at all (section 2) |
| 3 | Shabbiri Hardware - https://shabbirihardware.co.ke/ | Custom Next.js storefront | "{Product} Kenya \| Shabbiri Hardware", e.g. "Mapei Planiseal 88 Waterproofing Cement Kenya \| Shabbiri Hardware"; meta description leads with price "KSH 4,500 in Kenya. Buy ..." | Product, Offer, Brand, BreadcrumbList, HardwareStore, Organization, WebSite + SearchAction | Yes - 1,263 product URLs in sitemap (1,268 total) | 2 guides in sitemap. Blog URLs that the search tool still returns (`/blog/...` on the old .com) now return 404 on both domains | Lost blog URLs with no redirects; two H1s on product pages; very long keyword-stuffed slugs; home H1 is a slogan | Best technical SEO of the set: prices, stock, schema, WhatsApp ordering, M-Pesa, Swahili touches ("Ukijenga, njoo Shabbiri") | General hardware shop: 4 Mapei SKUs, no specification support, product copy defers to "Mapei's current Technical Data Sheet". Cannot serve project buyers |
| 4 | CTM Kenya - https://www.ctm.co.ke/ | Magento markers | "CTM Kenya - {Product or Category}" | None in served HTML (home, category, product) | Yes, with prices (own ProGrip adhesive brand) | No blog/advice links found in home HTML | `/sitemap.xml` returns 404 (a sitemap may be declared elsewhere - not verified); no Product schema; robots.txt blocks AI crawlers (GPTBot, ClaudeBot, Google-Extended) | Regional retail group with a correct hreflang cluster: en-KE, en-ZA, en-NA, en-BW, en-TZ (https://www.ctm.co.tz/ is live) | Sells own-brand adhesives only; no technical content; opts out of AI crawlers, so it is unlikely to be cited by AI answer engines |
| 5 | Crown Paints Kenya - https://www.crownpaints.co.ke/ | Custom app (Livewire/Alpine markers) | Home "Crown Paints"; category good: "Waterproofing Products & Solutions in Kenya \| Crown Paints"; product pages fall back to "Crown Paints" | None | Yes, but see blunders | Blog is press releases and CSR news | (a) Product page https://www.crownpaints.co.ke/product/crownplast-waterproof-skimcoat has the default title "Crown Paints" and default description "Welcome to Crown Paint - Your source for quality paints." (b) sitemap.xml lists 130 URLs on the **staging** host (`https://staging.crownpaints.co.ke/...`). (c) No canonical tags | Household brand, dealer network, price list PDFs that rank | Product pages are effectively untitled; waterproofing range is 3 products (Damp Protek, Rain Protek, Crownplast Waterproof Skimcoat). Dr. Fixit link appears only in older third-party items (not verified as current) |
| 6 | Saj Ceramics - https://www.sajceramics.com/ | Squarespace | "Saj Ceramics - Great Tiles Great Value"; adhesives page titled "Ceramic Tiles \| Quality ceramic floor and wall tiles" | WebSite only | Squarespace product/category pages (1,153 sitemap URLs) | "News" with random-hash slugs (e.g. `/news/kycc7w42n4vx7cx3bf5yjlmzy7vcco-6d6jg`) | Malformed URLs in sitemap (`/https/wwwsajceramicscom/about`); 3 H1s on home; wrong title on the adhesives page | Local manufacturer, showroom on Mombasa Road, own adhesives (B400/B600/B800) | Tile-first; adhesives are an afterthought with no technical data |
| 7 | X-Calibur Construction Chemistry EA - https://www.x-calibur.co.ke/ | Wix | "X-Calibur Construction Chemistry EA Limited \| construction materials \| East Africa" | WebSite only | System and product pages (epoxy and urethane flooring, waterproofing, carbon fibre strengthening, expansion joints, e.g. `/x-tech-epoxyfloor-sl`) plus project pages by sector | None | No H1 in served home HTML; thin pages; did not appear for its own brand + Kenya query in my run | It is the brand's own Kenyan entity (Spedag Compound, Old Mombasa Road, Nairobi, +254 739 911 333 - also listed on https://www.x-calibur.us/contact-us) | Low content depth - but it is the legitimate owner of "X-Calibur Kenya" |
| 8 | Flexo Concepts - https://epoxyresinflooring.co.ke/ | WordPress + Yoast | Stuffed: "Epoxy Resin Flooring Expert Company Nairobi Kenya"; "WaterProofing Products Seller Shop in Kenya Nairobi" | Yoast graph (WebPage, Organization, BreadcrumbList) | 13 pages, 4 posts in total | Minimal | Keyword-stuffed navigation and titles; Mapei page is 867 words including menus | Exact-match .co.ke domain; one of the only Kenyan pages mentioning Mapei waterproofing | Thin and stuffed; an authoritative technical page beats it easily |
| 9 | Bestcare - https://bestcareservices.co.ke/ | Custom/CMS not identified | "Waterproofing Services in Nairobi and Kenya › 0709004600" (phone number in the title) | LocalBusiness, Service, OfferCatalog (home); BlogPosting + Organization (service page) | n/a - service directory pages | Programmatic service directory | Service page marked up as BlogPosting; robots.txt points to a sitemap URL that returns 404 | First result for "waterproofing Kenya" and two results for "epoxy flooring Kenya" in my runs; ~975-word page naming "certified products like Sika and BASF" | A facility-management generalist. Shows that the head terms carry service intent and are won locally |
| 10 | Kenbro Industries - https://kenbro.co.ke/ | Client-rendered single-page app | "Kenbro Industries Ltd \| Construction Solutions Provider in Kenya" | None in served HTML | Not visible without JavaScript | Not visible | Served HTML body is an empty `<div id="root">` (9 words of text); `/sitemap.xml` returns 404 | "50+ years" local name in waterproofing and flooring (its own meta description) | Content depends entirely on JS rendering |
| 11 | Ali Glaziers - https://aliglaziers.co.ke/ | OpenCart | "Ali Glaziers Ltd \| Glass, Polycarbonate & Hardware Nairobi" | HardwareStore, FAQPage, WebSite | Yes (Kolas bitumen emulsions rank for "waterproofing Kenya") | No | Its own robots.txt comments record that Google reported 93,622 "duplicate without user-selected canonical" and 63,227 "crawled - currently not indexed" URLs from faceted navigation | Stock and price pages | Glass and hardware shop, not a specialist |
| 12 | Fosroc - https://www.fosroc.com/ | Custom | "{Page} \| Fosroc" | None in served HTML | Global catalogue (1,518 sitemap URLs); only 1 URL mentions Kenya/Nairobi | Global news | No Kenya landing page found (Kenya is in its country selector, but `/kenya` redirects to page-not-found) | Announced a Nairobi manufacturing facility on 2016-07-28; Kenyan case studies | No local content layer |

Not auditable (bot challenge or timeout): Tile and Carpet Centre https://tacc.co.ke/ (sells Kalekim, per 1.10), Ideal Ceramics https://www.idealceramics.com/ (sells Miritini/Stickatile, per 1.10), Jiji https://jiji.co.ke/, Bostik https://www.bostik.com/kenya/en/, Duracoat/Basco https://www.bascopaints.com/. Henkel and Dr. Fixit/Pidilite did not surface with a Kenyan site in my runs (Pidilite East Africa appeared only as a directory entry: https://allbusiness.africa/business/pidilite-east-africa) - not verified further.

**Patterns.**
1. Multinationals with a Kenyan entity run a per-country site (Sika: ken.sika.com and tza.sika.com; CTM: .co.ke and .co.tz). They have the entity, address and stock to justify it.
2. The best-optimised Kenyan site is a hardware retailer, and its edge is price + stock + schema - exactly what a no-price catalogue site cannot copy.
3. Nobody publishes serious technical content: no system selection guides, no coverage calculators, no comparison pages, no standards explainers. That is the open lane.
4. Basic hygiene failures are everywhere (staging sitemap, default titles, wrong-country title, dead blog URLs, JS-only pages). A clean build is a real advantage.

---

## 4. Honest assessment: what can a Tanzanian .com win in Kenya?

**Starting position.** `https://sahihicc.com/` currently serves a "Namecheap Parking Page" (fetched 2026-11-05). There is no existing authority, no indexed content and no link profile to lean on. Everything below assumes a new site.

**Three constraints.**

1. **Mapei has its own Kenyan company.** Mapei East Africa Ltd sits in Nairobi with a stated remit of "Kenya and surrounding countries" (section 2). A Tanzanian distributor that advertises "Mapei distributor Kenya" is advertising inside the principal's home territory. Distribution agreements normally define a territory and often restrict active selling outside it. **Business/legal question for the owner, to settle before any Kenya or Uganda page goes live:** which Mapei entity appointed Sahihi, what territory is written into the agreement, does it allow active marketing (not just responding to unsolicited orders) into Kenya and Uganda, and would Mapei East Africa object? The same question applies to X-Calibur, which has its own Nairobi entity (https://www.x-calibur.co.ke/). I cannot answer this from public sources.
2. **Google's geo-relevance.** Google lists the signals it uses for country targeting: ccTLD, hreflang, server location, and "local addresses and phone numbers on the pages, the use of local language and currency, links from other local sites" plus Business Profile signals (https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites). Sahihi will have a Tanzanian address, +255 numbers, a Dar es Salaam Business Profile and mostly Tanzanian links. For queries with local intent ("... Kenya", "... Nairobi", "near me", anything that triggers a map pack) a Kenyan business wins by default. A .com is geo-neutral, which is better than .co.tz, but neutral is not Kenyan.
3. **No prices.** Kenyan product SERPs reward price and stock (Shabbiri, CTM, Jiji - section 3). A catalogue site with WhatsApp enquiry will not win "price" or "buy" queries in Kenya.

**Query classes.**

| Class | Verdict | Why |
|---|---|---|
| Brand + Kenya navigational ("Mapei Kenya", "Mapei Nairobi", "Mapei distributor Kenya") | **Do not target.** Technically soft, commercially dangerous | The SERP is old press releases (1.1-1.3), so a page could show up. But the honest answer to that query is Mapei East Africa Ltd, Sahihi is not a Kenyan distributor, and ranking there invites a channel conflict. Any page that ranks here should say plainly who Sahihi is and where it is |
| "X-Calibur Kenya" | **Do not target** | The brand's own Kenyan entity exists (3.7) |
| Head terms with local/service intent ("waterproofing Kenya", "tile adhesive Kenya", "epoxy flooring Kenya") | **Not winnable from Tanzania for the commercial intent** | Won by Kenyan service pages, retailers with prices, and local brands (1.9-1.11). An informational guide can get impressions, not the lead |
| Product + price/buy + Kenya ("Mapelastic Smart price Kenya") | **Not winnable** | Jiji and priced retailers; Sahihi shows no prices |
| Brands with no Kenyan web presence (OYH / Oriental Yuhong; BIHUI and CMCI **not checked**) | **Winnable, likely low volume** | "Oriental Yuhong Kenya" returned no Kenyan seller at all (1.12). OYH's global site lists China, Malaysia, Cambodia, Singapore, Hong Kong, USA and Mexico in its region selector, and its contact page has an "Africa" tab but no Kenya, Tanzania or Uganda text in the served HTML (https://www.oyhglobal.com/ and https://www.oyhglobal.com/contact.html). Absence of a Kenyan OYH distributor is "none found", not proven. Confirm territory with OYH, then this is the cleanest regional play |
| Product-level technical queries, geo-neutral ("Mapelastic Smart coverage", "Planiseal 88 mixing", "Keraflex vs Keraflex Maxi", "torch-on membrane thickness for flat roof") | **Winnable in part** | No country modifier, so geo matters less and Kenyans, Ugandans and Tanzanians all see the same page. Competition is mapei.com itself plus foreign retailers (1.4). Win the long tail by adding what the manufacturer page lacks: tropical-climate use, coverage tables per pack size, system build-ups, local substrate advice |
| Comparison and how-to ("tile adhesive vs sand cement", "cementitious vs bituminous waterproofing", "how to waterproof a flat roof / water tank / swimming pool", "epoxy vs polyurethane floor") | **Winnable - best lane** | Kenyan results here are a newspaper feature (1.10 #16), Blogspot posts and free-subdomain pages (1.11). No specialist has written the definitive East African version |
| Regional / cross-border supply ("construction chemicals supplier East Africa", "waterproofing membrane supplier East Africa", "Mapei East Africa" as an informational term) | **Winnable in part** | "East Africa" is a region Sahihi genuinely sits in, so the geo mismatch disappears. A foreign exporter's country landing page already appears for "construction chemicals Kenya" (1.8 #15). Needs a real export offer behind it |
| Mombasa - Dar es Salaam coastal corridor, project supply | **Plausible, unproven** | "Mapei Mombasa" returns nothing relevant (1.6) - an empty SERP. A page only earns its place if Sahihi has actually delivered to the Kenyan coast, and subject to constraint 1. Demand size is unknown (no volume data) |
| Specifier-led project demand (engineers and architects in Nairobi searching for strengthening, injection, mining, sports-floor systems) | **Winnable in part** | Niche systems where local stockists are thin (the only Kenyan structural-strengthening site found was X-Calibur EA). Decision makers search by system and standard, not by city |

**Bottom line.** Expect Kenya to deliver informational and specifier traffic plus occasional cross-border project enquiries, not retail leads. The realistic prize is: (1) own the East African technical-content layer that nobody has written, (2) own OYH (and possibly BIHUI/CMCI) regionally if those agreements allow it, (3) be the obvious "regional project supply from Dar" answer. Chasing "Mapei Kenya" head-on is the one move that could cost the owner more than it earns.

---

## 5. Recommended architecture for Kenya reach

**5.1 One domain, one English site.** Keep everything on sahihicc.com. Do not register or build a .co.ke or a Kenyan mirror: Sahihi has no Kenyan entity, address or stock, and Google's own guidance lists "multiple domain names or pages targeted at specific regions or cities that funnel users to one page" as a doorway example (https://developers.google.com/search/docs/essentials/spam-policies - paraphrased from the Doorway abuse section).

**5.2 A regional hub, then country pages only when they are real.**

```
/east-africa/                  regional supply hub (build at launch)
/east-africa/kenya/            only after the territory question is answered and content exists
/east-africa/uganda/           same test
/guides/...                    technical, comparison and how-to content (the main Kenya traffic engine)
/products/...                  one canonical page per product - never duplicated per country
```

- Launch with **/east-africa/** only. It covers the region honestly and is safe whatever the territory answer is.
- Add **/east-africa/kenya/** when the owner can truthfully fill it. Do not create city pages (Nairobi, Mombasa, Kisumu) and do not create country copies of product or category pages (`/kenya/mapei-keraflex/`). Those are the textbook doorway pattern.

**5.3 What a country page must contain to not be a doorway.** Each item must be unique to that country and true:

1. **What Sahihi can supply there, brand by brand.** A matrix: brand x country x status (authorized to supply / supplied on project basis / referred to local entity). For Mapei in Kenya this may honestly read "Mapei East Africa Ltd is Mapei's company in Kenya; Sahihi supplies Mapei in Tanzania and supports cross-border projects on request" - whatever the agreement permits.
2. **How supply actually works.** Route from Dar es Salaam, border post used, documents (EAC certificate of origin, standards-body requirements), who clears, incoterms offered, minimum order, typical lead time. Real numbers from past shipments only.
3. **Proof.** Named projects delivered in that country with product, quantity, year and photo. If there are none yet, the page is not ready.
4. **Local technical context.** Relevant national standards (for Kenya, the KEBS tile adhesive standard KS 2129-1 notified to the WTO: https://members.wto.org/crnattachments/2023/TBT/KEN/23_09870_00_e.pdf), climate zones that change the specification (humid saline coast vs highland), common local substrates.
5. **A country-specific contact path.** WhatsApp link with a prefilled "Enquiry from Kenya - project in ..." message, who answers, response time, currency and payment terms for exports.
6. **Unique FAQs** drawn from real enquiries from that country.

If the only thing that changes between /kenya/ and /uganda/ is the country name, do not publish either.

**5.4 hreflang: no.** hreflang exists to connect alternate versions of the same page for different languages or regions (https://developers.google.com/search/docs/specialty/international/localized-versions). /east-africa/kenya/ is not an alternate version of the home page; it is a different page with different content. Tagging the home page en-TZ and the Kenya page en-KE would tell Google they are substitutes and would hide the main site from Kenyan searchers - the opposite of the goal. Use hreflang only if a Swahili version of the same pages is added later (`en` and `sw`, each page pointing to the other and to itself, since "If two pages don't both point to each other, the tags will be ignored"). Set `<html lang="en">`, self-referencing canonicals, and no country targeting anywhere.

**5.5 Geo signals to add honestly.**
- Organization schema with the Dar es Salaam address, and `areaServed` listing only countries Sahihi really supplies.
- One Google Business Profile, for the real Dar es Salaam premises. No virtual office in Nairobi.
- Prices in the page stay absent; where currency is mentioned for exports, say USD and state it.
- Earn Kenyan and Ugandan links the legitimate way: project case studies with the contractor, regional trade press, exhibitor listings at regional construction shows, supplier directories.

**5.6 Content engine aimed at the region.** Guides framed "in East Africa" (with Tanzanian, Kenyan and Ugandan examples in one article) rank across all three countries without any country page. This is the mechanism that actually delivers Kenya reach.

---

## 6. Query grading

Grades are judgment from the result sets in section 1 and the page quality in section 3. No volume or difficulty metrics were available.

| Query (or class) | Grade | Owning page type | The play |
|---|---|---|---|
| Oriental Yuhong Kenya / OYH waterproofing Kenya | EASY | Brand page `/brands/oriental-yuhong/` + /east-africa/ | Empty SERP. Brand page with full range, TDS, "supplied across East Africa from Dar es Salaam". Confirm OYH territory first |
| OYH / Oriental Yuhong East Africa, OYH membrane specifications | EASY | Brand page + product pages | Be the only complete English catalogue for the brand in the region |
| Mapei Mombasa | EASY technically, blocked commercially | /east-africa/kenya/ (corridor section) | Empty SERP. Only publish if the agreement allows and coastal deliveries exist |
| Tile adhesive vs sand and cement | EASY-MEDIUM | Guide | Current answer is a newspaper feature. Write the definitive version with cost-per-m2 method (no prices), failure photos, C1/C2 classes |
| How to waterproof a flat roof / water tank / swimming pool / basement (East Africa) | MEDIUM | Guides, one per application | System build-ups, climate notes, product links. Kenyan competition is thin service pages |
| Cementitious vs bituminous vs liquid membrane | MEDIUM | Comparison guide | No Kenyan specialist content exists |
| Epoxy vs polyurethane flooring; epoxy flooring types and cost drivers | MEDIUM | Guide | SERP is Blogspot and free subdomains (1.11). Informational win; contractor leads stay local |
| Product technical long tail (Mapelastic Smart coverage, Planiseal 88 mixing, Keraflex Maxi S1 open time, Ultracolor Plus colours) | MEDIUM | Product pages | Add coverage tables, pack sizes, system partners, tropical-use notes, TDS download. Competes with mapei.com, wins the questions it does not answer |
| Construction chemicals supplier East Africa | MEDIUM | /east-africa/ hub | Real export offer: brands, logistics, documents, contact |
| Mapei East Africa (informational) | MEDIUM | /east-africa/ hub + Mapei brand page | Explain honestly who Mapei East Africa Ltd is and where Sahihi fits. Useful page, low conflict if worded with the owner's agreement in hand |
| Carbon fibre strengthening / crack injection / structural repair systems, East Africa | MEDIUM | Solution pages + case studies | Specifier audience, few local pages (only X-Calibur EA found) |
| Construction chemicals Kenya | MEDIUM-HARD | Guide "Construction chemicals in Kenya and East Africa: brands, suppliers, standards" | SERP is 2014-2016 news, and a foreign exporter's page appears. Informational angle only; Google Kenya will add local suppliers |
| Mapei tile adhesive Kenya / Mapei waterproofing Kenya | HARD | Mapei category pages (no country variant) | Result sets are weak (Jiji, foreign retailers) but intent is "buy in Kenya". Sahihi has no price and no Kenyan stock. Let product pages pick up what they can; do not build Kenya variants |
| Epoxy flooring Kenya | HARD (for the lead) | Guide only | Contractor intent. Informational impressions possible |
| Waterproofing Kenya | HARD | none - do not chase | Local service pages, Sika Kenya, Crown |
| Tile adhesive Kenya | HARD | none - do not chase | Priced local brands: ProGrip, Stickatile, Kalekim, Bamburi, Crown |
| Mapei Kenya / Mapei Nairobi / Mapei distributor Kenya | HARD - do not target | none | Belongs to Mapei East Africa Ltd. Channel-conflict risk outweighs traffic |
| X-Calibur construction chemicals Kenya | HARD - do not target | none | Brand's own Kenyan entity |
| Any "price" / "buy" / "near me" query in Kenya | HARD - not winnable | none | No prices on site, no Kenyan location |

---

## 7. Top 10 actions

1. **Owner: get the territory answer in writing** for each brand (Mapei, OYH, X-Calibur, CMCI, BIHUI): appointing entity, countries covered, active vs passive sales outside Tanzania, and permission to use the brand name on regional pages. Nothing Kenya-specific ships before this.
2. **Do not build "Mapei Kenya", "Mapei Nairobi" or "X-Calibur Kenya" pages.** Both brands have their own Nairobi companies (sections 2 and 3.7).
3. **Build /east-africa/ at launch** as a genuine cross-border supply page: brand-by-country matrix, logistics, documents, lead times, contact. One page, not a set of country clones.
4. **Make OYH the regional spearhead** (after action 1): complete brand page, every product with TDS and coverage data. It is the only branded Kenyan query with no competitor at all.
5. **Publish 8-10 East Africa-framed guides in the first quarter** - tile adhesive vs sand-cement, roof/tank/pool/basement waterproofing, membrane comparison, epoxy vs PU floors, structural strengthening basics. This is where Kenyan and Ugandan traffic will actually come from.
6. **Make product pages better than the manufacturer's for local use:** coverage per pack, system build-up, climate notes, pack sizes stocked in Dar, TDS/SDS downloads, Product schema without price, WhatsApp enquiry with the product name prefilled.
7. **Win on hygiene the competitors fail:** descriptive titles and meta descriptions on every page, server-rendered HTML, a correct production sitemap, self-canonicals, no dead URLs on relaunch, redirects planned from day one (see blunders in section 3).
8. **No hreflang, no ccTLDs, no city pages.** Single English site, `lang="en"`. Revisit hreflang only if Swahili versions are added.
9. **Add /east-africa/kenya/ only when the six content tests in 5.3 are met** - especially at least one documented Kenyan delivery. Same rule for Uganda.
10. **Re-run this SERP study properly before investing in Kenya content:** from a Kenyan location on google.co.ke (or a rank tracker set to Nairobi and Mombasa), with volume data, and with the searches this run could not complete (Dr. Fixit, Fosroc, Henkel, Bostik, Duracoat, BIHUI, CMCI in Kenya; OYH distributor check; Tile and Carpet Centre and Ideal Ceramics audits).

---

## 8. Open items and unverified claims

- Sahihi's authorization for each brand and its territory: not verifiable publicly (sahihicc.com is a parking page; no Tanzanian Mapei distributor surfaced in search).
- Mapei East Africa's formal territory list, current management and any official Kenyan dealer list: not found.
- Trade-data figures for Mapei East Africa (imports, exports, Uganda shipments): listing titles only, pages blocked.
- Whether mapei.com has a `/ke/` section: untestable (403 on all paths).
- Whether OYH, BIHUI or CMCI have Kenyan or Ugandan distributors: OYH none found; BIHUI and CMCI not checked.
- All "rankings": US-vantage tool output, single run, not Google Kenya.
- Search volumes for every query: not measured.
