import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Zap, Heart, Sparkles, Code2, Globe2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { developer, faqs } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#F3EFE9]/50 dark:bg-[#0D0F16] border-t border-[#E6E1D6] dark:border-[#222533] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Profile Card & Core Principles (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
                <span>ABOUT ME</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
                Behind the code.
              </h2>
            </div>

            {/* Profile Info Card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="card-specular p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-xs flex flex-col justify-between space-y-5 sm:space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#111215] dark:bg-[#1E2230] text-[#FAF8F5] flex items-center justify-center font-mono text-lg sm:text-xl font-bold border border-transparent dark:border-white/10 shadow-xs">
                  {developer.shortName}
                </div>
                <div className="text-right font-mono text-xs text-[#58554E] dark:text-[#9DA2B3]">
                  <div>{developer.availability.location}</div>
                  <div className="text-[#1447E6] dark:text-[#60A5FA] font-medium">{developer.availability.timezone}</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111215] dark:text-[#FAF8F5]">
                  {developer.name}
                </h3>
                <p className="text-xs font-mono text-[#8A867E] dark:text-[#787D8E] mt-0.5">
                  {developer.title}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D6] dark:border-[#222533] space-y-2.5 text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]">
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span className="font-semibold text-[#111215] dark:text-[#FAF8F5]">React, Next.js &amp; TypeScript</span>
                </div>
                <div className="flex justify-between">
                  <span>Approach:</span>
                  <span className="font-semibold text-[#111215] dark:text-[#FAF8F5]">Clean Architecture &amp; Fast UX</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Open to Roles &amp; Contracts</span>
                </div>
              </div>
            </motion.div>

            {/* Guiding Principles */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="card-specular p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] flex items-start gap-3 shadow-xs"
              >
                <Zap className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#111215] dark:text-[#FAF8F5]">Speed as a Priority</h4>
                  <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] mt-0.5">Fast-loading pages and instant interactions make software feel natural and keep users engaged.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="card-specular p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] flex items-start gap-3 shadow-xs"
              >
                <Code2 className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#111215] dark:text-[#FAF8F5]">Design &amp; Code In Sync</h4>
                  <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] mt-0.5">I care about typography, spacing, and micro-interactions just as much as type safety and clean abstractions.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="card-specular p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] flex items-start gap-3 shadow-xs"
              >
                <MessageSquare className="w-5 h-5 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#111215] dark:text-[#FAF8F5]">Clear, Direct Communication</h4>
                  <p className="text-xs text-[#58554E] dark:text-[#9DA2B3] mt-0.5">Frequent updates, live staging previews, and transparent timelines keep teams aligned at every step.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Personal Story & FAQs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 sm:space-y-12"
          >
            {/* Authentic Narrative Bio in Merriweather Serif */}
            <div className="space-y-5 sm:space-y-6 text-[#58554E] dark:text-[#9DA2B3] text-base sm:text-lg leading-relaxed font-serif">
              <p>
                I am a web developer with a genuine passion for building things that work well on the web. My focus is on writing clean, scalable JavaScript and TypeScript, paired with modern frameworks like React and Next.js.
              </p>
              <p>
                Over the past several years, I've collaborated with founders, agencies, and product teams to bring ideas to life. I approach each project by first understanding the user's intent and business objective, then translating that into resilient code and intuitive interfaces.
              </p>
              <p>
                When I'm not writing code, I enjoy exploring new web design trends, testing interactive animation techniques with Three.js and Framer Motion, and continuously improving my engineering toolkit.
              </p>
            </div>

            {/* Common Questions */}
            <div className="border-t border-[#E6E1D6] dark:border-[#222533] pt-8 sm:pt-10">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111215] dark:text-[#FAF8F5] mb-5 sm:mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="card-specular p-4 sm:p-5 rounded-xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] shadow-xs"
                  >
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#111215] dark:text-[#FAF8F5] mb-2 leading-snug">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
