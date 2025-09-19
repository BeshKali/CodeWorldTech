// src/pages/Home.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlayCircle, FiX } from 'react-icons/fi'; // Icons for play and close

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const textChildVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const videoPlaceholderVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: { type: 'spring', stiffness: 300, damping: 15 }
  }
};

const Home = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  // Replace with your actual YouTube video ID
  const videoId = "JODVpeexrlY"; // Example: A video about tech in Africa
  // https://youtu.be/JODVpeexrlY
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center py-16 sm:py-24 px-4 
                 dark:bg-gray-900 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Subtle animated background elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10 dark:opacity-5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.1 + Math.random() * 0.3, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center"> {/* Main content container */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          variants={textChildVariants}
        >
          Build Smarter,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400">
            Ship Faster
          </span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl max-w-xl mx-auto mb-10 leading-relaxed"
          variants={textChildVariants}
        >
          We craft cutting-edge technology solutions that empower your vision and accelerate your growth.
        </motion.p>
        <motion.div variants={textChildVariants} className="mb-12 sm:mb-16">
          <motion.button
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg
                       hover:bg-gray-100 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {/* Potentially scroll to services or contact */}}
          >
            Discover Our Solutions
          </motion.button>
        </motion.div>

        {/* --- African Tech Video Section --- */}
        <motion.div className="w-full max-w-3xl" variants={textChildVariants}>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white/90"
            variants={textChildVariants} // Can use same variant or a new one if delay needed
          >
            Spotlight: <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-cyan-400">African Tech in Motion</span>
          </motion.h2>
          <motion.div
            className="relative aspect-video bg-black/30 dark:bg-black/50 rounded-xl shadow-2xl overflow-hidden cursor-pointer group perspective-800px"
            onClick={() => setVideoOpen(true)}
            variants={videoPlaceholderVariants} // Use specific variants for the placeholder
            initial="initial" // Ensure variants are applied
            animate="animate"
            whileHover="hover"
          >
            {/* Replace with your actual video thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="African Tech Showcase Thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 group-hover:backdrop-blur-sm">
              <FiPlayCircle
                size={window.innerWidth < 640 ? 60 : 80}
                className="text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
              />
              <p className="mt-2 text-sm sm:text-base font-medium text-white/80 group-hover:text-white">Watch Showcase</p>
            </div>
          </motion.div>
        </motion.div>
        {/* --- End African Tech Video Section --- */}

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)} // Close on overlay click
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-black rounded-lg shadow-2xl w-full max-w-4xl aspect-video overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0, transition: { delay: 0.1, type: 'spring', stiffness: 150, damping: 20 } }}
              exit={{ scale: 0.8, opacity: 0, y: 50, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside video player
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                title="African Tech Showcase Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <motion.button
                onClick={() => setVideoOpen(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 z-10 transition-colors"
                aria-label="Close video"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={window.innerWidth < 640 ? 18 : 24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Home;