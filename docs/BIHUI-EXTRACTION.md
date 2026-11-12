# BIHUI catalogue extraction

Source: `assets/source/owner-supplied/bihui/bihui-arabia-catalogue-2026.pdf` (24 pages, the only source). Data: `src/config/bihui-catalogue.json`. Pictures: `assets/source/bihui-pictures/<slug>.png`. Finished 2026-11-06.

## Pages read

Pages 4-23 were viewed at 150 dpi, page 2 in zoomed crops, and pages 1, 3 and 24 at 50 dpi. The text layer was read as well (pages 2-5 and 24 have none; those were read from the image).

- Page 1: cover. Page 2: brand text. Page 3: photograph of a man in BIHUI clothing, no statement. Pages 4-5: world map, lists and numbers. Page 24: back cover, a photograph of a BIHUI building, no text. So page 24 is not a product page; product pages are 6-23.
- `page` in the JSON is the PDF page. The "Page N" printed in the footers is the PDF page minus 5.
- No figure for what anything costs appears on any page; the table columns are only Sr#, SKU and Product. Red text in the tables is pack counts and sizes.
- Page footers and headers carry a third-party distributor's name, contacts and logo. None of it is recorded here, in the JSON or in a picture. QR codes were also left out.

## Totals and reconciliation

| | |
|---|---|
| Families | 81 |
| SKU entries (table rows, one row per printed code) | 132 |
| Distinct SKU codes | 131 (FTC200 is printed for two different tools, see below) |
| Categories | 12 |
| Pictures | 81, one per family, none unused |

SKU entries by page: p6 9, p7 9, p8 11, p9 11, p10 18, p11 19, p12 8, p13 5, p14 4, p15 7, p16 10, p17 3, p18 2, p19 3, p20 5, p21 2, p22 4, p23 2. These match a row count by eye on the 150 dpi renders of every page. A script also confirmed that every code is in `catalogue.txt` with no extra code there, and that every word of every description occurs in the text around its code. Four codes are printed broken over two lines (`TQW110` / `0`, and so on) and one more (`LFEC5-` / `CP`); they are joined in the JSON. The script checks words, not word order; order was checked by eye only on the renders.

## Categories

| Category | Families | SKU entries |
|---|---|---|
| Drill guides, workbench and repair tools | 5 | 5 |
| Measuring and levelling | 4 | 8 |
| Grouting, silicone and sponges | 12 | 12 |
| Trowels | 5 | 10 |
| Scrapers and knives | 9 | 19 |
| Tile levelling systems | 10 | 32 |
| Mixing | 6 | 8 |
| Grinders and polishing | 8 | 15 |
| Laser levels | 4 | 4 |
| Suction cups and lifting | 3 | 3 |
| Flooring and site protection | 7 | 8 |
| Cutting | 8 | 8 |

The categories are this extraction's own grouping, not the catalogue's: it has none.

## Catalogue inconsistencies

Everything is recorded in the JSON as printed. Nothing was silently fixed; typos in names are corrected only in `nameClean`.

### Most important

- FTC200 (pages 22 and 23): the same code for two tools, Trim Cutter and Multifunction Trim Puller. It therefore appears twice in the JSON, once in each family.
- TSL060, TSL120, TSL240 (page 6): printed lengths 1200mm, 600mm and 600mm contradict the codes.
- PTSB08, PTSB10 (page 7): identical text, both 6x6x6mm notch.
- CFHS165, CFHS190 (page 10): printed sizes 190x140x51mm and 165x110x60mm look swapped.
- SCDB4, SCTB4 (page 15): the "D" code is the tri-head cup and the "T" code is the double cup.
- LFMC5 (page 20): the manual system prints the electric machine's "CE approved electric cutting machine, 1,500W" line.
- MM1500 (page 12): "machine size 100x71x135mm" and "G.W./N.W. 1115/107KGS".
- LLG05 (page 14): headed "12 Line Laser Level" but describes a 1x360° line.

### Serial numbers

