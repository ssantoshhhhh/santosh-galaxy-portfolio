
import { useState } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import PortfolioPopup from '@/components/PortfolioPopup';

const Index = () => {
  const [showPortfolioPopup, setShowPortfolioPopup] = useState(false);

  const handleContactSectionVisible = () => {
    setShowPortfolioPopup(true);
  };

  const handleClosePortfolioPopup = () => {
    setShowPortfolioPopup(false);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <StarField />
      <Navbar />
      <ScrollToTop />
      
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection onContactSectionVisible={handleContactSectionVisible} />
      </main>
      
      <Footer />
      <PortfolioPopup showPopup={showPortfolioPopup} onClose={handleClosePortfolioPopup} />
    </div>
  );
};

export default Index;
