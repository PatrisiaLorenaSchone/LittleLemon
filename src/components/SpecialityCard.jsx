import React from 'react'
import salad from "../assets/salad.png"
import carbonara from "../assets/carbonara.png"
import cake from "../assets/cake.jpg"

const specialities = [
    {
    title: "Greek Salad",
    price: 12.50,
    description: `The famous greek salad of crispy lettuce, peppers, olives, 
    and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons`,
    img: salad,
    id: 21,
},
{
    title: "Spaghetti Carbonara",
    price: 15.90,
    description: `Our carbonara will make you experience the italian flavours at a diffrent level, made 
    with authentic guanciale and peccorino cheese, this dish is one to remember `,
    img: carbonara,
    id: 22,
},
{
    title: "Lemon Dessert",
    price: 6.30,
    description: `This comes straight from grandma's recipe book, every last ingredient 
    has been sourced and it is as authentic as can be imaged`,
    img: cake,
    id: 23,
},

]

const card = specialities.map(speciality => {
    return(
    <div key={speciality.id} className='animationContainer'>
    <div className="specialityCard">
        <img height={208} src={speciality.img}/>
        <h4 className='priceTag'>New</h4>
        <h3>{speciality.title}</h3>
        <p>{speciality.description}</p>
    </div>
    </div>
    )
})

function SpecialityCard() {
  return (
    <div className="specialityCardsContainer wrapper">
    {card}
    </div>
  )
}

export default SpecialityCard
