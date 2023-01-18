import React, {useState} from "react";
import healthPointsCpu from "../App";

const PlayerCpu = (props) => {
  const [healthPointsCpu, setHealthPointsCpu] = useState(props.hp);

  return (
    <>
      <div className="full-cpu">
       {/*mon insertion*/}
       <div className="hpBarStatic">
            <h3 className="hpBar" style={{
              width: `${healthPointsCpu}%`,
            }}> {props.hp}
          </h3>
          </div>
          {/*mon insertion*/}
     
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
