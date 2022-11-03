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
          <div className='skills1'>WHAT I AM GOOD AT</div>
          <Marquee  direction='right' speed={140} gradient={false} className='Skills-marquee1'>
            GIT BOOTSTRAP SASS TAILWIND
          </Marquee>
          <Marquee  gradient={false} speed={140} className='Skills-marquee2'>
            REACT BLENDER JAVASCRIPT HTML 
          </Marquee>
          <div className='skills2'>LET'S TALK WORK</div>
        </div>
     
      
    </motion.div>
  )
}

export default Skills