import React from 'react'
import './contact.css'
import fall from './assets/fall.png'
import Marquee from "react-fast-marquee";

function Contact() {
  return (
    <div className='Contact-container'>
      <div className='Contact-top-container'>
        <div className='contact-top-left'>
        <img src={fall} alt="Logo" id = "fall" />
        </div>
        <div className='contact-top-right'>
          <div className='contact-right-text'>Stuck on a project? write to us and we’ll get it done for you.</div>
        </div>
      </div>
      <div className='Contact-bottom-container'>
        <div className='socials-container'>
          <div className='socials1'>
               <ul className='list'>
                  <li><a>HOME</a></li>
                  <li><a>ABOUT</a></li>
                  <li><a>SKILLS</a></li>
              </ul>
            </div>
          <div className='socials2'> - MADE WITH LOVE -</div>
          <div className='socials3'>
          <ul className='list'>
                  <li><a href="mailto:rsphaha@gmail.com?Subject=Hello%20World" target="_top">EMAIL</a></li>
                  <li><a href='https://github.com/NotPraneeth' target='_blank'>GITHUB</a></li>
                  <li><a href='https://www.instagram.com/rsphmm/' target='_blank'>INSTAGRAM</a></li>
              </ul>
          </div>
        </div>
        <Marquee  gradient={false} speed={180} className='Contact-marquee'>
                MADE WITH LOVE BY PRANEETH! 
        </Marquee>
      </div>
    </div>
  )
}

export default Contact