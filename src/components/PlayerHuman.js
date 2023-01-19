import React, { useState } from "react";

const PlayerHuman = (props) => {
  const [healthPointsHuman, setHealthPointsHuman] = useState(props.hp);

  console.log(healthPointsHuman)
  return (
    <>
      <div className="full-human">
        
        {/*mon insertion*/}
        <div className="hpBarStatic-human">
            <h3
              className="hpBar-human"
              style={{
                width: `${healthPointsHuman}%`,
              }}
            >
              {props.hp} 
            </h3>
          </div>
              <div className={props.className}>
          {/*mon insertion*/}
          
          <img
            className="playerGame"
            src={props.image}
            alt="pokemon"
            style={{ width: "200px" }}
          />
        </div>
      </div>
      <div className="stats-human">
        <h1 className="playernamecpu">{props.name}</h1>
        <p>hp: {props.hp}</p>
        <div className="attack-defence-human">
          <div className="attack-human">
            <p>attack:{props.attack}.</p>
            <p>specialAttack: {props.specialAttack}</p>
          </div>
          <div className="defense-human">
            <p>defense: {props.defense}</p>
            <p>specialDefense: {props.specialDefense}</p>
          </div>
        </div>
        <p>speed: {props.speed}</p>
      </div>
    </>
  );
};

export default PlayerHuman;
