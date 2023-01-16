import React from "react";

const PlayerCpu = (props) => {
  return (
    <>
      <div className="cpu">
        <img
          className="playerGame"
          src={props.image}
          alt="pokemon"
          style={{ width: "120px" }}
        />
        <h1>{props.name}</h1>
        <h1>{props.hp}</h1>
      </div>
    </>
  );
};

export default PlayerCpu;
