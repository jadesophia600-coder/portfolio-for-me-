import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle, Code, Cpu, Database, Cloud, Terminal, GitBranch } from 'lucide-react';

export const TechStackWorkflow: React.FC = () => {
  const { techStack, workflow } = PORTFOLIO_CONFIG;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Architecture':
        return <Code className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      case 'Backend & Databases':
        return <Database className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      case 'AI & Emerging APIs':
        return <Cpu className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
      default:
        return <Cloud className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />;
    }
  };

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-[#FAF8F5] dark:bg-[#090A0E] relative border-t border-[#E6E1D6] dark:border-[#222533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part A: Technologies Matrix */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E1D6] dark:border-[#222533]">
          <div>
            <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              [ 04 // ENGINEERING STACK &amp; SPECIFICATIONS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              PRECISION INSTRUMENTS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
            Curated tools optimized for extreme performance, type safety, and zero technical debt.
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
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(cat.category)}
                  <h3 className="font-sans font-bold text-base text-[#111215] dark:text-[#FAF8F5]">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] font-mono mb-6">
                  {cat.description}
                </p>

                <div className="space-y-4">
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

        {/* Part B: 4-Step Production Workflow */}
        <div className="mt-28 pt-16 border-t border-[#E6E1D6] dark:border-[#222533]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
                [ 05 // SYSTEMATIC EXECUTION PROTOCOL ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
                HOW A PROJECT SHAPES UP.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-sm font-normal">
              A transparent, battle-tested 4-phase cycle engineered to deliver zero surprises and 100% on-time deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {workflow.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-xs flex flex-col justify-between hover:shadow-editorial transition-all"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#8A867E] dark:text-[#787D8E] mb-4">
                    <span className="text-[#1447E6] dark:text-[#60A5FA] font-bold text-sm">PHASE {step.step}</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#1A1D2B] border border-[#E6E1D6] dark:border-[#2D3142] text-[10px] text-[#111215] dark:text-[#FAF8F5]">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-[#111215] dark:text-[#FAF8F5] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] mt-3 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E1D6] dark:border-[#222533]">
                  <div className="text-[10px] font-mono uppercase text-[#8A867E] dark:text-[#787D8E] mb-2 font-semibold">
                    Concrete Outcomes
                  </div>
                  <ul className="space-y-1.5">
                    {step.outcomes.map((out, outIdx) => (
                      <li key={outIdx} className="flex items-start gap-1.5 text-xs text-[#111215] dark:text-[#FAF8F5]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
