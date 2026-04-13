
import React from "react";
import { FiDownload } from "react-icons/fi";

const BookingCard = ({ data }) => {
  const colorMap = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  const statusColor =
    data.status === "Confirmed"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";

  return (
    <div
      className={`bg-white p-5 rounded-2xl shadow border-t-4 ${colorMap[data.color]}`}
    >
      <div className="flex justify-between items-center">

        {/* LEFT */}
        <div className="flex gap-4">

          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-200 font-bold">
            {data.code.split("-")[0]}
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              {data.airline}{" "}
              <span className="text-gray-400 text-sm">· {data.code}</span>
              <span
                className={`ml-2 px-2 py-1 text-xs rounded-full ${statusColor}`}
              >
                {data.status}
              </span>
            </h2>

            <p className="mt-1 text-sm">
              {data.from} {data.time} {data.to} • {data.duration}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Seat: {data.seat} • {data.id} • {data.date}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-right">
          <p className="text-sm text-gray-400">Paid</p>
          <h2 className="text-xl font-bold">{data.price}</h2>
          <p className="text-sm text-gray-400">{data.payment}</p>

          <div className="flex gap-2 mt-3 justify-end">
            <button className="border px-3 py-1 rounded-lg flex items-center gap-1 text-sm">
              <FiDownload /> Ticket
            </button>

            {data.status !== "Cancelled" && (
              <button className="border border-red-300 text-red-500 px-3 py-1 rounded-lg text-sm">
                Cancel
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingCard;