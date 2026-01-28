import React from "react";

function Die({ value, className, hold, isHeld }) {

  return (
    <button
      className={`w-12 h-12 border-none text-black font-bold text-2xl flex justify-center items-center rounded shadow-md shadow-gray-300 cursor-pointer ${className}`}
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? 'held' : 'not held'}`}
    >
      {value}
    </button>
  );
}

export default Die;
