// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { FiCpu, FiHeart, FiDollarSign, FiSmartphone } from 'react-icons/fi'; // Example icons

const services = [
  { title: "POS Systems", desc: "Smart inventory, billing, and analytics for retail and hospitality businesses.", icon: <FiCpu size={32} />, color: "blue" },
  { title: "Healthcare Platforms", desc: "Patient, resident, and doctor management systems with telehealth capabilities.", icon: <FiHeart size={32} />, color: "green" },
  { title: "M-Pesa Integration", desc: "Seamless and secure mobile payment integration for your applications.", icon: <FiDollarSign size={32} />, color: "red" },
  { title: "Custom Web & Mobile Apps", desc: "Bespoke application development to turn your unique idea into reality.", icon: <FiSmartphone size={32} />, color: "purple" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
  hover: {
    scale: 1.05,
    y: -8,
    boxShadow: "0px 15px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
    // For a more pronounced 3D tilt:
    // rotateY: 10, 
    // transformPerspective: 800, // Using this to set perspective for the tilt
    transition: { type: 'spring', stiffness: 250, damping: 15 }
  }
};

// Helper to get Tailwind color classes
const getColorClasses = (color) => {
  switch (color) {
    case "blue": return "text-blue-500 dark:text-blue-400 border-blue-500/30 dark:border-blue-400/30 hover:border-blue-500";
    case "green": return "text-green-500 dark:text-green-400 border-green-500/30 dark:border-green-400/30 hover:border-green-500";
    case "red": return "text-red-500 dark:text-red-400 border-red-500/30 dark:border-red-400/30 hover:border-red-500";
    case "purple": return "text-purple-500 dark:text-purple-400 border-purple-500/30 dark:border-purple-400/30 hover:border-purple-500";
    default: return "text-gray-500 dark:text-gray-400 border-gray-500/30 dark:border-gray-400/30 hover:border-gray-500";
  }
}


const Services = () => (
  <motion.section
    className="bg-white dark:bg-gray-900 py-28 px-4 sm:px-8" // Added py-28 for fixed navbar
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity:1, y:0 }}}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1200px"> {/* Added perspective for children */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-transparent
                        transition-colors duration-300 transform-style-preserve-3d ${getColorClasses(service.color).split(' ').pop()}`} // apply hover:border-color
            variants={cardVariants}
            whileHover="hover"
            // style={{ transformStyle: 'preserve-3d' }} // For more complex 3D if needed
          >
            <div className={`mb-4 inline-block p-3 rounded-full bg-opacity-10 ${getColorClasses(service.color).replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')}`}>
              {service.icon}
            </div>
            <h3 className={`text-2xl font-semibold mb-3 ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]}`}>
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Services;