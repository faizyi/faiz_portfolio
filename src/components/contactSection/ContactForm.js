"use client";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <form
        action="https://formspree.io/f/xvgoaeqb" // Replace {your-id} with actual FormSpree ID
        method="POST"
        className="space-y-6"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-white font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="px-4 py-3 bg-gray-700 text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-white font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="px-4 py-3 bg-gray-700 text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-white font-medium">Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="px-4 py-3 bg-gray-700 text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md placeholder-gray-400"
            placeholder="Enter your message"
            rows="5"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
