import type { Metadata } from "next";
import Link from "next/link";
import { getCheatsheets, getLabs } from "@/lib/extras";
import ModuleIcon from "@/components/ModuleIcon";
import { Plus, Square } from "@/components/shapes";

export const metadata: Metadata = { title: "Labs and cheat sheets" };

export default function Labs() {
  const labs = getLabs();
  const sheets = getCheatsheets();
  return (
    <div className="container">
      <div className="page-head">
        <Square color="#F7A501" className="float" style={{ right: 20, top: 30, width: 90 }} />
        <Plus color="#C9B6FF" style={{ right: 140, top: 100, width: 40 }} />
        <span className="eyebrow"><i /> Learn by doing</span>
