import type { Photo } from "@/config/images";

/**
 * Illustrative application scenes, generated (docs/IMAGE-PROVENANCE.md 3l).
 * Never a pack shot, never a Sahihi job. One per CMCI and X-Calibur product,
 * showing the use its data sheet names. Built by scripts/build-images.mjs.
 */
const scene = (slug: string, alt: string): Photo => ({
  src: `/images/scenes/${slug}.webp`,
  width: 1600,
  height: 1063,
  alt,
});

export const productScenes: Record<string, Photo> = {
  "avikote-av-800": scene(
    "avikote-av-800",
    "A refinery pipe rack under a blue sky, its steel columns and beams coated in grey fireproofing, with yellow and red pipes and white storage tanks",
  ),
  "avikote-av-650": scene(
    "avikote-av-650",
    "Steel vessel supports and a pipe bridge at a coastal gas plant, protected by grey trowelled fireproofing, with green and orange pipes and palm trees beyond",
  ),
  "monokote-z-156": scene(
    "monokote-z-156",
    "A road tunnel lit orange by work lights, its lining being sprayed with grey fireproofing from a yellow access platform",
  ),
  "monokote-z-146": scene(
    "monokote-z-146",
    "A multi-storey car park with grey sprayed fireproofing on its steel columns and beams, red and blue cars and palm trees outside",
  ),
  "monokote-z-106-hy": scene(
    "monokote-z-106-hy",
    "An airport terminal concourse under construction, steel trusses and columns coated in grey fireproofing beside a glass wall and turquoise and yellow floor",
  ),
  "monokote-z-106": scene(
    "monokote-z-106",
    "A plant room with grey sprayed fireproofing on the steel beams and fluted deck, red sprinkler pipes, blue water pipes and green ducts",
  ),
  "monokote-mk-6-hy": scene(
    "monokote-mk-6-hy",
    "An applicator in white coveralls spraying grey fireproofing onto steel beams on an upper floor, with the city and the sea beyond",
  ),
  "monokote-mk-6s": scene(
    "monokote-mk-6s",
    "A small two-storey building with orange and yellow walls and an exposed steel frame sprayed light grey, beside an orange scaffold tower",
  ),
  aquakote: scene(
    "aquakote",
    "A roller applying a smooth white protective topcoat over rough grey sprayed fireproofing on a steel column",
  ),
  "monokote-accelerator": scene(
    "monokote-accelerator",
    "An orange spray pump and hose feeding fireproofing up to a steel frame on a site with red earth and a yellow generator",
  ),
  "fr-bonding-agent": scene(
    "fr-bonding-agent",
    "An airless spray gun misting a milky white sealer onto a red primed steel beam",
  ),
  "x-tech-sbr-bond": scene(
    "x-tech-sbr-bond",
    "A brush working a creamy grey bonding slurry into a broken concrete beam with exposed reinforcing bars, beside a bright blue wall",
  ),
  "x-tech-epoxyfloor-sl1": scene(
    "x-tech-epoxyfloor-sl1",
    "A factory floor finished in glossy sky blue self-levelling epoxy with yellow walkway lines, reflecting the roof lights",
  ),
  "x-prime-gp": scene(
    "x-prime-gp",
    "A roller laying a clear amber epoxy primer onto a ground concrete floor, the primed strip glossy beside the bare matt strip",
  ),
  "x-shield-flexpruf": scene(
    "x-shield-flexpruf",
    "A worker rolling a grey waterproofing coat over a roof terrace slab and parapet, with palm trees and the sea on the horizon",
  ),
  "x-seal-ps800": scene(
    "x-seal-ps800",
    "A sealant gun laying a grey polysulphide bead into a masked expansion joint between concrete slabs",
  ),
  "x-seal-universal-primer": scene(
    "x-seal-universal-primer",
    "A small brush priming the sides of a joint between concrete facade panels, a foam backer rod in the joint",
  ),
  "x-prime-gp2": scene(
    "x-prime-gp2",
    "A squeegee spreading clear epoxy primer across a workshop floor, with a finished emerald green epoxy section behind",
  ),
};
