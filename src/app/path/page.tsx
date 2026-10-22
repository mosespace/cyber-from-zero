import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import PathTrail from "@/components/PathTrail";
import { Blob, Plus, Squiggle } from "@/components/shapes";

export const metadata: Metadata = { title: "Learning path" };

export default function PathPage() {
  const mods = getModules().map((m) => ({
    slug: m.slug, title: m.title, color: m.color, order: m.order, level: m.level,
    lessons: m.lessons.map((l) => ({ slug: l.slug, title: l.title, minutes: l.minutes })),
  }));
  return (
    <div className="container">
      <div className="page-head">
        <Blob color="#B9A2FF" variant={0} className="float" style={{ right: 10, top: 30, width: 130 }} />
        <Plus color="#F7A501" style={{ right: 170, top: 90, width: 44 }} />
