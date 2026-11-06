# DESIGN-CONCEPT.md - Sahihi Construction Chemicals

Written 2026-11-05. Companion to `DESIGN-HANDOFF.md` (the gcbuae system,
binding) and `GOVERNANCE.md` (rules and budgets). This file says how that
system is re-keyed for a construction chemicals distributor in Dar es
Salaam, and lists the design decisions that are still the owner's to make.

Status key: **FIXED** = carried from the handoff unchanged. **SET** =
decided here and implemented in the scaffold. **DECIDE** = owner decision,
a default is implemented so work is not blocked.

---

## 1. The concept in one sentence

**An engineering house that happens to rank.** gcbuae is "a design house
that happens to rank" (Molteni / Cosentino / Aesop, not a tile shop).
Sahihi keeps the same editorial skeleton and swaps the reference shelf:
Arup annual report, Kerakoll, a Hilti technical manual set by a magazine
art director. Not a hardware store, not a chemical-drum catalogue.

The product is invisible once it has done its job. A membrane disappears
under tiles, a repair mortar under paint, an admixture into the pour. So
the site does not sell the bucket. It sells what the bucket does to a
building over twenty years: **water stays out, tiles stay down, floors stay
whole, concrete stays sound.** The tagline already says it: Enhance Your
Building Life.

### What that means on the page

- **Catalogue surface, specification spine.** Pages read like a technical
  journal. Under them is exact data: classification, consumption, pack
  sizes, standards. No prices anywhere (owner ruling, 2026-11-05); every
  price intent is answered by a quote route, never a number.
- **The section drawing is the house illustration style.** Where gcbuae
  shows real stone, Sahihi shows the build-up: substrate, primer, membrane,
  mesh, adhesive, tile, drawn as hairline cross-sections and exploded
  layers. One style, used for heroes, diagrams, icons and empty zones.
- **Spec data has its own voice.** Classifications and figures (C2TE S1,
  EN 12004, 1.2 kg/m2 per mm) are set in a mono face, small and exact,
  like the title block of a drawing. Headlines stay in the light serif.
- **Fixed, art-directed grounds.** Chalk and three pastel stages (Sky,
  Mint, Butter), alternating; the footer is the one dark ground. Stages
  carry grain. No OS dark mode.
- **Hairlines, not boxes** (FIXED). 1px full-strength rules, pill chips,
  numbered lists. No drop-shadow cards, no decorative gradients.
- **Motion with weight** (FIXED). Mask-and-rise reveals, one pinned
  instrument per pillar, nothing bounces, first screen fully static.
- **Light that follows the hand** (FIXED). The specular rim button stays
  the one recurring expensive gesture.
- **Golden ratio** (FIXED). Type steps by 1.618; splits are 1.618fr / 1fr.

Priority order when trade-offs happen (FIXED, binding):
1. SEO and indexability 2. Core Web Vitals 3. Mobile, including poor
networks 4. Design fidelity and animation 5. Everything else.

---

## 2. What carries over, what changes

| Area | gcbuae | Sahihi |
|---|---|---|
| Layout, phi scale, hairlines, chips, buttons, chrome | the system | FIXED, ported (see `scripts/port-from-gcbuae.sh`) |
| Palette | five greens and stone | five roles re-coloured from the Sahihi logo (section 3) |
| Token names | legacy material names | role names: `deep`, `chalk`, `line`, `accent`, `surface` |
| Display face | Cormorant Garamond Light | kept (DECIDE 4.1) |
| Third face | Fraunces, film words only | Geist Mono, spec data only |
| Data-viz | real swatches, slabs to scale | drawn sections to true relative thickness |
| Hero | photograph with safe zone | photograph with safe zone; drawn section until imagery exists |
| WebGL | ogl (button rim) | ogl for the button; Three.js for ONE lazy signature element per hub at most (section 7) |
| Prices | AED trade pricing shown as ranges | never shown; quote routes only |
| Buyers | fabricators, decor companies | contractors, applicators, consultants, developers, resellers |

