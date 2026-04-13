import React from "react";

import PassengerForm from "../../Components/Payment/Payment";
import Navbar_Full from "../../Components/Navbar/MainLanding";
import Footer from "../../Components/Footer/Footer";
import SwitchAirline from "../../Components/Payment/SwitchAirline";

const Passengers = () => {
  return (
    <div>
      <Navbar_Full />
      <PassengerForm />
      <SwitchAirline/>
      <Footer />
    </div>
  );
};

export default Passengers;
