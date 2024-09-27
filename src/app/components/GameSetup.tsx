"use client";

import { useRouter } from "next/navigation";
import GameCards from "./GameCards";

interface GameSetupProps {
  cardType: string | undefined;
}

export default function GameSetup({ cardType }: GameSetupProps) {
  const router = useRouter();

  // If cardType is not available, redirect to the home page
  if (!cardType) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null;
  }

  // Render the GameCards component if cardType is available
  return(
    <div className="w-2/4 h-full ml-5 mt-5">
        <GameCards cardType={cardType} />
    </div>
  );
}
