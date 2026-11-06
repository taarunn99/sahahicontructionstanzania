# DESIGN-HANDOFF.md - the gcbuae.com system, packaged for a new site

Written 2026-11-05 from the gcbuae repo (`~/dev/gcbuae`, commit c7fc45b).
Purpose: start a NEW website that looks, moves, reads and ranks like
gcbuae.com, with different content. Everything here is either a rule the
owner (Tarun) set while building gcbuae, a system that shipped there, or a
mistake already paid for once.

**How to read it.** Three kinds of statement:

- **FIXED** - carry over unchanged. This is the "feel".
- **SWAP** - same mechanism, new content (names, queries, products, NAP).
- **DECIDE** - an owner decision to make before building (section 1).

Source files are named throughout so a session with access to
`~/dev/gcbuae` can copy the implementation instead of rebuilding it. The
values that matter are also written inline, so this file stands alone.

Where this file and gcbuae's older docs disagree, this file records the
FINAL state. Known supersessions are listed in section 17.

---

## 0. Contents

1. Fill-in sheet and decisions for the new site
2. The design concept
3. Stack and project bootstrap
4. Design tokens: colour
5. Typography and the phi scale
6. Layout, spacing, surfaces
7. Buttons, chips, links, labels, frames
8. Shared chrome: header, footer, transitions, WhatsApp
9. Animation system
10. Page blueprints
11. Rendering rules and performance budgets
12. On-site SEO system
13. Content: voice, structure, fact law
14. The blog system ("The Journal")
15. Research method: competitors, SERPs, catalogues
16. Imagery and video pipeline
17. Owner rulings ledger and supersessions
18. Mistakes ledger
19. Working agreement with the owner
20. Checklists
21. Kickoff prompt for the new repo

---

## 1. Fill-in sheet and decisions for the new site

Fill this before the first build session. Everything else in the file is
ready to use once these are known.

### 1.1 SWAP - facts (go into `src/config/site.ts`, the single source of truth)

| Field | gcbuae value (for shape) | New site |
|---|---|---|
| name | Global Classic Building Materials | |
| brandName (short, what buyers type; feeds WebSite schema + og:site_name) | Global Classic | |
| shortName / acronym | GCB | |
| legalName (exact trade licence wording) | Global Classic Building Materials Trading LLC | |
| tagline | Surfaces for enduring interiors | |
| description (140-160 ch, what + authority + price/delivery) | Wholesale marble, quartz and terrazzo slabs... | |
| url (canonical origin, decide www vs apex once) | https://www.gcbuae.com | |
| locale | en_AE | |
| email, sales email, mobile, landline, WhatsApp number | | |
| address (street / plus code, city, region, country) | Al Sajaa, Sharjah, AE | |
| social: Instagram, LinkedIn, Google Business Profile URL | | |
| parent / group entity and its URL | Lapiz Group of Companies, lapizblue.com | |
| nav items | Home, Products, About (+ Contact button) | |
| product lines (slug, label, one-line blurb) | 10 lines | |
| brands carried and exact authorization wording | authorized reseller / dealer / distributor | |
| buyer and positioning | B2B wholesale: contractors, developers, fabricators, decor companies | |
| primary query for the home page | marble slab supplier uae | |
| target queries, one owning page each | see section 12.1 | |
| competitors to audit | see section 15 | |

### 1.2 DECIDE - owner decisions (defaults in bold)

1. **Palette.** **Keep the five gcbuae colours** (section 4), or supply
   five new ones in the same five roles. The system needs exactly five
   roles; it does not need those five hexes.
2. **Fonts.** **Keep Manrope + Cormorant Garamond Light** (+ Fraunces
   for film words only), or swap one-for-one.
3. **Hero.** One still photograph with a measured text safe zone, a
   quote-style H1, one sub-line, one CTA. Needs: the photograph, the
   quote, the safe-zone measurement.
4. **Ambient film.** Does the new site have footage? If yes, section
   9.5 applies. If no, drop the section; do not fake it with stills.
5. **Signature elements.** Each product hub gets ONE interaction no
   other hub has (section 9.7). Decide per hub at build time.
6. **Sound.** The product wheel plays a very quiet detent tick. Keep
   or remove.
