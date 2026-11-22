// pages/Portfolio.jsx
import React, { useState, useRef, useMemo, useEffect } from 'react';
import SafeLink from '@/components/common/SafeLink';
import { LayoutGrid, List, ArrowRight } from 'lucide-react';
import { gsap, useGSAP, Flip } from '@/lib/gsap';
import { projects } from '@/data/projects';
import NoResults from '@/components/NoResults';
import SEO, { useSafeSearchParams } from '@/components/SEO';
import PortfolioHero from '@/components/heroes/PortfolioHero';

const categories = ['All', 'Web', 'Mobile', 'Enterprise'];

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSafeSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';
  const initialViewMode = searchParams.get('view') || 'grid';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [viewMode, setViewMode] = useState(initialViewMode);
  const containerRef = useRef(null);
  const gridContainerRef = useRef(null);
  const flipStateRef = useRef(null);

  // Sync state to URL search parameters without page reload
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCategory && activeCategory !== 'All') {
      params.set('category', activeCategory);
    }
    if (searchQuery && searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    }
    if (viewMode !== 'grid') {
      params.set('view', viewMode);
    }
    setSearchParams(params, { replace: true });
  }, [activeCategory, searchQuery, viewMode, setSearchParams]);

  // Sync URL changes (e.g. browser back/forward) to state
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
    setSearchQuery(searchParams.get('q') || '');
    setViewMode(searchParams.get('view') || 'grid');
  }, [searchParams]);

  // Combined Search & Category Filtering
  const filteredItems = useMemo(() => {
    return projects.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTech = item.tech.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTech;
    });
  }, [activeCategory, searchQuery]);

  // FLIP transition - capture pre-state
  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    const cards = gridContainerRef.current ? gsap.utils.toArray('.portfolio-card', gridContainerRef.current) : [];
    flipStateRef.current = Flip.getState(cards);
    setActiveCategory(cat);
  };

  const handleViewModeChange = (mode) => {
    if (mode === viewMode) return;
    const cards = gridContainerRef.current ? gsap.utils.toArray('.portfolio-card', gridContainerRef.current) : [];
    flipStateRef.current = Flip.getState(cards);
    setViewMode(mode);
  };

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  // Run Flip.from after React has committed the new DOM state
  useGSAP(() => {
    if (flipStateRef.current && gridContainerRef.current) {
      Flip.from(flipStateRef.current, {
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.03,
        scale: true,
        onEnter: (elements) =>
          gsap.fromTo(elements, { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 0.4, clearProps: 'all' }),
        onLeave: (elements) =>
          gsap.to(elements, { opacity: 0, scale: 0.88, duration: 0.25 })
      });
      flipStateRef.current = null;
    }
  }, { dependencies: [activeCategory, viewMode, searchQuery], scope: gridContainerRef });

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-[#FDF2F8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <SEO
        title="Our Work & Production Solutions"
        description="Explore 8 production-grade web applications, Flutter mobile apps, and enterprise systems engineered by Developer's Paradise."
      />

      <PortfolioHero onExplore={() => {
        const controls = document.getElementById('portfolio-controls');
        controls?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <div id="portfolio-controls" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category & View Controls */}
        <div className="pt-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-heading font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0891B2] text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-slate-700 border border-pink-200/80 dark:border-slate-700'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-pink-50/70 dark:bg-slate-800/70 border border-pink-200/80 dark:border-slate-700 shrink-0">
              <button
                type="button"
                onClick={() => handleViewModeChange('grid')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-900 text-[#831843] dark:text-pink-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Grid view"
                title="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleViewModeChange('list')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-900 text-[#831843] dark:text-pink-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="List view"
                title="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      {/* Empty State when no results match */}

        {/* Empty State when no results match */}
        {filteredItems.length === 0 ? (
          <NoResults
            title="No solutions found matching your search"
            message={`We couldn't find any projects matching "${searchQuery}" in category "${activeCategory}".`}
            onReset={handleResetFilters}
          />
        ) : (
          /* Projects Grid Container */
          <div
            ref={gridContainerRef}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'flex flex-col gap-6'
            }
          >
            {filteredItems.map((project, idx) => (
              <article
                key={project.id}
                data-flip-id={`portfolio-${project.id}`}
                className={`portfolio-card relative min-w-0 rounded-3xl bg-white dark:bg-slate-900 border border-pink-200/80 dark:border-slate-800 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(236,72,153,0.18)] hover:border-[#EC4899] transition-[border-color,box-shadow,background-color] duration-300 overflow-hidden group flex ${
                  viewMode === 'grid' ? 'flex-col' : 'flex-col sm:flex-row'
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${
                    viewMode === 'grid' ? 'h-48 w-full' : 'sm:w-72 sm:h-auto h-48 shrink-0'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx < 3 ? "eager" : "lazy"}
                    // eslint-disable-next-line react/no-unknown-property
                    fetchpriority={idx < 3 ? "high" : "auto"}
                  />
                  <span className="absolute top-3.5 right-3.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs text-slate-800 dark:text-slate-200 shadow-xs border border-white/80 dark:border-slate-700">
                    {project.category}
                  </span>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white group-hover:text-[#EC4899] transition-colors mb-2">
                      <SafeLink to={`/portfolio/${project.id}`} className="hover:underline">
                        {project.title}
                      </SafeLink>
                    </h3>
                    <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-pink-50/70 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 text-[#831843] dark:text-pink-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-heading font-semibold text-[#0891B2] group-hover:text-[#EC4899]">
                      <SafeLink
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>View Architecture Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </SafeLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
