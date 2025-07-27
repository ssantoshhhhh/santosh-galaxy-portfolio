import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactSectionProps {
  onContactSectionVisible?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onContactSectionVisible }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onContactSectionVisible) {
          onContactSectionVisible();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onContactSectionVisible]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToast = toast.loading('Sending message...', {
      position: "top-center",
      autoClose: false,
      style: {
        zIndex: 9999,
        marginTop: '80px'
      }
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success('Message sent successfully! 🎉', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            zIndex: 9999,
            marginTop: '80px'
          }
        });
        
        // Reset form
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        formRef.current?.reset();
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            zIndex: 9999,
            marginTop: '80px'
          }
        });
      }
    } catch (error) {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          zIndex: 9999,
          marginTop: '80px'
        }
      });
      console.error('Email sending error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "santoshkumar90101s@gmail.com",
      icon: <Mail className="w-6 h-6" />
    },
    {
      label: "Phone",
      value: "+91 8639081207",
      icon: <Phone className="w-6 h-6" />
    },
    {
      label: "Address",
      value: "Bhimavaram, Andhra Pradesh, India",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section id="contact" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-display">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Let's work together to bring your ideas to life. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="text-gray-400 text-sm font-body">{info.label}</div>
                      <div className="text-white font-body font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-heading text-white mb-4">Let's Connect</h4>
              <p className="text-gray-400 mb-6 font-body">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're looking for a developer to bring your idea to life, I'd love to hear from you.
              </p>
              <div className="flex space-x-4">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-heading"
                  onClick={() => window.open('mailto:santoshkumar90101s@gmail.com')}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white flex items-center gap-2 font-heading"
                  onClick={() => window.open('tel:8639081207')}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-heading text-white mb-6">Send Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-body">Name</label>
                  <Input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 font-body"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-body">Email</label>
                  <Input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 font-body"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2 font-body">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 font-body"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2 font-body">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 font-body resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-heading disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
