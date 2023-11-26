import React from 'react'
import "../../Style/About.css"
import AboutHeader from './AboutHeader'

function About() {
  return (
    <div className='About'>
      <AboutHeader />
      <img className='w-1/3 md:w-full md:my-20 ' src={process.env.PUBLIC_URL + "./assets/illustration-2.svg"} alt='illustration-2.svg' />
    </div>
  )
}

export default About
