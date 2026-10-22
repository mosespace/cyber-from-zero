import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import PathTrail from "@/components/PathTrail";
import { Blob, Plus, Squiggle } from "@/components/shapes";

export const metadata: Metadata = { title: "Learning path" };

export default function PathPage() {
