import React from "react";
import FlightBooking from "../../Components/Flight booking detailas/FlightBooking";
import AirlineHeader from "../../Components/Flight booking detailas/AirlineHeader";
import StatsSection from "../../Components/Flight booking detailas/StatsSection";
import FlightCard from "../../Components/Flight booking detailas/FlightCard";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/UI/Card";
import { useParams } from "react-router-dom";
import { flights, stats } from "../../data/data";

const FlightBookings_Detail = () => {
  const { id } = useParams();

  const data = flights.find((i) => i.id == id) || flights[0];
  const set=stats.find((i)=>i.id == id) || stats[0]

  return (
    <div>
      <AirlineHeader id={id} />
      <div className="flex gap-4 p-10 ">
        {set.data.map((item) => (
          <StatsSection key={item.id} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="p-10 space-y-6">
        {data.data.map((el) => {
          return <FlightCard key={el.id} flight={el} />;
        })}
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default FlightBookings_Detail;
