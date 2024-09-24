import React from "react";

// React Icons
import { BsStars } from "react-icons/bs";

export default function Content({
  children,
  header
}: Readonly<{ children: React.ReactNode, header: string }>) {
  return (
    <>
      <h2 className="text-white text-4xl md:text-6xl mb-8 flex items-center justify-center">
        <BsStars className="text-2xl md:text-4xl pr-2 text-yellow-400" /> {header}{""}
        <BsStars className="text-2xl md:text-4xl pl-2 text-yellow-400" />
      </h2>

      <div className="border-2 w-full h-auto pb-10 rounded-lg">{children}</div>
    </>
  );
}
