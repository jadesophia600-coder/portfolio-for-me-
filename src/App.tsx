import React, { useState } from 'react';
import { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { ProjectGallery } from './components/ProjectGallery';
import { Capabilities } from './components/Capabilities';
import { TechStackWorkflow } from './components/TechStackWorkflow';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedCaseStudy(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#090A0E] text-[#111215] dark:text-[#FAF8F5] flex flex-col relative selection:bg-[#1447E6] selection:text-white transition-colors duration-300">
      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Hero Introduction & Interactive Reel */}
        <Hero />

        {/* 1.5 Infinite Tech Ticker Strip */}
        <TechTicker />

        {/* 2. Featured Projects Showcase */}
        <FeaturedShowcase onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 3. Project Archive & Exploration */}
        <ProjectGallery onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 4. Capabilities & Services */}
        <Capabilities />

        {/* 5. Tech Stack & Practical Workflow */}
        <TechStackWorkflow />

        {/* 6. Authentic About & Philosophy */}
        <About />

        {/* 7. Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={handleCloseCaseStudy}
      />
    </div>
  );
};

export default App;
