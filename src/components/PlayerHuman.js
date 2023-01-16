import React from "react";

const PlayerHuman = (props) => {
  return (
    <>
      <div className="human">
        <img src={props.image} alt="pokemon" style={{ width: "120px" }} />
        <h1>{props.name}</h1>
        <h1>{props.hp}</h1>
      </div>
    </>
  );
};

export default PlayerHuman;
