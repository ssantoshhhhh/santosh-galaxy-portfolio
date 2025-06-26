import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  ReactOriginalIcon,
  ElectronOriginalIcon,
  TailwindcssOriginalIcon,
  Html5OriginalIcon,
  Css3OriginalIcon,
  JavascriptOriginalIcon,
  BootstrapOriginalIcon,
  MaterialuiOriginalIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon,
  PhpOriginalIcon,
  MysqlOriginalIcon,
  MongodbOriginalIcon,
  PythonOriginalIcon,
  JavaOriginalIcon,
  CplusplusOriginalIcon,
  GitOriginalIcon,
  GithubOriginalIcon,
  PostmanOriginalIcon,
  VercelOriginalIcon,
  NetlifyOriginalIcon
} from 'react-devicons';

const SkillsSection = () => {
  const leftReveal = useScrollReveal('left');
  const rightReveal = useScrollReveal('right');
  const centerReveal1 = useScrollReveal('up');
  const centerReveal2 = useScrollReveal('up');
  const centerReveal3 = useScrollReveal('up');

  const frontendSkills = [
    { name: "React Js", icon: <ReactOriginalIcon size={24} /> },
    { name: "Electron Js", icon: <ElectronOriginalIcon size={24} /> },
    { name: "Tailwind CSS", icon: <TailwindcssOriginalIcon size={24} /> },
    { name: "HTML", icon: <Html5OriginalIcon size={24} /> },
    { name: "CSS", icon: <Css3OriginalIcon size={24} /> },
    { name: "JavaScript", icon: <JavascriptOriginalIcon size={24} /> },
    { name: "Bootstrap", icon: <BootstrapOriginalIcon size={24} /> },
    { name: "Material UI", icon: <MaterialuiOriginalIcon size={24} /> }
  ];

  const backendSkills = [
    { name: "Node Js", icon: <NodejsOriginalIcon size={24} /> },
    { name: "Express Js", icon: <ExpressOriginalIcon size={24} /> },
    { name: "PHP", icon: <PhpOriginalIcon size={24} /> },
    { name: "MySQL", icon: <MysqlOriginalIcon size={24} /> },
    { name: "MongoDB", icon: <MongodbOriginalIcon size={24} /> }
  ];

  const programmingLanguages = [
    { name: "C++", icon: <CplusplusOriginalIcon size={24} /> },
    { name: "Java", icon: <JavaOriginalIcon size={24} /> },
    { name: "Python", icon: <PythonOriginalIcon size={24} /> },
    { name: "JavaScript", icon: <JavascriptOriginalIcon size={24} /> }
  ];

  const others = [
    { name: "Git", icon: <GitOriginalIcon size={24} /> },
    { name: "GitHub", icon: <GithubOriginalIcon size={24} /> },
    { name: "Postman", icon: <PostmanOriginalIcon size={24} /> },
    { name: "Thunder Client", icon: <span className='text-xl'>⚡</span> }
  ];

  const deployment = [
    { name: "Render", icon: <span className='text-xl'>☁️</span> },
    { name: "GitHub Pages", icon: <GithubOriginalIcon size={24} /> },
    { name: "Vercel", icon: <VercelOriginalIcon size={24} /> },
    { name: "Netlify", icon: <NetlifyOriginalIcon size={24} /> },
    { name: "Infinity Free", icon: <span className='text-xl'>∞</span> }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my skills on which I have been working on for the past 2 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Frontend Card */}
          <div 
            ref={leftReveal.ref}
            className={`bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out cursor-pointer ${leftReveal.className}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div 
            ref={rightReveal.ref}
            className={`bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out cursor-pointer ${rightReveal.className}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Skill Cards Row */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          {/* Programming Languages Card */}
          <div
            ref={centerReveal1.ref}
            className={`bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out cursor-pointer ${centerReveal1.className}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {programmingLanguages.map((skill, index) => (
                <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Others Card */}
          <div
            ref={centerReveal2.ref}
            className={`bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out cursor-pointer ${centerReveal2.className}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Others</h3>
            <div className="grid grid-cols-2 gap-4">
              {others.map((skill, index) => (
                <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Deployment Card (same size as others) */}
          <div
            ref={centerReveal3.ref}
            className={`bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out cursor-pointer ${centerReveal3.className}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Deployment</h3>
            <div className="grid grid-cols-2 gap-4">
              {deployment.map((skill, index) => (
                <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
