import React from 'react';

const TECH_ITEMS = [
  'React 19',
  'TypeScript',
  'Next.js (App Router)',
  'Tailwind CSS',
  'Three.js / WebGL',
  'Framer Motion',
  'Node.js & Express',
  'Zustand',
  'PostgreSQL',
  'Supabase',
  'REST & GraphQL',
  'Vite',
];

export const TechTicker: React.FC = () => {
  return (
    <div className="py-4 border-y border-[#E6E1D6] dark:border-[#222533] bg-[#F3EFE9]/40 dark:bg-[#0D0F16]/40 overflow-hidden relative select-none">
      {/* Edge gradient fades for smooth marquee transition */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF8F5] dark:from-[#090A0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF8F5] dark:from-[#090A0E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-smooth flex items-center gap-8 sm:gap-12">
        {/* Double the list so it loops seamlessly */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6 shrink-0">
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#111215] dark:text-[#FAF8F5] tracking-wide">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
          </div>
        ))}
      </div>
    </div>
  );
};

