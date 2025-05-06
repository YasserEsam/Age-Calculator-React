import React from "react";
import useStore from "../Store";

const Result = () => {
  const ageYear = useStore((state) => state.ageYear);
  const ageMonth = useStore((state) => state.ageMonth);
  const ageDay = useStore((state) => state.ageDay);

  return (
    <div className="flex flex-col items-start justify-start leading-none">
      <h1 className="text-[59px] md:text-[80px] mb-2 font-bold text-gray-800 italic">
        <span className="text-purple-600">{ageYear === 0 ? "--" : ageYear}</span> years
      </h1>

      <h1 className="text-[59px] md:text-[80px] mb-2 font-bold text-gray-800 italic">
        <span className="text-purple-600">{ageMonth === 0 ? "--" : ageMonth}</span> months
      </h1>

      <h1 className="text-[59px] md:text-[80px] mb-2 font-bold text-gray-800 italic">
        <span className="text-purple-600">{ageDay === 0 ? "--" : ageDay}</span> days
      </h1>
    </div>
  );
};

export default Result;
