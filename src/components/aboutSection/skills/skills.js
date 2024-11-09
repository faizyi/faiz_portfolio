"use client"
import SkillCap from './SkillCap'
import { skillsData } from './skillsData'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className='container mx-auto mt-12 px-5 lg:px-16'
    >
      <h2 id='about' className='text-4xl font-extrabold text-center text-white mb-12'>
        My Skills
      </h2>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {skillsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <SkillCap key={item.id} {...item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills;
