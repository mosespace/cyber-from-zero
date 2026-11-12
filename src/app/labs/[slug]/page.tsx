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
      <header className="lesson-top">
        <div className="crumbs"><Link href="/labs">Labs</Link> / Lab {i + 1}</div>
        <h1>{lab.title}</h1>
        <div className="meta">
          <span className="pill" style={{ background: lab.color }}>{lab.moduleTitle}</span>
          <span className="pill">{lab.level}</span>
          <span className="pill">{lab.minutes} min</span>
        </div>
        <p className="lede" style={{ marginTop: 16 }}>{lab.summary}</p>
      </header>
      <Markdown>{lab.body}</Markdown>
      <nav className="pager">
        <Link href="/labs" className="pop"><small>← All labs</small><b>Back to the list</b></Link>
        {next && <Link href={`/labs/${next.slug}`} className="pop next"><small>Next lab →</small><b>{next.title}</b></Link>}
      </nav>
      <div style={{ height: 90 }} />
    </div>
  );
}
