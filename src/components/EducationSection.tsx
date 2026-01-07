import { useScrollReveal } from '@/hooks/useScrollReveal';

const EducationSection = () => {
  const sectionReveal = useScrollReveal('right');

  const education = [
    {
      degree: "B.Tech in Computer Science and Information Technology",
      institution: "SRKR Engineering College, Bhimavaram",
      duration: "2023 – 2027",
      description: "Pursuing Under Graduation in Computer Science and Information Technology (CSIT).\n\nDBMS | C | Data Structures in C | Advance Data Structures | Java | MySQL",
      side: "left"
    },
    {
      degree: "Intermediate",
      institution: "Aditya Junior College, Narasapur",
      duration: "2021 – 2023",
      description: "Completed high school with a focus on mathematics, physics and chemistry and scored 84.9% in State Board Exams.\n\nMathematics | Physics | Chemistry",
      side: "right"
    },
    {
      degree: "SSC - xth Standard",
      institution: "Pratibha E.M High School",
      duration: "2020 – 2021",
      description: "Completed xth Standard and scored 9.7/10.0 CGPA",
      side: "left"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={sectionReveal.ref} className={sectionReveal.className}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-white">Education</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My educational background and continuous learning journey
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden md:block"></div>

            {education.map((edu, index) => (
              <div key={index} className={`flex items-center mb-12 ${edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:mb-12 mb-8`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${edu.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left mb-4 md:mb-0`}>
                  <div className="card-3d bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-gray-300 font-semibold mb-2">{edu.institution}</h4>
                    <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                  </div>
                </div>

                {/* Timeline dot - hidden on mobile */}
                <div className="w-2/12 justify-center hidden md:flex">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900 relative z-10">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Duration */}
                <div className={`w-full md:w-5/12 ${edu.side === 'left' ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'} text-center`}>
                  <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {edu.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
