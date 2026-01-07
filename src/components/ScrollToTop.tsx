
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-black rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      style={{
        background: `conic-gradient(from 0deg, #ffffff ${scrollProgress * 3.6}deg, rgba(255,255,255,0.2) ${scrollProgress * 3.6}deg)`
      }}
    >
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
        <ArrowUp className="w-5 h-5 text-white" />
      </div>
    </button>
  );
};

export default ScrollToTop;
