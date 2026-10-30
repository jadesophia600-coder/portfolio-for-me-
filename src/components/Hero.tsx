import React, { useState, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Code2, Play, Pause, Volume2, VolumeX, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Hero: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;
  const [heroTab, setHeroTab] = useState<'video' | 'code'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex flex-col justify-between overflow-hidden">
      {/* Subtle Grid Pattern for clean structure */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline & Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-[#E6E1D6] dark:border-[#222533] text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
            <span className="text-[#111215] dark:text-[#FAF8F5] font-semibold tracking-wide">VICTOR .J. OGUNSANYA</span>
            <span className="text-[#8A867E] dark:text-[#585B6B]">/</span>
            <span>PORTFOLIO &bull; 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[#58554E] dark:text-[#9DA2B3]">{developer.availability.location}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20 flex items-center gap-1.5 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </div>
        </motion.div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-10 lg:pt-14 items-center">
          {/* Left Column: Personal Introduction & Narrative (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Role Monogram Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] font-semibold tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
              <span>{developer.title}</span>
            </motion.div>

            {/* Clear, Human Headline with Merriweather Serif */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111215] dark:text-[#FAF8F5] leading-[1.12] mb-6 sm:mb-8"
            >
              Building clean, fast, and thoughtful <span className="italic font-normal text-[#1447E6] dark:text-[#60A5FA]">web experiences.</span>
            </motion.h1>

            {/* Grounded Bio Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-[#58554E] dark:text-[#9DA2B3] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal font-sans"
            >
              Hi, I'm Victor. I build responsive web applications and interactive websites with a focus on React, TypeScript, and modern frontend architecture. I care about snappy performance, clean design details, and reliable code.
            </motion.p>

            {/* Action CTA Group - Fully responsive on mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#works"
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#111215] dark:bg-[#FAF8F5] text-[#FAF8F5] dark:text-[#111215] font-mono text-xs sm:text-sm font-semibold hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors shadow-sm flex items-center gap-2.5 group text-center"
              >
                <span>View Selected Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl border border-[#D5CFCE] dark:border-[#2D3142] bg-white dark:bg-[#12141D] text-[#111215] dark:text-white font-mono text-xs sm:text-sm font-semibold hover:border-[#111215] dark:hover:border-white transition-colors flex items-center gap-2 group shadow-xs text-center"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Key Focus Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#E6E1D6] dark:border-[#222533]"
            >
              {developer.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-sm sm:text-base lg:text-lg font-serif font-bold text-[#111215] dark:text-[#FAF8F5] leading-snug">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-[#8A867E] dark:text-[#787D8E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Video & Code Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="w-full rounded-2xl overflow-hidden border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#12141D] shadow-lifted card-specular"
            >
              {/* Window Title Bar */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F3EFE9] dark:bg-[#161824] border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E] hidden xs:inline truncate max-w-[130px] sm:max-w-none">
                    interactive-3d-reel.mp4
                  </span>
                </div>

              {/* Tabs with Emil Kowalski spring sliding pill */}
              <div className="flex items-center gap-1 bg-[#EBE6DC] dark:bg-[#1E2230] p-0.5 sm:p-1 rounded-lg border border-[#E6E1D6] dark:border-white/10 relative">
                <button
                  onClick={() => setHeroTab('video')}
                  className={`relative z-10 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono transition-colors flex items-center gap-1 ${
                    heroTab === 'video'
                      ? 'text-[#111215] dark:text-white font-semibold'
                      : 'text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white'
                  }`}
                >
                  {heroTab === 'video' && (
                    <motion.div
                      layoutId="heroTabActive"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white dark:bg-[#2A2E3D] rounded-md shadow-xs -z-10"
                    />
                  )}
                  <Laptop className="w-3 h-3" />
                  <span>Reel</span>
                </button>
                <button
                  onClick={() => setHeroTab('code')}
                  className={`relative z-10 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono transition-colors flex items-center gap-1 ${
                    heroTab === 'code'
                      ? 'text-[#111215] dark:text-white font-semibold'
                      : 'text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white'
                  }`}
                >
                  {heroTab === 'code' && (
                    <motion.div
                      layoutId="heroTabActive"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white dark:bg-[#2A2E3D] rounded-md shadow-xs -z-10"
                    />
                  )}
                  <Code2 className="w-3 h-3" />
                  <span>Stack</span>
                </button>
              </div>
              </div>

              {/* Window Content */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                {heroTab === 'video' ? (
                  <>
                    <video
                      ref={videoRef}
                      src="/hero-reel.mp4"
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />

                    {/* Video Controls Bar */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-colors"
                        title={isPlaying ? "Pause Video" : "Play Video"}
                        aria-label="Toggle Play"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-colors"
                        title={isMuted ? "Unmute Audio" : "Mute Audio"}
                        aria-label="Toggle Sound"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white/90 border border-white/10 text-[10px] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>3D WebGL Motion</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full p-4 sm:p-5 bg-[#0D1117] text-white font-mono text-[11px] sm:text-xs overflow-auto leading-relaxed">
                    <div className="text-[#8B949E] mb-2">// Victor's Core Engineering Setup</div>
                    <div><span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">engineer</span> = &#123;</div>
                    <div className="pl-4"><span className="text-[#7EE787]">name</span>: <span className="text-[#A5D6FF]">"Victor .J. Ogunsanya"</span>,</div>
                    <div className="pl-4"><span className="text-[#7EE787]">role</span>: <span className="text-[#A5D6FF]">"Frontend &amp; Web Developer"</span>,</div>
                    <div className="pl-4"><span className="text-[#7EE787]">frontend</span>: [<span className="text-[#A5D6FF]">"React"</span>, <span className="text-[#A5D6FF]">"TypeScript"</span>, <span className="text-[#A5D6FF]">"Next.js"</span>],</div>
                    <div className="pl-4"><span className="text-[#7EE787]">styling</span>: [<span className="text-[#A5D6FF]">"Tailwind CSS"</span>, <span className="text-[#A5D6FF]">"Framer Motion"</span>],</div>
                    <div className="pl-4"><span className="text-[#7EE787]">backend</span>: [<span className="text-[#A5D6FF]">"Node.js"</span>, <span className="text-[#A5D6FF]">"PostgreSQL"</span>, <span className="text-[#A5D6FF]">"Supabase"</span>],</div>
                    <div className="pl-4"><span className="text-[#7EE787]">location</span>: <span className="text-[#A5D6FF]">"Lagos, Nigeria"</span>,</div>
                    <div className="pl-4"><span className="text-[#7EE787]">openForWork</span>: <span className="text-[#79C0FF]">true</span></div>
                    <div>&#125;;</div>
                    <div className="mt-4 text-[#8B949E]">// Built with care and clean architecture</div>
                  </div>
                )}
              </div>

              {/* Caption Footer */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FAF8F5] dark:bg-[#12141D] text-[11px] sm:text-xs font-mono text-[#58554E] dark:text-[#9DA2B3] flex items-center justify-between border-t border-[#E6E1D6] dark:border-[#222533]">
                <span>Featured Interactive Reel</span>
                <span className="text-[#1447E6] dark:text-[#60A5FA]">Three.js &bull; React &bull; Tailwind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
