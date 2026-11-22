import PropTypes from "prop-types";
import { useState } from "react";
import HeroShell from "./HeroShell";
import { Split, Typewriter, Counter, Stagger, TEAM, TECH_MARQUEE } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

const WORDS = ["Web Development", "Mobile Solutions", "Enterprise Software", "Cloud Engineering"];
const TABS = ["Architecture", "Telemetry", "Build Stream", "Team Roster"];
const BUILD = [
  "$ vite build",
  "✓ modules transformed",
  "dist/assets/index.css   gzip ✓",
  "dist/assets/index.js    gzip ✓",
  "✓ GSAP physics engine initialized",
  "✓ built — ready to ship",
];

export default function HomeHero({ onNavigate = () => {} }) {
  const [tab, setTab] = useState(0);
  return (
    <HeroShell
      pin
      eyebrow="Full-Stack · Mobile · Cloud · AI Studio"
      title={
        <>
          <Split text="Empowering Innovation through" grad />
          <br />
          <span className="text-gradient"><Typewriter words={WORDS} /></span>
        </>
      }
      sub="Welcome to Developer's Paradise — a team of tech enthusiasts delivering cutting-edge software solutions to redefine digital experiences."
      actions={
        <>
          <button type="button" className="hero-btn primary" onClick={() => onNavigate("/contact")}>Start Your Project</button>
          <button type="button" className="hero-btn" onClick={() => onNavigate("/services")}>Explore Services</button>
        </>
      }
      marquee={TECH_MARQUEE}
      build={({ root, q, scrub, desktop, gsap }) => {
        const tilt = root.querySelector(".stage-tilt");
        gsap.set(tilt, { transformPerspective: 1400 });
        const rx = gsap.quickTo(tilt, "rotationX", { duration: 0.9, ease: "power3" });
        const ry = gsap.quickTo(tilt, "rotationY", { duration: 0.9, ease: "power3" });

        let rect = null;
        const updateRect = () => { if (root) rect = root.getBoundingClientRect(); };
        updateRect();
        window.addEventListener("resize", updateRect, { passive: true });

        const move = (e) => {
          if (!rect) updateRect();
          if (!rect || rect.width === 0) return;
          ry(((e.clientX - rect.left) / rect.width - 0.5) * 16);
          rx(-((e.clientY - rect.top) / rect.height - 0.5) * 12);
        };
        const leave = () => {
          rx(0);
          ry(0);
        };
        root.addEventListener("pointermove", move, { passive: true });
        root.addEventListener("pointerleave", leave, { passive: true });

        // stage takes over the hero while the copy dissolves with smooth 60-120fps transform
        scrub.to(q(".stage-card"), {
          scale: desktop ? 1.14 : 1.02,
          yPercent: desktop ? -44 : -10,
          duration: 0.7,
          ease: "power2.out"
        }, 0.05);
        scrub.to(q(".stage-glow"), {
          scale: 2.2,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out"
        }, 0.05);

        // Velvety handoff to downstream sections near the end of pin
        if (desktop) {
          scrub.to(q(".stage-card"), {
            autoAlpha: 0.18,
            yPercent: -56,
            duration: 0.25,
            ease: "power1.in"
          }, 0.75);
        }

        return () => {
          root.removeEventListener("pointermove", move);
          root.removeEventListener("pointerleave", leave);
          window.removeEventListener("resize", updateRect);
        };
      }}
    >
      <div className="stage-glow" />
      <div className="stage-card">
        <div className="stage-tilt hero-glass">
          <div className="con-bar" role="tablist" aria-label="Studio console">
            <i className="dot" style={{ background: "#fb7185" }} />
            <i className="dot" style={{ background: "#fbbf24" }} />
            <i className="dot" style={{ background: "#34d399" }} />
            {TABS.map((t, i) => (
              <button key={t} type="button" role="tab" aria-selected={tab === i}
                className={`con-tab ${tab === i ? "on" : ""}`} onClick={() => setTab(i)}>{t}</button>
            ))}
          </div>
          <Stagger key={tab} className="con-panel">
            {tab === 0 && (
              <div className="stat-grid">
                <div className="stat"><b><Counter to={7} suffix="+" delay={0.1} /></b><span>Engineers</span></div>
                <div className="stat"><b><Counter to={99.9} decimals={1} suffix="%" delay={0.1} /></b><span>Reliability</span></div>
                <div className="stat"><b><Counter to={12} suffix="+" delay={0.1} /></b><span>Tech Stacks</span></div>
                <div className="stat"><b>Rajkot</b><span>Location</span></div>
              </div>
            )}
            {tab === 1 && [
              ["Compositor Rate", "60 FPS", 100],
              ["API Response", "38 ms", 92],
              ["Core Web Vitals", "100 / 100", 100],
            ].map(([l, v, p]) => (
              <div key={l} className="meter">
                <div className="meter-top"><span>{l}</span><b>{v}</b></div>
                <div className="bar"><div className="bar-fill" style={{ width: `${p}%` }} /></div>
              </div>
            ))}
            {tab === 2 && <pre className="term">{BUILD.map((l, i) => <code key={i}>{l}{"\n"}</code>)}</pre>}
            {tab === 3 && (
              <div className="roster">
                {TEAM.map((m) => (
                  <SafeLink
                    key={m.slug || m.name}
                    to={`/team/${m.slug}`}
                    className="roster-item group text-decoration-none"
                    title={`${m.name} — ${m.role}`}
                  >
                    <span className="ava overflow-hidden relative">
                      <img
                        src={m.avatar || `/images/avatars/${m.slug}-sm.webp`}
                        alt={m.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <span className="ava-fallback absolute inset-0 flex items-center justify-center font-bold text-xs text-white z-0">
                        {m.ini}
                      </span>
                    </span>
                    <small className="group-hover:text-[#EC4899] transition-colors">{m.name.split(" ")[0]}</small>
                  </SafeLink>
                ))}
              </div>
            )}
          </Stagger>
        </div>
      </div>
    </HeroShell>
  );
}

HomeHero.propTypes = {
  onNavigate: PropTypes.func,
};
