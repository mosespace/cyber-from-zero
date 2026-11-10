import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLabs } from "@/lib/extras";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => getLabs().map((l) => ({ slug: l.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
