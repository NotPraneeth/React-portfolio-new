import React from 'react'
import './landing.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import { useEffect, useRef } from 'react';
function Landing() {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}}className='Landing-container'>
    <div>
        <motion.div className='Landing-hero-content'><motion.span initial={{y:"100%",opacity:0 }} animate={{y:"0%",opacity:1}} transition={{duration:0.75,ease:"easeOut"}}className='landing-text'>HELLO<br></br>WORLD</motion.span>  </motion.div>
    </div>
        
    </motion.div>
  )
}

export default Landing