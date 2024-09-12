"use client";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link"; // For nav links

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.footer
      className="py-8 bg-[#0b0b0b] text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center 
      justify-between text-center md:text-left px-8 md:px-14">
        
        {/* Left Side - Name and Copyright Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start 
        space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <span className="text-white text-lg font-semibold">Faiz Noor</span>
          <span className="center">© {year}</span>
        </div>

        {/* Right Side - Navigation Links and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition duration-300">
              About
            </Link>
            <Link href="/projects" className="hover:text-white transition duration-300">
              Projects
            </Link>
            {/* <Link href="/contact" className="hover:text-white transition duration-300">
              Contact
            </Link> */}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/faizyi"
              target="_blank"
              className="transition-transform transform"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineGithub
                className="text-gray-400 hover:text-white transition-colors duration-300"
                size={30}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/faiz-noor/"
              target="_blank"
              className="transition-transform transform"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineLinkedin
                className="text-gray-400 hover:text-white transition-colors duration-300"
                size={30}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
