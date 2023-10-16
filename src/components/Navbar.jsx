import React from 'react'
import { Link } from 'react-router-dom'
import logoLine from "../assets/logoLine.png"

function Navbar() {
  return (
    <div>
      <nav>
        <img src={logoLine} alt="" height={80}/>
        <div className='navBar'>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <Link to="/menu">Menu</Link>
          <Link to="/login">Log in</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
