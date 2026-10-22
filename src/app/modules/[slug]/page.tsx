import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getModule, getModules } from "@/lib/content";
import { moduleVideos } from "@/data/resources";
import { glossary } from "@/data/glossary";
import AudioPlayer from "@/components/AudioPlayer";
import LessonStatus from "@/components/LessonStatus";
import ModuleIcon from "@/components/ModuleIcon";
import ProgressBar from "@/components/ProgressBar";
import QuizRunner from "@/components/QuizRunner";
import { Circle, Dots, Plus, Star, Triangle } from "@/components/shapes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getModules().map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: getModule((await params).slug)?.title ?? "Module" };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  const all = getModules();
