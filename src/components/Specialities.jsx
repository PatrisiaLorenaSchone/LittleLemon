import React from 'react'
import SecondaryTitle from './secondaryTitle'
import SpecialityCard from './SpecialityCard'

function Specialities() {

  return (
    <div className='specialitySection'>
      <SecondaryTitle title={"This week's specials"}/>
      <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem autem totam quae placeat unde similique molestiae eveniet odio ea illo reprehenderit veritatis exercitationem velit nostrum vel, nobis, aperiam iusto iure.
      Saepe amet minima, nihil labore tempore consequuntur corporis cumque sapiente perspiciatis autem veniam eos magni nulla molestiae sed quo rerum illum expedita quod quis. Architecto eos laboriosam iure libero eveniet!</p>
      <button>Go to the menu</button>
      </div>
      <SpecialityCard/>
    </div>
  )
}

export default Specialities
