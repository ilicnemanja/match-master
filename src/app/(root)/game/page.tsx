"use client";

// Components
import ButtonStartTheGame from "@/app/components/ButtonStartTheGame";
import Container from "@/app/components/Container";
import Content from "@/app/components/Content";
import GameSettings from "@/app/components/GameSettings";

// Next.js
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get('type');

  if (type?.toLowerCase() !== "solo" && type?.toLowerCase()  !== "friend") {
    router.push("/");
    return null;
  }

  const isSolo = type?.toLowerCase() === "solo";
  const title = isSolo ? "Solo Play" : "Friendly Game";

  return (
    <Container>
      <Content header={title}>
        <GameSettings isSolo={isSolo} />
        <ButtonStartTheGame isSolo={isSolo} />
      </Content>
    </Container>
  );
}
