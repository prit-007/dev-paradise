import PropTypes from "prop-types";
import HeroShell from "./HeroShell";
import { Split, Counter } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

const REAL_TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, NexaFlow",
    company: "NexaFlow",
    quote: "Developer's Paradise transformed our legacy system into a modern, scalable platform. Their attention to detail was exceptional."
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, ShopLocal",
    company: "ShopLocal",
    quote: "The mobile app they built increased our customer engagement by 40%. Truly talented team."
  },
  {
    name: "Aisha Patel",
    role: "Product Manager, DataViz Inc.",
    company: "DataViz Inc.",
    quote: "Professional, deadline-driven, and technically excellent. The .NET solution they delivered is rock solid."
  },
];
const STATS = [[8, "Production Deployments"], [100, "Client Satisfaction %"], [7, "Core Architects"], [12, "Tech Stacks"]];

export default function TestimonialsHero({ items = REAL_TESTIMONIALS }) {
  return (
    <HeroShell
      eyebrow="Proven Track Record · 100% Client Satisfaction"
      title={<Split text="What Our Clients Say" grad />}
      sub="Authentic reviews from modern startups to enterprise systems engineered by our team."
      actions={
        <>
          <SafeLink to="/contact" className="hero-btn primary">Start Your Success Story</SafeLink>
          <SafeLink to="/portfolio" className="hero-btn">View Case Studies</SafeLink>
        </>
      }
      build={({ root, q, intro, scrub, desktop, gsap }) => {
        intro.from(q(".q-card"), { y: 160, autoAlpha: 0, scale: 0.85, duration: 1.7, stagger: 0.16 }, 1.0);
        intro.from(q(".star"), { scale: 0, rotate: -120, duration: 0.7, stagger: 0.05, ease: "back.out(3)" }, 1.8);
        // layered depth: pointer + scroll parallax
        const cards = q(".q-card");
        const movers = cards.map((c, i) => ({
          x: gsap.quickTo(c, "x", { duration: 1.2, ease: "power3" }),
          y: gsap.quickTo(c, "y", { duration: 1.2, ease: "power3" }),
          d: (i + 1) * 14,
        }));

        let rect = null;
        const updateRect = () => { if (root) rect = root.getBoundingClientRect(); };
        updateRect();
        window.addEventListener("resize", updateRect, { passive: true });

        const move = (e) => {
          if (!rect) updateRect();
          if (!rect || rect.width === 0) return;
          const nx = (e.clientX - rect.left) / rect.width - 0.5, ny = (e.clientY - rect.top) / rect.height - 0.5;
          movers.forEach((m) => { m.x(nx * m.d * 2); m.y(ny * m.d * 2); });
        };
        const leave = () => {
          movers.forEach((m) => { m.x(0); m.y(0); });
        };
        root.addEventListener("pointermove", move, { passive: true });
        root.addEventListener("pointerleave", leave, { passive: true });
        scrub.to(cards, { yPercent: (i) => (desktop ? -18 * (i + 1) : -8 * (i + 1)), duration: 1 }, 0);
        scrub.to(q(".q-stats"), { yPercent: desktop ? -30 : -14, duration: 1 }, 0);
        return () => {
          root.removeEventListener("pointermove", move);
          root.removeEventListener("pointerleave", leave);
          window.removeEventListener("resize", updateRect);
        };
      }}
    >
      <div className="q-stage">
        {items.slice(0, 3).map((t) => (
          <figure key={t.name} className="q-card hero-glass">
            <div className="stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((s) => <i key={s} className="star">★</i>)}</div>
            {t.quote && <blockquote>&quot;{t.quote}&quot;</blockquote>}
            <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="q-stats hero-glass">
        {STATS.map(([n, l]) => (<div key={l}><b><Counter to={n} suffix={l.includes("%") ? "%" : "+"} /></b><span>{l}</span></div>))}
      </div>
    </HeroShell>
  );
}

TestimonialsHero.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
