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
| `public/products/mapei/<slug>.webp`, 44 products | Mapei's own media server, `cdnmedia.mapei.com/images/.../products-images/...`, the picture shown on each product's page on mapei.com (UAE site for 40, UK for Idrocrete KR 1000, Australia for Planiseal 88, Singapore for Idrostop PVC, South Africa for Ultraplan Eco 20). Every URL is in `assets/source/mapei-packshots/sources.txt` and in `src/config/packshots.json` | downloaded unaltered on 2026-11-06; `node scripts/build-packshots.mjs` centres each on white at 900 px, WebP, no retouching |

No official picture was found for Mapei Gun 585 2K, Quarzo 0.5/1.2 or
Mapefloor Finish 450 ME (the site shows Finish 451, a different product,
so it was not used). Those pages show the name in type.
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
