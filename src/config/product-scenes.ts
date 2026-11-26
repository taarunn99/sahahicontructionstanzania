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
  // Oriental Yuhong products whose data sheet prints no picture and for which
  // OYH has none (owner, 2026-11-26: "wherever there is no picture generate
  // it"). Scenes of the use the sheet names, IMAGE-PROVENANCE 3w. Replaced
  // by OYH's own pack picture the day one arrives.
  "pmh-3046": scene(
    "pmh-3046",
    "A worker in a yellow vest pressing a white self-adhesive membrane onto the outside of a basement wall, in an open excavation of red earth",
  ),
  "yhshield-7502": scene(
    "yhshield-7502",
    "A worker on a flat roof torching a black bituminous membrane roll into place, a coastal city skyline across the water",
  ),
  "yhacgrout-2101": scene(
    "yhacgrout-2101",
    "A damp concrete basement wall fitted with a grid of injection packers and hoses, a hand pump on the floor pushing in a clear resin",
  ),
  "yhpugrout-2102": scene(
    "yhpugrout-2102",
    "Pale polyurethane foam expanding out of a leaking crack in a concrete wall, injected through steel packers from a hand-held gun",
  ),
  "yhepgrout-2106": scene(
    "yhepgrout-2106",
    "A gloved hand pressing clear epoxy resin into a port fixed along a fine crack in a concrete car park column",
  ),
  "yhepoxy-gr90": scene(
    "yhepoxy-gr90",
    "Grey epoxy grout poured from a bucket under the steel baseplate of a blue pump, timber formwork around the plinth",
  ),
  yhinjehose: scene(
    "yhinjehose",
    "A thin black injection hose clipped along the construction joint on a circular tank's base slab, its ends led up in clear tubes, rebar all round",
  ),
  yhswellseal: scene(
    "yhswellseal",
    "A red bead of swellable sealant gunned around a steel pipe where it passes through a concrete slab, and along the kicker joint behind",
  ),
  yhswellbar: scene(
    "yhswellbar",
    "A red swelling waterbar strip fixed along the centre of a concrete kicker joint at the foot of a tank wall, rebar on both sides",
  ),
  "yhwaterstop-epdm": scene(
    "yhwaterstop-epdm",
    "A black ribbed rubber waterstop with a centre bulb set in an expansion joint between two pours of a reservoir wall, half in the formwork",
  ),
  "yhwaterstop-pvc": scene(
    "yhwaterstop-pvc",
    "A pale grey ribbed PVC waterstop running along the joint between a pool's base slab and its wall, split formwork and rebar around it",
  ),
  "yhtape-2022hd": scene(
    "yhtape-2022hd",
    "A hand rolling a grey self-adhesive butyl tape over the seam of a window opening in a plywood-sheathed wall",
  ),
  "oyh-r100": scene(
    "oyh-r100",
    "Flowing grey concrete pouring from a truck mixer's chute into a pump hopper, a white admixture tank and a batching plant behind",
  ),
  "oyh-r100h": scene(
    "oyh-r100h",
    "Self-compacting concrete flowing through a dense reinforcing cage in open column formwork, a pump hose held above",
  ),
  "oyh-s104c": scene(
    "oyh-s104c",
    "A slump test beside a truck mixer: the steel cone lifted, the concrete sample settled, a tape measuring the drop, silos behind",
  ),
  "oyh-s104s": scene(
    "oyh-s104s",
    "A line of dusty truck mixers waiting on a hot highway beside a batching plant with tall silos, under a hazy sky",
  ),
  // Not generated: X-Calibur's own cutaway drawing from its conductive floor
  // brochure (docs/IMAGE-PROVENANCE.md 3q), the one picture of the system.
  "x-tech-antistatic-sle": {
    src: "/images/x-calibur/antistatic/cutaway.webp",
    width: 1600,
    height: 1003,
    alt: "X-Calibur's cutaway drawing of the X-Tech AntiStatic SLE floor: concrete, a primed surface with a copper tape grid, a black conductive base coat and a red self smoothing top coat peeled back at one corner",
  },
};
