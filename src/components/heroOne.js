import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroOne = () => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 sm:col-span-8 text-center sm:text-left"
        >
          <h1 className="xs:ml-1 sm:ml-14 lg:ml-24 mt-1 text-white mb-4 text-5xl sm:text-6xl md:text-7xl 
          lg:text-8xl xl:text-8xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6461ff]
             via-[#4781ff] to-[#00f7ff]">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={["Web Developer", 1000, 
              // "Mobile Developer", 1000
            ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </h1>
        </motion.div>
  )
}

export default HeroOne