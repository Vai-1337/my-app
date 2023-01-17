import React from "react";

const PlayerHuman = (props) => {
  return (
    <>
      <div className="full-human">
        <div className="human">
          <img
            className="playerGame"
            src={props.image}
            alt="pokemon"
            style={{ width: "250px" }}
          />
        </div>
      </div>
      <div className="stats-human">
        <h1>{props.name}</h1>
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
