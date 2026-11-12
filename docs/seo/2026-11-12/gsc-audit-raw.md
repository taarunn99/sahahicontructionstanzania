# GSC indexing audit: what separates indexed pages from the rest

Built HTML: `.next/server/app` (222 sitemap HTML pages, all present). Sets: INDEXED 141, CNI 55, UNKNOWN 26, not in any list 0.

Definitions: main_words = words in `<main>` with script/style/noscript/svg removed; unique_words = words of this page's main text found in no other page of the same family (first path segment); boilerplate_ratio = share of main-text sentences (5+ words) that appear verbatim in at least 3 other pages of the family; inbound = number of other sitemap pages whose HTML contains `href="<route>"`; out_internal_all = distinct sitemap routes linked from anywhere on the page (header, menu and footer included), out_internal_main = from `<main>` only.

## 1. Set composition by family

| family | pages | INDEXED | CNI | UNKNOWN |
|---|---|---|---|---|
| about | 1 | 1 | 0 | 0 |
| bihui | 82 | 36 | 34 | 12 |
| blog | 29 | 27 | 2 | 0 |
| cmci | 13 | 5 | 3 | 5 |
| contact | 1 | 1 | 0 | 0 |
| home | 1 | 1 | 0 | 0 |
| mapei | 53 | 45 | 6 | 2 |
| oriental-yuhong | 16 | 7 | 5 | 4 |
| products | 1 | 1 | 0 | 0 |
| projects | 1 | 1 | 0 | 0 |
| sale | 1 | 0 | 0 | 1 |
| solutions | 3 | 1 | 2 | 0 |
| specifier-pack | 1 | 0 | 0 | 1 |
| sw | 7 | 6 | 1 | 0 |
| vasa | 4 | 4 | 0 | 0 |
| x-calibur | 8 | 5 | 2 | 1 |

## 2. Per-set medians (mean in brackets), all pages

| metric | INDEXED | CNI | UNKNOWN |
|---|---|---|---|
| main_words | 976 (1017.4) n=141 | 260 (468.6) n=55 | 574 (876) n=26 |
| body_words | 1197 (1246.2) n=141 | 490 (698.1) n=55 | 804 (1106) n=26 |
| unique_words | 25.5 (36.4) n=136 | 9 (14.6) n=55 | 18 (22.6) n=24 |
| unique_ratio | 0.1 (0.1) n=136 | 0 (0.1) n=55 | 0.1 (0.1) n=24 |
| unique_words_site | 11 (19.7) n=141 | 6 (6.3) n=55 | 8.5 (9) n=26 |
| nonboiler_words | 789 (867.4) n=141 | 174 (321.2) n=55 | 452 (696.7) n=26 |
| boilerplate_ratio | 0.5 (0.4) n=135 | 0.6 (0.6) n=53 | 0.6 (0.6) n=24 |
| sentences | 43 (49.3) n=141 | 12 (22.7) n=55 | 26 (38.6) n=26 |
| inbound | 10 (46.3) n=141 | 7 (15.3) n=55 | 6.5 (15.2) n=26 |
| inbound_same_family | 7 (8.9) n=141 | 6 (5.8) n=55 | 4.5 (4.7) n=26 |
| inbound_other_family | 2 (37.4) n=141 | 1 (9.5) n=55 | 1 (10.5) n=26 |
| out_internal_all | 33 (35.9) n=141 | 32 (32.4) n=55 | 33 (35.3) n=26 |
| out_internal_main | 11 (14.4) n=141 | 10 (10.6) n=55 | 10.5 (13.3) n=26 |
| h2_count | 8 (6.8) n=141 | 4 (5.2) n=55 | 4 (6) n=26 |
| img_main | 6 (11.3) n=141 | 11 (9.8) n=55 | 11 (11.4) n=26 |
| canvas | 1 (0.7) n=141 | 1 (0.9) n=55 | 1 (1) n=26 |
| viewer3d | 1 (0.5) n=141 | 1 (0.8) n=55 | 1 (0.8) n=26 |
| ld_FAQPage | 0 (0.3) n=141 | 0 (0.1) n=55 | 0 (0.1) n=26 |
| ld_Product | 1 (0.6) n=141 | 1 (0.9) n=55 | 1 (0.9) n=26 |
| ld_BreadcrumbList | 1 (1) n=141 | 1 (1) n=55 | 1 (1) n=26 |
| title_len | 56 (55.6) n=141 | 57 (55.9) n=55 | 58 (57.2) n=26 |
| desc_len | 156 (155.1) n=141 | 155 (154.5) n=55 | 156.5 (154.4) n=26 |
| html_kb | 516 (525.9) n=141 | 489 (498.6) n=55 | 512.5 (515.8) n=26 |
| depth | 2 (2.3) n=141 | 2 (2.2) n=55 | 2 (2.1) n=26 |
| bihui_summary_words | 16 (14.7) n=35 | 15 (13.3) n=34 | 15.5 (14.5) n=12 |
| bihui_feature_words | 15 (17.5) n=35 | 15 (17.5) n=34 | 17 (19.2) n=12 |
| bihui_skus | 1 (2.1) n=35 | 1 (1.2) n=34 | 1 (1.5) n=12 |
| bihui_sized_rows | 1 (1.7) n=35 | 1 (0.8) n=34 | 1 (1) n=12 |
| bihui_doubtful_rows | 0 (0.1) n=35 | 0 (0.3) n=34 | 0 (0.4) n=12 |

## 3. Per-family medians, INDEXED vs CNI vs UNKNOWN

### bihui (82 pages)

| metric | INDEXED (n=36) | CNI (n=34) | UNKNOWN (n=12) |
|---|---|---|---|
| main_words | 245.5 (270.1) | 227.5 (232.3) | 233 (231.1) |
| unique_words | 6 (9.8) | 4 (7.4) | 5.5 (7.6) |
| nonboiler_words | 157 (183.3) | 138.5 (143.8) | 150 (144.1) |
| boilerplate_ratio | 0.6 (0.6) | 0.6 (0.6) | 0.6 (0.6) |
| inbound | 7 (13) | 6 (5.9) | 3.5 (4.4) |
| inbound_other_family | 0 (4.2) | 0 (0.3) | 0 (0.3) |
| out_internal_main | 12 (13.7) | 11 (11.1) | 12 (11.5) |
| h2_count | 4 (4.3) | 4 (4) | 4 (4) |
| img_main | 12 (13.7) | 11 (11.3) | 11 (11.5) |
| viewer3d | 1 (0.9) | 1 (1) | 1 (0.9) |
| ld_Product | 1 (1) | 1 (1) | 1 (1) |
| ld_FAQPage | 0 (0) | 0 (0) | 0 (0) |
| title_len | 57 (56.1) | 58 (56.2) | 58 (58) |
| desc_len | 155 (154.3) | 154 (153.8) | 153.5 (153.3) |

### blog (29 pages)