Duplicate or out-of-order Sr#: 11 (PTSJG8, PTSJH8); 45 to 48 each printed twice (page 10); 73 (MMB1800, MME1200); 80 (CG1900, CG2000, and DCFC5 out of sequence); 94, 95, 97, 98, 96 (page 16); 101 (TMR5M, TMR8M); 111 (LFEC5 and LFRS5 sharing a row, LFEC5-CP, LFMC5); 112 (FTFREX on page 17, TWTMST, FTPT450 and FTC200 on page 22, FTC200 and PTPCNR on page 23); 1 and 2 restart on page 21 (TCP1200, TCF1200).

### Pictured but with no table row

Page 10 shows, with printed labels, CFHSW11 (a sponge float with a teal handle) and TWS19 (a teal wash bucket on wheels). Page 10 also shows a black wedge in the TQW box with no row. None has a row or a description, so none is in the JSON.

### Other text oddities

- p6 STARK4 "APPLICTION"; p6 STAK2, STARK4 "SILICON" for silicone. p1 cover "Professional Tilling Tools".
- p7 "plstic", "rivits"; TASES6 "straightest".
- p9 CFHRL "GTOUT"; PTKJ rows print each size twice.
- p11 BLSS100 "bule"; BLS2100 grey 424C against 432C on the other 1.5mm rows.
- p14 LLG16 "2.."; "Equipped" is printed apart from its sentence.
- The page footer overprints the TQW3100 row (p10) and FTC200 "Rubber sleeve: PVC" (p22), and touches the last sticky mat line (p19). All are readable, and the text layer agrees.

### Per family, from the JSON

