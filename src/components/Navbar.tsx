import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoBg from '@/assets/projectimages/logo-bg.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Education', href: 'education' },
    { name: 'Contact', href: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = './santosh_resume.pdf';
    link.download = 'santosh_resume.pdf';
    link.click();
  };

  // Prevent rapid toggling
  const handleMenuToggle = () => {
    if (menuAnimating) return;
    setIsMobileMenuOpen((open) => !open);
    setMenuAnimating(true);
    setTimeout(() => setMenuAnimating(false), 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoBg} 
              alt="Logo" 
              className="w-8 h-8 rounded-full"
            />
            <div className="text-2xl font-display bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Santosh Seelaboina
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2 py-1 text-base font-heading font-medium transition-colors duration-300 ${
                  activeSection === item.href
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={downloadResume}
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hidden sm:flex font-heading"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            {/* Mobile menu button */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden p-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scale: 0.98, y: -24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -24 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-2 pb-2 border-t border-white/10"
            >
              <div className="flex flex-col space-y-1 mt-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-2 py-1 text-base font-heading font-medium transition-colors duration-300 rounded ${
                      activeSection === item.href
                        ? 'text-blue-400 bg-white/10'
                        : 'text-white hover:text-blue-300 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={downloadResume}
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mt-4 w-full font-heading"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
