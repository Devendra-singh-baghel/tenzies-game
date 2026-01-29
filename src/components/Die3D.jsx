import React from "react";
import DiceFace from "./DieFace";

function Die3D({ value, isHeld, isRolling, hold }) {
    return (
        <div className="dice-3d" onClick={hold}>
            <div
                className={`dice-cube ${isHeld ? "bg-green-400" : "bg-white"}`}
                style={{
                    transform: isRolling && !isHeld
                        ? "rotateX(720deg) rotateY(360deg)"
                        : "rotateX(0deg) rotateY(0deg)"
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isHeld}
                aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
            >
                <div className={`dice-face face-1 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-2 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-3 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-4 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-5 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-6 ${isHeld ? "bg-green-400" : "bg-gray-300"}`}><DiceFace value={value} /></div>
            </div>
        </div>
    );
}

export default Die3D;
