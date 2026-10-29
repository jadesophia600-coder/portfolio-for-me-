import React, { useState } from 'react';
import { Project } from './data/portfolioData';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Signature Hero Section */}
        <Hero />

        {/* 2. Flagship Interactive Projects Showcase */}
        <FeaturedShowcase onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 3. Experimental Index & Complete Gallery */}
        <ProjectGallery onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 4. Capabilities & Value Delivery */}
        <Capabilities />

        {/* 5. Engineering Stack & 4-Phase Workflow */}
        <TechStackWorkflow />

        {/* 6. Authentic Studio Manifesto & About */}
        <About />

        {/* 7. Conversion Contact & Commission Brief Engine */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
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

