import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.svg'
import underline from '../../assets/assets/nav_underline.svg'

export const Navbar = () => {

  const [menu, setMenu] = useState("services");



  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />
        <ul className="nav-menu">
            <li> <p onClick={()=>setMenu("home")} > Home</p> {menu==="home"? <img src={underline} alt='' /> : <></> } </li>
            <li> <p onClick={()=>setMenu("about")}>About Me</p> {menu==="about"? <img src={underline} alt='' /> : <></> } </li>
            <li> <p onClick={()=>setMenu("services")}>Services</p> {menu==="services"? <img src={underline} alt='' /> : <></> } </li>
            <li> <p onClick={()=>setMenu("work")}>Portfolio</p> {menu==="work"? <img src={underline} alt='' /> : <></> } </li>
            <li> <p onClick={()=>setMenu("contact")}> Contact</p> {menu==="contact"? <img src={underline} alt='' /> : <></> } </li>
        </ul>
        <div className="nav-connect">Connect With Me</div>

    </div>
  )
}
