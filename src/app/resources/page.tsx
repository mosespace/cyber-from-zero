import type { Metadata } from "next";
import { courses, labs, podcasts, videoChannels, type Resource } from "@/data/resources";

export const metadata: Metadata = { title: "Resources" };

function Section({ title, sub, items, color }: { title: string; sub: string; items: Resource[]; color: string }) {
  return (
    <section className="res-sec">
