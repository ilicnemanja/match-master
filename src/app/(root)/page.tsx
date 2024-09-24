"use client";

import React from "react";

// React Icons
import { FaQuestion } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";

// Next.js
import { useRouter } from "next/navigation";

// Components
import Container from "../components/Container";
import Content from "../components/Content";
import Button from "../components/Button";


export default function Page() {
  const router = useRouter();

  function handlePlay(type: "solo" | "friend"): void {
    router.push(`/game?type=${type}`);
  }

  return (
    <Container>
      <Content header="Match Master">
        <div className="flex items-center gap-5 mx-8 mt-8 mb-5">
          <FaQuestion className="text-blue-500 text-6xl sm:text-4xl lg:text-4xl xl:text-2xl cursor-pointer" />
          <p className="text-blue-100 font-nunito">
            Choose your favorite game type and start matching the cards. You can
            choose from 3 different game types: Animals, Fruits, and Numbers.
          </p>
        </div>

        <div className="flex items-center gap-5 mx-8 mb-5">
          <FaBoltLightning className="text-yellow-500 text-6xl sm:text-4xl lg:text-4xl xl:text-2xl cursor-pointer" />
          <p className="text-blue-100 font-nunito">
            The game is timed, so you will need to act quickly to match all the
            cards. The faster you match them, the higher your score will be!
          </p>
        </div>

        <div className="flex items-center gap-5 mx-8 mb-5">
          <FaUserFriends className="text-orange-500 text-6xl sm:text-4xl lg:text-4xl xl:text-2xl cursor-pointer" />
          <p className="text-blue-100 font-nunito">
            Challenge a friend and see who can achieve the highest score. Who
            will be the true Match Master?
          </p>
        </div>

        <div className="flex items-center gap-5 mx-8 mb-8">
          <SiGoogletasks className="text-green-500 text-6xl sm:text-4xl lg:text-4xl xl:text-2xl cursor-pointer" />
          <p className="text-blue-100 font-nunito">
            You can see your score at the end of the game. Try to beat your high
            score and share it with your friends.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-5">
          <Button
          label="Play Solo ☝️🙂"
            onClick={() => handlePlay("solo")}
            className="border-2 border-blue-500 hover:bg-blue-500 text-white font-nunito text-base w-3/4 md:text-xl md:w-1/2 h-12 mx-auto rounded-lg"
          />
          <Button
            label="Play with Friend ✌️😊"
            onClick={() => handlePlay("friend")}
            className="bg-blue-500 text-white font-nunito text-base md:text-xl w-3/4 md:w-1/2 h-12 mx-auto rounded-lg"
          />
        </div>
      </Content>
    </Container>
  );
}
