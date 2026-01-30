import React, { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti'
import Die from "./components/Die";
import Die3D from "./components/Die3D";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [isRolling, setIsRolling] = useState(false);
  const [rollCount, setRollCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);
  const [invalidDiceId, setInvalidDiceId] = useState(null);
  const [bestScore, setBestScore] = useState(
    () => JSON.parse(localStorage.getItem("bestScore")) || null
  );


  const buttonRef = useRef(null);

  const gameWon = dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      if (bestScore === null || rollCount < bestScore) {
        setBestScore(rollCount);
        localStorage.setItem("bestScore", rollCount);
      }

      buttonRef.current.focus();
    }
  }, [gameWon]);


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
      setIsRolling(true);

      setTimeout(() => {
        setDice((oldDie) =>
          oldDie.map((die) =>
            die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }));

        setIsRolling(false);
      }, 600);

      setRollCount((prev) => prev + 1);

    } else {
      setDice(generateAllNewDice());
      setRollCount(1);
      setSelectedValue(null);
    }
  }


  const hold = (id) => {
    setDice((oldDice) => {
      const clickedDie = oldDice.find(die => die.id === id);

      // Invalid click (different value)
      if (
        selectedValue !== null &&
        clickedDie.value !== selectedValue
      ) {
        setInvalidDiceId(id);
        setTimeout(() => setInvalidDiceId(null), 300);
        return oldDice;
      }

      // First valid selection
      if (selectedValue === null) {
        setSelectedValue(clickedDie.value);
      }

      const updatedDice = oldDice.map(die =>
        die.id === id
          ? { ...die, isHeld: true }
          : die
      );

      // Reset selectedValue if no dice held
      const anyHeld = updatedDice.some(die => die.isHeld);
      if (!anyHeld) {
        setSelectedValue(null);
      }

      return updatedDice;
    });
  };


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

        <p className="absolute top-2 font-bold text-indigo-700">
          Best Score: {bestScore ?? "—"}
        </p>

        <div className="text-center px-12">
          <h1 className="text-2xl font-extrabold">Thenzies</h1>
          <p className="text-sm text-gray-600">Roll untill all dies are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        {
          gameWon ?
            <div className="text-green-600 text-xl text-center font-bold px-12">
              <p className="space-x-2">
                <span>Congratulations!</span>
                <span className="text-indigo-700 font-extrabold block">Roll Taken : {rollCount}</span>
                <span>Press</span>
                <span className="text-orange-700 font-extrabold">"New Game"</span>
                <span>to start again.</span>
              </p>
            </div>
            :
            <div className="grid grid-cols-5 gap-5">
              {dice.map((diecObj) => (
                <Die3D
                  key={diecObj.id}
                  value={diecObj.value}
                  hold={() => hold(diecObj.id)}
                  isHeld={diecObj.isHeld}
                  isRolling={isRolling}
                  invalidDiceId={invalidDiceId}
                  className={`
                      ${diecObj.isHeld ? "bg-green-400" : "bg-gray-300"} 
                      ${invalidDiceId === diecObj.id ? "invalid" : ""}
                    `}
                />
              ))}
            </div>
        }

        <button
          onClick={rollDie}
          ref={buttonRef}
          className={`text-white text-xl font-bold px-4 py-3 rounded-md border-none  duration-300 cursor-pointer
                ${gameWon ?
              'bg-orange-700 focus:outline-3 focus:outline-blue-500'
              :
              'bg-indigo-700 hover:bg-indigo-800'}
               `}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>

      </div>
    </div>
  );
}

export default App;

