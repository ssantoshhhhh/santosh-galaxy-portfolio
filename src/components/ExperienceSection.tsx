import { useScrollReveal } from '@/hooks/useScrollReveal';

// Sub-component for individual experience card
const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const reveal = useScrollReveal(exp.side === 'left' ? 'left' : 'right', index * 100);

  return (
    <div 
      ref={reveal.ref}
      className={`flex items-center mb-12 ${exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:mb-12 mb-8 ${reveal.className}`}
      style={reveal.style}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left mb-4 md:mb-0`}>
        <div className="card-3d bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
          <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
          <h4 className="text-gray-300 font-semibold mb-2">{exp.company}</h4>
          <p className="text-gray-400 text-sm mb-3 whitespace-pre-line">{exp.description}</p>
        </div>
      </div>

      {/* Timeline dot - hidden on mobile */}
      <div className="w-2/12 justify-center hidden md:flex">
        <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900 relative z-10">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Duration */}
      <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'} text-center`}>
        <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold inline-block">
          {exp.duration}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionReveal = useScrollReveal('left');

  const experiences = [
    {
      title: "SDE Intern",
      company: "bluconn",
      duration: "Jan 2026 - current",
      description: "Working as a SDE Intern at bluconn.",
      side: "right"
    },
    {
      title: "Web Developer",
      company: "Bhimavaram Online's Lunch Box",
      duration: "Oct 2024 – Apr 2025",
      description: "Worked as a Full Stack Developer Intern at Bhimavaram Online's Lunch Box.\n\nIntern\nWeb Development\nPHP | MySQL",
      side: "left"
    },
    {
      title: "MERN Stack Hackathon",
      company: "24 hr Hackathon",
      duration: "Apr 2024",
      description: "5 Day Bootcamp and with following 24 hour Hackathon\n\nReact JS | Node JS | MongoDB | Tailwind CSS",
      side: "right"
    },
    {
      title: "Vedic Vision Hackathon Participation",
      company: "Bootscamp Hackathon",
      duration: "Aug 2026",
      description: "Participated in a 15-day Bootcamp and 24-hour Hackathon\nBuilt a fully functional Fitness Tracker App\n\nReact JS | Node JS | MongoDB | Chakra UI",
      side: "left"
    },
    {
      title: "Web Development Course",
      company: "AICTE IDEALs",
      duration: "Apr 2024",
      description: "Completed a short-term Web Development Course provided by AICTE IDEALs.\n\nHTML5 | CSS3 | JavaScript | Git & GitHub",
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-3">
        <div ref={sectionReveal.ref} className={sectionReveal.className}>
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Work <span className="text-white">Experience</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden md:block"></div>

            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
