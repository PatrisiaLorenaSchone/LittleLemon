import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import emptyTable from "../assets/emptyTable.png"
import SecondaryTitle from '../components/secondaryTitle';
import Form from '../components/Form';

function ManageBooking() {

const [formValue] = useState(
  JSON.parse(localStorage.getItem("formValue")) || []
  )

const [empty, setEmpty] = useState(false)

function deleteReservation(){
  localStorage.clear();
  setEmpty(true);
}
// useEffect(()=>{
//   fetch('')
//   .then((response) => response.json())
//   then((jsonData) => setFormValue(jsonData))
// }, [])

const [edit, setEdit] = useState(false);
function editData(){
  return setEdit((prevVal)=> !prevVal)
}

  return (
    !formValue.firstName || empty ? 
    <div className='emptyBooking'><h1>It looks like you have no reservation</h1>
    <img src={emptyTable}/> 
    <p>At Little Lemon we are always happy to see you and offer you the best culinary experience in town. Make sure to visit us soon:</p>
    <Link to="/booking">
        <button>Book a Table</button>
    </Link></div> :
      <div className='manageBookingSection'>
      {!edit ? 
      <ul className='formEdit'>
      <h1>Hello, {formValue.firstName}!</h1>
      <h2>This is your current booking:</h2>
        <li>
          <b>First Name: </b>
          <p>{formValue.firstName} </p>
        </li>
        <li>
          <b>Last Name: </b>
          <p>{formValue.lastName}</p>
        </li>
        <li>
          <b>Date: </b>
          <p>{formValue.date}</p>
        </li>
        <li>
          <b>Time: </b>
          <p>{formValue.time}</p>
        </li>
        <li>
          <b>Number of guests: </b>
          <p>{formValue.guests}</p>
        </li>
        <li>
          <b>Occasion: </b>
          <p>{formValue.ocasion}</p>
        </li>
        <li>
          <b>Message: </b>
          <p>{formValue.message}</p>
        </li>
        <button style={{height:"52px", margin: "0px"}} onClick={editData} > {edit ? `Save Changes` : `Edit Booking`}</button>
        <p onClick={deleteReservation} className='deleteBtn'>Delete Reservation</p>
      </ul>
    : <Form buttonText={"Save Changes"} thankYouTitle={"Your booking informations have been modified"}/>}
    </div>
  )
}

export default ManageBooking
