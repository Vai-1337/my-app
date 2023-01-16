import React from "react";

const PlayerCpu = (props) => {
  return (
    <>
      <img src={props.image} alt="pokemon" style={{ width: "120px" }} />

      <h1>{props.name}</h1>
      <h1>{props.hp}</h1>
    </>
  );
};

export default PlayerCpu;
