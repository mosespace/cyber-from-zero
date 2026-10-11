"use client";

import { useState } from "react";
import QuizRunner, { type PoolQuestion } from "./QuizRunner";
import ModuleIcon from "./ModuleIcon";
import { Star } from "./shapes";

type Mod = { slug: string; title: string; color: string; count: number };

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export default function PracticeClient({ pool, modules }: { pool: (PoolQuestion & { moduleSlug: string })[]; modules: Mod[] }) {
  const [session, setSession] = useState<{ key: string; qs: PoolQuestion[]; id: number } | null>(null);

  function start(slug: string | null) {
    const src = slug ? pool.filter((p) => p.moduleSlug === slug) : pool;
    const qs = shuffle(src).slice(0, slug ? src.length : 10).map((q) => ({ ...q, options: q.options }));
    setSession({ key: slug ? `practice:${slug}` : "practice:mixed", qs, id: Date.now() });
  }

  if (session) return <QuizRunner key={session.id} questions={session.qs} storeKey={session.key} onExit={() => setSession(null)} />;

  return (
    <>
      <div className="setup">
        <button className="pop" style={{ background: "var(--sun)" }} onClick={() => start(null)}>
          <Star size={52} color="#FF6B57" />
          <span><b>Mixed challenge</b><small>10 random questions</small></span>
        </button>
        {modules.map((m) => (
          <button key={m.slug} className="pop" onClick={() => start(m.slug)}>
            <span className="tile" style={{ width: 52, height: 52, borderRadius: 14, border: "1.5px solid #16162b", background: m.color, display: "grid", placeItems: "center", flex: "none" }}>
              <ModuleIcon slug={m.slug} size={34} />
            </span>
            <span><b>{m.title}</b><small>{m.count} questions</small></span>
          </button>
        ))}
      </div>
    </>
  );
}