---

## 3. Colour - palette "Bahari Solid" (owner, 2026-11-06)

**Superseded on 2026-11-06.** The owner dropped the pastel palette: "I want
solid colours because the area Tanzania people like colourful websites ...
solid and popping just like the logo". The stage roles below are
unchanged; their colours are now the logo's own:

| Role | Was (pastel) | Now (solid) | Ink contrast |
|---|---|---|---|
| accent | Sky `#C8E4EF` | Sahihi Blue `#07ADD7` | 5.7:1 |
| line | Mint `#D2E7D8` | Tick Green `#3CCB5A` (the logo green `#0C6B14`, lifted so Ink reads on it) | 7.1:1 |
| surface | Butter `#F6EFC9` | Signal Yellow `#FDF70B` | 13.2:1 |

Rules that changed with it: secondary (72% Ink) text is not allowed on
Blue or Green and becomes full Ink there; hero words sit on a solid panel
over the photograph, never on the photograph; six photographs were
re-made saturated (heroes, Mapei masthead, tiling, sports court, grout
macro). Product pages add the manufacturer's colour as `--brand`.
The text of this section below describes the pastel version and is kept
as the record.

### 3.0 The pastel palette (2026-11-05, superseded)

History, same day: the owner first confirmed "Bahari" (a deep blue-black
stage system), then ruled **"I want the colour palette mostly pastel"**.
This section is the pastel palette that replaced it. Four of the five
colours are pastels; the fifth has to stay dark because it is the text.

Bahari is Swahili for ocean. The three pastels are the logo's own blue,
green and yellow, tinted and slightly greyed so they read as paper stock
rather than as sweets.

| Role | Token | Name | Hex | Use |
|---|---|---|---|---|
| ALL text + the dark anchors | `deep` | Ink | `#0C2A36` | every word on every ground; full-strength frames; the footer, the route curtain and the WhatsApp disc are the only dark grounds left |
| Pastel stage 1, "the accent" | `accent` | Sky | `#C8E4EF` | hero, FAQ answer panel, mobile menu, selection; eyebrows and focus ring on the dark footer. The logo blue, tinted |
| Pastel stage 2, "the line colour" | `line` | Mint | `#D2E7D8` | solutions, vision and mission, the call-to-action band; soft borders. The logo green, tinted. NEVER text |
| Pastel stage 3, "the surface" | `surface` | Butter | `#F6EFC9` | commitment, leadership, hover washes. The logo yellow, tinted |
| Page ground | `chalk` | Chalk | `#FAFBF8` | default ground; text on the dark footer |

**What changed structurally.** The handoff alternates light stages and
dark stages. Here the alternation is **Chalk and pastel**: a "stage" is
`bg-accent`, `bg-line` or `bg-surface` with `text-foreground` and
`grain-sh`. The grain stays: on a pastel it reads as paper tooth. The
footer keeps the dark ground so the page still has a floor.

Measured contrast (WCAG):

| Pair | Ratio | Verdict |
|---|---|---|
| Ink on Chalk | 14.4 | AAA |
| Ink on Sky / Mint / Butter | 11.3 / 11.5 / 12.9 | AAA |
| Muted (Ink at 72%) on Chalk / Sky / Mint / Butter | 5.9 / 5.2 / 5.3 / 5.7 | AA |
| Chalk on Ink (footer) | 14.4 | AAA |
| Sky on Ink (footer eyebrows) | 11.3 | AAA |
| Any pastel as text on Chalk | under 1.3 | never |
| Logo blue on Sky (header over the hero) | 2.0 | a logo, not text; reads as a bold wordmark, weaker than on Chalk (2.5) |

Laws that follow from the numbers:

- **A pastel is a ground, never type and never a hairline that has to be
  seen.** Text, icons, rules that carry meaning and the focus ring are
  Ink. On the dark footer the eyebrows and focus ring are Sky.
