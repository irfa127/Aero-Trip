import { FaPlane, FaSuitcaseRolling, FaClock } from "react-icons/fa";
import { FaChair } from "react-icons/fa";

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-blue-500">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-xl font-bold">
            {flight.code}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{flight.departTime}</h2>
            <p className="font-semibold">{flight.from}</p>
            <p className="text-gray-500 text-sm">{flight.fromCity}</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/2">
          <p className="text-gray-500 text-sm">{flight.duration}</p>

          <div className="flex items-center w-full">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <FaPlane className="mx-2 text-blue-500" />
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <p className="text-green-500 text-sm">Non-stop</p>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold">{flight.arriveTime}</h2>
          <p className="font-semibold">{flight.to}</p>
          <p className="text-gray-500 text-sm">{flight.toCity}</p>
        </div>

        <div className="text-right ml-6">
          <p className="text-gray-400 text-sm">Starting from</p>
          <h2 className="text-xl font-bold">{flight.price}</h2>
          <p className="text-gray-400 text-xs">{flight.taxes}</p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
            Select →
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex gap-6 mt-6 text-gray-500 text-sm">
        <p className="flex items-center gap-2">
          <FaSuitcaseRolling /> 15 kg check-in, 7 kg cabin
        </p>
        <p className="flex items-center gap-2">
          <FaClock /> {flight.duration}
        </p>
        <p>
          <FaChair />
          Paid
        </p>
        <p className="ml-auto">{flight.aircraft}</p>
      </div>
    </div>
  );
};

export default FlightCard;
