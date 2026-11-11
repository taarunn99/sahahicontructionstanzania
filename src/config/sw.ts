import type { FaqItem } from "@/lib/faq";

/**
 * The Swahili copy of the key pages (owner, 2026-11-06: "you only write, i
 * trust you"). Written from the English pages line by line: same facts, same
 * figures, nothing added. Product names, classes, pack sizes and every figure
 * stay as printed in the catalogue, and the trade words Tanzanians use in
 * English (tiles, grout, primer, epoxy, waterproofing) stay in English
 * (SEO-STRATEGY.md section 3, point 7).
 *
 * When an English fact changes in company.ts, mapei.ts or catalogue.ts, it
 * changes here too.
 */

export type SwLine = {
  label: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  blurb: string;
  photoAlt: string;
  choose: { q: string; a: string }[];
  handsOn: { name: string; heading: string; body: string };
};

export const swLines: Record<string, SwLine> = {
  "tile-adhesives-grouts": {
    label: "Gundi za tiles, grout na utunzaji",
    short: "Gundi za tiles",
    title: "Gundi ya Tiles ya Mapei Tanzania - Keraflex, Adesilex, Grout",
    description:
      "Gundi za tiles na grout za Mapei Tanzania: Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Keracolor FF, Kerapoxy. Karatasi za data na vikokotoo.",
    h1: "Gundi za tiles, grout na utunzaji wa tiles za Mapei.",
    lead: "Gundi za saruji kuanzia daraja C1 hadi C2TES1 inayonyumbulika kwa tiles kubwa za porcelain, grout ya saruji na grout ya epoxy, pamoja na visafishaji vinavyomalizia sakafu ya tiles.",
    blurb:
      "Gundi za saruji kuanzia C1 hadi C2TE S1, grout za saruji na epoxy, na visafishaji vinavyomalizia kazi ya tiles.",
    photoAlt:
      "Mkono wenye glovu ukishusha tile nyeupe ya porcelain juu ya mistari ya gundi ya tiles, mbele ya ukuta wa buluu, kijani na njano",
    choose: [
      {
        q: "Kazi inahitaji gundi ya daraja gani?",
        a: "Mapeset ni daraja C1 na Kerabond T ni C1T. Adesilex P7 ni C2T. Keraflex Maxi S1 ni C2TES1, daraja linalonyumbulika ambalo Mapei inapendekeza kwa porcelain kubwa na mawe ya asili.",
      },
      {
        q: "Grout ya saruji au grout ya epoxy?",
        a: "Keracolor FF ni grout ya saruji inayozuia maji kwa viungo hadi 6 mm, daraja CG2WA. Kerapoxy ni grout ya epoxy ya vipengele viwili inayostahimili asidi, daraja RG, ambayo pia inaweza kutumika kama gundi.",
      },
    ],
    handsOn: {
      name: "Notch na matumizi",
      heading: "Tile kubwa, notch ndefu, mifuko zaidi.",
      body: "Chagua ukubwa wa tile na weka eneo la sakafu. Mwiko hubadilika, na kiasi cha gundi hubadilika pia. Zana hii iko kwa Kiingereza.",
    },
  },
  "primers-levelling": {
    label: "Primer, self-levelling na sakafu za mbao",
    short: "Self-levelling",
    title: "Self-Levelling na Primer za Mapei Tanzania - Ultraplan",
    description:
      "Primer na self-levelling za Mapei Tanzania: Primer G, Triblock P, Ultraplan Eco 20, Ultraplan Contract na Lignobond. Karatasi za data na vikokotoo vya kiasi.",
    h1: "Primer, self-levelling na gundi ya sakafu za mbao za Mapei.",
    lead: "Kinachowekwa kabla ya umaliziaji wa sakafu: primer ya maji, primer ya epoxy na saruji kwa sehemu zenye unyevu, self-levelling mbili za 1 hadi 10 mm, na gundi ya parquet.",
    blurb:
      "Kinachowekwa kabla ya umaliziaji wa sakafu: primer, self-levelling na gundi ya sakafu za mbao.",
    photoAlt:
      "Self-levelling ikimiminwa juu ya sakafu ya zege kando ya roller yenye miiba",
    choose: [
      {
        q: "Self-levelling ipi nichague?",
        a: "Zote mbili husawazisha 1 hadi 10 mm kwa kila tabaka. Ultraplan Eco 20 hutumia 1.6 kg/m² kwa kila mm na huja katika mifuko ya 23 kg. Ultraplan Contract hutumia 1.7 kg/m² kwa kila mm na huja katika mifuko ya 25 kg.",
      },
      {
        q: "Je, kama sakafu ya msingi ina unyevu?",
        a: "Triblock P ni primer ya epoxy na saruji ya vipengele vitatu kwa sehemu zenye unyevu, hupakwa mara mbili.",
      },
    ],
    handsOn: {
      name: "Umiminaji",
      heading: "Mimina kwa usahihi wa milimita.",
      body: "Vuta uso wa mchanganyiko juu au chini. Kila milimita ina uzito wake, na idadi ya mifuko hufuata. Zana hii iko kwa Kiingereza.",
    },
  },
  "concrete-repair": {
    label: "Ukarabati wa zege, grout na anchoring",
    short: "Ukarabati wa zege",
    title: "Ukarabati wa Zege wa Mapei Tanzania - Mapegrout, Epojet",
    description:
      "Ukarabati wa zege wa Mapei Tanzania: mortar na grout za Mapegrout, epoxy za Epojet LV na Eporip, Planicrete SP, Mapefer 1K, Mapefix EP 50. Na karatasi za data.",
    h1: "Ukarabati wa zege, grout na anchoring za Mapei.",
    lead: "Mortar ya ukarabati na micro-concrete inayotiririka, epoxy kwa nyufa na viungo vya ujenzi, latex additive, kinga ya nondo zilizo wazi, na chemical anchor ya epoxy.",
    blurb:
      "Mortar za ukarabati, grout zinazotiririka, sindano na uunganishaji wa epoxy, kinga ya nondo na chemical anchoring.",
    photoAlt:
      "Nguzo ya zege yenye sehemu ya mortar mpya ya ukarabati na mstari wa injection port kando ya ufa",
    choose: [
      {
        q: "Ni ufa, au sehemu ya kujenga upya?",
        a: "Epojet LV ni epoxy nyepesi sana ya kudunga kwenye nyufa ndogo. Eporip huunganisha viungo vya ujenzi na huziba nyufa kwenye screed. Mapegrout hujenga upya sehemu iliyoharibika.",
      },
      {
        q: "Nini hulinda nondo kwanza?",
        a: "Mapefer 1K ni mortar ya saruji ya kipengele kimoja inayozuia kutu kwenye nondo, hupakwa kabla ya mortar ya ukarabati.",
      },
    ],
    handsOn: {
      name: "Ramani ya kasoro",
      heading: "Tambua tatizo kwanza.",
      body: "Hali tano kwenye fremu moja ya zege. Chagua ile iliyo kwenye eneo lako na ukarabati wake utajichora. Zana hii iko kwa Kiingereza.",
    },
  },
  "resin-flooring": {
    label: "Sakafu za resin na coating",
    short: "Sakafu za resin",
    title: "Sakafu za Epoxy na PU za Mapefloor Tanzania - Mapei",
    description:
      "Sakafu za resin za Mapefloor Tanzania: coating ya epoxy FC 200 ME, epoxy ya self-levelling I 300 SL ME, CPU+/MF ya polyurethane na saruji. Na karatasi za data.",
    h1: "Sakafu za resin na coating za Mapefloor.",
    lead: "Mifumo ya sakafu ya epoxy na polyurethane, kuanzia coating nene hadi mortar ya polyurethane na saruji ya 6 mm, pamoja na primer, umaliziaji na mchanga wa quartz inavyojengwa navyo.",
    blurb:
      "Mifumo ya sakafu ya epoxy na polyurethane kuanzia coating nyembamba hadi screed zinazostahimili kemikali, pamoja na primer na umaliziaji wake.",
    photoAlt:
      "Ukumbi mtupu wa kiwanda wenye sakafu ya resin inayong'aa na kuakisi taa za dari",
    choose: [
      {
        q: "Coating au sakafu ya self-levelling?",
        a: "Mapefloor FC 200 ME ni coating nene ya epoxy inayopakwa mara mbili. Mapefloor I 300 SL ME ni epoxy ya self-levelling yenye unene wa 2 hadi 4 mm. Mapefloor CPU+/MF ni mortar ya polyurethane na saruji ya 3 hadi 6 mm.",
      },
      {
        q: "Umaliziaji upi unastahimili jua?",
        a: "Mapefloor Finish 450 ME ni umaliziaji wa aliphatic polyurethane, unaostahimili mchubuko na miale ya UV. Mapefloor Finish 415 ME ni aromatic.",
      },
    ],
    handsOn: {
      name: "Kipimo cha unene",
      heading: "Sakafu ya resin ni suala la unene.",
      body: "Sogeza kutoka roll coat hadi milimita sita. Mchoro hubadilika kwa kipimo sahihi na mfumo hubadilika pia. Zana hii iko kwa Kiingereza.",
    },
  },
  waterproofing: {
    label: "Kuzuia maji (waterproofing)",
    short: "Kuzuia maji",
    title: "Kuzuia Maji kwa Mapei Tanzania - Mapelastic, Planiseal 88",
    description:
      "Waterproofing ya Mapei Tanzania: Mapelastic Smart, Foundation, Easy na AquaDefense, Planiseal 88, Lamposilex, waterstop, tepu na sealant. Karatasi za data.",
    h1: "Kuzuia maji kwa Mapei (waterproofing).",
    lead: "Membrane za saruji na za maji kwa paa, maeneo yenye maji na miundo iliyo chini ya ardhi, pamoja na waterstop, tepu za viungo, wavu, sealant na admixture zinazokamilisha mfumo.",
    blurb:
      "Membrane za saruji na za maji, waterstop, tepu za viungo, sealant na admixture ya kuzuia maji.",
    photoAlt:
      "Paa bapa lililopakwa membrane ya kijivu ya kuzuia maji, lenye wavu wa kuimarisha kwenye ukingo",
    choose: [
      {
        q: "Mapelastic ipi nichague?",
        a: "Mapelastic Smart ni kwa balcony, terrace, bafu na mabwawa ya kuogelea. Mapelastic Foundation ni kwa zege inayokabili shinikizo la maji chanya na hasi. Mapelastic AquaDefense ni membrane ya maji iliyo tayari kutumika, inayopakwa mara mbili.",
      },
      {
        q: "Vipi kuhusu viungo?",
        a: "Waterstop za Idrostop PVC huziba viungo vya upanuzi na cold joint wakati wa kumwaga zege. Tepu za Mapeband TPE na Mapeband Easy hufunika viungo chini ya membrane, na wavu wa Mapenet 150 huiimarisha.",
      },
    ],
    handsOn: {
      name: "Matabaka",
      heading: "Nini hukaa juu ya nini.",
      body: "Izungushe, tenganisha matabaka na uchague moja kuona tulicho nacho kwa ajili yake. Zana hii iko kwa Kiingereza.",
    },
  },
};

