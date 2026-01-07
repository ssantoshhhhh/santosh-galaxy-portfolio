
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
import LogoLoop from '@/components/LogoLoop';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiMysql, SiPhp, SiPython, SiCplusplus, 
  SiGit, SiDocker, SiPrisma, SiNestjs 
} from 'react-icons/si';

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
        
        <div className="flex justify-center items-center py-10 px-4 w-full overflow-hidden">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="w-full"
          >
            <LogoLoop
              logos={[
                { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiExpress className="text-white" />, title: "Express", href: "https://expressjs.com" },
                { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
                { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
                { node: <SiPhp className="text-[#777BB4]" />, title: "PHP", href: "https://www.php.net" },
                { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
                { node: <SiCplusplus className="text-[#00599C]" />, title: "C++", href: "https://isocpp.org" },
                { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
                { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
                { node: <SiPrisma className="text-white" />, title: "Prisma", href: "https://www.prisma.io" },
                { node: <SiNestjs className="text-[#E0234E]" />, title: "NestJS", href: "https://nestjs.com" },
              ]}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners"
            />
          </ScrollReveal>
        </div>

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
