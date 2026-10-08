import Link from "next/link";
import type { Module } from "@/lib/content";
import ModuleIcon from "./ModuleIcon";
import ProgressBar from "./ProgressBar";

export default function ModuleCard({ mod }: { mod: Module }) {
  return (
    <Link href={`/modules/${mod.slug}`} className="mod-card pop" style={{ ["--c" as string]: mod.color }}>
      <div className="top">
        <span className="tile"><ModuleIcon slug={mod.slug} size={46} /></span>
        <span className="no">{String(mod.order).padStart(2, "0")}</span>
      </div>
      <h3>{mod.title}</h3>
      <p>{mod.blurb}</p>
      <div className="meta">
        <span className="pill">{mod.level}</span>
        <span className="pill">{mod.lessons.length} lessons</span>
        <span className="pill">~{mod.hours} h</span>
      </div>
      <ProgressBar ids={mod.lessons.map((l) => `${mod.slug}/${l.slug}`)} color={mod.color} />
    </Link>
  );
}
