// src/lib/useShowcase.js — scroll-reveal / tilt / counter / magnetic engine driven by data-attributes
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * data-reveal   blur + rise + scale when entering view
 * data-stagger  children cascade in
 * data-count    "100%", "3+ Years", "2.5x" count up from 0
 * data-tilt     3D tilt toward the pointer
 * data-magnetic button follows the pointer
 * data-progress fixed reading-progress bar
 * .sc-card      pointer spotlight (see showcase.css)
 */
export function useShowcase(deps = []) {
  const scope = useRef(null);
  useGSAP(() => {
    if (!scope.current) return;
    const mm = gsap.matchMedia();
    mm.add({ motion: "(prefers-reduced-motion: no-preference)", fine: "(hover: hover) and (pointer: fine)" }, (ctx) => {
      const { motion, fine } = ctx.conditions;
      if (!motion) return;
      const q = gsap.utils.selector(scope.current);
      const once = (el, start = "top 86%") => ({ trigger: el, start, once: true });

      q("[data-reveal]").forEach((el) =>
        gsap.from(el, { autoAlpha: 0, y: 70, scale: 0.96, filter: "blur(12px)", duration: 1.2, ease: "expo.out", clearProps: "filter", scrollTrigger: once(el) }));
      q("[data-stagger]").forEach((g) =>
        gsap.from(g.children, { autoAlpha: 0, y: 28, scale: 0.94, duration: 0.9, ease: "power3.out", stagger: 0.07, scrollTrigger: once(g, "top 88%") }));
      q("[data-count]").forEach((el) => {
        const m = String(el.dataset.count).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
        if (!m) return;
        const [, pre, num, suf] = m, dec = (num.split(".")[1] || "").length, o = { v: 0 };
        el.textContent = pre + (0).toFixed(dec) + suf;
        gsap.to(o, { v: +num, duration: 1.8, ease: "power3.out", scrollTrigger: once(el, "top 92%"), onUpdate: () => { el.textContent = pre + o.v.toFixed(dec) + suf; } });
      });
      q("[data-progress]").forEach((el) =>
        gsap.to(el, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } }));

      const cleanups = [];
      if (fine) {
        q("[data-tilt], .sc-card").forEach((el) => {
          const tilt = el.hasAttribute("data-tilt");
          const rx = tilt && gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
          const ry = tilt && gsap.quickTo(el, "rotationY", { duration: 0.9, ease: "power3" });
          if (tilt) gsap.set(el, { transformPerspective: 900 });
          const move = (e) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--px", `${e.clientX - r.left}px`);
            el.style.setProperty("--py", `${e.clientY - r.top}px`);
            if (tilt) { ry(((e.clientX - r.left) / r.width - 0.5) * 10); rx(-((e.clientY - r.top) / r.height - 0.5) * 10); }
          };
          const leave = () => tilt && (rx(0), ry(0));
          el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
          cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
        });
        q("[data-magnetic]").forEach((el) => {
          const x = gsap.quickTo(el, "x", { duration: 0.7, ease: "elastic.out(1,.45)" });
          const y = gsap.quickTo(el, "y", { duration: 0.7, ease: "elastic.out(1,.45)" });
          const move = (e) => { const r = el.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * 0.3); y((e.clientY - r.top - r.height / 2) * 0.3); };
          const leave = () => { x(0); y(0); };
          el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
          cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
        });
      }
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cleanups.forEach((c) => c());
    });
    return () => mm.revert();
  }, { scope, dependencies: deps });
  return scope;
}
