# IMAGE-PROVENANCE.md - every image on the site and where it came from

Written 2026-11-05. Log every generation job here: job id, model, credits
before and after, prompt, output path. Keep 4K masters in
`assets/source/<set>/` (gitignored) before the session ends.

## 1. Brand artwork (not generated)

| Asset | Source | How |
|---|---|---|
| `public/brand/sahihi-*.svg` (lockup, no-tagline, on-dark variants, mark, wordmark, sprite) | back of the director's business card | `pdftocairo -svg`, then `scripts/extract-brand-svgs.py` |
| `public/brands/{mapei,oyh,x-calibur,cmci,bihui}.svg` | same card | same script |
| `src/app/{icon.svg,icon.png,favicon.ico,apple-icon.png,opengraph-image.jpg}` | the extracted mark and lockup | `scripts/build-favicon.mjs` |

The card is a Canva export with no raster images in it: the logo is
vector outlines. The script copies those paths as they are (coordinates
rounded to 0.01 of a unit, under a quarter of a pixel at 4000px wide) and
rewrites only the wrapper. **No AI regeneration was used.** A generator
would have approximated the lettering and the tick; the extraction is the
original artwork.

Brand colours read from the file:

| Element | Hex |
|---|---|
| SAHIHI wordmark | `#07ADD7` |
| Tagline lettering | `#0F9AB8` |
| Tick and ring | `#0C6B14` |
| Disc and arrows | `#FDF70B` |
| "CONSTRUCTION CHEMICALS LIMITED" | `#333333` (lifted to near-white in the on-dark variants) |

Partner logos are small on the card (about 30 units wide). They are
correct and sharp as vectors, but ask each manufacturer for its official
logo pack before launch (Q9).

## 2. Owner-supplied photography

| Asset | Source | Derivative |
|---|---|---|
| (removed 2026-11-06) the director's portrait | owner asked for the director to be removed from the site; the web copy was deleted, the owner's original stays in `assets/source/owner-supplied/` | - |

## 3. Generated photographs (Higgsfield, 2026-11-06)

The owner bought a new plan and authorized the run on 2026-11-06. Model
requested: `nano_banana_pro` at `4k` (the service reports it as
`nano_banana_2`), 4 credits per image. **Credits: 1,210 before, 1,090
after: 120 credits for 30 charged images** (20 accepted, 1 alternate, 9
rejected). Two more jobs were blocked by the content filter and not
charged. The plan has no unlimited allowance for this model: it spends
credits.

Prompts are in `docs/IMAGE-QUEUE.md` section 2; the re-run wording is
recorded with each job in the Higgsfield history under the job id.
Masters: `assets/source/generated/<ID>.png` (gitignored), rejects in
`rejected/`, the alternate hero in `alternates/`. Derivatives:
`node scripts/build-images.mjs`. Alt text and dimensions:
`src/config/images.ts`.

