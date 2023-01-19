import React, {useState, useContext, useEffect} from "react";
import {PokeContext} from "../context/PokeContext";
import {Link} from "react-router-dom";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import Loser from "../components/Loser";
import decor from "../asset/decor2.png";
import nintendo from "../asset/nintendo.webp";
import sasha from "../asset/sasha.png";
import poke1 from "../asset/poke1.png";

import "../css/game.css";

const Game = () => {
  const {value, value2, value3, value8, value9} = useContext(PokeContext);
  const [data] = value;
  const [isLoading, setIsLoading] = value2;
  const [isActive, setActive] = value3;
  const [currentAttacker, setCurrentAttacker] = useState(null);

  const [stat] = value8;
  const [stat2] = value9;
  console.log(stat);

  const [className, setClassName] = useState("cpu");
  const [classNameHuman, setClassNameHuman] = useState("human");
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

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
    setCurrentAttacker(playerHuman.name);
    setTimeout(() => {
      setCurrentAttacker(null);
    }, 2000);
    let newHp = playerCpu.hp - 50;
    if (newHp <= 0) {
      newHp = 0;
    }
    setPlayerCpu({...playerCpu, hp: newHp});
    if (newHp > 0) {
      setClassName("blink")
        setTimeout(() => {
          if (playerHuman.hp > 0) {
            counterAttack();
          }
        }, 0);
    }

    setTimeout(() => {
      if (newHp <= 0) {
        setClassName("dead");
        setTimeout(() => {
          setWinner(true);
        }, 1000);
      }
    });
  };

  const counterAttack = () => {
    setCurrentAttacker(playerCpu.name);
    setTimeout(() => {
      setCurrentAttacker(null);
    }, 2000);
    setTimeout(() => {
      let newHp = playerHuman.hp - 40;
      if (newHp <= 0) {
        newHp = 0;
      }
      setPlayerHuman({...playerHuman, hp: newHp});    
      if (newHp <= 0) {
        setClassNameHuman("deadhuman");        
        setTimeout(() => {
        setLoser(true);
        },100);
        playerHuman.hp = 0;
      }else{
        
        counterAttack(null) 
      }
    }, 1000);
  };



  const handleClick = () => {
    setTimeout(() => {
      attack();
      setClassName("cpu");
    }, 300);
    setTimeout(() => {
      setClassName("blink");
    });
  };

  return (
    <>
      <div className="decorciel">
        {data.result}
        {isLoading && (
          <div className="game">
            <img src={sasha} alt="sasha" className="sasha" />
            <img src={poke1} alt="sasha2" className="sasha2" />
            <Link to="/" className="home-switch">
              <button></button>
            </Link>
            <div className="switch">
              <img
                src={nintendo}
                alt="switch"
                style={{width: "1115px", height: "755px"}}
              />
            </div>
           
            <div className="decor-game">
            {!loser &&  <button className="attack-btn" onClick={handleClick}>
              </button> }
              
              <img
                src={decor}
                alt="decor"
                style={{width: "100%", height: "100%", borderRadius: "12px"}}
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
      </div>
    </>
  );
};

export default Game;