- p6 TSL060: Printed size 1200mm contradicts the SKU (060); the texts of TSL060 and TSL120 look swapped.
- p6 TSL120: Printed size 600mm contradicts the SKU (120); the texts of TSL060 and TSL120 look swapped.
- p6 TSL240: Printed size 600mm contradicts the SKU (240) and the same row's "up to measures of 240cm".
- p6 TSL060, TSL120, TSL180, TSL240: Three of the four rows print a length that contradicts the SKU. Sizes are recorded as printed; confirm before publishing.
- p7 PTSJG8, PTSJH8: Sr# 11 is printed on both rows.
- p7 PTSB08: Text is identical to PTSB10; both print a 6x6x6mm notch although the SKUs suggest 8 and 10.
- p7 PTSB10: Text is identical to PTSB08; both print a 6x6x6mm notch although the SKUs suggest 8 and 10.
- p7 PTSB03, PTSB08, PTSB10: PTSB08 and PTSB10 carry the same description with a 6x6x6mm notch. Notch sizes are recorded as printed; confirm before publishing.
- p9 CFSRS: The row prints no product name; the family name is put together from the description.
- p9 CFHSL: The row reads "with plastic handle, soft rubber handle": probably "soft rubber" describes the pad (the next row is the "hard rubber" version). Recorded as printed.
- p10 CFHS165: Printed size 190x140x51mm does not fit the SKU (165); the sizes of CFHS165 and CFHS190 look swapped.
- p10 CFHS165: The size printed for CFHS165 starts with 190 and the size printed for CFHS190 starts with 165. Recorded as printed; confirm before publishing.
- p10 CFHS190: Printed size 165x110x60mm does not fit the SKU (190); the sizes of CFHS165 and CFHS190 look swapped.
- p10 CFHS190: The size printed for CFHS190 starts with 165 and the size printed for CFHS165 starts with 190. Recorded as printed; confirm before publishing.
- p10 SL1100, SL2100, SL3100: The catalogue prints the same product wording for the SL and the BLT posts; "(SL)" is added to the name only to tell the two series apart.
- p10 SL1100, SL2100, SL3100: Sr# 45 to 48 are printed twice in this box.
- p10 BLT1100, BLT2100, BLT3100: The catalogue prints the same product wording for the SL and the BLT posts; "(BLT)" is added to the name only to tell the two series apart.
- p10 BLT1100, BLT2100, BLT3100: Sr# 45 to 48 are printed twice in this box.
- p10 TQW1100, TQW2100, TQWN100, TQW3100: The four SKUs are printed broken over two lines ("TQW110" then "0"); they are joined here as TQW1100, TQW2100, TQWN100, TQW3100.
- p10 TQW1100, TQW2100, TQWN100, TQW3100: The TQW3100 row is overprinted by the page footer; its text is taken from the PDF text layer.
- p10 TQW1100, TQW2100, TQWN100, TQW3100: The box also shows a black wedge that has no row on this page.
- p11 BLSS100, BLS1100, BLS1250, BLS1500, BLS2100, BLS2250, BLS21K, BLSN100, BLSN250, BLSN500, BLSN1K, BLSN2K, BLS3100, BLS3250: The 1mm rows say "higher size" where the other rows say "standard size".
- p11 BLSS100, BLS1100, BLS1250, BLS1500, BLS2100, BLS2250, BLS21K, BLSN100, BLSN250, BLSN500, BLSN1K, BLSN2K, BLS3100, BLS3250: BLS2100 prints grey 424C; the other two 1.5mm rows print transparent grey 432C.
- p11 BLSS100, BLS1100, BLS1250, BLS1500, BLS2100, BLS2250, BLS21K, BLSN100, BLSN250, BLSN500, BLSN1K, BLSN2K, BLS3100, BLS3250: BLSS100 prints "bule" for blue.
- p11 BLSE100: Prints 97x22x27mm where the 250 and 500 packs print 90x22x17mm.
- p11 BLSE100, BLSE250, BLSE500: The wedge size differs between the 100 pack (97x22x27mm) and the 250 and 500 packs (90x22x17mm).
- p11 BLSRR: The row calls it "Removal Roller"; the picture caption calls it "Levelling Removal Dozer".
- p12 MMB1800, MME1200: Sr# 73 is printed on both rows.
- p12 MM1500: Prints "machine size 100x71x135mm" and "G.W./N.W. 1115/107KGS", neither plausible for this machine (possibly cm and 115/107). Left out of the features; recorded as printed.
- p12 MM1500: Stray quotation marks around part of the row text.
- p13 CG1900: Sr# 80 is printed on CG1900, CG2000 and DCFC5.
- p13 CG2000: Sr# 80 is printed on CG1900, CG2000 and DCFC5.
- p13 DCFC5: Sr# 80 is out of sequence here (it follows Sr# 82).
- p14 LLG12: The ℃ sign is printed on the wrong line, away from "Working Temp.: -10~50". "Leveing" is printed for "Leveling". Recorded as printed.
- p14 LLG05: Headed "12 Line Laser Level" but the text describes a single 1x360° line, and the SKU suggests a smaller unit. "(LLG05)" is added to the name only to tell it from LLG12.
- p14 LLG05: The ℃ sign is printed on the wrong line, away from "Working Temp.: -10~50". "Leveing" is printed for "Leveling". Recorded as printed.
- p15 SCDB4: The SKU reads as "double" (SCD) but the row describes the tri-head cup; SCDB4 and SCTB4 look swapped.
- p15 SCDB4: SCDB4 and SCTB4 look swapped. Recorded as printed; confirm before publishing.
- p15 SCTB4: The SKU reads as "tri" (SCT) but the row describes the double cup; SCDB4 and SCTB4 look swapped.
- p15 SCTB4: SCDB4 and SCTB4 look swapped. Recorded as printed; confirm before publishing.
- p16 DPP415: Prints #1500 under a code that reads as 15 (the others read 5, 10, 20, 80), and its Sr# 96 is out of order.
- p16 DPP405, DPP410, DPP420, DPP480, DPP415: Sr# printed in the order 94, 95, 97, 98, 96.
- p16 DPP405, DPP410, DPP420, DPP480, DPP415: The pad pictures are marked 50, 100, 200, 200 and 1500: no pad marked 800 is pictured and two are marked 200.
- p16 TMR5M, TMR8M: Sr# 101 is printed on both rows.
- p17 UMR330: The row prints unclosed brackets ("(51"-71"") and "35kg{77Ib)". Recorded as printed in the description.
- p17 FTFREX: Sr# 112 is out of sequence (between 103 and 104).
- p17 FTSP600: Two different size sets are printed in the same row.
- p20 LFEC5: Shares one table row and one Sr# (111) with LFRS5.
- p20 LFEC5: The feature block prints "Compatible rails with the trade manual cutting system. Two systems, One rail" twice.
- p20 LFRS5: Shares one table row and one Sr# (111) with LFEC5.
- p20 LFEC5-CP: Sr# 111 repeated. The SKU is printed broken over two lines ("LFEC5-" then "CP").
- p20 LFMC5: Sr# 111 repeated.
- p20 LFMC5: The manual system prints the same bullets as the electric one, including "CE approved electric cutting machine, 1,500W, 230V/50Hz, 13,000RPM", which looks copied. That line is kept in details and left out of features; confirm before publishing.
- p21 TCP1200: Sr# restarts at 1 on this page, repeating Sr# 1 on page 6.
- p21 TCF1200: Sr# 2 repeats Sr# 2 on page 6.
- p22 TWTMST: Sr# 112 is printed on TWTMST, FTPT450 and FTC200 on this page, and again on page 17 and page 23.
- p22 FTPT450: Prints "Length 300mm" under a code that reads as 450, and on a 303mm rail. The stainless grade #402 also differs from #420 on the other tools.
- p22 FTPT450: The row prints no product name; the family name is put together from the description.
- p22 FTPT300: The stainless grade #402 differs from #420 on the other tools.
- p22 FTPT300: The row prints no product name; the family name is put together from the description.
- p22 FTC200: The same code FTC200 is printed for two different tools: this trim cutter and the multifunction trim puller on page 23.
- p22 FTC200: FTC200 is printed for two different tools. Confirm which code belongs to which before publishing.
- p23 FTC200: The same code FTC200 is printed for two different tools: this trim puller and the trim cutter on page 22.
- p23 FTC200: FTC200 is printed for two different tools. Confirm which code belongs to which before publishing.
- p23 PTPCNR: Sr# 112 is printed on both rows of this page.

