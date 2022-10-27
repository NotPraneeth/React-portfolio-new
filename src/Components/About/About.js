import React from 'react'
import './about.css'
import face from './assets/starface.jpg'
import { motion } from "framer-motion"
function About() {
  return (
    <div className='About-container'>
      <div className='About-left'>
          <div className='About-left-heading'> WHY DO I STAND OUT FROM THE CROWD?</div>
          <div className='About-left-para'> I'm Praneeth and I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion leads me to challenge myself daily and learn new skills that help me do better work.I am a web-developer who believes in the magical realm of web-developing and the spells you can cast upon your user through the website, every website has a story to tell and i'm here to tell the story and hopefully connect with my user so that the both of us can get the most out of the website.
</div>
      </div>
      <div className='About-right'>
      <img src={face} alt="Logo" id = "face" />
      </div>
    </div>
  )
}

export default About