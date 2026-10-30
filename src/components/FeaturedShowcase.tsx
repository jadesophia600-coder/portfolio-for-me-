import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData';
import { ArrowUpRight, Monitor, Smartphone, ExternalLink, Github } from 'lucide-react';
import { LiveMockupPreview } from './LiveMockupPreview';
import { motion } from 'framer-motion';

interface FeaturedShowcaseProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ onOpenCaseStudy }) => {
  const { featuredProjects } = PORTFOLIO_CONFIG;
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({
    'aura-wealth-dashboard': 'desktop',
    'elegance-noire-fashion': 'desktop',
    'forma-living-furniture': 'desktop',
  });

  const toggleDeviceView = (projectId: string, view: 'desktop' | 'mobile') => {
    setDeviceViews(prev => ({ ...prev, [projectId]: view }));
  };

  return (
    <section id="works" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E6E1D6] dark:border-[#222533]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              Featured Projects.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
            A selection of web applications, e-commerce storefronts, and interactive interfaces built with React, Next.js, and TypeScript.
          </p>
        </motion.div>

        {/* Featured Projects Stack */}
        <div className="mt-12 sm:mt-16 space-y-20 sm:space-y-28 lg:space-y-32">
          {featuredProjects.map((project, index) => {
            const currentView = deviceViews[project.id] || 'desktop';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
              >
                {/* Left Column: Project Metadata & Narrative (5 cols) */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category & Index Tag */}
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-mono text-[#8A867E] dark:text-[#787D8E] mb-3 sm:mb-4">
                    <span className="font-bold text-[#1447E6] dark:text-[#60A5FA]">0{index + 1} &bull;</span>
                    <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-[#161824] border border-[#E6E1D6] dark:border-[#2D3142] text-[#111215] dark:text-[#FAF8F5]">
                      {project.category}
                    </span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Name with Merriweather Serif */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111215] dark:text-[#FAF8F5] tracking-tight group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Role & Key Metric */}
                  <div className="mt-5 sm:mt-6 py-3.5 sm:py-4 border-y border-[#E6E1D6] dark:border-[#222533] grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[#8A867E] dark:text-[#787D8E] uppercase block mb-1">My Role</span>
                      <span className="text-[#111215] dark:text-[#FAF8F5] font-semibold">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-[#8A867E] dark:text-[#787D8E] uppercase block mb-1">{project.metrics[0]?.label}</span>
                      <span className="text-[#1447E6] dark:text-[#60A5FA] font-bold text-xs sm:text-sm">
                        {project.metrics[0]?.value}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-white dark:bg-[#161824] text-[#58554E] dark:text-[#9DA2B3] border border-[#E6E1D6] dark:border-[#2D3142]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links - Responsive Full Width on Mobile */}
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full sm:w-auto justify-center px-5 py-3 rounded-xl bg-[#111215] dark:bg-[#FAF8F5] text-white dark:text-[#111215] text-xs font-mono font-semibold hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>

                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto justify-center px-4 py-3 rounded-xl border border-[#D5CFCE] dark:border-[#2D3142] bg-white dark:bg-[#12141D] text-[#111215] dark:text-white text-xs font-mono font-semibold hover:border-[#111215] dark:hover:border-white transition-colors flex items-center gap-2 shadow-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right Column: Layered Browser Mockup (7 cols) */}
                <div className={`lg:col-span-7 w-full ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full">
                    {/* Device View Toggle (Desktop vs Mobile) */}
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E]">
                        <span className="w-2 h-2 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
                        <span>Interactive Preview</span>
                      </div>

                      <div className="flex items-center gap-1 bg-white dark:bg-[#161824] p-1 rounded-lg border border-[#E6E1D6] dark:border-[#2D3142] shadow-xs">
                        <button
                          onClick={() => toggleDeviceView(project.id, 'desktop')}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1 transition-colors ${
                            currentView === 'desktop'
                              ? 'bg-[#111215] dark:bg-white text-white dark:text-[#090A0E] font-semibold'
                              : 'text-[#8A867E] dark:text-[#787D8E] hover:text-[#111215] dark:hover:text-white'
                          }`}
                        >
                          <Monitor className="w-3 h-3" />
                          <span>Desktop</span>
                        </button>
                        <button
                          onClick={() => toggleDeviceView(project.id, 'mobile')}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1 transition-colors ${
                            currentView === 'mobile'
                              ? 'bg-[#111215] dark:bg-white text-white dark:text-[#090A0E] font-semibold'
                              : 'text-[#8A867E] dark:text-[#787D8E] hover:text-[#111215] dark:hover:text-white'
                          }`}
                        >
                          <Smartphone className="w-3 h-3" />
                          <span>Mobile</span>
                        </button>
                      </div>
                    </div>

                    {/* The Browser Frame */}
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      className={`relative mx-auto rounded-2xl bg-white dark:bg-[#12141D] border border-[#111215]/15 dark:border-white/10 shadow-browser overflow-hidden w-full ${
                        currentView === 'mobile' ? 'max-w-[320px]' : 'max-w-full'
                      }`}
                    >
                      {/* Window Controls & URL bar */}
                      <div className="bg-[#FAF8F5] dark:bg-[#161824] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="px-2.5 py-0.5 rounded bg-white dark:bg-[#1C1F2E] border border-[#E6E1D6] dark:border-[#2D3142] text-[10px] font-mono text-[#58554E] dark:text-[#9DA2B3] max-w-[170px] sm:max-w-[220px] truncate shadow-inner">
                          {currentView === 'desktop'
                            ? project.mockup.desktopPreviewLabel
                            : project.mockup.mobilePreviewLabel}
                        </div>
                        <div className="w-4 sm:w-8" />
                      </div>

                      {/* Mockup Screen Viewport - Responsive Height */}
                      <div
                        className={`w-full relative transition-all duration-300 ${
                          currentView === 'mobile' ? 'h-[400px] sm:h-[440px]' : 'h-[260px] sm:h-[340px] md:h-[380px]'
                        }`}
                      >
                        <LiveMockupPreview
                          project={project}
                          viewMode={currentView}
                        />
                      </div>

                      {/* Mockup Interactive Footer Drawer Trigger */}
                      <div className="bg-[#FAF8F5] dark:bg-[#161824] px-3 sm:px-4 py-2 sm:py-2.5 border-t border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#58554E] dark:text-[#9DA2B3] text-[10px] sm:text-[11px]">Interactive Preview</span>
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="text-[#1447E6] dark:text-[#60A5FA] font-semibold hover:underline flex items-center gap-1 text-[11px]"
                        >
                          <span>Full Overview</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
