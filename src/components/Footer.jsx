import React from 'react'
import logoSquare from "../assets/logoSquare.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"

function Footer() {
  return (
    <div style={{backgroundColor: "black", paddingTop: "50px"}}>
      <footer className='wrapper'>
      <div>
      <img height={250} src={logoSquare} alt="" />
      <i style={{maxWidth:"777px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo neque magnam qui odio, aut, eos aspernatur amet eius optio quia non assumenda eaque, unde labore voluptate consequatur similique soluta!</i>
      </div>
      <div>
      <ul>
            <h3>Opening hours:</h3>
            <li><b>Monday:</b> 9:30 - 23:00</li>
            <li><b>Tuesday:</b> 9:30 - 23:00</li>
            <li><b>Wednesday:</b> 9:30 - 23:00</li>
            <li><b>Thursday</b> 9:30 - 23:00</li>
            <li><b>Friday:</b> 9:30 - 23:00</li>
            <li><b>Saturday:</b> 9:30 - 15:00</li>
            <li><b>Sunday:</b> Closed</li>
          </ul>
        <ul className='socials'>
          <h3>Find us Online:</h3>
          <img src={facebook} alt="" /><img src={insta} alt="" /><img src={twitter} alt="" />
          <h3>Adress: </h3>
          <small>111 S Michigan Ave, Chicago, IL 60603, United States</small> 
        </ul>
        <ul id="contact">
        <h3>Contact us at: </h3>
        <p>tel: +(073) 3471295</p>
        <p>tel: +(073) 3471295</p>
        <p>fax: 000056 </p>
        <p>email: littlelemon@gmail.com</p>
        </ul>
      </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52546.864798952134!2d-87.69096602624737!3d41.85261368692782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3e2d94695%3A0x4829f3cc9ca2d0de!2sThe%20Art%20Institute%20of%20Chicago!5e0!3m2!1sen!2sde!4v1697469178848!5m2!1sen!2sde" width="600" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </footer>
      <small style={{color:"gray"}}>copyrights</small>
    </div>
  )
}

export default Footer
