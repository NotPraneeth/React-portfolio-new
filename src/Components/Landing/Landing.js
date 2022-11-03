import React from 'react'
import './landing.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
function Landing() {

  const transition = {duration:0.6,ease:[0.6,0.1,-0.05]}
  return (
    <>
        <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{transition}}className='Landing-container'>
    <div>
        <motion.div className='Landing-hero-content'><span className='landing-text'>HELLO<br></br>WORLD</span></motion.div>
    </div>
    </motion.div>
    <About/>
    <Skills/>
    <Contact/>
    </>
    
  )
}

export default Landing