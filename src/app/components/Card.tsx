"use client"; // This line is necessary for Next.js (or similar frameworks)

import React, { useState } from "react";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    console.log("Flipping card");
    console.log("isFlipped", isFlipped);
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlip} className="relative w-[200px] h-[240px] perspective-[800px] rounded-[4px]">
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="front">Click to flip</div>
            <div className="back">Yo, what up?</div>
        </div>
    </div>
  );
}
