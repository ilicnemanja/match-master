"use client";

// Components
import { GlobalStateContext } from "@/app/context/globalState";
import { Suspense, useContext } from "react";

// Constants
import { GAME_SETTINGS } from "@/app/constants/game-settings";
import GameSetup from "@/app/components/GameSetup";

export default function Page() {
  // get the data from context
  const { state } = useContext(GlobalStateContext); // Get the state from the context

  // Ensure contextData is available
  const contextData = state?.gameSettings;

  // Safe access to game settings
  const cardType = GAME_SETTINGS.cardType.find(
    (item) => item.id === contextData?.cardType
  )?.type;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameSetup cardType={cardType} />
    </Suspense>
  );
}
