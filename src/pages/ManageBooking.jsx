import React from 'react'
import {useState} from "react"
import TableBooking from './TableBooking';

function ManageBooking({formValue, setFormValue}) {

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
    <div>
      <h1>Hello, {formValue.firstName}!</h1>
      <h2>This is your current booking:</h2>
      <div className="wrapper" style={{justifyContent:"space-between"}}>
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
      <button style={{height:"52px", margin: "10px"}} onClick={editData} > {edit ? `Save Changes` : `Edit Booking`}</button>
      </div>
      <p className='deleteBtn'>Delete Reservation</p>
    </div>
  )
}

export default ManageBooking
