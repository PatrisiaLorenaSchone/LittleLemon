import React from 'react'
import SecondaryTitle from '../components/secondaryTitle'
import MenuCard from '../components/MenuCard'

function Menu() {

  return (
    <div className='menuPage'>
      <h1>Our Menu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore,  doloremque eum sint facilis voluptatum veritatis beatae, mollitia ex at laboriosam iste architecto natus cumque ipsa sed? Inventore reprehenderit quis voluptas praesentium cumque.
      </p>
      <SecondaryTitle title={"Food"}/>
      <div className="menuSection wrapper">
        <MenuCard menuCardTitle={"Pasta"}>
          <ul>
            <li className='menuItem'><b>Carbonara</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Amatriciana</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Pasta al limone</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Cacio e pepe</b><div className='points'></div>$12.50</li>
          </ul>
        </MenuCard>
        <MenuCard menuCardTitle={"Salad"}>
        <ul>
            <li className='menuItem'><b>Greek Salad</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Salmon delight</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b> Salad</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Salad</b><div className='points'></div>$12.50</li>
          </ul>
        </MenuCard>
      </div>
      <SecondaryTitle title={"Beverages"}/>
      <div className="menuSection wrapper">
        <MenuCard menuCardTitle={"Wines"}>
        <ul>
            <li className='menuItem'><b>Carbonara</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Amatriciana</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Pasta al limone</b><div className='points'></div>$12.50</li>
            <li className='menuItem'><b>Cacio e pepe</b><div className='points'></div>$12.50</li>
          </ul>
        </MenuCard>
      </div>
    </div>
  )
}

export default Menu
