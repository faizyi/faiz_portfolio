"use client";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 text-gray-400">
      <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between 
      items-center md:items-start space-y-12 md:space-y-0">
        
        {/* Contact Information */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white decoration-sh-white 
          underline decoration-1 underline-offset-[15px]">Contact Me</h2>
          <p className="text-gray-400">Feel free to reach out to me directly through 
            the contact details below.</p>
          
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AiOutlineMail className="text-primary-500" size={25} />
              <a href="mailto:faiznoor492@gmail.com" className="hover:text-white transition duration-300">
                faiznoor492@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <AiOutlinePhone className="text-primary-500" size={25} />
              <a href="tel:+923225285854" className="hover:text-white transition duration-300">
                +92 322 5285854
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <AiOutlineEnvironment className="text-primary-500" size={25} />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <form
            action="https://formspree.io/f/{your-id}" // FormSpree setup for email form handling (Optional)
            method="POST"
            className="space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="px-4 py-3 bg-[#1e1e1e] text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-4 py-3 bg-[#1e1e1e] text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="px-4 py-3 bg-[#1e1e1e] text-white border border-gray-600 focus:border-primary-500 focus:outline-none rounded-md"
                placeholder="Enter your message"
                rows="5"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ContactSection;
