import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const popupVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 24 } },
  exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.25 } },
};

interface PortfolioPopupProps {
  showPopup: boolean;
  onClose: () => void;
}

const PortfolioPopup: React.FC<PortfolioPopupProps> = ({ showPopup, onClose }) => {
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    if (showPopup && !hasClosed) {
      // Reset hasClosed when showPopup becomes true
      setHasClosed(false);
    }
  }, [showPopup]);

  const handleClose = () => {
    setHasClosed(true);
    onClose();
  };

  return (
    <AnimatePresence>
      {showPopup && !hasClosed && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-w-xs w-full p-0"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move" style={{ filter: 'blur(6px)', zIndex: 1 }} />
            {/* Popup Card */}
            <div className="relative bg-black/80 border border-white/10 rounded-2xl shadow-2xl p-8 text-center backdrop-blur-md overflow-hidden" style={{ zIndex: 2 }}>
              {/* Floating Icon */}
              <div className="flex justify-center mb-2">
                <span className="inline-block text-4xl animate-bounce bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">✨</span>
              </div>
              <button
                className="absolute top-3 right-3 text-gray-300 hover:text-blue-400 text-2xl font-bold transition-colors z-10"
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="mb-5 font-extrabold text-xl text-white tracking-wide drop-shadow-lg">
                Check out my other portfolio also
              </div>
              <a
                href="https://santosh-a6qm.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:from-blue-600 hover:to-purple-700 hover:to-pink-600 transition-all duration-200 text-lg tracking-wider border-2 border-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Visit Portfolio
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioPopup;

// Add this to your global CSS (e.g., index.css or App.css):
// @keyframes gradient-move { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
// .animate-gradient-move { background-size: 200% 200%; animation: gradient-move 2.5s linear infinite; } 