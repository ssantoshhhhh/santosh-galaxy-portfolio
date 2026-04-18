import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import santoshImage from '@/assets/santoshhh.jpg';

const AboutSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const leftReveal = useScrollReveal('left');

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

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#15161a]"
    >
      {/* Dots pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Right Side Full Height Image Background */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#15161a] via-[#15161a]/60 to-transparent z-10 md:bg-gradient-to-r md:from-[#15161a] md:via-[#15161a]/40 md:to-transparent"></div>
        <img
          src={santoshImage}
          alt="Santosh Seelaboina"
          className="object-cover object-center w-full h-full grayscale opacity-60 md:opacity-90 mix-blend-luminosity"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 md:pt-0 h-full flex flex-col justify-center">
        <div 
          ref={leftReveal.ref} 
          className={`w-full md:w-[60%] flex flex-col justify-center ${leftReveal.className}`} 
          style={leftReveal.style}
        >
          {/* Main Huge Typography */}
          <h1 className="text-[20vw] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-[0.8] font-black tracking-tighter uppercase text-white mb-6 select-none font-display">
            SANTOS<span className="text-[#FF2A4D]">-H</span>
          </h1>
          
          <div className="space-y-4 max-w-2xl pl-1 md:pl-2">
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Hi, I'm <span className="text-white">Santosh Seelaboina</span>
            </h2>
            
            <div className="text-xl md:text-2xl text-gray-300 min-h-[2.5rem] font-heading font-medium tracking-wide">
              I'm a <span className="text-white ml-1">{displayedText}</span>
              <span className="animate-blink text-[#FF2A4D] ml-1">|</span>
            </div>
            
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-body">
              I am a passionate and creative developer with a strong foundation in computer science and a love for building beautiful, scalable, and user-centric digital experiences. My journey began with C and Data Structures, and has grown to mastering the MERN stack, UI/UX design, and system architecture. I thrive on solving real-world problems, collaborating with teams, and continuously learning new technologies to deliver impactful solutions.
            </p>
            
            <div className="pt-6">
              <button 
                onClick={() => window.open('./santosh_resume.pdf')} 
                className="bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-heading font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              >
                Check Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
