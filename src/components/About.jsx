import React from 'react'
import SecondaryTitle from './secondaryTitle'
import chefs from "../assets/chefs.png"

function About() {
  return (
    <div id="about" className='aboutSection'>
      <div className='aboutText'>
      <SecondaryTitle title={"Lorem ipsum dolor sit amet."}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam ad repellat numquam tempora dicta! Vitae aliquam ullam mollitia, ea rerum veniam repellendus delectus totam quaerat doloribus dignissimos dolore maiores.
        Obcaecati omnis sit voluptates facilis neque consequatur explicabo quibusdam quae rem vitae enim et eligendi necessitatibus libero harum nemo ipsam reiciendis eaque pariatur, placeat nihil. Culpa expedita assumenda eaque qui!
        Beatae itaque cumque aliquam rem quisquam odio! Pariatur explicabo optio possimus! Nobis, temporibus? Ipsa repellat dolorem non voluptates quas assumenda fuga, excepturi dolore architecto, eos dignissimos quod voluptas ratione debitis!
        </p>
      </div>
      <img className='aboutImg' src={chefs} alt="the chefs" height={550}/>
    </div>
  )
}

export default About
