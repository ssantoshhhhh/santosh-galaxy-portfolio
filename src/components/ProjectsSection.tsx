import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionReveal = useScrollReveal('left');

  const filters = ['All', 'Web Apps', 'Desktop Apps', 'Others'];

  const projects = [
    {
      id: 1,
      title: "Campus Level E-commerce Market Place",
      category: "Web Apps",
      duration: "In Development Phase",
      description: "Full-featured e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard for campus essentials.",
      image: "/src/assets/projectimages/campusconnect.jpg",
      liveUrl: "",
      codeUrl: "https://github.com/ssantoshhhhh/cc-pvt.git",
      isLive: false
    },
    {
      id: 2,
      title: "Flick Chatting Application",
      category: "Web Apps",
      duration: "In Development Phase",
      description: "A real-time chat application built with React, Node.js, and Socket.io. Features include instant messaging, user authentication, online status, message history, and responsive design for seamless communication.",
      image: "/src/assets/projectimages/flick.png",
      liveUrl: "",
      codeUrl: "https://github.com/ssantoshhhhh/flick-chat.git",
      isLive: false
    },
    {
      id: 3,
      title: "CSS Loaders Web App",
      category: "Web Apps",
      duration: "July 2025",
      description: "A collection of beautiful and customizable CSS loading animations and spinners. Built with pure CSS and JavaScript, featuring various animation styles, customizable colors, and easy integration for web projects.",
      image: "/src/assets/projectimages/css-loaders.png",
      liveUrl: "https://css-loaders-liard.vercel.app/",
      codeUrl: "https://github.com/ssantoshhhhh/css-loaders.git",
      isLive: true
    },
    {
      id: 4,
      title: "Desktop Clock App",
      category: "Desktop Apps",
      duration: "Jun 2025",
      description: "A simple Desktop clock app with timer, alarm and stopwatch functionality. Built with modern desktop technologies providing a clean and intuitive user interface.",
      image: "/src/assets/projectimages/desktopclock.png",
      liveUrl: "",
      codeUrl: "https://github.com/ssantoshhhhh/desktop-clock.git",
      isLive: false
    },
    {
      id: 5,
      title: "Incredible India - Tourist Places in India",
      category: "Web Apps",
      duration: "Apr 2025",
      description: "A web project built using PHP, HTML, CSS, and JavaScript that showcases beautiful tourist destinations across different states of India with interactive features and detailed information.",
      image: "/src/assets/projectimages/india.png",
      liveUrl: "#",
      codeUrl: "https://github.com/ssantoshhhhh/fsd-final.git",
      isLive: false
    },
    {
      id: 6,
      title: "To-Do List",
      category: "Web Apps",
      duration: "Aug 2024",
      description: "A basic task management app built with MongoDB, Express.js, React, and Node.js (MERN stack). Features include adding, editing, deleting tasks with persistent storage.",
      image: "/src/assets/projectimages/todo.png",
      liveUrl: "https://project-x-4cj1.onrender.com/",
      codeUrl: "https://github.com/ssantoshhhhh/todorepo",
      isLive: true
    },
    {
      id: 7,
      title: "Tic Tac Toe Game",
      category: "Web Apps",
      duration: "Oct 2024",
      description: "A classic 2-player game built with HTML, CSS, and JavaScript. Take turns placing X and O on the grid to get three in a row. Features responsive design and smooth animations.",
      image: "/src/assets/projectimages/tictactoe.png",
      liveUrl: "https://tictactoe-r7sw.onrender.com/",
      codeUrl: "https://github.com/ssantoshhhhh/tictactoe",
      isLive: true
    },
    {
      id: 8,
      title: "Tic Tac Toe Game Using Python",
      category: "Others",
      duration: "Jun 2025",
      description: "Self 2-Player Tic Tac Toe Game in Python. A simple text-based Tic Tac Toe game with console interface, perfect for learning Python programming fundamentals.",
      image: "/src/assets/projectimages/python.png",
      liveUrl: "#",
      codeUrl: "https://github.com/ssantoshhhhh/python_tictactoe.git",
      isLive: false
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
                              className={`font-heading text-sm px-4 py-2 ${
                                project.isLive 
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer'
                                  : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-60'
                              }`}
                              onClick={e => { 
                                e.stopPropagation(); 
                                if (project.isLive) {
                                  window.open(project.liveUrl, '_blank');
                                }
                              }}
                              title={project.isLive ? "View Live Demo" : "Project Not Live Yet"}
                              disabled={!project.isLive}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-sm px-4 py-2"
                              onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                              title="View Source Code"
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
                            className={`font-heading text-xs ${
                              project.isLive 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer'
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-60'
                            }`}
                            onClick={e => { 
                              e.stopPropagation(); 
                              if (project.isLive) {
                                window.open(project.liveUrl, '_blank');
                              }
                            }}
                            title={project.isLive ? "View Live Demo" : "Project Not Live Yet"}
                            disabled={!project.isLive}
                          >
                            Live Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-xs"
                            onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                            title="View Source Code"
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
                          className={`font-heading text-base px-6 py-3 ${
                            project.isLive 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer'
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-60'
                          }`}
                          onClick={e => { 
                            e.stopPropagation(); 
                            if (project.isLive) {
                              window.open(project.liveUrl, '_blank');
                            }
                          }}
                          title={project.isLive ? "View Live Demo" : "Project Not Live Yet"}
                          disabled={!project.isLive}
                        >
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent font-heading text-base px-6 py-3"
                          onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                          title="View Source Code"
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
