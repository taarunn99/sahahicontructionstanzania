# DEPLOY-CHECKLIST.md

Written 2026-11-05. Run top to bottom before the first production deploy
and before every structural release.

## 1. Automated, on the production build

```bash
npm run check            # typecheck, lint, calculator + content tests, build, audits
scripts/lighthouse.sh    # mobile, applied throttling
```

- [ ] `npm run check` exits 0
- [ ] Lighthouse mobile: performance 95+ on every route, SEO 100,
      accessibility 100, best practices 100
- [ ] Every sitemap route returns 200 (`npm start`, then curl each)
- [ ] `/no-such-page` returns a real 404 with the branded page
- [ ] robots.txt, sitemap.xml, llms.txt, search-index.json, favicon.ico,
      icon.svg, apple-icon.png, opengraph-image.jpg: 200
- [ ] Every internal link on every page resolves (no anchor to a slug
      that no longer exists)
- [ ] Every JSON-LD block parses; types match the table in
      SEO-STRATEGY.md section 7
- [ ] Metadata inventory: titles 60 or fewer, descriptions 140-160, zero
      duplicate titles, a canonical on every route, zero `noindex`
- [ ] Sitemap count equals pages built
- [ ] No price anywhere: `grep -rniE "TSH|TZS|[0-9]{2,3},[0-9]{3}\.[0-9]{2}" .next/server/app/*.html` returns nothing
- [ ] No long dashes in built HTML
- [ ] Content, JSON-LD and (on item pages) previous/next present in the
      RAW HTML, not only after hydration
- [ ] Wire-size spot check of the heaviest `/_next/image` URLs (300 KB
      or less each)

Baseline on 2026-11-05 (4 pages): the automated items above passed,
with Lighthouse at 100 in all four categories on every route.

## 1b. Launch gates only the owner can clear

- [x] (Owner confirmed 2026-11-06, see OPEN-QUESTIONS Q5.) **Project references (Q5).** `/projects` and the home page strip
      name 15 sites and clients from the owner's sheet. The sheet is
      headed "Mlinzi" and the projects predate Sahihi's licence of
      29 August 2026. Before the first deploy the owner confirms in
      writing that these may be published as Sahihi references and that
      each client agrees. Anything not confirmed is deleted from
      `src/config/projects.ts` (one entry per project). If none is
      confirmed, remove the route, its nav link, its sitemap row and the
      home strip.
- [ ] Row 5 of the sheet ("Said Salim") is held out because it may be a
      private individual. Add it only with the owner's confirmation.

## 2. By hand, once per release

- [ ] 360px and 2560px: no sideways pan, no clipped text, headings
      balanced
- [ ] Reduced motion: every animation still, content complete
- [ ] JavaScript disabled: every page readable, every link works
- [ ] Header on every route: transparent over the home hero, solid
      elsewhere; mega panel opens on hover, closes on leave and Escape,
      the trigger always navigates
- [ ] Mobile menu: opens, locks scroll, closes on navigation
- [ ] Footer: reveals on desktop, normal flow on phones, on every route
      including after client-side navigation
- [ ] WhatsApp button and every `tel:` / `mailto:` link open the right
      app with the right number
- [ ] Contact form: one real enquiry delivered end to end
- [ ] Shared chrome touched? Re-verify every route and a phone viewport

## 3. Owner, at the host and off-site

- [ ] DNS for sahihicc.com to the host. **Keep the MX and SPF records**
      that sit on Namecheap hosting or email stops
- [ ] Canonical host: apex 301 to www (or the reverse, once), HTTPS, HSTS
- [ ] Production env: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`,
      `CONTACT_FROM`; verify the sending domain in Resend
- [ ] FormSubmit fallback: its first submission sends a one-time
      activation email to info@sahihicc.com that must be clicked
- [ ] Confirm the production deployment is not a preview adding
      `X-Robots-Tag: noindex`
- [ ] Google Search Console domain property; submit the sitemap; request
      indexing for home, the hubs and the strongest pages
- [ ] Bing Webmaster Tools (import from Search Console)
- [ ] IndexNow: generate a key file into `public/<key>.txt`, deploy,
      then `npm run indexnow` (full sitemap only at launch and structural
      releases)
- [ ] GA4, loaded deferred, with a WhatsApp-tap event
- [ ] Google Business Profile, then its entity URL into
      `siteConfig.social.googleBusiness`
- [ ] Mapei dealer-locator listing; listings on the other principals'
      sites
- [ ] If Q1 is answered "predecessor": 301 map from mlinzimapei.com and
      mlinzicc.com, one rule per old URL

## 4. Not done yet (2026-11-05)

- Privacy policy and terms pages (needed before GA4 and before the form
  goes live to the public)
- IndexNow key file
- Generated imagery (Q14)
- Everything in Phase 1 onward of the route map
