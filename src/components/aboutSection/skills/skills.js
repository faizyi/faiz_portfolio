import SkillCap from './SkillCap'
import { skillsData } from './skillsData'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className='container mx-auto mt-40 px-5 lg:px-16'
    >
      <h2 className='mb-5 text-3xl font-bold tracking-wider inline-block 
      decoration-sh-white underline decoration-1 underline-offset-[15px]'>
        Skills
      </h2>
      <div className='mt-3 w-full flex flex-wrap gap-4'>
        {skillsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCap key={item.id} {...item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
