"use client"
import EduCard from './EduCard'
import { eduData } from './educationData'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className='mt-12 px-5 lg:px-16 py-12 bg-gray-800'
    >
      <h2 className='text-4xl font-extrabold text-center text-white mb-12'>
        My Education
      </h2>

      {/* Education Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {eduData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <EduCard key={edu.id} {...edu} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education;
