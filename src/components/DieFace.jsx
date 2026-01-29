import React from "react";
import { pipMap } from "../lib/pipMap";

function DiceFace({ value }) {
    const activePips = pipMap[value] || [];
    const pipPosition = ["TL", "TM", "TR", "ML", "C", "MR", "BL", "BM", "BR"];
    return (
        <div className="dice-face-grid w-full h-full grid grid-cols-3 grid-rows-3 p-1.5 box-border">
            {pipPosition.map(pos => (
                <div key={pos} className="dice-cell flex items-center justify-center">
                    {activePips.includes(pos) && <span className="pip w-2 h-2 bg-black rounded-full" />}
                </div>
            ))}
        </div>
    );
}

export default DiceFace;