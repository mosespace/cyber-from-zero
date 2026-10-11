"use client";

import { useStore } from "@/lib/store";

export default function ProgressBar({ ids, color, label }: { ids: string[]; color?: string; label?: boolean }) {
  const { done } = useStore();
  const n = ids.filter((id) => done.includes(id)).length;
  const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
