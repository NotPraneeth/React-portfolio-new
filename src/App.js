
import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import './fonts/Break-Regular.woff';
import './fonts/Break-Regular.woff2';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from 'react';
import AnimatedCursor from "react-animated-cursor"
import {Routes,Route} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="App" >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar/>
      <AnimatedCursor innerSize={45}
      outerSize={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--white-shade)',
        mixBlendMode: 'exclusion',
      }}
      outerAlpha={0.5}
      innerScale={1.7}
      outerScale={1}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.landing-text',
        '.About-left-heading',
        '.About-left-para',
        '.Skills-marquee1',
        '.Skills-marquee2',
        '.contact-right-text',
        '.Contact-marquee',
      ]}/>
      <motion.div>
      <AnimatePresence initial={true}>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='contact' element={<Contact/>}/>
     </Routes>
      </AnimatePresence>
      </motion.div>
      
      
    </div>
  );
}

export default App;
