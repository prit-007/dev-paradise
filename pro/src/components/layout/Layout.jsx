// components/layout/Layout.jsx
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Feature 6: Accessible Skip to Content Link */}
      <a
        href="#main-content"
        onClick={() => {
          const el = document.getElementById('main-content');
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999] px-4 py-2.5 bg-[#EC4899] text-white font-heading font-semibold text-sm rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC4899] transition-all"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow pt-16 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
