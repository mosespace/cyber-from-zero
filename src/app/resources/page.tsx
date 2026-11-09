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
