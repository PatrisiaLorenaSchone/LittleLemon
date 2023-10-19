import React from 'react'
import logoSquare from "../assets/logoSquare.png"

function Footer() {
  return (
    <div>
      <footer className='wrapper'>
        <img height={200} src={logoSquare} alt="" />
        <ul>
            <h3>Opening hours</h3>
            <li><b>Monday:</b> 9:30 - 23:00</li>
            <li><b>Tuesday:</b> 9:30 - 23:00</li>
            <li><b>Wednesday:</b> 9:30 - 23:00</li>
            <li><b>Thursday</b> 9:30 - 23:00</li>
            <li><b>Friday:</b> 9:30 - 23:00</li>
            <li><b>Saturday:</b> 9:30 - 15:00</li>
            <li><b>Sunday:</b> Closed</li>
          </ul>
        <ul>
          <h3>Find us Online</h3>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52546.864798952134!2d-87.69096602624737!3d41.85261368692782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3e2d94695%3A0x4829f3cc9ca2d0de!2sThe%20Art%20Institute%20of%20Chicago!5e0!3m2!1sen!2sde!4v1697469178848!5m2!1sen!2sde" width="600" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </footer>
    </div>
  )
}

export default Footer
