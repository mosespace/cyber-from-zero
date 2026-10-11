"use client";

import { useStore } from "@/lib/store";

export default function ProgressBar({ ids, color, label }: { ids: string[]; color?: string; label?: boolean }) {
  const { done } = useStore();
  const n = ids.filter((id) => done.includes(id)).length;
  const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
  return (
    <div style={{ ["--c" as string]: color }}>
      <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ width: `${pct}%` }} />
      </div>
      {label && <div className="bar-label">{n} of {ids.length} lessons done</div>}
