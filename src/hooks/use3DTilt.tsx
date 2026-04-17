import { useCallback } from 'react';

export const use3DTilt = () => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLElement | null) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  }, []);

  const handleMouseLeave = useCallback((cardRef: HTMLElement | null) => {
    if (!cardRef) return;
    cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }, []);

  return { handleMouseMove, handleMouseLeave };
};
