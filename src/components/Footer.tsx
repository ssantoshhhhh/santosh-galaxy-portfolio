import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/santosh-seelaboina-56b5492b8/', icon: <Linkedin size={24} /> },
    { name: 'GitHub', url: 'https://github.com/ssantoshhhhh', icon: <Github size={24} /> },
  
    { name: 'Instagram', url: 'https://instagram.com/ssantoshhhhh', icon: <Instagram size={24} /> },
    
  ];

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Name/Logo */}
          <div className="text-3xl font-display bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
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
            <p>
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