/** Type and summary of every Mapei product, from catalogue.ts. */
export const swProducts: Record<string, { type: string; summary: string }> = {
  mapeset: {
    type: "Gundi ya tiles",
    summary: "Gundi ya saruji kwa tiles.",
  },
  "kerabond-t": {
    type: "Gundi ya tiles",
    summary: "Gundi ya saruji isiyoteleza wima kwa tiles za ceramic.",
  },
  "adesilex-p7": {
    type: "Gundi ya tiles",
    summary:
      "Gundi ya saruji yenye utendaji wa juu, isiyoteleza wima, kwa tiles za ceramic na porcelain.",
  },
  "keraflex-maxi-s1": {
    type: "Gundi ya tiles",
    summary:
      "Gundi ya saruji yenye utendaji wa juu inayonyumbulika, yenye muda mrefu wa kufanya kazi na isiyoteleza wima, inayofaa hasa tiles kubwa za porcelain na mawe ya asili.",
  },
  "keracolor-ff": {
    type: "Grout ya saruji",
    summary:
      "Grout ya saruji yenye utendaji wa juu, iliyoboreshwa kwa polima na inayozuia maji, kwa viungo hadi 6 mm.",
  },
  kerapoxy: {
    type: "Grout ya epoxy",
    summary:
      "Grout ya epoxy ya vipengele viwili inayostahimili asidi, kwa viungo vya angalau 1 mm. Pia inaweza kutumika kama gundi.",
  },
  "ultracare-hd-cleaner": {
    type: "Kisafishaji cha tiles",
    summary:
      "Kisafishaji cha kitaalamu cha alkali kilichokolea, kwa usafishaji wa kina na kuondoa mafuta.",
  },
  "ultracare-multicleaner": {
    type: "Kisafishaji cha tiles",
    summary:
      "Kisafishaji kisicho na asidi wala alkali kilichokolea, kwa usafishaji wa kila siku na utunzaji wa nyuso, pamoja na marumaru na mawe ya asili.",
  },
  "ultracare-stain-protector-w-plus": {
    type: "Kinga dhidi ya madoa",
    summary:
      "Sealer ya maji yenye mwonekano wa asili, inayostahimili mafuta, madoa na maji.",
  },
  "primer-g": {
    type: "Primer",
    summary: "Primer ya resin ya sintetiki katika mchanganyiko wa maji.",
  },
  "triblock-p": {
    type: "Primer",
    summary:
      "Primer ya epoxy na saruji ya vipengele vitatu kwa sehemu zenye unyevu.",
  },
  lignobond: {
    type: "Gundi ya sakafu za mbao",
    summary:
      "Gundi ya epoxy na polyurethane ya vipengele viwili kwa kuweka parquet.",
  },
  "ultraplan-eco-20": {
    type: "Self-levelling",
    summary:
      "Self-levelling inayokauka haraka kwa unene wa 1 hadi 10 mm kwa kila tabaka.",
  },
  "ultraplan-contract": {
    type: "Self-levelling",
    summary:
      "Self-levelling inayokauka haraka sana kwa unene wa 1 hadi 10 mm kwa kila tabaka.",
  },
  "adesilex-pg2-tg": {
    type: "Gundi ya epoxy",
    summary:
      "Gundi ya epoxy ya vipengele viwili isiyotiririka, kwa kuunganisha Mapeband, Mapeband TPE, hypalon na uunganishaji wa kimuundo.",
  },
  "epojet-lv": {
    type: "Sindano ya nyufa",
    summary:
      "Resin ya epoxy ya vipengele viwili, nyepesi sana, ya kudunga kwenye nyufa ndogo, hata kwenye nyuso zenye maji.",
  },
  eporip: {
    type: "Gundi ya epoxy",
    summary:
      "Gundi ya epoxy ya vipengele viwili isiyo na solvent, kwa viungo vya ujenzi na kuziba nyufa kwenye screed.",
  },
  "mapegrout-me05": {
    type: "Micro-concrete",
    summary:
      "Micro-concrete yenye utendaji wa juu inayotiririka sana na inayofidia kusinyaa, pia grout ya sehemu nene.",
  },
  "mapegrout-t60": {
    type: "Mortar ya ukarabati",
    summary:
      "Mortar ya ukarabati wa kimuundo isiyotiririka, yenye nyuzi, inayostahimili sulphate na chloride.",
  },
  "planicrete-sp": {
    type: "Latex additive",
    summary: "Latex additive ya matumizi mengi kwa mortar na gundi za saruji.",
  },
  "mapefer-1k": {
    type: "Kinga ya nondo",
    summary:
      "Mortar ya saruji ya kipengele kimoja inayozuia kutu kwenye nondo za chuma.",
  },
  "mapefix-ep-50": {
    type: "Chemical anchor",
    summary: "Resin ya epoxy kwa chemical anchor ya kimuundo.",
  },
  "mapei-gun-585-2k": {
    type: "Kifaa cha kutumia",
    summary:
      "Bunduki ya kutolea kwa cartridge ya anchor ya vipengele viwili ya 585 ml.",
  },
  "mapefibre-ns-12": {
    type: "Nyuzi",
    summary: "Nyuzi ndogo za polypropylene za 12 mm kwa zege.",
  },
  "mapefloor-fc-200-me": {
    type: "Coating ya sakafu ya epoxy",
    summary: "Coating nene ya sakafu ya resin ya epoxy.",
  },
  "mapefloor-i-300-sl-me": {
    type: "Sakafu ya epoxy ya self-levelling",
    summary:
      "Mchanganyiko wa epoxy wenye rangi, wa vipengele vitatu na matumizi mengi, kwa coating za sakafu za viwandani za self-levelling, unene wa 2 hadi 4 mm.",
  },
  "mapefloor-cpu-plus-mf": {
    type: "Sakafu ya polyurethane na saruji",
    summary:
      "Mortar ya polyurethane na saruji yenye utendaji wa juu inayojisawazisha, ya 3 hadi 6 mm.",
  },
  "mapefloor-finish-415-me": {
    type: "Umaliziaji wa sakafu wa polyurethane",
    summary:
      "Umaliziaji wa aromatic polyurethane kwa mifumo ya sakafu ya maegesho ya magari.",
  },
  "mapefloor-finish-450-me": {
    type: "Umaliziaji wa sakafu wa polyurethane",
    summary:
      "Umaliziaji wa aliphatic polyurethane wa vipengele viwili, wenye rangi na unaonyumbulika, unaostahimili mchubuko na miale ya UV.",
  },
  "mapefloor-pu-410": {
    type: "Binder ya polyurethane",
    summary:
      "Binder ya polyurethane ya self-levelling ya vipengele viwili, kwa mifumo ya resin ya matabaka mengi kwenye sakafu za zege za maegesho ya magari.",
  },
  "primer-sn": {
    type: "Primer ya epoxy",
    summary: "Primer ya epoxy ya vipengele viwili yenye filler.",
  },
  "quartz-sand": {
    type: "Mchanga wa quartz",
    summary:
      "Mchanga wa quartz uliokaushwa kwenye tanuru, kwa mifumo ya sakafu ya resin.",
  },
  "mapecoat-dw-25": {
    type: "Coating ya maji ya kunywa",
    summary:
      "Rangi ya epoxy ya vipengele viwili kwa coating zinazostahimili asidi, zisizo na sumu, kwenye nyuso za zege, inayofaa kugusana na maji ya kunywa.",
  },
  lamposilex: {
    type: "Kuziba maji",
    summary:
      "Hydraulic binder inayoganda na kukomaa haraka sana, kwa kuzuia maji yanayovuja.",
  },
  antipluviol: {
    type: "Kinga dhidi ya maji",
    summary:
      "Coating ya kinga ya maji inayozuia maji, inayofaa sana nyuso zinazonyonya maji kwa wingi.",
  },
  "planiseal-88": {
    type: "Coating ya saruji",
    summary:
      "Mortar ya saruji ya osmotic inayofaa kugusana na maji ya kunywa, kwa kuzuia maji kwenye miundo ya tofali na zege.",
  },
  "mapelastic-aquadefense": {
    type: "Membrane ya maji",
    summary:
      "Membrane ya maji iliyo tayari kutumika, inayokauka haraka sana na inayonyumbulika, kwa kuzuia maji kwenye nyuso za ndani na nje.",
  },
  "mapelastic-easy": {
    type: "Membrane ya saruji",
    summary:
      "Coating ya saruji iliyoboreshwa kwa acrylic, ya vipengele viwili, inayonyumbulika na kuzuia maji, kwa balcony, terrace na bafu.",
  },
  "mapelastic-smart": {
    type: "Membrane ya saruji",
    summary:
      "Mortar ya saruji ya vipengele viwili inayonyumbulika sana, hupakwa kwa mwiko au roller, kwa kuzuia maji kwenye balcony, terrace, bafu na mabwawa ya kuogelea.",
  },
  "mapelastic-foundation": {
    type: "Membrane ya saruji",
    summary:
      "Mortar ya saruji ya vipengele viwili inayonyumbulika, kwa kuzuia maji kwenye nyuso za zege zinazokabili shinikizo la maji chanya na hasi.",
  },
  "idrostop-pvc": {
    type: "Waterstop",
    summary:
      "Waterstop ya PVC kwa kuziba viungo vya upanuzi na cold joint. Aina tuliyo nayo: BIC 20, 200 mm.",
  },
  "mapeband-tpe": {
    type: "Tepu ya viungo",
    summary:
      "Tepu ya TPE kwa kuziba na kuzuia maji kwenye viungo vya upanuzi na nyufa zinazotembea.",
  },
  "mapeband-easy": {
    type: "Tepu ya viungo",
    summary:
      "Tepu ya mpira iliyo kati ya matabaka mawili ya kitambaa kisichofumwa, kwa viungo vinavyonyumbulika katika mifumo ya kuzuia maji.",
  },
  "mapenet-150": {
    type: "Wavu wa kuimarisha",
    summary:
      "Wavu wa fibre glass unaostahimili alkali, wa kuimarisha matabaka ya kuzuia maji, membrane za kuzuia nyufa na mifumo ya insulation ya nje.",
  },
  "mapeflex-pu-45-ft": {
    type: "Sealant",
    summary:
      "Sealant na gundi ya polyurethane yenye high modulus, ya haraka, inayoweza kupakwa rangi.",
  },
  "mapeproof-swell": {
    type: "Sealant ya hydrophilic",
    summary:
      "Paste ya sealant ya mpira ya hydrophilic inayotanuka, katika tube, inayowekwa kwa bunduki.",
  },
  "idrocrete-kr-1000": {
    type: "Admixture ya zege",
    summary: "Admixture ya crystallizing kwa zege isiyopitisha maji.",
  },
};

