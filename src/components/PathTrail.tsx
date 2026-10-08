"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import ModuleIcon from "./ModuleIcon";
import { Star } from "./shapes";

export type TrailModule = {
  slug: string; title: string; color: string; order: number; level: string;
  lessons: { slug: string; title: string; minutes: number }[];
};

const DX = [0, 74, 112, 74, 0, -74, -112, -74];

export default function PathTrail({ modules }: { modules: TrailModule[] }) {
  const { done } = useStore();
  const all = modules.flatMap((m) => m.lessons.map((l) => `${m.slug}/${l.slug}`));
  const current = all.find((id) => !done.includes(id));
  let n = 0;

  return (
    <div className="trail">
      {modules.map((m) => {
        const finished = m.lessons.filter((l) => done.includes(`${m.slug}/${l.slug}`)).length;
        return (
          <div key={m.slug} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", ["--c" as string]: m.color }}>
            <Link href={`/modules/${m.slug}`} className="t-banner pop">
              <span className="tile"><ModuleIcon slug={m.slug} size={40} /></span>
              <span>
                <small>Module {m.order} · {m.level}</small>
                <h2>{m.title}</h2>
                <small>{finished}/{m.lessons.length} lessons</small>
              </span>
            </Link>
            {m.lessons.map((l) => {
              const id = `${m.slug}/${l.slug}`;
              const dx = DX[n++ % DX.length];
              const isDone = done.includes(id);
              const isNow = id === current;
              return (
                <div key={id} className={`t-node ${isDone ? "done" : ""} ${dx > 0 ? "left" : "right"}`} style={{ ["--dx" as string]: `${dx}px` }}>
                  {isNow && <span className="start-tag" style={{ transform: `translateX(calc(-50% + ${dx}px))` }}>START</span>}
                  <Link href={`/learn/${m.slug}/${l.slug}`} className={`btn-node ${isNow ? "pulse" : ""}`} aria-label={l.title}>
                    {isDone ? "✓" : m.lessons.indexOf(l) + 1}
                  </Link>
                  <span className="t-label">{l.title}<small>{l.minutes} min</small></span>
                </div>