- The line colour is never a text colour (FIXED). Grep for `text-line`.
- Frames and hairlines in Ink ship at full alpha, 1px (FIXED).
- Every pill chip and pill button hovers to Ink + Chalk (FIXED).
- Header bar fully opaque when solid (FIXED). Over the hero it is
  transparent with Ink text.
- **The Sahihi logo sits only on Chalk, Sky or the dark footer.** Never
  on Butter: the yellow disc disappears (1.02:1).
- Buttons: `solid` (Ink fill, Chalk text) is the primary call to action
  on any pastel stage; `light` (Ink hairline, faint Chalk fill) is the
  secondary; `dark` is for the footer.

### The two sanctioned exceptions

1. **The Sahihi mark.** Its Signal Yellow `#FDF70B` and Tick Green
   `#0C6B14` exist only inside the logo artwork. They are never UI colours.
2. **Third-party brand logos** (Mapei, OYH, X-Calibur, CMCI, BIHUI) render
   in their original colours. Trademark respect.

### Considered and set aside

| Option | Character | Why not |
|---|---|---|
| Bahari (deep): `#071E29`, `#0E6A85`, `#07ADD7`, `#F4F8F9`, `#D3DDE1` | cool, technical, dark stages | confirmed, then replaced by the owner's pastel ruling |
| Signal: graphite + the logo yellow | site-safety, industrial | reads "hardware" fast |
| Kijani: forest + tick green | closest to gcbuae | three saturated hues fighting |

To retune a pastel, change its one line in `globals.css` and its mirror
in `brand-button.tsx`, then re-run `scripts/lighthouse.sh` for contrast.

---

## 4. Typography

| Role | Family | Notes |
|---|---|---|
| Sans (body, UI) | Manrope (variable) | FIXED |
| Display (all headings) | Cormorant Garamond, always weight 300, true italic | FIXED. See 4.1 |
| Spec data only | Geist Mono (variable) | SET. `.spec-sh`. `preload: false`. Replaces Fraunces as the one special case |

Two families plus one special case, never a third general-purpose face.

The phi scale ships as in the handoff, with one change: `text-phi-1` and
`text-phi-2` now clamp down on phones (`clamp(1.25rem, 3.6vw, 1.618rem)`
and `clamp(2rem, 5.4vw, 2.618rem)`) because fixed 2.618rem section heads
wrapped to four lines at 360px.

**Rules specific to this catalogue:**

- Product names are set in the display face exactly as the manufacturer
  writes them (Keraflex Maxi S1, Mapelastic AquaDefense). Never restyled.
- Classifications, standards, consumption and pack sizes are `.spec-sh`.
- Cormorant's numerals are old-style and thin. Any heading that is mostly
  a code or a number uses `.spec-sh` or Manrope instead of the serif.

### 4.1 DECIDE - is Cormorant right for construction chemicals?

Default: keep it. It is what makes the group's sites look like a
publication, and the contrast between a hairline serif headline and mono
spec data is the concept. If it reads too "interiors" in review, the
one-for-one swap is **Fraunces** (already proven in the system, sturdier,
same editorial register). Do not swap to a grotesque: the site would turn
into every other chemical supplier.

---

## 5. Imagery

### 5.1 Direction

- **Water, concrete, light.** Rain beading on a sealed roof, adhesive
  ridges under raking light, a resin floor mirroring a ceiling, sprayed
  concrete in a tunnel. Close, calm, bright. The palette is locked into
  every prompt (soft daylight, pale sky blue, pale mint, chalk white and
  pale concrete grey; high key, no heavy shadow, no orange cast).
- **East Africa, not stock Europe.** Flat concrete roofs, coastal haze,
  the Indian Ocean horizon, palms kept to the far distance.
- **No people's faces, no branded packs, no text in frame.**

### 5.2 Honesty rules (binding)

- Generated scenes are atmosphere. They are **never** captioned, alt-texted
  or implied to be a Sahihi project, a Sahihi warehouse or a real site.
