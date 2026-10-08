import Link from "next/link";
import type { Module } from "@/lib/content";
import ModuleIcon from "./ModuleIcon";
import ProgressBar from "./ProgressBar";

export default function ModuleCard({ mod }: { mod: Module }) {
  return (
    <Link href={`/modules/${mod.slug}`} className="mod-card pop" style={{ ["--c" as string]: mod.color }}>
      <div className="top">
        <span className="tile"><ModuleIcon slug={mod.slug} size={46} /></span>
