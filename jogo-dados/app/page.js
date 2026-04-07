"use client";
import { useState } from "react";
import { Dado } from "./Components/dado";
import styles from "./page.module.css";
export default function Home() {
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
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

    if (round === 5) {
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

  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bold">Jogo de Dados</h1>

      <p>Rodada {round} / 5</p>
      <p>Placar: Jogador 1 ({score.p1}) x ({score.p2}) Jogador 2</p>

      <div className="flex gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2>Jogador 1</h2>
          <div className="flex gap-2">
            <Dado value={player1[0]} />
            <Dado value={player1[1]} />
          </div>
          <button
            onClick={handleRollPlayer1}
            disabled={turn !== 1 || finished}
            className={styles.button}
          >
            Rolar (Jogador 1)
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2>Jogador 2</h2>
          <div className="flex gap-2">
            <Dado value={player2[0]} />
            <Dado value={player2[1]} />
          </div>
          <button
            onClick={handleRollPlayer2}
            disabled={turn !== 2 || finished}
            className={styles.button}
          >
            <br></br>
            Rolar (Jogador 2)
          </button>
        </div>
      </div>

      {!finished && <p>Vez do Jogador {turn}</p>}

      {finished && (
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold">Fim de jogo!</h2>
          <p>{getWinner()}</p>
          <button
            onClick={resetGame}
            className={styles.resetButton}
          >
            Jogar Novamente!
          </button>
        </div>
      )}
    </div>
  );
}