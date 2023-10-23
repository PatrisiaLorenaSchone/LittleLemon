import React, {useReducer, useState} from 'react'
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import stars from "../assets/stars.png"
import SecondaryTitle from './secondaryTitle';
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg"

const testimonials = [
  {
    id: 1,
    name: "Fiona Weber",
    img: p1,
    comment: `It is always a pleasure to eat at Little Lemon! 
    Deffinetly my favourite restaurant in town.`
  },
  {
    id: 2,
    name: "Garry Johnn",
    img: p2,
    comment: `I love to enjoy a delicious dinner in a relaxing ambiance 
    and Little Lemon is just perfect for that.`
  },
  {
    id: 3,
    name: "Carlos David",
    img: p3,
    comment: `The pasta I ate here is one of a kind. 
    I honestly think I recomended this place to all my friends`
  },
  {
    id: 4,
    name: "Monika Uzky",
    img: p4,
    comment: `I often times order food from Little Lemon,
    my entire familly loves it and the prices are not high`
  },
];
let testimonialCard = testimonials.map(testimonial => {
  return (
    <div key={testimonial.id} className="testimonialCard">
        <div className='testimonialHeader'>
          <img src={testimonial.img} alt="" />
          <div>
            <h3>{testimonial.name}</h3>
            <img height={18} src={stars} alt="" />
          </div>
        </div>
        <p>{testimonial.comment}</p>
    </div>
  )
}
);

const reducer =(state, action)=>{
  if(action.type === "prev" && state.index > 0) return {index: state.index - 1};
  if (action.type === "next" && state.index < 2) return {index: state.index + 1}; 
  return state
}

function Testimonials() {

  const initialState = {index: 0};
  const [state, dispach] = useReducer(reducer, initialState);

  return (
    <div className='testimonialSection'>
      <div style={{textAlign: "left", padding: "60px"}}>
      <SecondaryTitle title={"Here are some Reviews"}/>
      <p>It is always a pleasure to hear back from you. <br/>Your opinion keeps us inspired and your apreciation makes all our efforts worth it</p>
      </div>
      <div className='carousel'>
      <img aria-label='previous' src={arrowLeft} className={state.index == 0 ? 'hidden' : 'prev'} onClick={()=> dispach({type: "prev"})}/>
      <img aria-label='next' src={arrowRight} className={state.index == 2 ? 'hidden' : 'next'} onClick={()=> dispach({type: "next"})}/>
      <div className="testimonialCardContainer wrapper">
        {testimonialCard[state.index]}
        {testimonialCard[state.index + 1]}
      </div>
      </div>
    </div>
  )
}

export default Testimonials
