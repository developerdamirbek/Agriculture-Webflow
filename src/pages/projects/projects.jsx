import React from 'react'
import { Hero } from '../../components/hero'
import heroImg from '../../assets/images/projects-hero.png'

export const Projects = () => {
  return (
    <div>
      <section>
        <Hero img={heroImg} title="Projects"/>
      </section>
    </div>
  )
}
