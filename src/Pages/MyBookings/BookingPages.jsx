import React from "react";
import BookingStats from "../../Components/MyBookings/BookingStatus";
import BookingFilter from "../../Components/MyBookings/BookingFillter";
import BookingCard from "../../Components/UI/BookingCard";
import Footer from '../../Components/Footer/Footer';
const bookings = [
  {
    airline: "IndiGo",
    code: "6E-201",
    status: "Confirmed",
    from: "BOM",
    to: "DEL",
    time: "06:00 → 08:15",
    duration: "2h 15m",
    seat: "6C",
    id: "SKY-8472-BOM",
    date: "1 Apr 2026",
    price: "₹5,119",
    payment: "Credit Card",
    color: "blue",
  },
  {
    airline: "Vistara",
    code: "UK-821",
    status: "Confirmed",
    from: "BOM",
    to: "DEL",
    time: "14:45 → 17:00",
    duration: "2h 15m",
    seat: "3A",
    id: "SKY-7301-DEL",
    date: "28 Mar 2026",
    price: "₹7,630",
    payment: "UPI",
    color: "purple",
  },
  {
    airline: "Air India",
    code: "AI-301",
    status: "Cancelled",
    from: "BOM",
    to: "CCU",
    time: "08:00 → 10:30",
    duration: "2h 30m",
    seat: "15D",
    id: "SKY-6110-CCU",
    date: "14 Feb 2026",
    price: "₹6,950",
    payment: "Net Banking",
    color: "red",
  },
];

const BookingsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-[#1f2f5a] text-white px-6 md:px-16 py-10">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-gray-300 mt-2">
          All your flight bookings in one place
        </p>

        <BookingStats />
      </div>

      {/* FILTER */}
      <div className="px-6 md:px-16 -mt-8">
        <BookingFilter />
      </div>

      {/* CARDS */}
      <div className="px-6 md:px-16 mt-6 space-y-6 pb-10">
        {bookings.map((item, index) => (
          <BookingCard key={index} data={item} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default BookingsPage;