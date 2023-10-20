import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import emptyTable from "../assets/emptyTable.png"
import restaurant3 from "../assets/restaurant3.jpg"

function ManageBooking({formValue, setFormValue, submitted}) {

function handleChange(e){
  let{name, value} = e.target;
  setFormValue((prevVal)=>{
    return {
      ...prevVal,
      [name]: value
    }
  })
};

const [edit, setEdit] = useState(false);
function editData(){
  return setEdit((prevVal)=> !prevVal)
}

  return (
      submitted ? 
      <div className='manageBookingSection'>
      <h1>Hello, {formValue.firstName}!</h1>
      <h2>This is your current booking:</h2>
      <div className=" bookings wrapper" style={{justifyContent:"space-between"}}>
      <ul className='formEdit'>
        <li>
          <b>First Name: </b>
          {edit ? <input value={formValue.firstName} 
                 name="firstName"
                 onChange={handleChange}
                 type="text"/>
          : <p>{formValue.firstName} </p> }
        </li>
        <li>
          <b>Last Name: </b>
          {edit ? <input value={formValue.lastName} 
                 name="lastName"
                 onChange={handleChange}
                 type="text"/> 
          : <p>{formValue.lastName}</p>}
        </li>
        <li>
          <b>Date: </b>
          {edit ? <input value={formValue.date} 
                 name="date"
                 onChange={handleChange}
                 type="date"/> 
          : <p>{formValue.date}</p>}
        </li>
        <li>
          <b>Time: </b>
          {edit ? <input value={formValue.time} 
                 name="time"
                 onChange={handleChange}
                 type="time"/> 
          : <p>{formValue.time}</p>}
        </li>
        <li>
          <b>Number of guests: </b>
          {edit ? <input value={formValue.guests} 
                 name="guests"
                 onChange={handleChange}
                 type="number" min={1} max={30}/> 
          : <p>{formValue.guests}</p>}
        </li>
        <li>
          <b>Occasion: </b>
          {edit ? <select value={formValue.ocasion} name="ocasion" id="ocasion" onChange={handleChange}>
                  <option value="">Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
          : <p>{formValue.ocasion}</p>}
        </li>
        <li>
          <b>Message: </b>
          {edit ? <input value={formValue.message} 
                 name="message"
                 onChange={handleChange}
                 type="text" min={1} max={30}/> 
          : <p>{formValue.message}</p>}
        </li>
      </ul>
      <img height={700} src={restaurant3} alt="" />
      <button style={{height:"52px", margin: "10px"}} onClick={editData} > {edit ? `Save Changes` : `Edit Booking`}</button>
      </div>
      <p className='deleteBtn'>Delete Reservation</p>
    </div>
    : <div className='manageBookingSection'>
        <h2>It looks like you do not have any reservation</h2> 
        <img height={300} src={emptyTable} alt="" />
        <p> At Little Lemon we are always happy to see you and offer you the best culinary experience in town</p>
        <p>Make sure to visit us soon</p>
        <Link to="/booking">
        <button>Book a Table</button>
        </Link>
      </div>
  )
}

export default ManageBooking
