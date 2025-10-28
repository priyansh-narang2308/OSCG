import Footer from '@/components/landing/footer-section'
import Navigation from '@/components/landing/navigation'
import ProjectsSection from '@/components/projects'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navigation/>
        <ProjectsSection/>
        <Footer/>
    </div>
  )
}

export default page