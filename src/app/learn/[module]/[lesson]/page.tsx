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
  const { prev, next } = getNeighbours(mod.slug, lesson.slug);
  const id = `${mod.slug}/${lesson.slug}`;

  return (
    <div style={{ ["--c" as string]: mod.color }}>
      <ReadingProgress />
      <div className="container">
        <header className="lesson-top">
          <div className="crumbs">
            <Link href="/path">Path</Link> / <Link href={`/modules/${mod.slug}`}>{mod.title}</Link>
          </div>
          <h1>{lesson.title}</h1>
          <div className="meta">
            <span className="pill" style={{ background: mod.color }}>Module {mod.order}</span>
            <span className="pill">{lesson.minutes} min</span>
            <span className="pill">+20 XP</span>
          </div>
          <p className="lede" style={{ marginTop: 16 }}>{lesson.summary}</p>
          <Squiggle size={110} style={{ marginTop: 14 }} />
        </header>

        <div className="lesson-layout">
          <article>
            <Markdown>{lesson.body}</Markdown>

            {lesson.remember.length > 0 && (
              <section className="takeaways pop">
                <Dots style={{ position: "absolute", right: 16, top: 14, width: 54, opacity: 0.35 }} />
                <h2>Remember</h2>
                <ul>{lesson.remember.map((r) => <li key={r}>{r}</li>)}</ul>
              </section>
            )}

            <div className="finish">
              <CompleteButton id={id} />
              <Link href={`/modules/${mod.slug}#quiz`} className="btn">Take the module quiz</Link>
            </div>

            <nav className="pager">
              {prev ? (
                <Link href={`/learn/${prev.moduleSlug}/${prev.slug}`} className="pop"><small>← Previous</small><b>{prev.title}</b></Link>
