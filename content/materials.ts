// materials.ts — editable content for "The Material Archive | مكتبة الخامات".
// Each sample is a labelled demonstration until real macro photography is supplied.
// origin and technique stay null until verified — the site hides empty fields in production.

export type CategoryKey = "woods" | "fabrics" | "finishes" | "stone" | "metalwork" | "calligraphy" | "ornament" | "found";
export interface MaterialCategory { idx: string; en: string; ar: string; descEn: string[]; descAr: string[]; }
export interface Material {
  id: string; category: CategoryKey; nameEn: string; nameAr: string;
  photo: string | null; texture: string;           // texture = CSS demonstration class, used only while photo is null
  origin: string | null; technique: string | null; // verified information only
  finishes: string[]; relatedProducts: { name: string; url: string }[]; bespokeLink: string;
}

export const MATERIAL_CATEGORIES: Record<CategoryKey, MaterialCategory> = {
  woods:       { idx: "01", en: "Woods",          ar: "الأخشاب",            descEn: ["From richly grained timber to aged wood with visible history.","Explore the warmth, character and natural variation of different woods."], descAr: ["من خشب غني بعروقه إلى خشب قديم يحمل أثر السنين.","اكتشفوا دفء الأخشاب وطابعها وتنوّعها الطبيعي."] },
  fabrics:     { idx: "02", en: "Fabrics",        ar: "الأقمشة",            descEn: ["Texture, colour and movement.","Discover fabrics that bring softness, contrast and personality to furniture."], descAr: ["ملمس ولون وحركة.","اكتشفوا أقمشة تضيف للأثاث نعومة وتبايناً وشخصية."] },
  finishes:    { idx: "03", en: "Finishes",       ar: "التشطيبات",          descEn: ["The final treatment can completely change how a piece feels.","Explore painted, polished, matte and textured finishes."], descAr: ["اللمسة الأخيرة ممكن تغيّر إحساس القطعة بالكامل.","اكتشفوا التشطيبات الملوّنة والملمّعة والمطفية والمحبّبة."] },
  stone:       { idx: "04", en: "Stone & Marble", ar: "الحجر والرخام",      descEn: ["Natural patterns, distinctive surfaces and sculptural possibilities."], descAr: ["عروق طبيعية، وأسطح مميّزة، وإمكانيات نحتية."] },
  metalwork:   { idx: "05", en: "Metalwork",      ar: "المشغولات المعدنية", descEn: ["Brass, iron and other metal details that introduce contrast, structure and character."], descAr: ["النحاس والحديد وتفاصيل معدنية أخرى تضيف تبايناً وبنية وطابعاً."] },
  calligraphy: { idx: "06", en: "Calligraphy",    ar: "الخط العربي",        descEn: ["Arabic lettering explored as a design element through form, proportion and artistic expression."], descAr: ["الحرف العربي كعنصر تصميم، بالشكل والنِّسب والتعبير الفني."] },
  ornament:    { idx: "07", en: "Ornament",       ar: "النقوش والزخارف",    descEn: ["Decorative details inspired by architectural forms, heritage patterns and traditional craftsmanship."], descAr: ["تفاصيل زخرفية مستوحاة من العمارة والنقوش التراثية والحِرفة التقليدية."] },
  found:       { idx: "08", en: "Found Objects",  ar: "قطع لها ماضٍ",       descEn: ["Vintage discoveries and overlooked objects with the potential for a new chapter."], descAr: ["اكتشافات قديمة وأشياء ما انتبه إلها أحد، تنتظر فصلاً جديداً."] }
};

// One demonstration sample per category until real macro photography exists. Never invent origin or technique.
export const MATERIALS: Material[] = [
  { id: "walnut",        category: "woods",       nameEn: "Dark Wood",           nameAr: "خشب داكن",         photo: "/images/materials/wood.jpg", texture: "t-wood",     origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "teal-velvet",   category: "fabrics",     nameEn: "Embroidered Velvet",  nameAr: "مخمل مطرّز",       photo: "/images/materials/velvet.jpg", texture: "t-velvet",   origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "painted-matte", category: "finishes",    nameEn: "Glazed Ceramic",      nameAr: "سيراميك مزجّج",    photo: "/images/materials/glazed-ceramic.jpg", texture: "t-paint",    origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "dark-marble",   category: "stone",       nameEn: "Dark Marble",         nameAr: "رخام داكن",        photo: null, texture: "t-marble",   origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "brass",         category: "metalwork",   nameEn: "Pierced Brass",       nameAr: "نحاس مخرّم",       photo: "/images/materials/pierced-brass.jpg", texture: "t-brass",    origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "kufic",         category: "calligraphy", nameEn: "Square Kufic",        nameAr: "كوفي مربّع",       photo: "/images/materials/square-kufic.jpg", texture: "t-callig",   origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "carved-wood",   category: "ornament",    nameEn: "Carved Wood",         nameAr: "خشب منقوش",        photo: "/images/materials/carved-wood.jpg", texture: "t-ornament", origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "carved-base",   category: "woods",       nameEn: "Turned & Carved Wood", nameAr: "خشب مخروط ومحفور", photo: "/images/materials/turned-carved-wood.jpg", texture: "t-wood", origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "red-weave",     category: "fabrics",     nameEn: "Patterned Weave",     nameAr: "نسيج منقوش",       photo: "/images/materials/patterned-weave.jpg", texture: "t-velvet", origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "thuluth",       category: "calligraphy", nameEn: "Embroidered Thuluth", nameAr: "ثلث مطرّز",        photo: "/images/materials/embroidered-thuluth.jpg", texture: "t-callig", origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" },
  { id: "vintage-find",  category: "found",       nameEn: "Vintage Find",        nameAr: "لقية قديمة",       photo: null, texture: "t-found",    origin: null, technique: null, finishes: [], relatedProducts: [], bespokeLink: "#bespoke" }
];
export const PAIR_IDEAS: [string, string][] = [["walnut","teal-velvet"],["brass","dark-marble"],["carved-wood","teal-velvet"]];
 // Arabic drafts awaiting approval (titles given by Dafi are already approved)
