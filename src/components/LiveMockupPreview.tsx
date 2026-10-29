import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Check, Sparkles, Layers, Eye, Smartphone, Monitor } from 'lucide-react';

interface LiveMockupPreviewProps {
  project: Project;
  viewMode?: 'desktop' | 'mobile';
  interactive?: boolean;
}

export const LiveMockupPreview: React.FC<LiveMockupPreviewProps> = ({
  project,
  viewMode = 'desktop',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="w-full h-full relative overflow-hidden select-none bg-[#101114] flex flex-col justify-between group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />

      {/* Main High-Resolution Project Visual Asset */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Ambient Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />

        {/* Hover Highlight Overlay */}
        <div
          className={`absolute inset-0 bg-[#1447E6]/10 backdrop-blur-[1px] transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Top Floating Glass Badges */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between text-[10px] font-mono pointer-events-none">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CEF241] animate-pulse" />
          <span>{project.category}</span>
        </span>

        <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-white/70 border border-white/10">
          {project.year}
        </span>
      </div>

      {/* Bottom Floating Info Glass Card */}
      <div className="absolute bottom-3 left-3 right-3 z-20 p-3 sm:p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-between transition-all duration-300 shadow-xl group-hover:bg-black/85">
        <div className="space-y-0.5 max-w-[70%]">
          <div className="text-[10px] font-mono text-[#CEF241] uppercase tracking-wider font-semibold">
            {project.mockup.tagline}
          </div>
          <h4 className="text-sm sm:text-base font-sans font-bold text-white truncate leading-tight">
            {project.title}
          </h4>
          <div className="text-[11px] font-mono text-white/60 truncate hidden sm:block">
            {project.metrics[0]?.label}: <span className="text-white font-medium">{project.metrics[0]?.value}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-md bg-[#1447E6] text-white font-mono text-[10px] font-semibold flex items-center gap-1 shadow-sm group-hover:bg-[#0C35B8] transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
