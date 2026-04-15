import {
  FaPlane,
  FaSuitcaseRolling,
  FaClock,
  FaUtensils,
  FaShieldAlt,
  FaInfoCircle,
  FaStar,
  FaLock,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { flightDetailsData } from "../../data/data.js";

const FlightDetails = () => {

  const { id } = useParams();

  const flight = flightDetailsData.find(
    (f) => f.id === Number(id)
  ) || flightDetailsData[0]; // fallback

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-400 text-sm mb-4">FLIGHT ROUTE</p>

            <div className="flex justify-between items-center">

              <div>
                <h1 className="text-4xl font-bold">{flight.departTime}</h1>
                <p className="font-bold text-lg">{flight.from}</p>
                <p className="text-gray-500 text-sm">{flight.fromFull}</p>

                <p className="bg-gray-200 px-3 py-1 rounded-full text-sm mt-2 inline-block">
                  {flight.terminal}
                </p>
              </div>

              <div className="flex flex-col items-center w-1/3">
                <p className="text-gray-500 text-sm">{flight.duration}</p>

                <div className="flex items-center w-full">
                  <div className="flex-1 border-t border-dashed"></div>
                  <FaPlane className="mx-2 text-blue-500" />
                  <div className="flex-1 border-t border-dashed"></div>
                </div>

                <p className="text-green-600 text-sm">✓ Non-stop</p>
              </div>

              <div className="text-right">
                <h1 className="text-4xl font-bold">{flight.arriveTime}</h1>
                <p className="font-bold text-lg">{flight.to}</p>
                <p className="text-gray-500 text-sm">{flight.toFull}</p>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white p-5 rounded-xl shadow">
              <FaSuitcaseRolling /> {flight.baggage}
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <FaUtensils /> {flight.meal}
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <FaClock /> {flight.duration}
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <FaShieldAlt /> Free before 24h
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <FaInfoCircle /> {flight.aircraft}
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <FaStar /> {flight.rating}
            </div>

          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Price Summary</h2>

          <p>{flight.price}</p>
          <p>{flight.taxes}</p>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl">
            <FaPlane /> Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default FlightDetails;