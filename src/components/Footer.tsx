import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/santosh-seelaboina-56b5492b8/', icon: <Linkedin size={24} /> },
    { name: 'GitHub', url: 'https://github.com/ssantoshhhhh', icon: <Github size={24} /> },
  
    { name: 'Instagram', url: 'https://instagram.com/ssantoshhhhh', icon: <Instagram size={24} /> },
    
  ];

  /* Visit Counter State */
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        // Using api.counterapi.dev since countapi.xyz is down
        const namespace = 'santosh-galaxy-portfolio';
        const key = 'visits';
        const hasVisited = localStorage.getItem('page_visited');
        
        // If not visited, we hit the 'up' endpoint to increment
        // If visited, we just hit the base endpoint to get the count
        const endpoint = hasVisited 
          ? `https://api.counterapi.dev/v1/${namespace}/${key}/`
          : `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

        const response = await fetch(endpoint);
        const data = await response.json();
        
        // counterapi.dev returns { count: number }
        if (data && typeof data.count === 'number') {
          setVisitCount(data.count);
          if (!hasVisited) {
            localStorage.setItem('page_visited', 'true');
          }
        }
      } catch (error) {
        console.error("Error updating visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Name/Logo */}
          <div className="text-3xl font-display text-white mb-6">
            Santosh Seelaboina
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm font-body">
            <p className="mb-2">
              © 2024 Santosh Seelaboina. All rights reserved.
            </p>
            <p className="mb-4">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
            {/* Visit Counter */}
            <div className="mt-8 flex flex-col items-center gap-3">
              {/* <span className="text-gray-400 text-xs uppercase tracking-widest font-heading">Total Visits</span> */}
              <div className="flex gap-1">
                {visitCount.toString().padStart(6, '0').split('').map((digit, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-10 rounded bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-mono font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    {digit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
