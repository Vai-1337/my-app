import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import Loser from "../components/Loser";

import decor from "../asset/decor.jpg";
import nintendo from "../asset/nintendo.webp";

import "../css/game.css";

const Game = () => {
  const { value, value2, value3, value8, value9 } = useContext(PokeContext);
  const [data, setData] = value;
  const [isLoading, setIsLoading] = value2;
  const [stat, setStat] = value8;
  const [stat2, setStat2] = value9;
  console.log(stat);

  const [className, setClassName] = useState("cpu");
  const [classNameHuman, setClassNameHuman] = useState("human");
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [blink, setBlink] = useState("blink");

  const [playerHuman, setPlayerHuman] = useState({
    name: stat.name,
    image: stat.sprites.back_default,
    hp: stat.stats[0].base_stat,
    attack: stat.stats[1].base_stat,
    defense: stat.stats[2].base_stat,
    specialAttack: stat.stats[3].base_stat,
    specialDefense: stat.stats[4].base_stat,
    speed: stat.stats[5].base_stat,
  });
  const [playerCpu, setPlayerCpu] = useState({
    name: stat2.name,
    image: stat2.sprites.front_default,
    hp: stat2.stats[0].base_stat,
    attack: stat2.stats[1].base_stat,
    defense: stat2.stats[2].base_stat,
    specialAttack: stat2.stats[3].base_stat,
    specialDefense: stat2.stats[4].base_stat,
    speed: stat2.stats[5].base_stat,
  });

  const attack = () => {
    let newHp = playerCpu.hp - playerHuman.attack + playerCpu.defense;
    setPlayerCpu({ ...playerCpu, hp: newHp });
    setTimeout(() => {
      if (newHp <= 0) {
        setClassName("dead");
        setWinner(true);
      }
    });
    if (playerCpu > 100) {
      let newHp = playerCpu.hp - playerHuman.specialAttack
      setPlayerCpu({...playerCpu, hp: newHp})
    }
    setTimeout(() => {
      counterAttack();
    }, 2000);
  };

  const counterAttack = () => {
    setTimeout(() => {
      let newHp = playerHuman.hp - playerCpu.attack + playerHuman.defense;
      setPlayerHuman({ ...playerHuman, hp: newHp });
      setTimeout(() => {
        setClassNameHuman("human")
        ;
      }, 2000);
      setClassNameHuman("blink2")
        ;
      if (newHp <= 0) {
        setLoser(true);
        setClassNameHuman("deadhuman");
      }
      if (playerHuman > 100) {
        let newHp = playerHuman.hp - playerCpu.specialAttack
        setPlayerHuman({...playerHuman, hp: newHp})
      }
    });
  };

  const handleClick = () => {
    attack();
    setTimeout(() => {
      setClassName("cpu")
      ;
    }, 2000);
    setClassName("blink")
      ;
  };

  return (
    <>
      {data.result}
      {isLoading && (
        <div className="game">
          {playerHuman.hp < 100 && <button className="special-attaque">SPECIAL</button>}
          <div className="switch">
            <img
              src={nintendo}
              alt="switch"
              style={{ width: "1115px", height: "755px" }}
            />
          </div>
          <div className="decor-game">
            <button className="attack-btn" onClick={handleClick}>
              {/* {{handleClick} && <PlayerCpu className={blink}/>} */}
            </button>
          
            <img
              src={decor}
              alt="decor"
              style={{ width: "100%", height: "100%", borderRadius: "12px" }}
            />
          </div>
          <div className="game2">
            <div className="player">
              <div className="blockFight">
                <PlayerHuman {...playerHuman} className={classNameHuman} />
              </div>
              {winner && <Winner winner={winner} />}
              {loser && <Loser loser={loser} />}

              <div>
                <PlayerCpu {...playerCpu} className={className} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