7. **Brand-coloured exceptions.** gcbuae allowed two scoped palette
   exceptions (third-party logos in original colours; one brand hub in
   that brand's own colours). Decide whether any exist here.
8. **Overlap with existing group sites.** If the new site targets
   queries that gcbuae.com or lapizblue.com already rank for, split the
   territory first (section 12.9). Never reuse copy between domains.

---

## 2. The design concept

**One sentence:** a design house that happens to rank - luxurious,
architectural, editorial; "Molteni&C / Cosentino / Aesop, not a tile
shop" (owner's original brief).

What that means in practice:

- **Lifestyle surface, wholesale spine.** Pages look like a magazine;
  copy, CTAs and information architecture serve company buyers (stock,
  specs, delivery, AED pricing, BOQ). Never state the commercial model
  bluntly; let the structure do it.
- **Fixed, art-directed grounds.** No OS dark mode. Each section is
  deliberately a light stage (Marble White) or a dark stage (Onyx), and
  the page alternates between them. Dark stages carry film grain.
- **Editorial type.** A light, high-contrast display serif at large
  sizes on a golden-ratio scale; a quiet geometric sans for body; tiny
  wide-tracked uppercase labels as eyebrows.
- **Hairlines, not boxes.** 1px full-strength rules and frames, pill
  chips, numbered lists with hairlines. No drop-shadow cards, no
  gradients as decoration, no rounded "SaaS" panels.
- **Real material as data-viz.** Counts, ranges and specs are shown
  with the actual product imagery (fanned swatches, slabs drawn to true
  scale, a spectrum of every colour). Tables and bar charts read as "AI
  slop" to the owner; a classic table survives only inside `<details>`
  for spec hunters and crawlers.
- **Motion with weight.** Slow, eased-out, mask-and-rise reveals; one
  pinned instrument per pillar; an ambient film that keeps its own time.
  Nothing bounces, nothing fades the LCP, nothing autoplays for
  attention. The site opens at full rest, instantly ("boom").
- **Light that follows the hand.** Buttons carry a specular rim that
  turns toward the cursor and lean magnetically toward it. It is the one
  recurring "expensive" gesture.
- **Golden ratio everywhere a ratio is needed.** Type scale steps by
  1.618; two-column splits are `1.618fr / 1fr`.

Priority order when trade-offs happen (binding):
1. SEO and indexability 2. Core Web Vitals 3. Mobile, including poor
networks 4. Design fidelity and animation 5. Everything else.
An animation that costs LCP loses. A flourish that needs a text block
client-rendered loses.

---

## 3. Stack and project bootstrap

**FIXED stack:** Next.js 16 (App Router, Turbopack) - React 19 -
TypeScript - Tailwind CSS v4 (CSS-first `@theme inline`) - GSAP 3 with
`@gsap/react` - Motion (`motion/react`) - Lenis.

Dependencies as shipped (package.json):
`next 16.2.12`, `react 19.2.4`, `gsap ^3.15`, `@gsap/react ^2.1`,
`motion ^12.43`, `lenis ^1.3`, `embla-carousel-react ^8.6`,
`embla-carousel-wheel-gestures ^8.1`, `@number-flow/react ^0.6`,
`lucide-react` (always `strokeWidth 1.3`), `ogl ^1.0` (button shader),
`clsx`, `tailwind-merge`. Dev: `sharp`, `opentype.js`, `dotted-map`,
`pdf-lib`, `prettier-plugin-tailwindcss`.
No new animation runtimes: Aceternity / React Bits patterns get rebuilt
natively on Motion + GSAP.

**Next 16 is not the Next in training data.** Read
`node_modules/next/dist/docs/` before writing code. Known differences:
`priority` on images is deprecated, use `preload`; `images.qualities`
defaults to `[75]` and silently snaps other values, so list them;
`next lint` is gone, run ESLint directly; route `params` are Promises.

`next.config.ts` (FIXED):

```ts
experimental: { inlineCss: true },      // removes render-blocking CSS
poweredByHeader: false,
images: { formats: ["image/avif", "image/webp"], qualities: [75, 90] },
```

**Conventions (FIXED):** path alias `@/*` to `src/*`; files kebab-case;
components PascalCase named exports; company details only from
`@/config/site`; Prettier with Tailwind class sorting; browserslist
chrome/edge 111+, firefox 128+, safari 16.4+.

**Folder shape:**

```
src/app/            routes, layout, globals.css, robots.ts, sitemap.ts,
                    llms.txt/route.ts, opengraph-image.jpg, not-found.tsx
src/components/     layout/ (chrome)  motion/ (primitives)  sections/
                    seo/ (JSON-LD)    ui/ (building blocks)
src/config/         site.ts + one typed data file per product line
src/content/blog/   one file per post + index map
src/hooks/          use-reduced-motion, use-magnetic, use-magnetic-shine
src/lib/            gsap.ts, motion.ts, seo.ts, utils.ts, <line>-copy.ts
src/providers/      smooth-scroll-provider.tsx
scripts/            asset builders, indexnow-submit, audit-image-alts
docs/               audits, briefs, checklists, provenance
assets/source/      gitignored masters (photos, film, catalogues)
```

**Copy verbatim from gcbuae, then rename the brand strings:**
`src/lib/{gsap,motion,seo,utils}.ts`, `src/hooks/*`,
`src/providers/smooth-scroll-provider.tsx`,
`src/components/motion/{reveal,split-heading}.tsx`,
`src/components/ui/{container,breadcrumb,gcb-button,ambient-clip}.tsx`,
`src/components/ui/specular-button/*`,
`src/components/layout/{site-header,site-footer,route-transition,whatsapp-fab,site-search,brand-marquee}.tsx`,
`src/components/seo/*`, `src/app/{layout.tsx,globals.css,robots.ts,sitemap.ts,not-found.tsx}`,
`src/app/llms.txt/route.ts`, `src/app/contact/actions.ts`,
`scripts/{indexnow-submit,audit-image-alts,build-hero-assets}.mjs`,
`next.config.ts`, `eslint.config.mjs`, `.prettierrc`, `.env.example`.

**Environment (non-negotiable):** the working copy lives in `~/dev/...`,
never in Desktop, Documents or any iCloud-synced folder (iCloud evicted
files and caused 15-minute dev hangs). Keep more than 30 GB free; if dev
crawls, delete `.next`.

Checks before every commit:
`npm run typecheck && npm run lint && npm run build`

---

## 4. Design tokens: colour

**FIXED rule:** the palette is exactly five colours and nothing else
appears in the UI. Only photographs and video carry other colours. All
colour flows through CSS custom properties in `globals.css`; never a hex
literal in a component (the one exception is the WebGL button, which
cannot resolve CSS variables and mirrors the tokens as hex in one file).

| Role | gcbuae colour | Hex | Owner's spoken name | Use |
|---|---|---|---|---|
| Dark ground + ALL text on light | Onyx | `#0C1510` | "Onyx Green" | dark stages, scrims, text, full-strength hairline frames |
| Line colour | Pine Teal | `#355E4D` | "Pine Green" | lines, borders, line-work icons, backgrounds. NEVER text |
| The accent | Dusty Olive | `#6F8F78` | "Pastel Green" | eyebrows on dark, rules, selection, focus ring, shine line |
| Light ground + text on dark | Porcelain | `#F7F8F5` | "Marble White" | page ground, type over photography and dark |
| Secondary surface | Dust Grey | `#D2D4C8` | "Dusty Olive" (renamed by owner) | secondary surface, soft borders |

Semantic tokens (light ground is the default and the only theme):

```css
--background: #f7f8f5;   --foreground: #0c1510;
--surface: #d2d4c8;      --surface-raised: #f7f8f5;
--border: #355e4d;       --muted: rgba(12, 21, 16, 0.66);
--accent: #6f8f78;       --accent-foreground: #f7f8f5;
--header-height: 5rem;   --gutter: 1.25rem;   --container-max: 90rem;
```

gcbuae kept legacy token names (`--warm-black` = Onyx, `--ink` =
Porcelain, `--bronze` = the accent, `--verde` = Pine, `--travertine` =
Dust Grey, `--limestone` = Porcelain). For a new repo, name them by role
(`--ground-dark`, `--ink`, `--accent`, `--line`, `--surface`) and expose
them through `@theme inline` exactly as gcbuae does.

Colour laws the owner set (FIXED):

- The line colour is never a text colour. Text on light is always the
  dark ground colour. After any new section, grep for the line colour
  used as `text-*`.
- **A near-black at partial opacity reads as GREY.** Frames and
  hairlines in the dark colour ship at full alpha, 1px. Never below.
- Every pill chip and pill button hovers to dark ground + light text
  (`.chip-gcb`). No exceptions by size or importance.
- Icons on dark stages are the light colour, not the accent.
- Header bar is fully opaque when solid. An 85% alpha bar composited
  off-palette colours from whatever scrolled beneath it.
- No `prefers-color-scheme` block. OS dark mode once flipped a section
  to the wrong ground.
- The accent is the least-used colour in photography, so generated
  decor imagery leads with it (section 16).
- Accent rotation: where more items exist than colours (the wheel's 8
  lines), rotate through the five only.
- Third-party logos render in their original colours (trademark
  respect). That is the one sanctioned exception, scoped to the logo.

---

## 5. Typography and the phi scale

**Fonts (loaded with `next/font/google`, self-hosted at build,
`display: swap`, variable fonts so no explicit weights):**

| Role | Family | Notes |
|---|---|---|
| Sans (body, UI) | Manrope | variable; `--font-sans-variable` |
| Display (all headings) | Cormorant Garamond | **always weight 300**, normal + true italic; `.font-display { font-weight: 300 }`. Its 400 is too sturdy at display size |
| Film words only | Fraunces (opsz axis) | used ONLY for the huge words over moving video where Cormorant's hairlines break up; `preload: false` because it is below the fold |

Two families plus one special case. Never a third general-purpose face.
`font-synthesis-weight: none; text-rendering: optimizeLegibility`.

**The golden-ratio scale (magazine pages and all new pages):**

| Class | Size | Line height |
|---|---|---|
| `.text-phi-0` | 1rem | 1.618 |
| `.text-phi-1` | 1.618rem | 1.4 |
| `.text-phi-2` | 2.618rem | 1.15 |
| `.text-phi-3` | clamp(2.618rem, 6vw, 4.236rem) | 1.05 |
| `.text-phi-4` | clamp(3.4rem, 9.5vw, 6.854rem) | 0.95 |

Usage that shipped: page H1 `font-display text-phi-4 tracking-tight
text-balance` (blog post H1 uses phi-3); section H2 `text-phi-2`; lead
paragraph `text-phi-1 font-light leading-relaxed`; body `leading-relaxed`
at the default size. The home hero H1 is its own clamp:
`clamp(2.25rem, 4.6vw, 4.25rem)`, leading 1.12, tracking -0.01em.

**Labels / eyebrows:** `.label-gcb` = 0.6875rem, line-height 1,
letter-spacing 0.22em, uppercase, weight 500. Used for eyebrows,
breadcrumbs, nav links, button text, footers, meta lines.

**Editorial extras:** `.dropcap` (first letter 4.236em, display face,
floated); `.text-outline-gcb` / `.text-outline-ink` (1.5px text stroke,
hollow fill, for tickers).

Owner rulings on type (FIXED):

- Section sub-headings are display-size (`font-display text-2xl`), not
  label-size. A label used as a subtitle reads undersized.
- Headings use `text-balance`. Reading column is 68ch.
- Fluid type via `clamp()`; test at 360px and 2560px.

---

## 6. Layout, spacing, surfaces

- **Container:** `.container-gcb` / `<Container>` = width 100%, max
  90rem, gutter 1.25rem (2.5rem from 48rem up). Every section sits
  inside one. Never re-declare max-widths.
- **Golden split:** two-column grids are `grid-cols-[1.618fr_1fr]`.
- **Section rhythm:** generous vertical padding (`py-20` to `py-32`);
  inner pages start below the fixed header with `pt-32` to `pt-40`.
- **Page wrapper:** inner pages wrap `<main>` in
  `theme-forest bg-background text-foreground flex-1` (the light scope).
  The home page keeps the palette of its photography; the header applies
  the light scope automatically off the home route.
- **Dark stage:** `bg-warm-black grain-gcb relative` with content at
  `relative z-10`. Grain is pure CSS (inline SVG `feTurbulence`,
  opacity 0.05; `.grain-strong` 0.09 for flat-colour stages). No
  request, no JS.
- **Hero scrim:** `.hero-scrim` = a radial pass that darkens only where
  type sits plus a linear pass that seats the header and scroll cue,
  both built with `color-mix()` on the dark token.
- **Horizontal overflow:** `html { overflow-x: clip }`. `clip`, never
  `hidden` (hidden creates a scroll container and kills sticky, the
  fixed footer reveal and Lenis). This is the net, not the fix; real
  overflow bugs get fixed at the source.
- **Selection and focus:** selection = accent bg; `:focus-visible` = 2px
  accent outline, 2px offset.
- **Breakpoints to test:** 360 / 390 / 768 / 1024 / 1440 / 1920 / 2560+.
  At 4K the content caps (about 1800-2000px) and type scales fluidly so
  the site looks intentional on a showroom TV.
- **Lists:** "applications"-style lists are a numbered grid with
  hairlines (`01 ...`), never a dotted flow line. Footer product list is
  ONE numbered ordered list across two aligned columns under one heading.
- **Empty zones get imagery:** beside the hero H1, beside ladders, a
  banner above text-only sections, sticky beside the FAQ. Portrait
  images hide below `lg`.
- **Touch:** targets at least 44px; no hover-only information.

---

## 7. Buttons, chips, links, labels, frames

**Primary button - `GcbButton` over `SpecularButton`** (FIXED; the
signature control). A pill (`radius 999`) whose edge carries a WebGL rim
of light that rotates to face the cursor, with a fainter symmetric streak
opposite; the whole button leans toward the cursor magnetically.

- Shader params as shipped: `blur 10, intensity 1, shineSize 12,
  shineFade 45, thickness 1.1, proximity 220`. Shine fades in with
  cursor proximity; no idle animation.
- Magnetic wrapper: `useMagnetic(0.25, 70)` on an outer span so the rim
  canvas travels with the button. Pointer-fine only; off under reduced
  motion.
- Sizes: sm `10px 22px`, md `14px 30px`, lg `18px 40px`. Label is
  `.label-gcb`. `:active` scales to 0.97.
- Variants: `dark` (light text, accent line, on photography and dark
  stages, 5% light tint), `light` (dark text, accent line, on light
  pages, 4% dark tint), `porcelain` (solid light fill, dark text, dark
  shine line).
- `accent` prop retints the shine line (the wheel drives it per item).
- Labels often end with a spaced arrow: `View materials  ->` (as
  `&ensp;&rarr;`).
- Mobile: long labels wrap below `sm` (a nowrap label once made buttons
  450px wide and side-scrolled every page).

**Icon buttons:** 36px (header) or 44px (footer) circles, 1px
`border-current/30` to `/70` on hover, with `data-shine`. The CSS
`[data-shine]::after` paints the same rotating rim light with a conic
gradient masked to a hairline ring, driven by `--ang` / `--so` from
`useMagneticShineGroup` (ONE listener and ONE rAF per group). A `:hover`
fallback shows the shine before hydration.

**Chips / secondary pills:** `chip-gcb rounded-full border
border-warm-black px-5 py-2.5 text-sm`. Hover inverts to dark bg + light
text over 0.3s. Used for secondary CTAs, filters, jump links, attribute
tags. Jump chips for colour families carry a real swatch dot.

**Text links:** `.u-line` = a 1px underline that sweeps in from the left
on hover and exits to the right (`background-size` transition, 0.35s,
ease-out-expo). Used in nav, footer, breadcrumbs, body links (body links
also `font-medium`).

**Frames:** image and card frames are `border border-warm-black` (1px,
full alpha). Blog and scene figures use the same hairline. Hub tiles
`rounded-md` to `rounded-lg`; CTA bands `rounded-3xl`.

**Breadcrumb:** `label-gcb text-muted flex flex-wrap gap-x-2 gap-y-2`,
`/` separators, last crumb in foreground colour and not a link. It must
be flex-wrap: as one unbreakable inline line it widened the mobile
viewport on every deep page.

**FAQ accordion:** one item open at a time (first by default); a small
circle marker (filled when open) instead of plus signs; question in the
display face; answer collapses with a `grid-template-rows` 1fr/0fr
transition (0.5s, reveal ease). Answers never unmount.

**Carousels:** Embla + wheel gestures - drag, swipe, trackpad, arrows,
a thin accent progress line. Never a naked `overflow-x` strip with a
visible scrollbar.

**Marquee:** two or more copies of the track, `translateX(0 -> -50%)`,
32s linear infinite. Marquees flow continuously and NEVER pause on hover
(owner, 2026-08-21).

**Forms:** contact form is a server action with a honeypot field,
validation, and a delivery chain (Resend when `RESEND_API_KEY` is set,
keyless FormSubmit fallback). The visitor sees an error only if both
fail, and the error shows the direct email address. Enquiries never
vanish silently.

---

## 8. Shared chrome

Any change here must be verified on EVERY route and at a mobile viewport
before pushing. Client-side navigation is a different code path from
direct load and has broken the footer before.

### 8.1 Header (`site-header.tsx`)

- Fixed, `z-50`, height 4rem (5rem from `sm`), three-column grid
  `1fr auto 1fr`: logo left, nav centred, action cluster right.
- **Over the home hero** it is invisible as a bar: light text, no
  background. After `scrollY > 85vh` it becomes solid (fully opaque
  light ground, dark text, bottom border). Off the home page it is solid
  from the start. Scroll state via `useSyncExternalStore`.
- Nav links: `.label-gcb .u-line`, gap 2.5rem.
- **Products mega panel:** 560px, 1px dark frame, golden split
  (`1.618fr / 1fr`): left column lists the main hubs with a real swatch
  thumbnail and a count ("69 shades"); right column lists the other
  lines; a footer row links to all lines. Hover-intent: opens on pointer
  enter, closes 150ms after leave. The trigger is a real link that
  ALWAYS navigates on click (a focus-within version stuck open).
  Escape closes. Panel entrance: 200ms opacity + 4px rise.
- Right cluster: `Contact Us` GcbButton (sm; `dark` over hero, `light`
  when solid), search icon button, two-line hamburger that morphs to an
  X (phones only). The cluster needs `col-start-3` or it re-centres when
  the nav is hidden.
- **Search:** drops from the header with a `grid-template-rows`
  transition (500ms, in-out-quart); live filter over a static index of
  every page and item, grouped results, arrow keys + Enter.
- **Mobile menu:** full-screen dark panel sliding in from the right
  (500ms, in-out-quart). Links are display face `text-4xl`, staggered
  in at 240ms + 60ms each; a product list follows under a hairline.
  Page scroll locks behind it. The outer nav stays viewport-sized and
  clips the sliding panel (parking the panel off-canvas widened the
  mobile layout viewport - the root cause of a site-wide side-pan bug).

### 8.2 Footer (`site-footer.tsx`)

- **Desktop (lg+): fixed behind the page.** A measured spacer holds its
  place in the flow; the page content sits in a solid, shadowed wrapper
  at `z-20` and lifts away like a sheet; the footer inner settles with a
  scrubbed 3D move: from `yPercent -22, scale 0.95, rotateX 7,
  autoAlpha 0` to rest, `perspective 1200px`, `ease: none`, scrubbed
  from spacer `top bottom` to `bottom bottom`.
- **Below lg:** normal flow, no reveal (a fixed block taller than the
  screen can never be fully seen).
- It paints only once its spacer nears the viewport (`visibility`), or
  it registers as the LCP element on short pages.
- `ScrollTrigger.refresh()` after every route change (double rAF + a
  600ms late refresh); stale measurements froze the reveal.
- Min-height fills the screen below the header so no page background
  strip shows above it.
- Dark stage with grain. Content order: logo + icon-first contact row
  (landline, mobile, email, Instagram, Maps directions - 44px circles
  with the shine) / address line as a label / Navigate + Brands columns
  and ONE numbered two-column Products list / group affiliation row /
  copyright with legal name, Privacy, Terms, company profile PDF.
- **Consequence for every page:** the last sections of a page must stay
  opaque, full-width and in normal flow. No sticky or pinning at the
  very end of a page.

### 8.3 Route transition (`route-transition.tsx`)

A dark curtain: on any same-origin link click it sweeps up from the
bottom (`scaleY 0 -> 1`, 0.45s, in-out), navigates, and when the new
pathname has painted it exits through the top (0.5s, 0.08s delay). One
overlay + document-level click delegation, so every `<Link>` and button
works untouched. Modified clicks, new tabs, downloads, external hosts,
hash jumps and reduced motion fall through to default behaviour.

### 8.4 WhatsApp floating button

Present on every route, bottom-right, `z-50`. A dark disc (64px, 80px
from `sm`) with a light line-drawn glyph that leads; the disc is a tight
ring, never a big dark blob. One tap opens `wa.me` with a prefilled
message. WhatsApp's own green stays off-palette. It is the primary lead
line of the site.

### 8.5 Other

Branded 404 (`not-found.tsx`) with a real 404 status: label, phi-4
headline in voice ("That page is not on the racks."), one primary button
and three chips to home, products, journal, contact.

---

## 9. Animation system

### 9.1 Division of labour (FIXED)

- **GSAP:** timelines, pinning, scroll-driven sequences, text
  splitting, the route curtain, the footer reveal.
- **Motion:** component state transitions, enter/exit, in-view reveals,
  springs.
- **CSS:** hovers, underlines, marquees, accordions, stroke-draw.
- Never animate the same property with both libraries.
- **Import GSAP only from `@/lib/gsap`.** That module registers the
  plugins and custom eases; a direct `"gsap"` import gets an
  unregistered instance and ScrollTrigger silently does nothing.
  Register only plugins actually in use (ScrollTrigger, ScrollToPlugin,
  SplitText, CustomEase), never speculatively.
- **Lenis is stepped by the GSAP ticker** in `SmoothScrollProvider`
  (`autoRaf: false, lerp: 0.1, smoothWheel: true, touchMultiplier: 1.5`,
  `lagSmoothing(0)`, `lenis.on("scroll", ScrollTrigger.update)`). No
  second rAF loop, ever. Lenis does not mount under reduced motion.
- **Programmatic scrolls go through Lenis** (`lenis.scrollTo`), never
  ScrollToPlugin: a window scroll written behind Lenis's back gets
  yanked back on the next frame.
- `ScrollTrigger.config({ ignoreMobileResize: true })` - the iOS URL
  bar collapse otherwise refreshes pins under the visitor's finger.
- Every animated component is `"use client"`. `next/dynamic` with
  `ssr: false` only works inside a file that is already a client
  component.

### 9.2 Eases and durations (identical in both libraries)

| Name | Cubic bezier | GSAP | Motion |
|---|---|---|---|
| out (default) | 0.16, 1, 0.3, 1 | `gcb-out` | `EASE.out` |
| inOut | 0.76, 0, 0.24, 1 | `gcb-in-out` | `EASE.inOut` |
| reveal | 0.25, 1, 0.5, 1 | `gcb-reveal` | `EASE.reveal` |

Durations: fast 0.4s, base 0.8s, slow 1.2s, reveal 1.6s. GSAP defaults:
`ease: gcb-out, duration: 1`. Motion spring: stiffness 180, damping 24.
CSS mirrors: `--ease-out-expo`, `--ease-in-out-quart`.

### 9.3 Primitives

- **`SplitHeading`** - headings rise line by line from behind a mask:
  SplitText `type: lines, mask: lines, autoSplit`, `yPercent 120 -> 0`,
  1.6s, reveal ease, 0.09 stagger, ScrollTrigger `top 85%`, once. The
  split waits for `document.fonts.ready` (splitting against a fallback
  font makes lines jump). `instant` prop renders it statically.
- **`Reveal` / `RevealGroup` + `RevealItem`** - fade and rise
  (`opacity 0, y 32 -> rest`, 0.8s, out ease), `whileInView`, once,
  `amount 0.25`; groups cascade at 0.08s. `instant` prop for
  first-screen content.
- **`clipReveal`** - `inset(0 0 100% 0) -> inset(0)` wipe for media,
  1.6s reveal ease.
- **`RuleIn`** - an underline that draws in under section H2s.
- **`useMagnetic` / `useMagneticShineGroup`** - cursor pull and rim
  light (section 7).
- **SVG stroke-draw** - `.quartz-diagram path` draws over 1.1s; every
  path needs `pathLength={1}`.
- **NumberFlow** - counts tick up on entry; the real number is also
  server-rendered in an `sr-only` span.

### 9.4 Laws (FIXED)

1. **First screen is static.** No entrance animation on anything above
   the fold; `instant` on hero headings and reveals. Entrance fades were
   gating text LCP past hydration.
2. **Never fade the LCP image.** Opacity delays paint; transforms are
   free. Hero image gets `preload` + `fetchPriority="high"`.
3. **Transform and opacity only.** Never animate width, height, top,
   left or grid tracks. Reserve final space so nothing shifts.
4. **`prefers-reduced-motion` on every animation, no exceptions.**
   Global CSS neutralises transitions; `useReducedMotion` gates JS;
   pinned sequences become plain stacks; films become posters.
5. **Input-driven beats autoplay.** Signature elements respond to the
   hand. The only things that move on their own are the ambient film
   and marquees.
6. **Pinned sections:** the section HOLDS, one side stays fixed as an
   instrument, cards slide through on the other; scroll must visibly
   drive a number roll and a diagram redraw. Wrapper `lg:h-[300vh]`,
   sticky full-height frame, scroll progress selects the card. Mobile
   and reduced motion get a plain stack.
7. **`overflow-hidden` on any ancestor silently kills `position:
   sticky`.** Check the whole ancestor chain; put the clip on the sticky
   element itself.
8. **No long gaps between sticky cards** (38vh gaps read as an empty
   page). Space cards normally and drive sequences with a pinned frame.
9. **`gsap.set` initial states up front** - a `fromTo` placed later in
   a timeline does not render its from-state on creation.
10. **Mobile is not a shrunken desktop.** Pins, the fixed footer and
    cursor effects are desktop patterns; phones get taps, stacks and
    normal flow.
11. Held frames read as a frozen page. Anything that holds the viewport
    must show continuous, scroll-linked change.

### 9.5 The ambient film (if the new site has footage)

ONE continuous stitched video (about 17s, 1s crossfades, dip-to-black at
the loop seam) playing on repeat, full viewport height. Deliberately NOT
pinned, NOT scroll-driven, NOT separate clips: the owner rejected a
pinned play-once sequence because held frames read as a frozen page and
segmented shots felt like a commercial.

- Overlay turns on the film's own clock (`timeupdate` against chapter
  windows in a config file): accent eyebrow label / one huge word in the
  film face (`clamp(3.5rem, 12vw, 10rem)`) / an italic display quote.
  Alternates left and right. Swap: `opacity 0, y 28 -> rest -> y -18`,
  0.55s. Thin chapter marks along the bottom.
