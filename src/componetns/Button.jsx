import React from "react";

const Button = () => {
  return (
    <div className=" flex items-center justify-end gap-0">
      {/* Decorative Line */}
      <div className="flex-grow h-[3px] bg-gray-100"></div>

      {/* Button */}
      <button className="bg-purple-600 relative text-white px-5 py-5 rounded-full cursor-pointer hover:bg-purple-500 transition-all duration-300">
        <img src="/images/icon-arrow.svg" alt="arrow" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Button;
