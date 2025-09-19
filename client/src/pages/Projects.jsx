// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Example icons

const projects = [
  {
    title: "Mifugo Smart",
    desc: "A livestock management system for farmers. Tracks health, breeding, and market prices to optimize productivity and profitability.",
    stack: ["React", "Node.js", "M-Pesa API", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", // Replace with actual image
    liveLink: "#", // Replace with actual link
    repoLink: "#", // Replace with actual link
  },
  {
    title: "CareConnect",
    desc: "Intelligent health chatbot leveraging AI and Twilio for instant patient support and appointment scheduling. Enhances patient engagement and clinic efficiency.",
    stack: ["Python", "Dialogflow", "Twilio", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoY2FyZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Farmily",
    desc: "A transparent marketplace connecting farmers directly with customers. Promotes fair trade practices and provides real-time crop information.",
    stack: ["Vue.js", "Django", "PostgreSQL", "Leaflet.js"],
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    liveLink: "#",
    repoLink: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    y: -5,
    // For a subtle 3D tilt:
    // rotateX: 5,
    // rotateY: -5,
    transition: { type: 'spring', stiffness: 200, damping: 10 }
  }
};

const Projects = () => (
  <motion.section
    className="py-28 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900" // Added py-28 for fixed navbar
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity:1, y:0 }}}
      >
        Our Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transform-style-preserve-3d" // preserve-3d for potential inner 3D
            variants={cardVariants}
            whileHover="hover"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{project.desc}</p>
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex justify-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.liveLink && project.liveLink !== "#" && (
                  <motion.a
                    href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                )}
                {project.repoLink && project.repoLink !== "#" && (
                  <motion.a
                    href={project.repoLink} target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1 text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub /> View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;