- Chapter windows in config MUST match the crossfade offsets in the
  build script. Change one, change both.
- Sources mount only when the section is within half a viewport; plays
  only while on screen (IntersectionObserver); poster is a real image
  layer under the video (iOS paints `poster` unreliably).
- Two H.264 tiers chosen in JS: SD (1284x716, CRF 18) and 2K
  (2560x1428, CRF 19) when `innerWidth * devicePixelRatio >= 1900`. No
  WebM/VP9 (Safari-class engines stalled on it).
- Save-Data or 2G connections and reduced motion get the poster only.
- Never upscale in ffmpeg. New encodes get new filenames so no cache
  serves the old file.
- On narrow screens each chapter can set a horizontal focus point; the
  crop pans during the dissolve.
- Automation browsers cannot load media; verify playback in normal
  Chrome.

Small decorative clips use `AmbientClip`: `preload="none"`, WebP
poster, in-view play only, muted loop, reduced motion gets the poster.

### 9.6 Home page set pieces

- **Hero parallax:** the photograph drifts `yPercent 12, scale 1.05`
  scrubbed over the hero's scroll. No intro animation at all.
- **Product wheel:** on desktop the section pins and a dial of product
  names rotates with scroll (14 degrees per detent, radius 460), one
  detent per line; the section retints to the active line's accent, the
  image card turns with it, the CTA's shine line takes the accent, a
  very quiet detent tick plays. Clicking a name glides (through Lenis)
  to that detent. Phones and reduced motion get a tappable chip row with
  no pin; the server markup ships the chip fallback for no-JS.
