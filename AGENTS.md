<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project runs Next.js 16. APIs, conventions and file structure differ
from older versions. Read the relevant guide in
`node_modules/next/dist/docs/` before writing code. Known differences:
`priority` on images is deprecated, use `preload`; `images.qualities`
defaults to `[75]` and silently snaps other values, so they are listed in
`next.config.ts`; `next lint` is gone, run ESLint directly; route `params`
are Promises.
<!-- END:nextjs-agent-rules -->

# sahihicc - project conventions

Marketing and catalogue site for **Sahihi Construction Chemicals Limited**,
Dar es Salaam, Tanzania: authorized distributor of Mapei, Oriental Yuhong
and X-Calibur. Domain: sahihicc.com.

## Read before you build

| File | What it is | When |
|---|---|---|
| `GOVERNANCE.md` | the binding ruleset: priorities, fact law, budgets, checks | before any page, component or copy |
| `SEO-STRATEGY.md` | the query registry and route map | before creating any page |
| `DESIGN-CONCEPT.md` | palette, type, imagery, signature elements, Three.js policy | before any visual work |
| `DESIGN-HANDOFF.md` | the full gcbuae system this site inherits | when porting or building a section |
| `docs/OPEN-QUESTIONS.md` | what the owner has not decided | before assuming anything about the business |
| `docs/CATALOGUE-EXTRACTION.md` | product facts and the discrepancy register | before touching `src/config/catalogue.ts` |

Three rules that override everything else:

1. **Never show a price.** Not in a page, alt text, schema or doc.
2. **Never invent a fact.** Product, spec, project, authorization.
3. **Priority order:** SEO > Core Web Vitals > mobile > design.

## Environment

- The working copy is `~/dev/sahihicc`. The owner works in VS Code from
  `~/Desktop/sahihiconstructiontanzania`, which is a **symlink** to it
  (2026-11-05): same files, one copy, stored outside iCloud. Never turn
  that link into a real folder on the Desktop: the Desktop is
  iCloud-synced, and iCloud evicts files and corrupts the build cache.
- The owner uses VS Code only. Do not launch other apps. On this machine
  the `code` command belongs to Cursor, not VS Code: do not run it. Keep more than 30 GB free (14 GB on 2026-11-05: clear space). If
  dev crawls, delete `.next`.
- Reference implementation: `~/dev/gcbuae` (read-only). Port a file with
  `scripts/port-from-gcbuae.sh <path>`, which renames the tokens, then
  rewrite every brand string and all copy by hand. Never ship gcbuae copy.
- Checks: `npm run check` (typecheck, lint, build, alt audit, copy audit)
  and `scripts/lighthouse.sh` (mobile gate, 95+).

## Stack

Next.js 16 (App Router, Turbopack) - React 19 - TypeScript - Tailwind CSS
v4 (CSS-first `@theme inline`) - GSAP 3 with `@gsap/react` - Motion
(`motion/react`) - Lenis - ogl (button rim) - Three.js (lazy signature
scenes only).

No new animation runtimes. Aceternity and React Bits patterns get rebuilt
natively on Motion + GSAP.

## Folder shape

```
src/app/            routes, layout, globals.css, robots.ts, sitemap.ts,
                    llms.txt/, search-index.json/, icons, opengraph-image
src/components/     layout/ (chrome)  motion/ (primitives)  sections/
                    seo/ (JSON-LD)    ui/ (building blocks)
src/config/         site.ts (company)  brands.ts  catalogue.ts (products)
                    company.ts (solutions, initiatives, FAQ)  chrome.ts
                    mapei.ts (hub + pillar copy, content loader; SERVER ONLY)
                    mapei-coverage.ts (calculator models)  mapei-tds.json
src/content/mapei/  one JSON per product, verbatim from its data sheet
src/hooks/          use-reduced-motion, use-magnetic, use-magnetic-shine
src/lib/            gsap.ts, motion.ts, seo.ts, search.ts, faq.ts, utils.ts
src/providers/      smooth-scroll-provider.tsx
scripts/            extract-brand-svgs.py, build-favicon.mjs,
                    audit-image-alts.mjs, audit-copy.mjs, lighthouse.sh,
                    indexnow-submit.mjs, port-from-gcbuae.sh
docs/               research/ (14 reports), audits, extraction, checklists
assets/source/      GITIGNORED masters: owner documents, price lists, 4K images
public/brand/       Sahihi logo set    public/brands/  partner logos
public/tds/mapei/   Mapei's official data sheets, unaltered (68 MB)
```

## Conventions

