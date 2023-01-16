
import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import "../css/game.css";

const Game = () => {
  const { value, value2 } = useContext(PokeContext);
  const [data, setData] = value;
  const [isLoading, setIsLoading] = value2;

  const [playerHuman, setPlayerHuman] = useState("");
  const [playerCpu, setPlayerCpu] = useState("");

  return (
    <>
      {data.result}
      {isLoading && <div className="game"></div>}
    </>
  );
};


export default Game;
