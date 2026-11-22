// pages/Team.jsx
import React, { useState, useRef, useEffect } from 'react';
import SafeLink from '@/components/common/SafeLink';
import PropTypes from 'prop-types';
import { FaTimes, FaQuoteLeft } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';
import { teamMembers } from '@/data/teamMembers';
import SEO, { useSafeNavigate } from '@/components/SEO';
import TeamHero from '@/components/heroes/TeamHero';

export { teamMembers };

const TEAM_QUOTES = [
  {
    quote: "Individually brilliant, collectively unstoppable.",
    author: "Developer's Paradise Team"
  },
  {
    quote: "Great things are never done by one person. They're done by a team of passionate individuals.",
    author: "Steve Jobs"
  },
  {
    quote: "Teamwork makes the dream work — engineered with discipline and passion.",
    author: "Engineering Philosophy"
  }
];

// Reliable image component with initials fallback and micro-avatar support
export const TeamAvatar = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackInitials = "DP",
  isEager = false,
  thumbnail,
  size = "md"
}) => {
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = (size === "sm" && thumbnail) ? thumbnail : (thumbnail || src);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`bg-gradient-to-br from-[#EC4899] to-[#0891B2] flex items-center justify-center font-heading font-black text-white ${className}`}
        aria-label={alt}
      >
        {fallbackInitials}
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading={isEager ? "eager" : "lazy"}
      decoding="async"
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority={isEager ? "high" : "auto"}
    />
  );
};

TeamAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallbackInitials: PropTypes.string,
  isEager: PropTypes.bool,
  thumbnail: PropTypes.string,
  size: PropTypes.string
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useSafeNavigate();
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".team-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".team-grid",
              start: "top 88%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      });

      requestAnimationFrame(() => {
        ScrollTrigger?.refresh?.();
      });
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          ScrollTrigger?.refresh?.();
        });
      }

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  // Smooth modal entrance
  useEffect(() => {
    if (selectedMember && modalRef.current && modalContentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.25, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.95, y: 15, autoAlpha: 0 },
        { scale: 1, y: 0, autoAlpha: 1, duration: 0.35, ease: 'back.out(1.4)', delay: 0.05 }
      );
    }
  }, [selectedMember]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedMember) {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

  // Focus trap for modal accessibility
  useEffect(() => {
    if (!selectedMember) return;
    const closeBtn = modalContentRef.current?.querySelector('[aria-label="Close dialog"]');
    if (closeBtn) closeBtn.focus();

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = modalContentRef.current?.querySelectorAll('button, [href], input, select, textarea');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [selectedMember]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <SEO
        title="Our Team — 7 Core Creators"
        description="Meet the 7 visionary engineers, architects, and designers driving Developer's Paradise at Darshan University, Rajkot."
      />

      <div className="max-w-6xl mx-auto">
        <TeamHero onSelect={setSelectedMember} />

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <SafeLink
              key={member.slug}
              to={`/team/${member.slug}`}
              onClick={() => setSelectedMember(member)}
              className="team-card relative min-w-0 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-7 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between group cursor-pointer block"
            >
              <div>
                {/* Photo & Specialty Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-slate-800 ring-2 ring-pink-100 dark:ring-pink-900 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <TeamAvatar
                      src={member.avatar || member.image}
                      thumbnail={member.thumbnail}
                      alt={member.name}
                      fallbackInitials={member.name.split(' ').map(n => n[0]).join('')}
                      isEager={false}
                    />
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/50 text-[#831843] dark:text-pink-300 border border-pink-200 dark:border-pink-900 text-right leading-tight">
                    {member.specialty.split('&')[0]}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400 mb-3">
                  {member.title}
                </p>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Signature Project Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.projects.map((p) => (
                    <span
                      key={p}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate(`/portfolio?q=${p.toLowerCase()}`);
                      }}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#EC4899] hover:text-[#EC4899] border border-transparent hover:border-[#EC4899] transition-colors cursor-pointer"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="text-[#0891B2] dark:text-cyan-400 font-heading font-semibold flex items-center gap-1 group-hover:underline">
                  View Full Profile <ExternalLink className="w-3 h-3" />
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                  className="font-mono text-slate-400 hover:text-[#EC4899] cursor-pointer p-1"
                  title="Quick View"
                >
                  Quick Bio
                </button>
              </div>
            </SafeLink>
          ))}
        </div>

        {/* Team Quotes Section */}
        <section className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-3xl border border-pink-200/80 dark:border-slate-800 shadow-xs mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FaQuoteLeft className="text-[#EC4899] h-6 w-6" />
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              Team Guiding Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_QUOTES.map((q) => (
              <div key={q.author} className="p-6 rounded-2xl bg-pink-50/50 dark:bg-slate-800/50 border border-pink-100 dark:border-slate-700 flex flex-col justify-between">
                <blockquote className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed mb-4">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="font-heading font-semibold text-xs text-[#831843] dark:text-pink-300 uppercase tracking-wider">
                  — {q.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Quick Bio Modal with z-[100] */}
      {selectedMember && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          onClick={() => setSelectedMember(null)}
        >
          <div
            ref={modalContentRef}
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-8 sm:p-10 shadow-2xl border border-pink-200 dark:border-slate-800 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800 ring-2 ring-pink-200 dark:ring-pink-900 shrink-0">
                <TeamAvatar
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fallbackInitials={selectedMember.name.split(' ').map(n => n[0]).join('')}
                  isEager={true}
                />
              </div>
              <div>
                <h3 id="member-modal-title" className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400 mt-0.5">
                  {selectedMember.title}
                </p>
                <div className="inline-block text-[11px] font-mono text-[#831843] dark:text-pink-300 bg-pink-50 dark:bg-pink-950/50 px-2.5 py-0.5 rounded-full border border-pink-200 dark:border-pink-900 mt-2">
                  {selectedMember.experience} Experience
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <div className="p-4 rounded-xl bg-pink-50/60 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Specialty & Focus
                </span>
                <p className="font-medium text-slate-900 dark:text-white">{selectedMember.specialty}</p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Background & Impact
                </span>
                <p className="leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                  Signature Projects
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.projects.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <SafeLink
                to={`/team/${selectedMember.slug}`}
                onClick={() => setSelectedMember(null)}
                className="font-heading font-semibold text-[#0891B2] dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                Open Full Dedicated Profile Page →
              </SafeLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
