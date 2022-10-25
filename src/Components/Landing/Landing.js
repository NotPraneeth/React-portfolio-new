import React from 'react'
import './landing.css'
import { motion } from "framer-motion"
function Landing() {
  return (
    <div className='Landing-container'>
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}>
        <div className='Landing-hero-content'>HELLO<br></br>WORLD</div>
    </motion.div>
        
    </div>
  )
}

export default Landing