import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import { glossary } from "@/data/glossary";
import GlossaryClient from "@/components/GlossaryClient";

export const metadata: Metadata = { title: "Glossary" };

export default function Glossary() {
  const mods = getModules().map((m) => ({ slug: m.slug, title: m.title, color: m.color }));
  return (
    <div className="container">
