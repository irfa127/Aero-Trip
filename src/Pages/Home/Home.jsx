import React from "react";
import Navbar from "../../Components/UI/Navbar";
import Airline from "../../Components/Airlines/Airline";
import Popuor from "../../Components/Populor/Popuor";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <div className="bg-[url('/image.png')] bg-cover bg-no-repeat min-h-screen">
        <Navbar />
      </div>
      <div>
        <Airline />
        <div className="mx-20">
          <h1 className="font-bold text-3xl ml-169 ">
            Popular<span className="text-blue-500">Routes</span>
          </h1>
          <p className="ml-129 text-3xl font-mono my-5">Top destinations our travelers love</p>
          <Popuor />
        </div>
        <About/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
