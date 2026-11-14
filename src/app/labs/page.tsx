import type { Metadata } from "next";
import Link from "next/link";
import { getCheatsheets, getLabs } from "@/lib/extras";
import ModuleIcon from "@/components/ModuleIcon";
import { Plus, Square } from "@/components/shapes";

export const metadata: Metadata = { title: "Labs and cheat sheets" };

export default function Labs() {
  const labs = getLabs();
  const sheets = getCheatsheets();
  return (
    <div className="container">
      <div className="page-head">
        <Square color="#F7A501" className="float" style={{ right: 20, top: 30, width: 90 }} />
        <Plus color="#C9B6FF" style={{ right: 140, top: 100, width: 40 }} />
        <span className="eyebrow"><i /> Learn by doing</span>
        <h1>Labs and cheat sheets</h1>
        <p className="lede">Ten hands-on labs, one for every module, plus quick reference sheets you can keep open while you work.</p>
      </div>

      <h2 className="section-title" style={{ fontSize: 34 }}>Hands-on labs</h2>
      <div className="mod-grid">
        {labs.map((l, i) => (
          <Link key={l.slug} href={`/labs/${l.slug}`} className="mod-card pop" style={{ ["--c" as string]: l.color }}>
            <div className="top">
              <span className="tile"><ModuleIcon slug={l.moduleSlug ?? ""} size={40} /></span>
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{l.title}</h3>
            <p>{l.summary}</p>
            <div className="meta">
              <span className="pill">{l.level}</span>
              <span className="pill">{l.minutes} min</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title" style={{ fontSize: 34, marginTop: 64 }}>Cheat sheets</h2>
      <div className="res-grid">
        {sheets.map((s) => (
          <Link key={s.slug} href={`/cheatsheets/${s.slug}`} className="res pop" style={{ ["--c" as string]: s.color }}>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <small>Open →</small>
          </Link>
        ))}
      </div>
