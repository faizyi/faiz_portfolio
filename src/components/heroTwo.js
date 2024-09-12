import { motion } from "framer-motion";
import Image from "next/image";

const HeroTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 col-span-1 sm:col-span-4 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8"
    >
      {/* Left Image Section */}
      <div className="rounded-full bg-[#181818] overflow-hidden w-[200px] h-[200px] 
          sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[350px] xl:h-[350px]">
        <Image
          src="/images/faiz.png" // Ensure your image is high resolution
          alt="Faiz Image"
          width={900} // HD resolution
          height={800}
          className="object-cover w-full h-full" // Ensures the image fits within the circular div
        />
      </div>

      {/* Right Description Section */}
      <div className="lg:mt-14 text-center lg:text-left max-w-lg p-5">
        {/* <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          MERN Stack Developer
        </h2> */}
        <p className="text-lg sm:text-xl text-gray-300">
          I am a passionate MERN stack developer skilled in building modern web applications using 
          MongoDB, Express, React, and Node.js. With a focus on creating efficient and scalable applications, 
          I enjoy working on both frontend and backend development to deliver full-stack solutions.
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          I constantly strive to learn new technologies and improve my skillset to stay updated with industry trends.
        </p>
      </div>
    </motion.div>
  );
};

export default HeroTwo;
