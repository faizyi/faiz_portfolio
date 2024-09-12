import EduCard from './EduCard'
import { eduData } from './educationData'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className='container mx-auto mt-20 pb-10 px-3 lg:px-16'
    >
      <h2 className='mb-5 text-3xl font-bold tracking-wider inline-block 
      decoration-sh-white underline decoration-1 underline-offset-[15px]'>
        Education
      </h2>
      {/* Added flex container for consistent width and spacing */}
      <div className='space-y-4 gap-6 mt-3 lg:px-0'>
        {eduData.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EduCard key={edu.id} {...edu} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education;
