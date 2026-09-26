"use client";

import Link from "next/link";
import { useState } from "react";
import { computeBadges, levelOf, resetAll, streakOf, todayKey, useStore, XP_PER_LEVEL, type ModuleIds } from "@/lib/store";
import { Circle, Flame, Square, Star, Triangle } from "./shapes";
import ModuleIcon from "./ModuleIcon";
import ProgressBar from "./ProgressBar";

const SHAPES = { circle: Circle, star: Star, tri: Triangle, square: Square };

export default function DashboardClient({ modules }: { modules: ModuleIds[] }) {
  const s = useStore();
  const [confirm, setConfirm] = useState(false);
  const { level, into } = levelOf(s.xp);
  const streak = streakOf(s.days);
  const badges = computeBadges(s, modules);
  const known = Object.values(s.cards).filter((b) => b >= 1).length;

  const R = 74, C = 2 * Math.PI * R;
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return { key, label: d.toLocaleDateString("en", { weekday: "short" }).slice(0, 2), on: s.days.includes(key) };
  });

  return (
    <>
      <div className="dash-top">
        <div className="level pop">
          <svg viewBox="0 0 190 190" aria-label={`Level ${level}`}>
            <circle cx="95" cy="95" r={R} fill="#fff" stroke="#16162b" strokeWidth="3" />
            <circle cx="95" cy="95" r={R - 2} fill="none" stroke="#e6dcc4" strokeWidth="16" />
            <circle cx="95" cy="95" r={R - 2} fill="none" stroke="#FF6B57" strokeWidth="16" strokeLinecap="round" strokeDasharray={`${(into / XP_PER_LEVEL) * (C - 12)} ${C}`} transform="rotate(-90 95 95)" />
            <text x="95" y="92" textAnchor="middle" style={{ font: "800 48px var(--font-display)", fill: "#16162b" }}>{level}</text>
            <text x="95" y="118" textAnchor="middle" style={{ font: "700 14px var(--font-body)", fill: "#5b5b78", letterSpacing: ".1em" }}>LEVEL</text>
          </svg>
          <h2>{s.xp} XP</h2>
          <p style={{ margin: "4px 0 0" }}>{XP_PER_LEVEL - into} XP to level {level + 1}</p>
        </div>
        <div>
          <div className="tiles">
            <div className="tile-stat pop"><b>{streak}<Flame size={30} /></b><span>day streak</span></div>
            <div className="tile-stat pop"><b>{s.done.length}</b><span>lessons done</span></div>
            <div className="tile-stat pop"><b>{known}</b><span>flashcards learned</span></div>
            <div className="tile-stat pop">
              <span>This week</span>
              <div className="week">
                {week.map((d) => (
                  <div key={d.key} className={d.on ? "on" : ""} title={d.key === todayKey() ? "Today" : d.key}><i />{d.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: 56 }}>Badges</h2>
      <div className="badges">
        {badges.map((b) => {
          const Shape = SHAPES[b.shape];
          return (
            <div key={b.id} className={`badge pop ${b.earned ? "" : "locked"}`}>
              <Shape size={64} color={b.color} />
              <b>{b.title}</b>
              <small>{b.desc}</small>
            </div>
          );
        })}
      </div>

      <h2 className="section-title" style={{ marginTop: 56 }}>Module progress</h2>
      <div className="prog-list">
        {modules.map((m) => (
          <Link key={m.slug} href={`/modules/${m.slug}`} className="prog-row pop" style={{ ["--c" as string]: m.color }}>
            <span className="tile"><ModuleIcon slug={m.slug} size={34} /></span>
            <span>
              <b style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{m.title}</b>
              <ProgressBar ids={m.ids} color={m.color} label />
            </span>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 56 }}>
        {confirm ? (
          <>
            <b>Delete all progress in this browser? </b>
            <button className="btn small" onClick={() => { resetAll(); setConfirm(false); }}>Yes, reset</button>{" "}
            <button className="btn small" onClick={() => setConfirm(false)}>Cancel</button>
          </>
