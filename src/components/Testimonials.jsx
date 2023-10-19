import React from 'react'
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import stars from "../assets/stars.png"


function Testimonials() {
  return (
    <div className='testimonialSection'>
      <div className="testimonialCardContainer wrapper">
        <div className="testimonialCard">
          <div className='testimonialHeader'>
            <img src={p1} alt="" />
            <div>
              <h3>Fiona Weber</h3>
              <img height={18} src={stars} alt="" />
            </div>
          </div>
          <p>It is always a pleasure to eat at Little Lemon! 
            Deffinetly my favourite restaurant in town.</p>
        </div>
        <div className="testimonialCard">
          <div className='testimonialHeader'>
            <img src={p2} alt="" />
            <div>
              <h3>Garry Johnn</h3>
              <img height={18} src={stars} alt="" />
            </div>
          </div>
          <p>I love to enjoy a delicious dinner in a relaxing ambiance 
            and Little Lemon is just perfect for that.
          </p>
        </div>
        <div className="testimonialCard">
          <div className='testimonialHeader'>
            <img src={p3} alt="" />
            <div>
              <h3>Carlos David</h3>
              <img height={18} src={stars} alt="" />
            </div>
          </div>
          <p>The pasta I ate here is one of a kind. 
            I honestly think I recomended this place to all my friends</p>
        </div>
        <div className="testimonialCard">
          <div className='testimonialHeader'>
            <img src={p4} alt="" />
            <div>
              <h3>Monika Uzky</h3>
              <img height={18} src={stars} alt="" />
            </div>
          </div>
          <p>I often times order food from Little Lemon,
            my entire familly loves it and the prices are not high
          </p>

        </div>
      </div>
    </div>
  )
}

export default Testimonials
