"use client"; // This line is necessary for Next.js (or similar frameworks)

import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context/globalState";
import Image from "next/image";

interface CardProps {
  id: string;
  name: string;
  cardType: string;
  isFlipped: boolean;
  isMatched: boolean;
  image: string;
}

export default function Card({ id, ...props }: CardProps) {
  const [flipping, setFlipping] = useState(false);

  const { state, dispatch } = useContext(GlobalStateContext);

  const cardsInfo = state.cardsInfo.cards;

  const selectedCard = cardsInfo.find((card) => card.id === id);

  const checkIsAllowedToFlip = () => {
    const flippedCards = state.cardsInfo.cards.filter(
      (card) => card.isFlipped && !card.isMatched
    );
    return flippedCards.length < 2;
  };

  const checkIsMatched = () => {
    const flippedCards = state.cardsInfo.cards.filter((card) => card.isFlipped);
    return (
      flippedCards.length === 2 && flippedCards[0].name === flippedCards[1].name
    );
  };

  const handleFlip = () => {
    if (flipping) {
      return;
    }

    const isAllowed = checkIsAllowedToFlip();

    if (!isAllowed) {
      alert("You can't flip more than 2 cards at a time.");
      return;
    }

    setFlipping(true);

    // find the card by id
    const card = state.cardsInfo.cards.find((card) => card.id === id);

    if (!card) {
      console.log("Card not found.");
      return;
    }

    // update card info
    card.isFlipped = !flipping;
  };

  useEffect(() => {
    const flippedCards = state.cardsInfo.cards.filter((card) => card.isFlipped);

    if (flippedCards.length === 2) {
      const isMatched = checkIsMatched();

      // set it both to matched
      if (isMatched) {
        console.log("Matched cards: ", flippedCards);
        flippedCards.forEach((card) => {
          card.isMatched = true;
          card.isFlipped = false;
        });
      } else {
        console.log("Not matched cards: ", flippedCards);
        setTimeout(() => {
          const resetCards = state.cardsInfo.cards.map((card) => ({
            ...card,
            isFlipped: card.isMatched, // Keep matched cards flipped
          }));
          dispatch({
            type: "SET_CARDS_INFO",
            payload: {
              cards: resetCards,
            },
          });
        }, 2000);
      }
    }
  }, [flipping]);

  return (
    <div
      aria-label={id}
      onClick={handleFlip}
      className="relative w-[200px] h-[240px] perspective-[800px] rounded-[4px]"
    >
      <div className={`card ${selectedCard?.isFlipped ? "flipped" : ""}`}>
        <div className="front">CARD</div>
        <div className="back">
          <Image className="w-full h-full" width={100} height={100} src={`${props.image}`} alt={props.name} />
        </div>
      </div>
    </div>
  );
}
