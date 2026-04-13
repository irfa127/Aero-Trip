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

const FlightDetails = () => {
  const flight = {
    departTime: "06:00",
    from: "BOM",
    fromFull: "Chhatrapati Shivaji Maharaj International Airport",
    terminal: "Terminal T1 · Gate A12",
    duration: "2h 15m",
    arriveTime: "08:15",
    to: "DEL",
    toFull: "Indira Gandhi International Airport",
    baggage: "15 kg check-in, 7 kg cabin",
    meal: "Paid",
    aircraft: "Airbus A320",
    rating: "4.2",
    price: "₹4,299",
    taxes: "₹516",
  };

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
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaSuitcaseRolling /> Baggage
              </p>
              <h2 className="font-bold">{flight.baggage}</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaUtensils /> Meal
              </p>
              <h2 className="font-bold">{flight.meal}</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaClock /> Duration
              </p>
              <h2 className="font-bold">{flight.duration}</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaShieldAlt /> Cancellation
              </p>
              <h2 className="font-bold">Free before 24h</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaInfoCircle /> Aircraft
              </p>
              <h2 className="font-bold">{flight.aircraft}</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaStar /> Airline Rating
              </p>
              <h2 className="font-bold">{flight.rating} / 5</h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Price Summary</h2>

          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Base Fare</p>
            <p>{flight.price}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Taxes</p>
            <p>{flight.taxes}</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹4,815</p>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
            <FaPlane className="inline mr-2" />
            Book Now
          </button>

          <p className="text-gray-400 text-sm mt-4 text-center">
            <FaLock className="mx-30 relative top-5" /> Secure Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
