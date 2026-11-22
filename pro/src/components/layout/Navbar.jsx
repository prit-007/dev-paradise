// components/layout/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { gsap, useGSAP, getEase } from '@/lib/gsap';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  // Support query parameters and subpaths
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Safe easing fallback with getEase
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from('.nav-content', {
        y: -15,
        opacity: 0,
        duration: 0.8,
        ease: getEase('appleEase', 'power3.out'),
        clearProps: 'all'
      });
    });
    return () => mm.revert();
  }, { scope: navRef });

  // Smooth mobile menu enter AND exit animations
  const toggleMobileMenu = () => {
    if (!isOpen) {
      setIsMenuMounted(true);
      setIsOpen(true);
    } else {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setIsOpen(false);
          setIsMenuMounted(false);
        }
      });
    } else {
      setIsOpen(false);
      setIsMenuMounted(false);
    }
  };

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10, scaleY: 0.96 },
        {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 0.28,
          ease: getEase('appleEase', 'power3.out'),
          transformOrigin: 'top'
        }
      );
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.22,
          stagger: 0.035,
          ease: 'power2.out',
          delay: 0.05
        }
      );
    }
  }, [isOpen]);

  // Close menu on location change with exit animation
  useEffect(() => {
    if (!isOpen || !mobileMenuRef.current) {
      setIsMenuMounted(false);
      return;
    }
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        setIsOpen(false);
        setIsMenuMounted(false);
      }
    });
  }, [location.pathname, isOpen]);

  return (
    <header ref={navRef} className="fixed w-full top-0 z-50 apple-glass border-b border-pink-200/60 dark:border-slate-800 shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav-content flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 rounded-xl py-1 px-2"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#0891B2] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                <span className="font-heading font-black text-white text-sm">DP</span>
              </div>
              <div className="flex items-center">
                <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors">
                  Developer&apos;s Paradise
                </span>
                <span className="inline-block w-2 h-2 ml-1.5 rounded-full bg-[#EC4899] animate-pulse" aria-hidden="true" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <nav className="flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      active
                        ? 'text-[#831843] dark:text-pink-300 font-semibold bg-pink-100/80 dark:bg-pink-950/70 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#EC4899] dark:hover:text-pink-400 hover:bg-pink-50/70 dark:hover:bg-slate-800/60'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#EC4899] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#EC4899] dark:hover:text-pink-400 hover:bg-pink-50/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={`Toggle theme (currently ${resolvedTheme})`}
              title={`Toggle theme (currently ${theme})`}
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-[#EC4899] hover:bg-pink-50 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with smooth enter & exit */}
      {isMenuMounted && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-pink-100/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-4 pt-3 pb-5 shadow-xl"
          id="mobile-menu"
        >
          <nav className="space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-item block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                  isActive(link.path)
                    ? 'text-[#831843] dark:text-pink-300 font-semibold bg-pink-100/80 dark:bg-pink-950/70'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#EC4899] dark:hover:text-pink-400 hover:bg-pink-50/70 dark:hover:bg-slate-800/60'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
