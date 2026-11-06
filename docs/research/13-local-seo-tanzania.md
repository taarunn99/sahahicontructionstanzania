# 13 - Local and technical SEO playbook for Tanzania and multi-country East Africa

Research date: 2026-11-05. Subject: Sahihi Construction Chemicals Limited, sahihicc.com.

## Method and limits

This report was compiled on 2026-11-05 from primary sources fetched directly: Google Search Central and Google Business Profile help pages, StatCounter Global Stats, DataReportal, TCRA (via its publications page and press coverage of its June 2026 quarterly report), Vercel, Next.js, OpenAI, Anthropic, Perplexity, IndexNow, llmstxt.org, and the websites of Tanzanian professional bodies, trade shows and directories. Every figure carries its source URL and the date of the data. Three limits matter:

1. The shared web-search budget for this session ran out early, so discovery relied on fetching known URLs rather than searching. Nothing here is based on live Tanzanian SERP inspection, keyword-volume tools or Google Trends. Anything that would need those is marked "not verified".
2. Several sites answered automated requests with a bot challenge (HTTP 403 from Cloudflare or similar). That means the server exists and responds, but the page content could not be read. These are marked "bot-challenged, content not verified". They include mapei.com, zoomtanzania.net, jiji.co.tz, kompass.com and tpsftz.org.
3. Ookla's Speedtest Global Index could not be fetched (blocked). Mobile speed figures therefore come from TCRA (reported by TanzaniaInvest) and fixed speed from DataReportal (which cites Ookla). The TCRA PDF itself could not be parsed, so TCRA figures are quoted via secondary coverage and flagged as such.

Recommendations (budgets, category picks, sequencing) are my judgement built on the cited facts. They are labelled "Recommendation" so they are not mistaken for sourced claims.

Three findings to act on before anything else:

- sahihicc.com currently serves a Namecheap parking page (checked by direct request, 2026-11-05). A parked page is the first thing crawlers will associate with the brand. Replace it with a real holding page now.
- A Product page with no price and no reviews is not eligible for Google's product rich results. Product markup is still worth shipping, but it will not produce a rich snippet and Search Console will report it as invalid for that feature (section 8).
- Google removed FAQ rich results entirely on 2026-05-07. Do not plan around FAQ snippets (section 8).

---

## 1. Search landscape and what it means for the build

### 1.1 Search engines (StatCounter, October 2026)

| Country | Google | Bing | Yahoo | DuckDuckGo | Yandex | Source |
|---|---|---|---|---|---|---|
| Tanzania | 98.01% | 1.72% | 0.11% | 0.06% | 0.04% | https://gs.statcounter.com/search-engine-market-share/all/tanzania |
| Kenya | 97.18% | 2.28% | 0.25% | 0.16% | 0.07% | https://gs.statcounter.com/search-engine-market-share/all/kenya |
| Uganda | 97.67% | 1.98% | 0.16% | 0.07% | 0.06% | https://gs.statcounter.com/search-engine-market-share/all/uganda |

Implication: Google is the only search engine that matters for volume. Bing is worth an hour of setup because it is the gateway to IndexNow and to Bing's AI Performance reporting (section 10), not because of its 2% share.

### 1.2 Device split (StatCounter, October 2026)

| Country | Mobile | Desktop | Tablet | Source |
|---|---|---|---|---|
| Tanzania | 69.15% | 30.05% | 0.80% | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/tanzania |
| Kenya | 52.46% | 47.04% | 0.50% | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/kenya |
| Uganda | 68.62% | 30.75% | 0.63% | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/uganda |

Implication: Tanzania and Uganda are mobile-first by roughly 7 to 3. Kenya is close to even, which fits a more office-based B2B audience. StatCounter measures all web traffic, not B2B construction traffic specifically. The device split for specifiers and procurement staff is not verified and should be read from Search Console once the site has data.

### 1.3 Mobile OS and browsers (StatCounter, October 2026)

