"use client";

// Next.js
import { useRouter } from "next/navigation";

// Components
import Button from "./Button";
import { GlobalStateContext } from "../context/globalState";
import { useContext } from "react";

interface GameSettingsProps {
  isSolo: boolean;
}

export default function ButtonStartTheGame({ isSolo }: GameSettingsProps) {

  // get the data from context
  const { state } = useContext(GlobalStateContext); // Get the state from the context
  const data = state.gameSettings;

  const router = useRouter();

  const handleReturnToHome = () => {
    router.push("/");
  }

  const onGameStart = () => {
    console.log("Game Started with data:", data);
    console.log("Game Type:", !isSolo ? "Friendly" : "Solo");
    router.push("/game/gameplay");
  }

  return (
    <div className="flex flex-col gap-4 mt-10">
      <Button
        label="Return to Home"
        onClick={handleReturnToHome}
        className="border-2 border-gray-400 hover:bg-gray-400 text-white font-nunito text-base md:text-xl w-3/4 md:w-1/2 h-12 mx-auto rounded-lg"
      />
      <Button
      label="Start Game"
      onClick={onGameStart}
      className="bg-green-500 text-white font-nunito text-base md:text-xl w-3/4 md:w-1/2 h-12 mx-auto rounded-lg"
      />  
    </div>
  )
}
