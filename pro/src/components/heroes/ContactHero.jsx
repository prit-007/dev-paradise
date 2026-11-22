import { useEffect, useState } from "react";
import HeroShell from "./HeroShell";
import { Split, useMagnetic } from "./heroKit";
import SafeLink from "@/components/common/SafeLink";

const EMAIL = "tech.developersteam.service@gmail.com";

function ISTClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const time = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(now);
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "short", hour: "numeric", hour12: false }).formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday").value;
  const h = Number(parts.find((p) => p.type === "hour").value) % 24;
  const open = wd !== "Sun" && h >= 9 && h < 19;
  return (
    <div className="c-clock" aria-live="off">
      <span className={`pill ${open ? "on" : ""}`}><i className="ping" />{open ? "Studio online" : "Replying next working day"}</span>
      <b>{time}</b><small>IST · Rajkot</small>
    </div>
  );
}

export default function ContactHero() {
  const [copied, setCopied] = useState(false);
  const magnet = useMagnetic(0.3);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2200); } catch { /* clipboard blocked */ }
  };
  return (
    <HeroShell
      eyebrow="Direct Engineering Consultation · SLA < 24h"
      title={<Split text="Get in Touch" grad />}
      sub="Tell us what you want to build. A real engineer replies directly — zero middlemen."
      actions={
        <>
          <SafeLink to="/portfolio" className="hero-btn primary">Explore Portfolio</SafeLink>
          <SafeLink to="/team" className="hero-btn">Meet The Engineers</SafeLink>
        </>
      }
      bgExtra={<div className="radar"><i /><i /><i /></div>}
      build={({ q, intro, gsap }) => {
        const radarTw = gsap.fromTo(q(".radar i"), { scale: 0.2, autoAlpha: 0.5 }, { scale: 1.5, autoAlpha: 0, duration: 4.5, repeat: -1, stagger: 1.5, ease: "power1.out" });
        intro.from(q(".c-card"), { y: 70, autoAlpha: 0, rotateX: -25, transformPerspective: 900, duration: 1.4, stagger: 0.14, ease: "power3.out" }, 1.2);
        return () => radarTw.kill();
      }}
    >
      <ISTClock />
      <div className="contact-cards">
        <button ref={magnet} type="button" className="c-card" onClick={copy} aria-label={`Copy email ${EMAIL}`}>
          <small>Email Inquiry</small><b className="mail">{EMAIL}</b>
          <span>{copied ? "Copied ✓" : "Click to copy"}</span>
        </button>
        <a className="c-card" href="tel:+919426284943">
          <small>Direct Call</small><b>+91 94262 84943</b><span>Mon–Sat · 9AM–7PM IST</span>
        </a>
        <div className="c-card">
          <small>Physical Lab</small><b>Darshan University</b><span>Rajkot, Gujarat, India</span>
        </div>
      </div>
    </HeroShell>
  );
}
