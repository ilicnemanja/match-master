"use client";

// React
import { useContext, useState } from "react";
import { GlobalStateContext } from "../context/globalState";

// Interfaces
interface GameSettingsProps {
  isSolo: boolean;
}
export interface GameSettingsData {
  cardType: string;
  difficulty: string;
  timer: string;
  player1: string;
  player2: string;
}

export default function GameSettings({ isSolo }: GameSettingsProps) {
  const { dispatch, state } = useContext(GlobalStateContext);
  const data = state.gameSettings;

  const [gameSettings, setGameSettings] = useState<GameSettingsData>({
    cardType: data.cardType,
    difficulty: data.difficulty,
    timer: data.timer,
    player1: data.player1,
    player2: data.player2,
  });

  const handleChange = (key: keyof GameSettingsData, value: string) => {
    setGameSettings((prev) => ({ ...prev, [key]: value }));
    dispatch({
      type: "SET_GAME_SETTINGS",
      payload: {
        [key]: value,
      },
    });
  };

  const resetState = () => {
    setGameSettings({
      cardType: "",
      difficulty: "",
      timer: "",
      player1: data.player1,
      player2: data.player2,
    });
    dispatch({
      type: "SET_GAME_SETTINGS",
      payload: {
        cardType: "",
        difficulty: "",
        timer: "",
      },
    });
  };

  const randomState = () => {
    const randomCardType = ["Animals", "Fruits", "Numbers"][
      Math.floor(Math.random() * 3)
    ];
    const randomDifficulty = ["Easy", "Medium", "Hard"][
      Math.floor(Math.random() * 3)
    ];
    const randomTimer = ["60s", "120s", "180s", "240s", "300s", "Infinity"][
      Math.floor(Math.random() * 6)
    ];
    setGameSettings({
      cardType: randomCardType,
      difficulty: randomDifficulty,
      timer: randomTimer,
      player1: data.player1,
      player2: data.player2,
    });

    dispatch({
      type: "SET_GAME_SETTINGS",
      payload: {
        cardType: randomCardType,
        difficulty: randomDifficulty,
        timer: randomTimer,
      },
    });
  };

  return (
    <div>
      <h2 className="text-white font-nunito flex justify-center mt-4 mb-4 text-2xl">
        Game Settings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 place-items-center place-content-center">
        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-4 mb-4">
            Cards Type
          </h3>
          <div className="flex justify-center gap-3">
            <button
              disabled={gameSettings.cardType === "Animals"}
              onClick={() => handleChange("cardType", "Animals")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Animals 🦁
            </button>
            <button
              disabled={gameSettings.cardType === "Fruits"}
              onClick={() => handleChange("cardType", "Fruits")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Fruits 🍋
            </button>
            <button
              disabled={gameSettings.cardType === "Numbers"}
              onClick={() => handleChange("cardType", "Numbers")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Numbers 🔢
            </button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">
            Difficulty
          </h3>
          <div className="flex justify-center gap-3">
            <button
              disabled={gameSettings.difficulty === "Easy"}
              onClick={() => handleChange("difficulty", "Easy")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Easy 🤭
            </button>
            <button
              disabled={gameSettings.difficulty === "Medium"}
              onClick={() => handleChange("difficulty", "Medium")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Medium 🤔
            </button>
            <button
              disabled={gameSettings.difficulty === "Hard"}
              onClick={() => handleChange("difficulty", "Hard")}
              className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg disabled:bg-green-400"
            >
              Hard 😱
            </button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">
            Timer
          </h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-0 gap-y-3 place-items-center">
            <button
              disabled={gameSettings.timer === "60s"}
              onClick={() => handleChange("timer", "60s")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              60s
            </button>
            <button
              disabled={gameSettings.timer === "120s"}
              onClick={() => handleChange("timer", "120s")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              120s
            </button>
            <button
              disabled={gameSettings.timer === "180s"}
              onClick={() => handleChange("timer", "180s")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              180s
            </button>
            <button
              disabled={gameSettings.timer === "240s"}
              onClick={() => handleChange("timer", "240s")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              240s
            </button>
            <button
              disabled={gameSettings.timer === "300s"}
              onClick={() => handleChange("timer", "300s")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              300s
            </button>
            <button
              disabled={gameSettings.timer === "Infinity"}
              onClick={() => handleChange("timer", "Infinity")}
              className="bg-blue-500 text-white font-nunito text-base w-20 h-12 rounded-lg disabled:bg-green-400"
            >
              Infinity
            </button>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="flex justify-center font-nunito text-lg text-gray-200 mt-5 mb-4">
            {isSolo ? "Player Name" : "Players Name"}
          </h3>
          <div className="flex justify-center flex-col items-center gap-3">
            <div className="flex items-center mb-2 gap-4">
              {!isSolo && (
                <span className="text-base font-nunito text-gray-400">
                  Player 1
                </span>
              )}
              <input
                defaultValue={data.player1}
                onChange={(e) => handleChange("player1", e.target.value)}
                name="player1"
                type="text"
                className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg"
              />
            </div>
            {!isSolo && (
              <div className="flex items-center mb-2 gap-4">
                <span className="text-base font-nunito text-gray-400">
                  Player 2
                </span>
                <input
                  defaultValue={data.player2}
                  onChange={(e) => handleChange("player2", e.target.value)}
                  name="player2"
                  type="text"
                  className="border-2 border-white text-gray-600 font-nunito text-center text-base w-40 h-12 px-2 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 mb-5 w-full h-full">
        <div>
          <button
            onClick={resetState}
            className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg"
          >
            Reset 🔄
          </button>
        </div>
        <div>
          <button
            onClick={randomState}
            className="bg-blue-500 text-white font-nunito text-base w-32 h-16 rounded-lg"
          >
            Random 🔀
          </button>
        </div>
      </div>
    </div>
  );
}
