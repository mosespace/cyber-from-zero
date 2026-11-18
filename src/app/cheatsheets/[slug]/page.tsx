import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCheatsheets } from "@/lib/extras";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => getCheatsheets().map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getCheatsheets().find((x) => x.slug === slug);
  return { title: s?.title ?? "Cheat sheet" };
}

export default async function SheetPage({ params }: Props) {
  const { slug } = await params;
  const sheet = getCheatsheets().find((x) => x.slug === slug);
  if (!sheet) notFound();
  return (
    <div className="narrow" style={{ ["--c" as string]: sheet.color }}>
