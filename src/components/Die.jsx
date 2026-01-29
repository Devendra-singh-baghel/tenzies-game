import React from "react";

function Die({ value, hold, isHeld, isRolling }) {

  return (
    <button
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`
          Die with value ${value}, 
          ${isHeld ? 'held' : 'not held'}
        `}
      className={`
          w-12 h-12 border-none text-black font-bold text-2xl flex justify-center items-center rounded shadow-md shadow-gray-300 cursor-pointer 
          ${isHeld ? 'bg-green-400' : 'bg-white'}
          ${isRolling && !isHeld ? 'dice-roll' : ''}
        `}
    >
      {value}
    </button>
  );
}

export default Die;
