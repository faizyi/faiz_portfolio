"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative flex items-center justify-center h-screen px-5 sm:px-14 md:px-24"
      style={{
        background: "var(--background)",  // Using the CSS variable for background
        color: "var(--foreground)",        // Using the CSS variable for text color
        marginTop: '-70px',                    // Remove any margin from the top
      }}
    >
      {/* Background Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Section */}
      <div className="relative text-center sm:text-left z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold leading-tight mb-6">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#4a67b4] to-[#6f65ff]">
            Hello, I'm
          </span>
          <span className="block mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fff5f5] to-[#fbc2eb]">
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={80}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-8">
          I'm passionate about building intuitive and dynamic web and mobile experiences.
        </p>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          className="inline-block py-3 px-8 bg-gradient-to-r from-[#4744eb] via-[#215cdb] to-[#0011ff] text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroOne;
