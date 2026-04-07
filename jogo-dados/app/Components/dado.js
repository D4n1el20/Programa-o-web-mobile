"use client";

const diceImages = {
  1: "/dice-1.png",
  2: "/dice-2.png",
  3: "/dice-3.png",
  4: "/dice-4.png",
  5: "/dice-5.png",
  6: "/dice-6.png",
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

export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}