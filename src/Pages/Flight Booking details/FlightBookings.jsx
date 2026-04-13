import React from "react";
import FlightBooking from "../../Components/Flight booking detailas/FlightBooking";
import AirlineHeader from "../../Components/Flight booking detailas/AirlineHeader";
import StatsSection from "../../Components/Flight booking detailas/StatsSection";
import FlightCard from "../../Components/Flight booking detailas/FlightCard";
import Footer from '../../Components/Footer/Footer'
import Card from "../../Components/UI/Card";

const FlightBookings_Detail = () => {
  const stats = [
    { title: "Fleet Size", value: "280+" },
    { title: "On-Time Rate", value: "87%" },
    { title: "Rating", value: "4.2" },
  ];
  const flights = [
    {
      code: "6E",
      departTime: "06:00",
      from: "BOM",
      fromCity: "Mumbai",
      duration: "2h 15m",
      arriveTime: "08:15",
      to: "DEL",
      toCity: "Delhi",
      price: "₹4,299",
      taxes: "+₹516 taxes",
      aircraft: "Airbus A320",
    },
    {
      code: "AI",
      departTime: "09:30",
      from: "BOM",
      fromCity: "Mumbai",
      duration: "2h 30m",
      arriveTime: "12:00",
      to: "DEL",
      toCity: "Delhi",
      price: "₹5,800",
      taxes: "+₹696 taxes",
      aircraft: "Boeing 787",
    },
  ];
  return (
    <div>
      <FlightBooking />

      <AirlineHeader />
      <div className="flex gap-4 p-10">
        {stats.map((item, index) => (
          <StatsSection key={index} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="p-10 space-y-6">
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
      <Card/>
      <Footer/>
    </div>
  );
};

export default FlightBookings_Detail;
