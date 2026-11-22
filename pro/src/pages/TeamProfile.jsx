// pages/TeamProfile.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  Briefcase,
  ExternalLink,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { getTeamMemberBySlug } from '@/data/teamMembers';
import { TeamAvatar } from '@/pages/Team';
import SEO from '@/components/SEO';
import SafeLink from '@/components/common/SafeLink';
import '@/styles/showcase.css';
import { useShowcase } from '@/lib/useShowcase';
import TeamProfileHero from '@/components/heroes/TeamProfileHero';
import JsonLd from '@/components/common/JsonLd';

const TeamProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = getTeamMemberBySlug(slug);
  const scope = useShowcase([slug]);

  if (!member) {
    return (
      <div className="min-h-screen bg-[#FDF2F8] dark:bg-slate-950 py-24 px-4 text-center flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-pink-200 dark:border-slate-800 shadow-xl">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-100 dark:bg-slate-800 text-[#EC4899] flex items-center justify-center mb-5">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-black text-2xl text-slate-900 dark:text-white mb-2">
            Team Member Not Found
          </h2>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-400 mb-6">
            The engineer profile you requested does not exist in our directory.
          </p>
          <button
            type="button"
            onClick={() => navigate('/team')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0891B2] text-white font-heading font-semibold text-sm shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Team</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={scope} className="flex flex-col w-full min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div data-progress aria-hidden="true" className="fixed top-0 inset-x-0 h-0.5 z-60 origin-left scale-x-0 bg-gradient-to-r from-[#EC4899] to-[#0891B2]" />
      <SEO
        title={`${member.name} — ${member.title}`}
        description={`${member.name} (${member.title}) at Developer's Paradise: ${member.description}`}
        ogImage={member.image}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: member.name,
          jobTitle: member.title,
          worksFor: {
            "@type": "Organization",
            name: "Developer's Paradise",
            url: "https://developersparadise.dev",
          },
          memberOf: {
            "@type": "Organization",
            name: "Darshan University",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rajkot",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          },
          email: member.contact,
          url: `https://developersparadise.dev/team/${member.slug}`,
          sameAs: member.socialLinks
            ? [
                member.socialLinks.linkedin && `https://linkedin.com/in/${member.socialLinks.linkedin}`,
                member.socialLinks.github && `https://github.com/${member.socialLinks.github}`,
              ].filter(Boolean)
            : [],
          knowsAbout: member.skills || [],
          image: member.image,
          description: member.description,
        }}
      />

      <TeamProfileHero
        member={{
          ...member,
          email: member.contact,
          initials: member.name.split(' ').map((n) => n[0]).join(''),
          linkedin: member.socialLinks?.linkedin && `https://linkedin.com/in/${member.socialLinks.linkedin}`,
          github: member.socialLinks?.github && `https://github.com/${member.socialLinks.github}`,
        }}
        onBack={() => navigate('/team')}
        renderAvatar={() => (
          <TeamAvatar
            src={member.image}
            alt={member.name}
            fallbackInitials={member.name.split(' ').map((n) => n[0]).join('')}
            isEager={true}
          />
        )}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Biography & Professional Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 space-y-8">
            <div data-reveal className="sc-card p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="font-heading font-black text-2xl text-slate-900 dark:text-white mb-4">
                Biography & Studio Impact
              </h2>
              <p className="font-sans text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Verified Technical Skills */}
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">
                Core Competencies & Stack
              </h3>
              <div data-stagger className="flex flex-wrap gap-2">
                {member.skills?.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 text-[#831843] dark:text-pink-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Projects */}
            <div data-reveal className="sc-card p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="font-heading font-black text-2xl text-slate-900 dark:text-white mb-6">
                Signature Production Projects
              </h2>
              <div data-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {member.projects.map((proj) => (
                  <SafeLink
                    key={proj}
                    to={`/portfolio?q=${proj.toLowerCase()}`}
                    className="p-4 rounded-2xl bg-pink-50/50 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700 hover:border-[#EC4899] transition-colors group block sc-card"
                  >
                    <Briefcase className="w-4 h-4 text-[#0891B2] dark:text-cyan-400 mb-2" />
                    <div className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors">
                      {proj}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                      <span>View in Portfolio</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </SafeLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Professional Details & Certifications */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div data-reveal className="sc-card p-7 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                Career Telemetry
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Experience
                  </span>
                  <span data-count={String(member.experience)} className="font-heading font-bold text-slate-900 dark:text-white">
                    {member.experience}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Studio Tenure
                  </span>
                  <span className="font-heading font-bold text-slate-900 dark:text-white">
                    Since {member.joiningDate}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Affiliation
                  </span>
                  <span className="font-heading font-bold text-slate-900 dark:text-white">
                    Darshan University, Rajkot
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Certifications */}
            {member.certificates && member.certificates.length > 0 && (
              <div data-reveal className="sc-card p-7 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#EC4899]" />
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Certifications
                  </h3>
                </div>

                <div data-stagger className="space-y-3">
                  {member.certificates.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-3 rounded-xl bg-pink-50/50 dark:bg-slate-800/50 border border-pink-100/60 dark:border-slate-700/60"
                    >
                      <div className="font-heading font-bold text-xs text-slate-900 dark:text-white leading-tight">
                        {cert.title}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
                        <span>{cert.issuer}</span>
                        <span className="font-mono">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div data-reveal className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-12 text-center text-white border border-slate-800 shadow-xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
          <h3 className="font-heading font-black text-2xl sm:text-4xl mb-3">
            Want to build with {member.name.split(' ')[0]}?
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Tell us about your product — the right engineers will pick it up.
          </p>
          <button
            type="button"
            data-magnetic
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EC4899] hover:bg-pink-600 text-white font-heading font-bold text-sm shadow-lg transition-colors cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