/** The two lines on the home dial that have no Swahili page of their own. */
export const swOtherLines: Record<
  string,
  { label: string; short: string; blurb: string }
> = {
  "x-calibur": {
    label: "Bidhaa za X-Calibur",
    short: "X-Calibur",
    blurb:
      "Sakafu za epoxy, bonding agent ya SBR, coating ya acrylic kwa maeneo yenye maji na uzibaji wa viungo kwa polysulphide.",
  },
  "oriental-yuhong": {
    label: "Bidhaa za Oriental Yuhong",
    short: "Oriental Yuhong",
    blurb:
      "Coating za kuzuia maji kwa bafu, paa na kuta, sealant ya viungo ya polyurethane na waterplug inayoganda haraka.",
  },
};

export const swHome = {
  title: "Kemikali za Ujenzi Tanzania - Msambazaji wa Mapei",
  description:
    "Kemikali za ujenzi Tanzania kutoka Sahihi, msambazaji aliyeidhinishwa wa Mapei: gundi za tiles, kuzuia maji, sakafu za epoxy na kukarabati zege, Dar es Salaam.",
  kicker: "Msambazaji aliyeidhinishwa wa Mapei",
  h1: "Kemikali za ujenzi Tanzania, kwa majengo yanayopaswa kudumu.",
  lead: "Sahihi Construction Chemicals inaisambazia Tanzania bidhaa za Mapei, Oriental Yuhong na X-Calibur: gundi za tiles, kuzuia maji, sakafu za resin na ukarabati wa zege, pamoja na msaada wa kiufundi na mafunzo kwa mafundi.",
  viewProducts: "Tazama bidhaa",
  floorHint: "Pitisha kidole au kipanya juu ya sakafu. Igonge.",
  marquee: "Usambazaji ulioidhinishwa · Tanzania",
  whoLabel: "Tunamfanyia kazi nani",
  whoHeading:
    "Kwa wakandarasi, mafundi na wahandisi wanaoamua jengo litadumu kwa muda gani.",
  capabilities: [
    {
      title: "Usambazaji",
      body: "Bidhaa za Mapei na X-Calibur zilizo kwenye ghala letu Dar es Salaam, kuanzia gundi ya tiles hadi coating za maegesho ya magari.",
    },
    {
      title: "Msaada wa kiufundi",
      body: "Mfumo sahihi kwa sakafu ya msingi na mazingira yake, tunaoupanga pamoja nawe kabla ya oda, si baada ya kushindwa kwa kazi.",
    },
    {
      title: "Mafunzo",
      body: "Mafunzo kwa mafundi na vipindi vya CPD kwa wahandisi na wasanifu majengo, kwa sababu ubora wa membrane hutegemea mikono inayoiweka.",
    },
  ],
  solutionsLabel: "Suluhisho",
  solutionsHeading:
    "Njia tano ambazo jengo hushindwa. Jibu moja kwa kila moja.",
  solutionsBody:
    "Kuvuja, tiles zinazobanduka, screed zinazoharibika, zege iliyopasuka na inayoliwa na kutu. Kila tatizo lina mfumo uliotengenezwa kulizuia, kwa kazi za makazi, biashara, viwanda na miundombinu.",
  solutions: {
    waterproofing: {
      label: "Kuzuia maji",
      lead: "Maji kupenya ni moja ya sababu kuu za kuharibika kwa majengo. Mifumo ya saruji, polyurethane na polyurea huyazuia.",
      scope: [
        "Basement na misingi",
        "Paa na terrace",
        "Bafu, jikoni na maeneo yenye maji",
        "Madaraja, viwanja vya ndege, bandari na viwanja vya michezo",
        "Mahandaki na miundo ya chini ya ardhi",
      ],
      alt: "Ngazi za bwawa tupu la kuogelea lililofunikwa kwa tiles ndogo za buluu",
    },
    "flooring-systems": {
      label: "Mifumo ya sakafu",
      lead: "Sakafu zinazobeba magari, kemikali na usafishaji bila kuharibika.",
      scope: [
        "Sakafu za epoxy kwa maeneo ya dawa, maabara na viwanda",
        "Sakafu za polyurethane kwa maeneo ya uzalishaji na jikoni za biashara",
        "Sakafu za SPC na LVT kwa ofisi na ndani ya majengo ya biashara",
      ],
      alt: "Sakafu tupu ya maegesho ya magari juu ya jengo, yenye coating ya kijivu na mistari myeupe",
    },
    "structural-strengthening": {
      label: "Kuimarisha na kukarabati miundo",
      lead: "Zege iliyopo, ikikarabatiwa na kuimarishwa ili jengo libaki na thamani yake.",
      scope: [
        "Ukarabati na urejeshaji wa zege",
        "Kuimarisha miundo",
        "Ukarabati wa miundo ya zege iliyochakaa",
        "Urejeshaji na uhifadhi wa majengo ya kihistoria",
      ],
      alt: "Nguzo ya mviringo ya zege iliyozungushwa mikanda ya carbon fibre",
    },
    "sports-flooring": {
      label: "Sakafu na coating za michezo",
      lead: "Viwanja vya kuchezea kwa shule, klabu na maeneo ya kitaalamu.",
      scope: [
        "Coating za viwanja na vituo vya michezo",
        "Coating za viwanja vya basketball, netball na tennis",
        "Mifumo ya sakafu ya michezo ya EPDM",
        "Mifumo ya nyasi bandia",
      ],
      alt: "Kiwanja cha basketball cha buluu chenye ukingo wa kijani, kikionekana kutoka juu",
    },
    "mining-underground": {
      label: "Migodi na ujenzi wa chini ya ardhi",
      lead: "Kemikali za ujenzi kwa ardhi ngumu, maji yanayopenya na uthabiti wa muundo chini ya ardhi.",
      scope: [
        "Kuimarisha na kutuliza mahandaki",
        "Kuzuia maji kwenye miundo ya chini ya ardhi",
        "Kuimarisha ardhi na kusaidia uchimbaji",
        "Kulinda na kukarabati miundombinu ya migodi",
      ],
      alt: "Handaki lililofunikwa kwa zege ya kunyunyiziwa, lenye rock bolt na membrane ukutani",
    },
  } as Record<
    string,
    { label: string; lead: string; scope: string[]; alt: string }
  >,
  dial: {
    catalogue: "Orodha",
    products: "bidhaa",
    heading: "Kilicho kwenye rafu zetu.",
    productsLabel: "Bidhaa",
    open: "Fungua kundi hili",
  },
  materialsLabel: "Kwa karibu",
  materialsHeading: "Kazi hufanyika kwa milimita.",
  materials: [
    {
      label: "Maji, yamezuiwa",
      alt: "Matone ya maji juu ya membrane ya rangi hafifu ya kuzuia maji",
    },
    {
      label: "Resin, imemiminwa",
      alt: "Mwanga juu ya sakafu ya resin inayong'aa yenye chembe za quartz",
    },
    {
      label: "Gundi, imechanwa",
      alt: "Gundi ya tiles iliyochanwa kwa mistari kwa mwiko wa notch wa chuma",
    },
    {
      label: "Grout, imezibwa",
      alt: "Tone la maji kwenye kiungo cha grout kati ya tile ya buluu na tile ya njano",
    },
  ],
  projectsLabel: "Marejeo",
  projectsHeading: "Bidhaa zimekwenda wapi.",
  allProjects: (count: number) => `Miradi yote ${count}`,
  commitmentLabel: "Ahadi yetu kwa Tanzania",
  commitmentHeading: "Zaidi ya hati ya kupokea mzigo.",
  commitmentBody:
    "Kusambaza bidhaa ni mwanzo tu. Kazi yenyewe ni kujenga uwezo wa kiufundi unaofanya bidhaa ifanye kazi vizuri kwenye eneo la ujenzi.",
  aboutCompany: "Kuhusu kampuni",
  initiatives: [
    {
      title: "Uimara wa majengo",
      body: "Suluhisho za kemikali za ujenzi zinazoboresha utendaji, uimara na maisha ya majengo na miundombinu.",
    },
    {
      title: "Mafunzo kwa mafundi waliopo",
      body: "Mafunzo ya kiufundi kwa mafundi wa kuzuia maji, sakafu na kemikali za ujenzi, ili bidhaa itumike jinsi ilivyokusudiwa.",
    },
    {
      title: "Ujuzi mpya na ajira",
      body: "Kuwafundisha mafundi wapya, vijana wa taaluma na wahitimu ujuzi wa vitendo ambao sekta ya ujenzi inaweza kuajiri.",
    },
    {
      title: "Maendeleo endelevu ya kitaaluma",
      body: "Programu za CPD kwa wahandisi washauri, wasanifu majengo na wataalamu wengine wa ujenzi kuhusu teknolojia za kisasa za ujenzi.",
    },
    {
      title: "Mtandao wa nchi nzima",
      body: "Kuteua wauzaji na mafundi kote Tanzania ili kuleta bidhaa, msaada wa kiufundi na huduma karibu na eneo la kazi.",
    },
  ],
  faqHeading: "Maswali, yamejibiwa.",
  faq: [
    {
      q: "Sahihi Construction Chemicals husambaza nini?",
      lead: "Kemikali za ujenzi kutoka Mapei, Oriental Yuhong na X-Calibur.",
      points: [
        "Gundi za tiles, grout na utunzaji wa tiles",
        "Membrane za kuzuia maji, tepu, waterstop na sealant",
        "Mifumo ya sakafu ya epoxy na polyurethane",
        "Mortar za ukarabati, grout, bonding agent na chemical anchor",
      ],
    },
    {
      q: "Je, Sahihi ni msambazaji aliyeidhinishwa wa Mapei Tanzania?",
      lead: "Ndiyo. Sahihi ni msambazaji aliyeidhinishwa wa Mapei Tanzania.",
      points: [
        "Pia ni msambazaji aliyeidhinishwa wa Oriental Yuhong na X-Calibur",
        "Imepewa leseni na BRELA kama Sahihi Construction Chemicals Limited",
        "Ipo Coca-Cola Road, Mikocheni B, Dar es Salaam",
      ],
    },
    {
      q: "Naweza kuona bei wapi?",
      lead: "Bei hutolewa kwa nukuu, hazichapishwi.",
      points: [
        "Tuma majina ya bidhaa na kiasi kwa WhatsApp au fomu ya maulizo",
        "Tuambie kazi na eneo ili kiasi kiwe sahihi",
        "Utapokea nukuu ya maandishi",
      ],
    },
    {
      q: "Je, mnatoa mafunzo kwa mafundi?",
      lead: "Ndiyo. Mafunzo ni sehemu ya jinsi kampuni inavyofanya kazi.",
      points: [
        "Mafunzo ya kiufundi kwa mafundi waliopo wa kuzuia maji na sakafu",
        "Mafunzo ya vitendo kwa mafundi wapya na wahitimu",
        "Programu za CPD kwa wahandisi washauri na wasanifu majengo",
      ],
    },
    {
      q: "Naweza kuwa muuzaji au fundi wa bidhaa zenu?",
      lead: "Sahihi inateua wauzaji na mafundi kote Tanzania.",
      points: [
        "Biashara za vifaa vya ujenzi na tiles zinaweza kuomba kuuza bidhaa hizi",
        "Mafundi wanaweza kuomba mafunzo ya bidhaa",
        "Anza kwa ujumbe wa WhatsApp au fomu ya maulizo",
      ],
    },
  ] as FaqItem[],
  contact: {
    eyebrow: "Mawasiliano",
    lineOne: "Tujenge",
    lineTwo: "pamoja.",
    email: "Tutumie barua pepe",
    whatsapp: "Tuandikie WhatsApp",
  },
  offer: {
    heading: (count: number, brand: string) =>
      `Bidhaa ${count} za ${brand} zina ofa mwezi huu.`,
    label: "Ofa ya Novemba",
    body: "Kiasi ni kidogo, hadi mwisho wa Novemba. Tutumie bidhaa na kiasi, nasi tutakujibu kwa bei ya ofa.",
    button: "Pata bei ya ofa kwa WhatsApp",
    page: "Tazama ukurasa wa ofa",
    topic: "ofa ya Novemba ya Mapei",
    flash: {
      tab: "Ofa kabambe",
      bubble: {
        word: "Ofa!",
        line: "Bidhaa 25 za Mapei",
        cta: "Tazama ofa",
        close: "Funga kiputo cha ofa",
      },
      ticker: [
        "Ofa kabambe",
        "Bidhaa za Mapei kwa ofa",
        "Kiasi ni kidogo",
        "Inaisha 30 Novemba",
        "Uliza bei ya ofa kwa WhatsApp",
      ],
      units: ["siku", "saa", "dak", "sek"] as [string, string, string, string],
      ended: "Ofa imekwisha",
    },
  },
};

