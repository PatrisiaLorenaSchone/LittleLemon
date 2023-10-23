import React from 'react'
import SecondaryTitle from '../components/secondaryTitle'
import MenuCard from '../components/MenuCard'
import pastaP from "../assets/pastaD.png"
import saladP from "../assets/saladD.png"
import sweetP from "../assets/sweetD.png"
import wineP from "../assets/wineD.png"
import juiceP from "../assets/juiceD.png"
import coffeP from "../assets/coffeD.png"

const Data=[
  [
    {
      title: "Carbonara",
      description: "(pecorino, guangiale, spaghetti)",
      price: "$ 15.60",
      id: 1
    },
    {
      title: "Amatriciana",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 2,
    },
    {
      title: "Pasta al limone",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 3,
    },
    {
      title: "Cacio e pepe",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 4,
    }
  ],
  [
    {
      title: "Greek Salad",
      description: "(chicken, feta, yogurt)",
      price: "$ 15.60",
      id: 1
    },
    {
      title: "Salmon delight",
      description: "(avocado, salmon, cranberries)",
      price: "$ 15.60",
      id: 2,
    },
    {
      title: "Grilled veggies",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 3,
    },
    {
      title: "Cacio e pepe",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 4,
    }
  ],
  [
    {
      title: "Tiramisu",
      description: "(chicken, feta, yogurt)",
      price: "$ 15.60",
      id: 1
    },
    {
      title: "Lemon cake",
      description: "(avocado, salmon, cranberries)",
      price: "$ 15.60",
      id: 2,
    },
    {
      title: "Turkish delight",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 3,
    },
    {
      title: "Gelato",
      description: "lorem ipsum dolor",
      price: "$ 15.60",
      id: 4,
    }
  ]
]

let pastas = Data[0].map((pasta)=>{
  return(
    <div key={pasta.id}>
      <li><h2>{pasta.title}</h2><div className='points'></div>{pasta.price}</li>
      <p style={{fontSize:"medium"}}>{pasta.description}</p>
    </div>
  )
})

let salads = Data[1].map((salad)=>{
  return(
    <div key={salad.id}>
      <li><h2>{salad.title}</h2><div className='points'></div>{salad.price}</li>
      <p style={{fontSize:"medium"}}>{salad.description}</p>
    </div>
  )
})

let desserts = Data[2].map((dessert)=>{
  return(
    <div key={dessert.id}>
      <li><h2>{dessert.title}</h2><div className='points'></div>{dessert.price}</li>
      <p style={{fontSize:"medium"}}>{dessert.description}</p>
    </div>
  )
})

function Menu() {

  return (
    <div className='menuPage'>
      <h1>Our Menu</h1>
      <p>We like to keep ourselves creative while surprising you with something fresh and diffrent every time. That's why we change our menu every season. </p>
      <SecondaryTitle title={"Food"}/>
      <div className="menuSection wrapper">
        <MenuCard menuCardTitle={"Pasta"}>
          <img height={200} className='foodPng' src={pastaP} alt="" />
          {pastas}
        </MenuCard>
        <MenuCard menuCardTitle={"Salads"}>
        <img height={190} className='foodPng' src={saladP} alt="" />
        {salads}
        </MenuCard>
        <MenuCard menuCardTitle={"Desserts"}>
        <img height={200} className='foodPng foodPnd' src={sweetP} alt="" />
          {desserts}
        </MenuCard>
      </div>
      <SecondaryTitle title={"Beverages"}/>
      <div className="menuSection wrapper">
        <MenuCard menuCardTitle={"Wines"}>
        <img height={220} className='foodPng' src={wineP} alt="" />
           <ul>
            <h2>Red wine</h2>
              <li>Valpolicela<div className='points'/>$ 10.00</li>
              <li>Soave<div className='points'/>$ 10.00</li>
              <li>Bardolino<div className='points'/>$ 10.00</li>
           </ul>
           <ul>
            <h2>White wine</h2>
              <li>Valpolicela<div className='points'/>$ 10.00</li>
              <li>Soave<div className='points'/>$ 10.00</li>
              <li>Custoza<div className='points'/>$ 10.00</li>
           </ul>

        </MenuCard>
        <MenuCard menuCardTitle={"Cocktails"}>
        <img height={200} className='foodPng foodPnd' src={juiceP} alt="" />
        <ul>
            <h2>Without Alcohol</h2>
              <li>Valpolicela<div className='points'/>$ 10.00</li>
              <li>Soave<div className='points'/>$ 10.00</li>
              <li>Custoza<div className='points'/>$ 10.00</li>
          </ul>
          <ul>
            <h2>With Alcohol</h2>
              <li>Valpolicela<div className='points'/>$ 10.00</li>
              <li>Soave<div className='points'/>$ 10.00</li>
              <li>Custoza<div className='points'/>$ 10.00</li>
          </ul>
        </MenuCard>
        <MenuCard menuCardTitle={"Extras"}>
        <img height={210} className='foodPng' src={coffeP} alt="" />
          <ul>
            <li>Hot Tea<div className='points'></div>$ 5.00</li>
            <li>Cold Tea<div className='points'></div>$ 5.00</li>
            <li>Water<div className='points'></div>$ 1.00</li>
            <li>Sparkling Water<div className='points'></div>$ 1.00</li>
            <li>Espresso<div className='points'></div>$ 1.50</li>
            <li>Capucino<div className='points'></div>$ 2.00</li>
            <li>Fruit Juice<div className='points'></div>$ 3.00</li>
            <li>Soda<div className='points'></div>$ 5.00</li>
          </ul>
        </MenuCard>
      </div>
    </div>
  )
}

export default Menu
