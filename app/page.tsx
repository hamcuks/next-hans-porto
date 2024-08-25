import { Fragment } from 'react'
import Hero from './sections/HeroSection'
import ProfessionalExperiences from './sections/ProfessionalExperiences'
import MyProjects from './sections/MyProjects'
import AboutMe from './sections/AboutMe'
import MySkills from './sections/MySkills'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <ProfessionalExperiences />
      <MySkills />
      <MyProjects />
    </Fragment>
  )
}