export const swHub = {
  title: "Mapei Tanzania - Msambazaji Aliyeidhinishwa, Dar es Salaam",
  description:
    "Sahihi ni msambazaji aliyeidhinishwa wa Mapei Tanzania. Gundi za tiles, kuzuia maji, sakafu za resin na ukarabati wa zege Dar es Salaam, na karatasi za data.",
  heroAlt:
    "Ukingo wa zege mweupe na paa chini ya anga la buluu, theluthi moja ikiwa imepakwa membrane ya buluu ya kuzuia maji",
  kicker: "Msambazaji aliyeidhinishwa · Tanzania",
  logoAlt: "Nembo ya Mapei",
  h1: "Mapei nchini Tanzania.",
  lead: (count: number) =>
    `Sahihi Construction Chemicals ni msambazaji aliyeidhinishwa wa Mapei Tanzania. Bidhaa ${count} zipo Dar es Salaam, kila moja na daraja lake, ukubwa wa vifurushi, karatasi ya data ya Mapei na kikokotoo cha kiasi kinachohitajika.`,
  quote: "Omba nukuu ya bei",
  seeLines: "Tazama makundi",
  stats: {
    products: "Bidhaa za Mapei tulizo nazo",
    lines: "Makundi ya bidhaa",
    sheets: "Karatasi za data za kupakua",
    calculators: "Vikokotoo vya kiasi",
  },
  rangeLabel: "Bidhaa zetu",
  rangeHeading: "Makundi matano. Kila kitu jengo linachohitaji baada ya zege.",
  openLine: "Fungua kundi",
  everyLabel: "Kwenye kila ukurasa wa bidhaa",
  everyHeading: "Ya kutosha kuandikia specification.",
  every: [
    {
      title: "Maelezo na mipaka ya Mapei yenyewe",
      body: "Bidhaa inatumika wapi na haitumiki wapi, kama ilivyonukuliwa kutoka karatasi ya data ya kiufundi.",
    },
    {
      title: "Data za kiufundi",
      body: "Daraja, muda wa kufanya kazi, unene na nguvu kama Mapei inavyochapisha, pamoja na namba ya toleo.",
    },
    {
      title: "Kikokotoo cha kiasi",
      body: "Unaweka eneo, unapata idadi ya vifurushi, kwa kutumia kiwango cha matumizi cha Mapei na asilimia ya upotevu unayoweka.",
    },
    {
      title: "Karatasi ya data kama PDF",
      body: "Hati ya Mapei, bila kubadilishwa, ya kupakua au kumtumia mshauri.",
    },
  ],
  note: "Kurasa za bidhaa moja moja zimeandikwa kwa Kiingereza na hutafsiriwa kiotomatiki na Google Translate.",
  faqHeading: "Mapei nchini Tanzania, maswali na majibu.",
  faq: (facts: {
    products: number;
    lines: number;
    sheets: number;
    linePoints: string[];
  }): FaqItem[] => [
    {
      q: "Je, Sahihi ni msambazaji aliyeidhinishwa wa Mapei Tanzania?",
      lead: "Ndiyo. Sahihi Construction Chemicals ni msambazaji aliyeidhinishwa wa Mapei Tanzania.",
      points: [
        "Imesajiliwa Tanzania kama Sahihi Construction Chemicals Limited",
        "Ofisi ipo Coca-Cola Road, Mikocheni B; bidhaa zipo Dar es Salaam",
        "Msaada wa kiufundi na mafunzo kwa mafundi pamoja na usambazaji",
      ],
    },
    {
      q: "Naweza kununua bidhaa gani za Mapei Tanzania?",
      lead: `Bidhaa ${facts.products} za Mapei katika makundi ${facts.lines}.`,
      points: facts.linePoints,
    },
    {
      q: "Naweza kupakua wapi karatasi za data za kiufundi za Mapei?",
      lead: "Kwenye ukurasa wa kila bidhaa, kama PDF ya Mapei yenyewe.",
      points: [
        `Karatasi ${facts.sheets} za data zinapatikana kupakuliwa`,
        "Kila moja inaonyesha namba ya toleo ya Mapei",
        "Kwa zilizobaki, na kwa karatasi za usalama, tuulize",
      ],
    },
    {
      q: "Ninahitaji bidhaa ya Mapei kiasi gani?",
      lead: "Kila ukurasa wa bidhaa una kikokotoo cha kiasi.",
      points: [
        "Kimejengwa juu ya kiwango cha matumizi kilichochapishwa kwenye karatasi ya data ya Mapei",
        "Grout hutumia kanuni ya Mapei kwa ukubwa wa tile na upana wa kiungo",
        "Unaweka asilimia ya upotevu; jibu linatoka kwa idadi ya vifurushi",
      ],
    },
    {
      q: "Mapei inagharimu kiasi gani Tanzania?",
      lead: "Bei hutolewa kwa nukuu, hazichapishwi.",
      points: [
        "Tuma majina ya bidhaa na kiasi kwa WhatsApp au fomu ya maulizo",
        "Kikokotoo kinaweza kutuma jibu lake moja kwa moja kwenye WhatsApp",
        "Utapokea nukuu ya maandishi",
      ],
    },
  ],
  cta: {
    label: "Mapei nchini Tanzania",
    heading: "Tuambie kazi. Tutakuambia mfumo.",
    body: "Tuma aina ya kazi, eneo na sakafu ya msingi. Utapata pendekezo la bidhaa ya Mapei na nukuu ya maandishi kutoka ofisi yetu Dar es Salaam.",
    topic: "bidhaa za Mapei",
  },
};