| metric | INDEXED (n=27) | CNI (n=2) |
|---|---|---|
| main_words | 2104 (1865.6) | 276 (276) |
| unique_words | 66 (70.5) | 5 (5) |
| nonboiler_words | 1964 (1753.6) | 157 (157) |
| boilerplate_ratio | 0 (0.1) | 0.4 (0.4) |
| inbound | 6 (16.5) | 5 (5) |
| inbound_other_family | 1 (10.7) | 0 (0) |
| out_internal_main | 14 (15.3) | 9.5 (9.5) |
| h2_count | 9 (7.7) | 2 (2) |
| img_main | 1 (1.3) | 5 (5) |
| viewer3d | 1 (0.8) | 0 (0) |
| ld_Product | 0 (0) | 0 (0) |
| ld_FAQPage | 1 (0.8) | 0 (0) |
| title_len | 56 (54.6) | 57 (57) |
| desc_len | 154 (153.8) | 158 (158) |

### cmci (13 pages)

| metric | INDEXED (n=5) | CNI (n=3) | UNKNOWN (n=5) |
|---|---|---|---|
| main_words | 1701 (1623.6) | 1086 (1283) | 816 (1017.4) |
| unique_words | 29 (38.8) | 25 (23.3) | 37 (45.2) |
| nonboiler_words | 850 (923) | 542 (615.7) | 581 (587.6) |
| boilerplate_ratio | 0.7 (0.6) | 0.7 (0.7) | 0.5 (0.6) |
| inbound | 9 (93.8) | 9 (8.3) | 6 (6.4) |
| inbound_other_family | 2 (84.8) | 2 (2) | 2 (2) |
| out_internal_main | 10 (11.2) | 9 (8.7) | 8 (8.2) |
| h2_count | 10 (10.2) | 9 (9.7) | 9 (9.2) |
| img_main | 6 (7.8) | 6 (5) | 4 (4.2) |
| viewer3d | 1 (1) | 1 (1) | 1 (1) |
| ld_Product | 1 (0.6) | 1 (1) | 1 (1) |
| ld_FAQPage | 0 (0.4) | 0 (0) | 0 (0) |
| title_len | 55 (55.4) | 56 (56) | 57 (56.4) |
| desc_len | 159 (158.2) | 155 (153.7) | 154 (153.2) |

### mapei (53 pages)

| metric | INDEXED (n=45) | CNI (n=6) | UNKNOWN (n=2) |
|---|---|---|---|
| main_words | 1058 (1013.8) | 1023.5 (977.5) | 1016.5 (1016.5) |
| unique_words | 23 (24.4) | 20 (21.8) | 25 (25) |
| nonboiler_words | 851 (824) | 819 (770) | 809 (809) |
| boilerplate_ratio | 0.5 (0.4) | 0.5 (0.5) | 0.5 (0.5) |
| inbound | 16 (43) | 12.5 (15.7) | 17 (17) |
| inbound_other_family | 9 (30) | 5.5 (8.7) | 9.5 (9.5) |
| out_internal_main | 10 (11.9) | 10 (10) | 10 (10) |
| h2_count | 8 (7.4) | 8 (8) | 8 (8) |
| img_main | 6 (6.3) | 6 (6) | 5.5 (5.5) |
| viewer3d | 0 (0) | 0 (0) | 0 (0) |
| ld_Product | 1 (0.9) | 1 (1) | 1 (1) |
| ld_FAQPage | 0 (0.1) | 0 (0) | 0 (0) |
| title_len | 57 (56.4) | 56.5 (56) | 54 (54) |
| desc_len | 156 (155.8) | 158.5 (158.5) | 158 (158) |

### oriental-yuhong (16 pages)

| metric | INDEXED (n=7) | CNI (n=5) | UNKNOWN (n=4) |
|---|---|---|---|
| main_words | 1058 (1160.7) | 731 (726.8) | 857 (853) |
| unique_words | 33 (46.1) | 26 (22.8) | 31 (30.3) |
| nonboiler_words | 863 (1010.6) | 574 (538.6) | 669 (653.8) |
| boilerplate_ratio | 0.3 (0.3) | 0.5 (0.5) | 0.4 (0.4) |
| inbound | 13 (100.4) | 9 (9.4) | 10 (10.5) |
| inbound_other_family | 7 (89.7) | 2 (2.4) | 3 (3.5) |
| out_internal_main | 10 (10.9) | 10 (9.6) | 9.5 (9.5) |
| h2_count | 9 (9.1) | 8 (7.6) | 8 (7.8) |
| img_main | 15 (18.4) | 6 (10.8) | 10.5 (10.5) |
| viewer3d | 1 (0.9) | 1 (1) | 1 (0.8) |
| ld_Product | 1 (0.9) | 1 (1) | 1 (1) |
| ld_FAQPage | 1 (0.9) | 0 (0.4) | 0.5 (0.5) |
| title_len | 53 (53.3) | 53 (53) | 55 (56) |
| desc_len | 156 (154.6) | 153 (152.2) | 158 (155) |

### solutions (3 pages)

| metric | INDEXED (n=1) | CNI (n=2) |
|---|---|---|
| main_words | 438 (438) | 415.5 (415.5) |
| unique_words | 100 (100) | 63.5 (63.5) |
| nonboiler_words | 435 (435) | 410.5 (410.5) |
| inbound | 221 (221) | 221 (221) |
| inbound_other_family | 219 (219) | 219 (219) |
| out_internal_main | 13 (13) | 11.5 (11.5) |
| h2_count | 3 (3) | 3 (3) |
| img_main | 8 (8) | 10 (10) |
| viewer3d | 0 (0) | 1 (1) |
| ld_Product | 0 (0) | 0 (0) |
| ld_FAQPage | 0 (0) | 0 (0) |
| title_len | 59 (59) | 57 (57) |
| desc_len | 157 (157) | 156 (156) |

### sw (7 pages)

| metric | INDEXED (n=6) | CNI (n=1) |
|---|---|---|
| main_words | 1101 (1285.8) | 854 (854) |
| unique_words | 65.5 (97.2) | 30 (30) |
| nonboiler_words | 938 (1170.8) | 655 (655) |
| boilerplate_ratio | 0.2 (0.2) | 0.3 (0.3) |
| inbound | 7 (7) | 7 (7) |
| inbound_other_family | 1 (1) | 1 (1) |
| out_internal_main | 19 (26.2) | 12 (12) |
| h2_count | 5 (5.5) | 5 (5) |
| img_main | 10 (16.5) | 6 (6) |
| viewer3d | 0 (0.3) | 0 (0) |
| ld_Product | 0 (0) | 0 (0) |
| ld_FAQPage | 1 (1) | 1 (1) |
| title_len | 56 (55) | 54 (54) |
| desc_len | 158 (156.3) | 157 (157) |

### x-calibur (8 pages)

