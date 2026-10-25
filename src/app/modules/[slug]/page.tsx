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
  const next = all[all.findIndex((m) => m.slug === slug) + 1];
  const videos = moduleVideos[mod.slug] ?? [];
  const words = glossary.filter((g) => g.module === mod.slug).length;

  return (
    <>
      <section className="mod-hero" style={{ ["--c" as string]: mod.color }}>
        <Triangle color="#fff" className="float" style={{ right: "26%", top: 20, width: 70 }} />
        <Circle color="#fff" style={{ left: "46%", bottom: -30, width: 90, opacity: 0.6 }} />
        <Plus color="#fff" className="float" style={{ left: "58%", top: 40, width: 46, animationDelay: "-2s" }} />
        <Dots style={{ right: "3%", top: 14, width: 70, opacity: 0.35 }} />
        <div className="container">
          <div>
            <span className="eyebrow"><i /> <Link href="/path" style={{ textDecoration: "none" }}>Module {mod.order}</Link> · {mod.level}</span>
            <h1>{mod.title}</h1>
            <p>{mod.overview}</p>
            <div className="meta">
              <span className="pill">{mod.lessons.length} lessons</span>
              <span className="pill">~{mod.hours} hours</span>
              <span className="pill">{mod.quiz.length} quiz questions</span>
              {words > 0 && <span className="pill">{words} flashcards</span>}
            </div>
          </div>
          <div className="big"><ModuleIcon slug={mod.slug} size={120} /></div>
        </div>
      </section>

      <div className="container">
        <div className="two-col">
          <div>
            <h2 className="section-title" style={{ fontSize: 34 }}>Lessons</h2>
            <ProgressBar ids={mod.lessons.map((l) => `${mod.slug}/${l.slug}`)} color={mod.color} label />
            <div style={{ marginTop: 24 }}>
              {mod.lessons.map((l) => (
                <Link key={l.slug} href={`/learn/${mod.slug}/${l.slug}`} className="les-row pop">
                  <LessonStatus id={`${mod.slug}/${l.slug}`} n={l.order} />
                  <span>
                    <b>{l.title}</b>
                    <small>{l.summary} · {l.minutes} min</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <aside>
            <AudioPlayer src={`/audio/modules/${mod.slug}.mp3`} title="Module overview" note="2 minute audio intro" />
            {videos.length > 0 && (
              <div className="side pop" style={{ marginTop: 20 }}>
                <h3>Watch next</h3>
                {videos.map((v) => (
                  <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer" className="vid">
                    <i><svg width="14" height="14" viewBox="0 0 24 24"><path d="M6 3 21 12 6 21Z" fill="#fff" /></svg></i>
                    <span>{v.title}<br /><small style={{ color: "var(--muted)", fontWeight: 500 }}>Opens YouTube ↗</small></span>
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>

        {mod.quiz.length > 0 && (
          <section id="quiz" style={{ marginTop: 70, scrollMarginTop: 90 }}>
            <h2 className="section-title" style={{ fontSize: 34, display: "flex", gap: 12, alignItems: "center" }}>
