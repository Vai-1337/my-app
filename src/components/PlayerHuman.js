import React, { useContext, useState}from "react";
import { ProgressBar } from "react-bootstrap";
import { PokeContext } from '../context/PokeContext';


const PlayerHuman = (props) => {
  const {value3} = useContext(PokeContext)
  const [isActive, setActive] = value3

  const changeColorHp = () => {
    setActive(!isActive);
  };
  return (
    <>
      <img src={props.image} alt="pokemon" style={{ width: "120px"}} />      
      <h1 >{props.name}</h1>
      <h1 className={isActive ? "active" : null}>{props.hp}</h1>
    </>
  );
};

export default PlayerHuman;
