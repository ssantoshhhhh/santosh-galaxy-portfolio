
import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (direction: 'left' | 'right' | 'up' = 'up', delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0,
        rootMargin: '0px 0px 300px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'opacity-0 -translate-x-12 scale-[0.98] rotate-[-1deg]';
        case 'right':
          return 'opacity-0 translate-x-12 scale-[0.98] rotate-[1deg]';
        default:
          return 'opacity-0 translate-y-12 scale-[0.98]';
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0';
  };

  return {
    ref: elementRef,
    className: `transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${getAnimationClass()}`, // Faster, smoother easing
    style: { transitionDelay: `${delay}ms` }
  };
};
