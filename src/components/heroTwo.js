"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DownloadCVButton from "./Resume";
const HeroTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mt-16 lg:mt-12 py-16 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-16"
    >
      {/* Left Image Section */}
      <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full border-8 border-gradient-to-r from-[#6461ff] via-[#4781ff] to-[#00f7ff] shadow-2xl overflow-hidden">
        <Image
          src="/images/faiz.png" // Ensure your image is high resolution
          alt="Faiz Image"
          width={900} // HD resolution
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Description Section */}
      <div className="text-center lg:text-left max-w-lg space-y-6 p-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">
          Hi, I'm Faiz Noor
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I’m a passionate MERN stack developer, skilled in building modern web applications using MongoDB, Express, React, and Node.js. I specialize in creating efficient, scalable, and dynamic solutions that drive seamless user experiences.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I’m always learning and evolving, staying updated with the latest trends and technologies to deliver top-notch full-stack solutions.
        </p>

        {/* Download CV Button */}
        <div className="mt-8">
          <DownloadCVButton/>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroTwo;
