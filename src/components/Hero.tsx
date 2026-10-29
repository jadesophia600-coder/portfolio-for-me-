import React, { useState, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Code, Eye, ShieldCheck, Sparkles, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { developer, heroProject } = PORTFOLIO_CONFIG;
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
    <section className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-between">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#1447E6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#CEF241]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline & Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E6E1D6]/80 dark:border-[#222533] text-xs font-mono text-[#58554E] dark:text-[#9DA2B3]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1447E6]" />
            <span className="text-[#111215] dark:text-[#FAF8F5] font-semibold tracking-wider">CREATIVE DEVELOPMENT STUDIO</span>
            <span className="text-[#8A867E] dark:text-[#585B6B]">/</span>
            <span>VER. 2026.4</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[#58554E] dark:text-[#9DA2B3]">{developer.availability.location}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#CEF241]/30 text-[#111215] dark:text-[#CEF241] font-semibold border border-[#CEF241]">
              ACCEPTING COMMISSIONS
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-10 lg:pt-14 items-center">
          {/* Left Column: Bold Oversized Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Monogram & Studio Header */}
            <div className="inline-flex items-center gap-2.5 mb-6 text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1447E6] dark:bg-[#60A5FA]" />
              <span>{developer.name} &bull; {developer.title}</span>
            </div>

            {/* Oversized Signature Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#111215] dark:text-[#FAF8F5] leading-[1.04] mb-8">
              I BUILD <span className="font-serif italic font-normal text-[#1447E6] dark:text-[#60A5FA] tracking-normal">digital experiences</span> THAT MOVE BUSINESSES FORWARD.
            </h1>

            {/* Concise Editorial Subheadline */}
            <p className="text-lg sm:text-xl text-[#58554E] dark:text-[#9DA2B3] max-w-2xl leading-relaxed mb-10 font-normal">
              {developer.subheadline} Every build pairs bespoke art direction with museum-grade code performance, sub-second load times, and conversion psychology.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#works"
                className="px-7 py-3.5 rounded-md bg-[#111215] dark:bg-[#FAF8F5] text-[#FAF8F5] dark:text-[#111215] font-mono text-xs sm:text-sm font-semibold hover:bg-[#1447E6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all hover:shadow-hover-pop active:scale-[0.98] flex items-center gap-2.5 group"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-md border border-[#111215] dark:border-white/20 bg-transparent text-[#111215] dark:text-white font-mono text-xs sm:text-sm font-semibold hover:bg-[#111215] dark:hover:bg-white hover:text-[#FAF8F5] dark:hover:text-[#090A0E] transition-all active:scale-[0.98] flex items-center gap-2 group"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Studio Metric Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#E6E1D6] dark:border-[#222533]">
              {developer.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#111215] dark:text-[#FAF8F5] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E] mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Asymmetric Browser Mockup Featuring Live Video Reel (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Desktop Browser Frame with Video Reel */}
            <div className="relative rounded-xl bg-white dark:bg-[#12141D] border border-[#111215]/15 dark:border-white/10 shadow-browser overflow-hidden transition-all duration-500 hover:shadow-2xl">
              {/* Browser Window Header Chrome */}
              <div className="bg-[#FAF8F5] dark:bg-[#161824] px-4 py-3 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                </div>

                {/* Simulated URL bar */}
                <div className="px-3 py-1 rounded bg-white dark:bg-[#1C1F2E] border border-[#E6E1D6] dark:border-[#2D3142] text-[11px] font-mono text-[#58554E] dark:text-[#9DA2B3] flex items-center gap-2 max-w-[220px] truncate shadow-inner">
                  <span className="text-[#1447E6] dark:text-[#60A5FA]">https://</span>
                  <span className="truncate">victor-studio.dev/3d-reel-live</span>
                </div>

                {/* Interactive View Mode Switcher */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setHeroTab('video')}
                    className={`p-1 rounded text-xs transition-colors ${
                      heroTab === 'video' ? 'bg-[#1447E6] text-white' : 'text-[#8A867E] hover:text-[#111215] dark:hover:text-white'
                    }`}
                    title="Play 3D Video Reel"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setHeroTab('code')}
                    className={`p-1 rounded text-xs transition-colors ${
                      heroTab === 'code' ? 'bg-[#1447E6] text-white' : 'text-[#8A867E] hover:text-[#111215] dark:hover:text-white'
                    }`}
                    title="Inspect Source Code"
                  >
                    <Code className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Browser Content Area: Live Video Player */}
              <div className="h-[360px] sm:h-[420px] relative bg-[#090A0E] group overflow-hidden">
                {heroTab === 'video' ? (
                  <>
                    <video
                      ref={videoRef}
                      src="/hero-reel.mp4"
                      poster="/projects/futuristic-agency.jpg"
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      onClick={togglePlay}
                      className="w-full h-full object-cover cursor-pointer"
                    />

                    {/* Gradient & Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Floating Glass Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#CEF241] animate-ping" />
                        <span>INTERACTIVE 3D WEBGL MOTION</span>
                      </span>

                      <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-white/70 border border-white/10">
                        SPLINE &bull; THREE.JS
                      </span>
                    </div>

                    {/* Bottom Floating Interactive Bar */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                      <div className="space-y-0.5 max-w-[65%]">
                        <div className="text-[9px] font-mono text-[#CEF241] uppercase tracking-wider font-semibold">
                          Featured Production Reel
                        </div>
                        <div className="text-xs sm:text-sm font-sans font-bold text-white truncate">
                          Interactive 3D Animated Web Experiences
                        </div>
                      </div>

                      {/* Video Controls */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={togglePlay}
                          className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                          title={isPlaying ? "Pause Video" : "Play Video"}
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                          title={isMuted ? "Unmute Audio" : "Mute Audio"}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#CEF241]" />}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-5 font-mono text-[11px] text-emerald-400 bg-[#0E1015] h-full overflow-y-auto leading-relaxed select-text">
                    <div className="text-white/40">// Victor Studio 3D WebGL Motion Architecture</div>
                    <div className="text-pink-400 mt-2">import &#123; Canvas, useFrame &#125; from '@react-three/fiber';</div>
                    <div className="text-pink-400">import &#123; OrbitControls, Float &#125; from '@react-three/drei';</div>
                    <div className="mt-2 text-blue-300">export const Interactive3DExperience = () =&gt; &#123;</div>
                    <div className="pl-4 text-emerald-300">const &#91;meshRef&#93; = useRef&lt;Mesh&gt;(null);</div>
                    <div className="pl-4 text-slate-300">useFrame((state, delta) =&gt; &#123;</div>
                    <div className="pl-8 text-yellow-300">meshRef.current.rotation.y += delta * 0.25;</div>
                    <div className="pl-8 text-yellow-300">meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;</div>
                    <div className="pl-4 text-slate-300">&#125;);</div>
                    <div className="pl-4 text-white">return &lt;Float speed=&#123;2&#125;&gt;&lt;SplineScene /&gt;&lt;/Float&gt;;</div>
                    <div className="text-blue-300">&#125;;</div>
                    <div className="mt-4 text-white/40">// 60 FPS Locked &bull; 99.8% Lighthouse Performance</div>
                  </div>
                )}
              </div>

              {/* Browser Status Footer */}
              <div className="bg-[#FAF8F5] px-4 py-2 border-t border-[#E6E1D6] flex items-center justify-between text-[10px] font-mono text-[#58554E]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hardware GPU Accelerated</span>
                </div>
                <span className="text-[#1447E6] font-semibold">60 FPS Responsive Motion</span>
              </div>
            </div>

            {/* Overlapping Mobile Device Viewport */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-52 rounded-2xl bg-[#111215] p-2 shadow-2xl border-2 border-white/80 rotate-[-4deg] hover:rotate-0 transition-transform duration-300 z-20 overflow-hidden">
              <div className="h-4 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="h-60 bg-[#0A0D14] rounded-xl overflow-hidden p-3.5 flex flex-col justify-between text-white font-mono select-none">
                <div className="flex justify-between items-center text-white/60 text-[9px] border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MOBILE 60FPS
                  </span>
                  <span className="text-[#CEF241] font-bold">100%</span>
                </div>

                <div className="my-auto py-2 space-y-2">
                  <div className="text-[10px] uppercase tracking-wider text-[#1447E6] font-bold">
                    Spatial UI Architecture
                  </div>
                  <div className="text-xs font-sans font-bold text-white leading-tight">
                    Responsive Mobile Viewport Choreography
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-[9px] text-white/60 space-y-1">
                    <div className="flex justify-between">
                      <span>Hydration:</span>
                      <span className="text-emerald-400">84ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gesture Engine:</span>
                      <span className="text-cyan-400">Active</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px]">
                  <span className="text-white/40">Zero Layout Shift</span>
                  <span className="text-[#CEF241] font-semibold">&bull; Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