## Pictures: doubtful or weak

### Doubtful (the match or the picture itself needs the owner's eye)

- telescope-handle (PTKJTH): Doubtful: unlabelled. Cropped from a picture of a pole with a skimming blade mounted on it, to show the pole alone; the only pole in the box. Its lower end is cut off in the source and the top is cropped at the elbow. Long side 538 px, under the 600 px aim: the PDF holds nothing larger.
- levelling-spacer-post-sl (SL1100, SL2100, SL3100): Doubtful: the box shows four unlabelled posts (teal, white, black, dark grey). The BLT rows name white, green and black, so the dark grey post is assigned here by elimination only. Long side 337 px, under the 600 px aim: the PDF holds nothing larger.
- levelling-spacer-post-blt (BLT1100, BLT2100, BLT3100): Doubtful: shows the teal post, taken to be the 1.5mm "Green" one. The posts in the box are not labelled; the white and the black post are also pictured. Long side 318 px, under the 600 px aim: the PDF holds nothing larger.
- concrete-grinder-1900w (CG1900): Doubtful: the two grinder pictures are not labelled. Assigned by left-to-right order only; the owner should confirm which grinder this is.
- concrete-grinder-2000w (CG2000): Doubtful: the two grinder pictures are not labelled. Assigned by left-to-right order only; the owner should confirm which grinder this is.
- concrete-grinder-working-stand (CGWS19): Doubtful: the only stand pictured, but it carries another company's faint watermark across the base. Do not publish without a clean picture. Long side 519 px, under the 600 px aim: the PDF holds nothing larger.
- laser-level-16-line (LLG16): Doubtful: the three kit pictures are not labelled. This one is assigned by inference only (largest kit, the unit appears to read 4x360). Owner to confirm. A CE mark beside it was removed.
- laser-level-12-line (LLG12): Doubtful: the three kit pictures are not labelled. This one is assigned by inference only. Owner to confirm.
- laser-level-llg05 (LLG05): Doubtful: the three kit pictures are not labelled. This one is assigned by inference only (compact one-head unit). Owner to confirm. Resized in height to the proportions printed on the page. Long side 255 px, under the 600 px aim: the PDF holds nothing larger.
- floor-protector (FTFP700): Doubtful as a product picture: no cut-out exists. Site photograph of the roll being unrolled by gloved hands, the best of three.
- carpet-protector (FTCP700): Doubtful as a product picture: no cut-out exists. Site photograph of the roll held by gloved hands on carpet, the best of three.
- water-cooling-parts (LFEC5-CP): Doubtful: small unlabelled photograph of parts laid out on a floor, the only candidate on the page. Not a product picture; owner to confirm it shows these parts. Long side 131 px, under the 600 px aim: the PDF holds nothing larger.

