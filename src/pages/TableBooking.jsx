import { useState } from "react"
import ThankYou from "../components/ThankYou"

function TableBooking({formValue, setFormValue}) {

  function handleChange(e){
    let {value, type, name, checked} = e.target
    setFormValue((prevValue) =>{
      return{
        ...prevValue,
        [name]: type === "radio" ? !checked : value
      }
    })
  }
  let [submitted, setSubmitted] = useState(false)
  function handleSubmit(e){
    e.preventDefault();
    setSubmitted(!submitted)
  }
  return (
    <div className="tableBookingSection">
      {submitted ? <ThankYou/> : 
    <form action="" onSubmit={handleSubmit}>
      <h2>Booking informations:</h2>
      <div className="wrapper">
        <label htmlFor="firstName">*First Name: </label>
        <input 
        id='firstName'
        value={formValue.firstName} 
        name="firstName"
        onChange={handleChange}
        type="text" />
      </div>
      <div className="wrapper">
        <label htmlFor="lastName">*Last Name: </label>
        <input 
        id='lastName'
        value={formValue.lastName} 
        name="lastName"
        onChange={handleChange}
        type="text" />
      </div>
      <div className="wrapper">
        <label htmlFor="email">*Email: </label>
        <input 
        id='email'
        value={formValue.email} 
        name="email"
        onChange={handleChange}
        type="email" />
      </div>
      <div style={{display: "flex", gap:"10px"}}>
        <label htmlFor="date">*Date: </label>
        <input 
        id='date'
        value={formValue.date} 
        name="date"
        onChange={handleChange}
        type="date"/>
        <label htmlFor="time">*Time: </label>
        <input 
        id='time'
        value={formValue.time} 
        name="time"
        onChange={handleChange}
        type="time"/>
      </div>
      <div className="wrapper">
        <label htmlFor="guests">*Number of guests: </label>
        <input style={{width: 165}}
        id='guests'
        value={formValue.guests} 
        name="guests"
        onChange={handleChange}
        min={1} max={30}
        type="number" />
      </div>
      <div className="radioInput">
        <input
        id='inside'
        checked={formValue.place} 
        name="place"
        onChange={handleChange}
         type="radio" />
        <label htmlFor="inside">I want to sit inside</label>
        <input 
        id='outside'
        checked={formValue.place} 
        name="place"
        onChange={handleChange}
        type="radio" />
        <label htmlFor="outside">I want to sit outside</label>
      </div>
      <div className="wrapper"> 
        <select value={formValue.ocasion} name="ocasion" id="ocasion" onChange={handleChange}>
          <option value="You did not select any occasion">Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div style={{width: "350px"}} className="wrapper">
        <label htmlFor="message">Additional message: </label>
        <textarea 
        id="message"
        value={formValue.message} 
        name="message"
        onChange={handleChange}
        cols="54" rows="10"></textarea>
      </div>
      <button>Book the table</button>
    </form>}
    </div>
  )
}

export default TableBooking
