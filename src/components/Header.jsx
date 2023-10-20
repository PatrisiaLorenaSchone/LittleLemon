import React from 'react'
import { Link } from 'react-router-dom'
import restaurant2 from "../assets/restaurant2.jpg"
import restaurant3 from "../assets/restaurant3.jpg"

function Header() {
  return (
      <header className='wrapper'>
        <div className='headerText'>
        <h1 className='mainTitle'>Little Lemon</h1>
        <h1>CHICAGO</h1>
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