No family has a null picture.

### Matched by shape or position, not by a printed label

levelling-window-cap, spin-level-fast-clip-cap, reusable-tile-leveling-system, tile-leveling-base, leveling-plier, nylon-paint-roller, big-spiral-mixer, bucket-liner-20l, levelling-compound-mixing-station, cutting-rail-system, multifunction-trim-puller, and the other unlabelled pictures noted in each `imageNote`.

### Not cut out

jumbo-trowel-set-8pcs, extendable-floor-roller, strong-manual-tile-cutter, fast-tile-cutter: printed on a grey ground. floor-protector, carpet-protector and water-cooling-parts are photographs.

### Same picture for two families

professional-trowel-stainless-steel and professional-trowel-carbon-steel: the box has one trowel picture for six rows.

### Changed in the final check

- telescope-handle: cropped to the pole, because the source has a skimming blade (another family) mounted on it.
- professional-trowel (both), dual-combination-microfibre-sponge, diamond-hand-pad, laser-level-llg05: stored at a different shape from the page. Stretched on one axis to the printed proportions, so these are slightly interpolated. tile-spirit-level was left alone: the PDF's scale figures suggest a stretch, but by eye its printed shape matches the stored one.

### Under the 600 px aim (the PDF holds nothing larger)

54 of 81. Long side in px: tile-leveling-base 130, water-cooling-parts 131, epoxy-grout-rubber-float 152, dry-diamond-polishing-pad 155, bucket-liner-20l 165, tile-repairing-kit 165, rubber-packing-pad 172, diamond-hand-pad 194, mixer-station-with-timer 197, epoxy-grout-float-green-hard-rubber 208, waterproof-protective-film 209, tile-remover 215, big-spiral-mixer 227, levelling-base 244, extendable-floor-roller 251, laser-level-llg05 255, jumbo-trowel-set-8pcs 271, leveling-cap-wedges 294, combination-hydro-grout-sponge 308, reusable-tile-leveling-system 311, levelling-spacer-post-blt 318, professional-trowel-stainless-steel 324, professional-trowel-carbon-steel 324, levelling-spacer-post-sl 337, taping-knife 338, grout-float-tpr-soft-handle 339, pro-germany-hydro-grouting-sponge 352, laser-level-tripod 355, silicon-application-set-4pcs 358, tri-head-suction-cup 360, dual-combination-microfibre-sponge 371, epoxy-grout-float-thermoplastic-rubber-pad 374, double-suction-cup 378, tile-spirit-level 391, spazzle 393, measuring-ruler-rotating-shell 400, hydro-grout-sponge 401, angle-grinder 419, portable-mortar-mixer 458, leveling-plier 477, measuring-tape-wide-blade 481, electric-mixer 483, levelling-compound-mixing-station 493, cellulose-sponge 495, concrete-grinder-working-stand 519, spin-level-fast-clip-cap 523, silicon-application-kit-2pcs 530, levelling-window-cap 530, telescope-handle 538, multifunction-trim-puller 545, cutting-dust-extractor 556, trim-cutter 558, putty-scraper 564, caulk-tool-set-3pcs 579.

