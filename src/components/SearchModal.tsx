"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export type SearchItem = { title: string; sub: string; href: string; color: string; kind: string };

export default function SearchModal({ items, onClose }: { items: SearchItem[]; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    input.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items.slice(0, 8);
    return items
      .map((i) => ({ i, score: (i.title.toLowerCase().includes(t) ? 2 : 0) + (i.sub.toLowerCase().includes(t) ? 1 : 0) }))
      .filter((r) => r.score)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
