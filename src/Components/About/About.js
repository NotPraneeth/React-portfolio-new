import React from 'react'
import './about.css'
import face from './assets/starface2.jpg'
import { motion } from "framer-motion"

const transition = {duration:0.6,ease:[0.6,0.1,-0.05,0.9]}
function About() {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={transition} className='About-container'>
      <div initial={{opacity:0}} animate={{opacity:1}} className='About-left'>
        <div className='about-left-heading-container'>
        <motion.div whileHover={{scale:1.05}} transition={{duration:0.8,ease:[0.6,0.1,-0.05,0.9]}} initial={{y:"100%"}} whileInView={{y:0}} className='About-left-heading'> WHY DO I STAND OUT FROM THE CROWD?</motion.div>
        </div>
          <motion.div whileHover={{scale:1.03}} transition={{duration:1.2,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} whileInView={{opacity:1}} className='About-left-para'> I'm Praneeth and I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion leads me to challenge myself daily and learn new skills that help me do better work.I am a web-developer who believes in the magical realm of web-developing and the spells you can cast upon your user through the website, every website has a story to tell and i'm here to tell the story and hopefully connect with my user so that the both of us can get the most out of the website.
</motion.div>
      </div>
      <div className='About-right'>
      <motion.img src={face} alt="Logo" id = "face" />
      </div>
    </motion.div>
  )
}

export default About