| metric | INDEXED (n=5) | CNI (n=2) | UNKNOWN (n=1) |
|---|---|---|---|
| main_words | 837 (813.2) | 1144.5 (1144.5) | 926 (926) |
| unique_words | 44 (36) | 33 (33) | 54 (54) |
| nonboiler_words | 637 (637.6) | 913.5 (913.5) | 703 (703) |
| boilerplate_ratio | 0.5 (0.4) | 0.4 (0.4) | 0.5 (0.5) |
| inbound | 9 (51.8) | 7.5 (7.5) | 10 (10) |
| inbound_other_family | 2 (45.6) | 3 (3) | 3 (3) |
| out_internal_main | 9 (9.2) | 9.5 (9.5) | 8 (8) |
| h2_count | 9 (8.2) | 9 (9) | 9 (9) |
| img_main | 6 (9.8) | 6 (6) | 16 (16) |
| viewer3d | 1 (0.8) | 1 (1) | 1 (1) |
| ld_Product | 1 (0.8) | 1 (1) | 1 (1) |
| ld_FAQPage | 0 (0.2) | 0 (0) | 0 (0) |
| title_len | 54 (55.8) | 56.5 (56.5) | 59 (59) |
| desc_len | 155 (154.4) | 156 (156) | 157 (157) |

## 4. Metrics ranked by relative gap of medians (INDEXED vs CNI)

rel = |median(INDEXED) - median(CNI)| / max of the two. Only groups with at least 3 pages on each side.

| scope | metric | INDEXED median | CNI median | rel gap |
|---|---|---|---|---|
| all | unique_ratio | 0.1 | 0 | 1 |
| oriental-yuhong | ld_FAQPage | 1 | 0 | 1 |
| all | nonboiler_words | 789 | 174 | 0.78 |
| all | main_words | 976 | 260 | 0.73 |
| all | sentences | 43 | 12 | 0.72 |
| oriental-yuhong | inbound_other_family | 7 | 2 | 0.71 |
| all | unique_words | 25.5 | 9 | 0.65 |
| oriental-yuhong | img_main | 15 | 6 | 0.6 |
| all | body_words | 1197 | 490 | 0.59 |
| all | inbound_other_family | 2 | 1 | 0.5 |
| all | h2_count | 8 | 4 | 0.5 |
| all | unique_words_site | 11 | 6 | 0.45 |
| all | img_main | 6 | 11 | 0.45 |
| oriental-yuhong | boilerplate_ratio | 0.3 | 0.5 | 0.4 |
| mapei | inbound_other_family | 9 | 5.5 | 0.39 |
| cmci | main_words | 1701 | 1086 | 0.36 |
| cmci | nonboiler_words | 850 | 542 | 0.36 |
| bihui | unique_words | 6 | 4 | 0.33 |
| oriental-yuhong | nonboiler_words | 863 | 574 | 0.33 |
| oriental-yuhong | main_words | 1058 | 731 | 0.31 |
| oriental-yuhong | inbound | 13 | 9 | 0.31 |
| all | inbound | 10 | 7 | 0.3 |
| mapei | inbound | 16 | 12.5 | 0.22 |
| oriental-yuhong | unique_words | 33 | 26 | 0.21 |
| all | boilerplate_ratio | 0.5 | 0.6 | 0.17 |
| all | inbound_same_family | 7 | 6 | 0.14 |
| bihui | inbound | 7 | 6 | 0.14 |
| cmci | unique_words | 29 | 25 | 0.14 |
| mapei | unique_words | 23 | 20 | 0.13 |
| bihui | nonboiler_words | 157 | 138.5 | 0.12 |
| oriental-yuhong | h2_count | 9 | 8 | 0.11 |
| cmci | out_internal_main | 10 | 9 | 0.1 |
| cmci | h2_count | 10 | 9 | 0.1 |
| all | out_internal_main | 11 | 10 | 0.09 |
| bihui | out_internal_main | 12 | 11 | 0.08 |
| bihui | img_main | 12 | 11 | 0.08 |
| bihui | main_words | 245.5 | 227.5 | 0.07 |
| all | bihui_summary_words | 16 | 15 | 0.06 |
| all | html_kb | 516 | 489 | 0.05 |
| mapei | nonboiler_words | 851 | 819 | 0.04 |

## 5. BIHUI pages

81 tool pages. Code-only pages (no row with a usable size): 26; pages with at least one doubtful row (shown as "Ask us"): 16; pages without a picture: 2.

| set | n | median summary words | median feature words | median skus | code-only | with doubtful row | with 3D | median main_words | median unique_words | median inbound |
|---|---|---|---|---|---|---|---|---|---|---|
| INDEXED | 35 | 16 | 15 | 1 | 9 | 3 | 30 | 245 | 6 | 7 |
| CNI | 34 | 15 | 15 | 1 | 12 | 8 | 34 | 227.5 | 4 | 6 |
| UNKNOWN | 12 | 15.5 | 17 | 1 | 5 | 5 | 11 | 233 | 5.5 | 3.5 |

Doubtful-row and code-only BIHUI pages:

| route | set | skus | sized rows | doubtful rows | code-only | main_words | unique_words | inbound |
|---|---|---|---|---|---|---|---|---|
| /bihui/concrete-grinder-working-stand | INDEXED | 1 | 0 | 0 | yes | 189 | 3 | 8 |
| /bihui/corner-putty-knife | INDEXED | 1 | 0 | 0 | yes | 269 | 18 | 3 |
| /bihui/cutting-dust-extractor | INDEXED | 1 | 0 | 0 | yes | 179 | 1 | 6 |
| /bihui/double-suction-cup | CNI | 1 | 0 | 1 | yes | 206 | 1 | 4 |
| /bihui/dry-diamond-polishing-pad | INDEXED | 5 | 4 | 1 | no | 278 | 10 | 3 |
| /bihui/electric-cutting-system | INDEXED | 1 | 0 | 0 | yes | 243 | 5 | 9 |
| /bihui/epoxy-grout-rubber-float | INDEXED | 1 | 0 | 0 | yes | 227 | 0 | 6 |
| /bihui/fast-tile-cutter | CNI | 1 | 0 | 0 | yes | 232 | 6 | 3 |
| /bihui/hydro-grout-sponge | CNI | 1 | 0 | 1 | yes | 196 | 0 | 3 |
| /bihui/laser-level-12-line | CNI | 1 | 0 | 0 | yes | 254 | 8 | 5 |
| /bihui/laser-level-16-line | CNI | 1 | 0 | 0 | yes | 278 | 36 | 6 |
| /bihui/laser-level-llg05 | UNKNOWN | 1 | 0 | 1 | yes | 228 | 3 | 4 |
| /bihui/laser-level-tripod | CNI | 1 | 0 | 0 | yes | 190 | 1 | 5 |
| /bihui/leveling-cap-wedges | UNKNOWN | 3 | 2 | 1 | no | 244 | 7 | 3 |
| /bihui/leveling-plier | UNKNOWN | 1 | 0 | 0 | yes | 193 | 2 | 3 |
| /bihui/measuring-ruler-rotating-shell | CNI | 1 | 0 | 0 | yes | 183 | 1 | 5 |
| /bihui/metal-hole-drill-guide | INDEXED | 1 | 0 | 0 | yes | 227 | 2 | 7 |
| /bihui/multifunction-trim-puller | UNKNOWN | 1 | 0 | 1 | yes | 241 | 12 | 7 |
| /bihui/portable-mortar-mixer | CNI | 1 | 0 | 1 | yes | 228 | 13 | 3 |
| /bihui/pro-germany-hydro-grouting-sponge | CNI | 1 | 0 | 1 | yes | 202 | 0 | 3 |
| /bihui/professional-trowel-stainless-steel | CNI | 3 | 1 | 2 | no | 289 | 6 | 6 |
| /bihui/resin-bound-dual-handle-trowel | INDEXED | 1 | 0 | 1 | yes | 259 | 4 | 6 |
| /bihui/resin-bound-pointing-trowel | UNKNOWN | 1 | 0 | 1 | yes | 251 | 1 | 6 |
| /bihui/spazzle | CNI | 1 | 0 | 1 | yes | 212 | 9 | 7 |
| /bihui/tile-repairing-kit | INDEXED | 1 | 0 | 0 | yes | 258 | 12 | 7 |
| /bihui/tile-spirit-level | INDEXED | 4 | 1 | 3 | no | 258 | 10 | 7 |
| /bihui/trade-manual-cutting-system | CNI | 1 | 0 | 1 | yes | 229 | 0 | 6 |
| /bihui/tri-head-suction-cup | UNKNOWN | 1 | 0 | 1 | yes | 213 | 2 | 4 |
| /bihui/trim-cutter | CNI | 1 | 0 | 1 | yes | 224 | 13 | 3 |
| /bihui/water-cooling-parts | INDEXED | 1 | 0 | 0 | yes | 153 | 1 | 8 |

