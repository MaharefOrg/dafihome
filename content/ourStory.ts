// ourStory.ts — editable content for the "Our Story | حكايتنا" section.
// Arabic and English copy are approved. Scene captions are lines from the founder letter.
// Never add biographical details the founder hasn't supplied.

export type Lang = "ar" | "en";
export interface StoryScene { key: "wood" | "fabric" | "object" | "home"; image: string | null; ar: string; en: string; }
export interface OurStory {
  founderName: string | null;
  founderPortrait: string | null;
  photography: { travel: string[]; details: string[]; transformation: { before: string; after: string } | null };
  scenes: StoryScene[];
  ar: { title: string; sub: string; letter: [string, string][] };
  en: { title: string; sub: string; letter: [string, string][] };
}

export const OUR_STORY: OurStory = {
  founderName: null,            // optional — only when Dafi supplies it
  founderPortrait: "/images/story/founder.jpg", // supplied portrait
  photography: { travel: [], details: [], transformation: null }, // transformation: { before, after } — real pairs only
  scenes: [ // section animation assets: add image URLs to replace the demonstration visuals
    { key: "wood",   image: "/images/story/wood.jpg",   ar: "خشب مرّت عليه سنين.",        en: "The grain of weathered wood." },
    { key: "fabric", image: "/images/story/fabric.jpg", ar: "نقشة على قطعة قماش.",       en: "A pattern woven into fabric." },
    { key: "object", image: "/images/story/object.jpg", ar: "قطعة أثاث محد انتبه لجمالها.", en: "A forgotten chair with something beautiful still to offer." },
    { key: "home",   image: "/images/story/home.jpg", ar: "دافي… ويطيب المقام.",      en: "Dafi | The Art of Lingering." } ],
  ar: { title: "كل قطعة إلها حكاية.", sub: "Every Object Has a Story.",
    letter: [["open","مو كل رحلة تنتهي من نرجع للبيت."],["","أكو رحلات تبقى ويّانا بتفاصيل صغيرة. لون على باب قديم، نقشة على قطعة قماش، خشب مرّت عليه سنين، أو قطعة أثاث محد انتبه لجمالها."],
      ["","من رحلاتها، رجعت مؤسسة دافي بأكثر من ذكريات. رجعت بعين تشوف بالقديم بداية جديدة، وبالتفاصيل الصغيرة أفكار تستحق تصير قطع نعيش وياها."],
      ["","بدافي، ممكن كرسي عتيق يرجع بروح مختلفة، أو زخرفة من تراثنا تتحوّل إلى تفصيل معاصر، أو خامتين من عالمين مختلفين يجتمعن بقطعة وحدة."],
      ["turn","مو الهدف نملي المكان بالأشياء."],["turn","الهدف نختار الأشياء اللي تخلي المكان إله روح، وتفتح سالفة، وتخلّي الضيف ينسى الوقت."],["sign","دافي… ويطيب المقام."]] },
  en: { title: "Every Object Has a Story.", sub: "كل قطعة إلها حكاية.",
    letter: [["open","Not every journey ends when we return home."],["","Some places stay with us in the smallest details. The colour of an old doorway. A pattern woven into fabric. The grain of weathered wood. A forgotten chair with something beautiful still to offer."],
      ["","Through her travels, Dafi’s founder collected more than memories. She developed an eye for overlooked beauty and the possibilities hidden within familiar objects."],
      ["","At Dafi, an antique chair might begin another life. An ornamental detail from our heritage might find an unexpected contemporary expression. Materials from different places might meet in a single piece."],
      ["turn","The intention is never simply to fill a room."],["turn","It’s to bring together objects that give a space character, start conversations and make people forget to watch the time."],["sign","Dafi | The Art of Lingering."]] }
};
