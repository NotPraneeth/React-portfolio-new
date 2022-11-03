import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar-container'>
        <Link to='/' className='navbar-logo'> PRANEETH</Link>
        <div className='socials-nav'>
               <ul className='list-nav'>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to = '/about'>ABOUT</Link></li>
                  <li ><Link to = '/skills'>SKILLS</Link></li>
                  <li ><Link to = '/contact'>CONTACT</Link></li>

              </ul>
            </div>
    </div>
  )
}

export default Navbar