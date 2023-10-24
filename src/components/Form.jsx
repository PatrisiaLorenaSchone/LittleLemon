import React from 'react'
import { useState, useEffect} from "react"
// import error from "../assets/error.svg"
import SecondaryTitle from './SecondaryTitle'
import ThankYou from './ThankYou';

function Form({buttonText, thankYouTitle}) {

    const [submitted, setSubmitted] = useState(()=> {return false});
    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
      }

    const [formValue, setFormValue] = useState(
        {
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          time: "",
          guests: "",
          place: true,
          ocasion: ""
        }
        )
    
      useEffect(()=>{
        localStorage.setItem("formValue", JSON.stringify(formValue))
      }, [formValue])
    
      
      function handleChange(e){
        let {value, type, name, checked} = e.target
        setFormValue((prevValue) =>{
          return{
            ...prevValue,
            [name]: type === "radio" ? !checked : value
          }
        })
        
        // setIsTouched((prevValue) =>{
        //   return{
        //     ...prevValue,
        //     [name]: true
        //   }
        // })
      }
      
      // const [isTouched, setIsTouched] = useState({
      //   firstName: false,
      //   lastName: false,
      //   email: false,
      //   date: false,
      //   time: false,
      //   guests: false,
      // })
    
  return (
    submitted? <ThankYou title={thankYouTitle}/> :
    <form action="" onSubmit={handleSubmit}>
    <SecondaryTitle title={"Booking details"}/>
    <div className="wrapper">
      <label htmlFor="firstName">*First Name: </label>
      <input 
      id='firstName'
      value={formValue.firstName} 
      name="firstName"
      onChange={handleChange}
      type="text" 
      required
      // className={isTouched.firstName ? 'invalid' : undefined}
      />
    </div>
    <div className="wrapper">
      <label htmlFor="lastName">*Last Name: </label>
      <input 
      id='lastName'
      value={formValue.lastName} 
      name="lastName"
      onChange={handleChange}
      type="text" 
      required
      // className={isTouched.lastName ? 'invalid' : undefined}
      />
    </div>
    <div className="wrapper">
      <label htmlFor="email">*Email: </label>
      <input 
      id='email'
      value={formValue.email} 
      name="email"
      onChange={handleChange}
      type="email" 
      required
      //className={isTouched.email ? 'invalid' : undefined}
      />
    </div>
    <div style={{display: "flex", gap:"10px"}}>
      <label htmlFor="date">*Date: </label>
      <input 
      id='date'
      value={formValue.date} 
      name="date"
      onChange={handleChange}
      type="date"
      required
      //className={isTouched.date ? 'invalid' : undefined}
      />
      <label htmlFor="time">*Time: </label>
      <select value={formValue.time}  id="time" name="time" onChange={handleChange} required>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
      </select>
    </div>
    <div className="wrapper">
      <label htmlFor="guests">*Number of guests: </label>
      <input style={{width: 165}}
      id='guests'
      value={formValue.guests} 
      name="guests"
      onChange={handleChange}
      min={1} max={30}
      type="number" 
      required
      placeholder="1-30"
      //className={isTouched.guests ? 'invalid' : undefined}
      />
    </div>
    <div className="radioInput">
      <input
      id='inside'
      checked={formValue.place} 
      name="place"
      onChange={handleChange}
      type="radio" 
      required/>
      <label htmlFor="inside">I want to sit inside</label>
      <input 
      id='outside'
      checked={formValue.place} 
      name="place"
      onChange={handleChange}
      type="radio" 
      required/>
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
    <button disabled={formValue.firstName.length < 2 || formValue.lastName.length < 2 || formValue.email.length < 2 || formValue.guests == "" || formValue.date == ""}>{buttonText}</button>
  </form>
  )
}

export default Form
