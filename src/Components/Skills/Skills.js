import React from 'react'
import './skills.css'
import skillsbg from './assets/nightlight.mp4'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"
function Skills() {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}} className='Skills-container'>
      
        <video src={skillsbg} autoPlay loop muted id='skillsbg' type='video/mp4'/>
        <div className='skills-content'>
          <motion.div transition={{duration:0.5,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}  className='skills1'>WHAT I AM GOOD AT</motion.div>
          <Marquee  direction='right' speed={140} gradient={false} className='Skills-marquee1'>
            GIT BOOTSTRAP SASS TAILWIND
          </Marquee>
          <Marquee  gradient={false} speed={140} className='Skills-marquee2'>
            REACT BLENDER JAVASCRIPT HTML 
          </Marquee>
          <motion.div transition={{duration:0.5,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}} className='skills2'>LET'S TALK WORK</motion.div>
        </div>
     
      
    </motion.div>
  )
}

export default Skills