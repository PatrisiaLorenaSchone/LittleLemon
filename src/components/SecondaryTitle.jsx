import React from 'react'
import lemon from "../assets/lemon.png"

function SecondaryTitle({title}) {
  return (
    <div className='secondaryTitle'>
      <img height={50} src={lemon} alt="lemon stiker" />
      <h2>{title}</h2>
    </div>
  )
}

export default SecondaryTitle
