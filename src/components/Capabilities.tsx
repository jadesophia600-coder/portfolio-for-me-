import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, Capability } from '../data/portfolioData';
import { ArrowUpRight, Check, Plus, Minus, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const { capabilities } = PORTFOLIO_CONFIG;
  const [activeCapabilityId, setActiveCapabilityId] = useState<string>(capabilities[0].id);

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E1D6] dark:border-[#222533]">
          <div>
            <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              [ 03 // TECHNICAL ARSENAL &amp; CAPABILITIES ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              WHAT I DELIVER.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-md font-normal leading-relaxed">
            Every capability is measured by measurable client outcomes: conversion lift, user retention, speed, and architectural longevity.
          </p>
        </div>

        {/* Editorial Accordion & Value Delivery System */}
        <div className="mt-12 divide-y divide-[#E6E1D6] dark:divide-[#222533]">
          {capabilities.map((cap) => {
            const isOpen = activeCapabilityId === cap.id;

            return (
              <div
                key={cap.id}
                className="py-8 group transition-colors"
              >
                <div
                  onClick={() => setActiveCapabilityId(isOpen ? '' : cap.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#8A867E] dark:text-[#787D8E] group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA] transition-colors">
                      {cap.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-[#111215] dark:text-[#FAF8F5] group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-[#58554E] dark:text-[#9DA2B3] mt-1">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <span className="hidden sm:inline-block text-xs font-mono text-[#8A867E] dark:text-[#787D8E]">
                      {isOpen ? 'Collapse Details' : 'Expand Specifications'}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#E6E1D6] dark:border-[#2D3142] group-hover:border-[#1447E6] dark:group-hover:border-[#60A5FA] flex items-center justify-center transition-colors bg-white dark:bg-[#161824]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#58554E] dark:text-[#9DA2B3] group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isOpen && (
                  <div className="mt-8 pt-6 border-t border-[#E6E1D6]/60 dark:border-[#222533] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-top-4 duration-300">
                    {/* Value Proposition Narrative (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-base text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                        {cap.description}
                      </p>

                      <div className="p-4 rounded-xl bg-[#1447E6]/5 dark:bg-[#3B82F6]/10 border border-[#1447E6]/15 dark:border-[#3B82F6]/20 flex items-start gap-3">
                        <Zap className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-mono font-bold text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider">
                            Direct Client Commercial Value
                          </div>
                          <div className="text-sm text-[#111215] dark:text-[#FAF8F5] font-medium mt-0.5">
                            {cap.clientValue}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables & Stack Breakdown (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <div className="text-xs font-mono uppercase text-[#8A867E] dark:text-[#787D8E] mb-2 font-semibold">
                          Core Deliverables
                        </div>
                        <ul className="space-y-1.5">
                          {cap.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs font-sans text-[#111215] dark:text-[#FAF8F5]">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <div className="text-xs font-mono uppercase text-[#8A867E] dark:text-[#787D8E] mb-2 font-semibold">
                          Primary Tooling
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cap.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#161824] text-[#58554E] dark:text-[#9DA2B3] border border-[#E6E1D6] dark:border-[#2D3142]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

