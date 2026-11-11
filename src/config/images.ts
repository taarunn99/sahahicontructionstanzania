/**
 * Every photograph on the site. Generated atmosphere (Higgsfield,
 * 2026-11-06), built by scripts/build-images.mjs from the 4K masters;
 * job ids and prompts are in docs/IMAGE-PROVENANCE.md.
 *
 * HONESTY RULE (DESIGN-CONCEPT.md 5.2): these are atmosphere. The alt text
 * says what is pictured and nothing more. None is ever captioned or
 * described as a Sahihi project, warehouse, site or product.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const photo = (
  src: string,
  width: number,
  height: number,
  alt: string,
): Photo => ({ src: `/images/${src}.webp`, width, height, alt });

export const heroPhotos = {
  home: photo(
    "hero/home",
    2880,
    1607,
    "Rainwater beading on a white sealed roof terrace above a turquoise sea",
  ),
  homePortrait: photo(
    "hero/home-portrait",
    1200,
    1490,
    "Rainwater beading on a white sealed roof terrace above a turquoise sea",
  ),
  mapei: photo(
    "hero/mapei",
    2880,
    1222,
    "A white concrete parapet and roof under a blue sky, one third coated with a blue waterproofing membrane",
  ),
};

export const linePhotos: Record<string, Photo> = {
  "tile-adhesives-grouts": photo(
    "lines/tile-adhesives-grouts",
    1600,
    1195,
    "A gloved hand lowering a white porcelain tile onto combed ridges of tile adhesive, against a blue, green and yellow wall",
  ),
  "primers-levelling": photo(
    "lines/primers-levelling",
    1600,
    1195,
    "Self-levelling compound being poured across a concrete floor beside a spiked roller",
  ),
  "concrete-repair": photo(
    "lines/concrete-repair",
    1600,
    1195,
    "A concrete column with a patch of fresh repair mortar and a row of injection ports along a crack",
  ),
  "resin-flooring": photo(
    "lines/resin-flooring",
    1600,
    1195,
    "An empty industrial hall with a glossy seamless resin floor reflecting the ceiling lights",
  ),
  waterproofing: photo(
    "lines/waterproofing",
    1600,
    1258,
    "A flat roof coated with a grey waterproofing membrane, with reinforcing mesh at the upstand",
  ),
};

export const solutionPhotos: Record<string, Photo> = {
  waterproofing: photo(
    "solutions/swimming-pool",
    1600,
    1195,
    "Steps of an empty swimming pool lined with pale blue mosaic tiles",
  ),
  "flooring-systems": photo(
    "solutions/car-park",
    1600,
    1195,
    "An empty rooftop car park deck with a seamless grey coating and white bay lines",
  ),
  "structural-strengthening": photo(
    "solutions/structural-strengthening",
    1600,
    1195,
    "A round concrete column wrapped with bands of woven carbon-fibre fabric",
  ),
  "sports-flooring": photo(
    "solutions/sports-court",
    1600,
    1195,
    "A bright blue basketball court with a green surround, seen from directly above",
  ),
  "mining-underground": photo(
    "solutions/tunnel",
    1600,
    1195,
    "A tunnel lined with pale sprayed concrete, rock-bolt plates and a membrane along one wall",
  ),
};

/** Kept for the solution pillar pages. */
export const sparePhotos = {
  waterTank: photo(
    "solutions/water-tank",
    1600,
    1195,
    "An empty coated concrete water tank lit from a hatch in its ceiling",
  ),
};

export const materialPhotos = [
  {
    ...photo(
      "materials/water-bead",
      1200,
      1200,
      "Beads of water sitting on a pale waterproof membrane",
    ),
    label: "Water, held out",
    line: "waterproofing",
  },
  {
    ...photo(
      "materials/resin-gloss",
      1200,
      1200,
      "Light crossing a glossy pale resin floor with quartz grains in it",
    ),
    label: "Resin, poured",
    line: "resin-flooring",
  },
  {
    ...photo(
      "materials/adhesive-ridges",
      1200,
      1200,
      "Tile adhesive combed into straight ridges by a notched steel trowel",
    ),
    label: "Adhesive, combed",
    line: "tile-adhesives-grouts",
  },
  {
    ...photo(
      "materials/grout-joint",
      1200,
      1200,
      "One bead of water on a grout joint between a blue tile and a yellow tile",
    ),
    label: "Grout, sealed",
    line: "tile-adhesives-grouts",
  },
] as const;

export const companyPhotos = {
  supply: photo(
    "company/supply",
    1600,
    1195,
    "A warehouse aisle with pallets of unlabelled sacks and pails on white racking",
  ),
  training: photo(
    "company/training",
    1600,
    1195,
    "Sample boards of tile, membrane and resin on a white bench with a notched trowel and a roller",
  ),
};

/** CMCI fire pages (Higgsfield, 2026-11-11, IMAGE-PROVENANCE 3k). */
export const firePhotos = {
  spraying: photo(
    "fire/spraying",
    1600,
    1063,
    "An applicator in white coveralls on a scaffold spraying grey fireproofing onto steel beams under a steel deck",
  ),
  coatedFrame: photo(
    "fire/coated-frame",
    1600,
    1063,
    "A steel frame of columns, beams and fluted deck, every member covered in a rough grey sprayed coating",
  ),
  thicknessGauge: photo(
    "fire/thickness-gauge",
    1600,
    1063,
    "A depth gauge pin pushed into the grey sprayed coating on the edge of a steel beam flange",
  ),
};
