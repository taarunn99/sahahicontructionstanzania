# /quote: the three directions (2026-11-14)

The owner rejected two drafts of the quote page (a list, then a tinted,
patterned card grid: "boring", "not a fan ... just editing and making
alterations"). He asked for "the best of the best-looking and minimalistic
design, using the colours we are using on the entire website ... no stupid
animations ... solid colour palettes like what we have: yellow, green, red",
with gcbuae.com/fila as the feeling he likes: small pictures, a tiny add
button on each, nothing e-commerce.

Research (ui-ux-pro-max, "minimalist product catalogue, B2B, premium,
calm"): Minimalism and Swiss style; grid-based, high contrast, white
space, essential; subtle colour hovers of 200 ms; sharp type hierarchy;
avoid gradients and decoration. The site's own type (Montserrat ExtraBold,
Manrope, Geist Mono) and tokens (Ink, Chalk, Signal Yellow, Sahihi Blue,
Tick Green, the brand reds, CMCI green, BIHUI teal) are fixed.

Three directions were offered. **A was chosen on 2026-11-14**; B and C are
kept because the owner said he "might go the other way". All three share
the same page (`src/app/quote/page.tsx`): the constant `LOOK` switches
them (`"sheet"`, `"grounds"`, `"ink"`), and everything else (the masthead,
the tiles, the yellow rail, the filter, the pill, the FAQ) is common.

## A. The order sheet (`LOOK = "sheet"`, built)

Swiss grid. Each brand opens with a full-width block in its solid colour
and its name set huge in white, with the count and a link to the brand
page. Below it, square tiles on a hairline-ruled grid: picture on white,
name in Ink capitals, one grey line, the pack in mono, a small Ink "+" in
the corner that becomes "- n +" in place. Mapei's five lines are numbered
subheads inside the blue block's section. Your list is a sticky Signal
Yellow rail on the right (below the grid on phones). Colour lives only in
the brand blocks and the yellow rail.

```
┌─────────────────────────────────────────────┬──────────┐
│ BUILD YOUR LIST.                            │ YOUR LIST│
│ SEND IT ONCE.                 [search ___]  │ (yellow) │
├─────────────────────────────────────────────┤ Keracolor│
│ ███████████████████ MAPEI ██████████ (blue) │ FF  5kg  │
│ ███ 01 Tile adhesives, grouts & care   ███  │ [-] 2 [+]│
├──────┬──────┬──────┬──────┬──────┬──────────┤          │
│ pack │ pack │ pack │ pack │ pack │ pack     │ Kerapoxy │
│ +    │ +    │ +    │ +    │ +    │ +        │ [-] 1 [+]│
│KERA..│ADES..│KERA..│MAPE..│ULTR..│PRIM..    │          │
│grey  │grey  │grey  │grey  │grey  │grey      │ Job: ___ │
│25 kg │25 kg │5 kg  │25 kg │1 L   │5 kg      │ WhatsApp │
├──────┴──────┴──────┴──────┴──────┴──────────┤ Email    │
│ ███████████████ X-CALIBUR ███████████ (red) │ Copy     │
└─────────────────────────────────────────────┴──────────┘
```

## B. Colour grounds (`LOOK = "grounds"`)

Each brand section sits on its own full-bleed solid ground (Mapei blue,
X-Calibur red, OYH red, CMCI green, BIHUI teal) with the brand name in
white at the top left; the products are white rounded tiles floating on
that colour. Strong, poster-like, the most colourful. The rail as in A.

```
┌───────────────────────────────────────────────────────┐
│ BUILD YOUR LIST. SEND IT ONCE.           [search ___] │
├───────────────────────────────────────────────────────┤
│░░░░░░░░░░░░░░░░ MAPEI (solid blue ground) ░░░░░░░░░░░░░│
│░ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ░░░░░│
│░ │pack+│ │pack+│ │pack+│ │pack+│ │pack+│ │pack+│ ░░░░░│
│░ │NAME │ │NAME │ │NAME │ │NAME │ │NAME │ │NAME │ ░░░░░│
│░ │25 kg│ │25 kg│ │5 kg │ │25 kg│ │1 L  │ │5 kg │ ░░░░░│
│░ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ ░░░░░│
├───────────────────────────────────────────────────────┤
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒ X-CALIBUR (solid red ground) ▒▒▒▒▒▒▒▒▒▒▒│
└───────────────────────────────────────────────────────┘
```

## C. Ink and one yellow (`LOOK = "ink"`)

Almost monochrome: chalk page, Ink type, hairline rules, pictures in the
tiles only. Brand sections are headed by the brand's name in huge Ink type
over a 4 px rule in the brand colour, nothing else coloured. The only
solid surface is the yellow rail. The calmest of the three.

```
┌─────────────────────────────────────────────┬──────────┐
│ Build your list.                            │ YOUR LIST│
│ Send it once.                 [search ___]  │ (yellow) │
├─────────────────────────────────────────────┤          │
│ MAPEI                                    47 │ Keracolor│
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ (blue rule) │ FF  5kg  │
│ pack    pack    pack    pack    pack    pack│ [-] 2 [+]│
│ +       +       +       +       +       +   │          │
│ Kera..  Ades..  Kera..  Mape..  Ultr..  Prim│ Job: ___ │
│ 25 kg   25 kg   5 kg    25 kg   1 L     5 kg│ WhatsApp │
│ ─────── ─────── ─────── ─────── ─────── ────│ Email    │
│ X-CALIBUR                                 7 │ Copy     │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ (red rule)│          │
└─────────────────────────────────────────────┴──────────┘
```

## Rules that hold for all three

No animation beyond a 200 ms colour change on hover. No gradients, dot
patterns or stripes (the rejected draft). No price. Every tile links to
its page and is in the server HTML; the "+" writes the tile's own facts
into the visitor's list (`src/lib/quote.ts`). Hex only in `globals.css`.
Lighthouse mobile 100 on the page; the masthead type is the LCP, static.
