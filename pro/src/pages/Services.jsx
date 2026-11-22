// pages/Services.jsx
import React, { useRef, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckCircle2 } from 'lucide-react';
import {
  FaAngular, FaReact, FaNodeJs, FaDatabase,
  FaHome, FaTshirt, FaLeaf, FaPlane,
  FaFilm, FaSearch, FaBuilding, FaMobile,
  FaUsers, FaCode, FaImage, FaCamera, FaBook,
  FaCloud, FaMapMarker
} from 'react-icons/fa';
import {
  SiDotnet, SiFirebase, SiMongodb,
  SiMaterialdesign, SiBootstrap, SiExpress,
  SiFlutter, SiTypescript
} from 'react-icons/si';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';
import NoResults from '@/components/NoResults';
import SEO from '@/components/SEO';
import { useSafeSearchParams } from '@/components/SEO';
import SafeLink from '@/components/common/SafeLink';
import ServicesHero from '@/components/heroes/ServicesHero';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative min-w-0 rounded-3xl p-8 flex flex-col justify-between bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 group">
      <div>
        {/* Project Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 bg-pink-50 dark:bg-slate-800 text-[#EC4899] rounded-2xl border border-pink-200/60 dark:border-slate-700 shadow-xs group-hover:scale-105 transition-transform duration-300">
            {project.icon}
          </div>
          <div>
            <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors">
              {project.name}
            </h4>
          </div>
        </div>

        {/* Project Description */}
        <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Built With:
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1 bg-pink-50/80 dark:bg-slate-800 border border-pink-200/60 dark:border-slate-700 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Key Features:
          </h5>
          <ul className="space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs font-sans text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0891B2] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.node
      })
    ),
    features: PropTypes.arrayOf(PropTypes.string)
  })
};

