import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHero, Marquee } from "./heroKit";
import PropTypes from 'prop-types';
import "./hero.css";

/**
 * Shared cinematic hero.
 * build({ root, q, intro, scrub, desktop, pinned, gsap }) lets each page add its own
 * intro tweens (intro) and scroll-scrubbed tweens (scrub, timeline length = 1).
 */
export default function HeroShell({
  id, eyebrow, title, sub, actions, children, marquee, bgExtra, build,
  pin = false, align = "center", stageClassName = "",
}) {
  const scope = useHero(({ root, desktop }) => {
    const q = gsap.utils.selector(root);
    const has = (s) => !!root.querySelector(s);
    const pinned = pin && desktop;

    /* ---------- intro ---------- */
    const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
    intro.from(q(".hero-blob"), { scale: 0.3, autoAlpha: 0, duration: 2.4, stagger: 0.18 }, 0);
    intro.from(q(".hero-grid"), { autoAlpha: 0, scale: 1.25, duration: 2.2 }, 0);

    const add = (sel, from, to, at) => has(sel) && intro.fromTo(q(sel), from, to, at);
    add(".hero-badge", { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" }, 0.2);

    if (has(".split-char")) {
      intro.fromTo(
        q(".split-char"),
        { yPercent: 125, rotate: 6, autoAlpha: 0 },
        { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 1.2, stagger: { each: 0.025 }, ease: "expo.out" },
        0.35
      );
      if (has(".hero-title .text-gradient")) {
        intro.fromTo(
          q(".hero-title .text-gradient"),
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 1.0, ease: "power3.out" },
          0.55
        );
      }
    } else if (has(".hero-title")) {
      intro.fromTo(
        q(".hero-title"),
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: "power4.out" },
        0.35
      );
    }

    add(".hero-sub", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1.0, ease: "power3.out" }, 0.65);
    add(".hero-actions > *", { autoAlpha: 0, y: 20, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.1, ease: "back.out(1.4)" }, 0.85);
    add(".hero-stage", { autoAlpha: 0, y: 65, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.3, ease: "power4.out" }, 0.9);
    add(".hero-marquee", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2 }, 1.3);
    add(".hero-cue", { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 1 }, 1.4);

    /* ---------- scroll scrub (timeline length = 1) ---------- */
    const scrub = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: pinned ? "+=140%" : "bottom top",
        scrub: 0.8,
        pin: pinned,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });
    scrub.to({}, { duration: 1 }, 0);
    scrub.to(q(".hero-blob"), { yPercent: (i) => -30 - i * 15, scale: 1.3, duration: 1 }, 0);
    scrub.to(q(".hero-grid"), { yPercent: 12, duration: 1 }, 0);
    scrub.fromTo(q(".hero-progress"), { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);
    scrub.to(q(".hero-cue"), { autoAlpha: 0, duration: 0.08 }, 0);
    scrub.to(q(".hero-marquee"), { autoAlpha: 0, duration: 0.15 }, 0);
    scrub.to(q(".hero-copy"), {
      yPercent: -22, scale: 0.92, autoAlpha: 0, duration: 0.35, ease: "power2.inOut"
    }, pinned ? 0.02 : 0.4);

    if (pinned) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }

    /* ---------- pointer spotlight + blob parallax ---------- */
    let rect = null;
    const updateRect = () => { if (root) rect = root.getBoundingClientRect(); };
    updateRect();
    window.addEventListener("resize", updateRect, { passive: true });

    const mx = gsap.quickTo(root, "--mx", { duration: 0.9, ease: "power3" });
    const my = gsap.quickTo(root, "--my", { duration: 0.9, ease: "power3" });
    const movers = q(".hero-blob").map((b, i) => ({
      x: gsap.quickTo(b, "x", { duration: 1.6, ease: "power3" }),
      y: gsap.quickTo(b, "y", { duration: 1.6, ease: "power3" }),
      d: (i + 1) * 70,
    }));
    const onMove = (e) => {
      if (!rect) updateRect();
      if (!rect || rect.width === 0) return;
      const nx = (e.clientX - rect.left) / rect.width, ny = (e.clientY - rect.top) / rect.height;
      mx(nx * 100); my(ny * 100);
      movers.forEach((m) => { m.x((nx - 0.5) * m.d); m.y((ny - 0.5) * m.d); });
    };
    const onLeave = () => {
      mx(50);
      my(35);
      movers.forEach((m) => { m.x(0); m.y(0); });
    };
    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave, { passive: true });

    const extra = build?.({ root, q, intro, scrub, desktop, pinned, gsap });
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", updateRect);
      extra?.();
    };
  });

  return (
    <section ref={scope} id={id} className={`hero hero-${align}`} style={{ "--mx": 50, "--my": 35 }}>
      <div className="hero-progress" aria-hidden="true" />
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob b1" /><span className="hero-blob b2" /><span className="hero-blob b3" />
        <div className="hero-grid" /><div className="hero-spot" /><div className="hero-grain" />
        {bgExtra}
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          {eyebrow && <span className="hero-badge hero-in"><i className="hero-dot" />{eyebrow}</span>}
          <h1 className="hero-title">{title}</h1>
          {sub && <p className="hero-sub hero-in">{sub}</p>}
          {actions && <div className="hero-actions">{actions}</div>}
        </div>
        {children && <div className={`hero-stage hero-in ${stageClassName}`}>{children}</div>}
      </div>
      {marquee && <Marquee className="hero-marquee hero-in" items={marquee} />}
      <div className="hero-cue hero-in" aria-hidden="true"><span /></div>
    </section>
  );
}

HeroShell.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.node,
  title: PropTypes.node,
  sub: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node,
  marquee: PropTypes.node,
  bgExtra: PropTypes.node,
  build: PropTypes.func,
  pin: PropTypes.bool,
  align: PropTypes.string,
  stageClassName: PropTypes.string,
};
