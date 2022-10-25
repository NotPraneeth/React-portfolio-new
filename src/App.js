
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
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // let container = useRef(null);
    
  //      useEffect(() => {
          
  //         new LocomotiveScroll({
  //            el: container,
  //            smooth: true,
  //            lerp: .04,
  //            multiplier: .5
  //         });
    
  //      }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div  className="App">
      {/* add this line above ref={el => container = el} data-scroll data-scroll-speed="1" */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar/>
      <Landing/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
