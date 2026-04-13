
import React from "react";

const BookingStats = () => {
  return (
    <div className="flex gap-4 mt-6">

      <div className="bg-[#3a4b7a] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">4</h2>
        <p className="text-sm text-gray-300">Total</p>
      </div>

      <div className="bg-[#1f6f78] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">3</h2>
        <p className="text-sm text-gray-300">Confirmed</p>
      </div>

      <div className="bg-[#6b3a5f] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">1</h2>
        <p className="text-sm text-gray-300">Cancelled</p>
      </div>

    </div>
  );
};

export default BookingStats;