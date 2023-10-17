import React from 'react'
import SecondaryTitle from './secondaryTitle'
import SpecialityCard from './SpecialityCard'

function Specialities() {

  return (
    <div className='specialitySection'>
      <SecondaryTitle title={"This week's specials"}/>
      <div>
      <p>Close your eyes and try to imagine a perfect day. You hear the waves of the mediterranean sea, under a little lemon tree. 
        A brezze in the hot air caries the delicious smell of something salty or maybe of something sweet . . . <br/> 
        From the freshness of The Greek Salad to the strong aroma of The Carbonara, everything is prepared with special care and much love 
      </p>
      <button>See full menu</button>
      </div>
      <SpecialityCard/>
    </div>
  )
}

export default Specialities
