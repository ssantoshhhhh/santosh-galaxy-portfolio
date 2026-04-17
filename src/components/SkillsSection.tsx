import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import BorderGlow from './BorderGlow';
import { use3DTilt } from '@/hooks/use3DTilt';
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
  NetlifyOriginalIcon,
  NextjsOriginalIcon,
  NestjsOriginalIcon,
  PrismaOriginalIcon,
  DockerOriginalIcon
} from 'react-devicons';

const SkillsSection = () => {
  const leftReveal = useScrollReveal('left', 0);
  const rightReveal = useScrollReveal('right', 200);
  const centerReveal1 = useScrollReveal('up', 400); // Programming Languages
  const centerReveal2 = useScrollReveal('up', 600); // Others
  const centerReveal3 = useScrollReveal('up', 800); // Deployment

  const frontendSkills = [
    { name: "React Js", icon: <ReactOriginalIcon size={24} /> },
    { name: "Electron Js", icon: <ElectronOriginalIcon size={24} /> },
    { name: "Tailwind CSS", icon: <TailwindcssOriginalIcon size={24} /> },
    { name: "HTML", icon: <Html5OriginalIcon size={24} /> },
    { name: "CSS", icon: <Css3OriginalIcon size={24} /> },
    { name: "JavaScript", icon: <JavascriptOriginalIcon size={24} /> },
    { name: "Bootstrap", icon: <BootstrapOriginalIcon size={24} /> },
    { name: "Material UI", icon: <MaterialuiOriginalIcon size={24} /> },
    { name: "Next Js", icon: <NextjsOriginalIcon size={24} /> }
  ];

  const backendSkills = [
    { name: "Node Js", icon: <NodejsOriginalIcon size={24} /> },
    { name: "Express Js", icon: <ExpressOriginalIcon size={24} /> },
    { name: "REST API", icon: <span className='text-xl'>🌐</span> },
    { name: "PHP", icon: <PhpOriginalIcon size={24} /> },
    { name: "MySQL", icon: <MysqlOriginalIcon size={24} /> },
    { name: "MongoDB", icon: <MongodbOriginalIcon size={24} /> },
    { name: "Nest Js", icon: <NestjsOriginalIcon size={24} /> }
  ];

  const programmingLanguages = [
    { name: "C", icon: <CplusplusOriginalIcon size={24} /> },
    { name: "Java", icon: <JavaOriginalIcon size={24} /> },
    { name: "Python", icon: <PythonOriginalIcon size={24} /> },
    { name: "JavaScript", icon: <JavascriptOriginalIcon size={24} /> }
  ];

  const others = [
    { name: "Git", icon: <GitOriginalIcon size={24} /> },
    { name: "GitHub", icon: <GithubOriginalIcon size={24} /> },
    { name: "Postman", icon: <PostmanOriginalIcon size={24} /> },
    { name: "Thunder Client", icon: <span className='text-xl'>⚡</span> },
    { name: "RAG", icon: <span className='text-xl'>🤖</span> },
    { name: "Pinecone", icon: <span className='text-xl'>🌲</span> },
    { name: "n8n", icon: <span className='text-xl'>🔗</span> },
    { name: "Prisma", icon: <PrismaOriginalIcon size={24} /> },
    { name: "Docker", icon: <DockerOriginalIcon size={24} /> }
  ];

  const deployment = [
    { name: "Render", icon: <span className='text-xl'>☁️</span> },
    { name: "GitHub Pages", icon: <GithubOriginalIcon size={24} /> },
    { name: "Vercel", icon: <VercelOriginalIcon size={24} /> },
    { name: "Netlify", icon: <NetlifyOriginalIcon size={24} /> },
    { name: "Infinity Free", icon: <span className='text-xl'>∞</span> }
  ];

  const { handleMouseMove, handleMouseLeave } = use3DTilt();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-body">
            Here are some of my skills on which I have been working on for the past 2 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Frontend Card */}
          <div ref={leftReveal.ref} className={`h-full ${leftReveal.className}`} style={leftReveal.style}>
            <div
              className="h-full cursor-pointer transition-transform duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full w-full backdrop-blur-sm"
              >
                <div className="p-8 w-full h-full">
                  <h3 className="text-2xl font-heading text-white mb-8 text-center">Frontend</h3>
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
                        <span className="text-white font-body font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>

          {/* Backend Card */}
          <div ref={rightReveal.ref} className={`h-full ${rightReveal.className}`} style={rightReveal.style}>
            <div
              className="h-full cursor-pointer transition-transform duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full w-full backdrop-blur-sm"
              >
                <div className="p-8 w-full h-full">
                  <h3 className="text-2xl font-heading text-white mb-8 text-center">Backend</h3>
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
                        <span className="text-white font-body font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>

        {/* New Skill Cards Row */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          {/* Programming Languages Card */}
          <div ref={centerReveal1.ref} className={`h-full ${centerReveal1.className}`} style={centerReveal1.style}>
            <div
              className="h-full cursor-pointer transition-transform duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full w-full backdrop-blur-sm"
              >
                <div className="p-8 w-full h-full">
                  <h3 className="text-2xl font-heading text-white mb-8 text-center">Programming Languages</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {programmingLanguages.map((skill, index) => (
                      <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-body font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
          {/* Others Card */}
          <div ref={centerReveal2.ref} className={`h-full ${centerReveal2.className}`} style={centerReveal2.style}>
            <div
              className="h-full cursor-pointer transition-transform duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full w-full backdrop-blur-sm"
              >
                <div className="p-8 w-full h-full">
                  <h3 className="text-2xl font-heading text-white mb-8 text-center">Others</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {others.map((skill, index) => (
                      <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-body font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
          {/* Deployment Card (same size as others) */}
          <div ref={centerReveal3.ref} className={`h-full ${centerReveal3.className}`} style={centerReveal3.style}>
            <div
              className="h-full cursor-pointer transition-transform duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full w-full backdrop-blur-sm"
              >
                <div className="p-8 w-full h-full">
                  <h3 className="text-2xl font-heading text-white mb-8 text-center">Deployment</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {deployment.map((skill, index) => (
                      <div key={skill.name} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-body font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
