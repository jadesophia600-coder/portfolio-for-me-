import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, Compass, Shield, Terminal, Zap, Code2, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F3EFE9]/50 dark:bg-[#0D0F16] border-t border-[#E6E1D6] dark:border-[#222533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monogram Atelier Badge & Studio Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
                [ 06 // PHILOSOPHY &amp; PEDIGREE ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
                CODE AS CRAFT.
              </h2>
            </div>

            {/* Atelier Visual Identity Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-editorial flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#111215] dark:bg-[#1E2230] text-[#FAF8F5] flex items-center justify-center font-mono text-xl font-bold border border-transparent dark:border-white/10">
                  {developer.shortName}
                </div>
                <div className="text-right font-mono text-xs text-[#58554E] dark:text-[#9DA2B3]">
                  <div>{developer.availability.location}</div>
                  <div className="text-[#1447E6] dark:text-[#60A5FA]">{developer.availability.timezone}</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-sans font-bold text-[#111215] dark:text-[#FAF8F5]">
                  {developer.name}
                </h3>
                <p className="text-xs font-mono text-[#8A867E] dark:text-[#787D8E] mt-0.5">
                  {developer.title}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D6] dark:border-[#222533] space-y-2 text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]">
                <div className="flex justify-between">
                  <span>Specialization:</span>
                  <span className="font-semibold text-[#111215] dark:text-[#FAF8F5]">Bespoke Web Platforms</span>
                </div>
                <div className="flex justify-between">
                  <span>Code Philosophy:</span>
                  <span className="font-semibold text-[#111215] dark:text-[#FAF8F5]">Zero Bloat &bull; Strict Types</span>
                </div>
                <div className="flex justify-between">
                  <span>Milestone Record:</span>
                  <span className="font-semibold text-emerald-500">100% On-Time</span>
                </div>
              </div>
            </div>

            {/* Three Foundational Pillars */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#111215] dark:text-[#FAF8F5]">Speed is a Feature</h4>
                  <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] mt-0.5">Sub-second load times aren't a vanity metric; every 100ms shaved directly lifts client conversion rates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#111215] dark:text-[#FAF8F5]">Design &amp; Engineering Symbiosis</h4>
                  <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] mt-0.5">I don't just mechanically slice Figma files. I translate visual intent into living, tactile software.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            <div className="prose prose-lg text-[#58554E] dark:text-[#9DA2B3] space-y-6 text-base sm:text-lg leading-relaxed font-normal">
              {developer.bio.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:text-xl first-of-type:text-[#111215] dark:first-of-type:text-[#FAF8F5] first-of-type:font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Frequently Asked Questions by Prospective Clients */}
            <div className="pt-8 border-t border-[#E6E1D6] dark:border-[#222533] space-y-4">
              <div className="text-xs font-mono uppercase text-[#8A867E] dark:text-[#787D8E] mb-3 font-semibold">
                Transparent Collaboration &amp; Client FAQ
              </div>

              <div className="space-y-3">
                {PORTFOLIO_CONFIG.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533]">
                    <h4 className="text-sm font-sans font-bold text-[#111215] dark:text-[#FAF8F5] mb-1.5">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
