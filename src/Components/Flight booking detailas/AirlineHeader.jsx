import React from "react";

const AirlineHeader = () => {
  return (
    <div>
      <div className="bg-blue-300 w-376 h-90">
        <div className="w-30 h-30 bg-white relative left-40 top-10 rounded-2xl">
          <div className="w-20 h-20 bg-blue-800 relative left-5 top-4 rounded-2xl">
            <h1 className="text-3xl font-bold mx-5 relative top-5 text-white">
              6E
            </h1>
          </div>
        </div>
        <div className="mx-80 relative bottom-10">
          <h1 className="text-4xl font-bold">IndiGo</h1>
          <p className=" font-mono pt-3">
            India's largest airline by passengers, known for punctuality and
            affordable fares.
          </p>
          <div className="flex gap-20 pt-3 ">
            <p className="font-bold">On-time: 87%</p>
            <p className="font-bold text-blue-500">Founded: 2006</p>
            <p className="font-bold">Fleet: 280+ aircraft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineHeader;
