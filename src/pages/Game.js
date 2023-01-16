
import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import "../css/game.css";


const Game = () => {
  const { value, value2, value3 } = useContext(PokeContext);
  const [data, setData] = value;
  const [isLoading, setIsLoading] = value2;
  const [isActive, setActive] = value3

  const [winner, setWinner] = useState("");
  const [playerSwitched, setPlayerSwitched] = useState(false);

  const [playerHuman, setPlayerHuman] = useState({
    name: "Pikachu",
    image: "https://pngimg.com/uploads/pokemon/pokemon_PNG9.png",
    image2:
      "http://vignette2.wikia.nocookie.net/pokemon/images/5/51/025Pikachu_AG_anime_3.png/revision/latest?cb=20150101100401",
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
    setTimeout(() => {
      if (newHp <= 0) {
        setWinner(playerHuman.name);
      }
      setPlayerSwitched(!playerSwitched);
    }, 2000);

    setTimeout(() => {
      counterAttack();
      // setActive(true)
    }, 2000);
  };

  const counterAttack = () => {
    setTimeout(() => {
      let damage = 50;
      let newHp = playerHuman.hp - damage;

      setTimeout(() => {
      setActive(true)

        setPlayerSwitched(playerSwitched);
      }, 3000);

      setPlayerHuman({ ...playerHuman, hp: newHp });
      if (newHp <= 0) {
        setWinner(playerCpu.name);
      }
      setActive(true)

    }, 3000);
  };

  return (
    <>
      {data.result}
      {isLoading && (
        <div className="game">
          <div className="player">
            <div className="blockFight">
              {playerSwitched ? (
                <PlayerCpu {...playerCpu} />
              ) : (
                <PlayerHuman {...playerHuman} />
              )}

              <button className="btn-primary" onClick={() => attack()}>
                Attack
              </button>
            </div>
            {winner && (
              <>
                <Winner winner={winner} />
                <br />
              </>
            )}
            <div className="blockFight">
              {playerSwitched ? (
                <PlayerHuman {...playerHuman} />
              ) : (
                <PlayerCpu {...playerCpu} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default Game;
