"use client";

const diceImages = {
  1: "/lado-1.png",
  2: "/lado-2.png",
  3: "/lado-3.png",
  4: "/lado-4.png",
  5: "/lado-5.png",
  6: "/lado-6.png",
};

export function Dado({ value }) {
  return (
    <img
      src={diceImages[value]}
      alt={`Dado ${value}`}
      className="w-16 h-16"
    />
  );
}