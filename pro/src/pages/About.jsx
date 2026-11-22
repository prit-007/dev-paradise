// pages/About.jsx
import React, { useState, useRef } from 'react';
import SafeLink from '@/components/common/SafeLink';
import {
  MapPin,
  Code,
  Send,
  CheckCircle2,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from '@/lib/gsap';
import AboutHero from '@/components/heroes/AboutHero';
import { teamMembers } from '@/data/teamMembers';
import { TeamAvatar } from '@/pages/Team';
import SEO from '@/components/SEO';

const About = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [formStatus, setFormStatus] = useState('idle');

  // Custom validation with robust form shake animation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (formRef.current) {
        gsap.killTweensOf(formRef.current);
        gsap.fromTo(
          formRef.current,
          { x: -8 },
          { x: 8, duration: 0.07, repeat: 5, yoyo: true, ease: 'power2.inOut', clearProps: 'x' }
        );
      }
      return;
    }

    setFormStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#FDF2F8] dark:bg-slate-950 transition-colors duration-300">
      <SEO
        title="About Us — Studio Blueprint"
        description="Learn about Developer's Paradise, our team, mission, engineering principles, and heritage at Darshan University, Rajkot."
      />

      <AboutHero />

      {/* Who We Are Section */}
      <section className="py-24 bg-white dark:bg-slate-900/60 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="who-we-are-card bg-gradient-to-br from-pink-50/60 to-cyan-50/60 dark:from-slate-900 dark:to-slate-850 p-8 sm:p-12 rounded-3xl border border-pink-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#EC4899] flex items-center justify-center text-white shadow-xs">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                Who We Are
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              We are a dynamic group of skilled engineers studying at Darshan University, Rajkot, Gujarat, India.
              Our passion for technology and innovation drives us to create exceptional software solutions that make a difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-pink-200/60 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#0891B2] shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Rajkot, Gujarat</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-[#EC4899] shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Modern Full-Stack</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Client-First Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roster Section with Real Pictures */}
      <section className="py-28 bg-[#FDF2F8] dark:bg-slate-950 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="neo-badge mb-3">Engineers & Creators</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-[-0.02em] mb-4">
              Meet the Team Behind Developer&apos;s Paradise
            </h2>
            <p className="font-sans text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate problem solvers bringing diverse expertise across web, mobile, architecture, and systems engineering.
            </p>
          </div>

          <div className="about-team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.slug || member.name}
                className="about-team-card relative min-w-0 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-8 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 text-[#831843] dark:text-pink-300 border border-pink-200 dark:border-pink-900/50">
                      {member.specialty.split('&')[0]}
                    </span>
                    <SafeLink
                      to={`/team/${member.slug}`}
                      className="w-14 h-14 rounded-2xl overflow-hidden shadow-xs border-2 border-white dark:border-slate-800 ring-1 ring-pink-200 dark:ring-slate-700 group-hover:scale-105 transition-transform duration-300"
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <TeamAvatar
                        src={member.avatar || member.image}
                        thumbnail={member.thumbnail}
                        size="sm"
                        alt={member.name}
                        fallbackInitials={member.name.split(' ').map(n => n[0]).join('')}
                      />
                    </SafeLink>
                  </div>

                  <SafeLink to={`/team/${member.slug}`} className="block group-hover:text-[#EC4899] transition-colors">
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <span>{member.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#EC4899]" />
                    </h3>
                  </SafeLink>
                  <p className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400 mb-3">
                    {member.title}
                  </p>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {member.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800 text-slate-400">
                  <SafeLink
                    to={`/team/${member.slug}`}
                    className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400 hover:underline"
                  >
                    View Profile →
                  </SafeLink>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.socialLinks?.linkedin || "#linkedin"}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 transition-colors p-1"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socialLinks?.github || "#github"}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="about-contact-section py-28 bg-white dark:bg-slate-900/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="about-contact-box rounded-3xl bg-[#FDF2F8]/60 dark:bg-slate-900 border border-pink-200/90 dark:border-slate-800 p-8 sm:p-14 shadow-xs">
            <div className="text-center mb-10">
              <span className="neo-badge mb-3">Inquire Directly</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2">
                Get in Touch With Our Team
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ready to transform your tech roadmap? Send us a message and we will respond promptly.
              </p>
            </div>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {/* noValidate added so custom JS validation and GSAP shake animation fire smoothly */}
            <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="about-name" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Your Name
                </label>
                <input
                  id="about-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="about-email" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Email Address
                </label>
                <input
                  id="about-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="about-message" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="about-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project vision..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#EC4899] hover:bg-pink-600 active:scale-[0.98] text-white font-heading font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
