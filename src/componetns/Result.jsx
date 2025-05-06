import React from "react";

const Result = () => {
  return (
    <div className="flex flex-col items-start justify-start leading-none">
      <h1 className="text-[80px] mb-2 font-bold text-gray-800 italic">
        <span className="text-purple-600">00</span> years
      </h1>

      <h1 className="text-[80px] mb-2 font-bold text-gray-800 italic">
        <span className="text-purple-600">00</span> months
      </h1>

      <h1 className="text-[80px] mb-2  font-bold text-gray-800 italic">
        <span className="text-purple-600">00</span> days
      </h1>
    </div>
  );
};

export default Result;
