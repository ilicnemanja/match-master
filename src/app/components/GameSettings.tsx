"use client"

// React
import { useState } from "react"

export default function GameSettings({ isSolo }: { isSolo: boolean }) {

  const [object, setObject] = useState({
    cardType: "Animals",
    difficulty: "Easy",
    timer: "60s",
    player1: "",
    player2: "",
  })

  const handleOnChange = (e: any) => {
    const { name, value } = e.target
    setObject({ ...object, [name]: value })
  }

  const handleObject = (key: string, value: string) => {
    setObject({ ...object, [key]: value})
  }

  // callback function to send the object to the parent component
  const handleStartGame = () => {
    return object;
  }

  return (
    <div>
      <h2 className="text-white font-nunito flex justify-center mt-4 text-xl">Game Settings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 place-items-center place-content-center">

      <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-4 mb-4">Cards Type</h3>
          <div className="flex justify-center gap-3">
            <button onClick={() => handleObject("cardType", "Animals")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Animals 🦁</button>
            <button onClick={() => handleObject("cardType", "Fruits")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Fruits 🍋</button>
            <button onClick={() => handleObject("cardType", "Numbers")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Numbers 🔢</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">Difficulty</h3>
          <div className="flex justify-center gap-3">
            <button onClick={() => handleObject("difficulty", "Easy")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Easy 🤭</button>
            <button onClick={() => handleObject("difficulty", "Medium")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Medium 🤔</button>
            <button onClick={() => handleObject("difficulty", "Hard")} className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg">Hard 😱</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">Timer</h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-0 gap-y-3 place-items-center">
            <button onClick={() => handleObject("timer", "60s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">60s</button>
            <button onClick={() => handleObject("timer", "120s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">120s</button>
            <button onClick={() => handleObject("timer", "180s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">180s</button>
            <button onClick={() => handleObject("timer", "240s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">240s</button>
            <button onClick={() => handleObject("timer", "300s")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">300s</button>
            <button onClick={() => handleObject("timer", "Infinity")} className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg">Infinity</button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">{isSolo ? "Player Name": "Players Name"}</h3>
          <div className="flex justify-center flex-col items-center gap-3">
            <div className="flex items-center mb-2 gap-4">
              {!isSolo && <span className="text-base font-nunito text-gray-400">Player 1</span>}
              <input onChange={handleOnChange} name="player1" type="text" className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg" />
            </div>
            {!isSolo && <div className="flex items-center mb-2 gap-4">
              <span className="text-base font-nunito text-gray-400">Player 2</span>
              <input onChange={handleOnChange} name="player2" type="text" className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg" />
            </div>}
          </div>
        </div>

      </div>
    </div>
  )
}
