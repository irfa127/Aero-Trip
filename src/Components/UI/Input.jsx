import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Date from "./Date";

const Input = ({ type }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <label htmlFor="" className="text-3xl font-sans p-2 flex  ml-15">
        {type}
      </label>

      <div className="flex  flex-row-reverse items-start ml-15">
        <div className="relative">
          <input
            className="border-1 focus:border-blue-200  w-70 outline-0 px-3 py-2 rounded-2xl"
            type="text"
            name=""
            id=""
            onClick={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          />

          <IoMdArrowDropdownCircle
            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 
    ${open ? "rotate-180" : "rotate-0"}`}
          />
        </div>

        {open && (
          <div className="max-w-sm   bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden absolute">
            <ul>
              <li className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                    London Heathrow Airport
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">
                    London, United Kingdom
                  </span>
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold font-mono">
                  LHR
                </span>
              </li>

              <li className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                    John F. Kennedy International
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">
                    New York, USA
                  </span>
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold font-mono">
                  JFK
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
