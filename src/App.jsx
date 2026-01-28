import React, { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti'
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon = dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon])
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        id: crypto.randomUUID(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      }));
  }

  const rollDie = () => {
    if (!gameWon) {
      setDice((oldDie) =>
        oldDie.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }));
    } else {
      setDice(generateAllNewDice());
    }
  }

  const hold = (id) => {
    setDice((oldDie) =>
      oldDie.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die))
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">

      <div
        aria-live="polite"
        className="absolute w-1 h-1 overflow-hidden border-0 whitespace-nowrap"
      >
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>

      <div className="bg-white w-96 h-96 rounded-md p-3 flex flex-col justify-evenly items-center relative">

        {gameWon &&
          <Confetti
            width={384}
            height={384}
            recycle={true}
            numberOfPieces={200}
          />
        }

        <div className="text-center px-12">
          <h1 className="text-2xl font-extrabold">Thenzies</h1>
          <p className="text-sm text-gray-600">Roll untill all dies are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <div className="grid grid-cols-5 gap-5 p-2">
          {dice.map((diecObj) => (
            <Die
              key={diecObj.id}
              value={diecObj.value}
              className={diecObj.isHeld ? `bg-green-400` : `bg-white focus:outline-2 focus:outline-blue-300 hover:bg-gray-100 duration-300`}
              hold={() => hold(diecObj.id)}
              isHeld={diecObj.isHeld}
            />
          ))}
        </div>

        <button
          onClick={rollDie}
          ref={buttonRef}
          className={`${gameWon ? 'bg-orange-700 hover:bg-orange-800 focus:outline-3 focus:outline-blue-500' : 'bg-indigo-700 hover:bg-indigo-800'} text-white text-xl font-bold px-4 py-3 rounded-md border-none  duration-300 cursor-pointer`}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>

      </div>
    </div>
  );
}

export default App;

/*
1. Add a timer and a roll counter to see how quickly you can win the game.
2. Style the dice to look like real dice with pips insted of numbers.
*/