## Unreadable or unverified

- Nothing in the product tables is unreadable.
- Small lettering in the country lists on pages 4-5 is degraded in the source image: letters are smeared and the names are read from word shape and context. The headings and the four large numbers are clear.
- Whether the labelled-by-inference pictures are right cannot be settled from the PDF.
- No value here was checked against a BIHUI data sheet: none was supplied. The catalogue is the only source.

## Brand statements

Page 1: "Arabia" and "Professional Tilling Tools" (sic) on the cover. This is the Arabia edition; nothing in the PDF names Tanzania or Sahihi.

### Page 2

> With the key words being innovation and quality, BIHUI develops tools for professional installers and strives to focus on the design, manufacture and distribution of tiling and construction tools for safe handling, transportation and cutting of large format tiles as well as installing all kinds of ceramic & porcelain tiles.

> With over 18 years R&D experience and OEM&ODM production, the concept of BIHUI has evolved into a brand that represents the ethos and values, it is based upon offering a comprehensive range of products with a unique recognisable global identity that is visually appealing and informative with a competitive and flexible pricing policy to help build global markets and that is utilising recyclable materials for both product and packing minimising the environmental impact.

> MISSION: Making laying jobs much easier & Making life-living much better

> VISION: To be a Globally Leading Brand in Tiling Tools

> VALUE: Customer First, Innovative, Collaboration, Practical, Proactive

The second paragraph mentions a pricing policy. Do not reuse that clause on the site.

### Page 3

Photograph only, no statement.

### Page 4

Map legend: "BIHUI GROUP", "BIHUI FACTORY", "BRANCH OFFICE", "DISTRIBUTOR"; note "* Base on Wikipedia".

- Eastern Europe: Russia, Belarus, Ukraine, Estonia, Lithuania, Moldova, Hungary, Poland, Romania, Bulgaria
- Southern Europe: Italy, Spain, Greece, Cyprus, Croatia, Serbia, Bosnia And Herzegovina, Slovenia, Kosovo, Montenegro, Macedonia
- Northern Europe: Sweden, Norway, Denmark, Finland
- Western Europe: United Kingdom, Ireland, Belgium, Netherlands, Germany, France

> JOIN US . . . BECOME THE TILING TOOLS LEADER IN YOUR MARKET

### Page 5