## 6. The 15 thinnest pages (by main_words)

| route | set | main_words | unique_words | nonboiler_words | boilerplate_ratio | inbound | h2_count | img_main |
|---|---|---|---|---|---|---|---|---|
| /bihui/water-cooling-parts | INDEXED | 153 | 1 | 65 | 0.7 | 8 | 4 | 10 |
| /bihui/cutting-dust-extractor | INDEXED | 179 | 1 | 79 | 0.73 | 6 | 4 | 12 |
| /bihui/carpet-protector | INDEXED | 183 | 5 | 109 | 0.67 | 6 | 4 | 11 |
| /bihui/measuring-ruler-rotating-shell | CNI | 183 | 1 | 87 | 0.73 | 5 | 4 | 10 |
| /blog/category/building-in-tanzania | CNI | 183 | 8 | 128 | 0.29 | 3 | 2 | 6 |
| /bihui/nylon-paint-roller | CNI | 184 | 3 | 83 | 0.73 | 3 | 4 | 13 |
| /bihui/floor-protector | INDEXED | 185 | 4 | 111 | 0.67 | 7 | 4 | 11 |
| /bihui/telescope-handle | INDEXED | 186 | 3 | 85 | 0.73 | 3 | 4 | 13 |
| /bihui/concrete-grinder-working-stand | INDEXED | 189 | 3 | 110 | 0.6 | 8 | 4 | 12 |
| /bihui/laser-level-tripod | CNI | 190 | 1 | 88 | 0.73 | 5 | 4 | 12 |
| /bihui/leveling-plier | UNKNOWN | 193 | 2 | 96 | 0.73 | 3 | 4 | 11 |
| /bihui/cellulose-sponge | CNI | 194 | 3 | 109 | 0.64 | 3 | 4 | 11 |
| /bihui/hydro-grout-sponge | CNI | 196 | 0 | 99 | 0.67 | 3 | 4 | 11 |
| /bihui/reusable-tile-leveling-system | CNI | 196 | 1 | 111 | 0.64 | 6 | 4 | 11 |
| /bihui/silicon-application-kit-2pcs | INDEXED | 196 | 0 | 99 | 0.73 | 14 | 4 | 11 |

## 6b. The 15 pages with fewest non-boilerplate words (own sentences, family view)

| route | set | main_words | unique_words | nonboiler_words | boilerplate_ratio | inbound |
|---|---|---|---|---|---|---|
| /bihui/water-cooling-parts | INDEXED | 153 | 1 | 65 | 0.7 | 8 |
| /bihui/cutting-dust-extractor | INDEXED | 179 | 1 | 79 | 0.73 | 6 |
| /bihui/nylon-paint-roller | CNI | 184 | 3 | 83 | 0.73 | 3 |
| /bihui/telescope-handle | INDEXED | 186 | 3 | 85 | 0.73 | 3 |
| /bihui/measuring-ruler-rotating-shell | CNI | 183 | 1 | 87 | 0.73 | 5 |
| /bihui/laser-level-tripod | CNI | 190 | 1 | 88 | 0.73 | 5 |
| /bihui/leveling-plier | UNKNOWN | 193 | 2 | 96 | 0.73 | 3 |
| /bihui/hydro-grout-sponge | CNI | 196 | 0 | 99 | 0.67 | 3 |
| /bihui/silicon-application-kit-2pcs | INDEXED | 196 | 0 | 99 | 0.73 | 14 |
| /bihui/silicon-application-set-4pcs | INDEXED | 198 | 1 | 101 | 0.73 | 13 |
| /bihui/pro-germany-hydro-grouting-sponge | CNI | 202 | 0 | 105 | 0.67 | 3 |
| /bihui/carpet-protector | INDEXED | 183 | 5 | 109 | 0.67 | 6 |
| /bihui/cellulose-sponge | CNI | 194 | 3 | 109 | 0.64 | 3 |
| /bihui/concrete-grinder-working-stand | INDEXED | 189 | 3 | 110 | 0.6 | 8 |
| /bihui/floor-protector | INDEXED | 185 | 4 | 111 | 0.67 | 7 |

## 7. The 15 least-linked pages (by inbound)

| route | set | inbound | inbound_same_family | inbound_other_family | inbound_hubs | main_words |
|---|---|---|---|---|---|---|
| /sale | UNKNOWN | 2 | 0 | 2 | ///sw | 508 |
| /bihui/cellulose-sponge | CNI | 3 | 3 | 0 | /bihui | 194 |
| /bihui/combination-hydro-grout-sponge | CNI | 3 | 3 | 0 | /bihui | 202 |
| /bihui/corner-putty-knife | INDEXED | 3 | 3 | 0 | /bihui | 269 |
| /bihui/diamond-hand-pad | INDEXED | 3 | 3 | 0 | /bihui | 214 |
| /bihui/dry-diamond-polishing-pad | INDEXED | 3 | 3 | 0 | /bihui | 278 |
| /bihui/drywall-skimming-scraper | INDEXED | 3 | 3 | 0 | /bihui | 276 |
| /bihui/dual-combination-microfibre-sponge | CNI | 3 | 3 | 0 | /bihui | 207 |
| /bihui/epoxy-grout-float-green-hard-rubber | INDEXED | 3 | 3 | 0 | /bihui | 235 |
| /bihui/fast-tile-cutter | CNI | 3 | 3 | 0 | /bihui | 232 |
| /bihui/grout-float-tpr-soft-handle | UNKNOWN | 3 | 3 | 0 | /bihui | 238 |
| /bihui/hydro-grout-sponge | CNI | 3 | 3 | 0 | /bihui | 196 |
| /bihui/leveling-cap-wedges | UNKNOWN | 3 | 3 | 0 | /bihui | 244 |
| /bihui/leveling-plier | UNKNOWN | 3 | 3 | 0 | /bihui | 193 |
| /bihui/levelling-base | INDEXED | 3 | 3 | 0 | /bihui | 542 |

