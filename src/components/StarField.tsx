
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  element: HTMLDivElement;
}

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const numStars = 150;
    
    // Clear existing stars
    container.innerHTML = '';
    starsRef.current = [];

    // Create stars with random properties
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.position = 'absolute';
      star.style.background = 'white';
      star.style.borderRadius = '50%';
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      
      container.appendChild(star);
      
      const starObject: Star = {
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        element: star
      };
      
      star.style.opacity = starObject.opacity.toString();
      starsRef.current.push(starObject);
    }

    // Animation loop
    const animate = () => {
      starsRef.current.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;
        
        // Wrap around edges
        if (star.x > window.innerWidth) star.x = 0;
        if (star.x < 0) star.x = window.innerWidth;
        if (star.y > window.innerHeight) star.y = 0;
        if (star.y < 0) star.y = window.innerHeight;
        
        // Update position
        star.element.style.left = star.x + 'px';
        star.element.style.top = star.y + 'px';
        
        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        star.element.style.opacity = star.opacity.toString();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      starsRef.current.forEach(star => {
        if (star.x > window.innerWidth) star.x = window.innerWidth;
        if (star.y > window.innerHeight) star.y = window.innerHeight;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="starfield" />;
};

export default StarField;