- **Materials explore:** three round "balls" of real material; the
  active one opens into a tall lifestyle panel. Every panel is a
  fixed-size layer; the morph is translateX + an animated clip-path
  circle + opacity. Hover on fine pointers, first tap on touch.
- **Showroom locator:** an expanding map card (first activation springs
  open a stylised map, second opens Maps directions); the parent
  reserves the expanded footprint so nothing shifts. No third-party map
  script.
- **Global presence:** a pre-rendered dotted world map (static WebP
  from a build script) with a client overlay of markers and arcs.
- **Channels finale:** a WhatsApp enquiry composer (chips assemble a
  real message into a chat bubble; the CTA is a real `wa.me` link) and
  an Instagram deck (swipeable stack).

### 9.7 Signature elements - one exclusive interaction per hub

Each product-line pillar carries one bespoke interactive element no
other hub has. Registry on gcbuae (do not duplicate; invent new ones):

| Hub | Element |
|---|---|
| Quartz | compare any two shades - drag a divider over one slab |
| Terrazzo | raking-light slider sweeping a fluted panel |
| Marble | the specifier's loupe - magnifier over the vein panel |
| Bathware (Jaquar) | SKU decoder - decode and build an orderable code |
| Care (FILA) | before/after reveal slider |

Rule for inventing the next one: take it from the product's own selling
gesture (shortlisting, light play, inspection, ordering). Keep it
input-driven, palette-safe, keyboard-operable where possible, and
content-free (SEO copy never lives inside it).

### 9.8 Reusable section inventory

Built in `src/components/sections/`; reuse or adapt, do not rebuild.

| Component | What it is |
|---|---|
| series / collection ladder | counts shown as fanned REAL swatches + NumberFlow; notes beside the counts, capped at `max-w-3xl` |
| spectrum strip | every item as one colour-sorted band; segments link to category pages; server component, CSS hover |
| slab scale | formats drawn to true relative scale with real textures, a 1.70 m figure, drawn dimension lines |
| lifestyle carousel | Embla carousel with accent progress line; cards link to item pages |
| test bench | the PINNED scroll sequence (9.4 law 6) |
| certificates | spec table regrouped into themed stamped cards; classic table kept in `<details>` |
| finish explorer | tabs + macro texture crossfade; all images in the DOM |
| edge profiles | drawn SVG cross-sections instead of a comma list |
| timeline | scroll-filled line; dots light up; steps reveal |
| shade explorer | sticky family headers + jump chips + per-family "show all"; every card server-rendered and linked |
| product browser | cards with photo, parsed type, attribute chips, SKU as small metadata; filter chips toggle CSS `hidden` |
| editorial "issue" set | masthead spread, outlined-type ticker, sticky stacking feature cards, NumberFlow stats band, index rows as whole-row links with static image tiles |
| brand deck | pinned 300vh character-select deck; stage colour changes with the brand |
| profile book | company profile PDF as a book that opens on its hinge |
| group deck | sister companies as a fan of cards |

---

## 10. Page blueprints

