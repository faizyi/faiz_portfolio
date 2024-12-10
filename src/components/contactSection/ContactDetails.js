"use client";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FaFlag } from "react-icons/fa"; // Add icon for nationality
import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <motion.div
      className="w-full md:w-1/3 space-y-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold text-white underline decoration-primary-500 decoration-2 underline-offset-8">
        Get In Touch
      </h2>
      <p className="leading-relaxed">
        I would love to hear from you! Whether you have a question, proposal,
        or just want to say hello, feel free to reach out using the contact
        details below.
      </p>

      {/* Contact Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <AiOutlineMail className="text-primary-500" size={28} />
          <a
            href="mailto:faiznoor492@gmail.com"
            className="hover:text-primary-400 transition duration-300"
          >
            faiznoor492@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <AiOutlinePhone className="text-primary-500" size={28} />
          <a
            href="tel:+9660591188421"
            className="hover:text-primary-400 transition duration-300"
          >
            +9660591188421
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <AiOutlineEnvironment className="text-primary-500" size={28} />
          <span>Hafar al Batin, Saudi Arabia</span>
        </div>

        {/* Nationality */}
        <div className="flex items-center space-x-4">
          <FaFlag className="text-primary-500" size={28} />
          <span>Nationality: Pakistan</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetails;