| ID | Slot | Job id | Output | Notes |
|---|---|---|---|---|
| H1 | Home hero, desktop | `03ee8fd9-6bee-4067-9283-51b76504f5a4` | `public/images/hero/home.webp` | third attempt: first came out rotated 90 degrees; second (e2a07035, kept as `alternates/H1-slate.png`) was correct but mid-grey, not high key |
| H2 | Home hero, phones | `700d427b-4c54-4f12-a74c-d508c957e41c` | `public/images/hero/home-portrait.webp` | second attempt: first (fbdc470d) had a warm cast and did not match H1 |
| H3 | Mapei hub masthead | `5418a02e-48e4-423f-b445-c873ad9a2c10` | `public/images/hero/mapei.webp` | second attempt: first (2ff0f6dd) painted three colour blocks into the sky |
| L1 | Tile adhesives line | `e82fc3f1-24c3-4f86-a9cd-4b6b65656800` | `public/images/lines/tile-adhesives-grouts.webp` | second attempt: first (ed1fa1ac) was cluttered with a dark tool in the foreground. The wall behind is painted in three pastel blocks |
| L2 | Primers and levelling line | `fab48d77-7746-4a4b-99c0-b3fa602a8dce` | `public/images/lines/primers-levelling.webp` | first attempt |
| L3 | Concrete repair line | `28905789-4291-40b2-8c0f-069e166d1d57` | `public/images/lines/concrete-repair.webp` | first attempt |
| L4 | Resin flooring line | `a24d33cc-84de-483b-a8cc-5b066aab4215` | `public/images/lines/resin-flooring.webp` | first attempt |
| L5 | Waterproofing line | `647c2161-5d01-4031-8f21-519ec2267471` | `public/images/lines/waterproofing.webp` | second attempt: first (54ac38c7) showed printed sacks. Right 5% trimmed in the derivative: a distant water tank carries illegible marks |
| S1 | Home: waterproofing | `f201995e-86a7-4061-8c6b-c2993800436e` | `public/images/solutions/swimming-pool.webp` | first attempt |
| S2 | Spare, for the solution pillars | `9b767417-6646-42f6-9c15-d0b9254bb2f5` | `public/images/solutions/water-tank.webp` | second attempt: first (59bc5dd9) had pebbles on the floor and a yellow cast |
| S3 | Home: structural strengthening | `121351d0-62b9-43f4-a84b-39d608bf726c` | `public/images/solutions/structural-strengthening.webp` | first attempt |
| S4 | Home: sports flooring | `effef4bb-5f54-4862-994c-6c23890d640a` | `public/images/solutions/sports-court.webp` | first attempt |
| S5 | Home: mining and underground | `389dfaa9-2c7d-4d2b-b8a3-8ccbdd613c74` | `public/images/solutions/tunnel.webp` | first attempt |
| S6 | Home: flooring systems | `7072f91b-909b-4a75-8256-57a7f5cf9bfa` | `public/images/solutions/car-park.webp` | second attempt: first (f89a3c49) had dark puddles. Two tiny illegible sign panels on the far parapet, accepted |
| M1 | Home: materials | `6eb989ca-88ae-4d34-a107-38f1193f6195` | `public/images/materials/water-bead.webp` | first attempt |
| M2 | Home: materials | `11b88e46-d0d4-4b77-b14b-e3918cadda8a` | `public/images/materials/resin-gloss.webp` | first attempt |
| M3 | Home: materials | `ddb03e90-44ca-4169-9821-15b8c35e8521` | `public/images/materials/adhesive-ridges.webp` | fourth attempt: first (11afe51e) read as dry plaster with blue dots; two re-runs (11f14a77, 31ebfd14) were blocked by the content filter and not charged |
| M4 | Home: materials | `eb2dc6ce-9eba-4c27-8dcf-987cdb6081f3` | `public/images/materials/grout-joint.webp` | second attempt: first (111a1115) had dark blobs behind the bead |
| C1 | About: supply | `bb3525b0-12c0-45d5-9958-da1f4a08e29e` | `public/images/company/supply.webp` | first attempt. Packaging is blank. Captioned on the page as illustrative, not our premises |
| C2 | About: initiatives | `b6fdf0e5-ca5a-4863-b4df-32f61d3e201e` | `public/images/company/training.webp` | first attempt. Captioned as illustrative |

Every image was checked against the acceptance rules in
`docs/IMAGE-QUEUE.md` section 3 at preview size, and two at full size
for lettering. None is captioned, titled or alt-texted as a Sahihi
project, site or product.


### 3.1 Vivid re-makes, 2026-11-06

After the owner moved the palette from pastel to solid colours, six
images were generated again, saturated, with the same model and size.
24 credits (1,090 before, 1,066 after). The pastel versions are kept in
`assets/source/generated/alternates/<ID>-pastel.png`.

