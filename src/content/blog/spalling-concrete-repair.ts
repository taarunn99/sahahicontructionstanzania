import type { PostContent } from "@/lib/blog";

export const content: PostContent = {
  answer:
    "Spalling concrete is repaired by removing all loose concrete, cleaning the rusted steel down to metal, coating it against corrosion, then rebuilding the section in layers with a structural repair mortar and curing it wet. Filling over rust fails, because the steel keeps expanding. On columns, beams and slabs, a structural engineer must assess the damage before any of this starts.",
  sections: [
    {
      h2: "Why does rusting rebar burst the concrete off?",
      body: "Rust takes up more room than the steel it came from, and the concrete around the bar has nowhere to go. Rust has two to four times the volume of the original steel, so the cover cracks, lifts and finally falls.\n\nSound concrete protects steel chemically. Its alkalinity, above pH 13, keeps a passive layer on the bar. Water-soluble chlorides disrupt that layer directly. Carbonation works more slowly: carbon dioxide from the air reacts with the lime in the concrete and lowers its alkalinity, and corrosion begins once the pH at the steel falls below 9. Moisture, high temperatures and cracking all make it worse.\n\nAs the bar rusts it loses cross-section, and that reduces the capacity of the member.",
    },
    {
      h2: "Is it salt or carbonation in Dar es Salaam?",
      body: "It can be either, and the local research does not settle it. A 1999 University of Dar es Salaam paper attributes cracking and corrosion of reinforced concrete in coastal zones mainly to salt-laden air. A case study on the university's own campus reached a different view: corrosion there was associated mainly with carbonation and sulphates, and only to a small extent with chlorides from contaminated humid air. We read only the abstracts, and found no published chloride measurement for any Tanzanian site.\n\nThe sequence below is the same either way.\n\nOne shortcut to avoid: the American Concrete Institute says cracks caused by corroding steel should not be injected with epoxy, because continuing corrosion will cause new cracks. By the same reasoning, plaster over a rusting bar only hides it for a while.",
      note: "Damage to columns, beams and slabs needs a structural engineer's assessment before repair, including how much to remove, whether to prop, and what happens to thinned bars. This guide explains the method and does not replace that.",
    },
    {
      h2: "How do you repair spalling concrete, step by step?",
      body: "Work in the order below, and do not let a stage wait on the next one longer than the data sheet allows. The Mapefer 1K sheet says not to leave cleaned bars exposed for long, so plan the cleaning and the first coat for the same shift. Every time and quantity here is printed on a Mapei data sheet for the product named. The break-out depth is not: the sheets say to remove concrete until the substrate is sound, and give no figure in millimetres. Treat the steps as a method to agree with your engineer, not as a design. Keep the bags and the mixing gear in the shade, use cool water, and avoid the hottest part of the day.",
      steps: [
        "**Break out.** With the engineer's limits and any propping in place, remove degraded and loose concrete until the substrate is solid, plus any old repair that has lost its bond. Expose enough of each rusted bar to reach its whole surface.",
        "**Clean the steel.** Sandblast down to metal. If that is not possible, use a steel brush to remove the oxidised layer. Show the engineer any thinned bar.",
        "**Protect it straight away.** Mix 5 kg of Mapefer 1K with 1.0 to 1.1 litres of water and use each mix within 1 hour. Brush on two coats about 2 hours apart, covering the whole bar, to at least 2 mm in total.",
        "**Bond.** Once the coat has dried (about 6 hours at +20°C; the sheet's table prints 6 to 24 hours), roughen any smooth concrete and soak it with clean water until it is saturated with no free water on the surface. The Mapegrout sheets ask for this and name no bonding coat.",
        "**Rebuild.** Mix Mapegrout T60 ME with 3.75 to 4.25 litres of water per bag, by machine or slow drill, not by hand. Trowel 10 to 60 mm a layer on vertical faces, up to 30 mm overhead. Leave each layer rough and wet it before the next; the sheet prints a maximum of 1 to 2 hours between layers.",
        "**Cure.** Cover exposed surfaces at once with wet hessian under polythene. Spray with water within the first 8 to 12 hours and repeat for at least 48 hours.",
        "**Protect the surface.** Where the engineer wants a barrier, apply a coating once the repair has dried off.",
      ],
    },
    {
      h2: "Which product goes at each step?",
      body: "The core of the system is three products: [Mapefer 1K](/mapei/concrete-repair/mapefer-1k) on the steel, [Mapegrout T60 ME](/mapei/concrete-repair/mapegrout-t60) where the mortar is trowelled, and [Mapegrout ME05](/mapei/concrete-repair/mapegrout-me05) where a form can be built. The T60 ME sheet forbids pouring it into forms; the ME05 sheet forbids vertical work without them. Both sheets state EN 1504-3 class R4, which requires at least 45 MPa at 28 days. T60 ME prints over 60 MPa at 28 days, ME05 over 65.\n\nThe two bond products suit other jobs, and the Mapegrout sheets do not call for them. Planicrete SP is mixed with cement as a slurry for new screeds, and the new layer has to go on before it dries. [Eporip](/mapei/concrete-repair/eporip) is for casting fresh concrete against hardened concrete. It is not for wet surfaces, and its application range stops at +30°C.\n\nThe [concrete repair range](/mapei/concrete-repair) pages carry each data sheet and a coverage calculator.",
      table: {
        caption: "Stocked products by repair step, as their data sheets describe them",
        head: ["Step", "Product", "What the sheet says it is for", "Per layer", "Consumption"],
        rows: [
          ["Protect steel", "Mapefer 1K", "Corrosion protection of reinforcing rods", "2 coats, at least 2 mm in total", "100 g/m on an 8 mm bar, 200 g/m on 16 mm"],
          ["Bond a screed", "Planicrete SP", "Cement slurry bonding new screeds to concrete", "Not stated", "0.3 kg/m²"],
          ["Bond cast concrete", "Eporip", "Joints between fresh and hardened concrete", "Not stated", "0.5 to 0.7 kg/m² rough, 1 to 2 kg/m² very uneven"],
          ["Rebuild by trowel", "Mapegrout T60 ME", "Reinstating cover to steel, including chloride and sulphate attack", "10 to 60 mm, up to 30 mm overhead", "12.6 litres per 25 kg bag"],
          ["Rebuild in forms", "Mapegrout ME05", "Reinstating beams, columns and slabs", "15 to 220 mm", "12.7 litres per 25 kg bag"],
          ["Protect, coating", "[Mapelastic Foundation](/mapei/waterproofing/mapelastic-foundation)", "Waterproofing concrete; resists chlorides and sulphates once cured", "Up to 2 mm a coat, at least 2 mm in total", "1.65 kg/m² per mm by roller"],
          ["Protect, repellent", "Antipluviol", "Absorbent renders and skim coats; not horizontal surfaces", "Wet-on-wet until saturated", "0.2 to 1 litre/m²"],
        ],
        source: "Mapei technical data sheets for each product",
      },
    },
    {
      h2: "How much repair mortar and rebar coating do you need?",
      body: "Work out the volume of the hole, then divide by the yield of a bag. Take a 1 m² soffit patch broken out to an average 40 mm: 1 x 0.04 = 0.04 m³, or 40 litres. At 12.6 litres per bag of Mapegrout T60 ME, 40 / 12.6 = 3.2, so buy 4 bags before any waste. The sheet rules out previously opened bags, so a part bag cannot wait for another day. At 40 mm the patch is also two layers, since overhead work stops at 30 mm.\n\nFor the steel, say 6 m of exposed 16 mm bar: 6 x 200 g = 1.2 kg of Mapefer 1K, from one 5 kg bag. Mapei prints figures for 8 mm and 16 mm bars only, at 2 mm applied, and does not say whether the grams are powder or mixed.",
    },
  ],
  faq: [
    {
      q: "Is concrete spalling dangerous?",
      a: "It can be. Falling pieces can hurt people below, and a rusted bar has lost cross-section, which reduces capacity. Keep people clear and have a structural engineer assess it.",
    },
    {
      q: "Can I plaster over exposed rusty steel?",
      a: "No. The steel keeps rusting behind the plaster and rust takes up two to four times the volume of steel, so the new layer cracks and falls too. Clean the bar to metal and coat it first.",
    },
    {
      q: "Do I have to break out behind the bar?",
      a: "Where a bar has rusted all round, generally yes, because the coating has to cover the whole bar and that needs access behind it. The data sheets print no depth in millimetres. Your engineer sets the extent.",
    },
    {
      q: "How thick can repair mortar go overhead in one layer?",
      a: "Mapegrout T60 ME goes on up to 30 mm per layer overhead and up to 60 mm on vertical faces, with no formwork. Its stated minimum is 10 mm.",
    },
  ],
  sources: [
    {
      label: "CIP 25, Corrosion of Steel in Concrete, National Ready Mixed Concrete Association",
      url: "https://www.nrmca.org/wp-content/uploads/2021/01/25pr.pdf",
    },
    {
      label: "RAP Bulletin 1, Structural Crack Repair by Epoxy Injection, American Concrete Institute",
      url: "https://www.concrete.org/Portals/0/Files/PDF/RAP-1.pdf",
    },
    {
      label: "Concrete Cracking in Coastal Areas, Tanzania Journal of Engineering and Technology 23(1), 1999 (abstract)",
      url: "https://commons.udsm.ac.tz/tjet/vol23/iss1/11",
    },
    {
      label: "Defects in Reinforced Concrete Due to Environmental Conditions and Concrete Treatment, University of Dar es Salaam case study, Tanzania Journal of Engineering and Technology 23(1), 1999 (abstract)",
      url: "https://commons.udsm.ac.tz/tjet/vol23/iss1/3",
    },
    {
      label: "Same case study, Tanzania Journal of Engineering and Technology 24(1), 2001 (abstract)",
      url: "https://commons.udsm.ac.tz/tjet/vol24/iss1/9",
    },
    { label: "Mapefer 1K technical data sheet, Mapei", url: "/mapei/concrete-repair/mapefer-1k" },
    { label: "Mapegrout T60 ME technical data sheet, Mapei", url: "/mapei/concrete-repair/mapegrout-t60" },
    { label: "Mapegrout ME05 technical data sheet, Mapei", url: "/mapei/concrete-repair/mapegrout-me05" },
    { label: "Planicrete SP technical data sheet, Mapei", url: "/mapei/concrete-repair/planicrete-sp" },
    { label: "Eporip technical data sheet, Mapei", url: "/mapei/concrete-repair/eporip" },
    { label: "Mapelastic Foundation technical data sheet, Mapei", url: "/mapei/waterproofing/mapelastic-foundation" },
    { label: "Antipluviol technical data sheet, Mapei", url: "/mapei/waterproofing/antipluviol" },
  ],
};
