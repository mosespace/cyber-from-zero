import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Caesar from "./widgets/Caesar";
import PasswordMeter from "./widgets/PasswordMeter";
import { charts } from "./charts";
import { slugify } from "@/lib/slug";

const widgets = { caesar: Caesar, "password-meter": PasswordMeter } as const;

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: ({ children }) => <>{children}</>,
          h2: ({ children }) => <h2 id={slugify([children].flat().join(""))}>{children}</h2>,
          table: ({ children }) => (
            <div className="table-wrap">
              <table>{children}</table>
            </div>
          ),
          code({ className, children }) {
            const text = String(children);
            const lang = /language-(\S+)/.exec(className ?? "")?.[1];

            if (lang?.startsWith("chart:")) {
              const Chart = charts[lang.slice(6)];
              return Chart ? <Chart /> : null;
            }
            if (lang?.startsWith("widget:")) {
              const Widget = widgets[lang.slice(7) as keyof typeof widgets];
              return Widget ? <Widget /> : null;
            }
            if (lang || text.includes("\n")) {
              return (
