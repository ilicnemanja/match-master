"use client";

import Card from "@/app/components/Card";
// Components
// import { GlobalStateContext } from "@/app/context/globalState";
// import { useContext } from "react";

export default function Page() {
  // get the data from context
  // const { state } = useContext(GlobalStateContext); // Get the state from the context

  // const data = state.gameSettings;

  // check how many cards are flipped in the game, 2 cards are flipped at a time
  // const flippedCards = data.cards.filter((card) => card.isFlipped);

  return (
    <div className="grid grid-cols-5 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
