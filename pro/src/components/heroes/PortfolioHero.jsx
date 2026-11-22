import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroShell from "./HeroShell";
import { Split, Counter } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

const WORK = [
  ["Real Estate Platform", "Web", "#ec4899"], ["Meet's Fashion", "Web", "#f472b6"],
  ["Planty", "Web", "#34d399"], ["Search Optimate", "Web", "#22d3ee"],
  ["Make My Travel", "Web", "#38bdf8"], ["The Trailer Flix", "Web", "#ef4444"],
  ["Employee UMS", "Enterprise", "#8b5cf6"], ["Employee PRO", "Mobile", "#6366f1"],
];
const ROWS = [WORK, [...WORK].reverse()];

export default function PortfolioHero({ onExplore = () => {} }) {
  return (
    <HeroShell
      eyebrow="Curated Production Artifacts"
      title={<Split text="Our Work" grad />}
      sub="Production web, mobile and enterprise applications — shipped, deployed, and proven in use."
      actions={
        <>
          <button type="button" className="hero-btn primary" onClick={onExplore}>Browse The Work ↓</button>
          <SafeLink to="/contact" className="hero-btn">Start a Project</SafeLink>
        </>
      }
      stageClassName="pf-stage"
      build={({ root, q, gsap }) => {
        // infinite rows whose speed + skew react to scroll velocity
        const rows = q(".pf-row");
        const tweens = rows.map((row, i) =>
          gsap.fromTo(row, { xPercent: i % 2 ? -50 : 0 }, { xPercent: i % 2 ? 0 : -50, duration: 46 + i * 10, ease: "none", repeat: -1 })
        );
        const skewTo = gsap.quickTo(rows, "skewX", { duration: 0.6, ease: "power2.out" });
        let isScrubbing = false;
        const st = ScrollTrigger.create({
          trigger: root, start: "top top", end: "bottom top",
          onUpdate: (self) => {
            const v = self.getVelocity();
            const s = gsap.utils.clamp(-6, 6, v / -350);
            skewTo(s);
            if (!isScrubbing && Math.abs(v) > 120) {
              isScrubbing = true;
              gsap.to(tweens, { timeScale: 1.35, duration: 0.3, overwrite: "auto" });
            } else if (isScrubbing && Math.abs(v) < 40) {
              isScrubbing = false;
              gsap.to(tweens, { timeScale: 1, duration: 0.6, overwrite: "auto" });
            }
          },
          onScrubComplete: () => {
            skewTo(0);
          }
        });
        return () => {
          st.kill();
          tweens.forEach((t) => t.kill());
        };
      }}
    >
      <div className="pf-meta">
        <b className="pf-big"><Counter to={8} /></b>
        <span>Certified Deployed Solutions</span>
        <em>Web Apps · Mobile (Flutter) · .NET Enterprise</em>
      </div>
      <div className="pf-rows" aria-hidden="true">
        {ROWS.map((r, ri) => (
          <div key={ri} className="pf-row">
            {[...r, ...r].map(([n, c, col], i) => (
              <div key={i} className="pf-tile" style={{ "--c": col }}><small>{c}</small><b>{n}</b></div>
            ))}
          </div>
        ))}
      </div>
    </HeroShell>
  );
}

PortfolioHero.propTypes = {
  onExplore: PropTypes.func,
};
