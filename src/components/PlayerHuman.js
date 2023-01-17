import React from "react";

const PlayerHuman = (props) => {
  return (
    <>
      <div className="human">
        <img
          className="playerGame"
          src={props.image}
          alt="pokemon"
          style={{ width: "120px" }}
        />
        <h1>name: {props.name}</h1>
        <p>hp: {props.hp}</p>
        <p>attack:{props.attack}.</p>
        <p>defense: {props.defense}</p>
        <p>specialAttack: {props.specialAttack}</p>
        <p>specialDefense: {props.specialDefense}</p>
        <p>speed: {props.speed}</p>
      </div>
    </>
  );
};

export default PlayerHuman;
