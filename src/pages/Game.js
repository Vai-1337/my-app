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
  const {value, value2, value8, value9} = useContext(PokeContext);
  const [data] = value;
  const [isLoading, setIsLoading] = value2;
  const [showGame, setShowGame] = useState(false);
  const [specialDefensePoints, setSpecialDefensePoints] = useState(false);
  const [bouclier, setBouclier] = useState(false);

  const [stat] = value8;
  const [stat2] = value9;

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

  useEffect(() => {
    const SpecialDefense =
      playerHuman.hp < 100 ? setSpecialDefensePoints(true) : "";
  }, [playerHuman.hp]);

  const handleClick = () => {
    if (playerCpu.hp + playerCpu.defense <= playerHuman.attack) {
      setPlayerCpu({...playerCpu, hp: 0});
      setClassNameHuman("human-move");
      setTimeout(() => {
        setClassName("dead");
      }, 500);
      setTimeout(() => {
        setWinner(true);
      }, 1500);
      setTimeout(() => {
        setClassNameHuman("human");
      }, 2000);
    }
    attack();
    if (playerCpu.hp + playerCpu.defense >= playerHuman.attack) {
      setTimeout(() => {
        setClassNameHuman("human-move");
      });
      setTimeout(() => {
        setClassName("blink-cpu");
      }, 500);
      setTimeout(() => {
        setClassNameHuman("human");
      }, 2500);
      setTimeout(() => {
        setClassName("cpu");
      }, 2500);
    }
  };
  const attack = () => {
    let newDefense = playerCpu.defense - playerHuman.attack;
    setPlayerCpu({...playerCpu, defense: newDefense});

    // className("cpu") &&
    setTimeout(() => {
      counterAttack();
    }, 3000);

    if (newDefense <= 0) {
      setPlayerCpu({...playerCpu, defense: 0});
      if (playerCpu.defense <= 0) {
        let newHp = playerCpu.hp - playerHuman.attack;
        setPlayerCpu({...playerCpu, hp: newHp});
        if (newHp <= 0) {
          setPlayerCpu({...playerCpu, hp: 0});
        }
      }
    }
  };

  // if (playerCpu.hp > 0)
  // counterAttack();
  // },3000);
  // rajout else il contre attack pas

  // if (newDefense <= 0) {
  //   setPlayerCpu({...playerCpu, defense: 0});
  //   if (newDefense <= 0) {
  //     let newHp = playerCpu.hp - playerHuman.attack;
  //     setPlayerCpu({...playerCpu, hp: newHp});}

  //     if (playerCpu.hp <= 0) {
  //       setPlayerCpu({...playerCpu, hp: playerHuman.hp});
  //     }
  //   }
  //       if (newHp <= 0) {
  //         setClassName("dead");
  //         setTimeout(() => {
  //           setWinner(true);
  //         }, 2000);

  //       }
  //     }
  //   }
  const counterAttack = () => {
    if (playerCpu.attack >= playerHuman.hp + playerHuman.defense) {
      setPlayerHuman({...playerHuman, hp: 0});
      setClassName("cpu-move");
      setTimeout(() => {
        setClassNameHuman("deadhuman");
      }, 500);

      setTimeout(() => {
        setLoser(true);
      }, 1000);
      setTimeout(() => {
        setClassName("cpu");
      }, 2500);
    }
    if (playerHuman.hp + playerHuman.defense > playerCpu.attack) {
      setClassName("cpu-move");
      setTimeout(() => {
        setClassNameHuman("blink-human");
      }, 500);
      setTimeout(() => {
        setClassName("human");
      }, 2500);
      setTimeout(() => {
        setClassNameHuman("cpu");
      }, 2000);
    }

    let newDefense = playerHuman.defense - playerCpu.attack;
    setPlayerHuman({...playerHuman, defense: newDefense});
    if (newDefense <= 0) {
      setPlayerHuman({...playerHuman, defense: 0});
      if (playerHuman.defense <= 0) {
        let newHp = playerHuman.hp - playerCpu.attack;
        setPlayerHuman({...playerHuman, hp: newHp});
        if (newHp <= 0) {
          setPlayerHuman({...playerHuman, hp: 0});
        }
        if (newHp === 0) {
          setClassNameHuman("dead");
        }
      }
    }
  };
  //   setTimeout(() => {
  //     setLoser(true);
  //   }, 2000);
  // }

  // let newHp = playerHuman.hp - 20;
  // if (newHp <= 0) {
  //   newHp = 0;
  // }

  //   setPlayerHuman({...playerHuman, hp: newHp});
  //   if (newHp <= 0) {
  //     setClassNameHuman("deadhuman");
  //     setTimeout(() => {
  //       setLoser(true);
  //     }, 100);//     playerHuman.hp = 0;    //   } else {
  //     counterAttack(null);
  //   }
  // }, 4000
  // );

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
            {/* {specialDefensePoints && 
          <>
          <bouton className='specialDefenseBouton'>Special defense </bouton>
          <p className='specialDefenseBoutonConsigne'>(press "B")</p>
          <button className='defense-btn' onClick={()=>{setSpecialDefensePoints(false);setBouclier(true)}}></button>
           </> */}

            {/* {bouclier &&  
        <bouton className='bouclier'>.</bouton>
        } */}
            <div className="decor-game">
              {!loser && !winner && (
                <button className="attack-btn" onClick={handleClick}></button>
              )}

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
                {winner && (
                  <img
                    className="winwinwin"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e76d5b9-f266-4b2e-bcf5-48850bcafb4d/d4k61n9-7a656974-906c-44dc-8ee6-939b445f221f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi81ZTc2ZDViOS1mMjY2LTRiMmUtYmNmNS00ODg1MGJjYWZiNGQvZDRrNjFuOS03YTY1Njk3NC05MDZjLTQ0ZGMtOGVlNi05MzliNDQ1ZjIyMWYucG5nIn1dXX0.DYCnGpAjp9m3twiPdQzIuofBu_04iWZxv31Ta-eeOnk"
                    alt="sasha"
                  />
                )}
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
