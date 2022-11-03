import React from 'react'
import './contact.css'
import fall from './assets/fall.png'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}} className='Contact-container'>
      <div className='Contact-top-container'>
        <motion.div transition={{duration:0.5,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}  className='contact-top-left'>
        <img src={fall} alt="Logo" id = "fall" />
        </motion.div>
        <div className='contact-top-right'>
          <motion.div transition={{duration:0.5,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}} className='contact-right-text'>Stuck on a project? write to us and we’ll get it done for you.</motion.div>
        </div>
      </div>
      <div className='Contact-bottom-container'>
        <div className='socials-container'>
          <div className='socials1'>
               <ul className='list'>
                  <motion.li transition={{duration:1,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}} ><a>HOME</a></motion.li>
                  <motion.li transition={{duration:1.3,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}><a>ABOUT</a></motion.li>
                  <motion.li transition={{duration:1.6,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}><a>SKILLS</a></motion.li>
              </ul>
            </div>
          <motion.div transition={{duration:1.9,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}} className='socials2'> - LET'S BREW MAGIC -</motion.div>
          <div className='socials3'>
          <ul className='list'>
                  <motion.li transition={{duration:2.2,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}><a href="mailto:rsphaha@gmail.com?Subject=Hello%20World" target="_top">EMAIL</a></motion.li>
                  <motion.li transition={{duration:2.5,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}><a href='https://github.com/NotPraneeth' target='_blank'>GITHUB</a></motion.li>
                  <motion.li transition={{duration:2.8,ease:[0.6,0.1,-0.05,0.9]}} initial={{opacity:0}} animate={{opacity:1}}><a href='https://www.instagram.com/rsphmm/' target='_blank'>INSTAGRAM</a></motion.li>
              </ul>
          </div>
        </div>
        <Marquee  gradient={false} speed={180} className='Contact-marquee'>
                MADE WITH LOVE BY PRANEETH! 
        </Marquee>
      </div>
    </motion.div>
  )
}

export default Contact