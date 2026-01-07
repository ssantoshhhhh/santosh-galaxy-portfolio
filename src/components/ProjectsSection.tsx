import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionReveal = useScrollReveal('left');

  const filters = ['All', 'Web Apps', 'Desktop Apps', 'Others'];

  const projects = [
    {
      id: 9,
      title: "Task AI - Productivity Platform",
      category: "Web Apps",
      duration: "Jan 2026",
      description: "A next-generation, AI-driven productivity platform designed to help high-performers organize their workload. Features AI Smart Planning, Flow State Focus tools, and RAG-integrated task chats.",
      image: "/projectimages/taskai.png",
      liveUrl: "https://taskai-chi.vercel.app/",
      codeUrl: "#",
      isLive: true,
      isPrivateRepo: true
    },
    {
      id: 10,
      title: "JAITRA 2026 - Sports Carnival",
      category: "Web Apps",
      duration: "Jan 2026",
      description: "Official event management and live tracking platform for the state-wide engineering sports festival. Features live scoreboards for multiple sports, coordinator directory, and real-time visitor tracking.",
      image: "/projectimages/jaithra.png",
      liveUrl: "https://jaithra2026.in/",
      codeUrl: "#",
      isLive: true,
      isPrivateRepo: true
    },
    {
      id: 1,
      title: "Campus Level E-commerce Market Place",
      category: "Web Apps",
      duration: "In Development Phase",
      description: "Full-featured e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard for campus essentials.",
      image: "/projectimages/campusconnect.jpg",
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
      image: "/projectimages/flick.png",
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
      image: "/projectimages/css-loaders.png",
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
      image: "/projectimages/desktopclock.png",
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
      image: "/projectimages/india.png",
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
      image: "/projectimages/todo.png",
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
      image: "/projectimages/tictactoe.png",
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
      image: "/projectimages/python.png",
      liveUrl: "#",
      codeUrl: "https://github.com/ssantoshhhhh/python_tictactoe.git",
      isLive: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-3">
        <div ref={sectionReveal.ref} className={sectionReveal.className}>
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-2">
              My <span className="text-white font-display">Projects</span>
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
                      ? 'bg-white text-black hover:bg-gray-200'
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
            {filteredProjects.map((project: any) => (
              <div
                key={project.id}
                className="card-3d bg-white/5 dark:bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 relative"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-heading text-white mb-2">{project.title}</h3>
                  <div className="text-gray-300 text-sm mb-2 font-body">{project.duration}</div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-body">{project.description}</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      className={`font-heading text-xs ${
                        project.isLive 
                          ? 'bg-white text-black hover:bg-gray-200 cursor-pointer'
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
                      className={`font-heading text-xs ${
                        project.isPrivateRepo || project.codeUrl === '#'
                        ? 'border-gray-600 text-gray-400 cursor-not-allowed opacity-60' 
                        : 'border-white/20 text-white hover:bg-white/10 bg-transparent'
                      }`}
                      onClick={e => { 
                        e.stopPropagation(); 
                        if (!project.isPrivateRepo && project.codeUrl !== '#') {
                          window.open(project.codeUrl, '_blank');
                        }
                      }}
                      title={project.isPrivateRepo ? "Private Repository" : "View Source Code"}
                      disabled={project.isPrivateRepo || project.codeUrl === '#'}
                    >
                      {project.isPrivateRepo ? 'Private Repo' : 'View Code'}
                    </Button>
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

export default ProjectsSection;
