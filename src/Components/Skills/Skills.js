import React from 'react'
import './skills.css'
import skillsbg from './assets/ring.mp4'
import Marquee from "react-fast-marquee";
function Skills() {
  return (
    <div className='Skills-container'>
      
        <video src={skillsbg} autoPlay loop muted id='skillsbg' type='video/mp4'/>
        <div className='skills-content'>
          <div className='skills1'>WHAT I AM GOOD AT</div>
          <Marquee  direction='right' speed={80} gradient={false} className='Skills-marquee1'>
            GIT. BOOTSRAP. SASS. BLENDER. TAILWIND
          </Marquee>
          <Marquee  gradient={false} speed={80} className='Skills-marquee2'>
            REACT. SASS. JAVASCRIPT. HTML. TAILWIND.  
          </Marquee>
          <div className='skills2'>LET'S TALK WORK</div>
        </div>
     
      
    </div>
  )
}

export default Skills