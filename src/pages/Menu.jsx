import React from 'react'
import SecondaryTitle from '../components/secondaryTitle'

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore, omnis, voluptatum ut est delectus repellat deleniti asperiores ab quibusdam esse! Ab, quo? Voluptas labore rerum iure, animi eveniet dignissimos!
      Nam consequatur magnam distinctio, blanditiis aspernatur velit iusto vitae perferendis nemo impedit ad. Id modi deserunt recusandae aut dicta sunt! Labore esse molestias nesciunt aspernatur vitae, qui unde totam necessitatibus!
      Consectetur ducimus inventore debitis saepe tempore esse, doloremque eum sint facilis voluptatum veritatis beatae, mollitia ex at laboriosam iste architecto natus cumque ipsa sed? Inventore reprehenderit quis voluptas praesentium cumque.</p>
      <div>
        <SecondaryTitle title={"Pasta"}/>
        <ul></ul>
      </div>
      <div>
        <SecondaryTitle title={"Salads"}/>
        <ul></ul>
      </div>
    </div>
  )
}

export default Menu
