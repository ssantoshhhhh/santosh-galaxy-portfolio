import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => (
  <motion.div 
    className="loader-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ 
      y: "-100%",
      borderBottomLeftRadius: ["0%", "50%", "0%"],
      borderBottomRightRadius: ["0%", "50%", "0%"],
      transition: { 
        duration: 2, 
        ease: [0.22, 1, 0.36, 1] // Custom refined bezier for smooth lift
      } 
    }}
  >
    <div className="loader-text">
      {['L','O','A','D','I','N','G'].map((char, i) => (
        <motion.span 
          key={i} 
          className="loader-letter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
      <div className="glare" />
    </div>
  </motion.div>
);

export default Loader; 