import HeroShell from "./HeroShell";
import { Split } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

export default function AboutHero() {
  return (
    <HeroShell
      eyebrow="Engineering Excellence · Darshan University, Rajkot"
      title={<Split text="Developer's Paradise" grad />}
      sub="Crafting Excellence, Delivering Perfection. 7 engineers dedicated to modern digital transformation."
      actions={
        <>
          <SafeLink to="/contact" className="hero-btn primary">Work With Us</SafeLink>
          <SafeLink to="/team" className="hero-btn">Meet The Team</SafeLink>
        </>
      }
      build={({ root, q, intro, scrub, gsap }) => {
        const bp = root.querySelector(".stage-card.bp");
        if (bp) {
          gsap.set(bp, { transformPerspective: 1200 });
          const rx = gsap.quickTo(bp, "rotationX", { duration: 0.9, ease: "power3" });
          const ry = gsap.quickTo(bp, "rotationY", { duration: 0.9, ease: "power3" });

          let rect = null;
          const updateRect = () => { if (root) rect = root.getBoundingClientRect(); };
          updateRect();
          window.addEventListener("resize", updateRect, { passive: true });

          const move = (e) => {
            if (!rect) updateRect();
            if (!rect || rect.width === 0) return;
            ry(((e.clientX - rect.left) / rect.width - 0.5) * 12);
            rx(-((e.clientY - rect.top) / rect.height - 0.5) * 10);
          };
          const leave = () => {
            rx(0);
            ry(0);
          };
          root.addEventListener("pointermove", move, { passive: true });
          root.addEventListener("pointerleave", leave, { passive: true });
        }

        intro.fromTo(q(".bp-line"), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.2, stagger: 0.18, ease: "power2.inOut" }, 1.2);
        intro.from(q(".bp-node"), { scale: 0, duration: 1, stagger: 0.25, ease: "back.out(3)" }, 1.8);
        intro.from(q(".bp-text"), { autoAlpha: 0, y: 10, duration: 0.9, stagger: 0.2 }, 2.1);
        intro.from(q(".bp-stat"), { autoAlpha: 0, y: 40, duration: 1, stagger: 0.12 }, 1.9);
        scrub.to(q(".bp-stat"), { yPercent: (i) => -14 * (i + 1), duration: 1 }, 0);
        scrub.to(q(".bp-svg"), { scale: 1.08, duration: 1 }, 0);

        return () => {
          if (bp) {
            root.removeEventListener("pointermove", move);
            root.removeEventListener("pointerleave", leave);
            window.removeEventListener("resize", updateRect);
          }
        };
      }}
    >
      <div className="stage-card hero-glass bp">
        <div className="bp-head">
          <span className="bp-logo">DP</span>
          <code>darshan-university://rajkot.gujarat.in</code>
          <span className="pill"><i className="ping" aria-hidden="true" />Active Research &amp; Development Laboratory</span>
        </div>
        <svg className="bp-svg" viewBox="0 0 900 230" role="img"
          aria-label="Blueprint timeline: founded January 2024, seven engineers, goal for 2026">
          <rect className="bp-line" pathLength="1" x="8" y="8" width="884" height="214" rx="22" />
          <path className="bp-line" pathLength="1" d="M60 120 H840" />
          <path className="bp-line" pathLength="1" d="M60 100 V140 M450 100 V140 M840 100 V140" />
          {[60, 450, 840].map((x) => <circle key={x} className="bp-node" cx={x} cy="120" r="9" />)}
          <text className="bp-text" x="60" y="80" textAnchor="start">JAN 2024</text>
          <text className="bp-sub bp-text" x="60" y="172" textAnchor="start">Founded in Rajkot</text>
          <text className="bp-text" x="450" y="80" textAnchor="middle">7 ENGINEERS</text>
          <text className="bp-sub bp-text" x="450" y="172" textAnchor="middle">100% in-house</text>
          <text className="bp-text" x="840" y="80" textAnchor="end">2026</text>
          <text className="bp-sub bp-text" x="840" y="172" textAnchor="end">Prominent player in tech</text>
        </svg>
        <div className="stat-grid three">
          {[["Founding Vision", "Software as Craft"], ["Engineering Edge", "Multi-Stack Mastery"], ["Client Commitment", "Zero Middlemen"]].map(([k, v]) => (
            <div key={k} className="stat bp-stat"><span>{k}</span><b className="sm">{v}</b></div>
          ))}
        </div>
      </div>
    </HeroShell>
  );
}