## 7b. Least-linked from OTHER families (no cross-family inbound at all)

| route | set | inbound | inbound_same_family | inbound_hubs |
|---|---|---|---|---|
| /bihui/cellulose-sponge | CNI | 3 | 3 | /bihui |
| /bihui/combination-hydro-grout-sponge | CNI | 3 | 3 | /bihui |
| /bihui/corner-putty-knife | INDEXED | 3 | 3 | /bihui |
| /bihui/diamond-hand-pad | INDEXED | 3 | 3 | /bihui |
| /bihui/dry-diamond-polishing-pad | INDEXED | 3 | 3 | /bihui |
| /bihui/drywall-skimming-scraper | INDEXED | 3 | 3 | /bihui |
| /bihui/dual-combination-microfibre-sponge | CNI | 3 | 3 | /bihui |
| /bihui/epoxy-grout-float-green-hard-rubber | INDEXED | 3 | 3 | /bihui |
| /bihui/fast-tile-cutter | CNI | 3 | 3 | /bihui |
| /bihui/grout-float-tpr-soft-handle | UNKNOWN | 3 | 3 | /bihui |
| /bihui/hydro-grout-sponge | CNI | 3 | 3 | /bihui |
| /bihui/leveling-cap-wedges | UNKNOWN | 3 | 3 | /bihui |
| /bihui/leveling-plier | UNKNOWN | 3 | 3 | /bihui |
| /bihui/levelling-base | INDEXED | 3 | 3 | /bihui |
| /bihui/levelling-system-removal-roller | INDEXED | 3 | 3 | /bihui |
| /bihui/nylon-paint-roller | CNI | 3 | 3 | /bihui |
| /bihui/portable-mortar-mixer | CNI | 3 | 3 | /bihui |
| /bihui/pro-germany-hydro-grouting-sponge | CNI | 3 | 3 | /bihui |
| /bihui/rubber-packing-pad | INDEXED | 3 | 3 | /bihui |
| /bihui/sticky-mat | UNKNOWN | 3 | 3 | /bihui |
| /bihui/strong-manual-tile-cutter | UNKNOWN | 3 | 3 | /bihui |
| /bihui/telescope-handle | INDEXED | 3 | 3 | /bihui |
| /bihui/tile-leveling-base | UNKNOWN | 3 | 3 | /bihui |
| /bihui/trim-cutter | CNI | 3 | 3 | /bihui |
| /bihui/waterproof-protective-film | CNI | 3 | 3 | /bihui |
| /blog/category/building-in-tanzania | CNI | 3 | 3 | /blog |
| /blog/category/concrete-repair | INDEXED | 3 | 3 | /blog |
| /blog/epoxy-floor-thickness | INDEXED | 3 | 3 | /blog |
| /blog/epoxy-grout-vs-cement-grout | INDEXED | 3 | 3 | /blog |
| /blog/joint-sealant-width-depth-coverage | INDEXED | 3 | 3 | /blog |
| /bihui/double-suction-cup | CNI | 4 | 4 | /bihui |
| /bihui/laser-level-llg05 | UNKNOWN | 4 | 4 | /bihui |
| /blog/why-epoxy-floors-blister-and-peel | INDEXED | 4 | 4 | /blog |
| /bihui/laser-level-tripod | CNI | 5 | 5 | /bihui |
| /bihui/measuring-ruler-rotating-shell | CNI | 5 | 5 | /bihui |
| /bihui/measuring-tape-wide-blade | CNI | 5 | 5 | /bihui |
| /blog/cementitious-vs-liquid-membrane-waterproofing | INDEXED | 5 | 5 | /blog |
| /blog/mapei-waiting-times-before-tiling-grouting-walking | INDEXED | 5 | 5 | /blog |
| /blog/self-levelling-compound-per-square-metre | INDEXED | 5 | 5 | /blog |
| /blog/when-to-tile-on-self-levelling-compound | INDEXED | 5 | 5 | /blog |
| /bihui/big-spiral-mixer | INDEXED | 6 | 6 | /bihui |
| /bihui/bucket-liner-20l | CNI | 6 | 6 | /bihui |
| /bihui/carpet-protector | INDEXED | 6 | 6 | /bihui |
| /bihui/cutting-dust-extractor | INDEXED | 6 | 6 | /bihui |
| /bihui/epoxy-grout-rubber-float | INDEXED | 6 | 6 | /bihui |
| /bihui/mixer-station-with-timer | INDEXED | 6 | 6 | /bihui |
| /bihui/notched-taping-knife | CNI | 6 | 6 | /bihui |
| /bihui/professional-trowel-carbon-steel | CNI | 6 | 6 | /bihui |
| /bihui/resin-bound-dual-handle-trowel | INDEXED | 6 | 6 | /bihui |
| /bihui/resin-bound-pointing-trowel | UNKNOWN | 6 | 6 | /bihui |
| /bihui/reusable-tile-leveling-system | CNI | 6 | 6 | /bihui |
| /bihui/trade-manual-cutting-system | CNI | 6 | 6 | /bihui |
| /blog/masika-vuli-builders-rain-calendar | INDEXED | 6 | 6 | /blog |
| /blog/tile-adhesive-vs-sand-and-cement | INDEXED | 6 | 6 | /blog |
| /blog/waterproofing-coverage-per-square-metre | INDEXED | 6 | 6 | /blog |
| /bihui/floor-protector | INDEXED | 7 | 7 | /bihui |
| /bihui/multifunction-trim-puller | UNKNOWN | 7 | 7 | /bihui |
| /bihui/spazzle | CNI | 7 | 7 | /bihui |
| /bihui/tile-repairing-kit | INDEXED | 7 | 7 | /bihui |
| /bihui/tilers-working-bench-master | CNI | 7 | 7 | /bihui |
| /blog/category/tiling | CNI | 7 | 7 | /blog |
| /blog/screed-or-self-levelling-compound | INDEXED | 7 | 7 | /blog |
| /bihui/angle-grinder | INDEXED | 8 | 8 | /bihui |
| /bihui/concrete-grinder-working-stand | INDEXED | 8 | 8 | /bihui |
| /bihui/cutting-rail-system | CNI | 8 | 8 | /bihui |
| /bihui/water-cooling-parts | INDEXED | 8 | 8 | /bihui |
| /bihui/taping-knife | INDEXED | 9 | 9 | /bihui |
| /bihui/tile-remover | CNI | 9 | 9 | /bihui |
| /bihui/levelling-spacer-post-blt | CNI | 10 | 10 | /bihui |
| /bihui/levelling-window-cap | CNI | 10 | 10 | /bihui |
| /bihui/epoxy-grout-float-thermoplastic-rubber-pad | INDEXED | 13 | 13 | /bihui |
| /bihui/silicon-application-set-4pcs | INDEXED | 13 | 13 | /bihui |

