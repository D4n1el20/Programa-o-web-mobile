"use client";

import { useState } from "react";
import styles from "./page.module.css";

const palavras = ["javascript", "nextjs", "programacao"];

function getPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function Page() {
  const [palavra, setPalavra] = useState(getPalavra());
  const [corretas, setCorretas] = useState([]);
  const [erradas, setErradas] = useState([]);

  const tentar = (l) => {
    if (corretas.includes(l) || erradas.includes(l)) return;

    if (palavra.includes(l)) {
      setCorretas([...corretas, l]);
    } else {
      setErradas([...erradas, l]);
    }
  };

  const reiniciar = () => {
    setPalavra(getPalavra());
    setCorretas([]);
    setErradas([]);
  };

  const ganhou = palavra.split("").every((l) => corretas.includes(l));
  const perdeu = erradas.length >= 6;

  return (
    <div className={styles.container}>
      <h2>Jogo da Forca</h2> 
      <></>
      <div className={styles.palavra}>
        {palavra.split("").map((l, i) => (
          <span key={i}>
            {corretas.includes(l) ? l : "_"}
          </span>
        ))}
      </div>

      <div className={styles.teclado}>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((l) => (
          <button
            key={l}
            onClick={() => tentar(l)}
            disabled={corretas.includes(l) || erradas.includes(l)}
          >
            {l}
          </button>
        ))}
      </div>

      <p className={styles.erros}>Erros: {erradas.length}/6</p>

      {(ganhou || perdeu) && (
        <div className={styles.fim}>
          <p>{ganhou ? "Você ganhou 🎉" : `Perdeu 😢 (${palavra})`}</p>
          <button onClick={reiniciar}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}