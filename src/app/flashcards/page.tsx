import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import { glossary } from "@/data/glossary";
import FlashcardsClient from "@/components/FlashcardsClient";
import { Plus, Square } from "@/components/shapes";

export const metadata: Metadata = { title: "Flashcards" };

export default function Flashcards() {
  const mods = getModules().map((m) => ({ slug: m.slug, title: m.title, color: m.color }));
  return (
    <div className="narrow" style={{ maxWidth: 900 }}>
      <div className="page-head">
        <Square color="#B9A2FF" className="float" style={{ right: 0, top: 24, width: 100 }} />
        <Plus color="#FF9BC9" style={{ right: 120, top: 90, width: 40 }} />
        <span className="eyebrow">
          <i /> Memory trainer
        </span>
        <h1>Flashcards</h1>
        <p className="lede">
          Flip the card, then say if you knew it. Words you miss come back first. Space flips, arrow
          keys answer.
        </p>
      </div>
      <FlashcardsClient terms={glossary} modules={mods} />
      <div style={{ height: 90 }} />
    </div>
  );
}
