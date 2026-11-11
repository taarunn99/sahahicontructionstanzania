# Journal metadata, 2026-11-12 (Agent 4: blog)

The blog index, its six category pages and the 22 posts, one row each.
Registry of record: `src/config/seo/blog.ts` (every key filled; `Partial`
kept for the type until the other families are complete). Post strings live
in `src/config/blog.ts` and the registry mirrors them string for string
(checked by a node script: lengths, uniqueness of titles and queries, each
title containing its query's words, no long dash, no question in a
description, no banned phrase, no price).

Rules applied: title 35-60 characters, description 120-160, hyphen only,
the primary query leads the title (blog/10 B.4.6), "Tanzania" only when
the query carries it or the local condition is the subject, `stock:
"enquire"` on every row, no `dateModified` touched.

What changed in code:

- `/blog` reads its title and description from the registry row (the
  description was 169 characters) and sets `openGraph.images` through
  `resolveOg("/blog") ?? ogBase.images`.
- `/blog/category/[category]`: `meta()` reads the registry row; the old
  `seoTitle`/`seoDescription` builder (which produced "Building in Tanzania
  Guides for Tanzania - Sahihi Blog" and four titles ending "- Sahihi Blog
  | Sahihi", and cut every description mid-sentence from `category.intro`)
  stays only as the fallback for a category without a row. H1 is now one
  text node (`{`${category.label}.`}`), so it prints "Building in
  Tanzania." without the gap. OG images via `resolveOg(url)`.
- `/blog/[slug]`: unchanged source of strings (`post.metaTitle`,
  `post.description`); `openGraph.images` added via `resolveOg(url)`.
- Category queries carry "guides" so they do not collide with the
  /solutions pillars ("waterproofing Tanzania", "tile adhesive Tanzania",
  "concrete repair Tanzania", "epoxy flooring Tanzania").
- The category titles say "Guides for Tanzania" plus a short enumeration of
  what the category's posts cover, instead of a "Sahihi Journal" suffix: the
  pages themselves say "Blog", and the title should agree with the page.
- RSS uses `post.title` and `post.description`; three descriptions changed
  (below), so the feed text changes with them. Nothing else to do there.
- `src/config/og-manifest.json` is empty today, so every blog page falls
  back to the root share image until `scripts/build-og-cards.mjs` runs.

Posts changed (4 of 22), all for a rule rather than taste:

| Post | What | Why |
|---|---|---|
| why-hidden-roof-houses-leak | description | Opened with a rhetorical question |
| cementitious-vs-liquid-membrane-waterproofing | title, description | Title "...: which one" read cut; description opened with a question |
| screed-or-self-levelling-compound | description | Opened with a rhetorical question ("?" to ":", same length) |
| masika-vuli-builders-rain-calendar | title | Missed "rainy season", its own query's words |

Uncertain, for the owner or the lead agent:

- Titles mix Title Case and sentence case across posts (the authors' voice
  was kept; not churned). A one-off pass could unify them if wanted.
- "tiling tools and technique" is the category query for Tools and
  technique; the joint sealant post in that category is not tiling, so a
  broader "tools and technique guides" is the alternative.
- The masika title is exactly 60 characters.


| route | query | title | len | description | len | changed? | notes |
|---|---|---|---|---|---|---|---|
| /blog | building guides Tanzania | Building Guides for Tanzania - Waterproofing, Tiling, Floors | 60 | Building guides for Tanzania: waterproofing, tile adhesive and grout, resin floors, concrete repair and tiling tools, with figures from the data sheets. | 152 | description | Description was 169 characters; title kept. Reads the registry row now, OG images via resolveOg. |
| /blog/category/waterproofing | waterproofing guides Tanzania | Waterproofing Guides for Tanzania - Roofs, Tanks, Wet Rooms | 59 | Guides to waterproofing in Tanzania: why hidden roofs leak, sealing underground tanks, kg per m2 for each membrane and which type suits which surface. | 150 | title, description | Was "Waterproofing Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Waterproofing." |
| /blog/category/tiling | tiling guides Tanzania | Tiling Guides for Tanzania - Adhesive, Grout, Lifted Tiles | 58 | Guides to tiling in Tanzania: adhesive per m2, why tiles lift, epoxy or cement grout, adhesive or sand and cement, and Mapei waiting times, from data sheets. | 157 | title, description | Was "Tiling Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Tiling." |
| /blog/category/flooring | flooring guides Tanzania | Flooring Guides for Tanzania - Epoxy, Levelling, Screeds | 56 | Guides to resin and levelled floors in Tanzania: epoxy thickness, why coatings blister, self levelling compound per m2 and drying time, screed or compound. | 155 | title, description | Was "Flooring Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Flooring." |
| /blog/category/concrete-repair | concrete repair guides Tanzania | Concrete Repair Guides for Tanzania - Spalling, Grouting | 56 | Guides to concrete repair in Tanzania: spalling and rusting rebar repaired step by step, and grouting a base plate, with quantities from the data sheets. | 153 | title, description | Was "Concrete repair Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Concrete repair." |
| /blog/category/tools-and-technique | tiling tools and technique | Tiling Tools and Technique - Trowel Notch, Mixing, Sealant | 58 | Guides to tiling tools and technique: trowel notch by tile size, adhesive mixing by paddle, speed and water, and joint sealant width, depth and metres per pack. | 160 | title, description | Was "Tools and technique Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Tools and technique." |
| /blog/category/building-in-tanzania | building in Tanzania guides | Building in Tanzania Guides - Rain Calendar, CRB Classes | 56 | Guides to building in Tanzania: how CRB classes work for construction companies, and when the masika and vuli rains fall in each region, with official sources. | 159 | title, description | Was "Building in Tanzania Guides for Tanzania - Sahihi Blog \| Sahihi" (or doubled "for Tanzania") with the intro cut mid-sentence. H1 now one text node, "Building in Tanzania." |
| /blog/why-hidden-roof-houses-leak | hidden roof leaking | Hidden roof leaking? Why it happens and the fix that lasts | 58 | Hidden roof leaking: find the leak point at the parapet, gutter, outlets, slab or cracks. Causes, types of fix and stocked products, with data sheet figures. | 157 | description | Opened with a rhetorical question ("Hidden roof leaking? Find..."); now a statement, 157 characters. Title kept. |
| /blog/underground-water-tank-waterproofing | underground water tank waterproofing | Underground water tank waterproofing: a practical guide | 55 | Underground water tank waterproofing: joints, pipes, drinking water coatings, consumption per m² and the wait before filling, from the data sheets. | 147 | no |  |
| /blog/waterproofing-coverage-per-square-metre | waterproofing coverage per square metre | Waterproofing coverage per square metre: a kg/m² guide | 54 | How much waterproofing per square metre: data sheet kg/m² for each stocked product, m² per pack, and a worked bathroom example with the wall upturn included. | 157 | no |  |
| /blog/cementitious-vs-liquid-membrane-waterproofing | cementitious vs liquid membrane waterproofing | Cementitious vs liquid membrane waterproofing: which to use | 59 | Cementitious, liquid or acrylic membrane: the three families compared from data sheets by uses, exposure and consumption, for bathroom, roof, basement and tank. | 160 | title, description | Title "...: which one" (56) read cut; now "...: which to use" (59), the query leads. Description opened with a question; restated. |
| /blog/tile-adhesive-per-square-metre | how much tile adhesive per square metre | How Much Tile Adhesive per Square Metre? Rates and Bags | 55 | How much tile adhesive per square metre: printed rates for four adhesives, m² per 25 kg bag, a worked 30 m² room and why the trowel changes the figure. | 151 | no |  |
| /blog/why-floor-tiles-pop-up | why tiles pop up | Why Tiles Pop Up, Lift or Sound Hollow: Causes and Fixes | 56 | Why tiles pop up, lift or sound hollow: a table of six causes, what to check on site, the fix, and how joints, coverage and curing time prevent it. | 147 | no |  |
| /blog/epoxy-grout-vs-cement-grout | epoxy grout vs cement grout | Epoxy grout vs cement grout: which goes where | 45 | Epoxy grout vs cement grout compared from Mapei data sheets: joint width, working time, cleaning, where each belongs, and the +30°C limit in Dar es Salaam heat. | 160 | no |  |
| /blog/tile-adhesive-vs-sand-and-cement | tile adhesive vs cement | Tile adhesive vs cement: which to use, and when | 47 | Tile adhesive vs cement: thick-bed sand and cement against thin-bed adhesive, why porcelain needs adhesive, and when a screed still comes first in Tanzania. | 156 | no |  |
| /blog/keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t | Keraflex Maxi S1 vs Adesilex P7 | Keraflex Maxi S1 vs Adesilex P7, Kerabond T or Mapeset | 54 | Mapeset, Kerabond T, Adesilex P7 and Keraflex Maxi S1 compared by class, consumption, pack and limits, from the data sheets, to pick the right tile adhesive. | 157 | no |  |
| /blog/mapei-waiting-times-before-tiling-grouting-walking | Mapelastic drying time before tiling | Mapelastic drying time before tiling: Mapei waiting times | 57 | How long to wait before tiling, grouting or walking on Mapei products: membranes, adhesives, grouts, levelling and primers, with each printed condition. | 152 | no |  |
| /blog/why-epoxy-floors-blister-and-peel | why epoxy floor bubbles and peels | Why epoxy floor bubbles and peels: causes and prevention | 56 | Why epoxy floors bubble, blister and peel: moisture, humidity, dew point and poor preparation, with the limits data sheets print and how to prevent each. | 153 | no |  |
| /blog/epoxy-floor-thickness | epoxy floor thickness | Epoxy floor thickness: from coating to screed, in mm | 52 | Epoxy floor thickness explained: eight resin floor types from 150 microns to over 6 mm, what thickness buys, and the material it takes per square metre. | 152 | no |  |
| /blog/self-levelling-compound-per-square-metre | self levelling compound per m2 | Self levelling compound per m2: how many bags do you need | 57 | Self levelling compound per m2: 1.6 to 1.7 kg per mm. Bags by area and thickness for Ultraplan Eco 20 and Contract, with water and primer quantities. | 149 | no |  |
| /blog/when-to-tile-on-self-levelling-compound | self levelling compound drying time | Self levelling compound drying time: tile, vinyl, wood | 54 | Self levelling compound drying time: minimum waits before tiles, vinyl, carpet and wood from two Ultraplan data sheets, and what humid air changes. | 147 | no |  |
| /blog/screed-or-self-levelling-compound | screed vs self levelling compound | Screed vs Self Levelling Compound: Which Does a Floor Need | 58 | Screed or self-levelling compound: compare thickness, waiting time before tiles, vinyl and wood, and how each is laid, using figures from Mapei data sheets. | 156 | description | Opened with a rhetorical question; the "?" became ":", same length. Title kept. |
| /blog/joint-sealant-width-depth-coverage | joint sealant width to depth ratio | Joint Sealant Width to Depth Ratio and Metres per Pack | 54 | Joint sealant width to depth rules from three data sheets, the sum for sealant volume, and a table of metres per 600 ml and 4 litre pack, before wastage. | 153 | no |  |
| /blog/trowel-notch-size-for-tile-size | trowel notch size for tile size | Trowel notch size for tile size: a metric chart | 47 | Trowel notch size for tile size in mm: Mapei notches, wet bed, back-buttering and how to check coverage by lifting a tile. No guesswork, data sheets only. | 154 | no |  |
| /blog/how-to-mix-tile-adhesive | how to mix tile adhesive | How to mix tile adhesive: paddle, speed, water | 46 | How to mix tile adhesive: water per 25 kg bag for Mapei adhesives, standing time, pot life, low-speed mixing, and what heat does to open time on site. | 150 | no |  |
| /blog/spalling-concrete-repair | spalling concrete repair | Spalling concrete repair: rusting rebar, falling concrete | 57 | Spalling concrete repair, step by step: why rebar rusts and bursts the cover, how to clean and coat it, rebuild the section, and how much mortar to order. | 154 | no |  |
| /blog/how-to-grout-a-base-plate | how to grout a base plate | How to grout a base plate with non-shrink grout | 47 | How to grout a base plate: prepare and soak the concrete, form and head, mixing water, one-side pour, curing, and a worked example of how many bags to buy. | 155 | no |  |
| /blog/construction-companies-tanzania-crb-classes | construction companies in Tanzania | Construction Companies in Tanzania: CRB Classes Explained | 57 | How CRB classes work for construction companies in Tanzania: categories, class limits, storey caps, how to check a contractor and what to ask before signing. | 157 | no |  |
| /blog/masika-vuli-builders-rain-calendar | masika and vuli rainy season | Masika and Vuli Rainy Season: A Tanzanian Builder's Calendar | 60 | When masika, vuli and msimu fall in each Tanzanian region, from TMA, and when to schedule roof waterproofing, concrete pours, terrace tiling and resin floors. | 158 | title | Was "Masika and Vuli: A Builder's Rain Calendar for Tanzania" (55), missing "rainy season" from its query; now 60. Tanzania kept: the local condition is the subject. Description kept. |