| ID | Job id | Notes |
|---|---|---|
| H1 | `babd53ec-3de3-4cd5-ae1b-d799bc5e74dc` | white roof, turquoise sea, saturated sky |
| H2 | `1e282d4d-8a84-4729-9b6e-ce059108bbcf` | portrait crop of the same scene |
| H3 | `eb402ac2-123f-4877-b2ab-62f3c0f3030f` | the coated third is now a blue membrane |
| L1 | `490a7103-301a-427c-9a39-5f3e4a2f3dfe` | wall in solid blue, green and yellow blocks |
| S4 | `ea22765c-76be-4db2-b451-67daa92bd2bc` | saturated court and canopy |
| M4 | `536b289e-ad43-419b-9f3f-3b6dd9d615b6` | blue tile and yellow tile |

Ink text measured 2.4:1 to 4.2:1 on parts of H1, H2 and H3, so the hero
words on those pages sit on a solid panel, not on the photograph.

## 3b. Manufacturer pack shots (not generated, never to be)

| Set | Source | How |
|---|---|---|
| `public/products/mapei/<slug>.webp`, 44 products on 2026-11-06, 49 since 2026-11-14 | Mapei's own media server, `cdnmedia.mapei.com/images/.../products-images/...`, the picture shown on each product's page on mapei.com (UAE site for 40, UK for Idrocrete KR 1000, Australia for Planiseal 88, Singapore for Idrostop PVC, South Africa for Ultraplan Eco 20). Every URL is in `assets/source/mapei-packshots/sources.txt` and in `src/config/packshots.json` | downloaded unaltered on 2026-11-06; `node scripts/build-packshots.mjs` centres each on white at 900 px, WebP, no retouching |

Added 2026-11-14, the same way (owner: "images for this you can get"):
the four November offer lines that have no catalogue page, Mapefill SP ME,
Mapegrout T80 and Planigrout 300 ME (UAE site) and Ultracolor Plus (UAE
site), keyed by their own slugs in `packshots.json` and shown on `/sale`
through `offer.items[].picture`; and Quarzo 0.5/1.2, pictured with Mapei
South Africa's picture of the Quarzo 0,25 to 1,9 range bag (the product
page says which grades we stock). 49 products now. Still no official
picture for Mapei Gun 585 2K (no product page on mapei.com) or Mapefloor
Finish 450 ME (its UAE page carries no picture; the site shows Finish 451,
a different product, so it was not used): those two pages show the name
in type until the owner photographs the packs.
The pack in a picture can differ from the pack stocked (for example
Antipluviol is pictured as 5 litres, Mapeflex PU 45 FT as 300 ml): each
page says so under the picture and states the pack we stock.
X-Calibur publishes no pack pictures on x-calibur.us: its pages show the
name in type until the owner or X-Calibur supplies pictures.
Permission: use of a manufacturer's pictures and data sheets by its
distributor is normal, but no written permission is on file (Q9).

## 3c. Blog 3D models and BIHUI models (Higgsfield, 2026-11-06)

- `assets/source/blog-3d/src/`: 11 pictures generated for blog heroes, each a
  scale model of a building detail (parapet roof, water tank, notched trowel,
  tile bed, epoxy section, spalled column, base plate, sealant joint, building
  frame, rain house, screed section). `npm run` not needed: posters come from
  `node scripts/build-blog-posters.mjs`. Illustrative, and captioned so.
- Each became a GLB with Tripo H3.1, compressed with gltf-transform to
  `public/models/blog/`.
- `public/products/bihui/` comes from the owner's BIHUI catalogue
  (`node scripts/build-bihui-pictures.mjs`). `public/models/bihui/` is generated
  from those pictures: the far side is an estimate, and the caption says so.

- Final BIHUI count: 75 of 81 tools published in 3D, after each model was opened
  and turned in its real page. `diamond-hand-pad` was rejected (grey blobs on
  the back) and moved to `assets/source/bihui-3d/rejected/`; that page keeps its
  catalogue picture.

## 3d. Project card pictures, 2026-11-06

Built by `node scripts/build-project-pictures.mjs` from
`assets/source/projects/` (gitignored) to `public/images/projects/`.

Real photographs, credited on the card:

