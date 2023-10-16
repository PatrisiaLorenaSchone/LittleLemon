import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Menu from "./pages/Menu"
import Login from "./pages/Login"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
