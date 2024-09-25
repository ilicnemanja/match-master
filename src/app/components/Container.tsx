import React from "react";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-5">
      <div className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-2/4 px-5">
        {children}
      </div>
    </div>
  );
}
