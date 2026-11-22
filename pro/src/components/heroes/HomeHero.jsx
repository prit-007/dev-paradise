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
  const [introDone, setIntroDone] = useState(false);

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
      build={({ root, q, intro, scrub, desktop, gsap }) => {
        // --- 3D Interactive Pointer Tilt ---
        const tilt = root.querySelector(".stage-tilt");
        let updateRect = () => {};
        let move = () => {};
        let leave = () => {};

        if (tilt) {
          gsap.set(tilt, { transformPerspective: 1400 });
          const rx = gsap.quickTo(tilt, "rotationX", { duration: 0.9, ease: "power3" });
          const ry = gsap.quickTo(tilt, "rotationY", { duration: 0.9, ease: "power3" });

          let rect = null;
          updateRect = () => { if (root) rect = root.getBoundingClientRect(); };
          updateRect();
          window.addEventListener("resize", updateRect, { passive: true });

          move = (e) => {
            if (!rect) updateRect();
            if (!rect || rect.width === 0) return;
            ry(((e.clientX - rect.left) / rect.width - 0.5) * 16);
            rx(-((e.clientY - rect.top) / rect.height - 0.5) * 12);
          };
          leave = () => {
            rx(0);
            ry(0);
          };
          root.addEventListener("pointermove", move, { passive: true });
          root.addEventListener("pointerleave", leave, { passive: true });
        }

        // --- Choreographed Studio Console Intro ---
        if (intro) {
          // Terminal dots pop in
          intro.fromTo(
            q(".con-bar .dot"),
            { scale: 0, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.08, ease: "back.out(2)" },
            1.02
          );
          // Console tabs stagger in horizontally: Architecture, Telemetry, Build Stream, Team Roster
          intro.fromTo(
            q(".con-tab"),
            { y: -10, autoAlpha: 0, scale: 0.96 },
            { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: "power3.out" },
            1.1
          );
          // 4 Stat cards reveal sequentially: 7+ Engineers, 99.9% Reliability, 12+ Tech Stacks, Rajkot Location
          intro.fromTo(
            q(".con-panel .stat"),
            { y: 26, autoAlpha: 0, scale: 0.93, filter: "blur(6px)" },
            { y: 0, autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.7, stagger: 0.09, ease: "power3.out" },
            1.22
          );
          intro.add(() => setIntroDone(true), 2.1);
        }

        // --- Scroll Scrub Reveal & Pinning Center-Stage Takeover ---
        // As copy dissolves, stage card glides to dominant center focus
        scrub.to(q(".stage-card"), {
          scale: desktop ? 1.09 : 1.02,
          yPercent: desktop ? -32 : -6,
          duration: 0.45,
          ease: "power2.out"
        }, 0.04);
        scrub.to(q(".stage-glow"), {
          scale: 2.1,
          autoAlpha: 0.95,
          duration: 0.45,
          ease: "power2.out"
        }, 0.04);

        // Highlight stats during the center-stage takeover
        scrub.to(q(".stat"), {
          borderColor: "rgba(236,72,153,0.32)",
          duration: 0.35
        }, 0.12);

        // Velvety handoff to downstream sections near the end of pin
        if (desktop) {
          scrub.to(q(".stage-card"), {
            autoAlpha: 0,
            yPercent: -48,
            scale: 0.97,
            duration: 0.12,
            ease: "power2.in"
          }, 0.88);
          scrub.to(q(".stage-glow"), {
            autoAlpha: 0,
            duration: 0.12
          }, 0.88);
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
            <div className="con-dots" aria-hidden="true">
              <i className="dot" style={{ background: "#fb7185" }} />
              <i className="dot" style={{ background: "#fbbf24" }} />
              <i className="dot" style={{ background: "#34d399" }} />
            </div>
            <div className="con-tabs">
              {TABS.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === i}
                  className={`con-tab ${tab === i ? "on" : ""}`}
                  onClick={() => {
                    setIntroDone(true);
                    setTab(i);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <Stagger key={tab} className="con-panel" skipInitial={!introDone}>
            {tab === 0 && (
              <div className="stat-grid">
                <div className="stat">
                  <b><Counter to={7} suffix="+" delay={introDone ? 0.08 : 1.3} duration={introDone ? 1.2 : 1.6} /></b>
                  <span>Engineers</span>
                </div>
                <div className="stat">
                  <b><Counter to={99.9} decimals={1} suffix="%" delay={introDone ? 0.16 : 1.4} duration={introDone ? 1.2 : 1.6} /></b>
                  <span>Reliability</span>
                </div>
                <div className="stat">
                  <b><Counter to={12} suffix="+" delay={introDone ? 0.24 : 1.5} duration={introDone ? 1.2 : 1.6} /></b>
                  <span>Tech Stacks</span>
                </div>
                <div className="stat">
                  <b>Rajkot</b>
                  <span>Location</span>
                </div>
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
