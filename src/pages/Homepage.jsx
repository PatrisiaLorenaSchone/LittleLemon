import React from 'react'
import Header from "../components/Header"
import Specialities from '../components/Specialities'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

function Homepage() {
  return (
    <div className='homePage'>
      <Header/>
      <Specialities/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Homepage
