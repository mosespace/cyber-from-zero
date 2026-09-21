"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import ModuleIcon from "./ModuleIcon";

export type FlatLesson = { id: string; href: string; title: string; moduleSlug: string; moduleTitle: string; color: string };

export default function ContinueCard({ lessons }: { lessons: FlatLesson[] }) {
  const { done } = useStore();
  const next = lessons.find((l) => !done.includes(l.id));
  const started = done.length > 0;
