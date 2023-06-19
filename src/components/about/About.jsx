import React from 'react'
import Title from '../designs/Title'
import AboutMe from './AboutMe'

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subtitle="Me" />
      <AboutMe />
      <Title title="My" subtitle="Services" />
    </section>
  )
}

export default About