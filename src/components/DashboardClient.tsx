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
