// src/components/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Using react-icons for better arrows

const testimonials = [
  { id: 1, name: "Grace M.", role: "Startup Founder", quote: "These guys turned my idea into a real, working app in just 2 weeks!", avatar: "https://img.freepik.com/free-photo/african-senior-woman_23-2148833112.jpg" },
  { id: 2, name: "Moses T.", role: "Shop Owner", quote: "The POS system they built increased my sales tracking accuracy by 90%!", avatar: "https://img.freepik.com/free-photo/handsome-sensitive-man-portrait_23-2149509828.jpg" },
  { id: 3, name: "Achieng L.", role: "Clinic Admin", quote: "Our health platform is now smooth and smart – patients love it!", avatar: "https://img.freepik.com/free-photo/medium-shot-beautiful-african-woman-posing_23-2151438119.jpg" },
];

const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -30 : 30,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 30 : -30,
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.3 }
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]); // page index and direction of swipe

  const paginate = (newDirection) => {
    setPage([ (page + newDirection + testimonials.length) % testimonials.length, newDirection ]);
  };

  const currentTestimonial = testimonials[page];

  return (
    <section className="py-12 px-4 text-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">What Our Clients Say</h2>
      <div className="relative max-w-2xl mx-auto h-80 flex items-center justify-center perspective-1000px"> {/* Added perspective for 3D */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page} // Important for AnimatePresence to detect changes
            custom={direction}
            variants={testimonialVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full max-w-lg bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl transform-style-preserve-3d"
            style={{ perspective: '1000px' }} // Apply perspective for 3D effect on children
          >
            <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500 dark:border-blue-400 object-cover"/>
            <p className="italic text-lg mb-4 leading-relaxed">"{currentTestimonial.quote}"</p>
            <h4 className="font-semibold text-xl text-blue-600 dark:text-blue-400">{currentTestimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentTestimonial.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <motion.button
          onClick={() => paginate(-1)}
          className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={() => paginate(1)}
          className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronRight size={24} />
        </motion.button>
      </div>
       {/* Optional: Dots for navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all duration-300
                        ${page === i ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;