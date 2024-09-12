"use client"
import Education from '@/components/aboutSection/education/education'
import Skills from '@/components/aboutSection/skills/skills'
import ContactSection from '@/components/contactSection/ContactSection'
const Page = () => {
  return (
    <div className=''>
      <Skills/>
      <Education/>
      <ContactSection/>
    </div>
  )
}

export default Page