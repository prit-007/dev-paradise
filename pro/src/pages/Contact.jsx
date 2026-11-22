// pages/Contact.jsx
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import SEO from '@/components/SEO';
import ContactHero from '@/components/heroes/ContactHero';

const Contact = () => {
  const containerRef = useRef(null);
  const formCardRef = useRef(null);
  const statusRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [focusError, setFocusError] = useState(null);

  useEffect(() => {
    if (focusError) {
      const el = document.getElementById(focusError);
      if (el) el.focus();
    }
  }, [focusError]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = useCallback(() => {
    const newErrors = { name: '', email: '', message: '' };
    let firstErrorField = null;
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'message';
    }

    setErrors(newErrors);
    setFocusError(firstErrorField);

    if (!isValid && formCardRef.current) {
      gsap.killTweensOf(formCardRef.current);
      gsap.fromTo(
        formCardRef.current,
        { x: -7 },
        { x: 7, duration: 0.07, repeat: 4, yoyo: true, ease: 'power2.inOut', clearProps: 'x' }
      );
    }

    return isValid;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('submitting');

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
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setErrors({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDF2F8] dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <SEO
        title="Contact Us — Direct Engineering Consultation"
        description="Get in touch with the Developer's Paradise engineering team. Direct consultation, 24-hour response SLA, and project scoping."
      />

      <div className="max-w-5xl mx-auto">
        <ContactHero />

        {/* Main Form & Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Studio Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-8 shadow-xs">
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Developer&apos;s Paradise Studio
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200/80 dark:border-pink-900/50 text-[#EC4899] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Inquiry</p>
                    <a
                      href="mailto:tech.developersteam.service@gmail.com"
                      className="font-mono text-sm text-slate-800 dark:text-slate-200 hover:text-[#EC4899] dark:hover:text-pink-400 transition-colors break-all"
                    >
                      tech.developersteam.service@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-900/50 text-[#0891B2] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Direct Phone</p>
                    <a
                      href="tel:+919426284943"
                      className="font-mono text-sm text-slate-800 dark:text-slate-200 hover:text-[#0891B2] dark:hover:text-cyan-400 transition-colors"
                    >
                      +91 94262 84943
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Studio Headquarters</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      Darshan University, Rajkot-Morbi Highway, Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Response Window</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      Under 24 hours · Monday through Saturday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div ref={formCardRef} className="rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-xs">
              <div
                ref={statusRef}
                aria-live="polite"
                className={`mb-6 text-sm font-medium ${
                  submitStatus === 'success'
                    ? 'p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-2'
                    : 'sr-only'
                }`}
              >
                {submitStatus === 'success' && (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>Thank you! We&apos;ve received your message and will get back to you soon.</span>
                  </>
                )}
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Full Name <span className="text-[#EC4899]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    placeholder="e.g. Jessica Taylor"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800'
                    } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Email Address <span className="text-[#EC4899]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    placeholder="jessica@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800'
                    } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Message <span className="text-[#EC4899]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    placeholder="Briefly describe your objectives, tech requirements, and target timeline..."
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800'
                    } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-[#0891B2] hover:bg-[#0E7490] active:scale-[0.98] disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white py-4 px-6 rounded-full font-heading font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{submitStatus === 'submitting' ? 'Sending…' : 'Send Message'}</span>
                  <Send className="h-4 w-4" />
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
