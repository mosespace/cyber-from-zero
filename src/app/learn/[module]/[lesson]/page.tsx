import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, getModules, getNeighbours } from "@/lib/content";
import AudioPlayer from "@/components/AudioPlayer";
import CompleteButton from "@/components/CompleteButton";
import Markdown from "@/components/Markdown";
import ReadingProgress from "@/components/ReadingProgress";
import Toc from "@/components/Toc";
import { Dots, Squiggle } from "@/components/shapes";

type Props = { params: Promise<{ module: string; lesson: string }> };

export function generateStaticParams() {
  return getModules().flatMap((m) => m.lessons.map((l) => ({ module: m.slug, lesson: l.slug })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const f = getLesson(p.module, p.lesson);
  return { title: f?.lesson.title ?? "Lesson", description: f?.lesson.summary };
}

export default async function LessonPage({ params }: Props) {
  const p = await params;
  const found = getLesson(p.module, p.lesson);
  if (!found) notFound();
  const { mod, lesson } = found;
