import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] dark:bg-[#090A0E] text-[#111215] dark:text-[#FAF8F5] border-t border-[#E6E1D6] dark:border-[#222533] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E6E1D6] dark:border-[#222533]">
          {/* Col 1: Wordmark & Studio Bio (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#111215] dark:bg-[#1E2230] text-[#FAF8F5] flex items-center justify-center font-mono font-bold text-xs border border-transparent dark:border-white/10">
                {developer.shortName}
              </div>
              <span className="font-sans font-extrabold text-base tracking-tight text-[#111215] dark:text-[#FAF8F5]">
                {developer.name.toUpperCase()} // ATELIER
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] max-w-sm leading-relaxed font-sans">
              Bespoke digital architecture for high-growth businesses and creative enterprises. Operating globally with remote precision.
            </p>
            <div className="text-xs font-mono text-[#8A867E] dark:text-[#787D8E]">
              Studio Base: {developer.availability.location}
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-[#8A867E] dark:text-[#787D8E] tracking-wider font-semibold">
              Index
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#58554E] dark:text-[#9DA2B3]">
              <li><a href="#works" className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors">Selected Commissions</a></li>
              <li><a href="#capabilities" className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors">Capabilities &amp; Value</a></li>
              <li><a href="#workflow" className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors">Engineering Protocol</a></li>
              <li><a href="#about" className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors">Studio Manifesto</a></li>
              <li><a href="#contact" className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors">Initiate Project</a></li>
            </ul>
          </div>

          {/* Col 3: Repositories & Profiles (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-[#8A867E] dark:text-[#787D8E] tracking-wider font-semibold">
              Network
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]">
              {developer.socials.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors flex items-center gap-1"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8A867E] dark:text-[#787D8E]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A867E] dark:text-[#787D8E]">
          <div>
            &copy; {new Date().getFullYear()} {developer.name}. All rights reserved. Built with React &amp; Tailwind.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#111215] dark:hover:text-white transition-colors p-1"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
