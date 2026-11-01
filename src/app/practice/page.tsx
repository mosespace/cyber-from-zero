import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import PracticeClient from "@/components/PracticeClient";
import { Blob, Star } from "@/components/shapes";

export const metadata: Metadata = { title: "Practice" };

export default function Practice() {
  const mods = getModules();
  const pool = mods.flatMap((m) => m.quiz.map((q) => ({ ...q, moduleSlug: m.slug, moduleTitle: m.title })));
  return (
    <div className="narrow" style={{ maxWidth: 960 }}>
      <div className="page-head">
        <Blob color="#27D3A2" variant={1} className="float" style={{ right: 0, top: 24, width: 120 }} />
        <Star color="#FFC93C" className="float" style={{ right: 130, top: 100, width: 48 }} />
        <span className="eyebrow"><i /> Practice mode</span>
        <h1>Test yourself</h1>
        <p className="lede">Pick a mixed challenge or choose one module. Every answer you improve earns XP.</p>
      </div>
      <PracticeClient pool={pool} modules={mods.map((m) => ({ slug: m.slug, title: m.title, color: m.color, count: m.quiz.length }))} />
    </div>
  );
}
