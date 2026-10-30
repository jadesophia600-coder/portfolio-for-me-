import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { LiveMockupPreview } from './LiveMockupPreview';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-[#FAF8F5] dark:bg-[#0E1017] text-[#111215] dark:text-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E6E1D6] dark:border-[#222533] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between bg-white dark:bg-[#141622]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold bg-[#1447E6]/10 text-[#1447E6] dark:bg-[#3B82F6]/20 dark:text-[#60A5FA]">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#8A867E] dark:text-[#787D8E]">&bull; {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#58554E] dark:text-[#9DA2B3] hover:text-[#111215] dark:hover:text-white hover:bg-[#F3EFE9] dark:hover:bg-[#1E2234] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#58554E] dark:text-[#9DA2B3] font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#141622] border border-[#E6E1D6] dark:border-[#222533]">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8A867E] dark:text-[#787D8E]">Role</div>
              <div className="font-mono text-xs font-semibold text-[#111215] dark:text-[#FAF8F5] mt-0.5 truncate">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8A867E] dark:text-[#787D8E]">Timeline</div>
              <div className="font-mono text-xs font-semibold text-[#111215] dark:text-[#FAF8F5] mt-0.5">{project.timeline}</div>
            </div>
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx}>
                <div className="text-[10px] font-mono uppercase text-[#8A867E] dark:text-[#787D8E]">{m.label}</div>
                <div className="font-mono text-xs font-semibold text-[#1447E6] dark:text-[#60A5FA] mt-0.5 truncate">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Browser Mockup Preview Container */}
          <div className="rounded-xl overflow-hidden border border-[#E6E1D6] dark:border-[#222533] bg-white dark:bg-[#141622] shadow-editorial">
            <div className="bg-[#FAF8F5] dark:bg-[#181B27] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#E6E1D6] dark:border-[#222533] flex items-center justify-between text-[11px] font-mono text-[#58554E] dark:text-[#9DA2B3]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-400" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="truncate max-w-[170px] sm:max-w-[240px] text-[10px] sm:text-[11px]">{project.mockup.desktopPreviewLabel}</span>
              <span className="text-emerald-500 font-semibold text-[10px] sm:text-[11px]">Production</span>
            </div>
            <div className="h-56 sm:h-80 md:h-[400px] w-full relative">
              <LiveMockupPreview project={project} />
            </div>
          </div>

          {/* Deep-Dive Case Study Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* The Challenge */}
            <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#141622] border border-[#E6E1D6] dark:border-[#222533]">
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#111215] dark:text-[#FAF8F5] flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Core Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Architectural Solution */}
            <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#141622] border border-[#E6E1D6] dark:border-[#222533]">
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#111215] dark:text-[#FAF8F5] flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Engineering Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8A867E] dark:text-[#787D8E] mb-3">
              Deliverables &amp; Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-lg bg-white dark:bg-[#141622] border border-[#E6E1D6] dark:border-[#222533] text-xs font-sans text-[#111215] dark:text-[#FAF8F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#1447E6] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8A867E] dark:text-[#787D8E] mb-2 sm:mb-3">
              Technologies &amp; Architecture
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-white dark:bg-[#141622] text-[#111215] dark:text-[#FAF8F5] border border-[#E6E1D6] dark:border-[#222533]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-white dark:bg-[#141622] border-t border-[#E6E1D6] dark:border-[#222533] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-[#8A867E] dark:text-[#787D8E] hidden sm:block">
            Victor Ogunsanya &bull; Case Study Overview
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl border border-[#E6E1D6] dark:border-[#2D3142] text-xs font-mono text-[#111215] dark:text-[#FAF8F5] hover:bg-[#F3EFE9] dark:hover:bg-[#1E2234] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center px-5 py-2 rounded-xl bg-[#1447E6] text-white text-xs font-mono font-semibold hover:bg-[#0C35B8] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
