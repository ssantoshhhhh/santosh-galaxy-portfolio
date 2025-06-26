
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionReveal = useScrollReveal('left');

  const filters = ['All', 'Web Apps', 'Android Apps', 'Desktop Apps', 'Others'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Apps",
      duration: "3 months",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Android Apps",
      duration: "2 months",
      description: "Mobile app for team collaboration and task tracking with real-time notifications and offline support.",
      image: "/placeholder.svg",
      liveUrl: "https://play.google.com/store/apps/example",
      codeUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Apps",
      duration: "1 month",
      description: "Responsive portfolio website with 3D animations and smooth scrolling effects.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Desktop Calculator",
      category: "Desktop Apps",
      duration: "2 weeks",
      description: "Cross-platform desktop calculator with advanced mathematical functions and history tracking.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com/download",
      codeUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "API Documentation Tool",
      category: "Others",
      duration: "1 month",
      description: "Tool for generating interactive API documentation with live testing capabilities.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      category: "Web Apps",
      duration: "3 weeks",
      description: "Real-time weather monitoring dashboard with charts, maps, and location-based forecasts.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextProject = () => {
    if (selectedProject !== null) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex].id);
    }
  };

  const prevProject = () => {
    if (selectedProject !== null) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
      setSelectedProject(filteredProjects[prevIndex].id);
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={sectionReveal.ref} className={sectionReveal.className}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Here are some of the projects I've worked on, showcasing my skills and creativity
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'border-white/20 text-white hover:bg-white/10 bg-transparent'
                  } transition-all duration-300`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card-3d bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="text-blue-400 text-sm mb-2">{project.duration}</div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      Live Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.codeUrl, '_blank');
                      }}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project modal */}
          {selectedProject && selectedProjectData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-white/20">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{selectedProjectData.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white hover:text-gray-300 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="space-y-4 mb-6">
                    <div className="text-blue-400 font-semibold">{selectedProjectData.duration}</div>
                    <p className="text-gray-300">{selectedProjectData.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                        onClick={() => window.open(selectedProjectData.liveUrl, '_blank')}
                      >
                        Live Preview
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        onClick={() => window.open(selectedProjectData.codeUrl, '_blank')}
                      >
                        View Code
                      </Button>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button onClick={prevProject} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Previous
                      </Button>
                      <Button onClick={nextProject} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
