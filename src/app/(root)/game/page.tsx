"use client";

// Components
import ButtonStartTheGame from "@/app/components/ButtonStartTheGame";
import Container from "@/app/components/Container";
import Content from "@/app/components/Content";
import GameSettings, { GameSettingsData } from "@/app/components/GameSettings";

// Next.js
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState<GameSettingsData>({
    cardType: "Animals",
    difficulty: "Easy",
    timer: "60s",
    player1: "",
    player2: "",
  })

  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get('type');

  if (type?.toLowerCase() !== "solo" && type?.toLowerCase()  !== "friend") {
    router.push("/");
    return null;
  }

  const isSolo = type?.toLowerCase() === "solo";
  const title = isSolo ? "Solo Play" : "Friendly Game";

  const handleCallback = (childData: GameSettingsData) => {
    console.log("Child Data:", childData);
    setData(childData); // Update parent state with child data
  };

  return (
    <Container>
      <Content header={title}>
        <GameSettings isSolo={isSolo} onChildChange={handleCallback} />
        <ButtonStartTheGame isSolo={isSolo} data={data} />
      </Content>
    </Container>
  );
}
