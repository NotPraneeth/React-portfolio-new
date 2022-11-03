import { MotionConfig } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { motion } from "framer-motion"
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
                  <motion.div initial={{width:"0%" }} whileInView={{width:"100%"}} transition={{duration:4.25,ease:[0.6,1,-0.07,-0.02]}} className= 'button-container'>
                  <motion.button className='download-btn'><Link to='/files/resume.pdf' className='btn-link' target='_blank' download>DONWLOAD RESUME</Link></motion.button>
                  </motion.div>

              </ul>
            </div>
    </div>
  )
}

export default Navbar