import { MotionConfig } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { motion } from "framer-motion"
import resume from './assets/Resume.pdf'
function Navbar() {
  return (
    <div className='navbar-container'>
      <motion.div initial={{y:"-100%" }} whileInView={{y:0}} transition={{duration:0.75,ease:"easeOut"}} >
      <Link to='/' className='navbar-logo'> PRANEETH</Link>
      </motion.div>
        
        <div className='socials-nav'>
               <ul className='list-nav'>
                  <motion.li initial={{y:"-100%" }} whileInView={{y:0}} transition={{duration:0.75 ,ease:"easeOut"}}><Link to = '/about'>ABOUT</Link></motion.li>
                  <motion.li initial={{y:"-100%" }} whileInView={{y:0}} transition={{duration:1.00,ease:"easeOut"}} ><Link to = '/skills'>SKILLS</Link></motion.li>
                  <motion.li initial={{y:"-100%" }} whileInView={{y:0}} transition={{duration:1.25,ease:"easeOut"}} ><Link to = '/contact'>CONTACT</Link></motion.li>
                  <motion.div initial={{y:"-100%" }} whileInView={{y:0}} transition={{duration:1.25,ease:"easeOut"}} className= 'button-container'>
                  <motion.button className='download-btn'><Link to={resume} className='btn-link' target='_blank' download>DONWLOAD RESUME</Link></motion.button>
                  </motion.div>

              </ul>
            </div>
    </div>
  )
}

export default Navbar