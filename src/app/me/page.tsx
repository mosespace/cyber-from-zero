import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import DashboardClient from "@/components/DashboardClient";

export const metadata: Metadata = { title: "Your progress" };

export default function Me() {
  const mods = getModules().map((m) => ({
    slug: m.slug,
    title: m.title,
    color: m.color,
    ids: m.lessons.map((l) => `${m.slug}/${l.slug}`),
  }));
  return (
    <div className="container">
      <div className="page-head">
        <span className="eyebrow">
          <i /> Dashboard
        </span>
        <h1>Your progress</h1>
      </div>
      <DashboardClient modules={mods} />
      <div style={{ height: 90 }} />
    </div>
  );
}