**Home.** Hero (photo, quote H1, sub-line, CTA) -> dark statement
section (SplitHeading sentence naming the buyer + three numbered
capabilities with display numerals and a hairline) -> ambient film ->
featured brand section -> product wheel -> brand marquee -> materials
explore -> showroom locator -> global presence map -> FAQ (answers as a
display lead + short points; FAQPage JSON-LD from the same array) ->
contact form (the exact /contact form) -> channels finale.

**Products index ("the issue").** Magazine treatment: video or image
hero, masthead spread on the golden grid with drop cap, outlined ticker,
stacking feature spreads, stats band, index rows (table of contents, one
whole-row link per line), brand deck, authorization certificates, reach
us, WhatsApp section, profile book.

**Brand hub.** Title = authority claim + category enumeration. Hero with
logo and authorization statement, the lines as large linked panels with
counts, proof (certificates as viewable PDFs), FAQ, CTA.

**Product-line pillar** (owns the line + generic query). Hero with H1,
4 "pillar" facts with line icons, spectrum strip, ladder, shade
explorer, signature element, slab scale, finishes, test bench,
certificates (+ `<details>` table), applications as numbered grid,
lifestyle carousel, geo / delivery section, FAQ accordion, CTA. JSON-LD:
BreadcrumbList + ItemList + FAQPage.

**Category page** (one query each, e.g. a colour family). Intro written
for the query, filtered grid, links up and across. JSON-LD:
BreadcrumbList + CollectionPage/ItemList. Uses `title.absolute`.

**Item page** (one indexed URL per item; SSG, `dynamicParams = false`).
Breadcrumb -> H1 = item name -> attribute chips (series, size, family
link) -> swatch + lifestyle -> deterministic copy -> spec summary ->
related items from the same family (4) -> prev / next in catalogue
order -> CTA. JSON-LD: BreadcrumbList + Product.

**Blog index.** Label row with post count + rule, phi-4 H1 in voice,
quiet text category tabs (real links, no client filter), one featured
post, card grid, CTA band.

**Blog post.** Section 14.

**About.** Entity-first title, company facts, group deck, journal
teaser. AboutPage JSON-LD.

**Contact.** Interactive hero (slow aurora that leans toward the
cursor; canvas never mounts under reduced motion), channel cards (each
a real `tel:` / `mailto:` / `wa.me` / Maps link with the value as
text), the form.

**Legal + 404.** Plain, on the same system.

---

## 11. Rendering rules and performance budgets

### 11.1 Rendering (FIXED)

- **Server Components by default.** Static generation preferred.
- `"use client"` only for: animation wrappers, forms, filters/search,
  the film, map cards, the WhatsApp button.
- **All text, headings, product data, specs and images exist in the
  server-rendered HTML.** Pattern: server component renders content,
  a client "animator" island attaches behaviour.
- **View-source test:** every piece of indexable content is visible in
  the raw HTML response. If not, the build is wrong.
- Explorers, drawers, accordions, tabs: ALL items server-rendered;
  filters and expanders only toggle CSS `hidden` / opacity / grid rows.
  Every card links to its own page.
- Page readable with JS disabled.

### 11.2 Budgets (hard gates)

| Metric | Budget |
|---|---|
| LCP (mobile, throttled) | under 2.0s |
| CLS | under 0.05 |
| INP | under 200ms |
| Lighthouse mobile | target 100 x4; below 95 performance blocks merge |
| Initial route JS | 150KB gzip or less |
| Single asset | 300KB or less ON THE WIRE (check the `/_next/image` response, not the file on disk) |
| Mobile page weight | 1MB or less |
| Hero image | about 200KB; card images about 100KB |
| First paint on Slow 3G | under 3.5s |

- Images: AVIF + WebP via `next/image`, explicit dimensions, `sizes`
  always set with `fill`, lazy below the fold.
- Video: posters, `preload="none"` or `metadata`, in-view play only.
  NEVER YouTube embeds as decoration.
- Third-party: zero scripts in the critical path; analytics loaded
  after interaction or idle.
- Fonts: self-hosted, swap, preload only what the first screen needs.
- Adaptive loading: respect `Save-Data` and `effectiveType`.

**Mandatory notification rule:** if any element will exceed a budget or
measurably degrade LCP/INP, STOP and tell the owner before building it:
what it costs, why, and a lighter alternative. This includes requests
from the owner himself. Do not silently build heavy things; do not
silently strip them either.

---

## 12. On-site SEO system

Everything in this section shipped on gcbuae. Repeat all of it.

### 12.1 Strategy

- **One page, one primary query, plus a cluster of variants. Two pages
  never compete for the same query.** Keep a written registry (the blog
  registry and the data files are the registry) and check it before
  creating any page.
- **Be honest about what is winnable.** A manufacturer owns its own
  brand term. Target the distributor / supplier / price / city /
  comparison variants around it. Target shape, per query: reality
  check -> owning page -> the play.
- **Entrenchment is by distributorship, not content quality.** Where an
  appointed distributor exists the head term is locked; pricing,
  application content and brand-vs-brand comparisons are usually open.
- **Depth beats age.** One indexed URL per item (the long tail nobody
  executes properly), real spec tables, FAQ and Product schema,
  wholesale buyer copy. On gcbuae those four things were the moat: no
  local competitor had them.
- **Localise every commercial page naturally:** country and cities in
  copy, schema and NAP; prices in local currency; delivery stated
  plainly ("across the whole of the UAE", every emirate).
- **Geo SERPs are often spam-weak.** A dedicated geo section or post
  wins them ("quartz countertops Sharjah").
- **Speed matters when a vacuum is open.** Ship, then refine.

### 12.2 URL architecture

```
/                                   home (owns the site's primary query)
/products                           index of lines
/<brand>                            brand hub
/<brand>/<line>                     pillar
/<brand>/<line>/colours/[family]    category pages (one query each)
/<brand>/<line>/[item]              item pages (SSG)
/blog, /blog/category/[c], /blog/[slug]
/about, /contact, /privacy-policy, /terms
```

Lowercase, hyphenated, shallow. No dates, no params for canonical
content. Any URL change ever gets a 301 in config; a published URL never
404s. Every level named in a breadcrumb must have a real page.

### 12.3 Data layer

One typed file per product line in `src/config/`: the item array,
families (slug, label, query, intro), `bySlug` maps, and a
catalogue-order index for prev/next. EVERYTHING derives from it: pages,
sitemap, JSON-LD, counts, search index, llms.txt. A catalogue update can
never orphan a URL. Fail loudly on slug drift between config arrays.

### 12.4 Titles and descriptions

- Title 60 characters or less, and **use the whole budget**: primary
  keyword + authority claim + category enumeration. Helpers in
  `src/lib/seo.ts`: `seoTitle(base, ...extras)` appends extras while
  the budget holds; `seoDescription(core, ...tails)` fills to 160.
- **The Kerakoll lesson (owner):** a hub titled "Brand | Company"
  ranked #3 while competitors held #1 with "Brand Authorized
  Distributor - Category, Category, Category". Same content; the title
  cost the position. Never ship a bare brand + company title.
  Shipped examples: "KalingaStone Supplier UAE - Quartz, Marble &
  Terrazzo Slabs"; "Jaquar Authorized Dealer UAE - Faucets, Basins,
  Showers"; item: "<Name> - KalingaStone Quartz Slab UAE | Global Classic".
- **The word buyers type leads** ("Supplier"), on exactly one page.
  Child hubs do not repeat it.
- Layout template `%s - <Brand> <Geo>`; hubs, categories, items and
  posts use `title.absolute`. Never put the geo in the templated part
  (double-geo bug: "...UAE - Global Classic UAE").
- No pipe-stuffed keyword lists.
- Description 140-160 characters: what it is + proof + price/stock +
  delivery. Intent and a reason to click.
- After any template change, crawl the build and write a metadata
  inventory CSV (route, title, length, description, length, canonical);
  gate on zero duplicate titles.
- Site-name changes take weeks to show. Check Search Console before
  touching titles again.

### 12.5 Technical plumbing

- `metadataBase`, default title + template, description, canonical,
  `alternates.languages` (`en` + `x-default`), Open Graph, Twitter
  `summary_large_image`, robots index/follow with
  `max-image-preview: large`.
- **Canonical on EVERY route.** A page without its own
  `alternates.canonical` inherits the root layout's `/` and tells
  Google it is a copy of the home page.
- `robots.ts`: allow all, point to the sitemap, and nothing else. It is
  the ONLY robots source. **Zero `noindex` anywhere** (a competitor's
  homepage was invisible because of exactly this). AI crawlers (GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended) are allowed.
- `sitemap.ts`: generated from the data registries; posts use their
  real `dateModified`.
- `/llms.txt`: a static route generated from the same registries
  (one-paragraph company summary, hubs with counts, buying pages, every
  post with its description).
- RSS feed at `/blog/feed.xml`.
- **IndexNow:** a key file in `public/<key>.txt` plus
  `scripts/indexnow-submit.mjs`. One ping notifies Bing, Yandex, Seznam
  and Naver (not Google). The key file must be live before submitting.
  Full-sitemap pushes only at launch and structural releases; otherwise
  submit just what changed.