- **Never generate a product pack.** Image models hallucinate label text.
  Pack shots come from the manufacturers' own media libraries only
  (`docs/OPEN-QUESTIONS.md` Q9).
- Real project photography from the owner replaces generated scenes the
  day it arrives.

### 5.3 State on 2026-11-05

- The logo and all five partner logos are exact vector extractions from
  the director's business card (`scripts/extract-brand-svgs.py`). No AI
  regeneration was used or needed: the card is a Canva vector export, so
  the extracted paths are the original artwork, not an approximation.
- Twenty 4K scenes were generated on 2026-11-06 and are placed
  (`docs/IMAGE-PROVENANCE.md` section 3). The home hero is now the
  photograph: a pale sealed roof terrace beaded with rain above the sea,
  with a portrait crop for phones. Ink text sits on its pale side with no
  scrim (measured contrast 5:1 or better in the safe zones). The drawn
  build-up moved from the hero to the Solutions section.
- The director's portrait is owner-supplied and already on a blue ground
  that sits inside the palette.

### 5.4 Hero (DECIDE 1.2 item 3)

Default: one still photograph (queue item 0, with a portrait crop for
phones, item 1), a statement H1, one sub-line, one primary CTA and one
WhatsApp chip. Text safe zone is the left 55% of the landscape frame and
the upper 60% of the portrait frame; re-measure against the delivered
image before moving the text block. With the pastel palette the
photograph must be high key (pale, bright) so Ink text sits on it without
a dark scrim; a dark photograph would bring the dark stage back.

---

## 6. Signature elements - one exclusive interaction per hub

FIXED rule: each product-line pillar carries ONE bespoke interactive
element no other hub has, taken from the product's own selling gesture,
input-driven, palette-safe, keyboard-operable, and content-free (SEO copy
never lives inside it). gcbuae's five are taken; these are new.

| Hub | Element | The selling gesture it comes from |
|---|---|---|
| Waterproofing | **The build-up.** An exploded layer stack (slab, primer, first coat, mesh, second coat, adhesive, tile) the visitor pulls apart and reassembles. The one Three.js piece on the site | "what goes on top of what" is the first question on every site visit |
| Tile adhesives and grouts | **Notch and coverage.** Pick tile size and bed; a drawn trowel cross-section changes notch and the bags-per-area figure rolls | every tiler asks "how many bags" |
| Resin flooring | **Thickness gauge.** Drag from a 0.3 mm coating to a 6 mm PU-cement screed; the section redraws to true relative scale and names the system | specifying a floor is choosing a thickness |
| Concrete repair | **Defect map.** A drawn column with a crack, a spall, honeycombing and exposed rebar; select one and the repair sequence assembles | repair starts with diagnosis |
| X-Calibur | **Joint in motion.** A slider opens and closes a sealed joint; the sealant section stretches with it | movement accommodation is the spec |
| Oriental Yuhong | **Roll-out.** Drag a membrane roll across a roof plan; laps and area count as it travels | membranes are sold by the roll and the lap |

**Built 2026-11-05** (`src/components/sections/signature/`, data in
`src/config/mapei-signature.ts`): the build-up, notch and coverage, the
thickness gauge, the defect map, and a fifth for the line this table
missed: **Primers and levelling - The pour.** Drag the surface of a
self-levelling compound over an uneven slab from 1 to 10 mm; the layer
redraws and the kilograms and bags roll. X-Calibur and Oriental Yuhong
wait for their hubs.

Three.js loading as built: a desktop with a mouse fetches it when the
build-up nears view; a touch device fetches it only when the visitor taps
"Open it in 3D"; reduced motion, Save-Data, 2G/3G and low-memory devices
keep the SVG drawing.

Home set pieces built the same day: the lines dial (pinned on desktop,
chips on phones), the draggable project strip, the enquiry composer, and
the hero drawing that closes up with the scroll. The materials explore
waits for imagery (`docs/IMAGE-QUEUE.md`).

