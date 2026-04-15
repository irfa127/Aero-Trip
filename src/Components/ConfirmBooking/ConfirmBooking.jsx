import React from "react";
import Navbar from "../UI/Navbar";
import Navbar_Full from "../Navbar/MainLanding";

const ConfirmBooking = () => {
  return (
    <div>
    
      <div className="w-full h-50 bg-blue-300">
        <div className="bg-blue-700 w-20 h-20 mx-40 relative top-10 rounded-2xl">
          <h1 className="text-2xl font-bold text-white mx-6 relative top-5">
            6E
          </h1>
        </div>
        <div className="mx-70 relative bottom-10">
          <h1 className="font-bold text-2xl">IndiGo</h1>
          <p className="font-bold text-2xl font-mono">
            6E-201 — Mumbai to Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
