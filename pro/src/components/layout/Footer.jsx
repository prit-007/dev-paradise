// components/layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Testimonials', path: '/testimonials' }
  ];

  const teamMembers = [
    { name: 'Parekh Meet', title: 'CSS Master & Creative UI', slug: 'meet-parekh' },
    { name: 'Vivek Khunt', title: 'Swift Express & Senior Architect', slug: 'vivek-khunt' },
    { name: 'Rajvi Adesara', title: 'Strategic Director & Team Lead', slug: 'rajvi-adesara' },
    { name: 'Nilay Dhandhukiya', title: 'Deep Researcher & Cloud Engineer', slug: 'nilay-dhandhukiya' },
    { name: 'Prit Vasani', title: 'Co-founder & Full-Stack Visionary', slug: 'prit-vasani' },
    { name: 'Samarth Mehta', title: 'Content Strategist & Lead Writer', slug: 'samarth-mehta' },
    { name: 'Bhargav Bhagiya', title: 'Technical Architect & Vishaarat', slug: 'bhargav-bhagiya' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EC4899] to-[#0891B2] flex items-center justify-center font-heading font-black text-white text-base">
                DP
              </div>
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Developer&apos;s Paradise
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering high-impact web applications, cross-platform mobile experiences, and enterprise-grade software from Darshan University, Rajkot.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
              <span>Available for high-impact projects</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <svg className="h-4 w-4 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a
                href="mailto:tech.developersteam.service@gmail.com"
                className="text-slate-300 hover:text-pink-400 transition-colors text-sm break-all font-mono"
              >
                tech.developersteam.service@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-heading font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-pink-400 hover:translate-x-1 inline-block transition-all duration-200 text-sm cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Roster */}
          <div>
            <h4 className="text-base font-heading font-semibold text-white uppercase tracking-wider mb-5">
              Our Core Team
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug || member.name}
                  to={`/team/${member.slug}`}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-pink-500/40 transition-all duration-200 group block"
                >
                  <p className="text-pink-400 group-hover:text-pink-300 font-medium text-sm flex items-center justify-between">
                    <span>{member.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                  </p>
                  <p className="text-slate-400 text-xs">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-slate-500 text-sm">
            © {new Date().getFullYear()} Developer&apos;s Paradise. Built with craft, precision, and passion.
          </p>
          <p className="text-xs text-slate-500">
            Rajkot, Gujarat, India · Web & Mobile Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
