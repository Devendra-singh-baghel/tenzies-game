import React from "react";
import DiceFace from "./DieFace";

function Die3D({ value, isHeld, isRolling, hold, className }) {
    return (
        <div className="dice-3d" onClick={hold}>
            <div
                className={`dice-cube`}
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
                <div className={`dice-face face-1 ${className}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-2 ${className}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-3 ${className}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-4 ${className}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-5 ${className}`}><DiceFace value={value} /></div>
                <div className={`dice-face face-6 ${className}`}><DiceFace value={value} /></div>
            </div>
        </div>
    );
}

export default Die3D;
