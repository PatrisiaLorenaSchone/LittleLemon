import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Menu from "./pages/Menu"
import TableBooking from "./pages/TableBooking"
import ManageBooking from "./pages/ManageBooking"
import Layout from "./components/Layout"
import './App.css'
import ThankYou from "./pages/ThankYou"
import Form from "./components/Form"

function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="booking" element={<TableBooking/>}>
              <Route index element={<Form buttonText={"Book Table"}/>}/>
              <Route path="thankyou" element={<ThankYou/>}/>
            </Route>
            <Route path="manage-booking" element={<ManageBooking/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
