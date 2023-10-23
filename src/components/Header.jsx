import React from 'react'
import { Link } from 'react-router-dom'
import little from "../assets/little.png"
import lemonn from "../assets/lemonn.png"

function Header() {
  return (
      <header className='wrapper'>
        <div className='headerText'>
          <img height={120} src={little} alt="" />
          <img height={120} src={lemonn} alt="" />
        {/* <h1 className='mainTitle'>Little Lemon</h1> */}
        <h2>CHICAGO</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <Link to="/booking">
        <button>Book a Table</button>
        </Link>
        <a href="#contact">
        <button>Contact us</button>
        </a>
        </div>
      </header>
  )
}

export default Header
