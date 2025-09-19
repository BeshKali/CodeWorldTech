// src/pages/About.jsx
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const About = () => (
  <motion.section
    // Removed mx-auto from here. Section now spans full width of its parent.
    // Background color and vertical padding remain on the section.
    className="bg-white dark:bg-gray-900 py-28 w-full"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* This inner div now handles max-width, centering (mx-auto), and horizontal padding. */}
    <div className="max-w-5xl mx-auto px-4 sm:px-8 text-gray-800 dark:text-gray-100">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
        variants={itemVariants}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        We are a collective of forward-thinking developers, designers, and strategists, united by a passion for crafting impactful software solutions. We thrive on transforming complex challenges into elegant, user-centric digital experiences, particularly within Africa’s vibrant and dynamic markets.
      </motion.p>

      <motion.div variants={itemVariants}>
        <Testimonials />
      </motion.div>
    </div>
  </motion.section>
);

export default About;