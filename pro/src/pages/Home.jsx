import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SafeLink from "@/components/common/SafeLink";
import HomeHero from '@/components/heroes/HomeHero';
import {
  ArrowRight,
  Code2,
  Smartphone,
  ServerIcon,
  Globe2,
  CloudCog,
  Brain,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { teamMembers } from "@/data/teamMembers";
import { TeamAvatar } from "@/pages/Team";
import SEO from "@/components/SEO";
import JsonLd from "@/components/common/JsonLd";

// Safe hook that returns a no-op navigate when used outside a Router context (e.g., in tests)
const useSafeNavigate = () => {
  try {
    return useNavigate();
  } catch {
    return () => {};
  }
};

const services = [
  {
    icon: <Code2 className="h-6 w-6 text-[#0891B2]" />,
    title: "Web Development",
    description:
      "We create stunning, responsive web applications using frameworks like ReactJS and Angular. Our solutions prioritize user-friendly interfaces and high performance.",
    portfolio: "/portfolio",
    tag: "React & Angular",
    color: "from-cyan-500/10 to-blue-500/10",
    border: "hover:border-[#0891B2]"
  },
  {
    icon: <Smartphone className="h-6 w-6 text-[#EC4899]" />,
    title: "Mobile App Development",
    description:
      "Innovative, cross-platform mobile apps built with Flutter for Android and iOS, delivering seamless functionality and visually appealing designs.",
    portfolio: "/portfolio",
    tag: "Flutter & Cross-Platform",
    color: "from-pink-500/10 to-rose-500/10",
    border: "hover:border-[#EC4899]"
  },
  {
    icon: <ServerIcon className="h-6 w-6 text-purple-600" />,
    title: "Backend Development",
    description:
      "Secure and scalable server-side solutions crafted with Node.js and Express.js. We build robust backends tailored to your business needs.",
    portfolio: "/portfolio",
    tag: "Node & Express",
    color: "from-purple-500/10 to-indigo-500/10",
    border: "hover:border-purple-500"
  },
  {
    icon: <Globe2 className="h-6 w-6 text-indigo-600" />,
    title: "Enterprise Web Solutions",
    description:
      "Custom .NET framework applications designed to handle complex business operations. We focus on reliability, scalability, and integration.",
    portfolio: "/portfolio",
    tag: ".NET Core & SQL",
    color: "from-indigo-500/10 to-blue-500/10",
    border: "hover:border-indigo-500"
  },
  {
    icon: <CloudCog className="h-6 w-6 text-teal-600" />,
    title: "Cloud Migration Services",
    description:
      "Seamless cloud transformation strategies leveraging AWS, Azure, and Google Cloud to enhance scalability, security, and operational efficiency.",
    portfolio: "/portfolio",
    tag: "AWS & Multi-Cloud",
    color: "from-teal-500/10 to-emerald-500/10",
    border: "hover:border-teal-500"
  },
  {
    icon: <Brain className="h-6 w-6 text-orange-600" />,
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions that transform data into actionable insights, driving intelligent decision-making and innovative problem-solving.",
    portfolio: "/portfolio",
    tag: "Machine Learning",
    color: "from-orange-500/10 to-amber-500/10",
    border: "hover:border-orange-500"
  }
];

const testimonials = [
  {
    quote:
      "Developer's Paradise transformed our legacy system into a modern, scalable platform. Their attention to detail was exceptional.",
    name: "Sarah Chen",
    role: "CTO, NexaFlow",
    stars: 5
  },
  {
    quote:
      "The mobile app they built increased our customer engagement by 40%. Truly talented team.",
    name: "Marcus Rodriguez",
    role: "Founder, ShopLocal",
    stars: 5
  },
  {
    quote:
      "Professional, deadline-driven, and technically excellent. The .NET solution they delivered is rock solid.",
    name: "Aisha Patel",
    role: "Product Manager, DataViz Inc.",
    stars: 5
  }
];

const marqueeProjects = [
  {
    id: 1,
    title: "Real Estate Platform",
    category: "Web Application",
    tech: "Angular · Node.js · MongoDB",
    desc: "A direct person-to-person property marketplace eliminating middlemen with zero platform fees.",
    link: "/portfolio/1"
  },
  {
    id: 3,
    title: "Planty Ecosystem",
    category: "Mobile & AI",
    tech: "Flutter · AI Vision · Firebase",
    desc: "Plant identification and e-commerce platform featuring on-device machine learning recognition.",
    link: "/portfolio/3"
  },
  {
    id: 4,
    title: "Search Optimate",
    category: "AI Academic Engine",
    tech: "Angular · Multi-Model AI · Node",
    desc: "Aggregated academic search engine unifying student inquiries across top scientific LLMs.",
    link: "/portfolio/4"
  },
  {
    id: 9,
    title: "Nook",
    category: "Mobile",
    tech: "Flutter · Dart · SQLCipher · libp2p",
    desc: "Private, local-first, open-source note-taking app. No account. No cloud. No telemetry.",
    link: "/portfolio/9"
  },
  {
    id: 10,
    title: "SwapFOSS",
    category: "Web",
    tech: "Vue 3 · TypeScript · Vite · Pinia",
    desc: "Free, open-source alternatives directory — find FOSS replacements for everyday apps.",
    link: "/portfolio/10"
  },
  {
    id: 11,
    title: "ClearWage",
    category: "Enterprise",
    tech: "Flutter · Go · PostgreSQL · Firebase",
    desc: "Factory workforce management — attendance, payroll, advances, payslips from a phone.",
    link: "/portfolio/11"
  },
  {
    id: 12,
    title: "Cafe Management System",
    category: "Web",
    tech: "React 18 · Vite 8 · MUI v5 · Express · PostgreSQL",
    desc: "Free, open-source POS for restaurants and cafés. Mobile-first with India GST compliance.",
    link: "/portfolio/12"
  },
  {
    id: 13,
    title: "Locus",
    category: "Mobile",
    tech: "Flutter · Dart · Hive · flutter_map · libre_location",
    desc: "Location-aware reminders that trigger when you arrive — not when you forget.",
    link: "/portfolio/13"
  },
  {
    id: 14,
    title: "SP Generator",
    category: "Web",
    tech: "React 18 · .NET 8.0+ · React Router v6 · Axios · Tailwind CSS",
    desc: "Stored Procedure Generator — transforms how developers create and manage SPs for database systems.",
    link: "/portfolio/14"
  },
  {
    id: 15,
    title: "SquadLink",
    category: "Web",
    tech: "Next.js · Supabase · TypeScript",
    desc: "Next.js application bootstrapped with create-next-app, using Supabase for database and authentication.",
    link: "/portfolio/15"
  },
  {
    id: 16,
    title: "SyncNoteNet",
    category: "Web",
    tech: "React 18 · Express 4 · Socket.io 4 · MongoDB · Monaco Editor · Quill",
    desc: "Collaborative note-taking platform with real-time editing, version control, and rich collaboration features.",
    link: "/portfolio/16"
  },
  {
    id: 17,
    title: "Wallbizz",
    category: "Mobile",
    tech: "Flutter · Go (Fiber) · Supabase · Wallhaven API",
    desc: "Premium curated wallpapers. Zero clutter. Pure aesthetic. Dark-first wallpaper app.",
    link: "/portfolio/17"
  },
  {
    id: 18,
    title: "ApertureX",
    category: "Mobile",
    tech: "Flutter · Dart · Rust · flutter_rust_bridge · Material 3",
    desc: "The mobile-native, non-destructive, 100% on-device FOSS photo editor & darkroom.",
    link: "/portfolio/18"
  }
];

const Home = () => {
  const navigate = useSafeNavigate();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".metrics-ribbon-item",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".metrics-ribbon-section",
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );

        gsap.fromTo(
          ".service-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".services-section",
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );

        gsap.fromTo(
          ".featured-project-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".featured-projects-section",
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );

        gsap.fromTo(
          ".home-team-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".home-team-section",
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );

        gsap.fromTo(
          ".testimonial-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".testimonials-section",
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );

        gsap.fromTo(
          ".final-cta-card",
          { scale: 0.98, y: 24, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".final-cta-section",
              start: "top 85%",
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

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <SEO
        title="Developer's Paradise — Premier Software Engineering Studio"
        description="Developer's Paradise is an elite collective of software engineers crafting high-performance web applications, Flutter mobile experiences, enterprise systems, and scalable cloud solutions."
        keywords="Developer's Paradise, software development, full stack, React, Flutter, .NET Core, cloud engineering, Darshan University, Rajkot"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Developer's Paradise",
          url: "https://developersparadise.dev",
          logo: "https://developersparadise.dev/logo.svg",
          sameAs: [
            "https://github.com/developer-paradise",
            "https://linkedin.com/company/developersparadise",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-94262-84943",
              contactType: "customer service",
              availableLanguage: "en",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Darshan University",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          founder: [
            { "@type": "Person", name: "Prit Vasani" },
            { "@type": "Person", name: "Rajvi Adesara" },
            { "@type": "Person", name: "Vivek Khunt" },
            { "@type": "Person", name: "Meet Parekh" },
            { "@type": "Person", name: "Samarth Mehta" },
            { "@type": "Person", name: "Nilay Dhandhukiya" },
            { "@type": "Person", name: "Bhargav Bhagiya" },
          ],
          knowsAbout: [
            "Web Development",
            "Mobile Development",
            "Flutter",
            "ReactJS",
            "Angular",
            ".NET Core",
            "Cloud Engineering",
            "AI & Machine Learning",
          ],
          serviceType: "Custom Software Development",
          areaServed: { "@type": "Country", name: "India" },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
            },
          },
        }}
      />

      <HomeHero onNavigate={navigate} />

      {/* Impact Metrics Ribbon */}
      <section className="metrics-ribbon-section w-full py-10 bg-white dark:bg-slate-900 border-b border-pink-100/80 dark:border-slate-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="metrics-ribbon-item p-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#0891B2] dark:text-cyan-400 tracking-tight">8</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Production Deployments</div>
            </div>
            <div className="metrics-ribbon-item p-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#EC4899] tracking-tight">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Client Satisfaction</div>
            </div>
            <div className="metrics-ribbon-item p-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-purple-600 dark:text-purple-400 tracking-tight">Since 2024</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Founded at Darshan University</div>
            </div>
            <div className="metrics-ribbon-item p-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 tracking-tight">7</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Core Architects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: "Modular Capabilities" */}
      <section className="services-section w-full py-24 sm:py-28 bg-[#FDF2F8] dark:bg-slate-950 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 sm:mb-20">
            <span className="neo-badge mb-3">Modular Capabilities</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-[-0.02em] mb-4">
              Explore Our Expertise
            </h2>
            <p className="font-sans text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We offer a comprehensive suite of services to bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`service-card relative min-w-0 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-8 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] ${service.border} transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-pink-50 dark:bg-slate-800 border border-pink-200/80 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-[#EC4899] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => navigate(service.portfolio)}
                    className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#0891B2] dark:text-cyan-400 hover:text-[#EC4899] transition-colors group-hover:translate-x-1 cursor-pointer"
                  >
                    <span>View Portfolio →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Bento Spotlight */}
      <section className="featured-projects-section w-full py-24 sm:py-28 bg-white dark:bg-slate-900 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="neo-badge mb-3">Signature Systems</span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-[-0.02em]">
                Engineered for Impact
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/portfolio")}
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0891B2] dark:text-cyan-400 hover:text-[#EC4899] transition-colors cursor-pointer"
            >
              <span>Explore All 8 Production Case Studies →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marqueeProjects.map((proj) => (
              <div
                key={proj.title}
                className="featured-project-card relative min-w-0 rounded-3xl bg-[#FDF2F8]/60 dark:bg-slate-800/50 border border-pink-200/80 dark:border-slate-700 p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-pink-700 dark:text-pink-300 bg-pink-100/80 dark:bg-pink-950/60 px-2.5 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Deployed</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-[#EC4899] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-mono text-[#0891B2] dark:text-cyan-400 font-semibold mb-4 break-words">
                    {proj.tech}
                  </p>

                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-pink-200/60 dark:border-slate-700 flex items-center justify-between">
                  <SafeLink
                    to={proj.link}
                    className="text-xs font-heading font-bold text-slate-800 dark:text-slate-200 hover:text-[#EC4899] flex items-center gap-1 transition-colors"
                  >
                    View Case Study <ExternalLink className="w-3.5 h-3.5" />
                  </SafeLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Behind Paradise Section */}
      <section className="home-team-section w-full py-24 sm:py-28 bg-[#FDF2F8] dark:bg-slate-950 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="neo-badge mb-3">The Minds Behind The Craft</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-[-0.02em] mb-4">
              Meet The Builders
            </h2>
            <p className="font-sans text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              7 dedicated engineers, architects, and innovators based at Darshan University, Rajkot.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member) => (
              <SafeLink
                key={member.slug}
                to={`/team/${member.slug}`}
                className="home-team-card relative min-w-0 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 p-5 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 text-center group block"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-slate-800 ring-2 ring-pink-100 dark:ring-pink-900 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <TeamAvatar
                    src={member.avatar || member.image}
                    thumbnail={member.thumbnail}
                    size="sm"
                    alt={member.name}
                    fallbackInitials={member.name.split(' ').map(n => n[0]).join('')}
                    isEager={false}
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#0891B2] dark:text-cyan-400 mt-1 line-clamp-1">
                  {member.title}
                </p>
                <span className="inline-block mt-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/50 text-[#831843] dark:text-pink-300 border border-pink-200 dark:border-pink-900">
                  {member.specialty.split('&')[0]}
                </span>
              </SafeLink>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/team")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-pink-300 dark:border-slate-700 text-[#EC4899] hover:bg-pink-50 dark:hover:bg-slate-800 font-heading font-semibold text-sm shadow-xs transition-all hover:shadow-md cursor-pointer"
            >
              <span>View Complete Team Bios & Achievements →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="testimonials-section w-full py-24 sm:py-28 bg-white dark:bg-slate-900 border-b border-pink-100/80 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="neo-badge mb-3">Client Trust</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-[-0.02em] mb-4">
              Trusted by Our Clients
            </h2>
            <p className="font-sans text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Hear what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="testimonial-card relative min-w-0 bg-[#FDF2F8]/50 dark:bg-slate-800/50 p-8 sm:p-9 rounded-3xl border border-pink-200/80 dark:border-slate-700 shadow-xs hover:shadow-md transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-5" aria-label="5 star rating">
                    {"★★★★★"}
                  </div>
                  <blockquote className="font-sans text-slate-700 dark:text-slate-300 text-base leading-relaxed italic mb-8">
                    &quot;{item.quote}&quot;
                  </blockquote>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-pink-200/60 dark:border-slate-700">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#0891B2] flex items-center justify-center font-heading font-bold text-white text-sm shadow-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white text-sm">{item.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section w-full py-24 sm:py-28 bg-[#FDF2F8] dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="final-cta-card relative rounded-3xl bg-slate-950 p-10 sm:p-20 text-center text-white overflow-hidden shadow-2xl border border-slate-800">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/20 blur-3xl pointer-events-none rounded-full"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-pink-400" />
                Let&apos;s Build Together
              </span>

              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-6">
                Let&apos;s Bring Your Ideas to Life
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
                Collaborate with us to build solutions that matter. Our team is dedicated to creating high-impact, scalable, and innovative software tailored to your needs.
              </p>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="bg-[#EC4899] hover:bg-pink-600 active:scale-[0.98] text-white px-9 py-4 rounded-full font-heading font-bold text-lg shadow-[0_8px_32px_rgba(236,72,153,0.35)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Work With Us
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
