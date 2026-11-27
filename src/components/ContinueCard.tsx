"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import ModuleIcon from "./ModuleIcon";

export type FlatLesson = {
  id: string;
  href: string;
  title: string;
  moduleSlug: string;
  moduleTitle: string;
  color: string;
};

export default function ContinueCard({ lessons }: { lessons: FlatLesson[] }) {
  const { done } = useStore();
  const next = lessons.find((l) => !done.includes(l.id));
  const started = done.length > 0;
  if (!next)
    return done.length ? (
      <p className="pop continue">You finished every lesson. Amazing work!</p>
    ) : null;
  return (
    <Link href={next.href} className="continue pop" style={{ ["--c" as string]: next.color }}>
      <span className="ico">
        <ModuleIcon slug={next.moduleSlug} size={30} />
      </span>
      <span>
        <small>{started ? "Continue where you left off" : "Your first lesson"}</small>
        <b>{next.title}</b>
      </span>
      <span style={{ marginLeft: "auto", fontSize: 24 }}>→</span>
    </Link>
  );
}
