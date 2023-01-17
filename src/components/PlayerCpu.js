import React, {useState} from "react";

const PlayerCpu = (props) => {
  const [healthPointsCpu, setHealthPointsCpu] = useState(props.hp);

  return (
    <>
      <div className="full-cpu">
     
        <div className={props.className}>
          <img
            className="playerGame"
            src={props.image}
            alt="pokemon"
            style={{ width: "250px" }}
          />
         
        </div>
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
    </>
  );
};

export default PlayerCpu;
