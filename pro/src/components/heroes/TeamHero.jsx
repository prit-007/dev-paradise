import PropTypes from "prop-types";
import HeroShell from "./HeroShell";
import { Split, TEAM } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

export default function TeamHero({ onSelect = () => {} }) {
  return (
    <HeroShell
      eyebrow="7 Visionary Creators · Darshan University"
      title={<Split text="Our Extraordinary Team" grad />}
      sub="100% in-house engineering. Tap an avatar to explore their profile."
      actions={
        <>
          <SafeLink to="/about" className="hero-btn primary">Our Story & Heritage</SafeLink>
          <SafeLink to="/contact" className="hero-btn">Work With Us</SafeLink>
        </>
      }
      build={({ root, q, intro, scrub, gsap }) => {
        const els = q(".t-avatar");
        const mid = (els.length - 1) / 2;
        const updateSize = () => {
          if (!root) return;
          const g = Math.min(150, (root.clientWidth - 96) / (els.length - 1));
          root.style.setProperty("--sz", `${g * 0.76}px`);
        };
        updateSize();
        window.addEventListener("resize", updateSize, { passive: true });

        const gap = Math.min(150, (root.clientWidth - 96) / (els.length - 1));
        gsap.set(els, { x: 0, y: 0, scale: 0.2, autoAlpha: 0 });
        // fan out from a single stack into an arc
        intro.to(els, {
          x: (i) => (i - mid) * gap, y: (i) => Math.pow(i - mid, 2) * (gap * 0.09),
          rotate: (i) => (i - mid) * 6, scale: 1, autoAlpha: 1,
          duration: 1.8, ease: "expo.out", stagger: { each: 0.09, from: "center" },
        }, 1.2);
        // scroll flattens the arc into a confident row
        scrub.to(els, { y: (i) => -24 - Math.abs(i - mid) * 6, rotate: 0, duration: 1 }, 0);
        return () => {
          window.removeEventListener("resize", updateSize);
          root.style.removeProperty("--sz");
        };
      }}
    >
      <div className="team-fan">
        {TEAM.map((m) => (
          <SafeLink
            key={m.slug || m.name}
            to={`/team/${m.slug}`}
            className="t-avatar group"
            onClick={() => onSelect(m)}
            aria-label={`View ${m.name}'s profile`}
            title={`${m.name} — ${m.role}`}
          >
            <span className="t-inner">
              <img
                src={m.photo || m.avatar}
                alt={m.name}
                loading="eager"
                decoding="async"
                className="t-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <b>{m.ini}</b>
              <em>
                {m.name.split(" ")[0]}
                <small>{m.role}</small>
              </em>
            </span>
          </SafeLink>
        ))}
      </div>
    </HeroShell>
  );
}

TeamHero.propTypes = {
  onSelect: PropTypes.func,
};