Every figure these elements display must come from the catalogue data
file, which comes from manufacturer TDS. No element ships until its
numbers are verified (`docs/research/11` and `12`).

Home set pieces (reusable from gcbuae, re-skinned): the product wheel
becomes a **solutions wheel** of the five solution areas; the materials
explore becomes three material macros (water bead, resin gloss, adhesive
ridge); the WhatsApp enquiry composer assembles a real enquiry from chips
(job type, area, city).

---

## 7. Three.js policy (owner asked for it; governance constrains it)

Three.js is in the stack. It is also about 150 KB gzipped before a single
mesh, which is the entire initial-route JS budget. So:

1. **Never in the first screen, never in the initial route bundle.**
   Loaded only with `next/dynamic` + `ssr: false` from inside a client
   component, when its section is within one viewport of view.
2. **One Three.js element per hub at most**, and only where depth is the
   point (the waterproofing build-up). Everything else is SVG, CSS or
   Motion.
3. **A server-rendered SVG of the same content always ships underneath.**
   The canvas mounts over it. No-JS, reduced motion, Save-Data, 2G/3G
   `effectiveType`, low `deviceMemory` and any WebGL failure keep the SVG.
4. Pointer and touch driven. No auto-rotation. Pauses when off screen.
5. `devicePixelRatio` capped at 2; one draw call budget reviewed in the PR.
6. The button rim stays on `ogl` (about 25 KB). Do not port it to Three.

MANDATORY NOTIFICATION applies: any Three.js scene beyond rule 2 gets
flagged to the owner with its cost before it is built.

---

## 8. Mobile first (owner non-negotiable 2)

Most Tanzanian traffic is a mid-range Android phone on mobile data. The
design is drawn at 360px first and widened, not the reverse.

- First screen at 360x640: logo, Contact pill, H1, one sub-line, one CTA,
  the WhatsApp disc. Nothing else. No image request before the headline.
- Pins, the fixed footer reveal, cursor shine and the Three.js canvas are
  desktop patterns. Phones get taps, stacks and normal flow (FIXED).
- Touch targets 44px. No hover-only information. `tel:` and `wa.me`
  links are first-class on every commercial page.
- Fluid type via `clamp()`; tested at 360 / 390 / 768 / 1024 / 1440 /
  1920 / 2560. At 2560 the container widens to 112rem and stops.
- `html { overflow-x: clip }` is the net; overflow bugs get fixed at the
  source. Breadcrumbs wrap; button labels wrap below `sm`.
- Safe-area insets respected on the WhatsApp disc and the container.
- Budgets are in `GOVERNANCE.md` section 4 and are hard gates.

---

## 9. Voice (short form; full rules in GOVERNANCE.md)

Assured, spare, technical. Written from the warehouse and the site visit,
not from a search results page.

- Speak to the people who specify and apply: classification, consumption,
  pack, substrate, cure time.
- Say where a product is NOT the right choice.
- Headlines may be dry: "Water finds the gap you did not seal."
- Banned: "premium quality", "wide range", "best in class", "one-stop
  shop", "world-class", rhetorical questions as transitions.
- No em or en dashes anywhere. Plain hyphen.

---

## 10. Open design decisions for the owner

| # | Decision | Default in the scaffold |
|---|---|---|
| D1 | Palette | **Bahari Pastel** (owner: "mostly pastel", 2026-11-05) |
| D2 | Display face: Cormorant Garamond Light or Fraunces | Cormorant |
| D3 | Hero: generated photograph (queue items 0 and 1) or keep the drawn-section hero | drawn section until imagery exists |
| D4 | Three.js build-up on the waterproofing hub: yes or SVG only | planned, not built |
| D5 | Detent tick sound on the solutions wheel | off |
| D6 | Ambient film: is there real footage (application, warehouse, sites)? | no film; do not fake it with stills |
| D7 | May the logo's yellow be used as a small "authorized" seal colour | no |
