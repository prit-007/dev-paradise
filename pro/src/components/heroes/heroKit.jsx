import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

/** matchMedia-wrapped GSAP scope. Builder only runs when motion is allowed.
 *  Builder may return a cleanup fn (for listeners). mm.revert() kills every tween/trigger. */
export function useHero(build, deps = []) {
  const scope = useRef(null);
  useGSAP(
    () => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, useGSAP);
      }
      const mm = gsap.matchMedia();
      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px)" },
        (ctx) => {
          const { motion, desktop } = ctx.conditions;
          if (!motion) return;
          return build({ root: scope.current, desktop });
        }
      );
      return () => mm.revert();
    },
    { scope, dependencies: deps }
  );
  return scope;
}

/** Masked per-character reveal. `grad` paints a pink→cyan colour ramp across the characters. */
export function Split({ text, mode = "chars", grad = false, className = "" }) {
  const words = text.split(" ");
  const total = [...text.replace(/ /g, "")].length;
  let n = 0;
  return (
    <span className={`split ${grad ? "split-grad" : ""} ${className}`} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} aria-hidden="true">
          <span className="split-word">
            {mode === "chars" ? (
              [...w].map((c, ci) => (
                <span key={ci} className="split-char" style={{ "--t": total > 1 ? n++ / (total - 1) : 0 }}>
                  {c}
                </span>
              ))
            ) : (
              <span className="split-char" style={{ "--t": 0 }}>{w}</span>
            )}
          </span>
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

Split.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.string,
  grad: PropTypes.bool,
  className: PropTypes.string,
};

export function Typewriter({ words, startDelay = 1800 }) {
  const [text, setText] = useState(words[0] || "");
  useEffect(() => {
    if (prefersReduced()) { setText(words[0]); return; }
    let w = 0, c = words[0]?.length || 0, del = true, t;
    const tick = () => {
      const full = words[w];
      if (!del) {
        c++; setText(full.slice(0, c));
        if (c === full.length) { del = true; t = setTimeout(tick, 1800); return; }
      } else {
        c--; setText(full.slice(0, c));
        if (c === 0) { del = false; w = (w + 1) % words.length; }
      }
      t = setTimeout(tick, del ? 35 : 70);
    };
    t = setTimeout(tick, startDelay);
    return () => clearTimeout(t);
  }, [words, startDelay]);
  return <span className="tw-caret">{text || "\u200b"}</span>;
}

Typewriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  startDelay: PropTypes.number,
};

export function Counter({ to, suffix = "", decimals = 0, duration = 2.2, delay = 0.6, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) { el.textContent = to.toFixed(decimals) + suffix; return; }
    const o = { v: 0 };
    const tw = gsap.to(o, {
      v: to, duration, delay, ease: "power3.out",
      onUpdate: () => { el.textContent = o.v.toFixed(decimals) + suffix; },
    });
    return () => tw.kill();
  }, [to, suffix, decimals, duration, delay]);
  return <span ref={ref} className={className}>0{suffix}</span>;
}

Counter.propTypes = {
  to: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  decimals: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  className: PropTypes.string,
};

/** Remount (via key) to replay: targets leaf children (or child items) with blur/stagger, .bar-fill grows. */
export function Stagger({ children, className = "", skipInitial = false, delay = 0 }) {
  const ref = useRef(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (prefersReduced()) return;
    if (skipInitial && isFirst.current) {
      isFirst.current = false;
      return;
    }
    isFirst.current = false;

    const el = ref.current;
    if (!el) return;

    // Look for nested interactive leaf items first (.stat, .meter, .roster-item, .term code)
    const leafItems = el.querySelectorAll(".stat, .meter, .roster-item, .term code");
    const targets = leafItems.length > 0 ? Array.from(leafItems) : Array.from(el.children);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 20, autoAlpha: 0, filter: "blur(6px)", scale: 0.95 },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          scale: 1,
          stagger: 0.08,
          duration: 0.65,
          ease: "power3.out",
          delay,
        }
      );
      const bars = el.querySelectorAll(".bar-fill");
      if (bars.length > 0) {
        gsap.fromTo(
          bars,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "0 50%", duration: 1.2, ease: "expo.out", delay: delay + 0.2 }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [skipInitial, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

Stagger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  skipInitial: PropTypes.bool,
  delay: PropTypes.number,
};

export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "elastic.out(1,.45)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "elastic.out(1,.45)" });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * strength);
      yTo((e.clientY - r.top - r.height / 2) * strength);
    };
    const leave = () => { xTo(0); yTo(0); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, [strength]);
  return ref;
}

export function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (<span key={i} className="marquee-item">{t}<i /></span>))}
      </div>
    </div>
  );
}

Marquee.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

export const TEAM = [
  { slug: "rajvi-adesara", name: "Rajvi Adesara", role: "Team Lead", ini: "RA", avatar: "/images/avatars/rajvi-adesara-sm.webp", photo: "/images/avatars/rajvi-adesara-md.webp" },
  { slug: "vivek-khunt", name: "Vivek Khunt", role: "Senior Developer", ini: "VK", avatar: "/images/avatars/vivek-khunt-sm.webp", photo: "/images/avatars/vivek-khunt-md.webp" },
  { slug: "meet-parekh", name: "Meet Parekh", role: "Creative Developer", ini: "MP", avatar: "/images/avatars/meet-parekh-sm.webp", photo: "/images/avatars/meet-parekh-md.webp" },
  { slug: "prit-vasani", name: "Prit Vasani", role: "Co-Founder", ini: "PV", avatar: "/images/avatars/prit-vasani-sm.webp", photo: "/images/avatars/prit-vasani-md.webp" },
  { slug: "samarth-mehta", name: "Samarth Mehta", role: "Communications", ini: "SM", avatar: "/images/avatars/samarth-mehta-sm.webp", photo: "/images/avatars/samarth-mehta-md.webp" },
  { slug: "nilay-dhandhukiya", name: "Nilay Dhandhukiya", role: "Research", ini: "ND", avatar: "/images/avatars/nilay-dhandhukiya-sm.webp", photo: "/images/avatars/nilay-dhandhukiya-md.webp" },
  { slug: "bhargav-bhagiya", name: "Bhargav Bhagiya", role: "Technical Architect", ini: "BB", avatar: "/images/avatars/bhargav-bhagiya-sm.webp", photo: "/images/avatars/bhargav-bhagiya-md.webp" },
];

export const TECH_MARQUEE = [
  "React", "Angular", "Flutter", ".NET Core", "Node.js", "Express", "MongoDB", "SQL",
  "Firebase", "AWS", "Azure", "Google Cloud", "TypeScript", "Tailwind", "GSAP",
];
