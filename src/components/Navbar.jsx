import React from 'react'
import { NavLink } from 'react-router-dom'
import logoLine from "../assets/logoLine.png"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import {useState} from "react"

function Navbar() {
  
  const [hamburgerMenu, setHamburgerMenu] = useState(true)
  return (
    <div  id="nav">
      <nav>
        <NavLink to="/"><img src={logoLine} alt="" height={80}/></NavLink>
        <div className="hamburgerMenu">
          { hamburgerMenu && <img aria-label="open menu" src={menu} alt="" onClick={() => setHamburgerMenu(!hamburgerMenu)} />}
          { !hamburgerMenu && <img aria-label="close menu" src={close} alt="" onClick={() => setHamburgerMenu(!hamburgerMenu)}/>}
        </div>
        {!hamburgerMenu && <div className='mobileNav'>
          <NavLink to="/">Home</NavLink>
          <a href="/#about">About</a>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/manage-booking">Manage booking</NavLink>
        </div>}
        <div className='navBar'>
          <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/">Home</NavLink>
          <a href="/#about">About</a>
          <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/menu">Menu</NavLink>
          <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/manage-booking">Manage booking</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
