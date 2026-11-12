# Search Console "new reasons" of 2026-11-12: what they are, what was done

Two emails from Search Console on 2026-11-12 (domain property `sahihicc.com`
and URL-prefix property `https://www.sahihicc.com/`): "Duplicate without
user-selected canonical", "Page with redirect", "Blocked by robots.txt".
The Page indexing report (last update 09/11/2026) read: **146 indexed, 99
not indexed**. Exports are in `docs/seo/2026-11-12/gsc-exports/`.

## The 99, line by line

| Reason | Count | What it is | Verdict |
|---|---|---|---|
| Duplicate without user-selected canonical | 7 | `/tds/mapei/*.pdf`: byte copies of Mapei's own data sheets on mapei.com; Google picked Mapei's URL | Not an error (Google: "working as intended"). Fixed anyway with a canonical header, below |
| Page with redirect | 3 | `http://sahihicc.com/`, `https://sahihicc.com/`, `http://www.sahihicc.com/` | Correct: they 301/308 to `https://www.sahihicc.com/`. Nothing to do; never "Validate fix" |
| Blocked by robots.txt | 1 | `https://cpanel.sahihicc.com/`, the hosting control panel, blocked by cPanel's own robots.txt | Correct. A login page must not be indexed |
| Crawled - currently not indexed | 88 | 33 non-pages (`/_next/static/chunks/*.js?dpl=`, `/models/*.glb`, `/favicon.ico`, `/manifest.webmanifest`, `/blog/rss.xml`, 3 PDFs) and 55 real pages | Non-pages: fixed with `X-Robots-Tag: noindex`. Pages: see below |

Also found while looking: `sahahicontructionstanzania.vercel.app` served the
whole site as a second host with no redirect (not indexed, canonicals already
pointed at www); and every product page shows "Product snippets: Either
'offers', 'review' or 'aggregateRating' should be specified" (31 pages at the
time, will reach 164). That one is the documented cost of the no-prices rule
(SEO-STRATEGY section 7): a Product with no price can never earn a product
rich result. It does not affect indexing or ranking.

## What Google and the practitioners say

Sources and quotes are in the two research notes beside this file
(`gsc-google-docs.md`, `gsc-practitioners.md`). In short:

- Google: "Not indexed is not necessarily bad"; all four statuses are listed
  as reasons, not errors; the only documented fix on our side is the
  `Link: <page>; rel="canonical"` HTTP header for PDFs, which is Google's own
  worked example (PDF to its HTML page). "Validate fix" is for errors.
- Mueller (Search Off the Record 112, July 2026): "Crawled - currently not
  indexed" is "sometimes" quality, "not something purely technical"; for a
  cluster on one template, "think about the quality overall".
- Practitioners: 66% of a 222-page site indexed one week after first
  indexing is ahead of every published case; wait 4-6 weeks on the pages,
  judge by the trend; never robots.txt-block `/_next/`; `X-Robots-Tag:
  noindex` on build chunks is what Next.js projects do to clean the report;
  Google does not use IndexNow (Bing does).

## The page audit (55 crawled-not-indexed + 26 not yet reported, vs 141 indexed)

Full table: `docs/seo/2026-11-12/gsc-audit-pages.csv`. Findings:

- Metadata, canonicals, robots, breadcrumbs, Product schema, title and
  description lengths are identical across indexed and not-indexed sets.
  The metadata pass of 2026-11-11 is not the cause.
- The split is one family: 46 of the 81 not-indexed pages are BIHUI tools.
  Every BIHUI page is 150-300 words with 60-73% of its sentences shared
  verbatim with the other 80 (lead time, "Send the code", "Use it with",
  3D caption, related cards); its own content is the catalogue summary
  (median 15 words), feature bullets and a code table. Google indexed
  about half. The skipped half leans: single code, "Ask us" (3 of the 16
  doubtful-row tools indexed), later in the hub, 3 inbound links, none from
  outside `/bihui` (57 of 81 tools are not linked from `/products`, none
  from `/`).
- Mapei, X-Calibur, CMCI and OYH product pages: nothing measured separates
  indexed from not (adesilex-p7, keracolor-ff and x-seal-ps800 are among
  the best-linked pages on the site). CMCI Monokote pages carry the highest
  boilerplate ratio (0.68-0.75); z-106 (indexed) and z-106-hy (not) are
  near twins.
- The 26 "unknown" pages are mostly recency: `/sale`, `/specifier-pack`,
  three CMCI products added 2026-11-11, four sports systems of 2026-11-09,
  twelve BIHUI tools at the end of the hub.
- URL Inspection on 2026-11-12 already showed `/bihui/hydro-grout-sponge`
  (in the 88) as indexed: the report lags by days.

## Done on 2026-11-12

1. `scripts/build-canonical-headers.mjs` writes
   `src/config/canonical-headers.json`: every one of the 89 PDFs under
   `public/tds/` mapped to the one page that offers it (data sheet to its
   product page, UL documents to `/cmci/fire-rated-cement`, sports guides to
   their system page, the brochure to the sports hub, the Vasa catalogue to
   `/vasa`, the company profile to `/`). `next.config.ts` emits one
   `Link: <page>; rel="canonical"` header per file. `npm run check` fails if
   the map is stale or a PDF has no page.
2. `X-Robots-Tag: noindex` on `/_next/static/:path*`, `/models/:path*`,
   `/blog/rss.xml`, `/manifest.webmanifest`, `/favicon.ico`. No HTML route
   carries it (verified with curl on every page type). robots.txt unchanged.
3. 308 from `sahahicontructionstanzania.vercel.app` to `www.sahihicc.com`
   (exact host only; preview URLs untouched).
4. Nothing clicked in Search Console: no "Validate fix", no "Request
   indexing".

Expected effect: the 7 PDF rows move to "Alternate page with proper
canonical tag" or stay as a "Google chose different canonical" row (Mapei's
copy is the original; the header is a hint); the 33 asset rows move to
"Excluded by noindex"; the 3 redirect rows and the cPanel row stay, correctly.
Reports refresh days after the next crawl.

## Not done: owner decisions

- The BIHUI template (the only real indexing lever): add per-tool facts the
  site alone states, fold the 16 code-only "Ask us" tools into their
  category, or wait 4-6 weeks. Internal links from `/products`, the blog and
  the Mapei pages to the tools are safe either way.
- Product schema: keep (entity clarity, answer engines; Search Console shows
  the "offers" item on every product page) or drop (clean console, no entity
  markup).
- "Request indexing" for a handful of priority pages a day (quota about 10).
