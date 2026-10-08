import Link from "next/link";
import type { Module } from "@/lib/content";
import ModuleIcon from "./ModuleIcon";
import ProgressBar from "./ProgressBar";

export default function ModuleCard({ mod }: { mod: Module }) {
  return (
