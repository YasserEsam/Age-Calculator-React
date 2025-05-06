import React from "react";
import useStore from "../Store";

const Button = () => {
  const calculateAge = useStore((state) => state.calculateAge);
  return (
    <div className="flex items-center justify-end gap-0 my-10 md:my-1  ">
      {/* Decorative Line */}
      <div className="flex-grow h-[3px] bg-gray-100"></div>

      {/* Button */}
      <button
        onClick={calculateAge}
        className="bg-purple-600 relative text-white  px-5 py-5 rounded-full cursor-pointer hover:bg-purple-500 transition-all duration-300"
      >
        <img
          src="/images/icon-arrow.svg"
          alt="arrow"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  );
};

export default Button;
