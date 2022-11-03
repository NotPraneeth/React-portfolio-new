import React from 'react'
import './contact.css'
import fall from './assets/fall.png'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}} className='Contact-container'>
      <div className='Contact-top-container'>
        <motion.div animate={{y:0}} intial={{y:"100%"}} transition={{delay:0.5,duration:0.5}}  className='contact-top-left'>
        <img src={fall} alt="Logo" id = "fall" />
        </motion.div>
        <div className='contact-top-right'>
          <motion.div animate={{y:0}} intial={{y:"100%"}} transition={{delay:0.5,duration:0.5}} className='contact-right-text'>Stuck on a project? write to us and we’ll get it done for you.</motion.div>
        </div>
      </div>
      <div className='Contact-bottom-container'>
        <div className='socials-container'>
          <div className='socials1'>
               <ul className='list'>
                  <li ><a>HOME</a></li>
                  <li><a>ABOUT</a></li>
                  <li><a>SKILLS</a></li>
              </ul>
            </div>
          <div className='socials2'> - LET'S BREW MAGIC -</div>
          <div className='socials3'>
          <ul className='list'>
                  <li><a href="mailto:rsphaha@gmail.com?Subject=Hello%20World" target="_top">EMAIL</a></li>
                  <li><a href='https://github.com/NotPraneeth' target='_blank'>GITHUB</a></li>
                  <li><a href='https://www.instagram.com/rsphmm/' target='_blank'>INSTAGRAM</a></li>
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