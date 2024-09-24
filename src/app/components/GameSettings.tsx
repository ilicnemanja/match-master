"use client"

// React
import { useEffect, useState } from "react"

// Interfaces
interface GameSettingsProps {
  isSolo: boolean;
  onChildChange: (childData: GameSettingsData) => void;
}
export interface GameSettingsData {
  cardType: string;
  difficulty: string;
  timer: string;
  player1: string;
  player2: string;
}

export default function GameSettings({ isSolo, onChildChange }: GameSettingsProps) {

  const [gameSettings, setGameSettings] = useState<GameSettingsData>({
    cardType: "",
    difficulty: "",
    timer: "",
    player1: "",
    player2: "",
  })

  // Sync the child data to the parent every time gameSettings changes
  useEffect(() => {
    onChildChange(gameSettings);
  }, [gameSettings, onChildChange]);

  const handleChange = (key: keyof GameSettingsData, value: string) => {
    setGameSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <h2 className="text-white font-nunito flex justify-center mt-4 text-xl">Game Settings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 place-items-center place-content-center">

      <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-4 mb-4">Cards Type</h3>
          <div className="flex justify-center gap-3">
            <button disabled={gameSettings.cardType === "Animals"} onClick={() => handleChange("cardType", "Animals")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Animals 🦁</button>
            <button disabled={gameSettings.cardType === "Fruits"} onClick={() => handleChange("cardType", "Fruits")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Fruits 🍋</button>
            <button disabled={gameSettings.cardType === "Numbers"} onClick={() => handleChange("cardType", "Numbers")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Numbers 🔢</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">Difficulty</h3>
          <div className="flex justify-center gap-3">
            <button disabled={gameSettings.difficulty === "Easy"} onClick={() => handleChange("difficulty", "Easy")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Easy 🤭</button>
            <button disabled={gameSettings.difficulty === "Medium"} onClick={() => handleChange("difficulty", "Medium")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Medium 🤔</button>
            <button disabled={gameSettings.difficulty === "Hard"} onClick={() => handleChange("difficulty", "Hard")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400">Hard 😱</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">Timer</h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-0 gap-y-3 place-items-center">
            <button disabled={gameSettings.timer === "60s"} onClick={() => handleChange("timer", "60s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">60s</button>
            <button disabled={gameSettings.timer === "120s"} onClick={() => handleChange("timer", "120s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">120s</button>
            <button disabled={gameSettings.timer === "180s"} onClick={() => handleChange("timer", "180s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">180s</button>
            <button disabled={gameSettings.timer === "240s"} onClick={() => handleChange("timer", "240s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">240s</button>
            <button disabled={gameSettings.timer === "300s"} onClick={() => handleChange("timer", "300s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">300s</button>
            <button disabled={gameSettings.timer === "Infinity"} onClick={() => handleChange("timer", "Infinity")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400">Infinity</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">{isSolo ? "Player Name": "Players Name"}</h3>
          <div className="flex justify-center flex-col items-center gap-3">
            <div className="flex items-center mb-2 gap-4">
              {!isSolo && <span className="text-base font-nunito text-gray-400">Player 1</span>}
              <input onChange={(e) => handleChange("player1", e.target.value)} name="player1" type="text" className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg" />
            </div>
            {!isSolo && <div className="flex items-center mb-2 gap-4">
              <span className="text-base font-nunito text-gray-400">Player 2</span>
              <input onChange={(e) => handleChange("player2", e.target.value)} name="player2" type="text" className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg" />
            </div>}
          </div>
        </div>

      </div>
    </div>
  )
}
