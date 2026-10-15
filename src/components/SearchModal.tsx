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
