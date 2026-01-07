
import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (direction: 'left' | 'right' | 'up' = 'up') => {
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
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
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
          return 'opacity-0 translate-x-[-100px]';
        case 'right':
          return 'opacity-0 translate-x-[100px]';
        default:
          return 'opacity-0 translate-y-10';
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0';
  };

  return {
    ref: elementRef,
    className: `transition-all duration-1000 ease-out ${getAnimationClass()}`
  };
};
