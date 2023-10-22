import ThankYou from "../components/ThankYou"
import { useState} from "react"
import Form from "../components/Form"

function TableBooking() {
  return (
    <div className="tableBookingSection">
      <Form buttonText={"Book Table"} thankYouTitle={"Thank you for your booking!"}/>
    </div>
  )
}

export default TableBooking
