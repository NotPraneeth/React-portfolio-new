import React from 'react'
import './skills.css'
import skillsbg from './assets/ring.mp4'
function Skills() {
  return (
    <div className='Skills-container'>
      <div className='Skills-bg-container'>
        <video src={skillsbg} autoPlay loop muted id='skillsbg' type='video/mp4'/>
      </div>
      
    </div>
  )
}

export default Skills