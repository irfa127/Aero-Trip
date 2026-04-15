import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import FlightBookings_Detail from '../Pages/Flight Booking details/FlightBookings';
import ConfirmBookings from '../Pages/ConfirmBooking/ConfirmBooking';



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true , Component:Home},
        {path:"airlines/:id" , Component:FlightBookings_Detail},
        {path:"mybookings/" , Component:ConfirmBookings},
    ]
  },
]);



export default router