- South America: Costa Rica, Chile, Argentina, Venezuela, Mauritius (Costa Rica and Mauritius under this heading are the catalogue's own)
- North America: U.S.A, Canada, Mexico
- Africa: Nigeria, South Africa, Algeria, Tunisia, Côte d'Ivoire
- Asia: Israel, South Korea, Sultanate of Oman, Taiwan, Kazakhstan, Saudi Arabia, Mongolia, Jordan, Tajikistan

> DISTRIBUTORS 60+ / BIHUI TEAM 150+ / PRODUCTION BASE 2 / OFFICE 2

Tanzania is in neither list, and neither page gives a date for these numbers. The map shades China and one country in South East Asia dark, with factory icons; no text names them.

## Name corrections for titles, 2026-11-12

Made in `titleOverride` and `typeWords` in `src/config/seo/bihui.ts` for the SERP titles only. The JSON keeps every name as printed; `nameClean` is unchanged. Page headings still use `nameClean` or the printed name.

Spelling and typesetting in the source:

- silicon-application-kit-2pcs: "Silicon Application Kit - 2pcs" (p6, STAK2) to "Silicone Application Kit 2pcs" ("Silicon" is a typo for silicone; the inner " - " was dropped so the title has one dash).
- silicon-application-set-4pcs: "4pcs Silicon Appliction Set" (p6, STARK4) to "Silicone Application Set 4pcs" ("Appliction" and "Silicon" corrected; the count moved after the name).
- epoxy-grout-float-green-hard-rubber: "Epoxy Gtout Float with Plastic Handle - Green Hard Rubber" (p9, CFHRL) to "Epoxy Grout Float - BIHUI Green Hard Rubber 248mm" ("Gtout" corrected, as `nameClean` already does).
- dry-diamond-polishing-pad: `4" Dry Diamond Polishing Pad` (p16) to "Dry Diamond Polishing Pad - BIHUI 4 Inch, #50-1500" (the inch mark written as a word).
- tile-gap-adjuster-with-suction-cups: "Tile Gap Adjustable with 2pcs 6 Inch Pump Suction Cup" (p15, LFTFV6) to "Tile Gap Adjuster - BIHUI Two 6 Inch Suction Cups" ("Adjustable" is the catalogue's grammar for the adjuster).
- reusable-tile-leveling-system: "Reusable Tile Leveling System" (p10, TQWT50) to "Reusable Tile Levelling System Tanzania" (American to British spelling, to match the query "tile levelling system Tanzania"; not a typo). Other "Leveling" names (tile-leveling-base, leveling-cap-wedges, leveling-plier) keep the catalogue spelling in the title and take the British spelling only in the query.
- aluminum-box-screed-set: "Aluminum" kept as printed in the title (American spelling, not a typo); the query and description use "aluminium".

Names over the 60-character budget or misleading as headed, shortened or reordered:

- professional-trowel-stainless-steel: "Professional Trowel with Smooth Soft Grip Handle, Stainless Steel #420" to "Notched Trowel Tanzania - BIHUI Stainless Steel".
- professional-trowel-carbon-steel: "Professional Trowel with Smooth Soft Grip Handle, Carbon Steel Blade" to "Carbon Steel Notched Trowel - BIHUI 6, 8, 10mm".
- epoxy-grout-float-thermoplastic-rubber-pad: "Epoxy Grout Float with Solid 12mm Thermoplastic Rubber Pad" to "Epoxy Grout Float - BIHUI 12mm TPR Pad, 89x254mm" (TPR is the catalogue's own abbreviation).
- epoxy-grout-rubber-float: "Epoxy Grout Rubber Float with Plastic Handle" to "Epoxy Grout Rubber Float - BIHUI Soft Rubber".
- levelling-spacer-post-sl and levelling-spacer-post-blt: "Levelling Straight Threaded Spacer Post (SL)" / "(BLT)" to "Levelling Spacer Post SL - BIHUI Threaded, 100 Pack" and "Levelling Spacer Post BLT - BIHUI 1mm, 1.5mm, 3mm". The SL and BLT labels are this extraction's, see page 10 above.
- laser-level-llg05: "12 Line Laser Level (LLG05)" to "Laser Level LLG05 - BIHUI 1x360 Green Line, IP54". The catalogue heading says 12 lines; its own text describes one 360 degree line, so the title follows the text and names the code.
- drill-position-scale: "Foldable Position Scale for Drilling" to "Drill Position Scale - BIHUI Foldable Drill Guide".
- jumbo-trowel-set-8pcs: "8pcs Jumbo Trowel Set in Stainless Steel" to "Jumbo Trowel Set - BIHUI 8pcs Stainless Steel".
- levelling-system-removal-roller: "Smart Levelling System Removal Roller" to "Levelling System Removal Roller - BIHUI Smart, 1.4m".
- concrete-grinder-working-stand: "Working Stand for 1900W Concrete Grinder" to "Concrete Grinder Working Stand - BIHUI 1900W, 230V".
- dual-combination-microfibre-sponge: "Dual Combination Microfibre Sponge" to "Microfibre Grout Sponge - BIHUI Dual Combination".

Reordered so the buyer's words lead (name unchanged in substance): strong-manual-tile-cutter ("Tile Cutter Tanzania - BIHUI Strong Manual 1200mm"), fast-tile-cutter ("Manual Tile Cutter Tanzania - BIHUI Fast with Laser"), laser-level-16-line ("Laser Level Tanzania - BIHUI 16 Line, TFT Screen"), grout-float-tpr-soft-handle ("Grout Float Tanzania - BIHUI TPR Handle, 240x100mm"), hydro-grout-sponge ("Grout Sponge Tanzania - BIHUI Hydro Sponge CFHS165"), double-suction-cup ("Tile Suction Cup Tanzania - BIHUI Double Cup, 85kg"), concrete-grinder-2000w ("Concrete Grinder Tanzania - BIHUI 2000W, Dust-Free").

Codes left out of titles and descriptions because the catalogue doubts them: FTC200 (printed for both the trim cutter and the trim puller); the printed sizes of CFHS165 and CFHS190, TSL060 to TSL240 and BLSE100; the 12 line heading on LLG05. The descriptions for SCDB4 and SCTB4 say the code is confirmed before ordering.

Added the same day, after the site-wide title/query gate:

- leveling-cap-wedges: "New Leveling Cap Wedges" to "Tile Levelling Wedges - BIHUI Cap Wedges, 100-500" ("New" dropped; British spelling to match the query).
- leveling-plier: "Leveling Plier for Floor Covering" to "Tile Levelling Pliers - BIHUI Floor Covering, BLSFP" (British spelling and plural to match the query).
- tilers-working-bench-master: "Tiler's Working Bench Master" to "Tilers Working Bench Master" (apostrophe dropped so the title token matches the query "tilers working bench").
- underlayment-embedding-roller: "Underlayment Embedding Roller" to "Membrane Embedding Roller - BIHUI UMR330, 35kg" (the catalogue's own use: "embed the membrane full bond with mortar").
- Query-led reorders, names otherwise intact: metal-hole-drill-guide ("Tile Hole Drill Guide - BIHUI Metal, Suction Cup"), cutting-dust-extractor ("Tile Cutting Dust Extractor - BIHUI DCFC5"), electric-cutting-system ("Large Format Tile Cutting Machine - BIHUI Electric"), trade-manual-cutting-system ("Manual Large Format Tile Cutter - BIHUI LFMC5"), sticky-mat ("Sticky Mat for Construction Sites - BIHUI 30 Sheets").
- Class words only (name unchanged): putty-scraper and taping-knife "Stainless Steel", mitre-jolly-cutting-system "Tile Edge Cutter", tile-leveling-base "3-12mm Tile, 100 Per Bag", water-cooling-parts "Electric Tile Cutter".

## Folded into the hub, 2026-11-12

Search Console left most code-only tool pages out of the index (the page
could say nothing but a code and "Ask us"). The owner chose to fold the
twelve families whose EVERY row is doubtful into their category on `/bihui`:
double-suction-cup, hydro-grout-sponge, laser-level-llg05,
multifunction-trim-puller, portable-mortar-mixer,
pro-germany-hydro-grouting-sponge, resin-bound-dual-handle-trowel,
resin-bound-pointing-trowel, spazzle, trade-manual-cutting-system,
tri-head-suction-cup, trim-cutter (`src/config/bihui-folded.json`). They
keep their card on the hub (name, picture, code, "ask us for the size"),
the card goes to WhatsApp, and the old URL 301s to the category section.
The catalogue JSON is unchanged; the fact rule for doubtful rows stands.
Families with SOME doubtful rows (tile-spirit-level,
professional-trowel-stainless-steel, leveling-cap-wedges,
dry-diamond-polishing-pad) keep their page: the good rows carry it.

The same day every page-bearing family gained a "What it is for" note in
`src/config/bihui-uses.json`: two or three sentences of trade use written
for this site, the product pages the tool is used with, and the guides it
belongs to. The notes may describe how that kind of tool is used; they may
not state a size, material, power or compatibility that is not in the
family's own rows. Thin inputs got honest notes that say so
(cutting-dust-extractor, measuring-ruler-rotating-shell, water-cooling-parts).
