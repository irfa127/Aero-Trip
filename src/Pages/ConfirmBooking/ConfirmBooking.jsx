
import React from 'react'
import ConfirmBooking from '../../Components/ConfirmBooking/ConfirmBooking'
import FlightDetails from '../../Components/ConfirmBooking/FlightDetails'
import Footer from '../../Components/Footer/Footer'
import SeatAndPolicy from '../../Components/ConfirmBooking/SeatAndPolice'
import SwitchAirline from '../../Components/Payment/SwitchAirline'

const ConfirmBookings = () => {
  return (
    <div>
      <ConfirmBooking/>
      <FlightDetails/>
      <SeatAndPolicy/>
      <Footer/>
      
    </div>
  )
}

export default ConfirmBookings
