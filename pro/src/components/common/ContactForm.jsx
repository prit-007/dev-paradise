// components/common/ContactForm.jsx
import { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from '@/lib/gsap';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ className = '' }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [focusError] = useState(null);

  useEffect(() => {
    if (focusError) {
      const el = document.getElementById(focusError);
      if (el) el.focus();
    }
  }, [focusError]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = useCallback(() => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid && formRef.current) {
      gsap.killTweensOf(formRef.current);
      gsap.fromTo(
        formRef.current,
        { x: -7 },
        { x: 7, duration: 0.07, repeat: 4, yoyo: true, ease: 'power2.inOut', clearProps: 'x' },
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
          honeypot: '',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
    <form ref={formRef} noValidate onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
          Your Name <span className="text-[#EC4899]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          aria-invalid={errors.name ? 'true' : 'false'}
          placeholder="e.g. Alex Morgan"
          className={`w-full px-4 py-3.5 rounded-xl border ${
            errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
          } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
          Email Address <span className="text-[#EC4899]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          aria-invalid={errors.email ? 'true' : 'false'}
          placeholder="alex@example.com"
          className={`w-full px-4 py-3.5 rounded-xl border ${
            errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
          } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
          Message <span className="text-[#EC4899]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          aria-invalid={errors.message ? 'true' : 'false'}
          placeholder="Tell us about your project, tech requirements, and timeline..."
          className={`w-full px-4 py-3.5 rounded-xl border ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
          } focus:bg-white dark:focus:bg-slate-800 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none`}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" aria-live="assertive" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field for spam protection */}
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }} />

      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full bg-[#0891B2] hover:bg-[#0E7490] active:scale-[0.98] disabled:bg-slate-300 text-white py-4 px-6 rounded-full font-heading font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>{submitStatus === 'submitting' ? 'Sending\u2026' : 'Send Message'}</span>
        <Send className="h-4 w-4" />
      </button>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
          <span className="text-sm font-medium">Thank you! We&rsquo;ve received your message and will get back to you soon.</span>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 flex items-center gap-3">
          <span className="h-5 w-5 text-red-600 shrink-0">&#9888;</span>
          <span className="text-sm font-medium">Failed to send. Please try again.</span>
        </div>
      )}
    </form>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
};
