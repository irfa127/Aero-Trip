import React from "react";
import { MdFlightLand } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Content from "../Navbar/Content";
import Form from "../Navbar/Input";
import {Link } from 'react-router-dom'

const Navbar_Full = () => {
  return (
    <div>
      <div className="bg-white h-17">
        <div className="flex gap-5 py-5">
          <MdFlightLand className="w-20 h-10 " />
          <h1 className="text-4xl ">
            Aero <span className="text-blue-700">Trip</span>
          </h1>
          
          <div>
            <ul className="flex gap-6 ml-80">
             <Link to="/"><li className="text-2xl">Flights</li></Link>
            <Link to="/airlines/:id"><li className="text-2xl">Air lines</li> </Link>
          <Link to='/mybookings'><li className="text-2xl">My Booking</li></Link>
              
            </ul>
          </div>
          <div className="">
            <div className="ml-60 flex ">
              <h1 className="text-2xl mr-20 flex gap-2">
                <FaHistory className="mt-1.5" />
                History
              </h1>
              <h1 className="text-2xl flex gap-2 ">
                <GrUserAdmin className="mt-1.5" />
                Admin
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Full;
