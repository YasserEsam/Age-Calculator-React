import React from "react";

const DateForm = () => {
  return (
    <form className="flex flex-row items-end gap-6">
      <div className="flex flex-col w-32">
        <label htmlFor="day" className="text-sm font-thin text-gray-500 mb-1">
          DAY
        </label>
        <input
          type="text"
          id="day"
          name="day"
          placeholder="DD"
          className="px-4 py-3 text-lg font-semibold text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <div className="flex flex-col w-32">
        <label htmlFor="month" className="text-sm font-thin text-gray-500 mb-1">
          MONTH
        </label>
        <input
          type="text"
          id="month"
          name="month"
          placeholder="MM"
          className="px-4 py-3 text-lg font-semibold text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <div className="flex flex-col w-32">
        <label htmlFor="year" className="text-sm font-thin text-gray-500 mb-1">
          YEAR
        </label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YYYY"
          className="px-4 py-3 text-lg font-semibold text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>
    </form>
  );
};

export default DateForm;
