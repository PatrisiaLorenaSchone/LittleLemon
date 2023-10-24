import React from 'react'
import SecondaryTitle from './SecondaryTitle'
import SpecialityCard from './SpecialityCard'
import { Link } from 'react-router-dom'

function Specialities() {

  return (
    <div className='specialitySection'>
      <SecondaryTitle title={"This week's specials"}/>
      <div>
      <p>Close your eyes and try to imagine a perfect day. You hear the waves of the mediterranean sea, under a little lemon tree. 
        A brezze in the hot air caries the delicious smell of something salty or maybe of something sweet . . .
        From the freshness of The Greek Salad to the strong aroma of The Carbonara, everything is prepared with special care and much love. Every week we give our best to surprise you with new delights 
      </p>
      <Link to="/menu"><button>See full menu</button></Link>
      </div>
      <SpecialityCard/>
    </div>
  )
}

export default Specialities
