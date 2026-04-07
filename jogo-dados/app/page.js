"use client";
import { useState } from "react";
import { Dado, rollDice } from "./Components/dado";

export default function Home() {
  const [player1, setPlayer1] = useState([1, 1]);
  const [player2, setPlayer2] = useState([1, 1]);
  const [turn, setTurn] = useState(1);

  const [round, setRound] = useState(1);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [finished, setFinished] = useState(false);

  const getTotal = (dice) => dice[0] + dice[1];

  const handleRollPlayer1 = () => {
    if (turn !== 1 || finished) return;
    setPlayer1([rollDice(), rollDice()]);
    setTurn(2);
  };

  const handleRollPlayer2 = () => {
    if (turn !== 2 || finished) return;

    const newP2 = [rollDice(), rollDice()];
    setPlayer2(newP2);

    const p1Total = getTotal(player1);
    const p2Total = getTotal(newP2);

    let newScore = { ...score };

    if (p1Total > p2Total) newScore.p1 += 1;
    else if (p2Total > p1Total) newScore.p2 += 1;

    setScore(newScore);

    if (round === 6) {
      setFinished(true);
    } else {
      setRound(round + 1);
      setTurn(1);
    }
  };

  const getWinner = () => {
    if (score.p1 > score.p2) return "Jogador 1 venceu!";
    if (score.p2 > score.p1) return "Jogador 2 venceu!";
    return "Empate!";
  };

  const resetGame = () => {
    setPlayer1([1, 1]);
    setPlayer2([1, 1]);
    setTurn(1);
    setRound(1);
    setScore({ p1: 0, p2: 0 });
    setFinished(false);
  };
}