import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const PassengerForm = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT FORM */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow space-y-6">

          <h2 className="text-2xl font-bold">Passenger Details</h2>

          {/* NAME + AGE */}
          <div className="grid grid-cols-2 gap-4">
            
            <div>
              <label className="text-sm text-gray-500">FULL NAME *</label>
              <div className="flex items-center border rounded-xl px-3 py-2 mt-1">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="irfana"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">AGE</label>
              <input
                type="text"
                defaultValue="20"
                className="w-full border rounded-xl px-3 py-2 mt-1 outline-none"
              />
            </div>

          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">EMAIL *</label>
              <div className="flex items-center border rounded-xl px-3 py-2 mt-1">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  defaultValue="nirsan@gmail.com"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">PHONE *</label>
              <div className="flex items-center border-2 border-blue-500 rounded-xl px-3 py-2 mt-1">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="1234567890"
                  className="outline-none w-full"
                />
              </div>
            </div>

          </div>

   
          <div>
            <label className="text-sm text-gray-500">GENDER</label>

            <div className="flex gap-3 mt-2">
              <button className="px-4 py-2 border rounded-xl">Male</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-xl">
                Female
              </button>
              <button className="px-4 py-2 border rounded-xl">Other</button>
            </div>
          </div>

        
          <div className="bg-red-100 text-red-600 p-3 rounded-xl border border-red-300">
            ⚠ Please select a seat to continue.
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">

          <h2 className="text-xl font-bold mb-4">Price Breakdown</h2>

          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Base Fare</p>
            <p>₹4,299</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Taxes & Fees</p>
            <p>₹516</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹4,815</p>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            1 passenger · all inclusive
          </p>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
            Proceed to Payment →
          </button>

          <p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
            <FaLock /> Free cancellation before 24h
          </p>

        </div>

      </div>
    </div>
  );
};

export default PassengerForm;