| Project | Source | Licence |
|---|---|---|
| Oceans Mall | supplied by the owner (`oceans mall.jpg`, 800 x 600) | photographer not known: owner to confirm |
| Baraza Resort & Spa | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Baraza_Zanzibar.jpg), Rob from United Kingdom | CC BY 2.0 |
| Kimbiji Beach Resort | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kimbiji_beach,_Kigamboni_MC.jpg), Mangapwani. The beach, not the resort, and the card says so | CC BY-SA 4.0 |
| Lake Cement | [lakecement.co.tz](https://www.lakecement.co.tz/) `/images/slideshow/1.jpeg` | **no licence: Lake Cement's own photograph, used without written permission. Ask them** |

Searches found no usable photograph of the other 11, so those are generated
(Higgsfield `nano_banana_pro`, 22 credits, balance 214 to 192). They show the
kind of work the sheet's products did and are never that site. The owner removed
the labels from the cards on 2026-11-06; a line at the foot of `/projects` carries
the credits and says some pictures are illustrative.

| Project | Job |
|---|---|
| Awadha Villa | `421bf27b-3268-4a80-afd5-000a4993ed9d` |
| Charan Construction | `95f58e9c-0213-4595-8682-ac67620796f3` |
| Afya Wheat Flour Ltd | `f04b7d39-e7c4-4a60-bae3-d494706cf188` |
| Aga Khan Education | `a4eadd1f-8c35-4b83-8620-914859d6dca6` |
| Elven Agri | `7ccb018b-a756-4175-a59d-5702b1117d44` |
| Zanzibar Crown Hotel | `f7dc1b52-823e-464f-82f8-10d7d829dab3` |
| Estim Construction, including Kawe | `a6d74885-764b-4649-9719-ff9786572735` |
| GCLA Toxic Room | `c0db924e-38ed-48b2-90e2-8da51fcea4cc` |
| Beijing Construction | `2d86547f-05fc-47dc-a870-4cbd01bcc308` |
| Africana Village | `16927e85-90eb-430d-b420-d2aca0716a70` |
| DJV Construction | `c1b2773e-0256-4398-8693-1c8509752ac2` |

When the owner supplies a real site photograph, drop it in
`assets/source/projects/<slug>.jpg`, rebuild, and change that project's `picture`
kind to `"site"` with a credit.

## 3e. CMCI line pictures, 2026-11-07

| File | Source |
|---|---|
| `public/images/cmci/petrochemical.webp` | Picture inside the source data sheet of the range, unaltered but resized |
| `public/images/cmci/commercial.webp` | Same |
| `public/images/cmci/tunnels.webp` | Generated, Higgsfield `gpt_image_2_6`, job 21a0f382-9acf-4cfd-90b4-ab58b6e8e1b3, master in `assets/source/cmci-images/` |

Atmosphere only, with a line at the foot of `/cmci`. No pack shots. The source site's
tunnel picture was not used because it is captioned as another project.

## 4. The first attempt, 2026-11-05

Higgsfield refused every job that day (plan in a grace period). Nothing
was generated and nothing was spent. The queue ran on 2026-11-06: see
section 3.

## 3f. Vasa, HDPE, sports flooring and Tanzanite Bridge, 2026-11-07

None generated, 0 Higgsfield credits.

- `public/images/vasa/`: decors and room pictures taken from the Vasa PDF supplied by the owner.
- `public/images/oriental-yuhong/hdpe/`: from Oriental Yuhong's HDPE brochure.
- `public/images/oriental-yuhong/sports/`: from Oriental Yuhong's sports flooring presentation.
- `public/images/projects/tanzanite-bridge.webp`: Wikimedia Commons, photo by Mangapwani,
  CC BY-SA 4.0, credited at the foot of `/projects`. Source:
  https://commons.wikimedia.org/wiki/File:Tanzanite_Bridge,_From_Msasani_Ward_in_Kinondoni_District_to_Kivukoni_ward_in_Ilala_District.jpg
- All 3D models and diagrams on these pages are built in house in Three.js and SVG.

## 3g. OYH product models (Higgsfield, 2026-11-09)

Tripo H3.1 image to 3D, 9 credits each, 45 credits (177.75 before, 132.75 after). Source:
each product's OYH pack picture in `public/products/oriental-yuhong/`. Raw GLBs (about 43 MB)
in `assets/source/oyh-3d/`, published simplified to about 28,000 triangles and 1024 px
textures (280 to 340 KB) in `public/models/oriental-yuhong/`.

| Product | Job |
|---|---|
| yhcoat-1000 | f2f7cf61-1763-4857-8616-235847ad3059 |
| yhcoat-2060 | 3ecdc9cd-f57e-4f07-b1d9-5f2f2a5a8df6 |
| yhcolorwall-5300 | 55b1e495-1e48-4429-8a5f-a7f51a6e08ef |
| yhrepair-2516 | 937c8964-c6ff-45dc-9f12-1244bfca8736 |
| yhpuseal-2925 (REJECTED: grey patch on the side, in `assets/source/oyh-3d/rejected/`) | 30f447cb-5a81-462e-b996-c9893999dfb3 |

The generated back of each pack is a mirror of its front, so the viewer runs `frontOnly`:
the model faces the camera and turns 60 degrees either side. PMH-3080 Plus was not
modelled: its only picture is a factory photograph, and its page has the layer model.

## 3h. OYH sports films, brochure and guides (owner's "Nazrul" folder, 2026-11-09)

- Films in `public/videos/oyh-sports/`: Oriental Yuhong's own construction films
  (track, from the "Sports Flooring Products" pptx; Silicone PU court; artificial
  turf). Re-encoded without sound (music only; the steps are captioned in the
  picture): AV1 first, H.264 fallback, a 6 s silent loop of each and a WebP poster.
  Not edited otherwise. Chapter times read from the burned-in captions.
- `public/images/oriental-yuhong/sports/acrylic.webp`: the acrylic court layer
  drawing from the OYH sports brochure, page 12, with its own transparency.
- `public/tds/oriental-yuhong/sports/`: the brochure, the Silicone PU and the Elastic
  Acrylic construction guides, copied unaltered. Checked: no prices in them.
- The four system price lists (xlsx) stay in `assets/source/oyh-sports/nazrul/`
  (gitignored). Only product, layer, pack and consumption are used
  (`src/config/oyh-sports.ts`); every price column is dropped.

## 3i. Company profile 2026 (owner, 2026-11-09)

- `public/images/profile/page-01..24.webp`: the pages of the owner's "Tanzania profile.pdf",
  rendered at 110 dpi and resized to 820 px wide. Not edited.
- `public/tds/sahihi-company-profile-2026.pdf`: the same document through Ghostscript
  `/ebook` (12.4 MB to 2.9 MB). Original in `assets/source/profile/` (gitignored).
- Checked: no prices. It names the director (already public on /about) and lists CMCI's
  page with "manufacturer since 1984": that is the owner's own document, published as is.

## 3j. Kilimanjaro at moonrise (owner, 2026-11-09)

- Source: `mount kilimanjaro .jpg` (1080 x 742) supplied by the owner for the end of /contact;
  original kept as `assets/source/contact/kilimanjaro-moon.jpg` (gitignored). The photographer
  is not known: confirm the rights, or swap in a licensed or Sahihi-owned photograph.
- `scripts/build-kilimanjaro.py` splits it: `public/images/contact/kilimanjaro-base.webp` (the
  moon painted out with the neighbouring sky), `kilimanjaro-moon.webp` (the moon, alpha), and
  `src/config/kilimanjaro.json` (moon box, sky polygon). Only the moon is moved; nothing is added.
- Captioned "Tanzania · Kilimanjaro" only: no claim about where the picture was taken from or
  that the moon and mountain were one exposure.

## 3k. CMCI fire pictures (Higgsfield, 2026-11-11)

Generated, `gpt_image_2_6`, quality high, 2k, 3:2, 2.75 credits each, 8.25 credits
(127.25 before). Masters `assets/source/generated/F1..F3.png` (gitignored); derivatives by
`node scripts/build-images.mjs`; alt text in `firePhotos`, `src/config/images.ts`.
Atmosphere only: never captioned as a Sahihi project, never presented as a CMCI product.

| ID | File | Job id | Prompt (short) |
|---|---|---|---|
| F1 | `public/images/fire/spraying.webp` | b6dc5112-d021-4004-b6bb-e4fa45e81b63 | Applicator in coveralls, face hidden, spraying grey cementitious fireproofing onto steel beams in a tropical steel-frame building; no logos or text |
| F2 | `public/images/fire/coated-frame.webp` | e3ef7c52-d954-4d5f-b660-90c4667e1f27 | Finished steel frame, columns, beams and fluted deck evenly coated in grey sprayed fireproofing; no people, logos or text |
| F3 | `public/images/fire/thickness-gauge.webp` | 6736eda0-ebbd-43a5-9fdb-5bf2730425d9 | Macro of sprayed coating on an I-beam flange edge with an unmarked depth gauge pin; no hands, logos or text |

No bag model was made: the only bag pictures in the owner's folder (Monokote catalogue,
2026-11-11) are partial (a cropped, faded bag; hands emptying a bag), and a model from
them would invent the pack. Pack shots are never generated (3b).

