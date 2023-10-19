import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Menu from "./pages/Menu"
import TableBooking from "./pages/TableBooking"
import ManageBooking from "./pages/ManageBooking"
import Login from "./pages/Login"
import './App.css'

function App() {
  
  const [formValue, setFormValue] = useState(
    {
      firstName: "",
      lastName: " ",
      email: "",
      date: "",
      time: "",
      guests: "",
      place: true,
      ocasion: ""
    }
    )
  return (
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/booking" element={<TableBooking formValue={formValue} setFormValue={setFormValue}/>}/>
          <Route path="/manage-booking" element={<ManageBooking formValue={formValue} setFormValue={setFormValue}/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
    )
}

export default App