/** Words shared by the Swahili pages. */
export const swCommon = {
  home: "Mwanzo",
  enquiry: "Tuma ulizo",
  faqEyebrow: "Maswali",
  packAlt: (name: string) => `Kifurushi cha ${name}`,
};

export const swLinePage = {
  kicker: "Mapei · Msambazaji aliyeidhinishwa, Tanzania",
  position: (current: string, total: string) => `Kundi ${current} / ${total}`,
  stats: {
    products: "Bidhaa",
    sheets: "Karatasi za data",
    calculators: "Vikokotoo",
  },
  handsOn: (name: string) => `Jaribu mwenyewe · ${name}`,
  listLabel: "Kundi hili",
  listHeading: (count: number) => `Bidhaa ${count}, ukurasa mmoja kila moja.`,
  faqHeading: "Kuchagua kutoka kundi hili.",
  moreLabel: "Mapei zaidi",
  moreHeading: "Makundi mengine.",
  allMapei: "Mapei yote",
  count: (count: number) => `Bidhaa ${count}`,
  faqFirst: (label: string) => `Sahihi ina bidhaa gani za Mapei: ${label}?`,
  faqFirstLead: (count: number) => `Bidhaa ${count}, zipo Dar es Salaam.`,
  faqLast: "Karatasi za data na bei ziko wapi?",
  faqLastLead:
    "Karatasi za data ziko kwenye ukurasa wa kila bidhaa. Bei hutolewa kwa nukuu.",
  faqLastPoints: (sheets: number, total: number, calculators: number) => [
    `Bidhaa ${sheets} kati ya ${total} zina karatasi ya data ya Mapei kama PDF`,
    `Bidhaa ${calculators} zina kikokotoo kilichojengwa juu ya viwango vya matumizi vya Mapei`,
    "Tuma kiasi kwa WhatsApp au fomu ya maulizo upate nukuu ya maandishi",
  ],
  ctaLabel: (label: string) => `Mapei nchini Tanzania: ${label}`,
  ctaHeading: "Tuma specification. Tutakupa bidhaa inayolingana.",
  ctaBody:
    "Sahihi ni msambazaji aliyeidhinishwa wa Mapei Dar es Salaam. Tuma sakafu ya msingi, eneo na mazingira ya kazi, utapata pendekezo la bidhaa na nukuu ya maandishi.",
};
