import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Menu from "./pages/Menu"
import TableBooking from "./pages/TableBooking"
import ManageBooking from "./pages/ManageBooking"
import './App.css'

function App() {

  return (
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/booking" element={<TableBooking/>}/>
          <Route path="/manage-booking" element={<ManageBooking/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
    )
}

export default App
