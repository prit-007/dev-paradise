import HeroShell from "./HeroShell";
import { Split, TECH_MARQUEE } from "./heroKit";
import { useState, useEffect } from "react";
import SafeLink from "@/components/common/SafeLink";

const PILLARS = [
  { n: "Angular", m: "Ng", c: "#ec4899", s: "4 projects", d: "Real Estate · Meet's Fashion · Planty · Search Optimate" },
  { n: "ReactJS", m: "Re", c: "#22d3ee", s: "2 projects", d: "Make My Travel · The Trailer Flix" },
  { n: ".NET Core", m: ".N", c: "#8b5cf6", s: "1 project", d: "Employee UMS" },
  { n: "Flutter", m: "Fl", c: "#38bdf8", s: "1 project", d: "Employee PRO" },
];

const glow = (e) => {
  const el = e.currentTarget;
  if (!el._rect) {
    el._rect = el.getBoundingClientRect();
  }
  el.style.setProperty("--px", `${e.clientX - el._rect.left}px`);
  el.style.setProperty("--py", `${e.clientY - el._rect.top}px`);
};

const clearGlow = (e) => {
  e.currentTarget._rect = null;
};

export default function ServicesHero() {
  const [finePointer, setFinePointer] = useState(false);
  useEffect(() => {
    setFinePointer(window.matchMedia?.("(pointer: fine)")?.matches ?? false);
  }, []);

  return (
    <HeroShell
      eyebrow="Architectural Stacks & Frameworks"
      title={<Split text="Our Projects & Expertise" grad />}
      sub="Innovative solutions, engineered chapter by chapter across four core engineering stacks."
      actions={
        <>
          <SafeLink to="/portfolio" className="hero-btn primary">Explore Production Work</SafeLink>
          <SafeLink to="/contact" className="hero-btn">Request Custom Build</SafeLink>
        </>
      }
      marquee={TECH_MARQUEE}
      build={({ q, intro, scrub, desktop }) => {
        intro.fromTo(q(".pillar"),
          { y: 140, rotateX: -35, transformPerspective: 1000, autoAlpha: 0 },
          { y: 0, rotateX: 0, autoAlpha: 1, duration: 1.5, stagger: 0.1, ease: "power4.out" }, 1.0);
        scrub.to(q(".pillar"), {
          yPercent: (i) => (desktop ? (i % 2 ? -16 : 16) : -6),
          rotate: (i) => (desktop ? (i - 1.5) * 2.5 : 0),
          duration: 1
        }, 0);
      }}
    >
      <div className="pillars">
        {PILLARS.map((p) => (
          <article
            key={p.n}
            className="pillar"
            style={{ "--c": p.c }}
            onPointerMove={finePointer ? glow : undefined}
            onPointerLeave={finePointer ? clearGlow : undefined}
          >
            <span className="pillar-mono">{p.m}</span>
            <h2>{p.n}</h2>
            <small>{p.s}</small>
            <p>{p.d}</p>
          </article>
        ))}
      </div>
    </HeroShell>
  );
}
