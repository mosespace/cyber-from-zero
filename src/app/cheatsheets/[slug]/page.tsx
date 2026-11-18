import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCheatsheets } from "@/lib/extras";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => getCheatsheets().map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
