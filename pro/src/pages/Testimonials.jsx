// pages/Testimonials.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import SEO from '@/components/SEO';
import TestimonialsHero from '@/components/heroes/TestimonialsHero';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, NexaFlow',
    company: 'NexaFlow',
    quote:
      "Developer's Paradise transformed our legacy system into a modern, scalable platform. Their attention to detail and communication throughout the project was exceptional.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder, ShopLocal',
    company: 'ShopLocal',
    quote:
      "The mobile app they built for us has increased our customer engagement by 40%. Truly talented team that understands user experience.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1272628395?w=200&q=80',
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Product Manager, DataViz Inc.',
    company: 'DataViz Inc.',
    quote:
      "Professional, deadline-driven, and technically excellent. The .NET enterprise solution they delivered is rock solid in production.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: 4,
    name: 'James Okonkwo',
    role: 'CTO, EduBridge',
    company: 'EduBridge',
    quote:
      "Search Optimate, built by their team, has become the go-to research tool for our students. AI integration was seamless.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1519084714331-4f033f7abf0e?w=200&q=80',
  },
  {
    id: 5,
    name: 'Elena Volkov',
    role: 'Operations Lead, GreenLeaf',
    company: 'GreenLeaf',
    quote:
      "Planty exceeded our expectations. The plant recognition feature works flawlessly across web and mobile. Highly recommended.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'CEO, WanderLux',
    company: 'WanderLux',
    quote:
      "Make My Travel launched on time and under budget. The team's React expertise made all the difference for our booking platform.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500640767716-8c188f774e72?w=200&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Reset interval helper on user interaction to avoid race conditions
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5500);
    }
  }, [next, isPaused]);

  const handleNext = () => {
    next();
    resetInterval();
  };

  const handlePrev = () => {
    prev();
    resetInterval();
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, isPaused]);

  // Kill existing tweens on cardRef before starting a new cross-fade
  useEffect(() => {
    if (cardRef.current) {
      gsap.killTweensOf(cardRef.current);
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.35, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', clearProps: 'y' }
      );
    }
  }, [currentIndex]);

  const current = testimonials[currentIndex];
  const stars = Array.from({ length: 5 }, (_, i) => i < current.rating);

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <SEO
        title="Client Testimonials & Feedback"
        description="Read real client reviews, case feedback, and project results from businesses powered by Developer's Paradise."
      />

      <TestimonialsHero items={testimonials} />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Testimonial Carousel Card */}
        <section aria-label="Client testimonials" className="relative max-w-3xl mx-auto">
          <div
            ref={cardRef}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow p-8 sm:p-14 relative min-h-[380px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-10 w-10 text-pink-200 dark:text-pink-900/60" />
                <div className="flex items-center gap-1 text-amber-400">
                  {stars.map((filled, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${filled ? 'fill-current' : 'text-slate-200 dark:text-slate-700 fill-current'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Star rating"
                    >
                      <path d="M10 2l1 5.592L15.552 8.464 12 10.776l0.976 5.48L10 13.32l-2.976 2.944 0.976-5.48L4.448 8.464 9 7.592 10 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="font-sans text-xl sm:text-2xl italic text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author info & Controls with type="button" */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#EC4899]"
                />
                <div>
                  <div className="font-heading font-bold text-lg text-slate-900 dark:text-white">{current.name}</div>
                  <div className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400">{current.role}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{current.company}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-pink-950/50 text-slate-700 dark:text-slate-300 hover:text-[#EC4899] dark:hover:text-pink-400 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#0891B2] hover:bg-[#0E7490] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={isPaused ? 'Resume testimonial rotation' : 'Pause testimonial rotation'}
                  aria-pressed={isPaused}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Dots with stable key and type="button" */}
            <div className="flex justify-center gap-2 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
              {testimonials.map((t, i) => (
                <button
                  key={`dot-${t.id}`}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(i);
                    resetInterval();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex ? 'w-8 bg-[#EC4899]' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
