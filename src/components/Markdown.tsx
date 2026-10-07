import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Caesar from "./widgets/Caesar";
import PasswordMeter from "./widgets/PasswordMeter";
import { charts } from "./charts";
import { slugify } from "@/lib/slug";

const widgets = { caesar: Caesar, "password-meter": PasswordMeter } as const;

export default function Markdown({ children }: { children: string }) {
  return (