- Open Graph image: 1200x630 **JPG** (Next ignores `.webp` for
  `opengraph-image`), generated by script with the hero quote baked in
  as vector outlines, plus `opengraph-image.alt.txt`. Item and post
  pages set their own OG image.
- Favicons: `favicon.ico`, `icon.svg`, `apple-icon.png` (180px, also
  the Organization logo, which needs 112px square or larger at a stable
  path).
- Branded 404 with a real 404 status. `poweredByHeader: false`.
- Host level: apex 301 to the canonical host (or the reverse, once),
  HTTPS + HSTS, confirm production is not a preview environment adding
  `X-Robots-Tag: noindex`.
- Launch: Google Search Console domain property, submit the sitemap,
  request indexing for home + hubs + the strongest posts; Bing
  Webmaster Tools (import from GSC); GA4 loaded deferred.
- `hreflang`: English now, architecture ready for `/ar`.

### 12.6 Structured data (JSON-LD, only where it matches visible content)

Always serialize with `JSON.stringify(x).replace(/</g, "\\u003c")`.
Unfilled config fields resolve to `undefined` so they drop out; empty
strings are malformed to Google.

| Where | Types | Notes |
|---|---|---|
| Every page (layout) | `["Organization","LocalBusiness"]` | `@id: <url>/#organization`; `name`, `legalName` (exact licence name), `alternateName` (short brand, acronym, acronym + geo); `logo`; `address`; `contactPoint` x2 (sales, customer service) with `areaServed`; `parentOrganization`; `sameAs` (Instagram, LinkedIn, Google Business Profile entity URL) |
| Every page (layout) | `WebSite` | `@id: <url>/#website`; `name` = the short brand buyers type; `alternateName`; `publisher` -> the organization `@id`. No SearchAction unless a real search URL exists |
| Everywhere with a trail | `BreadcrumbList` | built by `breadcrumbJsonLd(crumbs)` from the SAME array that renders the visible breadcrumb |
| Home | `ItemList` + `FAQPage` | FAQ built from the same array the section renders |
| Pillar | `BreadcrumbList` + `ItemList` + `FAQPage` | |
| Category | `BreadcrumbList` + `CollectionPage` / `ItemList` | |
| Item | `BreadcrumbList` + `Product` | `name`, `brand`, `material`, `image[]`, `description`, `sku`, `size`, `offers` (`InStock`, currency, `areaServed`, `seller`) |
| Post | `Article` + `FAQPage` + `BreadcrumbList` in one `@graph` | author and publisher = the Organization |
| About | `AboutPage` | names the company and its group |

Principle: **one array renders the visible thing AND its schema**, so
they can never disagree.

### 12.7 Brand and entity SEO

- Google's site-name signals are the `WebSite` schema `name` and
  `og:site_name`. Keep both equal to the short brand, and make sure
  that exact phrase appears in the header, footer and body.
- Put every branded query buyers type (full name, short name, acronym,
  acronym + geo) into the Organization name set so they reconcile to
  ONE entity.
- `/about` is the brand-query landing page: lead its title with the
  exact entity name.
- Entity clarity in copy: name real entities and their relationships
  explicitly (manufacturer, plant, technology partners, the group, the
  distributor relationship).
- Off-site (owner actions, not in the repo): Google Business Profile
  with the exact name, then add its entity URL to `sameAs`; Search
  Console verification; a cross-link from the parent site with a brand
  anchor; a dealer listing on each manufacturer's site; social display
  names; NAP-consistent directory citations.

### 12.8 Interlinking (hub and spoke - mandatory)

- Every new page gets at least 3 contextual internal links IN and 3
  OUT at publish time, with descriptive anchors ("Calacatta Lazza
  quartz", never "click here").
- Pillars link to every child; children link back, to their category,
  to 4 related items, and to prev/next.
- Care / accessory content links to every product page it serves, and
  back.
- Every post links to at least 2 product or pillar pages + 1 other
  post; every post carries a product CTA button to the page it sells;
  pillars link to their supporting posts.
- Breadcrumbs on everything. No orphan pages (crawl for orphans before
  deploy).

### 12.9 Group sites: coordination, not competition

If the same group owns another site in the same SERPs:

- **One primary query, one page, ONE DOMAIN.** Write a territory table
  and check it before either site publishes.
- Link the entities in schema (`parentOrganization` /
  `subOrganization`) and name the group identically on both.
- Editorial, contextual links only (a few genuine placements). No
  sitewide reciprocal footer exchanges across group domains - that is a
  link-scheme pattern. A footer link to the PARENT only is fine.
- **No content copying between domains, ever.** Same facts, different
  words, cross-linked.
- Distinct NAP and Business Profile per company.
- No doorway or geo-page farms mirrored across domains.

### 12.10 Accessibility as SEO

Semantic HTML; one `h1` per page (if the visible headline lives in a
mask or image, add a real heading); ordered heading levels; `nav` /
`main` / `footer` landmarks; **every image has a descriptive alt that
describes the product**, not "image of room". `alt=""` gets flagged as
missing by SEO/GEO tools; run `scripts/audit-image-alts.mjs` after
`npm run build` (it scans every prerendered HTML file and exits 1 on
offenders).

### 12.11 AI Overview / answer-engine readiness

Same ranking systems, so no gimmicks. What actually shipped: allow AI
crawlers; `/llms.txt`; a verbatim direct answer as the first paragraph
of every post; question H2s with direct answers; FAQPage schema;
Organization schema with NAP and parent for entity grounding; honest
visible dates.

---

## 13. Content: voice, structure, fact law

### 13.1 Voice

**Assured, spare, architectural.** A design house that happens to rank.
Written from the warehouse, not from a search results page.

- Speak to specifiers and volume buyers: stock, specs, formats,
  delivery, currency pricing, BOQ turnaround.
- Short declarative sentences. Concrete nouns and numbers. A little
  dry wit is allowed in headlines ("That page is not on the racks.",
  "Field notes from the slab trade.", "Questions, answered.").
- Honest framing wins trust and rankings: say where a product is NOT
  the best choice ("the most refined surface, not the toughest").
- **Banned:** "premium quality", "wide range", "best in class", "in
  today's world", "when it comes to", rhetorical questions as
  transitions, keyword-stuffed lists.
- **NO long dashes, ever** (owner, 2026-08-11): no em dashes or en
  dashes in copy, titles, metadata, alt text or JSON-LD. They read as
  AI writing. Plain hyphen: " - " between clauses, "150-250 MPa",
  "Mon-Sat". Grep for U+2014 and U+2013 before every push (a sweep once
  replaced 578).
- Proofread generated copy for foreign-script artifacts (a Cyrillic
  word once shipped).

### 13.2 Structure for extraction

- H1 = the primary query intent. Variants live in H2s.
- **H2/H3 phrased as the real question, followed by a 40-80 word
  direct answer in the first paragraph.** Then depth. Never a 300-word
  wind-up.
- FAQ answers 50 words or less, complete on their own.
- Home FAQ answers are a display lead + short points, never a wall of
  paragraph.
- First-hand signals (E-E-A-T): our stock, our showroom, our spec
  sheets, our photos. Every piece needs at least one thing only we can
  say.
- Local specificity is mandatory: climate, water, building context,
  local currency, city names.
- Prices: honest ranges with "as of <year>" framing and the basis
  stated (supply-only vs installed). Never an invented precise price.
- Freshness: review pillars at least every 12 months; show honest
  dates; update `dateModified` only on real edits.

### 13.3 Fact law (FIXED)

- **The catalogue extraction is the single source of truth.** Never
  invent, extend or "correct" an item name, spec, certification or
  price. Brand spellings stay as printed (Wizzard, Bianco Gioa, Artic
  White are real).
- Typos and defects in the source get flagged, never silently fixed and
  never leaked into published copy.
- Every fact in an extraction carries its page number.
- Claims are scoped exactly as printed: an option is "an option", a
  warranty is per part, a rating is per model. Never a blanket claim.
- No claim the source does not make (no food-safe claim on a product
  the catalogue does not certify).
- Authorization wording follows the certificates exactly.
- If a fact is uncertain (prices, regulations): state a range and
  "verify with the supplier / authority".

### 13.4 The copy engine (how 128 item pages avoid duplicate content)

`src/lib/<line>-copy.ts` composes deterministic paragraphs from facts
only: a family-character phrase, a tier-position sentence, a format
paragraph, conditional paragraphs for flags (antibacterial option, NEW
mark), and an applications/finishes close. Sentences vary by facet so no
two pages read identically, and nothing visual is invented beyond
family-level language - the photograph does the describing. The same
`intro()` feeds the Product schema description.

---

## 14. The blog system ("The Journal")

### 14.1 Shape

- **Hub and spoke:** 6 pillars + cluster posts (gcbuae shipped 45
  across 6 categories). Every cluster links up to its pillar + 2
  siblings + 1 product page.
- **The gap to aim at:** comparisons (X vs Y, brand vs brand),
  price guides in local currency, climate-specific care/how-to, and
  geo posts. Competitors do not answer these properly.
- **Registry:** `src/config/blog.ts` - per post: `slug, title,
  description, category, kind (pillar|cluster), primaryQuery,
  secondaryQueries, datePublished, dateModified, heroAlt, productCta
  {href,label}, related[], readMinutes`. Routes, sitemap, RSS, JSON-LD,
  related posts, category pages and llms.txt all derive from it. It IS
  the cannibalization check.
- **Content:** `src/content/blog/<slug>.ts` exports `{ answer,
  sections: [{h2, body}], faq: [{q, a}] }`. Bodies are plain prose;
  paragraphs split on blank lines; inline links are `[anchor](/path)`
  rendered server-side into real anchors. A missing content file fails
  the build.
- Category pages are indexed, each with a written 150-word intro in the
  category's tone.

### 14.2 Writing rules (binding)

1. The DIRECT ANSWER (40-80 words) is the first paragraph, plain
   prose, **never a blockquote** (extraction pattern). Once approved it
   is final copy: not paraphrased, not softened.
2. Each H2: 120-250 words, direct-answer sentence first, then depth.
   Pillars 1,500-2,500 words; clusters 800-1,200. Typically 5-6 H2s.
3. Local specificity per post: at least two of {heat, humidity, hard
   water, sand/dust, villa/apartment context, municipality norms, local
   price framing}.
4. Brand mentions only where relevant, at most 2 per post, never in the
   direct answer.
5. Descriptive anchors; links placed per the cluster map.
6. FAQ block: 3-5 questions, answers 50 words or less.
7. No post targets another post's primary query.
8. Slugs, titles and meta descriptions are locked once approved.

### 14.3 Expansion protocol (per post)

Take the meta from the map -> paste the ANSWER verbatim as paragraph
one -> write each listed H2 (direct answer first) -> write the FAQ ->
insert links with descriptive anchors -> generate the schema -> run the
publish checklist. Do not add H2s that are not listed. Do not change
slugs, titles or metas.

### 14.4 Post template

Breadcrumb (Home / Journal / Category / Post) -> label line (category,
read time, date) -> phi-3 H1 -> hero figure (hairline frame, 2:1 on
mobile, 21:9 from `sm`, `preload`, quality 90, descriptive alt) ->
two-column grid `minmax(0, 68ch) 1fr` -> the answer as a phi-1 light
paragraph -> sections (a 48px accent rule, then a phi-2 H2 with a
slugified `id` and `scroll-mt-28`, then paragraphs) -> product CTA band
(dark, `rounded-3xl`: label, one line, primary button to the product
page + a "Price your BOQ" chip) -> FAQ accordion -> author block (the
Organization, honestly, linked to /about) -> sticky table of contents
(pillars only, desktop only) -> 3 related posts.
Zero client JS in the reading column except the FAQ island.

### 14.5 Publish order

Lead with the highest-volume comparison, then the commercial pillar it
feeds, then the care gap nobody covers, then the pillar that owns a
governance target, then a price post. Then the remaining pillars, then
clusters at a steady cadence. After a SERP validation pass, ship posts
directly against confirmed vacuums.

---

## 15. Research method: competitors, SERPs, catalogues

### 15.1 Competitor audit (run before building, re-run quarterly)

For each competitor record: platform, URL patterns, title style,
sitemap state, schema types present, per-item pages or not, blog
cadence and freshness, hreflang, obvious blunders (noindex, placeholder
titles, hacked pages, 404s), strengths (age, authority, funnels), and
the weakness to exploit. Then a discovery sweep for unknown players.

What that surfaced on gcbuae, as a template for what to look for:

- a main rival whose whole brand section had 404'd (a ranking vacuum,
  and its dead URLs became link-reclamation targets);
