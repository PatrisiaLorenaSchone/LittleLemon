import React from 'react'

const specialities = [
    {
    title: "Greek Salad",
    price: 12.50,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Tenetur dolorem eos consectetur enim dignissimos repudiandae quidem placeat in, 
    `,
    img: "",
    id: 1,
},
{
    title: "Spaghetti Carbonara",
    price: 12.50,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Tenetur dolorem eos consectetur enim dignissimos repudiandae quidem placeat in, 
    `,
    img: "",
    id: 2,
},
{
    title: "Lemon Dessert",
    price: 12.50,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Tenetur dolorem eos consectetur enim dignissimos repudiandae quidem placeat in, 
    `,
    img: "",
    id: 3,
},

]

const card = specialities.map(speciality => {
    return(
    <div key={speciality.id} className='animationContainer'>
    <div  className="specialityCard">
        <div>{speciality.img}</div>
        <h3>{speciality.title}</h3>
        <p>{speciality.description}</p>
        <h4>Order for delivery</h4>
    </div>
    </div>
    )
})

function SpecialityCard() {
  return (
    <div className="specialityCardsContainer">
    {card}
    </div>
  )
}

export default SpecialityCard
