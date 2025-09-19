// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 text-center relative overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }} // Ensures it animates after page content potentially
  >
    {/* Subtle background pattern or animated elements can be added here for more flair */}
    {/* Example: Subtle animated gradient lines */}
    <div className="absolute inset-0 opacity-5 dark:opacity-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-1 bg-gray-700 dark:bg-gray-800"
          style={{ left: `${i * 25}%` }}
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">
      © {new Date().getFullYear()} CodeWorld Technologies. All rights reserved.
      <p className="text-xs mt-1">
        Crafted with <span className="text-red-500 animate-pulse">❤️</span> and Code
      </p>
    </div>
  </motion.footer>
);

export default Footer;