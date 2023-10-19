import React from 'react'
import SecondaryTitle from "../components/secondaryTitle"
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div className='thankYou'>
      <SecondaryTitle title={"Thank you for your booking!"}/>
      <p style={{textAlign:"left"}}>You will soon receive a confirmation email containing all your booking informations.<br/>
      <small>If you want to cancel or modify your booking go to <Link to="/manage-booking">My Booking</Link> section</small>
      </p>
      <Link to="/">
      <button>Back Home</button>
      </Link>
    </div>
  )
}

export default ThankYou