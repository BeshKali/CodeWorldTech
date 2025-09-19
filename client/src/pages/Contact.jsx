// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const formContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const inputHoverEffect = {
  borderColor: "rgb(59 130 246)", // blue-600
  boxShadow: "0 0 0 2px rgb(59 130 246 / 0.3)",
};

const Contact = () => (
  <motion.section
    // Removed mx-auto from here. Section now spans full width.
    // Vertical padding remains. No background was on the section itself previously.
    className="bg-white dark:bg-gray-900 py-28 w-full "
    variants={formContainerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* This inner div now handles max-width, centering (mx-auto), and horizontal padding for the content block. */}
    <div className="max-w-2xl mx-auto px-4 sm:px-8 border border-gray-600 dark:border-gray-600 rounded-xl shadow-lg bg-white dark:bg-gray-800">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        variants={formItemVariants}
      >
        Get in Touch
      </motion.h2>
      <motion.form
        className="space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl" // Form styles remain
        onSubmit={(e) => e.preventDefault()}
        variants={formItemVariants} // This variant applies to the form itself if needed, or remove if only children animate
      >
        {[
          { type: 'text', placeholder: 'Your Name', id: 'name' },
          { type: 'email', placeholder: 'Your Email', id: 'email' },
        ].map((field) => (
          <motion.div key={field.id} variants={formItemVariants}>
            <label htmlFor={field.id} className="sr-only">{field.placeholder}</label>
            <motion.input
              id={field.id}
              className="w-full p-3 border border-gray-600 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-shadow duration-200"
              type={field.type}
              placeholder={field.placeholder}
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{ ...inputHoverEffect, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        ))}
        <motion.div variants={formItemVariants}>
          <label htmlFor="message" className="sr-only">Your Message</label>
          <motion.textarea
            id="message"
            className="w-full p-3 border border-gray-600 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-shadow duration-200"
            rows="5"
            placeholder="Your Message"
            required
            whileHover={{ scale: 1.02 }}
            whileFocus={{ ...inputHoverEffect, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold transition-transform transform"
          whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          variants={formItemVariants}
        >
          Send Message <FiSend />
        </motion.button>
      </motion.form>
    </div>
  </motion.section>
);

export default Contact;