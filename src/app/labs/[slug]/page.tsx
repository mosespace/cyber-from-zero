import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLabs } from "@/lib/extras";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => getLabs().map((l) => ({ slug: l.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = getLabs().find((x) => x.slug === slug);
  return { title: l ? `Lab: ${l.title}` : "Lab" };
}

export default async function LabPage({ params }: Props) {
  const { slug } = await params;
  const labs = getLabs();
  const i = labs.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const lab = labs[i];
  const next = labs[i + 1];
  return (
    <div className="narrow" style={{ ["--c" as string]: lab.color }}>
