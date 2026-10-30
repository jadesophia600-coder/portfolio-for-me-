import React, { useState, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Code2, Play, Pause, Volume2, VolumeX, Laptop } from 'lucide-react';

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
    <section className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 flex flex-col justify-between">
      {/* Subtle Grid Pattern for clean structure */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E6E1D6] dark:border-[#222533] text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
            <span className="text-[#111215] dark:text-[#FAF8F5] font-semibold tracking-wide">VICTOR OGUNSANYA</span>
            <span className="text-[#8A867E] dark:text-[#585B6B]">/</span>
            <span>PORTFOLIO &bull; 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[#58554E] dark:text-[#9DA2B3]">{developer.availability.location}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE FOR ROLES
            </span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pt-10 lg:pt-14 items-center">
          {/* Left Column: Personal Introduction & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Role Monogram Pill */}
            <div className="inline-flex items-center gap-2.5 mb-6 text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
              <span>{developer.title}</span>
            </div>

            {/* Clear, Human Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5] leading-[1.06] mb-8">
              Building clean, fast, and thoughtful <span className="text-[#1447E6] dark:text-[#60A5FA]">web experiences.</span>
            </h1>

            {/* Grounded Bio Summary */}
            <p className="text-lg sm:text-xl text-[#58554E] dark:text-[#9DA2B3] max-w-2xl leading-relaxed mb-10 font-normal">
              Hi, I'm Victor. I build responsive web applications and interactive websites with a focus on React, TypeScript, and modern frontend architecture. I care about snappy performance, clean design details, and reliable code.
            </p>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#works"
                className="px-6 py-3.5 rounded-xl bg-[#111215] dark:bg-[#FAF8F5] text-[#FAF8F5] dark:text-[#111215] font-mono text-xs sm:text-sm font-semibold hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all shadow-sm active:scale-[0.98] flex items-center gap-2.5 group"
              >
                <span>View Selected Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-[#D5CFCE] dark:border-[#2D3142] bg-white dark:bg-[#12141D] text-[#111215] dark:text-white font-mono text-xs sm:text-sm font-semibold hover:border-[#111215] dark:hover:border-white transition-all active:scale-[0.98] flex items-center gap-2 group shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Key Focus Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E6E1D6] dark:border-[#222533]">
              {developer.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-base sm:text-lg font-sans font-bold text-[#111215] dark:text-[#FAF8F5] leading-snug">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-[#8A867E] dark:text-[#787D8E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Video & Code Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#12141D] shadow-lifted">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#F3EFE9] dark:bg-[#161824] border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  <span className="ml-2 text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E] hidden sm:inline">
                    interactive-3d-reel.mp4
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-white/70 dark:bg-[#1E2230] p-1 rounded-lg border border-[#E6E1D6] dark:border-white/10">
                  <button
                    onClick={() => setHeroTab('video')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1 ${
                      heroTab === 'video'
                        ? 'bg-[#111215] dark:bg-white text-white dark:text-[#111215] font-semibold'
                        : 'text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white'
                    }`}
                  >
                    <Laptop className="w-3 h-3" />
                    <span>Reel</span>
                  </button>
                  <button
                    onClick={() => setHeroTab('code')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1 ${
                      heroTab === 'code'
                        ? 'bg-[#111215] dark:bg-white text-white dark:text-[#111215] font-semibold'
                        : 'text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white'
                    }`}
                  >
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
                  <div className="w-full h-full p-5 bg-[#0D1117] text-white font-mono text-xs overflow-auto leading-relaxed">
                    <div className="text-[#8B949E] mb-2">// Victor's Core Engineering Setup</div>
                    <div><span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">engineer</span> = &#123;</div>
                    <div className="pl-4"><span className="text-[#7EE787]">name</span>: <span className="text-[#A5D6FF]">"Victor Ogunsanya"</span>,</div>
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
              <div className="px-4 py-3 bg-[#FAF8F5] dark:bg-[#12141D] text-xs font-mono text-[#58554E] dark:text-[#9DA2B3] flex items-center justify-between border-t border-[#E6E1D6] dark:border-[#222533]">
                <span>Featured Interactive Reel</span>
                <span className="text-[#1447E6] dark:text-[#60A5FA]">Three.js &bull; React &bull; Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
