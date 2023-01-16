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

  const [playerHuman, setPlayerHuman] = useState({
    name: "Pikachu",
    image: "https://pngimg.com/uploads/pokemon/pokemon_PNG9.png",
    hp: 300,
  });
  const [playerCpu, setPlayerCpu] = useState({
    name: "Dracofeu",
    image:
      "https://www.pokepedia.fr/images/thumb/3/34/Dracaufeu-PDM1.png/1200px-Dracaufeu-PDM1.png",
    hp: 300,
  });

  const attack = () => {
    let newHp = playerCpu.hp - 50;
    setPlayerCpu({ ...playerCpu, hp: newHp });
  };

  return (
    <>
      {data.result}
      {isLoading && (
        <div className="game">
          <div className="player">
            <div className="blockFight">
              <PlayerHuman {...playerHuman} />
              <button className="btn">Attack</button>
            </div>

            <div className="blockFight">
              <PlayerCpu {...playerCpu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
