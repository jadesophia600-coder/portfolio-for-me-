import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData';
import { ArrowUpRight, Monitor, Smartphone, ExternalLink, Sparkles } from 'lucide-react';
import { LiveMockupPreview } from './LiveMockupPreview';

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
    <section id="works" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E1D6] dark:border-[#222533]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              <span>[ 01 // SELECTED FLAGSHIP COMMISSIONS ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              CRAFTED FOR IMPACT.
            </h2>
          </div>
          <p className="text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
            Every project is engineered as a bespoke high-converting digital product. No recycled templates, no bloated frameworks.
          </p>
        </div>

        {/* Featured Projects Stack - Unique Images #2, #3, #4 */}
        <div className="mt-16 space-y-24 sm:space-y-32">
          {featuredProjects.map((project, index) => {
            const currentView = deviceViews[project.id] || 'desktop';

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Left Column: Project Metadata & Editorial Narrative (5 cols) */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category & Index Tag */}
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8A867E] dark:text-[#787D8E] mb-4">
                    <span className="font-bold text-[#1447E6] dark:text-[#60A5FA]">0{index + 1} //</span>
                    <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-[#161824] border border-[#E6E1D6] dark:border-[#2D3142] text-[#111215] dark:text-[#FAF8F5]">
                      {project.category}
                    </span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-4xl font-sans font-extrabold text-[#111215] dark:text-[#FAF8F5] tracking-tight group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-3 text-base sm:text-lg text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Role & Industry Details */}
                  <div className="mt-6 py-4 border-y border-[#E6E1D6] dark:border-[#222533] grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[#8A867E] dark:text-[#787D8E] uppercase block mb-1">My Role</span>
                      <span className="text-[#111215] dark:text-[#FAF8F5] font-semibold">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-[#8A867E] dark:text-[#787D8E] uppercase block mb-1">Impact Metric</span>
                      <span className="text-[#1447E6] dark:text-[#60A5FA] font-bold text-sm">
                        {project.metrics[0]?.label}: {project.metrics[0]?.value}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
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

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="px-5 py-2.5 rounded-md bg-[#111215] dark:bg-[#FAF8F5] text-[#FAF8F5] dark:text-[#111215] text-xs font-mono font-semibold hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all flex items-center gap-2 shadow-sm active:scale-95"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-md border border-[#E6E1D6] dark:border-[#2D3142] bg-white dark:bg-[#161824] text-[#111215] dark:text-[#FAF8F5] text-xs font-mono font-medium hover:bg-[#F3EFE9] dark:hover:bg-[#1E2234] transition-colors flex items-center gap-1.5"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Layered Browser Mockup (7 cols) */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    {/* Device View Toggle (Desktop vs Mobile) */}
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E]">
                        <span className="w-2 h-2 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
                        <span>Interactive Browser Experience</span>
                      </div>

                      <div className="flex items-center gap-1 bg-white dark:bg-[#161824] p-1 rounded-md border border-[#E6E1D6] dark:border-[#2D3142] shadow-xs">
                        <button
                          onClick={() => toggleDeviceView(project.id, 'desktop')}
                          className={`px-2 py-1 rounded text-[11px] font-mono flex items-center gap-1 transition-colors ${
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
                          className={`px-2 py-1 rounded text-[11px] font-mono flex items-center gap-1 transition-colors ${
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
                    <div
                      className={`relative mx-auto rounded-xl bg-white dark:bg-[#12141D] border border-[#111215]/15 dark:border-white/10 shadow-browser overflow-hidden transition-all duration-300 ${
                        currentView === 'mobile' ? 'max-w-[340px]' : 'w-full'
                      }`}
                    >
                      {/* Window Controls & URL bar */}
                      <div className="bg-[#FAF8F5] dark:bg-[#161824] px-4 py-2.5 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="px-3 py-0.5 rounded bg-white dark:bg-[#1C1F2E] border border-[#E6E1D6] dark:border-[#2D3142] text-[10px] font-mono text-[#58554E] dark:text-[#9DA2B3] max-w-[200px] truncate shadow-inner">
                          {currentView === 'desktop'
                            ? project.mockup.desktopPreviewLabel
                            : project.mockup.mobilePreviewLabel}
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Mockup Screen Viewport */}
                      <div
                        className={`w-full relative transition-all duration-300 ${
                          currentView === 'mobile' ? 'h-[460px]' : 'h-[360px] sm:h-[400px]'
                        }`}
                      >
                        <LiveMockupPreview
                          project={project}
                          viewMode={currentView}
                        />
                      </div>

                      {/* Mockup Interactive Footer Drawer Trigger */}
                      <div className="bg-[#FAF8F5] dark:bg-[#161824] px-4 py-2.5 border-t border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#58554E] dark:text-[#9DA2B3]">Interactive Preview Mode</span>
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="text-[#1447E6] dark:text-[#60A5FA] font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>Full Specifications</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