## 3l. CMCI and X-Calibur product scenes (Higgsfield, 2026-11-11)

Owner, 2026-11-11: product pages for CMCI and X-Calibur "look very boring"; spend down to a
50 credit floor. One application scene per product, showing the use its data sheet names.
Generated, `gpt_image_2_6`, quality high, 2k, 3:2, 2.75 credits each, 49.5 credits for 18
(119 before, 69.5 after). Prompts asked for no logos, text, labels, packaging or faces in
focus. Masters `assets/source/generated/P01..P18.png` (gitignored); derivatives
`public/images/scenes/<slug>.webp` by `node scripts/build-images.mjs`; alt text in
`src/config/product-scenes.ts`. Illustrative only: never a pack shot, never captioned as a
Sahihi job or as the product's maker's photograph.

| ID | Product | Job id | Prompt (short) |
|---|---|---|---|
| P01 | `avikote-av-800` | 5dbd8594-7e48-43ff-9b6f-9f83fd7ce725 | Refinery pipe rack, steel coated in grey fireproofing, yellow and red pipes, storage tanks, blue sky |
| P02 | `avikote-av-650` | 6ac78c93-4433-444b-859e-1487a4a0fbd2 | Coastal gas plant, vessel supports and pipe bridge with trowelled grey fireproofing, palm trees |
| P03 | `monokote-z-156` | 0fec0c92-f472-4b0c-bb5c-10f5cd6eea3a | Road tunnel under construction, lining sprayed with grey fireproofing, orange work lights, worker from behind |
| P04 | `monokote-z-146` | 880d1683-d7a2-483a-b464-785ec94c7f3d | Multi-storey car park, steel with hard grey sprayed fireproofing, red and blue cars, palm trees |
| P05 | `monokote-z-106-hy` | 90bb3bd5-7133-4ec9-8b73-c19bbd1333da | Airport terminal concourse under construction, coated steel trusses, glass wall, turquoise and yellow floor |
| P06 | `monokote-z-106` | 4ae5479c-68e3-4811-be08-326526fb7f56 | Plant room, sprayed steel beams and fluted deck, red sprinkler, blue water pipes, green ducts |
| P07 | `monokote-mk-6-hy` | e753820a-f2a6-4a28-9d83-f686692d36bd | Upper floor of a steel frame, applicator from behind spraying grey fireproofing, city and sea beyond |
| P08 | `monokote-mk-6s` | 56cea4c0-a04f-4af8-ad7f-83722ad4bb70 | Small two-storey building, orange and yellow walls, steel frame sprayed light grey, orange scaffold |
| P09 | `aquakote` | 3c0c03ea-d4b7-4a26-ad14-e0a5f72d4bea | Roller applying a white elastomeric topcoat over grey sprayed fireproofing on a steel column |
| P10 | `monokote-accelerator` | ceff31a5-44c7-4b31-80b9-bd461b9e7c8e | Orange spray pump and hose feeding a steel frame, red earth site, yellow generator |
| P11 | `fr-bonding-agent` | acba1c5a-478f-4445-aa27-9cd69fbe1169 | Airless spray gun misting a milky sealer onto a red primed steel beam |
| P12 | `x-tech-sbr-bond` | 5b62f84b-23c6-4382-ba68-c9f7c29f7a31 | Brush working grey bonding slurry into a broken concrete beam with cleaned rebar, blue wall |
| P13 | `x-tech-epoxyfloor-sl1` | ff317a8d-f688-4c10-97a3-60e7ea522635 | Factory floor in glossy sky blue self-levelling epoxy with yellow walkway lines |
| P14 | `x-prime-gp` | f6967392-4d17-43b8-b5b9-36469875dc42 | Roller laying clear amber epoxy primer on ground concrete, colourful racking behind |
| P15 | `x-shield-flexpruf` | 20082c43-65f9-41ff-9546-66be2f9ee769 | Roof terrace in Dar es Salaam, grey waterproofing coat rolled over slab and parapet, worker from behind |
| P16 | `x-seal-ps800` | 04d90e59-c731-4833-8c8a-bc6de4165d11 | Sealant gun laying grey polysulphide bead into a masked concrete expansion joint |
| P17 | `x-seal-universal-primer` | 2b43e576-8d4b-4c04-a5db-f5def9430028 | Brush priming the sides of a joint between concrete facade panels, backer rod in the joint |
| P18 | `x-prime-gp2` | c87dd6e7-9b16-4c3a-96ad-a85a327f1f27 | Squeegee spreading clear epoxy primer on a workshop floor, finished emerald green epoxy behind |

