import type { Metadata } from "next";
import { courses, labs, podcasts, videoChannels, type Resource } from "@/data/resources";

export const metadata: Metadata = { title: "Resources" };

function Section({ title, sub, items, color }: { title: string; sub: string; items: Resource[]; color: string }) {
  return (
    <section className="res-sec">
      <h2 className="section-title" style={{ fontSize: 36 }}>{title}</h2>
      <p className="lede">{sub}</p>
      <div className="res-grid">
        {items.map((r) => (
          <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="res pop" style={{ ["--c" as string]: color }}>
            <h3>{r.name}</h3>
            <p>{r.blurb}</p>
            <small>Open ↗</small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <div className="container">
      <div className="page-head">
        <span className="eyebrow"><i /> Keep going</span>
        <h1>Resources</h1>
        <p className="lede">Free videos, podcasts, courses and practice labs to go beyond this course.</p>
      </div>
      <Section title="Video channels" sub="Watch and learn from experts on YouTube." items={videoChannels} color="#FF8A6B" />
      <Section title="Podcasts" sub="Great for walks, bus rides and washing up." items={podcasts} color="#B9A2FF" />
      <Section title="Free courses and guides" sub="Go deeper, or prepare for a certificate." items={courses} color="#7CCBFF" />
      <Section title="Practice labs" sub="Hands-on and legal. This is where skills grow." items={labs} color="#27D3A2" />
      <div style={{ height: 90 }} />
