import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code2, Database, Layers, Wrench, CheckCircle2 } from 'lucide-react';

export const TechStackWorkflow: React.FC = () => {
  const { techStack, workflow } = PORTFOLIO_CONFIG;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Architecture':
        return <Code2 className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      case 'Backend & Data':
        return <Database className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      case 'State & API Tools':
        return <Layers className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
    }
  };

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-[#FAF8F5] dark:bg-[#090A0E] relative border-t border-[#E6E1D6] dark:border-[#222533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part A: Technologies Matrix */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E1D6] dark:border-[#222533]">
          <div>
            <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              <span>TOOLBOX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              Technologies &amp; Tools.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
            The core tools and frameworks I rely on to build fast, type-safe, and reliable web applications.
          </p>
        </div>

        {/* 4-Column Tech Stack Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-xs flex flex-col justify-between hover:border-[#1447E6]/40 dark:hover:border-[#3B82F6]/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(cat.category)}
                  <h3 className="font-sans font-bold text-base text-[#111215] dark:text-[#FAF8F5]">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] font-mono mb-5">
                  {cat.description}
                </p>

                <div className="space-y-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-[#E6E1D6]/60 dark:border-[#222533] pb-3 last:border-none">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-[#111215] dark:text-[#FAF8F5]">{item.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F3EFE9] dark:bg-[#1C1F2E] text-[#58554E] dark:text-[#9DA2B3]">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#8A867E] dark:text-[#787D8E] mt-1 leading-normal font-sans">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part B: Workflow Process */}
        <div className="mt-24 pt-16 border-t border-[#E6E1D6] dark:border-[#222533]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
                <span>HOW I WORK</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
                From concept to production.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
              A transparent, phased process focused on clear milestones, frequent staging demos, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="font-bold text-[#1447E6] dark:text-[#60A5FA] text-base">{step.step}</span>
                    <span className="text-[#8A867E] dark:text-[#787D8E] px-2 py-0.5 rounded bg-[#F3EFE9] dark:bg-[#181B27]">
                      {step.duration}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#111215] dark:text-[#FAF8F5] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                <div className="border-t border-[#E6E1D6]/60 dark:border-[#222533] pt-4 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#8A867E] dark:text-[#787D8E] font-semibold">
                    Key Outcomes
                  </div>
                  {step.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-[#58554E] dark:text-[#9DA2B3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
