
import React from "react";
import { FiSearch } from "react-icons/fi";

const BookingFilter = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col md:flex-row gap-4 items-center">

   
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full md:w-1/2">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by ID or name..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

    
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          All (4)
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full">
          Confirmed (3)
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full">
          Pending
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full">
          Cancelled (1)
        </button>
      </div>
    </div>
  );
};

export default BookingFilter;