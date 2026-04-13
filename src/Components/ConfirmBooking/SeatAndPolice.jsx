
import { FaCircle } from "react-icons/fa";

const SeatAndPolicy = () => {
  const seats = [
    {
      type: "Business",
      count: 8,
      price: "+₹2000",
      color: "text-purple-600",
      border: "border-purple-300",
      bg: "bg-purple-50",
    },
    {
      type: "Premium",
      count: 12,
      price: "+₹800",
      color: "text-blue-600",
      border: "border-blue-300",
      bg: "bg-blue-50",
    },
    {
      type: "Preferred",
      count: 23,
      price: "+₹300",
      color: "text-green-600",
      border: "border-green-300",
      bg: "bg-green-50",
    },
    {
      type: "Economy",
      count: 47,
      price: "Included",
      color: "text-gray-700",
      border: "border-gray-300",
      bg: "bg-gray-50",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 space-y-6">

      {/* SEAT AVAILABILITY */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-gray-400 font-semibold mb-4">
          SEAT AVAILABILITY
        </h2>

        <div className="grid grid-cols-4 gap-4">

          {seats.map((seat, index) => (
            <div
              key={index}
              className={`rounded-xl p-5 text-center border ${seat.border} ${seat.bg}`}
            >
              <h3 className={`font-semibold ${seat.color}`}>
                {seat.type}
              </h3>

              <h1 className="text-2xl font-bold mt-2">
                {seat.count}
              </h1>

              <p className="text-gray-500 text-sm">seats left</p>

              <p className={`mt-2 font-semibold ${seat.color}`}>
                {seat.price}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* CANCELLATION POLICY */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-gray-400 font-semibold mb-4">
          CANCELLATION POLICY
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-gray-600">
              <FaCircle className="text-gray-300 text-xs" />
              Before 24 hours
            </p>
            <p className="text-green-600 font-medium">
              ₹500 cancellation fee
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-gray-600">
              <FaCircle className="text-gray-300 text-xs" />
              24h to 4h before
            </p>
            <p className="text-orange-500 font-medium">
              ₹1,500 cancellation fee
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-gray-600">
              <FaCircle className="text-gray-300 text-xs" />
              Within 4 hours
            </p>
            <p className="text-red-500 font-medium">
              Non-refundable
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SeatAndPolicy;