// pages/ProjectDetail.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import SEO from '@/components/SEO';
import '@/styles/showcase.css';
import { useShowcase } from '@/lib/useShowcase';
import ProjectDetailHero from '@/components/heroes/ProjectDetailHero';
import JsonLd from '@/components/common/JsonLd';
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const scope = useShowcase([id]);

  const relatedProjects = project ? getRelatedProjects(project.id, project.category, 3) : [];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FDF2F8] dark:bg-slate-950 py-24 px-4 text-center flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-pink-200 dark:border-slate-800 shadow-xl">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-100 dark:bg-slate-800 text-[#EC4899] flex items-center justify-center mb-5">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-black text-2xl text-slate-900 dark:text-white mb-2">
            Project Not Found
          </h2>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-400 mb-6">
            The project you requested could not be located in our production directory.
          </p>
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0891B2] text-white font-heading font-semibold text-sm shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div ref={scope} className="flex flex-col w-full min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div data-progress aria-hidden="true" className="fixed top-0 inset-x-0 h-0.5 z-60 origin-left scale-x-0 bg-gradient-to-r from-[#EC4899] to-[#0891B2]" />
      <SEO
        title={`${project.title} — Case Study`}
        description={project.description}
        ogImage={project.image}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: `https://developersparadise.dev/portfolio/${project.id}`,
          image: project.image,
          creator: {
            "@type": "Organization",
            name: "Developer's Paradise",
            url: "https://developersparadise.dev",
          },
          publisher: {
            "@type": "Organization",
            name: "Developer's Paradise",
            url: "https://developersparadise.dev",
          },
          dateCreated: project.date,
          keywords: project.tech?.join(", "),
          inLanguage: "en-US",
          isFamilyFriendly: true,
          audience: {
            "@type": "BusinessAudience",
          },
        }}
      />

      <ProjectDetailHero
        project={project}
        info={[
          ['Client', project.client],
          ['Year', project.year ?? project.date?.slice?.(0, 4)],
          ['Timeline', project.timeline],
          ['Engineering Team', project.teamSize ?? project.team],
        ]}
        onBack={() => navigate('/portfolio')}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* High-Resolution Interactive Image Gallery */}
        {galleryImages.length > 1 && (
        <div data-reveal className="mb-16">
          <div className="rounded-3xl overflow-hidden bg-slate-950 border border-pink-200/80 dark:border-slate-800 shadow-xl aspect-16/9 relative mb-4">
            <img
              src={galleryImages[activeImageIdx]}
              alt={`${project.title} screenshot ${activeImageIdx + 1}`}
              key={activeImageIdx}
              className="w-full h-full object-cover sc-fade"
              loading="eager"
            />
          </div>

          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIdx === idx
                      ? 'border-[#EC4899] scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Narrative & Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div data-reveal className="sc-card p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
                Architecture Blueprint
              </h2>
              <p className="font-sans text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {project.caseStudyContent}
              </p>

              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">
                Key Features Delivered
              </h3>
              <ul data-stagger className="space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div data-reveal className="sc-card p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6">
                Technical Challenges & Solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/50">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-700 dark:text-pink-400 mb-3">
                    Obstacles Overcome
                  </div>
                  <ul data-stagger className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {project.challenges?.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#EC4899] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/50">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3">
                    Engineered Resolutions
                  </div>
                  <ul data-stagger className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {project.solutions?.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0891B2] font-bold">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Tech Stack & Live Links */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div data-reveal className="sc-card p-7 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono font-medium px-3 py-1 rounded-xl bg-pink-50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 text-[#831843] dark:text-pink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0891B2] hover:bg-[#0E7490] text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-heading font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            {/* Impact Metrics Card */}
            {project.metrics && project.metrics.length > 0 && (
              <div data-reveal className="sc-card p-7 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                  Measurable Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-2xl bg-pink-50/50 dark:bg-slate-800/50">
                      <div data-count={String(m.value)} className="font-heading font-black text-2xl text-[#0891B2] dark:text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-12 border-t border-pink-200/80 dark:border-slate-800 mb-16">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-8">
              Related Solutions
            </h2>
            <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/portfolio/${rel.id}`}
                  data-tilt
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md hover:border-[#EC4899] transition-[border-color,box-shadow] group block"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[#0891B2] dark:text-cyan-400 uppercase font-semibold">
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors mt-1 mb-2">
                      {rel.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedProjects[0] && (
          <Link
            to={`/portfolio/${relatedProjects[0].id}`}
            data-reveal
            className="group relative block overflow-hidden rounded-3xl mb-16 aspect-21/9 min-h-56 bg-slate-950"
          >
            <img
              src={relatedProjects[0].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 p-8 sm:p-12 text-white">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-pink-300">Next case study</span>
              <h3 className="font-heading font-black text-3xl sm:text-5xl mt-2 flex items-center gap-3">
                {relatedProjects[0].title}
                <ArrowRight className="w-7 h-7 transition-transform group-hover:translate-x-2" />
              </h3>
            </div>
          </Link>
        )}

        {/* CTA Banner */}
        <div data-reveal className="rounded-3xl bg-slate-950 p-8 sm:p-12 text-center text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-500/20 blur-3xl pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-3">
            Have a Similar Project in Mind?
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Let our core architects tailor an enterprise-grade digital solution for your specific business domain.
          </p>
          <button
            type="button"
            data-magnetic
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EC4899] hover:bg-pink-600 text-white font-heading font-bold text-sm shadow-lg transition-colors cursor-pointer"
          >
            <span>Start Your Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