## 8. Link structure by set

| set | n | median inbound | linked from / | linked from /products | linked from family hub | zero cross-family inbound | inbound <= 3 |
|---|---|---|---|---|---|---|---|
| INDEXED | 141 | 10 | 42 | 85 | 127 of 129 | 36 | 13 |
| CNI | 55 | 7 | 4 | 27 | 53 of 55 | 27 | 11 |
| UNKNOWN | 26 | 6.5 | 3 | 16 | 24 of 24 | 9 | 7 |

## 9. Structural flags by set (count of pages)

| set | n | no `<main>` | h2 = 0 | img_main = 0 | 3D/canvas | FAQPage | Product | BreadcrumbList | title > 60 | desc > 160 | desc < 70 | robots not index | canonical mismatch |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| INDEXED | 141 | 0 | 0 | 7 | 77 | 49 | 90 | 139 | 0 | 0 | 0 | 0 | 0 |
| CNI | 55 | 0 | 0 | 0 | 46 | 3 | 50 | 55 | 0 | 0 | 0 | 0 | 0 |
| UNKNOWN | 26 | 0 | 0 | 0 | 21 | 2 | 24 | 26 | 0 | 0 | 0 | 0 | 0 |

## 10. Recency (git)

Template = the `page.tsx` that renders the route; content = the data file for the route where one exists. Dates are the first and last commit touching that file; `since 11-09` counts commits from 2026-11-09 on. The 2026-11-11 commit 1b9dcb9 (metadata pass) touched almost every template.

| set | n | template first-commit dates | content last-commit dates | median template commits since 11-09 |
|---|---|---|---|---|
| INDEXED | 141 | 2026-11-06: 126, 2026-11-07: 4, 2026-11-09: 11 | 2026-11-06: 92, 2026-11-07: 8, 2026-11-09: 4, 2026-11-11: 10, n/a: 27 | 3 |
| CNI | 55 | 2026-11-06: 48, 2026-11-07: 3, 2026-11-09: 2, 2026-11-10: 2 | 2026-11-06: 42, 2026-11-07: 5, 2026-11-09: 1, 2026-11-11: 3, n/a: 4 | 3 |
| UNKNOWN | 26 | 2026-11-06: 17, 2026-11-07: 5, 2026-11-09: 2, 2026-11-10: 1, 2026-11-11: 1 | 2026-11-06: 16, 2026-11-07: 3, 2026-11-11: 5, n/a: 2 | 3 |

Template first-commit date by set and family:

| family | INDEXED | CNI | UNKNOWN |
|---|---|---|---|
| about | 2026-11-06: 1 | - | - |
| bihui | 2026-11-06: 36 | 2026-11-06: 34 | 2026-11-06: 12 |
| blog | 2026-11-06: 27 | 2026-11-06: 2 | - |
| cmci | 2026-11-07: 4, 2026-11-09: 1 | 2026-11-07: 3 | 2026-11-07: 5 |
| contact | 2026-11-06: 1 | - | - |
| home | 2026-11-06: 1 | - | - |
| mapei | 2026-11-06: 45 | 2026-11-06: 6 | 2026-11-06: 2 |
| oriental-yuhong | 2026-11-06: 2, 2026-11-09: 5 | 2026-11-06: 3, 2026-11-09: 2 | 2026-11-06: 2, 2026-11-09: 2 |
| products | 2026-11-06: 1 | - | - |
| projects | 2026-11-06: 1 | - | - |
| sale | - | - | 2026-11-11: 1 |
| solutions | 2026-11-09: 1 | 2026-11-10: 2 | - |
| specifier-pack | - | - | 2026-11-10: 1 |
| sw | 2026-11-06: 6 | 2026-11-06: 1 | - |
| vasa | 2026-11-09: 4 | - | - |
| x-calibur | 2026-11-06: 5 | 2026-11-06: 2 | 2026-11-06: 1 |

## 11. Every CNI and UNKNOWN page with its numbers

