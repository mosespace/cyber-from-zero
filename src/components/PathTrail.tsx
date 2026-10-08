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

