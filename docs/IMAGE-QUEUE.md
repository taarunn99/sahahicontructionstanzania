# IMAGE-QUEUE.md - the generation queue, ready to run

Written 2026-11-05. **Run on 2026-11-06: all 20 images exist.** Job ids,
credits and the reasons for each re-run are in `docs/IMAGE-PROVENANCE.md`
section 3. The text below is kept as the record of the prompts and rules.

**Learned while running it, for the next queue:**

- Listing the palette as colour names ("pale sky blue, pale mint green,
  pale butter yellow") makes the model paint those colours as flat blocks
  into the scene (sky, walls). For anything with a natural sky or a plain
  wall, say "natural colour only" and name no pastel.
- "With only small deep blue-grey accents" produced blue specks, pebbles
  and dark puddles. Leave that clause out.
- "The left half is sky, the right half is roof" got the whole picture
  rotated 90 degrees. Say "sky at the top, roof at the bottom, level
  horizon" and place the subject with "lower right".
- Say "very pale, almost white" for a surface that must stay high key;
  "pale grey" came back mid-grey.
- The words "wet", "moist" and "paste" in a macro prompt tripped the
  content filter twice. "Cement tile adhesive" with a steel trowel in
  frame went through.
- Submitting 12 at once returned "out of credits" for 9 of them with
  1,200 credits on the account. Batches of 3 to 8 went through.

**Why it is queued.** Higgsfield refused every job on 2026-11-05 with
"You've reached the daily generation limit for your grace period" (936
credits on the account, plan in a grace period). The owner will recharge
the subscription. No other generator was used and no payment was
attempted on the owner's behalf.

**To run it** (next session, once the plan is active): say "run the image
queue". The steps are:

1. Check the balance and preflight one image (`get_cost: true`).
2. Submit Batch A, then Batch B (section 4), with `generate_image_batch`.
3. Wait with `jobs_wait`, show the set once with `show_generation_by_ids`.
4. Apply the acceptance rules (section 3). Re-run only the rejects.
5. Save the 4K masters to `assets/source/generated/<id>.png` (gitignored).
6. Build derivatives (section 5) into `public/images/`.
7. Log every job in `docs/IMAGE-PROVENANCE.md`: job id, model, credits
   before and after, prompt id, output path.

**Cost.** Model `nano_banana_pro` at `4k`: 4 credits per image, measured
by preflight on 2026-11-05. 20 images = **80 credits**, plus rejects.
Credit approval is per session: confirm with the owner before spending.

---

## 1. Art direction

The palette is Bahari Pastel (`DESIGN-CONCEPT.md` section 3): dark Ink
text on Chalk and on three pastel stages (Sky, Mint, Butter). So every
image is **high key**: bright, pale, softly lit. A dark photograph would
bring back the dark stages the owner replaced.

- Subject: water, concrete and light. Close, calm, exact.
- Place: the East African coast. Flat concrete roofs, sea haze, palms kept
  to the far distance. Not stock Europe.
- Never: a readable label, a logo, a brand mark, text of any kind, a
  person's face, a product pack with printing on it.
- These are atmosphere. **None may be captioned, titled or alt-texted as a
  Sahihi project, warehouse or site.** Alt text says what is pictured.
- Real project photographs from the owner replace these when they exist.

### The palette lock (appended to every prompt, already included below)

> High-key, bright and airy photograph. Colour palette strictly pale sky
> blue, pale mint green, pale butter yellow, chalk white and pale concrete
> grey, with only small deep blue-grey accents. Soft diffused daylight, no
> heavy shadows, no dark areas, no orange or brown cast. No people's
> faces, no text, no lettering, no numbers, no logos, no brand marks, no
> watermark.

---

## 2. The queue

Model `nano_banana_pro`, `resolution: "4k"`. "Slot" is where the image
goes. "Safe zone" is the area that must stay pale and empty for text.

### Hero

| ID | Slot | Ratio | Safe zone |
|---|---|---|---|
| H1 | Home hero, desktop | 16:9 | left 55% of the frame |
| H2 | Home hero, phones | 4:5 | upper 60% of the frame |
| H3 | Mapei hub masthead | 21:9 | left 50% of the frame |

**H1** - Architectural photograph just after tropical rain, in soft
morning light. A flat waterproofed concrete roof terrace of a modern
building on the East African coast, its pale grey sealed surface covered
in crisp round beads of rainwater and a thin mirror of water reflecting a
pale sky. Low camera angle close to the wet surface in the right half of
the frame, where the beads catch a clean white highlight. The left half
of the frame opens into a calm, pale, softly out-of-focus sky and sea
haze with almost no detail, leaving quiet negative space. A faint
horizon of the Indian Ocean and a low concrete parapet. Medium format
camera, 35mm lens, shallow depth of field, fine grain, restrained
editorial mood.

**H2** - Vertical photograph just after tropical rain, in soft morning
light. Looking along a flat waterproofed concrete roof terrace of a
modern coastal building in East Africa. The lower third of the frame is
the pale grey sealed roof surface in sharp focus, covered in crisp round
beads of rainwater catching a clean white highlight. The upper two
thirds are calm, pale, softly out-of-focus sky and sea haze above a low
concrete parapet, with almost no detail. Medium format camera, 35mm
lens, shallow depth of field, fine grain, restrained editorial mood.

**H3** - Wide panoramic photograph of a long pale concrete wall and floor
meeting in a clean line, half of the surface freshly coated with a smooth
light grey waterproofing membrane and half bare, the boundary between
them a crisp vertical edge in the right third of the frame. Soft even
daylight, faint reflections. The left half of the frame is plain pale
concrete with no detail. Architectural, minimal, 50mm lens, deep focus.

### The five Mapei lines (hub spreads and line mastheads)

| ID | Slot | Ratio |
|---|---|---|
| L1 | Tile adhesives, grouts and care | 4:3 |
| L2 | Primers, levelling and wood flooring | 4:3 |
| L3 | Concrete repair, grouts and anchoring | 4:3 |
| L4 | Resin flooring and coatings | 4:3 |
| L5 | Waterproofing | 4:3 |

**L1** - Close editorial photograph of professional tiling. Perfectly
straight parallel ridges of fresh pale grey cementitious tile adhesive
combed with a notched trowel across a light concrete floor, soft raking
daylight showing the ridge texture in fine detail. At the right edge, the
corner of one large-format matte porcelain tile in chalk white is being
lowered onto the ridges by a hand in a plain pale glove, seen only from
the wrist. 80mm lens, shallow depth of field, crisp texture.

**L2** - Photograph of a self-levelling floor compound being poured: a
smooth pale grey liquid surface spreading across a light concrete floor,
its leading edge a soft curved line, the finished area behind it
perfectly flat and gently reflecting a bright window. A plain steel
spiked roller rests at the edge of the frame. Soft daylight, low camera
angle, 35mm lens, calm and precise.

**L3** - Editorial structural photograph. A pale concrete column and beam
in an open, daylit structure. One clean rectangular area of the column
has been repaired with fresh light grey mortar with sharp edges, and a
row of small injection ports follows a fine crack line beside it. Soft
even daylight from one side, pale shadows only. 45mm lens, slightly low
angle, monumental and calm.

**L4** - Architectural interior of an empty modern industrial production
hall with a flawless seamless resin floor in pale grey with a faint blue
tint, high gloss, mirroring a row of linear ceiling lights and tall
bright windows. White walls, white steel columns, one thin pale blue line
painted along the floor edge. Bright, clean, hygienic. 24mm lens at low
height, one-point perspective, deep focus.

**L5** - Editorial construction photograph in soft overcast morning
light. A wide flat concrete roof slab freshly coated with a smooth pale
grey flexible cementitious waterproofing membrane, continuous and turned
up neatly at the parapet upstand, with an embedded strip of white
glass-fibre mesh at the wall and floor junction. A hazy East African
coastal skyline with a few palm crowns far off. 50mm lens, deep focus.

### Solution scenes (home, solution pillars)

| ID | Slot | Ratio |
|---|---|---|
| S1 | Swimming pool and wet areas | 4:3 |
| S2 | Basement and water tank | 4:3 |
| S3 | Structural strengthening | 4:3 |
| S4 | Sports flooring | 4:3 |
| S5 | Underground construction | 4:3 |
| S6 | Car park deck | 4:3 |

**S1** - Photograph of an empty, newly tiled swimming pool before
filling, in bright soft daylight: small pale sky-blue mosaic tiles with
clean white grout lines, a crisp inside corner and a few shallow steps,
the tile surface dry and matte. A strip of pale stone coping at the top
edge and a hint of palm shadow, very soft. 35mm lens, calm geometry.

**S2** - Photograph inside a clean, empty concrete water tank or basement
chamber lit by soft daylight from an open hatch above: pale grey walls
and floor with a smooth, even coating, a neat coved junction where wall
meets floor, a thin film of clear water on part of the floor reflecting
the light. Bright and pale throughout. 24mm lens, deep focus, quiet.

**S3** - Editorial structural engineering photograph in bright daylight.
A pale concrete column in an open structure, neatly wrapped with bands of
woven carbon-fibre fabric in a soft blue-grey, evenly spaced, with clean
edges. Pale concrete beams above. Soft shadows only. 45mm lens, low angle
looking up, calm and monumental.

**S4** - Aerial top-down photograph of an outdoor acrylic sports court in
pale sky blue with a pale mint green surround and crisp white line
markings, freshly coated and matte, in soft morning light with very faint
shadows from a hoop and a fence. A band of soft green tree canopy along
one edge only. Perfectly perpendicular drone shot, graphic and geometric.

**S5** - Photograph inside a large tunnel under construction, brightly
and evenly lit: a horseshoe profile lined with smooth pale sprayed
concrete, rock-bolt plates in a regular pattern, a pale grey
waterproofing membrane sheet fixed along one side wall. A row of white
work lights along the crown, a clean pale floor. 24mm lens, central
perspective, light haze. No vehicles, no signage.

**S6** - Photograph of an empty rooftop car park deck in bright soft
daylight: a seamless pale grey coated surface with crisp white bay lines,
a pale concrete parapet, and open pale sky beyond. A thin sheen of water
from recent rain reflects the sky. 28mm lens at low height, strong
perspective, no cars, no signs.

### Material macros (home "materials" set piece, section dividers)

| ID | Slot | Ratio |
|---|---|---|
| M1 | Water on a membrane | 1:1 |
| M2 | Resin floor gloss | 1:1 |
| M3 | Adhesive ridges | 1:1 |
| M4 | Grout joint | 1:1 |

**M1** - Extreme macro, top-down, of crisp round beads of clear water
sitting on a pale grey matte waterproof membrane, each bead catching a
clean white highlight and a tiny reflected window. Even, bright
background with a fine texture. 100mm macro lens, shallow depth of field,
soft studio light.

**M2** - Extreme macro, top-down, of a seamless high-gloss resin floor in
pale blue-grey, one soft band of reflected window light crossing the
frame diagonally, a few fine pale quartz grains visible beneath the
glossy surface. 100mm macro lens, soft studio light.

**M3** - Extreme macro, top-down, of straight parallel ridges of fresh
pale grey cementitious tile adhesive combed by a notched trowel, soft
raking light from the left giving gentle shadows between the ridges, wet
mineral texture in crisp detail. 100mm macro lens, soft studio light.

**M4** - Extreme macro of a clean pale grey grout joint between two
large matte chalk-white porcelain tiles, the joint perfectly straight and
flush, a single bead of clear water sitting across it. Soft even studio
light, 100mm macro lens, shallow depth of field.

### Company

| ID | Slot | Ratio |
|---|---|---|
| C1 | About: supply | 4:3 |
| C2 | Training | 4:3 |

**C1** - Editorial photograph of a tidy, bright building-materials
warehouse aisle. Shrink-wrapped pallets of plain unbranded pale grey
paper sacks on the left and plain unbranded white plastic pails on the
right, completely blank packaging with no printing at all. Polished pale
concrete floor, white steel racking in one-point perspective, soft
daylight from high windows, thin pale blue safety lines on the floor.
35mm lens, deep focus. No forklifts, no labels.

**C2** - Photograph of a hands-on training bench in a bright workshop: a
row of small square sample boards on a white table, each showing a
different finish (a tiled board with pale grout, a board coated with pale
grey membrane, a board with a glossy resin coating), with a clean notched
trowel and a plain roller laid neatly beside them. Seen from above at an
angle, no people, soft daylight. 50mm lens.

---

## 3. Acceptance rules

Reject and re-run an image if any of these is true:

- any lettering, number, label, logo or readable sign anywhere
- a dark overall tone, a heavy shadow, or an orange or brown cast
- a hero whose safe zone is not pale and nearly empty
- C1 with any mark on the packaging (it would read as a fake product)
- a visible face
- warped geometry: bent tile lines, melted trowel teeth, extra fingers

Do not "fix" a reject by editing: re-run the prompt.

---

## 4. Batch payloads

`generate_image_batch` takes 12 requests at most. Each request is:

```json
{ "index": 0, "params": { "model": "nano_banana_pro", "resolution": "4k",
  "aspect_ratio": "<ratio>", "prompt": "<prompt text> <palette lock>" } }
```

| Batch | Index order |
|---|---|
| A (12) | H1, H2, H3, L1, L2, L3, L4, L5, S1, S2, S3, S4 |
| B (8) | S5, S6, M1, M2, M3, M4, C1, C2 |

Keep the index-to-ID mapping in the provenance log: the batch tool
returns results by index.

---

## 5. Derivatives

Masters stay in `assets/source/generated/`. Derivatives are built with
sharp, one compression pass, WebP quality 84-90, effort 6, sized at twice
the CSS display slot, and served through `next/image` with `quality={90}`.

| ID | Output | Width | Target weight |
|---|---|---|---|
| H1 | `public/images/hero/home.webp` | 2880 | about 200 KB |
| H2 | `public/images/hero/home-portrait.webp` | 1200 | about 120 KB |
| H3 | `public/images/hero/mapei.webp` | 2880 | about 180 KB |
| L1-L5 | `public/images/lines/<line-slug>.webp` | 1600 | about 110 KB each |
| S1-S6 | `public/images/solutions/<slug>.webp` | 1600 | about 110 KB each |
| M1-M4 | `public/images/materials/<slug>.webp` | 1200 | about 90 KB each |
| C1, C2 | `public/images/company/<slug>.webp` | 1600 | about 110 KB each |

Never let a display slot exceed the source width, and never
double-compress. Check the wire size of the `/_next/image` response, not
the file on disk: 300 KB is the ceiling for any single asset.

Every image gets a descriptive alt that says what is pictured, for
example "Rainwater beading on a sealed concrete roof terrace".

---

## 6. Not in this queue, on purpose

- **Product pack shots.** Never generated. They come from Mapei's and
  X-Calibur's own media libraries (`docs/OPEN-QUESTIONS.md` Q9).
- **The logo.** It is the exact vector from the business card.
- **People.** The director's portrait is the owner's photograph.
- **Project photographs.** Only real ones, from the owner.