- Path alias `@/*` to `src/*`. Files kebab-case. Components PascalCase
  named exports. Prettier with Tailwind class sorting.
- **Company details only from `@/config/site`.** Brand facts only from
  `@/config/brands`. Product facts only from `@/config/catalogue`.
  Never restate one in a component.
- Everything derives from the data files: pages, sitemap, JSON-LD,
  counts, the search index, llms.txt. The catalogue throws at build time
  on a duplicate slug, an unknown line or an empty line. Keep it that way.
- `lineHref()` and `productHref()` are the only place a product URL is
  built. When item pages ship, only those two functions change.

## Colour tokens (five roles, nothing else in the UI)

Palette "Bahari Solid" (owner, 2026-11-06: solid colours from the logo;
replaces Bahari Pastel).

| Token | Class stem | Role |
|---|---|---|
| `--deep` `#0C2A36` Ink | `deep` | ALL text; frames; the footer, route curtain and WhatsApp disc are the only dark grounds |
| `--accent` `#0078A8` Sahihi Blue | `accent` | solid stage (hero, FAQ panel, mobile menu, calculator). **Text on it is white**, set automatically |
| `--line` `#0F7D1A` Tick Green | `line` | solid stage (solutions, CTA band). **Text on it is white**, set automatically. NEVER text on a light ground |
| `--surface` `#FDF70B` Signal Yellow | `surface` | solid stage (hero panel, commitment, leadership); hover washes |
| `--chalk` `#FAFBF8` Chalk | `chalk` | page ground; text on the dark footer |

- All colour through CSS custom properties in `globals.css`. Never a hex
  literal in a component. The one exception is the WebGL button, which
  mirrors the tokens in `brand-button.tsx`: change both together.
- **`--brand`** is the manufacturer's colour on product pages (Mapei
  `#0179C2`, X-Calibur `#C43A31`): title, ticks and download button only,
  on white or under white text.
- **A stage colour is a ground, never type.** `text-accent` is allowed only
  inside the dark footer. `text-line` is forbidden everywhere;
  `scripts/audit-copy.mjs` fails on it.
- A stage is `bg-accent` / `bg-line` / `bg-surface` + `text-foreground
  grain-sh relative`, content at `relative z-10`. Secondary text on a
  stage is `text-muted`; rules are `border-deep` or `border-deep/20`.
- The dark footer is `bg-deep text-chalk grain-sh on-dark relative`.
  `.on-dark` flips chip hover and the focus ring for that ground.
- Hairlines and frames in `deep` ship at full alpha, 1px.
- Every pill chip hovers to Ink + Chalk (`.chip-sh`).
- The Sahihi logo sits on Chalk, Sky or the dark footer. Never on Butter.
- No `prefers-color-scheme` block. No OS dark mode.
- Sanctioned off-palette: the Sahihi mark, and partner logos in their
  original colours.

Utility classes: `.container-sh`, `.label-sh` (eyebrows, nav, buttons),
`.spec-sh` (mono spec data: the only use of the mono face), `.chip-sh`,
`.u-line` (sweeping underline), `.grain-sh`, `.hero-scrim`, `.marquee-sh`,
`.text-phi-0` to `.text-phi-4`, `.dropcap`, `.draw-sh` (SVG stroke draw).

## Type

Manrope (sans) - Cormorant Garamond at weight 300 only (`.font-display`)
- Geist Mono for spec data only. Never a third general-purpose face.
Product names in the display face exactly as the maker writes them;
classes, standards, consumption and packs in `.spec-sh`.

## Animation rules

- **Import GSAP from `@/lib/gsap`, never from `"gsap"` directly.** That
  module registers the plugins and the custom eases (`sh-out`,
  `sh-in-out`, `sh-reveal`); a direct import gets an unregistered
  instance and ScrollTrigger silently does nothing.
- GSAP: timelines, pinning, scroll sequences, text splitting, the route
  curtain, the footer reveal. Motion: component state, enter/exit,
  in-view reveals. CSS: hovers, underlines, marquees, accordions. Never
  animate the same property with two of them.
- Lenis is stepped by the GSAP ticker in `SmoothScrollProvider`. No
  second rAF loop. Programmatic scrolls go through `lenis.scrollTo`.
- **The first screen is static.** `instant` on hero headings and reveals.
  Never fade the LCP element.
- Transform and opacity only. Reserve final space; nothing shifts.
- `prefers-reduced-motion` on every animation.
- `overflow-hidden` on any ancestor kills `position: sticky`. Check the
  chain.
