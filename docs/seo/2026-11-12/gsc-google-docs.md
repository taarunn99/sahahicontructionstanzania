# What Google's own documentation says about the four statuses (read 2026-11-12)

Sources: Google Search Central docs, Search Console Help, the Search Central
blog, and Search Off the Record episode 112 (16 Jul 2026, Mueller and
Splitt; transcript at
https://traffic.libsyn.com/secure/search-off-the-record/Search_Off_the_Record_episode_112_transcript.pdf).
Items not found in a Google source are marked UNCERTAIN.

## Framing for every "Not indexed" reason

- "These pages have not been indexed, but not necessarily because of an
  error." "Remember that Not indexed is not necessarily bad." "It's fine for
  a URL not to be indexed for the right reasons - for example, an expected
  robots.txt rule on your site, a noindex tag on the page, a duplicate URL,
  or a 404 for a page that you've removed."
  (https://support.google.com/webmasters/answer/7440203)
- Splitt, relaying the Search Console team: "I wish people would not look at
  it as a list of things to fix"; look for patterns and the unexpected.
  (SOTR 112, 03:40)

## Duplicate without user-selected canonical

- "This page is a duplicate of another page, although it doesn't indicate a
  preferred canonical page. Google has chosen the other page as the canonical
  for this page." "This is not an error, but is working as intended, because
  Google does not serve duplicate pages." If you think Google chose wrong,
  "you can explicitly mark the canonical for this page."
  (https://support.google.com/webmasters/answer/7440203)
- rel="canonical" by HTTP header, the method for PDFs: `Link:
  <https://www.example.com/downloads/white-paper.pdf>; rel="canonical"`,
  absolute URLs, "including non-HTML documents such as PDF files", "web
  search results only"; the `<link>` element "Only works for HTML pages, not
  for files such as PDF."
  (https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- PDF pointing at an HTML page is Google's own example: `Content-Type:
  application/pdf` with `Link: <https://www.example.com/white-paper.html>;
  rel="canonical"`.
  (https://developers.google.com/search/blog/2011/06/supporting-relcanonical-http-headers)
- Mueller: "We do use it for PDFs in web-search though." (23 Aug 2016,
  https://twitter.com/JohnMu/status/768024243544133633). On PDF plus HTML of
  the same content: "absolutely fine ... If our systems see these as
  duplicates they'll usually defer to the HTML page version."
  (https://www.youtube.com/watch?v=DVdOUqaBQ00, Dec 2023)
- A canonical is "a hint, not a rule"; redirects and rel="canonical" are each
  "A strong signal", sitemap inclusion "A weak signal"; "these methods can
  stack." Cross-domain canonicals are "a hint and not an absolute command."
  (https://developers.google.com/search/docs/crawling-indexing/canonicalization,
  https://developers.google.com/search/blog/2009/12/handling-legitimate-cross-domain)
- Caveat: "A duplicate page must be similar to the canonical. (That's what
  duplicate means.)" Whether Google treats our product page as similar
  enough to a byte copy of Mapei's PDF is NOT DOCUMENTED. Likely outcomes:
  the row moves to "Alternate page with proper canonical tag", or becomes
  "Duplicate, Google chose different canonical than user". Neither is an
  error. Do not add `type=` to the Link header (ignored for canonicalisation).

## Page with redirect

- "This is a non-canonical URL that redirects to another page. As such, this
  URL will not be indexed." "Redirect URLs are not indexed, only the redirect
  target." (https://support.google.com/webmasters/answer/7440203)
- Splitt uses exactly this as the example of a correct result: "It's not
  indexed because it's redirecting somewhere else ... that's exactly what you
  want them to do." (SOTR 112, 04:11)
- Google "prefers HTTPS pages over equivalent HTTP pages as canonical" and
  advises the HTTP to HTTPS redirect.
  (https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

## Blocked by robots.txt

- "This page was blocked by your site's robots.txt file." "URLs blocked by
  robots.txt are probably intentionally blocked. Use your judgment."
  (https://support.google.com/webmasters/answer/7440203)
- A domain property "Includes all subdomains (m, www, and so on) and multiple
  protocols", so `cpanel.sahihicc.com` appears by design.
  (https://support.google.com/webmasters/answer/34592)
- "A robots.txt on a subdomain is only valid for that subdomain": the block
  comes from cPanel's own robots.txt, not from www.
  (https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- For private content Google's preferred state is a password, which a cPanel
  login already is.
  (https://developers.google.com/search/docs/crawling-indexing/control-what-you-share)

## Crawled - currently not indexed

- "The page was crawled by Google but not indexed. Google doesn't index all
  pages across the web, so this is a common message for many sites and
  doesn't necessarily indicate an issue that needs attention." "If you see
  this message for important pages, use the URL Inspection tool."
  (https://support.google.com/webmasters/answer/7440203)
- Mueller: "if our systems are seriously worried about the quality of a
  website ... we'll probably crawl a lot less, we'll index a lot less. And
  then you'll see things like 'crawled not indexed'". Is it often a quality
  sign? "Sometimes." "It's not that you need to fix this technical issue."
  (SOTR 112, 21:12 to 22:06)
- Splitt: a very new site passes through "discovered - currently not
  indexed" then "crawled - currently not indexed", "and that can have all
  sorts of different reasons." (SOTR 112, 20:32)
- Time: "It can take a week or so for Google to start crawling and indexing
  a new page or site." "Crawling can take anywhere from a few days to a few
  weeks. Be patient." "there's no guarantee that any particular site will be
  added to Google's index."
  (https://support.google.com/webmasters/answer/7440203,
  https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl,
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Request indexing: "There is a daily limit"; "does not guarantee that the
  page will appear"; "requesting a recrawl multiple times for the same URL
  won't get it crawled any faster." The live test cannot test this status.
  (https://support.google.com/webmasters/answer/9012289,
  https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- Validate fix: "When you've fixed all instances of an error or warning,
  click Validate Fix"; "You can also fix issues without validating; Google
  updates your instance count whenever it crawls a page." Mueller: it samples
  the pages and, if clean, "we will trigger a faster recrawl of the other
  pages"; meant for things that were genuinely broken. (SOTR 112)
- Sitemaps: "your best choice is to submit a sitemap, with the updated pages
  marked by <lastmod>"; lastmod "should reflect the date and time of the last
  significant update"; "Google ignores <priority> and <changefreq>"; the ping
  endpoint was removed in 2023.
  (https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap,
  https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping)

## X-Robots-Tag: noindex on non-HTML resources

- "To block indexing of non-HTML resources, such as PDF files, video files,
  or image files, use the X-Robots-Tag response header instead."
  "noindex: Do not show this page, media, or resource in search results."
  Must not be robots.txt-blocked or the header is never seen.
  (https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag,
  https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- Never robots.txt-block JS or CSS: "Google Search won't render JavaScript
  from blocked files"; "disallowing crawling of resources usually causes
  issues."
  (https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics,
  https://developers.google.com/search/blog/2024/12/crawling-december-resources)
- Whether noindex on a sub-resource affects rendering: NOT DOCUMENTED either
  way. Google's indexable file types do not include JavaScript, JSON,
  webmanifest, GLB or RSS; WRS caches every referenced JS and CSS "for up to
  30 days".
  (https://developers.google.com/search/docs/crawling-indexing/indexable-file-types)
- Crawl-budget note: "Don't use noindex, as Google will still request, but
  then drop the page", said of pages, not resources.
  (https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget)

## Query-string asset variants (?dpl=)

- "Use cache-busting parameters cautiously"; Google recommends the
  fingerprint in the filename ("main.2bb85551.js"), which Next.js already
  does. `?dpl=` is Vercel Skew Protection's deployment id; Next 16.3's
  `supportsImmutableAssets` drops it.
  (https://developers.google.com/search/blog/2024/12/crawling-december-resources,
  https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript,
  https://vercel.com/docs/skew-protection)

## What Google actually recommends

1. Leave "Page with redirect", "Blocked by robots.txt" and the asset rows
   alone; do not "Validate fix"; never robots.txt-block `/_next/static`.
   [documented]
2. For the PDFs: accept the status, or add the `Link: rel="canonical"`
   header to the product page (Google's own example). [documented
   mechanism; outcome inferred]
3. For the real pages: wait, watch the trend, inspect a handful of the most
   important ones; spend the request-indexing quota on those. [documented]
4. If the BIHUI tool pages stay unindexed after several weeks, treat it as a
   quality pattern on one template, not a technical one. [inferred from
   Mueller]
5. Do not bump lastmod or resubmit the sitemap without real changes.
   [documented]