const Services = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSafeSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery && searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    }
    setSearchParams(params, { replace: true });
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearchQuery((current) => (q !== current ? q : current));
  }, [searchParams]);

  const technologies = useMemo(() => ([
    {
      name: "Angular",
      logo: <FaAngular className="text-red-600 h-14 w-14" />,
      description:
        "A powerful frontend framework by Google, perfect for building dynamic web applications with robust features and two-way data binding.",
      projects: [
        {
          name: "Real Estate Platform",
          icon: <FaHome className="h-5 w-5 text-[#0891B2]" />,
          description:
            "A person-to-person property marketplace eliminating middlemen. Users can list properties for rent/sale and find homes without platform fees.",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Material UI", icon: <SiMaterialdesign className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Direct property listing",
            "User authentication",
            "Property search filters",
            "No platform fees"
          ]
        },
        {
          name: "Meet's Fashion",
          icon: <FaTshirt className="h-5 w-5 text-pink-600" />,
          description:
            "A fashion appointment booking platform allowing customers to create custom designs or choose from pre-defined styles.",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-slate-800" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Custom design creation",
            "Appointment scheduling",
            "Zoom integration",
            "WhatsApp notifications"
          ]
        },
        {
          name: "Planty",
          icon: <FaLeaf className="h-5 w-5 text-emerald-600" />,
          description:
            "A comprehensive plant information and e-commerce platform with plant recognition features.",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-slate-800" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> }
          ],
          features: [
            "Plant recognition",
            "Care guides",
            "E-commerce integration",
            "Mobile app support"
          ]
        },
        {
          name: "Search Optimate",
          icon: <FaSearch className="h-5 w-5 text-indigo-600" />,
          description:
            "A specialized search engine for students integrating multiple AI services and search platforms.",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "AI integration",
            "Multi-platform search",
            "Academic focus",
            "Aggregated results"
          ]
        },
        {
          name: "Cafe Management System",
          icon: <FaHome className="h-5 w-5 text-purple-600" />,
          description:
            "Free, open-source, self-hostable point-of-sale and management system for restaurants, cafés, and eateries. Mobile-first with India GST compliance.",
          tech: [
            { name: "React 18", icon: <FaReact className="text-red-500" /> },
            { name: "Vite 8", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "MUI v5", icon: <SiMaterialdesign className="text-blue-500" /> },
            { name: "Express 4", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Knex 3", icon: <FaDatabase className="text-green-600" /> },
            { name: "PostgreSQL", icon: <SiMongodb className="text-green-500" /> },
            { name: "Socket.IO", icon: <SiFirebase className="text-amber-500" /> }
          ],
          features: [
            "Customer storefront with QR table ordering",
            "Waiter/counter POS",
            "Kitchen display system",
            "Admin dashboard & analytics",
            "Menu CRUD with image upload",
            "Inventory with recipes/BOM",
            "Loyalty program",
            "Activity log",
          ]
        },
        {
          name: "SquadLink",
          icon: <FaUsers className="h-5 w-5 text-pink-600" />,
          description:
            "Next.js application bootstrapped with create-next-app, using Supabase for database and authentication.",
          tech: [
            { name: "Next.js", icon: <FaReact className="text-red-500" /> },
            { name: "Supabase", icon: <FaDatabase className="text-green-600" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> }
          ],
          features: [
            "Next.js App Router",
            "Supabase integration",
            "SQL schema migrations",
            "Image upload storage",
          ]
        },
        {
          name: "Sync-Not-Net",
          icon: <FaCloud className="h-5 w-5 text-purple-600" />,
          description:
            "Collaborative note-taking platform with real-time editing, version control, rich collaboration features, password protection, and guest access.",
          tech: [
            { name: "React 18", icon: <FaReact className="text-red-500" /> },
            { name: "Express 4", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Socket.io 4", icon: <SiFirebase className="text-amber-500" /> },
            { name: "MongoDB 8", icon: <SiMongodb className="text-green-500" /> },
            { name: "MUI 6", icon: <SiMaterialdesign className="text-blue-500" /> },
            { name: "Monaco Editor", icon: <FaCode className="text-indigo-600" /> },
            { name: "Quill", icon: <FaCode className="text-purple-600" /> }
          ],
          features: [
            "Rich text & code editing",
            "Real-time collaboration",
            "Version history & diff",
            "Threaded comments",
            "Collaborator management",
            "Password protection",
            "Guest access",
            "Favorites & search",
            "Auto-save",
            "Share dialog with QR code",
          ]
        }
      ]
    },
    {
      name: "ReactJS",
      logo: <FaReact className="text-sky-500 h-14 w-14" />,
      description:
        "A popular JavaScript library for building user interfaces with a rich ecosystem and reusable components.",
      projects: [
        {
          name: "Make My Travel",
          icon: <FaPlane className="h-5 w-5 text-purple-600" />,
          description:
            "A travel planning platform offering trip booking services and local travel guides across India.",
          tech: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Trip booking",
            "Local guides",
            "Place recommendations",
            "Travel planning tools"
          ]
        },
        {
          name: "The Trailer Flix",
          icon: <FaFilm className="h-5 w-5 text-red-600" />,
          description:
            "A Netflix-style interface for discovering movie trailers with integrated ratings and reviews.",
          tech: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "YouTube integration",
            "IMDB ratings",
            "Rotten Tomatoes scores",
            "Personalized recommendations"
          ]
        },
        {
          name: "SwapFOSS",
          icon: <FaLeaf className="h-5 w-5 text-emerald-600" />,
          description:
            "Free, open-source alternatives directory — find FOSS replacements for everyday apps, share cards to social media, or download post-ready bundles.",
          tech: [
            { name: "Vue 3", icon: <FaReact className="text-red-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Vite", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Pinia", icon: <FaDatabase className="text-green-600" /> },
            { name: "Zod", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Tailwind CSS", icon: <SiMaterialdesign className="text-blue-500" /> }
          ],
          features: [
            "Category browsing",
            "Card sharing (PNG)",
            "Batch post export",
            "No-code tool addition via JSON",
            "Dark mode",
            "Glassmorphism UI",
          ]
        }
      ]
    },
    {
      name: "Core",
      logo: <SiDotnet className="text-purple-600 h-14 w-14" />,
      description:
        ".NET Core is a cross-platform framework for building scalable and robust web and mobile applications.",
      projects: [
        {
          name: "Employee UMS",
          icon: <FaBuilding className="h-5 w-5 text-purple-600" />,
          description:
            "A project to manage employees with multi-company support.",
          tech: [
            { name: ".NET Core", icon: <SiDotnet className="text-purple-600" /> },
            { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> }
          ],
          features: [
            "Multi-company support",
            "Employee management",
            "Role-based access",
            "Performance tracking"
          ]
        },
        {
          name: "SP Generator",
          icon: <FaCode className="h-5 w-5 text-purple-600" />,
          description:
            "Stored Procedure Generator — transforms how developers create and manage SPs for database systems. Universal database compatibility with intelligent SP generation engine.",
          tech: [
            { name: "React 18", icon: <FaReact className="text-red-500" /> },
            { name: ".NET 8.0+", icon: <SiDotnet className="text-purple-600" /> },
            { name: "React Router v6", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Axios", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Tailwind CSS", icon: <SiMaterialdesign className="text-blue-500" /> },
            { name: "SMO", icon: <SiFirebase className="text-amber-500" /> }
          ],
          features: [
            "Intuitive dashboard",
            "Smart form generation",
            "Live code preview",
            "Template management",
            "Version control",
            "Schema analysis",
            "Performance insights",
            "Cross-database migration",
          ]
        }
      ]
    },
    {
      name: "Flutter",
      logo: <SiFlutter className="text-blue-400 h-14 w-14" />,
      description:
        "Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      projects: [
        {
          name: "Employee PRO",
          icon: <FaMobile className="h-5 w-5 text-indigo-600" />,
          description:
            "Employee Management system app with multi-company support and best UI/UX experience.",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> }
          ],
          features: [
            "Intuitive mobile interface",
            "Real-time updates",
            "Multi-company support",
            "Advanced reporting"
          ]
        },
        {
          name: "Locus",
          icon: <FaMapMarker className="h-5 w-5 text-emerald-600" />,
          description:
            "Location-aware reminders that trigger when you arrive — not when you forget. Everything runs on-device.",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Dart", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Hive", icon: <FaDatabase className="text-green-600" /> },
            { name: "flutter_map", icon: <FaMapMarker className="text-red-500" /> },
            { name: "libre_location", icon: <FaMapMarker className="text-red-500" /> },
            { name: "flutter_bloc", icon: <SiMaterialdesign className="text-blue-500" /> }
          ],
          features: [
            "Enter/Exit/Dwell/Schedule/Wi-Fi triggers",
            "Notification/Alarm/Conditional/Automated reminders",
            "ntfy/SMS/Webhook/Email actions",
            "OpenStreetMap with geofence circles",
            "Home-screen widget",
            "JSON import/export",
            "Health screen",
          ]
        },
        {
          name: "Wallbizz",
          icon: <FaImage className="h-5 w-5 text-purple-600" />,
          description:
            "Premium curated wallpapers. Zero clutter. Pure aesthetic. Dark-first wallpaper app powered by Wallhaven's top-rated 4K wallpapers.",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Go (Fiber)", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Supabase", icon: <FaDatabase className="text-green-600" /> },
            { name: "Wallhaven API", icon: <FaImage className="h-5 w-5 text-purple-600" /> }
          ],
          features: [
            "7 curated categories (Trending, Anime, Nature, Cyberpunk, Space, Desktop, Mobile)",
            "Hybrid search with sort/date/category/aspect ratio",
            "Moodboard collections",
            "Download vault",
            "Smart gestures",
            "Watermarked share",
            "Dark-first glassmorphism UI",
            "Cross-platform PWA + Android",
          ]
        },
        {
          name: "ApertureX",
          icon: <FaCamera className="h-5 w-5 text-purple-600" />,
          description:
            "The mobile-native, non-destructive, 100% on-device FOSS photo editor & darkroom — the Snapseed and Lightroom replacement the open-source community deserved.",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Dart", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Rust", icon: <FaNodeJs className="text-green-600" /> },
            { name: "flutter_rust_bridge", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Material 3", icon: <SiMaterialdesign className="text-blue-500" /> }
          ],
          features: [
            "Dual-UI shells (Lightroom panel + Snapseed gesture)",
            "55+ curated master presets",
            "Depth Anything V2 monocular bokeh",
            "7 optical apertures",
            "15 mask kinds with boolean algebra",
            "16-bit scene-linear float pipeline",
            "Point color & calibration",
            "Guided upright transform",
            "Double exposure",
            "Targeted output sharpening",
            "C2PA cryptographic provenance",
            "Studio tethered shooting",
          ]
        },
        {
          name: "Nook",
          icon: <FaBook className="h-5 w-5 text-red-500" />,
          description:
            "Private, local-first, open-source note-taking app. Notes are encrypted at rest on your device and travel directly over Wi-Fi between your devices — no server, no cloud, no telemetry.",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Dart", icon: <SiFirebase className="text-amber-500" /> },
            { name: "SQLCipher", icon: <FaDatabase className="text-green-600" /> },
            { name: "libp2p", icon: <FaMapMarker className="text-red-500" /> },
            { name: "Riverpod", icon: <SiMaterialdesign className="text-blue-500" /> }
          ],
          features: [
            "Full-text search (FTS5)",
            "Checklists & doodles",
            "Biometric gate",
            "Per-note locking",
            "Soft-delete bin",
            "Vault export/import",
          ]
        }
      ]
    }
  ]), []);


  // Filtered chapters & projects based on search query
  const filteredTechnologies = useMemo(() => {
    if (!searchQuery.trim()) return technologies;
    const q = searchQuery.toLowerCase();

    return technologies
      .map((tech) => {
        const matchingProjects = tech.projects.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tech.some((t) => t.name.toLowerCase().includes(q)) ||
            tech.name.toLowerCase().includes(q)
        );

        return {
          ...tech,
          projects: matchingProjects
        };
      })
      .filter((tech) => tech.projects.length > 0);
  }, [technologies, searchQuery]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".tech-chapter").forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: chapter,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true
              }
            }
          );
        });
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
    { scope: containerRef, dependencies: [filteredTechnologies.length] }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <SEO
        title="Engineering Services & Architectures"
        description="Comprehensive full-stack services across Angular, ReactJS, .NET Core, and Flutter mobile frameworks by Developer's Paradise."
      />

      <div className="max-w-6xl mx-auto">
        <ServicesHero />

      {/* Empty state when query returns no projects */}

        {/* Empty state when query returns no projects */}
        {filteredTechnologies.length === 0 ? (
          <NoResults
            title="No matching services or projects"
            message={`We couldn't find any solutions matching "${searchQuery}".`}
            onReset={() => setSearchQuery('')}
          />
        ) : (
          /* Chapters: Scroll-Triggered Storytelling */
          <div className="space-y-20">
            {filteredTechnologies.map((tech) => (
              <section
                key={tech.name}
                className="tech-chapter bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-3xl border border-pink-200/80 dark:border-slate-800 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-pink-100 dark:border-slate-800 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 shadow-xs">
                      {tech.logo}
                    </div>
                  <div>
                      <SafeLink to={`/portfolio?q=${tech.name.toLowerCase()}`} className="block">
                        <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                          {tech.name}
                        </h2>
                      </SafeLink>
                      <p className="font-sans text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/50 text-[#831843] dark:text-pink-300 border border-pink-200 dark:border-pink-900">
                    {tech.projects.length} Featured {tech.projects.length === 1 ? 'Solution' : 'Solutions'}
                  </span>
                </div>

                {/* Grid of Projects for this Tech */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tech.projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
