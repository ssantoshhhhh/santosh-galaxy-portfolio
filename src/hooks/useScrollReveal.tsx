
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
        threshold: 0.15, // Slightly higher threshold for better visibility before trigger
        rootMargin: '0px 0px -50px 0px' 
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
          return 'opacity-0 -translate-x-12'; // Reduced from -100px (approx 3rem)
        case 'right':
          return 'opacity-0 translate-x-12'; // Reduced from 100px
        default:
          return 'opacity-0 translate-y-12'; // 3rem (48px), slightly more standard slide up
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0';
  };

  return {
    ref: elementRef,
    className: `transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${getAnimationClass()}`, // Smooth easing
    style: { transitionDelay: `${delay}ms` }
  };
};
