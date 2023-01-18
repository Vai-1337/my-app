import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { Link } from 'react-router-dom';
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import Loser from "../components/Loser";
import decor from "../asset/decor2.png";
import nintendo from "../asset/nintendo.webp";
import sasha from "../asset/sasha.png";
import sasha2 from "../asset/sasha2.png";
import poke1 from "../asset/poke1.png";


import "../css/game.css";

const Game = () => {
  const { value, value2, value3, value8, value9 } = useContext(PokeContext);
  const [data, setData] = value;
  const [isLoading, setIsLoading] = value2;
  const [isActive, setActive] = value3;

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
    let newHp = playerCpu.hp - 50;
    setPlayerCpu({ ...playerCpu, hp: newHp });
    // setPlayerHuman({ ...playerHuman, name: playerHuman.name });
       
    setTimeout(() => {
      counterAttack()
      setActive(true)
    }, 0);
    
    setTimeout(() => {      
      if (newHp <= 0) {        //dead condition 
        setClassName("dead");
        setTimeout(() => {
        setWinner(true);
        }, 0);        
      }
      
    });
    
  };

  const counterAttack = () => {
    setTimeout(() => {
      let newHp = playerHuman.hp - 
      // playerCpu.attack + playerHuman.defense;
      setPlayerHuman({ ...playerHuman, hp: newHp });
      setClassNameHuman("blink2")
      setTimeout(() => {
        setClassNameHuman("human")
      }, 1000)
      
      if (playerHuman > 100) {
        let newHp = playerHuman.hp - playerCpu.specialAttack
        setPlayerHuman({...playerHuman, hp: newHp})
      }
      if (newHp <= 0) {
        setClassNameHuman("deadhuman");
        
        setTimeout(() => {
          setLoser(true);
        }, 0);
      }
    }, 1000);
  };

  const handleClick = () => {
    setTimeout(() => {
    attack();
    
      setClassName("cpu")
      ;
    }, 300);
    setTimeout(() => {
    setClassName("blink")
  });
    
      ;
  };

  return (
    <>
    
    <div className="decorciel">
    
      {data.result}
      {isLoading && (
        <div className="game">
        <img src={sasha} alt="sasha" className="sasha"/>
        <img src={poke1} alt="sasha2" className="sasha2"/>
          <Link to="/" className="home-switch"><button ></button></Link>
          {/* {playerHuman.hp < 100 && <button className="special-attaque">SPECIAL</button>} */}
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
      </div>
    </>
  );
};

export default Game;
