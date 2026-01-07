import { useState, useEffect } from 'react';
import PillNav from './PillNav';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: './santosh_resume.pdf', hideOnDesktop: true }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Filter only section links (starting with #)
      const sectionItems = navItems.filter(item => item.href.startsWith('#'));
      
      for (let i = sectionItems.length - 1; i >= 0; i--) {
        const item = sectionItems[i];
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ResumeButton = (
    <a 
      href="./santosh_resume.pdf"
      download="santosh_resume.pdf"
      className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-2 h-[42px] transition-transform hover:scale-105"
      style={{
        lineHeight: 1
      }}
    >
      Resume
    </a>
  );

  return (
    <PillNav
      logo="/projectimages/logo-bg.png"
      items={navItems}
      activeHref={`#${activeSection}`}
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      rightContent={ResumeButton}
    />
  );
};

export default Navbar;