Tanzania mobile OS: Android 91.96%, iOS 7.87%, KaiOS 0.16% (https://gs.statcounter.com/os-market-share/mobile/tanzania).

| Mobile browser | Tanzania | Kenya | Uganda |
|---|---|---|---|
| Chrome | 75.82% | 65.21% | 86.86% |
| Opera | 13.83% | 29.21% | 4.32% |
| Safari | 6.04% | 3.13% | 5.61% |
| Samsung Internet | 2.83% | 1.21% | 2.19% |
| UC Browser | 0.52% | not listed | 0.39% |
| Phoenix | 0.26% | not listed | 0.29% |

Sources: https://gs.statcounter.com/browser-market-share/mobile/tanzania , https://gs.statcounter.com/browser-market-share/mobile/kenya , https://gs.statcounter.com/browser-market-share/mobile/uganda

All-platform browsers in Tanzania (October 2026): Chrome 74.96%, Opera 10.97%, Safari 4.84%, Edge 3.82%, Firefox 2.33%, Samsung Internet 2.07% (https://gs.statcounter.com/browser-market-share/all/tanzania).

Note: StatCounter's "Opera" line does not separate Opera Mini from Opera Mobile on these pages. The split is not verified. Treat roughly one in seven Tanzanian mobile visits, and nearly one in three Kenyan mobile visits, as potentially coming through an Opera data-saving mode.

### 1.4 Internet access, networks and speeds

| Metric | Figure | Date of data | Source |
|---|---|---|---|
| Internet users, Tanzania (individuals) | 20.6 million, 29.1% of population | October 2025 | https://datareportal.com/reports/digital-2026-tanzania (published 2025-11-08) |
| Population, Tanzania | 71.0 million, 39.0% urban | October 2025 | same |
| Mobile connections, Tanzania | 89.0 million, 125% of population | end 2025 | same |
| Share of mobile connections on 3G/4G/5G | 90.6% | end 2025 | same |
| Median fixed download speed (Ookla via DataReportal) | 19.54 Mbps | end 2025 | same |
| Internet subscriptions (TCRA) | 62.79 million, up from 58.97 million in March 2026 | quarter ending June 2026 | https://tanzaniainvest.com/telecoms/telecom-subscriptions-q2-2026 (published 2026-08-13, citing TCRA) |
| Of which mobile broadband | 37,575,797 (59.84%) | June 2026 | same |
| Of which 2G | 24,628,003 | June 2026 | same |
| Smartphone penetration | 44.74% (31.34 million smartphones) | June 2026 | same |
| Average mobile download speed | 14.26 Mbps, latency 76.79 ms | quarter ending June 2026 | same |
| Average fixed download speed | 31.77 Mbps, upload 26.67 Mbps, latency 15.67 ms | quarter ending June 2026 | same |
| Population coverage | 2G 98.66%, 3G 93.95%, 4G 94.39%, 5G 34.18% | June 2026 | same |
| Geographic coverage | 2G 79.86%, 3G 76.41%, 4G 77.53%, 5G 11.34% | June 2026 | same |
| Mobile operator shares | Vodacom 33.0%, Yas 28.6%, Airtel 20.5%, Halotel 16.4%, TTCL 1.5% | June 2026 | same |

The TCRA report itself is listed at https://tcra.go.tz/publications/statistics (section last updated 2026-08-10). Its PDF could not be parsed in this session, so the TCRA numbers above are as reported by TanzaniaInvest. The report for the quarter ending September 2026 was not yet listed on 2026-11-05.

The DataReportal figure (29.1% of people) and the TCRA figure (89.7% "internet penetration") measure different things: individuals versus subscriptions. They should not be compared. For planning, use this reading: about two in five internet subscriptions are still on 2G, fewer than half of phone lines are on a smartphone, and the average mobile connection delivers about 14 Mbps with roughly 77 ms latency in good conditions.

Neighbours (DataReportal Digital 2026, published 2025-11-08, data October 2025):

| Country | Internet users | Penetration | Broadband share of mobile connections | Median fixed download | Source |
|---|---|---|---|---|---|
| Kenya | 23.4 million | 40.5% | 80.4% | 15.44 Mbps | https://datareportal.com/reports/digital-2026-kenya |
| Uganda | 11.4 million | 22.0% | 91.6% | 28.80 Mbps | https://datareportal.com/reports/digital-2026-uganda |

Median mobile download speeds for Tanzania, Kenya and Uganda from Ookla: not verified (source blocked).

### 1.5 Build requirements derived from the above

Core Web Vitals targets (Google's "good" thresholds, measured at the 75th percentile of page loads, mobile and desktop separately): LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less (https://web.dev/articles/vitals, fetched 2026-11-05).

Recommendation - performance budget for a product or category page on mobile, first visit:

| Item | Budget | Why |
|---|---|---|
| Total transfer, first view | 350 KB compressed or less | At a few Mbps effective throughput on a congested 3G/4G cell, this keeps LCP inside 2.5 s |
| JavaScript, first load | 150 KB compressed or less including framework; 30 KB or less of route-specific client code | Android share is 91.96% and smartphone penetration is under 45%, so assume low-end CPUs. JS execution, not download, is the usual INP killer |
| LCP image | 60 KB or less, AVIF with WebP fallback, widths 360 and 720 px, explicit width and height, `fetchpriority="high"` | One hero image only above the fold |
| Other images | Lazy-loaded, 40 KB or less each at mobile width | Product pack shots compress very well |
| Fonts | System font stack, or at most one self-hosted variable WOFF2 subset to Latin at 30 KB or less, `font-display: swap` | Swahili uses the plain Latin alphabet, so one Latin subset covers both languages |
| Third-party scripts at launch | None | GA4 is deferred. No chat widgets, no tag manager, no map embeds on first load |
| PDFs (technical data sheets) | Linked, never embedded. Show file size next to each link | Users on metered data decide before downloading |
| CLS | Zero layout shift from fonts, images or late banners | Reserve space for everything |

Test on a throttled slow-4G profile with CPU slowdown and on a real low-end Android phone before launch. Lab numbers on office Wi-Fi mean nothing for this audience.

Save-Data and constrained connections:

- The `Save-Data: on` request header signals a user preference for reduced data. MDN classes it as experimental and not Baseline because some major browsers do not send it (https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Save-Data, fetched 2026-11-05). MDN advises `Vary: Save-Data` when a response depends on it.
- Recommendation: do not vary statically generated HTML on this header. It would force dynamic rendering or split the CDN cache. Instead make the default page light enough that a data-saver variant is barely needed, and handle the preference on the client: a small inline script reads `navigator.connection?.saveData` and `navigator.connection?.effectiveType` and sets an attribute on `<html>`. When set, skip web-font loading, skip decorative images and video posters, and disable link prefetching.
- Never autoplay video. Use a static poster and load the player only on tap.

Opera Mini tolerance:

- In its data-saving mode Opera Mini routes requests through Opera's servers, which run the page's JavaScript server-side and send a compressed result. Scripts are paused after a timeout of about 5 seconds, every interaction needs a server round trip, touch, scroll and keyboard events are unsupported, and localStorage is unavailable (https://help.opera.com/en/opera-mini-and-javascript/, fetched 2026-11-05).
- Requirement: every page must be complete and usable as server-rendered HTML with no client JavaScript. Static generation gives this for free as long as the build does not hide content behind client components. Specifically: navigation, product specs, phone, WhatsApp and email links must be plain anchors. Use `<details>` for collapsible content, not JS accordions. Product filters must be real links to real URLs, not client-side state.

Offline and flaky-network tolerance (recommendation): long cache lifetimes with content-hashed assets, no client-side data fetching for primary content, and forms that fail gracefully with the phone and WhatsApp number shown inline. A service worker that caches visited pages and data sheets is a reasonable phase-2 enhancement but should not block launch and does not help Opera Mini users.

Next.js note: for prerendered pages, metadata is included in the initial HTML. Next.js can stream metadata into `<body>` for dynamically rendered routes and treats bots that cannot run JavaScript as "HTML-limited" (https://nextjs.org/docs/app/api-reference/functions/generate-metadata, doc last updated 2026-08-19). Keep every indexable route fully static so titles, canonicals, hreflang and JSON-LD are always in the first HTML response.

---

## 2. Language: English, Swahili and hreflang

### 2.1 What the evidence shows

Hard data on English versus Swahili query volume for construction-chemical terms in Tanzania: not verified. No keyword tool or Google Trends access was available in this session. The observable signals are:

- Tanzanian public bodies that serve the construction trade publish Swahili-first with an English switch: AQRB (https://www.aqrb.go.tz/), NCC (https://www.ncc.go.tz/) and TanTrade (https://www.tantrade.go.tz/) all default to Swahili. CRB (https://www.crb.go.tz/) is mainly English with Swahili news. ERB (https://www.erb.go.tz/) is English with an EN/SW toggle. All checked 2026-11-05.
- The most direct competitor with a local site, Sika Tanzania, publishes in English only with no language switcher (https://tza.sika.com/, checked 2026-11-05).
- Product names, standards (EN, ISO, ASTM), data sheets and specifications from Mapei, X-Calibur and the other principals are in English, and CPD material for engineers and architects is delivered in English.

Reading (judgement): the specifier and procurement audience (engineers, architects, QS, contractors' buyers) searches and reads in English. The applicator, fundi, hardware-reseller and site-supervisor audience mixes Swahili and English and is the audience the training and reseller programmes target. Swahili also reaches Kenya, where it is an official language.

### 2.2 Recommendation

- Launch in English only. Get the English site indexed and ranking first.
- Add `/sw` in a second phase, limited to pages where Swahili serves a real audience: home, about, contact, applicator training, reseller and applicator recruitment, a small set of how-to and problem-solution guides (leaking roof, tile fixing, damp walls), and category landing pages. Keep product names, technical data and standards references in English inside those pages.
- Do not publish a `/sw` URL for a page that has no real Swahili version. An English page duplicated under `/sw` is duplicate content with a misleading language signal.
- Translate with a human who knows site vocabulary. Have one technically literate reviewer sign off each page.

### 2.3 hreflang done correctly (Google Search Central)

Source for all rules below: https://developers.google.com/search/docs/specialty/international/localized-versions (fetched 2026-11-05).

- Three equivalent methods: `<link rel="alternate" hreflang>` in `<head>`, HTTP `Link` headers, or sitemap `<xhtml:link>` entries. "The three methods are equivalent from Google's perspective." Pick one.
- Every version must list every version including itself, and links must be reciprocal: "If two pages don't both point to each other, the tags will be ignored."
- Language code is ISO 639-1 and required. Region is optional ISO 3166-1 Alpha-2. "You can't specify the country code by itself."
- `x-default` is the fallback "when no other language/region matches the user's browser setting."
- hreflang is not a language detector: "Google doesn't use hreflang or the HTML lang attribute to detect the language of a page; instead, we use algorithms to determine the language." So the page body must really be in the declared language.
- Do not redirect by IP or Accept-Language. Googlebot usually crawls from the USA without an Accept-Language header (https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

Which codes: the brief suggests `en-TZ`, `sw-TZ`, `x-default`. That is valid. Recommendation: use `en`, `sw` and `x-default` instead. A region suffix tells Google the page is for that language in that one country. The company wants the same English pages to rank in Kenya and Uganda, and the same Swahili pages are useful in Kenya. Language-only codes say exactly that. Region-specific codes only become necessary if there are ever separate English pages per country.

Pattern for a page that exists in both languages:

```html
<link rel="canonical" href="https://sahihicc.com/waterproofing" />
<link rel="alternate" hreflang="en" href="https://sahihicc.com/waterproofing" />
<link rel="alternate" hreflang="sw" href="https://sahihicc.com/sw/waterproofing" />
<link rel="alternate" hreflang="x-default" href="https://sahihicc.com/waterproofing" />
```

The Swahili page carries the same three alternates and its own self-referencing canonical. In Next.js this maps to `alternates.canonical` and `alternates.languages` in the metadata object, resolved against `metadataBase` (https://nextjs.org/docs/app/api-reference/functions/generate-metadata). Pages with no Swahili counterpart carry no hreflang at all. Set `<html lang="en">` and `<html lang="sw">` correctly for accessibility and for non-Google consumers, even though Google ignores it for language detection.

### 2.4 Pitfalls of machine translation

- Google's spam policy on scaled content abuse lists "automated transformations like synonymizing, translating, or other obfuscation techniques" among its examples when the result adds little value (https://developers.google.com/search/docs/essentials/spam-policies, fetched 2026-11-05). Bulk machine-translating the whole product catalogue into Swahili is exactly this pattern.
- Google's generative-AI guidance says creators should "manually factcheck and review all AI-generated content" and that generating many pages without adding value may violate the scaled content policy (https://developers.google.com/search/docs/fundamentals/using-gen-ai-content, fetched 2026-11-05).
- Practical risks (judgement): construction-chemistry terms have no settled Swahili equivalents, so machine output invents terms nobody searches for; mixing ratios, cure times and safety instructions mistranslated on a product page are a liability issue, not just an SEO one; mixed-language pages confuse Google's language detection.

---

## 3. Multi-country targeting from one .com domain

### 3.1 What Google uses for geo-relevance now

- The Search Console International Targeting report, and with it the country-targeting setting, is deprecated. Google's help page says country targeting "was determined to have little value for the ecosystem, and is no longer supported", while hreflang continues to be supported (https://support.google.com/webmasters/answer/12474899, fetched 2026-11-05). Trade press dated the removal to 2022-09-22 (https://www.seroundtable.com/google-search-console-deprecates-international-targeting-report-33983.html).
- Google's stated locale signals today are: ccTLDs; hreflang statements; server location ("not a definitive signal"); and "other signals" - local addresses and phone numbers, local language and currency, links from other local sites, and Business Profile data (https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites, fetched 2026-11-05). Google ignores geo meta tags.
- Google's country domains no longer matter for users: since the 2025-04-15 announcement, google.co.tz and other country domains redirect to google.com, and localisation is by the searcher's actual location (https://blog.google/products/search/country-code-top-level-domains/).

So for a .com, Tanzanian relevance is earned through the visible Dar es Salaam address and +255 number on every page, a verified Business Profile, Tanzanian links and mentions, and content that is specifically about Tanzania. There is no switch to flip.

### 3.2 ccTLD versus .com

Google's own comparison says a ccTLD gives clear geotargeting but targets a "single country only", while a gTLD with subdirectories is easy to set up and maintain (same Google page as above).

Recommendation: keep sahihicc.com as the single canonical domain. A .co.tz would strengthen the Tanzania signal slightly but would work against the Kenya and Uganda ambition, and moving a new site between domains later wastes the first months of trust.

Is registering sahihicc.co.tz and 301-redirecting it worthwhile? Yes, as brand protection, not as a ranking tactic.

- A redirected domain passes its users and any links it earns to the .com. It does not make the .com a ccTLD. That last point is an inference from how redirects work, not a quoted Google statement.
- Reasons to do it anyway: stop a competitor or squatter taking the name; catch people who assume a Tanzanian company is on .co.tz; keep the option of .co.tz email addresses. A DNS lookup on 2026-11-05 returned no name servers for sahihicc.co.tz, sahihi.co.tz or sahihicc.tz, which suggests they are unregistered. Confirm with the WHOIS at https://karibu.tz/ before relying on that.
- .tz names are registered through TCRA-accredited registrars listed at https://karibu.tz/registrars (checked 2026-11-05). Eligibility rules and price for .co.tz: not verified.
- Implementation: add the domain to the Vercel project as a redirect to https://sahihicc.com with a 301 or 308 on every path. Never serve content on it.

### 3.3 Country subfolders and doorway pages

Google defines doorway abuse as "when sites or pages are created to rank for specific, similar search queries", and its examples include region- or city-specific pages that funnel users to one destination, and near-duplicate pages closer to search results than to a browsable hierarchy (https://developers.google.com/search/docs/essentials/spam-policies, fetched 2026-11-05).

That rules out: `/ke/`, `/ug/`, `/rw/` copies of the Tanzanian site; "Mapei distributor in Nairobi / Kampala / Mwanza / Arusha / Dodoma" pages that differ only in the city name; one page per city per product.

How a Tanzanian business can legitimately rank in Kenya and Uganda (recommendation):

1. One excellent page per product and per application, written so it is the best English-language resource in the region. Informational and product-specific queries have weak local intent and can rank across borders on quality.
2. One genuine "Regional supply and export" page stating which countries are actually served, incoterms, lead times from Dar es Salaam, border and documentation handling, and a named contact. Only list countries that are really served.
3. Country pages only when there is country-specific substance: a named reseller or applicator with an address, completed projects, local standards or approvals, local contact numbers. One page per country at most, built when the content exists, not before.
4. Project case studies located in Kenya, Uganda and elsewhere, each with real photos and specifics.
5. Links and mentions from Kenyan and Ugandan sites: trade-show exhibitor lists, professional-body events, industry media (section 6).
6. `areaServed` on the Organization node listing the countries actually served. This is valid schema.org (inherited by every Organization subtype, https://schema.org/WholesaleStore), but Google's LocalBusiness documentation does not mention `areaServed` (https://developers.google.com/search/docs/appearance/structured-data/local-business), so treat it as descriptive, not as a ranking lever.

Two honest limits:

- Local-pack (map) results in Nairobi or Kampala cannot be won from a Dar es Salaam address. Distance is one of Google's three local ranking factors (section 4). Those results will go to businesses physically there, which is an argument for helping appointed resellers set up their own Business Profiles.
- Check the distributor agreements before targeting "Mapei Kenya" or "Mapei Uganda" queries. Manufacturers usually grant territories, and Mapei appears to operate a Kenya country site at https://www.mapei.com/ke/en/home-page (URL responds but is bot-challenged, content not verified). Ranking for another distributor's territory is a commercial question for the owner, not just an SEO one.

On the headline goal: the bare query "Mapei" will be led by mapei.com in every country. The winnable set is "Mapei Tanzania", "Mapei distributor Tanzania / Dar es Salaam", "Mapei [product name]" searched from Tanzania, and category queries such as "waterproofing Tanzania" or "tile adhesive Dar es Salaam". That is a judgement, not a measured SERP finding.

### 3.4 Hosting and edge location

- Vercel's CDN has 126 points of presence in 94 cities across 51 countries and 19 compute-capable regions. The only African region is `cpt1` (Cape Town, South Africa). Functions default to `iad1` (Washington, D.C.) (https://vercel.com/docs/regions, last updated 2026-08-11).
- Vercel describes PoPs as terminating TCP and routing requests over its private network to the nearest region, with caching concentrated in the regions. The page does not publish the list of PoP cities, so whether there is a PoP in Dar es Salaam, Nairobi or Mombasa is not verified.
- Google treats server location as a weak signal that is "not a definitive signal" because of CDNs (section 3.1). Hosting location is a latency decision, not a ranking decision.

Recommendation: stay on Vercel with fully static pages. Set the region for any route handlers or server actions (enquiry form, IndexNow hook) to `cpt1`, with a European region as the fallback choice if `cpt1` latency to Dar es Salaam disappoints. After launch, check the `x-vercel-id` response header from a Tanzanian mobile connection to see which region actually serves the cache, and use real-user field data (Core Web Vitals in Search Console once there is enough traffic) to judge it. If TTFB from Tanzania is poor, that is the evidence needed to reconsider, not before.

---

## 4. Google Business Profile for a Dar es Salaam distributor

### 4.1 What drives the local pack

Google states local results are based mainly on relevance, distance and prominence, that "Businesses with complete and accurate info are more likely to show up in local search results", that "More reviews and positive ratings can help your business's local ranking", and that there is no way to pay for a better local ranking (https://support.google.com/business/answer/7091, fetched 2026-11-05). Tanzania-specific local-pack behaviour was not observed in this session: not verified.

### 4.2 Name, address, verification

- The name must match the real-world name on the signage. "Including unnecessary information in your business name isn't permitted, and could result in the suspension of your Business Profile" (https://support.google.com/business/answer/3038177, fetched 2026-11-05). Use "Sahihi Construction Chemicals" (or the full legal name if that is what the sign says). Do not add "Mapei distributor" or "waterproofing" to the name.
- Permanent signage is needed to qualify as a storefront. Verification options are video recording, phone or text, email, live video call or postcard, chosen by Google, with review taking up to 5 business days. A live video call must show location evidence such as outside signs, the premises and proof of management (https://support.google.com/business/answer/7107242, fetched 2026-11-05). Have the signboard up and the BRELA certificate to hand before starting.
- One profile for the one location.

### 4.3 Categories

Google's rule: "Use as few categories as possible to describe your overall core business", choose the most specific that fits, and choose categories that describe what the business is, not what it sells (https://support.google.com/business/answer/3038177).

The following category names exist in the Google Business Profile category list as mirrored by PlePer (https://pleper.com/index.php?do=tools&sdo=gmb_categories , English list downloaded 2026-11-05; this is a third-party mirror, and availability inside the Tanzanian GBP interface should be confirmed when creating the profile):

- Building materials supplier
- Construction material wholesaler
- Waterproofing service
- Concrete product supplier
- Cement supplier
- Industrial chemicals wholesaler
- Chemical wholesaler
- Tile store, Flooring store, Paint store, Hardware store
- Insulation materials store, Masonry supply store, Roofing supply store
- Building materials store, Building materials market
- Training center
- Wholesaler, Importer

No category was found for construction chemicals, sealants, adhesives, grout or epoxy.

Recommendation:

- Primary: Building materials supplier. It is the closest match to what the business is and to the category queries being targeted.
- Secondary: Construction material wholesaler, Industrial chemicals wholesaler, and Training center (justified by the applicator training and CPD programmes).
- Add Waterproofing service only if the company itself carries out waterproofing work. It describes a contractor. If Sahihi only supplies and trains, leave it off.
- Before fixing the primary, look at which primary category the top three map results use for "waterproofing materials Dar es Salaam" and "tile adhesive Dar es Salaam" searched from Dar es Salaam. Not done in this session.

### 4.4 Service area

- A hybrid business that serves customers at its address and also delivers can show its address and add service areas. Up to 20 service areas, set by city, postal code or region, not by radius. The overall area "shouldn't be more than about 2 hours of driving time from where your business is based" (https://support.google.com/business/answer/9157481 and https://support.google.com/business/answer/3038177, fetched 2026-11-05).
- Recommendation: show the Mikocheni address, and list Dar es Salaam plus the nearby districts genuinely delivered to within that guidance (for example Kibaha and Bagamoyo). Do not list all of Tanzania or neighbouring countries. It breaks the guidance and does not move rankings in distant cities, because distance to the searcher is measured from the pin. National and regional reach belongs on the website.

### 4.5 Products, posts, photos

- Products: Google's product editor is intended for a "local store which sells physical goods" and suits businesses with no online checkout. Products "must adhere to the shopping ads policy" (https://support.google.com/business/answer/9124203, fetched 2026-11-05). Whether price is optional and whether the editor is offered to Tanzanian profiles: not verified - check in the dashboard. Recommendation: if available, add 20 to 30 hero products grouped by the same categories as the website, each linking to its product page.
- Posts: three types - updates, offers and events. Posts older than six months are archived. "Posts that include a phone number in the post description might get rejected" (https://support.google.com/business/answer/7342169, fetched 2026-11-05). Recommendation: one post a week. Use Event posts for every training session and CPD seminar, and Update posts for new stock, project photos and reseller appointments. Use the call button rather than typing the number into the text.
- Photos: Google lists adding photos and videos among its local ranking tips (https://support.google.com/business/answer/7091). Upload real photos of the signboard, warehouse, stock, training sessions and delivery vehicles. No stock imagery.

### 4.6 Reviews

Google allows asking customers through a review link or QR code, prohibits incentives ("free or discounted goods or services"), requires reviews to "reflect a genuine experience", and advises prompt, non-promotional replies (https://support.google.com/business/answer/3474122, fetched 2026-11-05).

Recommendation:

- Print the review QR code on delivery notes, training certificates and the counter. Send the link by WhatsApp after a delivery or a training day, when goodwill is highest.
- Applicator trainees, contractors and CPD attendees are the natural reviewers. Ask everyone, not just happy customers. Never offer a discount for a review.
- Reply to every review within two working days, by name, in the language the reviewer used.
- Do not ask staff, family or resellers under contract to review.

---

## 5. Citations and directories for NAP consistency

### 5.1 The canonical NAP block

Use exactly this everywhere, character for character (owner to add plot number and P.O. Box if they exist):

- Name: Sahihi Construction Chemicals Limited (short form: Sahihi Construction Chemicals)
- Address: Coca-Cola Road, Mikocheni B Light Industrial Area, Kinondoni, Dar es Salaam, Tanzania
- Phone: +255 704 722 705 (in code and schema: +255704722705)
- Website: https://sahihicc.com

### 5.2 Directory status as checked on 2026-11-05

"Live" means a direct request returned HTTP 200 with the expected page. "Bot-challenged" means the server answered with a 403 challenge page, so a human visitor probably sees a working site but content was not verified here.

| Directory / platform | URL | Status 2026-11-05 | Notes |
|---|---|---|---|
| Google Business Profile | https://business.google.com/ | Not fetched | Highest priority (section 4) |
| Yellow Tanzania (print and online directory) | https://www.yellow.co.tz/ | Live | Add listing at https://www.yellow.co.tz/add-your-business . Categories at https://www.yellow.co.tz/business-categories include Building Materials, Cement, Chemicals, Industrial Chemicals, Imports & Distribution of Chemicals, Floor Tiles, Paint - Wholesale & Manufacturers, Concrete Products. Free versus paid tier not stated |
| ZoomTanzania | https://www.zoomtanzania.net/ | Bot-challenged | Content not verified. zoomtanzania.com did not respond |
| Jiji Tanzania | https://jiji.co.tz/ | Bot-challenged | Marketplace. Content not verified |
| Kupatana | https://kupatana.com/ | Live | Consumer classifieds. No building-materials category on the home page. Low priority |
| BRELA and its Online Registration System | https://www.brela.go.tz/ and https://ors.brela.go.tz/ | Live | Official registry, not a link source. The registered name and address must match the NAP block |
| TCCIA | https://www.tccia.com/ | Hijacked | The domain 301-redirects to a gambling site. Do not link to it. https://tccia.or.tz/ shows an empty "Site ready" placeholder. TCCIA's current official site: not verified. Handle membership offline |
| TPSF (Tanzania Private Sector Foundation) | https://tpsftz.org/ | 403 Forbidden | Content not verified |
| CTI (Confederation of Tanzania Industries) | https://cti.co.tz/ | Live | Member body for industry. Whether a distributor qualifies: not verified |
| Kompass | https://www.kompass.com/ | Bot-challenged | Global B2B directory. Content not verified |
| AfricaBizInfo | https://www.africabizinfo.com/ | Bot-challenged | Content not verified |
| Tanzapages | https://www.tanzapages.com/ | Bot-challenged | Content not verified |
| Go Africa Online | https://www.goafricaonline.com/ | Live | Pan-African business directory |
| Africa Business Pages | https://africa-business.com/ | Live | B2B trade portal |
| Afrikta | https://www.afrikta.com/ | Live | Pan-African business directory |
| Construction Review Online - company directory | https://constructionreviewonline.com/directory/ | Live | Listing terms not stated on the page. Enquire via https://constructionreviewonline.com/contact-us/ |
| ConstructAfrica | https://www.constructafrica.com/ | Live | News and project intelligence. No company directory. Has a press-release section at /press-releases |
| CCE Online News | https://cceonlinenews.com/ | Live | Construction news site |
| Construction Kenya | https://www.constructionkenya.com/ | Live | Kenyan construction news |
| Buildexpo Tanzania exhibitor list | https://www.expogr.com/tanzania/buildexpo/exhibitor_list.php | Live | Listing comes with exhibiting (section 6) |
| Big 5 Construct Kenya exhibitor directory | https://exhibitors.big5constructkenya.com/ | Live | Listing comes with exhibiting |
| Bing Places | https://www.bingplaces.com/ | Live (redirects to bing.com/forbusiness) | Availability for Tanzanian businesses: not verified |
| OpenStreetMap | https://www.openstreetmap.org/ | Live | Add the premises as a map feature with name, phone and website. Feeds many third-party maps |
| LinkedIn company page, Facebook page | https://www.linkedin.com/ , https://www.facebook.com/ | Not fetched | Core `sameAs` profiles (section 7) |

Did not respond or do not exist (do not use, checked 2026-11-05): businesslist.co.tz (DNS failure), yellowpages.co.tz, yelu.co.tz, hotfrog.co.tz, cylex-tanzania.com, tanzania-companies.com, eastafricabuild.com, tic.go.tz.

Recommendation: a dozen accurate listings beat a hundred junk ones. Do Google Business Profile, LinkedIn, Facebook, Yellow Tanzania, OpenStreetMap and Bing Places in the first month. Add the bot-challenged ones only after a person has looked at each in a browser and judged it to be a real, maintained site. Keep a spreadsheet of every listing with login, date and the exact NAP used.

---

## 6. Authority and link opportunities specific to this business

All URLs checked 2026-11-05 unless stated.

### 6.1 Manufacturer listings (highest value)

A link or named mention from a principal's own site is the single strongest proof of "authorized distributor" for both Google and AI answer engines.

| Principal | URL | Status | Action |
|---|---|---|---|
| Mapei | https://www.mapei.com/ | Bot-challenged. Distributor or "where to buy" locator: not verified | Ask the Mapei export or regional manager to list Sahihi, with link, on the relevant country or distributor page. Ask for a news item on the appointment |
| X-Calibur | https://www.x-calibur.us/ | Live. Operated by X-Calibur International FZC. No distributor locator found. Has an "Authorised Tech Specialist" page at /authorised-tech-specialist and a contact page | Ask to be named on the site as Tanzania distributor. Offer a Tanzanian project reference they can publish |
| Oriental Yuhong (OYH) | https://www.yuhong.com.cn/ | Live (Chinese). English site: not verified | Ask the overseas division for a distributor listing or news post |
| CMCI | not verified | cmci.ae did not respond. Official domain not verified | Owner to confirm the principal's site and request a listing |
| BIHUI | not verified | bihuitools.com is bot-challenged and not confirmed as the official domain | Same |

On Sahihi's side: publish a "Brands" page with one sub-page per principal, the distributor appointment letter or certificate as an image with a text transcript, and a link to the manufacturer.

### 6.2 Professional bodies and CPD

| Body | URL | What was verified | Legitimate route to a link or mention |
|---|---|---|---|
| ERB - Engineers Registration Board | https://www.erb.go.tz/ and https://www.erb.go.tz/professional-development | CPD has been mandatory for practising engineers since 2005, at a minimum of 30 PDUs a year. Training providers, universities, associations and companies can apply for ERB CPD course accreditation: complete the CPD evaluation form, submit with course outline, facilitator CVs and sample materials to registrar@erb.go.tz, review takes about 4 to 6 weeks, approval is valid for 2 years. The 23rd Annual Engineers Day was held on 24 and 25 September. Events are registered through https://event.erb.go.tz | Apply for accreditation for two or three courses (waterproofing design and detailing, concrete repair to EN 1504, tile and stone installation systems). Accreditation is the credential that makes the CPD pages on sahihicc.com credible, and it opens listing on ERB's event system. Ask about exhibiting at Annual Engineers Day (exhibition terms not verified) |
| AQRB - Architects and Quantity Surveyors Registration Board | https://www.aqrb.go.tz/ and https://www.aqrb.go.tz/pages/continuing-professional-development-cpd-for-professional | Registered professionals need at least 20 CPD hours a year. The Architectural Association of Tanzania (AAT) and the Tanzania Institute of Quantity Surveyors (TIQS) each run seminars. Courses by other construction-related institutions count as structured activities. No accreditation process for suppliers is described. An AQRB annual conference was listed for 14 September 2026. Contact info@aqrb.go.tz | Offer AAT and TIQS a technical session for their seminars and ask AQRB how a supplier seminar can be recognised for CPD hours. Caution: the fetched AQRB page carried what looks like an injected third-party spam link in its footer, so the site may be compromised |
| CRB - Contractors Registration Board | https://www.crb.go.tz/ | Runs training for contractors. Publishes contractor details and a directory. Sponsorship or exhibition options not shown | Offer product-application sessions within CRB contractor training. Sponsor or exhibit at CRB events (terms not verified) |
| NCC - National Construction Council | https://www.ncc.go.tz/ | Publishes a training calendar (https://www.ncc.go.tz/training-calendars) and construction cost indices. No supplier directory | Offer a guest module. Supply material-cost data if NCC accepts supplier input (not verified) |
| ACET - Association of Consulting Engineers Tanzania | https://www.acet.or.tz/ | Founded 1985. Publishes member-firm lists and training. No supplier or associate membership seen | Sponsor or present at an ACET training event. Member firms are the specifier audience for the CPD programme |
| IET - Institution of Engineers Tanzania | https://iet.or.tz/ | Live. Page content could not be extracted. iet.co.tz did not respond | Corporate membership and annual-conference exhibition: not verified. Enquire directly |

Regional equivalents that are live: NCA Kenya (https://www.nca.go.ke/), Architectural Association of Kenya (https://aak.or.ke/), Uganda Engineers Registration Board (https://www.erb.go.ug/), Uganda Institution of Professional Engineers (https://www.uipe.co.ug/). EBK Kenya (https://www.ebk.go.ke/) is bot-challenged. CPD provider rules for these: not verified.

### 6.3 Trade shows

| Event | Verified details | Source | Link route |
|---|---|---|---|
| Buildexpo Tanzania | 27th edition, 23 to 25 September 2026, Diamond Jubilee Expo Centre, Dar es Salaam. Organiser Expogroup. 2027 dates: not verified | https://www.expogr.com/tanzania/buildexpo/ | Online exhibitor list at /exhibitor_list.php. Exhibit in 2027 |
| Dar es Salaam International Trade Fair (Sabasaba) | 50th edition, 28 June to 13 July 2026. Organiser TanTrade. Space booking at https://tradefair.tantrade.go.tz/ . 2027 dates: not verified | https://www.tantrade.go.tz/ | Exhibitor presence and local press coverage. No online exhibitor list seen |
| Buildexpo Kenya | 28th edition, 1 to 3 July 2027, Carnivore Exhibition Grounds, Nairobi. Organiser Expogroup | https://www.expogr.com/buildexpokenya/ | Exhibitor list gives a Kenya-relevant link |
| Big 5 Construct Kenya | 13 to 15 October 2027, Sarit Expo Centre, Nairobi. Organiser dmg events | https://www.big5constructkenya.com/ | Exhibitor directory at https://exhibitors.big5constructkenya.com/ |
| "East Africa Build" | No live site found under that name | - | Not verified. Do not plan around it |

### 6.4 Universities and colleges

Live sites: Ardhi University (https://www.aru.ac.tz/), University of Dar es Salaam (https://www.udsm.ac.tz/), Dar es Salaam Institute of Technology (https://www.dit.ac.tz/), Mbeya University of Science and Technology (https://must.ac.tz/), Arusha Technical College (https://www.atc.ac.tz/).

Routes that produce genuine .ac.tz mentions: guest lectures and site-practice demonstrations for civil engineering, architecture and building economics students; donating materials and test kits to a materials laboratory; sponsoring a final-year project prize; offering industrial-training placements. Each of these is news the department can publish. Whether each institution publishes partner news with links: not verified.

### 6.5 Industry and business media

Live: The Citizen (https://www.thecitizen.co.tz/, business section at /tanzania/business), Daily News (https://dailynews.co.tz/), TanzaniaInvest (https://www.tanzaniainvest.com/), Construction Review Online (https://constructionreviewonline.com/), ConstructAfrica (https://www.constructafrica.com/), CCE Online News (https://cceonlinenews.com/), Construction Kenya (https://www.constructionkenya.com/). Bot-challenged: IPP Media / The Guardian (https://www.ippmedia.com/), The East African (https://www.theeastafrican.co.ke/).

Angles that are news rather than advertising: the distributor appointments; the first ERB-accredited supplier CPD course; training numbers ("first 100 applicators certified"); a notable project; expert comment on building failures, damp and leak problems in the rainy season. Paid advertorials must be labelled and their links qualified with `rel="sponsored"`.

Resellers and applicators: every appointed reseller and certified applicator with a website is a natural, relevant link ("authorised reseller of ... supplied by Sahihi Construction Chemicals"). Give them a badge and a suggested sentence. Do not require links by contract in exchange for money or discounts.

---

## 7. Entity SEO for a brand-new company

### 7.1 The problem

"Sahihi" is an ordinary Swahili word meaning correct or accurate. A search for the bare word expresses dictionary or general intent, and Google's site-name guidance warns that a generic name is "unlikely to be selected by our system as a site name" (https://developers.google.com/search/docs/appearance/site-names, fetched 2026-11-05). The bare word is not winnable and should not be a goal. The winnable entity queries are "Sahihi Construction Chemicals", "Sahihi CC", "sahihicc", "Sahihi Mapei", "Sahihi Tanzania construction chemicals".

Consequence: always use the full distinctive name. Never brand anything as just "Sahihi" in titles, schema, profiles or listings.

### 7.2 Site name and WebSite markup

Per Google's site-names documentation: add `WebSite` structured data on the home page with `name` and `url`; `alternateName` can list fallbacks in order of preference; Google also reads `og:site_name`, `<title>` and headings on the home page, so they must agree; site names are not supported at subdirectory level; as a fallback the lowercase domain can be given as the last alternate name.

Recommendation:

- `WebSite.name`: "Sahihi Construction Chemicals"
- `WebSite.alternateName`: ["Sahihi CC", "SahihiCC", "sahihicc.com"]
- `og:site_name` and the home-page title start with the same string.

### 7.3 Organization markup

Google recommends placing Organization markup on the home page or a single about page, using the most specific subtype, and notes that "Some properties are used behind the scenes to disambiguate your organization from other organizations" (https://developers.google.com/search/docs/appearance/structured-data/organization, fetched 2026-11-05). Recommended properties listed there include `name`, `alternateName`, `legalName`, `description`, `url`, `logo`, `foundingDate`, `sameAs`, `email`, `telephone`, `contactPoint`, `address`, `numberOfEmployees`, `vatID`, `taxID`, `iso6523Code`, `leiCode`, `duns`, `naics`.

Recommendation - one node, stable `@id`, referenced from every other piece of markup on the site:

- `@type`: `WholesaleStore` (schema.org hierarchy: Organization > LocalBusiness > Store > WholesaleStore, https://schema.org/WholesaleStore). It is both an Organization and a LocalBusiness, so one node satisfies both Google features.
- `@id`: `https://sahihicc.com/#organization`
- `name`: "Sahihi Construction Chemicals"; `legalName`: "Sahihi Construction Chemicals Limited"; `alternateName`: ["Sahihi CC", "SahihiCC"]
- `url`, `logo` (square, crawlable), `image`, `description` (one factual sentence: authorized distributor of the five brands, Dar es Salaam, Tanzania)
- `foundingDate`: "2026-08" (owner to confirm exact date)
- `address` as `PostalAddress`: streetAddress "Coca-Cola Road, Mikocheni B Light Industrial Area", addressLocality "Dar es Salaam", addressRegion "Dar es Salaam", addressCountry "TZ"
- `geo` with latitude and longitude matching the Business Profile pin
- `telephone`: "+255704722705"; `contactPoint` entries for sales and technical support with `availableLanguage` ["en", "sw"]
- `openingHoursSpecification`
- `taxID` (TIN) and `vatID` (VRN) if the owner is content to publish them; BRELA registration number as an `identifier` PropertyValue
- `areaServed`: the countries actually supplied
- `brand`: the five principals as `Brand` nodes with `url` pointing to each manufacturer
- `knowsAbout`: waterproofing, tile adhesives, concrete repair, industrial flooring and so on
- `sameAs`: Google Business Profile URL, LinkedIn company page, Facebook page, and any manufacturer page that lists Sahihi as distributor. Only real, controlled or authoritative profiles.

Do not add `aggregateRating` or `review` about the company itself. Google's LocalBusiness documentation limits those to sites that capture reviews about other local businesses (https://developers.google.com/search/docs/appearance/structured-data/local-business).

### 7.4 First 90 days sequence for entity reconciliation

1. Day 0: replace the Namecheap parking page on sahihicc.com with a real one-page site: full name, NAP, brands, phone, WhatsApp, WebSite and Organization JSON-LD. Verify the domain in Search Console.
2. Week 1: Google Business Profile created and verified with the identical name and NAP. LinkedIn company page and Facebook page created with the same name, address, phone, URL, logo and one-sentence description.
3. Week 2 to 4: About page that states the legal name, registration (BRELA, August 2026), address, founders or directors with real names and roles, the distributor appointments with evidence, and photos of the premises. Google's helpful-content guidance stresses that "Of these aspects, trust is most important" and asks sites to make clear who is behind the content (https://developers.google.com/search/docs/fundamentals/creating-helpful-content, fetched 2026-11-05).
4. Month 2: manufacturer listings requested (section 6.1), first directory citations live (section 5), first trade-press mention.
5. Month 3: ERB CPD accreditation application submitted; first training event published with Event and Course markup; reseller pages live.

Knowledge panels are "automatically generated" from web sources and can be claimed by an official representative once one exists (https://support.google.com/knowledgepanel/answer/9163198, fetched 2026-11-05). There is no way to request one. Consistent naming plus independent mentions is what produces it.

Wikidata: an item needs a sitelink, or to be "a clearly identifiable conceptual or material entity" describable with "serious and publicly available references" (https://www.wikidata.org/wiki/Wikidata:Notability, fetched 2026-11-05). A three-month-old company with no press does not meet that yet. Revisit after independent media coverage exists. Do not create it prematurely.

---

## 8. Structured data when the site shows no prices

Sources fetched 2026-11-05 from Google Search Central.

| Type | Status for this site | Evidence |
|---|---|---|
| Product (no offers) | Valid schema.org, but not eligible for product rich results. Google: "Product snippets require either review or aggregateRating or offers", and when `offers` is used, `price` (or `priceSpecification.price`) is required. With no price and no reviews there is no qualifying property | https://developers.google.com/search/docs/appearance/structured-data/product-snippet |
| Merchant listings | Not applicable. Intended for pages where customers can buy | https://developers.google.com/search/docs/appearance/structured-data/product |
| FAQPage | No Google rich result. "This feature will no longer appear in Google Search starting May 7, 2026"; documentation removed 2026-06-15 | https://developers.google.com/search/docs/appearance/structured-data/faqpage |
| HowTo, Sitelinks search box | Not in Google's current structured-data gallery | https://developers.google.com/search/docs/appearance/structured-data/search-gallery |
| ItemList (carousel) | Rich result only in combination with course lists, movies, recipes or restaurants. A product ItemList earns no rich result | https://developers.google.com/search/docs/appearance/structured-data/carousel |
| BreadcrumbList | Supported. At least two ListItems with `position`, `name`, `item`. "This feature is available on desktop in all regions and languages" - desktop only | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb |
| Organization | Supported, no required properties (section 7.3) | https://developers.google.com/search/docs/appearance/structured-data/organization |
| LocalBusiness | Supported. Required: `name`, `address`. Recommended: `geo`, `openingHoursSpecification`, `telephone`, `url`. Use the most specific subtype | https://developers.google.com/search/docs/appearance/structured-data/local-business |
| Article / BlogPosting | Supported, no required properties. Recommended: `headline`, `image`, `datePublished`, `dateModified`, `author` with `name` and `url` | https://developers.google.com/search/docs/appearance/structured-data/article |
| Course list | Supported: "available in English in all regions where Google Search is available". Needs at least three courses, each with `name` and `description`, in an ItemList. Must be genuine instructor-led curriculum | https://developers.google.com/search/docs/appearance/structured-data/course |
| Event | Valid, but Google's event experience is listed only for Australia, Brazil, Canada, Germany, India, Latin America, Spain, the UK and the US. Tanzania and Kenya are not listed, so expect no event rich result. Required: `name`, `startDate`, `location` with address | https://developers.google.com/search/docs/appearance/structured-data/event |
| VideoObject | Supported. Required: `name`, `thumbnailUrl`, `uploadDate` | https://developers.google.com/search/docs/appearance/structured-data/video |

General rules: markup must describe content visible on the page, must be "a true representation of the page content", JSON-LD is the recommended format, and violations can bring a manual action that removes rich-result eligibility (https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

Recommendation for product pages:

- Ship `Product` JSON-LD without `offers`: `name`, `description`, `image`, `brand`, `manufacturer`, `sku` or `mpn`, `gtin` where the manufacturer publishes one, `category`, `additionalProperty` for pack size, coverage, colour and standards classification, plus a link to the distributor node. Accept that it earns no rich result and that Search Console and the Rich Results Test will flag the missing `offers`, `review` or `aggregateRating`. That report is informational and does not affect ranking.
- Do not invent a price of 0, a price range, or self-written reviews to force eligibility. That is misleading markup under Google's policies.
- If the owner later agrees to publish even indicative list prices for a subset of products, those pages become eligible. Worth raising as a business decision, since price visibility is itself a ranking and conversion advantage in a market where competitors hide prices.
- Category pages: `BreadcrumbList` plus an optional `ItemList` of products for machine readability only.
- Training pages: `Course` on each programme and an `ItemList` of at least three on the training hub - the one rich result realistically available to this site besides breadcrumbs. `Event` for each dated session as well, for non-Google consumers.
- FAQ content: still write it as visible questions and answers on product and category pages because buyers and AI answer engines use it. FAQPage markup is optional and has no Google display benefit.
- Guides and case studies: `Article` with a named author who has an author page.

---

## 9. AI answer engines

### 9.1 What the platforms say

- Google: there are no extra requirements to appear in AI Overviews or AI Mode. A page must be indexed and snippet-eligible. Site owners "don't need to create new machine readable files, AI text files, or markup to appear in these features." Controls are robots.txt for Googlebot and the snippet controls (`nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`). AI-feature traffic is counted inside the "Web" search type in Search Console. Listed best practices include allowing crawling, internal linking, keeping important content in text form, keeping structured data consistent with visible text, and keeping Business Profile information current (https://developers.google.com/search/docs/appearance/ai-features, fetched 2026-11-05).
- Google-Extended is a robots.txt token, not a crawler. It controls use of content for Gemini training and grounding and "does not impact a site's inclusion in Google Search nor is it used as a ranking signal" (https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers).
- OpenAI: OAI-SearchBot powers ChatGPT search ("we recommend allowing OAI-SearchBot in your site's robots.txt file"); GPTBot is for model training; ChatGPT-User fetches pages on a user's request; OAI-AdsBot checks ad landing pages (https://developers.openai.com/api/docs/bots, fetched 2026-11-05).
- Anthropic: ClaudeBot (training), Claude-User (user-requested fetches), Claude-SearchBot (search indexing). Blocking the latter two may reduce visibility in user search results (https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler, fetched 2026-11-05).
- Perplexity: PerplexityBot indexes for Perplexity search and is not used for model training; Perplexity-User fetches on user request. Perplexity also advises allowing both in any firewall (https://docs.perplexity.ai/guides/bots, fetched 2026-11-05).
- Bing: AI Performance reporting in Bing Webmaster Tools entered public preview on 2026-02-10, with a Topics Portfolio beta added on 2026-10-13 (post titles and dates from https://blogs.bing.com/webmaster/, fetched 2026-11-05; post bodies not read).

### 9.2 llms.txt

llms.txt is a proposal by Jeremy Howard of Answer.AI, first published 2024-09-03, with a v2 text last modified 2026-08-10. It is a Markdown file at `/llms.txt` with an H1 site name, a blockquote summary and H2 lists of links, optionally paired with clean `.md` versions of pages. It describes itself as a proposal, not a formal standard (https://llmstxt.org/, fetched 2026-11-05). Google states no such file is needed for its AI features (9.1). Whether any major answer engine uses llms.txt for ranking or citation: not verified.

Recommendation: generate `/llms.txt` at build time from the same content source as the sitemap. It costs almost nothing on a static site and cannot hurt. Do not expect measurable benefit, and do not spend time on it before the fundamentals.

### 9.3 robots.txt policy

Recommendation: allow everything. A new distributor benefits from being known to every model and search index, and has no content worth protecting from training.

```
User-agent: *
Allow: /

Sitemap: https://sahihicc.com/sitemap.xml
```

That single group already allows Googlebot, Bingbot, Google-Extended, OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot and Perplexity-User. Explicit per-bot groups are unnecessary unless something is later disallowed. Also confirm in the Vercel dashboard that no firewall or bot-protection rule is blocking AI crawlers (specific Vercel setting names: not verified in this session).

### 9.4 What makes a distributor site get cited (judgement, grounded in 9.1)

Answer engines cite pages that contain a specific fact the manufacturer's site does not. A distributor's unique facts are local:

- Explicit, quotable statements of fact: "Sahihi Construction Chemicals Limited is an authorized distributor of Mapei in Tanzania, based at Coca-Cola Road, Mikocheni B, Dar es Salaam." Corroborated by the manufacturer's own site.
- Local availability: which products are stocked in Dar es Salaam, pack sizes, lead times, delivery coverage, how to order.
- Local application knowledge: coastal humidity and salt exposure, rainy-season scheduling, local substrates and sands, water quality, what goes wrong on Tanzanian sites and how to fix it.
- Selection guides and comparisons in plain HTML text: which product for which problem, with coverage rates and system build-ups in tables.
- Data-sheet essentials summarised in HTML on the product page, with the PDF as a download. Content locked inside PDFs or images is much less likely to be used.
- Tanzanian project case studies with named locations, quantities and outcomes.
- Named, qualified authors on technical content, and visible dates.
- Short question-and-answer blocks under clear headings, one fact per answer.
- Consistent entity data everywhere (section 7), so that the engine can tell which "Sahihi" is meant.

---

## 10. Measurement plan

### 10.1 Google Search Console

- Verify a Domain property by DNS TXT record on day 0, so every protocol and subdomain is covered. Submit `sitemap.xml`.
- Use the Performance report's country filter for Tanzania, Kenya and Uganda and the device filter for mobile as the ground truth for visibility. Traffic from AI Overviews and AI Mode is included in the Web search type (section 9.1).
- Watch Page indexing, Core Web Vitals (appears only once there is enough field data), and the enhancement reports for breadcrumbs and courses. Expect and ignore the Product snippet "missing offers" issue (section 8).
- The International Targeting report no longer exists (section 3.1), so hreflang must be validated by build-time tests instead: for every page with alternates, assert that each alternate URL exists and links back.

### 10.2 Bing Webmaster Tools and IndexNow

- Add the site to Bing Webmaster Tools in the first week and review its AI Performance report monthly (section 9.1).
- IndexNow participants as listed on 2026-11-05: Bing, Yandex, Seznam, Naver, Yep, Internet Archive and Amazonbot (https://www.indexnow.org/searchengines.json). Google is not on the list, so IndexNow does nothing for Google.
- How it works: host a key file `{key}.txt` at the site root; submit single URLs by GET or up to 10,000 URLs per POST with `host`, `key` and `urlList`; a submission to one participant is "automatically shared with all other participating search engines"; HTTP 200 only means received (https://www.indexnow.org/documentation, fetched 2026-11-05).
- Recommendation: a post-deploy step that diffs the new sitemap against the previous one and POSTs only changed URLs to one participant's `/indexnow` endpoint (for example `https://www.bing.com/indexnow`). Do not resubmit the whole site on every deploy.

### 10.3 Analytics while GA4 is deferred

- Recommendation: run with Search Console plus a cookieless, lightweight page-view counter (for example Vercel Web Analytics; plan limits and event features not verified in this session) and no tag manager. This keeps third-party JavaScript at zero.
- When GA4 is added later, load it after first interaction or idle, never in the critical path, and check Tanzania's Personal Data Protection Act requirements for cookies and consent first (regulator site pdpc.go.tz did not respond on 2026-11-05: not verified).
- Tag the Business Profile website link with `?utm_source=google&utm_medium=organic&utm_campaign=gbp` so map-pack visits can be separated from ordinary organic visits.

### 10.4 Rank tracking for Tanzanian results

- There is no separate google.co.tz index to track. Google redirects country domains to google.com and localises by the searcher's location (section 3.1).
- Track by location and device: mobile results as seen from Dar es Salaam first, then Arusha, Mwanza and Dodoma, then Nairobi and Kampala. Use a rank tracker that supports city-level geolocation in Tanzania (tool coverage not verified - test before paying).
- Track three keyword groups separately: brand and entity ("Sahihi Construction Chemicals"), manufacturer plus country ("Mapei Tanzania", "X-Calibur Tanzania"), and category plus place ("waterproofing Dar es Salaam", "tile adhesive Tanzania"). Add Swahili variants once `/sw` exists.
- Track the local pack separately with a geo-grid tool across Dar es Salaam, because map rankings change street by street.
- Treat Search Console average position by country as the reference when a tool and Search Console disagree. Manual checks from the office are distorted by location and history.

### 10.5 Lead tracking for WhatsApp and phone without hurting INP

- WhatsApp's documented click-to-chat format is `https://wa.me/<number>` with the number in full international format and no plus sign, zeros, brackets or dashes, and an optional pre-filled message via `?text=` with URL-encoded text (https://faq.whatsapp.com/5913398998672934, fetched 2026-11-05). For this business: `https://wa.me/255704722705?text=...`.
- Recommendation - attribution with no JavaScript at all: generate the pre-filled text per page at build time, for example "Hello Sahihi, I would like a quote for Mapelastic (ref: P-MAPELASTIC)". The sales team sees the product and source page in the first message. This works in Opera Mini, costs nothing in INP and survives any analytics outage. Use a short reference code scheme: P- for product pages, C- for category pages, T- for training, G- for the Business Profile link.
- Recommendation - analytics on top: render WhatsApp and `tel:` links as plain anchors in server components. Attach one delegated, passive click listener that fires a beacon (`navigator.sendBeacon` or the analytics library's event call) and returns immediately. Never call `preventDefault`, never await a network response before navigating, never open WhatsApp via `window.open` from script.
- Why this protects INP: INP is the sum of input delay, processing duration and presentation delay, and the guidance is to keep event callbacks short and defer non-critical work to a later task (https://web.dev/articles/optimize-inp, fetched 2026-11-05). A one-line beacon call is negligible. A third-party chat widget is not.
- Do not install a floating third-party WhatsApp widget. A fixed-position anchor styled as a button does the same job with no script.
- Close the loop offline: label each inbound WhatsApp chat in WhatsApp Business by its reference code and count weekly. That count of real enquiries by source page is the KPI, not sessions.

---

## First 90 days checklist

### In-repo tasks (developer)

Days 0 to 7

- [ ] Replace the Namecheap parking page on sahihicc.com with a real holding page: full company name, NAP, five brands, phone and WhatsApp anchors, WebSite and Organization JSON-LD.
- [ ] Single canonical host (https://sahihicc.com, non-www or www, pick one) with 301 or 308 from every other variant.
- [ ] `robots.txt` allowing all agents, with sitemap line. `sitemap.xml` generated at build.
- [ ] `metadataBase`, self-referencing canonical on every route, unique title and description per page, `og:site_name` equal to "Sahihi Construction Chemicals".
- [ ] Shared NAP constant used by footer, contact page and JSON-LD so they can never drift.

Days 8 to 30

- [ ] Organization node as `WholesaleStore` with stable `@id` on the home page (section 7.3). `WebSite` node with `name` and `alternateName`.
- [ ] `BreadcrumbList` on every page below the home page. `Product` JSON-LD without offers on product pages. `Article` on guides. `Course` plus `ItemList` on the training hub, `Event` per dated session.
- [ ] All indexable routes fully static. No primary content in client components. Verify by loading pages with JavaScript disabled.
- [ ] Performance budget enforced in CI (section 1.5): transfer size, first-load JS, LCP image weight. Lighthouse mobile run on throttled profile for home, a category, a product and the contact page.
- [ ] Images through `next/image` with AVIF and WebP, explicit dimensions, one prioritised LCP image per page. System font stack or one subset variable font via `next/font`.
- [ ] Save-Data handling on the client: no font loading, no prefetch, no decorative media when `navigator.connection.saveData` is true.
- [ ] WhatsApp and `tel:` links as plain anchors with build-time reference codes in the pre-filled text. One passive delegated listener for the analytics beacon.
- [ ] Data sheets as linked PDFs with file size shown. Key specs repeated in HTML on the page.
- [ ] Route handlers (enquiry form, IndexNow) pinned to region `cpt1`.
- [ ] IndexNow key file at root and post-deploy submission of changed URLs.
- [ ] `/llms.txt` generated at build.
- [ ] About, Brands (one page per principal), Contact, Training, Become a reseller, Become an applicator, Regional supply and export pages.
- [ ] Add sahihicc.co.tz to the Vercel project as a redirect-only domain once registered.

Days 31 to 90

- [ ] Reseller and applicator directory pages, one real entry at a time, with address and phone. No empty city pages.
- [ ] Project case studies, at least one per month, with location, products, quantities and photos.
- [ ] Ten to fifteen problem-solution guides for Tanzanian conditions, each with a named author.
- [ ] hreflang infrastructure and build-time reciprocity test, ready for `/sw`. Launch the first Swahili pages only after human translation and review.
- [ ] Check `x-vercel-id` and field TTFB from Tanzanian mobile networks. Review Search Console Core Web Vitals when data appears.
- [ ] Monthly: fix anything in Search Console Page indexing, review queries by country, review Bing AI Performance.

### Owner off-site tasks

Days 0 to 7

- [ ] Put up permanent signage showing the exact company name. Photograph the premises, stock and team.
- [ ] Create and verify Google Business Profile with the exact name and NAP. Primary category Building materials supplier. Have the BRELA certificate ready for verification.
- [ ] Create LinkedIn company page and Facebook page with identical name, NAP, logo and description. Send the URLs to the developer for `sameAs`.
- [ ] Confirm to the developer: plot number, P.O. Box, exact founding date, opening hours, and whether TIN and VRN may be published.
- [ ] Verify the domain in Google Search Console (DNS TXT record) and Bing Webmaster Tools.
- [ ] Check availability of and register sahihicc.co.tz (and sahihi.co.tz if free) through an accredited registrar from https://karibu.tz/registrars .

Days 8 to 30

- [ ] Ask each principal (Mapei, OYH, X-Calibur, CMCI, BIHUI) in writing to list Sahihi as Tanzanian distributor on their website with a link, and to supply a distributor certificate that can be published. Confirm the territory each agreement covers before any Kenya or Uganda targeting.
- [ ] List the business on Yellow Tanzania (https://www.yellow.co.tz/add-your-business), OpenStreetMap and Bing Places with the exact NAP. Start the citation spreadsheet.
- [ ] Add 20 to 30 products and 20 or more real photos to the Business Profile. Begin weekly posts.
- [ ] Print the Google review QR code on delivery notes and training certificates. Ask every customer and trainee. Reply to every review.
- [ ] Set up WhatsApp Business labels matching the website reference codes. Start a weekly count of enquiries by source.

Days 31 to 90

- [ ] Apply to ERB for CPD course accreditation (form on https://www.erb.go.tz/professional-development, submit to registrar@erb.go.tz, allow 4 to 6 weeks).
- [ ] Approach AQRB, AAT and TIQS about delivering a CPD seminar for architects and quantity surveyors.
- [ ] Approach CRB, NCC and ACET about a session within their training calendars.
- [ ] Offer a guest lecture or materials donation to one of ARU, UDSM or DIT.
- [ ] Send a short press note on the distributor appointments and the training programme to The Citizen, Daily News, Construction Review Online and ConstructAfrica.
- [ ] Decide on exhibiting at Buildexpo Tanzania 2027 and at one Kenyan show (Buildexpo Kenya, 1 to 3 July 2027, or Big 5 Construct Kenya, 13 to 15 October 2027).
- [ ] Give every appointed reseller and certified applicator a badge and suggested wording for their own site and Business Profile. Help resellers in other cities set up their own Business Profiles.
- [ ] Review in a browser the directories marked "bot-challenged" in section 5 and list only on the ones that are clearly maintained.
- [ ] Decide whether indicative prices can be published for any products (unlocks product rich results, section 8).
- [ ] Commission human Swahili translation for the phase-2 page set (section 2.2).
