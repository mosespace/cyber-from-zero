"use client";

import Link from "next/link";
import { useState } from "react";
import type { Term } from "@/data/glossary";

type Mod = { slug: string; title: string; color: string };

export default function GlossaryClient({ terms, modules }: { terms: Term[]; modules: Mod[] }) {
  const [q, setQ] = useState("");
  const t = q.trim().toLowerCase();
  const list = [...terms]
    .sort((a, b) => a.term.localeCompare(b.term))
    .filter((x) => !t || x.term.toLowerCase().includes(t) || x.def.toLowerCase().includes(t));
  return (
    <>
      <input className="search-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search 50+ security words..." aria-label="Search the glossary" />
      <p style={{ color: "var(--muted)", fontWeight: 600, marginTop: 18 }}>{list.length} terms</p>
      <div className="gl-grid">
        {list.map((x) => {
          const m = modules.find((mm) => mm.slug === x.module);
          return (
            <div key={x.term} className="gl pop">
              <h3>{x.term}</h3>
              <p>{x.def}</p>
              <Link href={`/modules/${x.module}`} className="tag" style={{ ["--c" as string]: m?.color, textDecoration: "none" }}>{m?.title}</Link>
            </div>
