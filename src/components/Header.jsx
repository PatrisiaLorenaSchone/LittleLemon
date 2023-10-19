import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <h1 className='mainTitle'>Little Lemon</h1>
        <h1>CHICAGO</h1>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <Link to="/booking">
        <button>Book a Table</button>
        </Link>
        <Link to="/manage-booking">
        <button>Manage previous booking</button>
        </Link>
      </header>
    </div>
  )
}

export default Header
