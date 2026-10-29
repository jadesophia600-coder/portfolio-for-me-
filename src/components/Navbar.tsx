import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sun, Moon, Mail, Copy, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('victor_portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const { developer } = PORTFOLIO_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('victor_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('victor_portfolio_theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-6'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 px-4 sm:px-6 lg:px-8 flex items-center justify-between ${
            isScrolled
              ? 'max-w-6xl bg-[#FAF8F5]/90 dark:bg-[#0A0C13]/90 backdrop-blur-xl border border-[#E6E1D6] dark:border-[#222533] py-2.5 sm:py-3 rounded-2xl shadow-lifted'
              : 'max-w-7xl py-2 bg-transparent'
          }`}
        >
          {/* Typographic Wordmark & Studio Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#1447E6] rounded-md"
          >
            <div className="w-9 h-9 rounded-xl bg-[#111215] dark:bg-[#1E2230] text-[#FAF8F5] flex items-center justify-center font-mono font-bold text-xs tracking-wider group-hover:bg-[#1447E6] dark:group-hover:bg-[#3B82F6] transition-all shadow-sm border border-transparent dark:border-white/10 group-hover:scale-105">
              {developer.shortName}
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base tracking-tight text-[#111215] dark:text-[#FAF8F5] flex items-center gap-2 leading-none">
                <span>{developer.name.toUpperCase()}</span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#58554E] dark:text-[#9DA2B3] mt-1 hidden sm:block">
                Web Developer
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/70 dark:bg-[#12141D]/70 p-1.5 rounded-full border border-[#E6E1D6]/80 dark:border-[#222533] backdrop-blur-md shadow-xs">
            <a
              href="#works"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Works
            </a>
            <a
              href="#capabilities"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#workflow"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Stack
            </a>
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Group: Status Badge + Theme Switcher + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Availability Status (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for hire</span>
            </div>

            {/* Email quick copy pill */}
            <button
              onClick={copyEmail}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#12141D] text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white text-xs font-mono hover:bg-[#F3EFE9] dark:hover:bg-[#1B1E2B] transition-all shadow-xs"
              title="Copy Victor's Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#1447E6] dark:text-[#60A5FA]" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#12141D] text-[#111215] dark:text-[#FAF8F5] hover:bg-[#F3EFE9] dark:hover:bg-[#1B1E2B] transition-colors shadow-xs"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
              ) : (
                <Moon className="w-4 h-4 text-[#1447E6] animate-in spin-in-90 duration-200" />
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111215] dark:bg-[#FAF8F5] text-[#FAF8F5] dark:text-[#111215] text-xs font-mono font-medium hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all hover:shadow-lifted active:scale-[0.98]"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#12141D] text-[#111215] dark:text-[#FAF8F5] hover:bg-[#F3EFE9] dark:hover:bg-[#1B1E2B] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] dark:bg-[#090A0E] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#111215] dark:text-[#FAF8F5]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for hire</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg border border-[#E6E1D6] dark:border-[#222533] text-xs font-mono flex items-center gap-1.5"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[#1447E6]" />}
                <span className="text-[11px]">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-5 text-2xl font-serif text-[#111215] dark:text-[#FAF8F5]">
              <a
                href="#works"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors flex items-center justify-between"
              >
                <span>Selected Works</span>
                <span className="text-xs font-mono text-[#8A867E]">01</span>
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors flex items-center justify-between"
              >
                <span>Capabilities &amp; Value</span>
                <span className="text-xs font-mono text-[#8A867E]">02</span>
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors flex items-center justify-between"
              >
                <span>Tech Stack &amp; Process</span>
                <span className="text-xs font-mono text-[#8A867E]">03</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#1447E6] dark:hover:text-[#60A5FA] transition-colors flex items-center justify-between"
              >
                <span>About Victor</span>
                <span className="text-xs font-mono text-[#8A867E]">04</span>
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E6E1D6] dark:border-[#222533] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-[#1447E6] text-white text-center font-mono text-sm font-semibold flex items-center justify-center gap-2 shadow-lifted"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center font-mono text-[11px] text-[#8A867E] dark:text-[#9DA2B3]">
              {developer.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
