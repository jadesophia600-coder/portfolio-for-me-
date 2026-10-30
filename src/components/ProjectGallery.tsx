import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGalleryProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const { galleryProjects } = PORTFOLIO_CONFIG;

  const filteredProjects = selectedCategory === 'All Projects'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 sm:py-28 bg-[#F3EFE9]/60 dark:bg-[#0D0F16] border-y border-[#E6E1D6] dark:border-[#222533] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8"
        >
          <div>
            <div className="text-xs font-mono text-[#1447E6] dark:text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              <span>EXPLORE MORE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#111215] dark:text-[#FAF8F5]">
              Archive &amp; Experiments.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58554E] dark:text-[#9DA2B3] max-w-sm font-normal">
            A catalog of client platforms, design systems, and frontend applications built across modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter Bar - Horizontal Scroll on Mobile */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#E6E1D6] dark:border-[#222533]">
          {PORTFOLIO_CONFIG.categories.map(category => (
            <motion.button
              key={category}
              layout
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 shrink-0 ${
                selectedCategory === category
                  ? 'bg-[#111215] dark:bg-white text-[#FAF8F5] dark:text-[#090A0E] font-semibold shadow-xs'
                  : 'bg-white dark:bg-[#161824] text-[#58554E] dark:text-[#9DA2B3] border border-[#E6E1D6] dark:border-[#2D3142] hover:border-[#111215] dark:hover:border-white hover:text-[#111215] dark:hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid of Projects with Layout Animation */}
        <motion.div
          layout
          className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const colSpan = index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  onClick={() => onOpenCaseStudy(project)}
                  className={`${colSpan} group cursor-pointer flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#12141D] border border-[#E6E1D6] dark:border-[#222533] hover:border-[#1447E6]/40 dark:hover:border-[#3B82F6]/40 shadow-xs hover:shadow-lifted transition-colors relative overflow-hidden`}
                >
                  {/* Project Header Info */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#8A867E] dark:text-[#787D8E] mb-2.5 sm:mb-3">
                      <span className="font-bold text-[#1447E6] dark:text-[#60A5FA]">0{index + 4}</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FAF8F5] dark:bg-[#1A1D2B] border border-[#E6E1D6] dark:border-[#2D3142] text-[#111215] dark:text-[#FAF8F5] uppercase tracking-wider text-[10px]">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111215] dark:text-[#FAF8F5] group-hover:text-[#1447E6] dark:group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#58554E] dark:text-[#9DA2B3] line-clamp-2">
                      {project.tagline}
                    </p>

                    <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAF8F5] dark:bg-[#161824] text-[#58554E] dark:text-[#9DA2B3] border border-[#E6E1D6] dark:border-[#2D3142]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Preview / Thumbnail Banner */}
                  <div className="mt-5 sm:mt-6 rounded-xl overflow-hidden border border-[#E6E1D6] dark:border-[#222533] bg-[#0E1017] aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 sm:p-4">
                      <div className="flex items-center justify-between w-full text-white text-xs font-mono">
                        <span className="text-[10px] sm:text-[11px] font-medium text-[#FAF8F5] truncate max-w-[70%]">
                          {project.metrics[0]?.label}: {project.metrics[0]?.value}
                        </span>
                        <span className="flex items-center gap-1 text-[#60A5FA] group-hover:translate-x-1 transition-transform text-xs">
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
