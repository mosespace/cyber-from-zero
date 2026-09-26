"use client";

import { useEffect, useMemo, useState } from "react";
import type { Term } from "@/data/glossary";
import { reviewCard, useStore } from "@/lib/store";

type Mod = { slug: string; title: string; color: string };

export default function FlashcardsClient({ terms, modules }: { terms: Term[]; modules: Mod[] }) {
  const store = useStore();
  const [mod, setMod] = useState<string>("all");
  const [flip, setFlip] = useState(false);
