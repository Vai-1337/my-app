import React from "react";

const PlayerCpu = (props) => {
  return (
    <><div className="full-cpu">
      <div className="cpu">
        <img
          className="playerGame"
          src={props.image}
          alt="pokemon"
          style={{ width: "120px" }}
        />
        </div>
        <div className="stats-cpu">
       <h1>{props.name}</h1>
        <p>hp: {props.hp}</p>
        <div className="attack-defense-cpu">
        <div className="attack-cpu">
        <p>attack:{props.attack}.</p>
        <p>defense: {props.defense}</p>
        </div>
        <div className="defense-cpu">
        <p>specialAttack: {props.specialAttack}</p>
        <p>specialDefense: {props.specialDefense}</p>
        </div>
        </div>
        <p>speed: {props.speed}</p>
        
      </div>
      </div>
    </>
  );
};

export default PlayerCpu;