## 3m. Pack shot cut-outs (2026-11-11)

`public/products/<brand>/cutout/<slug>.webp` are the same manufacturer files as the pack shots in section 2, resized to 640 px with their own transparency kept instead of being flattened onto white (`scripts/build-packshots.mjs`). Nothing is cut out by hand or by a model; a source without alpha (Mapei: `ultracare-stain-protector-w-plus`) keeps its white box and `packshot().cutout` is null for it. Used on `/sale` (the lineup) and by the Open Graph cards.

## 3n. Open Graph cards (2026-11-12)

`public/og/*.png` are composed by `scripts/build-og-cards.mjs` (`npm run assets:og`, after a build) from pictures already in the repo: the manufacturers' pack shot cut-outs in `public/products/<brand>/cutout`, BIHUI's catalogue photographs, the Journal's 3D posters and the hub photographs logged above, with the page's own title set in Montserrat. Nothing new is generated. `src/config/og-manifest.json` lists which route has a card; pages without one share the root `opengraph-image.jpg`.

## 3o. Documents shown as issued (2026-11-14)

`public/documents/x-calibur-authorised-distributor-2026.webp` is a plain raster of the owner's PDF `public/tds/x-calibur/authorised-distributor-2026.pdf` (X-Calibur International's "Authorised Distributor" certificate, supplied 2026-11-14): `pdftoppm -r 200`, then resized to 1400 px wide as WebP. Nothing is generated, retouched, cropped or masked; the stamp and the signature are as printed. The facts the page states are in `src/config/credentials.ts`.

`public/documents/sahihi-business-licence-2026.webp` is the same treatment of the BRELA business licence (the owner's file in `assets/source/owner-supplied/`, gitignored), at 900 px wide only: the owner chose on 2026-11-14 to show it whole, then view only, so no PDF is published and the raster is screen resolution. Nothing masked or retouched; the "view only" mark on the page is a CSS layer, not in the file. Facts in `src/config/company-documents.ts`.
