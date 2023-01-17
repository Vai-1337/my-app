import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import "../css/game.css";
import decor from "../asset/decor.jpg";
import nintendo from "../asset/nintendo.webp";

const Game = () => {
  const { value, value2, value3, value8, value9 } = useContext(PokeContext);
  const [data, setData] = value;
  const [isLoading, setIsLoading] = value2;
  const [isActive, setActive] = value3;
  const [stat, setStat] = value8;
  const [stat2, setStat2] = value9;
  console.log(stat);

  const [winner, setWinner] = useState("");
  const [playerSwitched, setPlayerSwitched] = useState(false);

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
    let newHp = playerCpu.hp - playerHuman.attack;
    setPlayerCpu({ ...playerCpu, hp: newHp });
    setTimeout(() => {
      if (newHp <= 0) {
        setWinner(playerHuman.name);
      }
      setPlayerSwitched(!playerSwitched);
    }, 2000);

    setTimeout(() => {
      counterAttack();
      setActive(true)
    }, 2000);
  };

  const counterAttack = () => {
    setTimeout(() => {
      let damage = 50;
      let newHp = playerHuman.hp - damage;

      setTimeout(() => {
        setActive(true);

        setPlayerSwitched(playerSwitched);
      }, 3000);

      setPlayerHuman({ ...playerHuman, hp: newHp });
      if (newHp <= 0) {
        setWinner(playerCpu.name);
      }
      setActive(true);
    }, 3000);
  };

  return (
    <>
    
      {data.result}
      {isLoading && (
        
        <div className="game">
        
        <div className="switch">
        
        <img src={nintendo} alt="" style={{width:'1115px',  height:'755px'}}/>
        </div>
        <div className="decor-game">
        <button className="attack-btn" onClick={() => attack()}>
               
              </button>
          <img src={decor} alt="" style={{width:'100%',  height:'100%', borderRadius:'12px'}}/>
        </div>
        <div className="game2">
          <div className="player">
            <div className="blockFight">
              {playerSwitched ? (
                <PlayerCpu {...playerCpu} />
              ) : (
                <PlayerHuman {...playerHuman} />
              )}

              
            </div>
            {winner && (
              <>
                <Winner winner={winner} />
                <br />
              </>
            )}
            <div>
              {playerSwitched ? (
                <PlayerHuman {...playerHuman} />
              ) : (
                <PlayerCpu {...playerCpu} />
              )}
            </div>
          </div>
        </div>
        </div>
        
      )}
     
    </>
  );
};

export default Game;
