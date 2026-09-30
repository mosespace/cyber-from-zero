"use client";

import Link from "next/link";
import { useState } from "react";
import type { Term } from "@/data/glossary";

type Mod = { slug: string; title: string; color: string };

export default function GlossaryClient({ terms, modules }: { terms: Term[]; modules: Mod[] }) {
  const [q, setQ] = useState("");
  const t = q.trim().toLowerCase();
  const list = [...terms]
