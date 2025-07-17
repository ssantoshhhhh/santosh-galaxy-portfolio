import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    <section id="projects" className="py-10">
      <div className="container mx-auto px-3">
        <div ref={sectionReveal.ref} className={sectionReveal.className}>
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-2">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-display">Projects</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-4 font-body">
              Here are some of the projects I've worked on, showcasing my skills and creativity
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  className={`font-heading text-xs sm:text-sm ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredProjects.map((project) => {
              const isSelected = selectedProject === project.id;
              return (
                <div
                  key={project.id}
                  className={`card-3d bg-white/5 dark:bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer relative`}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Mobile: Inline expanded preview, Desktop: Only show default card */}
                  {isSelected ? (
                    <>
                      {/* Mobile inline preview */}
                      <div className="block sm:hidden">
                        <div className="p-4 flex flex-col h-full animate-project-preview">
                          {/* Close button */}
                          <button
                            onClick={e => { e.stopPropagation(); setSelectedProject(null); }}
                            className="absolute top-2 right-2 z-10 p-3 bg-black/80 rounded-full text-white hover:text-gray-300 transition-colors text-xl"
                            style={{ touchAction: 'manipulation' }}
                          >
                            <X className="w-6 h-6" />
                          </button>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-xl font-display text-white mb-3 text-center">{project.title}</h3>
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-xs font-bold">{project.category}</span>
                            <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-xs font-bold">{project.duration}</span>
                          </div>
                          <div className="flex flex-col gap-2 mb-4 justify-center">
                            <Button
                              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-heading text-sm px-4 py-2"
                              onClick={e => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
                            >
                              Live Preview
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-sm px-4 py-2"
                              onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                            >
                              View Code
                            </Button>
                          </div>
                          <div className="text-gray-300 font-body text-sm mb-4 text-center">
                            {project.description}
                          </div>
                          {/* Navigation buttons */}
                          <div className="flex flex-col justify-between mt-auto pt-2 gap-2">
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-sm px-4"
                              onClick={e => { e.stopPropagation(); prevProject(); }}
                            >
                              ← Previous
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-sm px-4"
                              onClick={e => { e.stopPropagation(); nextProject(); }}
                            >
                              Next →
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* Desktop: Hide inline preview, show nothing (modal will be rendered outside grid) */}
                      <div className="hidden sm:block"></div>
                    </>
                  ) : (
                    // Default card view
                    <>
                      <div className="relative overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-heading text-white mb-2">{project.title}</h3>
                        <div className="text-blue-400 text-sm mb-2 font-body">{project.duration}</div>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-body">{project.description}</p>
                        <div className="flex flex-col gap-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-heading text-xs"
                            onClick={e => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
                          >
                            Live Preview
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-xs"
                            onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                          >
                            View Code
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop modal overlay */}
          {selectedProject && (
            <div className="hidden sm:flex fixed inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-sm">
              {(() => {
                const project = filteredProjects.find(p => p.id === selectedProject);
                if (!project) return null;
                return (
                  <div className="w-full max-w-2xl mx-2 my-8 bg-black rounded-2xl shadow-2xl border border-white/20 relative overflow-y-auto max-h-[90vh] animate-project-preview">
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-black/80 rounded-full text-white hover:text-gray-300 transition-colors text-xl"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <div className="p-8 flex flex-col h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <h3 className="text-2xl font-display text-white mb-4 text-center">{project.title}</h3>
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-bold">{project.category}</span>
                        <span className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-bold">{project.duration}</span>
                      </div>
                      <div className="flex flex-row gap-6 mb-6 justify-center">
                        <Button
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-heading text-base px-6 py-3"
                          onClick={e => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
                        >
                          Live Preview
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-base px-6 py-3"
                          onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                        >
                          View Code
                        </Button>
                      </div>
                      <div className="text-gray-300 font-body text-base mb-6 text-center">
                        {project.description}
                      </div>
                      {/* Navigation buttons */}
                      <div className="flex flex-row justify-between mt-auto pt-2 gap-4">
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-base px-6"
                          onClick={e => { e.stopPropagation(); prevProject(); }}
                        >
                          ← Previous
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-base px-6"
                          onClick={e => { e.stopPropagation(); nextProject(); }}
                        >
                          Next →
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
