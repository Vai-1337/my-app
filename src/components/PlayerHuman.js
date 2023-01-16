import React from 'react';
import { isActive } from 'react-router-dom'


const PlayerHuman = (props) => {

  return (
    <>
      <img src={props.image} alt="pokemon" style={{ width: "120px"}} />      
      <h1 >{props.name}</h1>
      <h1 className={isActive ? "active" : null}>{props.hp}</h1>
    </>
  );
};

export default PlayerHuman;