| route | set | main_words | unique_words | nonboiler_words | boilerplate_ratio | inbound | inbound_other_family | inbound_hubs | h2_count | img_main | viewer3d | ld_Product | title_len | desc_len |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /bihui/bucket-liner-20l | CNI | 231 | 4 | 141 | 0.58 | 6 | 0 | /bihui | 4 | 13 | 1 | 1 | 55 | 148 |
| /bihui/caulk-tool-set-3pcs | CNI | 235 | 4 | 150 | 0.64 | 13 | 1 | /products//bihui | 4 | 11 | 1 | 1 | 60 | 160 |
| /bihui/cellulose-sponge | CNI | 194 | 3 | 109 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 59 | 142 |
| /bihui/combination-hydro-grout-sponge | CNI | 202 | 3 | 117 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 60 | 153 |
| /bihui/concrete-grinder-2000w | CNI | 260 | 14 | 172 | 0.58 | 9 | 1 | /products//bihui | 4 | 12 | 1 | 1 | 59 | 160 |
| /bihui/cutting-rail-system | CNI | 211 | 4 | 126 | 0.58 | 8 | 0 | /bihui | 4 | 10 | 1 | 1 | 60 | 152 |
| /bihui/double-suction-cup | CNI | 206 | 1 | 121 | 0.58 | 4 | 0 | /bihui | 4 | 9 | 1 | 1 | 59 | 158 |
| /bihui/dual-combination-microfibre-sponge | CNI | 207 | 3 | 122 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 57 | 151 |
| /bihui/extendable-floor-roller | CNI | 295 | 30 | 210 | 0.41 | 8 | 1 | /products//bihui | 4 | 11 | 1 | 1 | 60 | 151 |
| /bihui/fast-tile-cutter | CNI | 232 | 6 | 147 | 0.64 | 3 | 0 | /bihui | 4 | 10 | 1 | 1 | 60 | 155 |
| /bihui/hydro-grout-sponge | CNI | 196 | 0 | 99 | 0.67 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 59 | 157 |
| /bihui/laser-level-12-line | CNI | 254 | 8 | 164 | 0.64 | 5 | 1 | /products//bihui | 4 | 12 | 1 | 1 | 52 | 154 |
| /bihui/laser-level-16-line | CNI | 278 | 36 | 175 | 0.5 | 6 | 1 | /products//bihui | 4 | 12 | 1 | 1 | 57 | 158 |
| /bihui/laser-level-tripod | CNI | 190 | 1 | 88 | 0.73 | 5 | 0 | /bihui | 4 | 12 | 1 | 1 | 47 | 160 |
| /bihui/levelling-spacer-post-blt | CNI | 259 | 3 | 174 | 0.64 | 10 | 0 | /bihui | 4 | 11 | 1 | 1 | 58 | 148 |
| /bihui/levelling-window-cap | CNI | 199 | 0 | 114 | 0.64 | 10 | 0 | /bihui | 4 | 11 | 1 | 1 | 58 | 157 |
| /bihui/measuring-ruler-rotating-shell | CNI | 183 | 1 | 87 | 0.73 | 5 | 0 | /bihui | 4 | 10 | 1 | 1 | 59 | 147 |
| /bihui/measuring-tape-wide-blade | CNI | 246 | 12 | 162 | 0.64 | 5 | 0 | /bihui | 4 | 10 | 1 | 1 | 54 | 157 |
| /bihui/notched-taping-knife | CNI | 227 | 1 | 138 | 0.64 | 6 | 0 | /bihui | 4 | 13 | 1 | 1 | 58 | 156 |
| /bihui/nylon-paint-roller | CNI | 184 | 3 | 83 | 0.73 | 3 | 0 | /bihui | 4 | 13 | 1 | 1 | 41 | 155 |
| /bihui/portable-mortar-mixer | CNI | 228 | 13 | 138 | 0.58 | 3 | 0 | /bihui | 4 | 13 | 1 | 1 | 59 | 151 |
| /bihui/pro-germany-hydro-grouting-sponge | CNI | 202 | 0 | 105 | 0.67 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 58 | 159 |
| /bihui/professional-trowel-carbon-steel | CNI | 301 | 7 | 211 | 0.64 | 6 | 0 | /bihui | 4 | 13 | 1 | 1 | 55 | 152 |
| /bihui/professional-trowel-stainless-steel | CNI | 289 | 6 | 199 | 0.54 | 6 | 1 | /products//bihui | 4 | 13 | 1 | 1 | 56 | 154 |
| /bihui/reusable-tile-leveling-system | CNI | 196 | 1 | 111 | 0.64 | 6 | 0 | /bihui | 4 | 11 | 1 | 1 | 56 | 150 |
| /bihui/spazzle | CNI | 212 | 9 | 129 | 0.58 | 7 | 0 | /bihui | 4 | 11 | 1 | 1 | 52 | 153 |
| /bihui/spin-level-fast-clip-cap | CNI | 208 | 0 | 123 | 0.64 | 11 | 1 | /products//bihui | 4 | 11 | 1 | 1 | 54 | 152 |
| /bihui/tile-gap-adjuster-with-suction-cups | CNI | 282 | 13 | 197 | 0.58 | 5 | 1 | /products//bihui | 4 | 9 | 1 | 1 | 58 | 151 |
| /bihui/tile-remover | CNI | 222 | 1 | 133 | 0.64 | 9 | 0 | /bihui | 4 | 13 | 1 | 1 | 59 | 152 |
| /bihui/tilers-working-bench-master | CNI | 304 | 19 | 214 | 0.54 | 7 | 0 | /bihui | 4 | 13 | 1 | 1 | 58 | 155 |
| /bihui/trade-manual-cutting-system | CNI | 229 | 0 | 144 | 0.47 | 6 | 0 | /bihui | 4 | 10 | 1 | 1 | 54 | 154 |
| /bihui/trim-cutter | CNI | 224 | 13 | 139 | 0.58 | 3 | 0 | /bihui | 4 | 10 | 1 | 1 | 49 | 152 |
| /bihui/underlayment-embedding-roller | CNI | 270 | 16 | 187 | 0.5 | 9 | 1 | /products//bihui | 4 | 11 | 1 | 1 | 55 | 157 |
| /bihui/waterproof-protective-film | CNI | 242 | 18 | 159 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 57 | 158 |
| /blog/category/building-in-tanzania | CNI | 183 | 8 | 128 | 0.29 | 3 | 0 | /blog | 2 | 6 | 0 | 0 | 56 | 159 |
| /blog/category/tiling | CNI | 369 | 2 | 186 | 0.42 | 7 | 0 | /blog | 2 | 4 | 0 | 0 | 58 | 157 |
| /cmci/avikote-av-650 | CNI | 1086 | 11 | 542 | 0.68 | 6 | 2 | /products//cmci//specifier-pack | 9 | 3 | 1 | 1 | 52 | 149 |
| /cmci/monokote-z-106-hy | CNI | 1691 | 34 | 782 | 0.75 | 9 | 2 | /products//cmci//specifier-pack | 11 | 6 | 1 | 1 | 56 | 155 |
| /cmci/monokote-z-156 | CNI | 1072 | 25 | 523 | 0.69 | 10 | 2 | /products//cmci//specifier-pack | 9 | 6 | 1 | 1 | 60 | 157 |
| /mapei/tile-adhesives-grouts/adesilex-p7 | CNI | 1088 | 17 | 886 | 0.44 | 23 | 16 | ///products//mapei//sw//sale//projects//specifier-pack | 8 | 6 | 0 | 1 | 56 | 159 |
| /mapei/tile-adhesives-grouts/keracolor-ff | CNI | 1147 | 23 | 931 | 0.51 | 22 | 15 | ///products//mapei//sw//sale//projects//specifier-pack | 8 | 6 | 0 | 1 | 57 | 158 |
| /mapei/waterproofing/idrostop-pvc | CNI | 776 | 16 | 570 | 0.53 | 12 | 5 | /products//mapei//specifier-pack | 8 | 6 | 0 | 1 | 52 | 160 |
| /mapei/waterproofing/mapeband-easy | CNI | 799 | 15 | 592 | 0.5 | 12 | 5 | /products//mapei//specifier-pack | 8 | 6 | 0 | 1 | 55 | 157 |
| /mapei/waterproofing/mapeband-tpe | CNI | 1096 | 34 | 889 | 0.53 | 13 | 6 | /products//mapei//projects//specifier-pack | 8 | 6 | 0 | 1 | 59 | 159 |
| /mapei/waterproofing/mapenet-150 | CNI | 959 | 26 | 752 | 0.49 | 12 | 5 | /products//mapei//specifier-pack | 8 | 6 | 0 | 1 | 57 | 158 |
| /oriental-yuhong/pmh-3080-plus | CNI | 731 | 26 | 574 | 0.5 | 9 | 2 | /products//oriental-yuhong//specifier-pack | 8 | 6 | 1 | 1 | 54 | 151 |
| /oriental-yuhong/sports-flooring/epdm-walking-track | CNI | 762 | 11 | 589 | 0.29 | 9 | 1 | /products//oriental-yuhong | 7 | 21 | 1 | 1 | 53 | 159 |
| /oriental-yuhong/sports-flooring/hybrid-track | CNI | 627 | 5 | 397 | 0.47 | 9 | 1 | /products//oriental-yuhong | 8 | 15 | 1 | 1 | 49 | 159 |
| /oriental-yuhong/yhcoat-2060 | CNI | 860 | 37 | 652 | 0.51 | 10 | 4 | /products//oriental-yuhong//specifier-pack | 8 | 6 | 1 | 1 | 57 | 153 |
| /oriental-yuhong/yhrepair-2516 | CNI | 654 | 35 | 481 | 0.55 | 10 | 4 | /products//oriental-yuhong//specifier-pack | 7 | 6 | 1 | 1 | 52 | 139 |
| /solutions/concrete-repair | CNI | 381 | 62 | 378 |  | 221 | 219 | ///products//blog//bihui//mapei//cmci//oriental-yuhong//x-calibur//vasa//sw//sale//about//contact//projects//specifier-pack | 3 | 9 | 1 | 0 | 57 | 157 |
| /solutions/tile-installation | CNI | 450 | 65 | 443 |  | 221 | 219 | ///products//blog//bihui//mapei//cmci//oriental-yuhong//x-calibur//vasa//sw//sale//about//contact//projects//specifier-pack | 3 | 11 | 1 | 0 | 57 | 155 |
| /sw/mapei/primers-levelling | CNI | 854 | 30 | 655 | 0.31 | 7 | 1 | /sw | 5 | 6 | 0 | 0 | 54 | 157 |
| /x-calibur/x-seal-ps800 | CNI | 1246 | 57 | 1017 | 0.4 | 9 | 3 | /products//x-calibur//specifier-pack | 9 | 6 | 1 | 1 | 54 | 155 |
| /x-calibur/x-seal-universal-primer | CNI | 1043 | 9 | 810 | 0.4 | 6 | 3 | /products//x-calibur//specifier-pack | 9 | 6 | 1 | 1 | 59 | 157 |
| /bihui/drill-position-scale | UNKNOWN | 204 | 2 | 115 | 0.64 | 7 | 1 | /products//bihui | 4 | 13 | 1 | 1 | 58 | 144 |
| /bihui/grout-float-tpr-soft-handle | UNKNOWN | 238 | 5 | 153 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 59 | 154 |
| /bihui/laser-level-llg05 | UNKNOWN | 228 | 3 | 138 | 0.58 | 4 | 0 | /bihui | 4 | 12 | 1 | 1 | 57 | 148 |
| /bihui/leveling-cap-wedges | UNKNOWN | 244 | 7 | 159 | 0.58 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 58 | 158 |
| /bihui/leveling-plier | UNKNOWN | 193 | 2 | 96 | 0.73 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 60 | 159 |
| /bihui/levelling-compound-mixing-station | UNKNOWN | 271 | 16 | 181 | 0.47 | 7 | 1 | /products//bihui | 4 | 13 | 1 | 1 | 59 | 153 |
| /bihui/multifunction-trim-puller | UNKNOWN | 241 | 12 | 152 | 0.58 | 7 | 0 | /bihui | 4 | 13 | 1 | 1 | 58 | 158 |
| /bihui/resin-bound-pointing-trowel | UNKNOWN | 251 | 1 | 161 | 0.58 | 6 | 0 | /bihui | 4 | 13 | 1 | 1 | 58 | 157 |
| /bihui/sticky-mat | UNKNOWN | 226 | 24 | 143 | 0.64 | 3 | 0 | /bihui | 4 | 11 | 1 | 1 | 60 | 150 |
| /bihui/strong-manual-tile-cutter | UNKNOWN | 240 | 11 | 155 | 0.64 | 3 | 0 | /bihui | 4 | 10 | 1 | 1 | 58 | 158 |
| /bihui/tile-leveling-base | UNKNOWN | 224 | 6 | 148 | 0.67 | 3 | 0 | /bihui | 4 | 11 | 0 | 1 | 60 | 148 |
| /bihui/tri-head-suction-cup | UNKNOWN | 213 | 2 | 128 | 0.58 | 4 | 1 | /products//bihui | 4 | 9 | 1 | 1 | 51 | 152 |
| /cmci/aquakote | UNKNOWN | 816 | 89 | 585 | 0.48 | 7 | 2 | /products//cmci//specifier-pack | 9 | 4 | 1 | 1 | 54 | 157 |
| /cmci/avikote-av-800 | UNKNOWN | 1085 | 22 | 541 | 0.68 | 6 | 2 | /products//cmci//specifier-pack | 9 | 3 | 1 | 1 | 57 | 154 |
| /cmci/fr-bonding-agent | UNKNOWN | 811 | 54 | 581 | 0.49 | 7 | 2 | /products//cmci//specifier-pack | 8 | 4 | 1 | 1 | 59 | 149 |
| /cmci/monokote-accelerator | UNKNOWN | 640 | 37 | 405 | 0.54 | 6 | 2 | /products//cmci//specifier-pack | 9 | 4 | 1 | 1 | 52 | 151 |
| /cmci/monokote-mk-6s | UNKNOWN | 1735 | 24 | 826 | 0.73 | 6 | 2 | /products//cmci//specifier-pack | 11 | 6 | 1 | 1 | 60 | 155 |
| /mapei/resin-flooring/mapefloor-fc-200-me | UNKNOWN | 1051 | 26 | 843 | 0.47 | 20 | 12 | ///products//mapei//sw//sale//specifier-pack | 8 | 5 | 0 | 1 | 56 | 158 |
| /mapei/waterproofing/mapeproof-swell | UNKNOWN | 982 | 24 | 775 | 0.51 | 14 | 7 | /products//mapei//projects//specifier-pack | 8 | 6 | 0 | 1 | 52 | 158 |
| /oriental-yuhong/sports-flooring/acrylic-court | UNKNOWN | 932 | 20 | 755 | 0.23 | 9 | 1 | /products//oriental-yuhong | 7 | 15 | 1 | 1 | 54 | 156 |
| /oriental-yuhong/sports-flooring/all-plastic-track | UNKNOWN | 717 | 1 | 499 | 0.4 | 9 | 1 | /products//oriental-yuhong | 8 | 15 | 1 | 1 | 55 | 160 |
| /oriental-yuhong/yhcoat-1000 | UNKNOWN | 981 | 58 | 778 | 0.44 | 13 | 7 | /products//oriental-yuhong//specifier-pack | 8 | 6 | 1 | 1 | 60 | 160 |
| /oriental-yuhong/yhpuseal-2925 | UNKNOWN | 782 | 42 | 583 | 0.51 | 11 | 5 | /products//oriental-yuhong//specifier-pack | 8 | 6 | 0 | 1 | 55 | 144 |
| /sale | UNKNOWN | 508 |  | 500 |  | 2 | 2 | ///sw | 2 | 60 | 1 | 0 | 59 | 159 |
| /specifier-pack | UNKNOWN | 8038 |  | 8010 |  | 221 | 221 | ///products//blog//bihui//mapei//cmci//oriental-yuhong//x-calibur//vasa//sw//sale//about//contact//projects | 3 | 8 | 0 | 0 | 59 | 158 |
| /x-calibur/x-tech-epoxyfloor-sl1 | UNKNOWN | 926 | 54 | 703 | 0.48 | 10 | 3 | /products//x-calibur//specifier-pack | 9 | 16 | 1 | 1 | 59 | 157 |
