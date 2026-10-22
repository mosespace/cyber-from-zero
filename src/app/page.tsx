import Link from "next/link";
import { getModules, totals } from "@/lib/content";
import { glossary } from "@/data/glossary";
import ModuleCard from "@/components/ModuleCard";
import ContinueCard from "@/components/ContinueCard";
import { Blob, Circle, Dots, Half, HeroArt, Plus, Ring, Squiggle, Star, Triangle, Square, Wave } from "@/components/shapes";

const features = [
  { t: "Learning path", d: "A winding trail that shows exactly what to learn next.", href: "/path", c: "#7CCBFF", s: <Circle size={34} color="#fff" /> },
  { t: "Audio lessons", d: "Every lesson is narrated, so you can learn on the go.", href: "/modules/digital-world", c: "#FF9BC9", s: <Ring size={36} color="#fff" /> },
  { t: "Quizzes", d: "Short quizzes after every module. Earn XP for each win.", href: "/practice", c: "#27D3A2", s: <Star size={36} color="#fff" /> },
  { t: "Flashcards", d: "50+ key words to flip, learn and remember.", href: "/flashcards", c: "#B9A2FF", s: <Square size={34} color="#fff" /> },
  { t: "Streaks and badges", d: "Come back each day, grow your streak, collect badges.", href: "/me", c: "#FF8A6B", s: <Triangle size={34} color="#fff" /> },
  { t: "Glossary", d: "Look up any security word in plain English.", href: "/glossary", c: "#8BE04E", s: <Plus size={34} color="#fff" /> },
];

const topics = ["Networking", "Linux", "Encryption", "Phishing", "Malware", "Web security", "Firewalls", "Ethical hacking", "Incident response", "Careers"];

export default function Home() {
  const mods = getModules();
  const t = totals();
  const flat = mods.flatMap((m) =>
    m.lessons.map((l) => ({ id: `${m.slug}/${l.slug}`, href: `/learn/${m.slug}/${l.slug}`, title: l.title, moduleSlug: m.slug, moduleTitle: m.title, color: m.color })),
  );

  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow"><i /> Free · No experience needed</span>
            <h1>Learn cyber&shy;security <span className="hl">from zero.</span></h1>
            <p className="lede">
              Short lessons in simple English, read-aloud audio, quizzes and flashcards. Go from “what is a computer?” to
              ethical hacking, one small step a day.
            </p>
            <div className="cta-row">
              <Link href="/path" className="btn blue">Start learning →</Link>
              <Link href="/practice" className="btn">Try a quiz</Link>
            </div>
            <div className="hero-facts">
              <div><b>{t.modules}</b><span>modules</span></div>
              <div><b>{t.lessons}</b><span>lessons</span></div>
              <div><b>{t.lessons + t.modules}</b><span>audio narrations</span></div>
              <div><b>{glossary.length}</b><span>flashcards</span></div>
            </div>
            <ContinueCard lessons={flat} />
          </div>
          <HeroArt />
        </div>
      </section>

      <div style={{ overflow: "hidden", padding: "6px 0 10px" }}>
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {topics.map((x) => (
                  <span key={x} style={{ gap: 26 }}>{x}<Star size={22} points={6} color="#FFC93C" outline={false} /></span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section container">
        <h2 className="section-title">How it works</h2>
        <p className="lede">Three simple habits. Do them for ten minutes a day and you will be surprised how fast you grow.</p>
        <div className="how-grid">
          <div className="how pop"><span className="num">1</span><Square size={46} color="#7CCBFF" /><h3>Read or listen</h3><p>Each lesson takes 5 to 9 minutes. Read it, or press play and listen like a podcast.</p></div>
          <div className="how pop"><span className="num">2</span><Triangle size={46} color="#FF9BC9" /><h3>Play with it</h3><p>Try the little widgets, flip flashcards and answer quick questions. Doing beats reading.</p></div>
          <div className="how pop"><span className="num">3</span><Circle size={46} color="#27D3A2" /><h3>Level up</h3><p>Earn XP, keep your streak and collect badges as you climb the path.</p></div>
        </div>
      </section>

      <section className="section container" id="modules">
        <h2 className="section-title">10 modules, basics to pro</h2>
        <p className="lede">Follow them in order, or jump to what you are curious about.</p>
        <div className="mod-grid">
          {mods.map((m) => <ModuleCard key={m.slug} mod={m} />)}
        </div>
      </section>

      <section className="band">
        <Blob className="float" color="#FF9BC9" variant={2} style={{ left: -60, top: 30, width: 190 }} />
        <Half color="#27D3A2" style={{ right: 40, bottom: -4, width: 160 }} />
        <Dots style={{ right: "8%", top: 30, width: 80, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <h2 className="section-title">More than just reading</h2>
          <p className="lede" style={{ color: "#3d3200" }}>Everything you need to actually remember what you learn.</p>
          <div className="feat-grid">
            {features.map((f) => (
              <Link key={f.t} href={f.href} className="feat pop">
                <span className="ft" style={{ ["--c" as string]: f.c }}>{f.s}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <Squiggle color="#FFC93C" style={{ left: "6%", top: 40, width: 160 }} />
        <Triangle className="float" color="#FF6B57" style={{ right: "8%", top: 50, width: 90 }} />
        <Circle className="float" color="#27D3A2" style={{ left: "12%", bottom: 40, width: 70, animationDelay: "-2s" }} />
        <Plus color="#7CCBFF" style={{ right: "18%", bottom: 50, width: 56 }} />
        <div className="container" style={{ position: "relative" }}>
          <h2>Your first lesson takes 6 minutes.</h2>
          <p>No sign-up. No cost. Your progress stays in your browser.</p>
          <Link href="/path" className="btn sun">Open the learning path →</Link>
        </div>
      </section>
      <footer className="footer">Learn to defend. Only test systems you own or have written permission to test.</footer>
    </>
  );
}