- a rival with per-item pages but a `noindex, nofollow` homepage;
- a rival whose rebuilt CMS shipped a placeholder title on every page;
- hundreds of item pages padded with identical boilerplate;
- nobody with Product schema, FAQPage, spec tables or B2B copy;
- one technical benchmark to match on schema depth;
- one rising threat to track monthly, not quarterly;
- directories that colonise "[product] suppliers [country]" head terms
  (get listed, do not fight them);
- a partner site misread as a competitor (classify group sites first).

Standing rule: quarterly re-crawl of all tracked competitors; diff
their sitemaps; note new content clusters; report to the owner.

### 15.2 SERP validation

For 30+ target queries, check the live SERP composition and grade each:

- **EASY** - no credible direct answer exists (pricing vacuums,
  brand-vs-brand, geo, application how-tos, results polluted by
  unrelated entities).
- **MEDIUM** - one or two real answers, thin listicles.
- **HARD** - entrenched showroom domains or the brand itself; win via
  qualified variants (add the geo, the price, the comparison).

Record the baseline (gcbuae started at zero of 33). State method limits
honestly: which index was searched, what the fetcher could not see,
whether volume data was available. Validate targeting by SERP
composition when volume data is missing.

### 15.3 Catalogue extraction (the two inputs per product line)

1. **Extraction MD** - a verbatim, exhaustive extraction of the printed
   catalogue: brand and manufacturer table; one section per category
   with collections in the catalogue's order; per item: name EXACTLY as
   printed, SKU, finishes, sizes, price only if printed, page, image
   file; verbatim claims in quotes; tech sections; warranty;
   certifications; spec tables reproduced exactly; and a final numbered
   "Notes for website content generation" list (never-invent warnings,
   spelling landmines, contradictions with what is live, quotable
   statistics, image-resolution notes).
2. **Image set** - per-item crops named by display name, plus an
   `index.csv`. Inspect the PDF first to see whether images are
   discrete embedded objects (extract directly) or flattened pages
   (rasterise at high DPI and crop). Convert to WebP into
   `public/<brand>/<line>/swatches/` and `/lifestyle/` with kebab-case
   slugs matching the data file. Crop printed captions off lifestyle
   photos.

### 15.4 The three passes (the owner's intended workflow)

1. **Content and SEO pass** - competitive research, data file, copy,
   JSON-LD, URL architecture, all pages building and indexable.
2. **Creative pass** - replace every table, chart and list with
   designed interactive sections; generated imagery; the signature
   element.
3. **Refinement pass** - the owner reviews with screenshots and gives
   precise surgical notes. Fix EXACTLY what is pointed at, nothing
   wider.

---

## 16. Imagery and video pipeline

- **Derivatives are generated by script, not hand-made.** Hero: edit
  `hero-copy.json`, run the builder; it writes the WebP hero and the OG
  JPG with the quote baked in.
- **Text over photography sits in a measured safe zone.** gcbuae's
  hero: x 25-62% / y 11-67% of the source, hence
  `object-position: 43.5% 50%` and a text block capped at 37rem anchored
  at 46.5%. If the photograph changes, re-measure before moving text.
- **Generated imagery (Higgsfield):** model `nano_banana_pro`, 4K,
  palette-locked prompts ("no beige or yellow cast", one named accent
  colour, "no text, no watermark"). Lifestyle images 4:3. Decor leads
  with the accent colour. Keep the 4K masters in `assets/source/<line>/`
  (gitignored) before the session ends. Log every job in a provenance
  doc (job id, model, credits before/after, prompt, output path).
- **Credit discipline:** before ANY spend, check the balance, preflight
  the cost, state the planned total, and get a fresh yes in that
  conversation. Credit approvals are situational, never standing.