- The last sections of every page stay opaque, full-width and in normal
  flow: the desktop footer is fixed behind the page.
- Cursor effects never load on touch devices. Phones are not a shrunken
  desktop.
- Every animated component is `"use client"`. `next/dynamic` with
  `ssr: false` works only inside a client component.
- Three.js: `DESIGN-CONCEPT.md` section 7. Lazy, one per hub, SVG
  fallback always server-rendered, flagged to the owner before building.

## Buttons and links

- `BrandButton` (over `SpecularButton`) is the primary control. Pass
  `href` and it renders a real `<a>`. Variants: `solid` (Ink fill, the
  primary call to action on Chalk and pastel stages), `light` (Ink
  hairline, secondary), `dark` (the dark footer only).
- Secondary: `chip-sh rounded-full border border-deep min-h-11 px-5`.
- Text links: `.u-line`.
- WhatsApp links are built with `whatsappLink(topic)` from
  `@/config/site`, so the opener names what the visitor was looking at.

## SEO plumbing

- `title.absolute` + `alternates.canonical` on every page file.
- Breadcrumb: one `crumbs` array into `<Breadcrumb>` and
  `breadcrumbJsonLd`.
- FAQ: one `FaqItem[]` into `<Faq>` and `faqJsonLd`.
- JSON-LD through `<JsonLd graph={[...]} />`.
- New route: add it to `src/app/sitemap.ts` with a real date.

## Mistakes already paid for (gcbuae ledger, short form)

React keys from display text; huge gaps between sticky cards;
`overflow-hidden` over sticky; double-compressed images; near-black at
partial alpha reading grey; changing a global token to fix a local note;
title template double-geo; missing page canonical; an off-canvas menu
widening the mobile viewport; nowrap button labels and unbreakable
breadcrumbs side-scrolling phones; the fixed footer registering as LCP;
ScrollToPlugin fighting Lenis; iOS URL-bar resize refreshing pins; VP9
freezing Safari; video sources mounted at load; slug drift between config
arrays; a focus-within menu stuck open; an 85% alpha header; working from
an iCloud folder. Full list: handoff section 18.

Added on this project:

- A WebGL context and a permanent frame loop per button, on phones, cost
  350 ms of blocking time. Gate cursor effects to cursor devices.
- Lighthouse's simulated throttling misreports text LCP on localhost.
  Use applied throttling, and trust field data over both.
- A breadcrumb that wraps changes its line count when the web font swaps
  in, and pushed a whole product page down (CLS 0.26). On phones the
  trail is now one line that scrolls inside its own box.
- A body font on `font-display: swap` re-wraps paragraphs when it lands
  late and shifts whatever sits below them (CLS 0.23). The body face is
  `optional`; the display serif stays `swap`. Do not flip either without
  re-running the sweep.
- Twice the cause of a metric problem was guessed and the guess was
  wrong. Read the Lighthouse trace for the element and the cause first.
- zsh does not split `$VAR` into words: pass route lists to
  `scripts/lighthouse.sh` through `bash -c` or `$(cat file)`.
- The first build shipped every page static and editorial: Three.js
  installed and unused, GSAP only on headings, none of the signature
  elements in `DESIGN-CONCEPT.md` section 6. The owner's verdict: "nothing
  creative, interactive or playful". A page is not done until its
  hands-on element is built. Performance is protected by HOW the element
  loads (lazy, on intent), not by leaving it out.
- Never hand-colour text on a stage. `.bg-accent` and `.bg-line` flip
  `--foreground` and `--muted` to white, and any light surface nested in
  them (`bg-chalk`, `bg-white`, `bg-surface`, `bg-background`) flips them
  back. Ink-stroked SVG drawings belong on Yellow or Chalk, not on Blue or
  Green.
- Montserrat ExtraBold is about half as wide again as the serif it
  replaced. Display sizes were cut by about 28% and `.font-display` wraps
  `anywhere`. Run the screen-edge test at 360, 768, 1024 and 1440 after any
  change to a heading size or the nav.
- Adding a sixth nav item pushed the header off the right edge between
  640 and 1000 px. The desktop nav now starts at `lg`.
- Dark text straight on a vivid photograph measured 2.4:1 to 4.2:1 on
  sky, sea and a blue membrane. Hero words sit on a solid panel over the
  photograph. Measure the zone before putting type on any image.
- `path` is a special variable in zsh (it is PATH). A `read slug path`
  loop wiped PATH for the whole command.
- A price list is not a data sheet. 70 rows of the Mapei list needed a
  correction against the manufacturer's data sheets.
