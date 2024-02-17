import React from 'react'
import { Hero } from '../../components/hero'
import heroImg from '../../assets/images/news-hero.png'

export const News = () => {
  return (
    <div>
      <section>
        <Hero img={heroImg} title="Recent News"/>
      </section>
    </div>
  )
}
