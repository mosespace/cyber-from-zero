import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import DashboardClient from "@/components/DashboardClient";

export const metadata: Metadata = { title: "Your progress" };

export default function Me() {
  const mods = getModules().map((m) => ({ slug: m.slug, title: m.title, color: m.color, ids: m.lessons.map((l) => `${m.slug}/${l.slug}`) }));
