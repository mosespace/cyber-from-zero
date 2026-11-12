import type { Metadata } from "next";
import Link from "next/link";
import { getCheatsheets, getLabs } from "@/lib/extras";
import ModuleIcon from "@/components/ModuleIcon";
import { Plus, Square } from "@/components/shapes";

export const metadata: Metadata = { title: "Labs and cheat sheets" };

export default function Labs() {
  const labs = getLabs();
  const sheets = getCheatsheets();
