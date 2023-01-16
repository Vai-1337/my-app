import React from "react";

const PlayerCPU = (props) => {
  return (
    <>
      <img src={props.image} alt="pokemon" style={{ width: "120px" }} />
      <h1>{props.name}</h1>
      <p>{props.hp}</p>
    </>
  );
};

export default PlayerCPU;
