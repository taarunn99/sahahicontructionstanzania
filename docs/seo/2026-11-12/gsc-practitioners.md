# What practitioners do about these statuses on a new catalogue site (read 2026-11-12)

Practitioner sources only: Search Engine Journal, Search Engine Land,
Search Engine Roundtable (reporting Mueller), Onely, Ahrefs and Patrick Stox,
Conductor, Vercel's knowledge base, Next.js GitHub discussions and project
PRs, published postmortems. Vendor data and single anecdotes are marked.
Reference point: sahihicc.com had 146 of 222 sitemap pages indexed about
one week after first indexing (66%); every new-site anecdote below did worse
at the same age.

## 1. "Crawled - currently not indexed" on a 1-2 week old site

- Mueller: "You can't force pages to be indexed -- it's normal that we don't
  index all pages on all websites"; "It's not an issue with 'that page', it's
  more site-wide"; "I wouldn't assume that overall website quality
  improvements are simple technical tweaks."
  (https://www.seroundtable.com/crawled-currently-not-indexed-google-quality-issue-31677.html)
  10 Nov 2026: "Just making the site smaller doesn't significantly raise the
  overall quality of the site."
  (https://www.seroundtable.com/google-crawled-discovered-currently-not-indexed-42507.html)
- No normal percentage: "There is no percentage ... it really depends on the
  site, the setup, the value."
  (https://www.seroundtable.com/percentage-not-indexed-google-seo-34120.html)
- New sites: "sometimes it takes time to settle down"
  (https://www.seroundtable.com/google-sites-barely-indexed-39769.html);
  "Indexing doesn't change quickly, and when it does, you see that reflected
  in the performance reports first"
  (https://searchenginejournal.com/google-responds-to-concern-over-search-console-indexing-reports/594494).
- Practical Ecommerce: on new sites "it's not a quality issue as much as
  timing"; act when the share is worsening or reaches 25% on a site that is
  not adding pages. (https://www.practicalecommerce.com/seo-crawled-not-indexed-explained)
- Onely: windows of "up to about two weeks, and sometimes much longer"; a
  page with a real improvement plus new internal links plus one request
  "usually moves within that window", an unchanged page usually does not.
  (https://www.onely.com/blog/how-to-fix-crawled-currently-not-indexed-in-google-search-console/)
- Vendor data [uncertain]: IndexCheckr, 16M pages: of pages that eventually
  index, 14% in week one, 65% within 30 days, 77% within 90 days, average
  27 days. (https://indexcheckr.com/resources/google-indexing) Indexing
  Insight: about 88% of not-indexed pages were quality-related.
  (https://indexinginsight.com/blog/what-is-crawled-currently-not-indexed)
- Anecdotes [single sites]: 512-page site 87% indexed in 90 days, pages within
  three clicks of home indexed within 30 days
  (https://thestacc.com/blog/programmatic-seo-case-study/); 219-URL site 156
  indexed (https://dev.to/kausarraza/crawled-vs-discovered-currently-not-indexed-what-63-unindexed-pages-taught-me-2dha);
  302 pages on a one-week domain, 12-30 indexed in week one
  (https://dev.to/sebestian/302-pages-in-7-days-29-impressions-an-honest-programmatic-seo-postmortem-4372).
- Sept 2026 reporting glitch showed indexed pages as this status; Mueller
  called it a "short blip".
  (https://www.seroundtable.com/google-confirmed-indexing-reporting-bug-from-last-night-42051.html)

## 2. Template product pages with little unique text: what moved them

1. Internal links from indexed pages, home page and hubs, within three
   clicks (moderate). Mueller: link from the home page, else a product looks
   like "some random product that just happened to show up"
   (https://iloveseo.com/seo/john-mueller-explains-how-to-use-internal-linking-to-sell-seasonal-products-on-a-website/).
   Links alone are not sufficient: pages with 22-23 internal links stayed out
   while a sibling with 8 ranked (https://brandmentions.link/crawled-currently-not-indexed/).
2. Unique data per page, not more words (moderate). "three or more [unique
   data points] changed the outcome" (https://thestacc.com/blog/programmatic-seo-case-study/);
   Patrick Stox's "delete the modifier" test, "a data problem, not a length
   problem" (https://patrickstox.com/programmatic-seo/risks/thin-content/);
   Mueller on listing pages: "You don't need to put in extra text there"
   (https://www.searchenginejournal.com/google-extra-content-not-always-needed-for-category-pages/420945/);
   add what only the distributor knows: application advice, accessory notes,
   own photos (https://www.xictron.com/en/blog/crawled-not-indexed-shop-pages-index/).
3. Consolidating thin pages (moderate, with Mueller's "making the site
   smaller" caveat). Variants canonicalised to the base product, near-empty
   pages merged with a 301.
   (https://www.onely.com/blog/how-to-fix-crawled-currently-not-indexed-in-google-search-console/)
4. External links and promotion: Mueller's own tip for a 500-product site with
   100 indexed: "promote your website a little bit better" through partners
   and local chambers of commerce; a couple of hundred pages "should be able
   to get a significant share indexed".
   (https://www.searchenginejournal.com/googles-mueller-offers-two-tips-for-getting-indexed/407995/)
5. Phased publishing (anecdotal): 25-30 pages a week held 87%; an 80-page
   week dropped that batch to 41%. (https://thestacc.com/blog/programmatic-seo-case-study/)
6. Request indexing: once, after a change, within the quota of about 10 a
   day; "the initial foot in the door", "not a guarantee"; "If your site
   relies on manual index submission for normal content, you need to
   significantly improve your site."
   (https://www.seroundtable.com/google-discover-new-site-external-links-over-url-submission-33163.html,
   https://www.seroundtable.com/google-manually-index-site-quality-28942.html)
7. Sitemap resubmission alone: nobody reports it working.
8. Structured data: "won't make your site rank better"; no source claims it
   moved a page out of this status.
   (https://www.seroundtable.com/google-structured-data-ranking-39232.html)
9. IndexNow: Google does not use it (Bing, Yandex, Naver, Seznam, Yep do).
   (https://searchengineland.com/indexnow-new-initiative-by-microsoft-and-yandex-to-push-content-to-search-engines-375247)
10. Check the rendered HTML carries the content, not only the client.

What did not work (collected): resubmitting unchanged URLs, sitemap
resubmission alone, padding word count, canonical tags alone, blaming crawl
budget.

## 3. Non-page assets in the report

- Consensus: noise, not a defect; never block `/_next/` in robots.txt
  (Googlebot fetches chunks to render, does not index them).
  (https://github.com/vercel/next.js/discussions/89939,
  https://github.com/brandonperfetti/bp-portfolio/issues/221)
- Mueller on images in the same bucket: not web pages, cannot be indexed as
  documents. (https://www.searchenginejournal.com/googles-john-mueller-clarifies-webp-image-indexing-confusion/485844/)
- `?dpl=` is Vercel Skew Protection; Vercel keeps assets reachable for
  Googlebot and Bingbot for 60 days.
  (https://vercel.com/docs/skew-protection,
  https://vercel.com/changelog/automatic-mitigation-of-crawler-delay-via-skew-protection)
- The clean-up Next.js projects do: `X-Robots-Tag: noindex` on
  `/_next/static/:path*` in `headers()`, never robots.txt; one project found
  423 of 426 such rows were chunks.
  (https://github.com/dikondaashish/TrackmyOPT/pull/132,
  https://github.com/suprabho/vismay/pull/528,
  https://github.com/vercel/next.js/discussions/61850)
- Real downside of robots.txt blocking: "not good" (Vercel CTO), "not really
  appropriate method" (Google's Barry Hunter), both secondhand.
  (https://github.com/vercel/next.js/discussions/78288)
- RSS: a feed got canonicalised over the real pages, which then showed as
  not indexed; removing it fixed it within days.
  (https://www.searchenginejournal.com/fixed-crawled-not-indexed/426038/)

## 4. PDFs duplicating the manufacturer's sheet

- "if Google chose the right page, leave it, because the status is working
  as intended"; if the PDFs are useful, canonicalise "through the HTTP
  header". (https://www.conductor.com/academy/index-coverage/faq/duplicate-without-canonical/)
- Mueller: Google will "show the HTML versions above (or in place of) the
  PDF versions"; use noindex only "if it's clearly necessary"; "I believe
  you can set the canonical on a PDF with [HTTP] headers"; "You can
  definitely also use noindex in the headers for PDF files"; prefers
  canonical over noindex so signals consolidate.
  (https://www.seroundtable.com/archives/021584.html,
  https://iloveseo.com/seo/google-says-html-pages-and-pdfs-are-seen-as-different-content-not-duplicate-content/,
  https://www.seroundtable.com/google-site-quality-indexed-pages-25593.html)
- 2026 PDF podcast: identical PDFs are "exact binary duplicates" that make
  cross-domain canonicalisation hard; mitigations are rel=canonical headers,
  PDF metadata and a link back to the site.
  (https://www.seroundtable.com/google-search-on-pdfs-42291.html)
- No source shows Google overriding a byte-identical manufacturer copy
  because of the header [uncertain]. Nobody expects to outrank the
  manufacturer for its own sheet.

## 5. Redirect and robots rows

- http, non-www variants "need no action"; "Don't click Validate fix for
  these variants ... validation often fails here for this reason, and that's
  expected." (https://zenweb.my/blog/page-with-redirect-search-console,
  https://geo-analyzer.com/blog/page-with-redirect-google-search-console)
- Admin and staging hosts blocked by robots.txt: "seeing these in the report
  means the block is working"; robots.txt is not access control.
  (https://patrickstox.com/technical-seo/how-search-works/indexing/gsc-page-indexing/blocked-by-robots-txt/)

## 6. Validate fix

- Mueller, July 2026: Google samples the pages and, if clean, recrawls the
  rest "a little bit faster"; it does not judge quality.
  (https://www.searchenginejournal.com/when-to-use-search-consoles-validate-fix-according-to-google/582791/)
- Use once, after a real template-wide fix confirmed live. Pointless for
  single URLs, intentional 404s, redirects, canonical changes and "Crawled -
  currently not indexed". A failed validation costs only time; repeat clicks
  "can reset the queue".
  (https://www.digitalapplied.com/blog/search-console-validate-fix-when-to-use-mueller-2026)

## 7. Vercel-specific checks

- Preview deployments carry `X-Robots-Tag: noindex`; production must not;
  the production `<project>.vercel.app` alias is a duplicate host; Vercel's
  guide: a hostname-scoped permanent redirect matching only the production
  alias, keep absolute canonicals.
  (https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines,
  https://vercel.com/kb/guide/avoiding-duplicate-content-with-vercel-app-urls)
- Deployment Protection must not cover production; custom WAF challenge
  rules have no documented Googlebot exemption; robots.txt and sitemap must
  not be caught by middleware.

## Consensus order of actions

1. Leave the 55 real pages alone for 4-6 weeks except items 3-5; judge by
   the trend (strong).
2. `X-Robots-Tag: noindex` on `/_next/static/:path*` and the other
   non-pages; never robots.txt (moderate). Verify it is not on HTML.
3. Link every BIHUI tool from an indexed page within three clicks; some from
   the home page and hub (moderate).
4. Three or more facts per BIHUI page that only this site states (moderate).
5. Request indexing once per changed page, within quota; no sitemap
   resubmission tactic; IndexNow is for Bing (strong).
6. PDFs: canonical header, or noindex, or leave (moderate).
7. Do not touch the redirect and robots rows; no Validate fix (strong).
8. Vercel checks once; then promote the site off-site (a few real local
   links), Mueller's own advice for a partly indexed catalogue (strong on
   mechanics, moderate on links as the lever).
