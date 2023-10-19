import React from 'react'
import SecondaryTitle from './secondaryTitle'
import chefs from "../assets/chefs1.png"
import hat1 from "../assets/hat1.png"
import fork from "../assets/fork.png"
import hat2 from "../assets/hat2.png"

function About() {
  return (
    <div id="about" className='aboutSection wrapper'>
      <div className='aboutText'>
      <SecondaryTitle title={"The story of Little Lemon"}/>
        <p>  Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist. 
          The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12 - 15 items that they rotate seasonally. 
          The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
        </p>
        <p>
             Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
          Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
        <div className='iconContainer'>
          <img src={hat1} alt="" />
          <img src={fork} alt="" />
          <img src={hat2} alt="" />
        </div>
      </div>
      <img className='aboutImg' src={chefs} alt="the chefs" height={550}/>
    </div>
  )
}

export default About