- Known traps: one upscaler flattens alpha (pre-composite cutouts onto
  the light ground first); empty-bathroom / spa scenes trip false NSFW
  flags (reword as "empty architectural interior, still life, no
  people"); reject outputs with hallucinated label text.
- **Derivatives:** sharp, sized at 2x the CSS display slot, one light
  compression (quality 84-90, effort 6), served via
  `next/image quality={90}`. Never double-compress and never let the
  display slot exceed the source width - both read as pixelation.
- **Video:** section 9.5. Poster-first, in-view only, H.264, two tiers.
- White-ground product cutouts do not blend on coloured stages;
  swatches and scenes do.

---

## 17. Owner rulings ledger and supersessions

The owner's instructions while building gcbuae, distilled and dated.
These are the "prompts" in rule form.

| Date | Ruling |
|---|---|
| 2026-08-05 | Positioning: slabs only, wholesale B2B; buyers are companies. Keep the lifestyle surface; never state it bluntly |
| 2026-08-05 | Priority order: SEO > CWV > mobile > design > everything else. Mandatory notification before anything heavy |
| 2026-08-06 | Palette finalised: five colours, nothing else in the UI. No OS dark mode |
| 2026-08-06 | Shared chrome changes get verified on every route and on mobile before pushing |
| 2026-08-07 | The line colour is never a text colour |
| 2026-08-08 | Every pill chip/button hovers to dark ground + light text |
| 2026-08-08 | Each hub gets one exclusive signature interaction |
| 2026-08-08 | Tables and bar charts read as "AI slop"; show data with the real product imagery |
| 2026-08-11 | No em or en dashes anywhere, ever |
| 2026-08-11 | Golden-ratio type scale and 1.618 splits for editorial pages |
| 2026-08-13 | One crumbs array renders the breadcrumb and its schema; every level needs a real page |
| 2026-08-14 | Product walls become a browser of cards (photo, parsed type, chips); the raw table survives only in `<details>` |
| 2026-08-14 | Never spend generation credits without a fresh explicit yes |
| 2026-08-17 | No browser screenshot loops: run checks, hand over, the owner reviews visuals himself |
| 2026-08-17 | Floating WhatsApp: the glyph leads, the dark disc never dominates the corner |
| 2026-08-18 | Hub titles carry authority claim + category keywords (the Kerakoll lesson) |
| 2026-08-18 | FAQ uses circle markers; answers are a lead + points, not paragraphs |
| 2026-08-18 | AI readiness: allow AI crawlers, ship llms.txt, direct answers + FAQ schema |
| 2026-08-18 | Group sites are partners: split query territory, link entities, never copy content |
| 2026-08-19 | The page must never pan sideways on phones |
| 2026-08-20 | The site opens at full rest: no opening animation; first-screen content is static |
| 2026-08-20 | The fixed footer reveal is desktop only; phones get normal flow |
| 2026-08-21 | Marquees never pause on hover |
| 2026-08-21 | Cursor-trailing floating previews read as glitchy; use small static tiles |
| 2026-08-21 | Film copy speaks to the product under each word; never "premium quality" or "wide range" |
| 2026-08-24 | Brand entity: short brand in WebSite schema + og:site_name; licence name in legalName; "Supplier" leads the hub title |
| 2026-08-24 | Every image carries a descriptive alt; audit the built HTML |
| 2026-08-24 | IndexNow for Bing/Yandex instead of waiting on crawl budget |

**Supersessions** (older docs say otherwise; these are final):

- The original brief's palette (forest `#0E3B2C`, bone, charcoal,
  brass `#A8875A`) and Fraunces-as-display were replaced by the five
  colours and Cormorant Garamond Light.
- The original pinned, play-once scroll film (about 400vh, curtain
  transitions) was rejected and replaced by the ambient loop.
- "No llms.txt needed" was replaced by shipping one (cheap, generated).
- `/collections/<material>` URLs became `/<brand>/<line>/...`.
- Blog MDX files became typed `.ts` content modules.
- `priority` on images became `preload`.
- The title template separator is a plain hyphen.

---

## 18. Mistakes ledger - each of these was paid for once

1. React keys from display text -> duplicate-key errors. Key by index
   or id.
2. A foreign-script word survived into shipped copy. Proofread.
3. Huge gaps between sticky cards -> screens of empty ground.
4. `overflow-hidden` on an ancestor killed `position: sticky`.
5. Pixelation = double compression + retina upscaling.
6. Near-black at 40% alpha = grey.
7. **Scope discipline:** a screenshot saying "these lines" means THOSE
   lines. Changing a global token to fix a local note had to be
   reverted. Ship risky styling trials as one isolated commit.
8. Screenshots in macOS temp folders vanish in seconds. Read them
   FIRST, before any other tool call, or ask for a Desktop path.
9. Title template double-geo.
10. Embla scroll state must use `useSyncExternalStore`, not setState in
    an effect (eslint `set-state-in-effect`).
11. NumberFlow's `format` prop is its own type, not
    `Intl.NumberFormatOptions`.
12. SVG stroke-draw needs `pathLength={1}` on every path.
13. The pinned pattern took two rounds: section holds, instrument
    fixed, cards slide, scroll visibly drives change.
14. Line-colour-as-text stragglers hide in odd places (a rotated
    dimension label). Grep after every new section.
15. A `grep -c` returning 0 exits non-zero and silently skips chained
    verification. Verify the actual output; do not push blind.
16. A missing page-level canonical made a page declare itself a copy of
    the home page.
17. An off-canvas mobile menu parked with `translate-x-full` widened
    the mobile layout viewport and side-panned every page.
18. A nowrap button label and an unbreakable breadcrumb each caused
    horizontal scroll on phones.
19. The fixed footer registered as LCP on short pages until it was
    hidden until near.
20. ScrollToPlugin fought Lenis (the wheel "bounced"). Scroll through
    Lenis.
21. iOS URL-bar resize refreshed ScrollTrigger pins mid-scroll.
22. VP9 WebM froze Safari on the poster. H.264 only.
23. Mounting video sources at load pulled megabytes during first paint
    (`autoPlay` defeats `preload="metadata"`). Mount sources near view.
24. Slug drift between two config arrays rendered empty image `src`s.
    Fail loudly.
25. A focus-within mega menu stuck open after a click. Control it in JS
    with hover intent.
26. An 85% alpha header composited off-palette colours.
27. Working from an iCloud-synced folder corrupted the build cache.

---

## 19. Working agreement with the owner

- **Flag before building, not after.** Be direct about what will not
  work, with the cost and a lighter alternative.
- **Ask with tappable multiple-choice options**, not prose questions.
- **Do not drive a browser to verify visuals.** Run typecheck, lint,
  build and cheap programmatic checks (grep sweeps, curl route status),
  then hand over. He reviews and returns precise notes.
- **Fix exactly what is pointed at.** Nothing wider.
- **Never invent** a product, shade, spec or price.
- **Never spend credits** without a fresh yes.
- One commit per risky visual change, for clean undo.
- Proactively flag: budget breaches; anything that would client-render
  indexable content; a new page competing with an existing page's
  query; competitor changes; any URL structure change (needs a 301
  plan); unclaimed queries, schema types and content gaps noticed along
  the way.
- Write decisions into the repo docs (governance, playbook, audit,
  deploy checklist) so the next session inherits them.

---

## 20. Checklists

### 20.1 Per-page publish

- [ ] One primary query assigned; no cannibalization with existing pages
- [ ] Title (60ch or less, budget used), description (140-160ch),
      canonical, OG - all unique
- [ ] One H1; question H2s with 40-80 word direct answers where
      informational
- [ ] Server-rendered content passes the view-source test
- [ ] JSON-LD valid and matching visible content
- [ ] Images AVIF/WebP, sized, descriptive alt, lazy below the fold
- [ ] At least 3 internal links in and 3 out; breadcrumb; in the sitemap
- [ ] Mobile Lighthouse 95+ performance / 100 SEO / 100 accessibility;
      tested at 360px and 2560px
- [ ] Reduced motion verified on every animation
- [ ] No noindex, no robots block
- [ ] No long dashes; no line colour used as text

### 20.2 Pre-push

```bash
npm run typecheck && npm run lint && npm run build
node scripts/audit-image-alts.mjs
grep -rnP "[\x{2014}\x{2013}]" src      # must return nothing
```

- All routes 200 on the production build (`npm start` + curl),
  including new item and category pages
- Content, JSON-LD and prev/next present in RAW HTML
- Sitemap count = pages built
- Shared chrome touched? Verify every route + a mobile viewport
- Wire-size spot check of the heaviest `/_next/image` URLs

### 20.3 Launch (automated crawl of the production build)

- [ ] Every sitemap route returns 200
- [ ] Every internal link on every page resolves
- [ ] Every referenced asset resolves
- [ ] Every JSON-LD block parses
- [ ] Metadata inventory: lengths in range, zero duplicate titles,
      canonical on every route, zero noindex
- [ ] robots.txt, sitemap.xml, llms.txt, RSS, favicons, OG image: 200
- [ ] Branded 404 returns a real 404
- [ ] Contact form: a real sample enquiry delivered end to end
- [ ] Template cruft removed from `/public`

Owner, at the host: canonical-host 301, HTTPS + HSTS, production env
vars, confirm no platform noindex, Search Console + sitemap + indexing
requests, Bing Webmaster Tools, IndexNow first push, GA4, Business
Profile and the off-site list in 12.7.

---

## 21. Kickoff prompt for the new repo

Paste this as the first message in the new project, with this file in
the repo root and section 1 filled in:

```
Read DESIGN-HANDOFF.md in full before doing anything. It is the binding
design, animation, SEO and content system from gcbuae.com; this new site
must look, move, read and rank the same way with different content.

Reference implementation: ~/dev/gcbuae (read-only; copy the files listed
in handoff section 3, then rename brand strings). Do not copy any site
copy from it.

Step 1: scaffold the stack in handoff section 3 in ~/dev/<new-site>,
port tokens, fonts, lib, hooks, providers, motion primitives, buttons
and shared chrome, and fill src/config/site.ts from handoff section 1.
Step 2: write GOVERNANCE.md for this site (target queries mapped to
owning pages, competitor audit per handoff section 15, budgets) and
AGENTS.md (conventions + rulings from handoff sections 4-9 and 17).
Step 3: stop and show me the route map and the query registry as
multiple-choice decisions before building pages.

Rules that override convenience: priority order in handoff section 2;
five-colour palette; no long dashes; SSR-first with the view-source
test; first screen static; never invent facts; flag anything heavy
before building; do not use the browser to check visuals - run
typecheck, lint and build, then hand over to me.
```
