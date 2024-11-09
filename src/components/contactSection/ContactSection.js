"use client"
import { motion } from 'framer-motion'
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-primary-800 to-primary-600 text-gray-300"
    >
      <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className='container mx-auto mt-12 px-5 lg:px-16'
    >
      <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between 
      items-center md:items-start space-y-12 md:space-y-0">
        {/* Contact Information */}
        <ContactDetails />

        {/* Contact Form */}
        <ContactForm />
      </div>
      </motion.section>
    </section>
  );
};

export default ContactSection;
