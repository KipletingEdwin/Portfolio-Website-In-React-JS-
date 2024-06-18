import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.svg'
import underline from '../../assets/nav_underline.svg'

export const Navbar = () => {

  const [menu, setMenu] = useState("home");



  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />
        <ul className="nav-menu">
            <li> <p> Home</p> </li>
            <li> <p>About Me</p> </li>
            <li> <p>Services</p> </li>
            <li> <p>Portfolio</p> </li>
            <li><p> Contact</p> </li>
        </ul>
        <div className="nav-connect">Connect With Me</div>

    </div>
  )
}
