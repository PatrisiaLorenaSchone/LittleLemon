import React from 'react'
import { Link } from 'react-router-dom'
import logoLine from "../assets/logoLine.png"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import {useState} from "react"

function Navbar() {
  
  const [hamburgerMenu, setHamburgerMenu] = useState(true)
  return (
    <div>
      <nav>
        <Link to="/"><img src={logoLine} alt="" height={80}/></Link>
        <div className="hamburgerMenu">
          { hamburgerMenu && <img aria-label="open menu" src={menu} alt="" onClick={() => setHamburgerMenu(!hamburgerMenu)} />}
          { !hamburgerMenu && <img aria-label="close menu" src={close} alt="" onClick={() => setHamburgerMenu(!hamburgerMenu)}/>}
        </div>
        {!hamburgerMenu && <div className='mobileNav'>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <Link to="/menu">Menu</Link>
          <Link to="/login">Log in</Link>
        </div>}
        <div className='navBar'>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <Link to="/menu">Menu</Link>
          <Link to="/manage-booking">Manage booking</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
