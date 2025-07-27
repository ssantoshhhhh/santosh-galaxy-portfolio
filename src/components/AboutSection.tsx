import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const leftReveal = useScrollReveal('left');
  const rightReveal = useScrollReveal('right');

  const roles = [
    'System Designer',
    'UI Developer',
    'Web Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Database Designer'
  ];

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    let timeoutId: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleImageMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left side - Text content */}
          <div ref={leftReveal.ref} className={`space-y-4 ${leftReveal.className}`}>
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-display text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-display">Santosh Seelaboina</span>
              </h1>
              
              <div className="text-2xl lg:text-2xl text-gray-300 min-h-[2.5rem] font-heading">
                I'm a{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-heading font-semibold">
                  {displayedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
              
              <p className="text-base text-gray-400 max-w-2xl leading-relaxed font-body">
                I am a passionate and creative developer with a strong foundation in computer science and a love for building beautiful, scalable, and user-centric digital experiences. My journey began with C and Data Structures, and has grown to mastering the MERN stack, UI/UX design, and system architecture. I thrive on solving real-world problems, collaborating with teams, and continuously learning new technologies to deliver impactful solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={()=>window.open('./santosh_resume.pdf')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-heading font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Check Resume
              </button>
              {/* <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Download CV
              </button> */}
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div ref={rightReveal.ref} className={`flex justify-center lg:justify-end ${rightReveal.className}`}>
            <div className="relative group">
              <div 
                ref={imageRef}
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-600 p-1 bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer transition-all duration-500 ease-out"
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img
                    src="/santosh.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-70" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
