"use client";

import { useEffect, useMemo, useState } from "react";
import type { Term } from "@/data/glossary";
import { reviewCard, useStore } from "@/lib/store";

type Mod = { slug: string; title: string; color: string };

export default function FlashcardsClient({ terms, modules }: { terms: Term[]; modules: Mod[] }) {
  const store = useStore();
  const [mod, setMod] = useState<string>("all");
  const [flip, setFlip] = useState(false);
  const [pos, setPos] = useState(0);
  const [seed, setSeed] = useState(0);

  // cards you do not know yet come first; each group is shuffled
  const deck = useMemo(() => {
    const list = terms.filter((t) => mod === "all" || t.module === mod);
    const rnd = (s: string) => { let h = seed + 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 9973; return h; };
    return [...list].sort((a, b) => (store.cards[a.term] ?? 0) - (store.cards[b.term] ?? 0) || rnd(a.term) - rnd(b.term));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod, seed, terms]);

  const card = deck[pos % Math.max(deck.length, 1)];
  const color = modules.find((m) => m.slug === card?.module)?.color ?? "#FFC93C";
  const known = deck.filter((t) => (store.cards[t.term] ?? 0) >= 1).length;

  function answer(ok: boolean) {
    if (!card) return;
    reviewCard(card.term, ok);
    setFlip(false);
    setTimeout(() => setPos((p) => p + 1), 150);
  }

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === " ") { e.preventDefault(); setFlip((f) => !f); }
      if (flip && e.key === "ArrowRight") answer(true);
      if (flip && e.key === "ArrowLeft") answer(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  return (
    <>
      <div className="chips">
        <button className={`chip ${mod === "all" ? "on" : ""}`} onClick={() => { setMod("all"); setPos(0); }}>All terms</button>
        {modules.map((m) => (
          <button key={m.slug} className={`chip ${mod === m.slug ? "on" : ""}`} onClick={() => { setMod(m.slug); setPos(0); }}>{m.title}</button>
        ))}
      </div>
      <p className="fc-meta">{known} of {deck.length} learned · card {deck.length ? (pos % deck.length) + 1 : 0} of {deck.length}</p>
      {card && (
        <div className="deck">
          <div className={`card3d ${flip ? "flip" : ""}`} onClick={() => setFlip((f) => !f)} role="button" tabIndex={0} aria-label="Flip card">
            <div className="face" style={{ ["--c" as string]: color }}>
              <h3>{card.term}</h3>
              <small>Tap or press space to flip</small>
