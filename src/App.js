
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

function App() {
  let container = useRef(null);
    
       useEffect(() => {
          
          new LocomotiveScroll({
             el: container,
             smooth: true,
             lerp: .01,
             multiplier: .5
          });
    
       }, []);
  return (
    <div ref={el => container = el} data-scroll data-scroll-speed="1" className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
