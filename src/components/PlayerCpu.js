import React from "react";
import {useState, useEffect} from "react";

const PlayerCpu = props => {
  const [healthPointsCpu, setHealthPointsCpu] = useState(props.hp);
  const [defensePointsCpu, setDefensePointsCpu] = useState(props.defense);

  useEffect(()=>{
    setHealthPointsCpu((props.hp/100)*100)
    setDefensePointsCpu((props.defense/100)*100)
    console.log(props.hp)
    console.log(props.defense)

  }, [props.hp, props.defense])

  return (
    <>
      <div className="full-cpu">
        <p className="hpbar-fixedcpu">
          <p
            className="hpBar-cpu"
            style={{
              width: `${healthPointsCpu}%`,
            }}
          ><p className="numberhp">
            {props.hp}
            </p>
            <p className="defense-human"  style={{width: `${defensePointsCpu}%`}}>
            {/* <p className="numberhp2">{props.defense}</p>  */}
            </p>
          </p>
        </p>

        <div className={props.className}>
          <img
            className="playerGame"
            src={props.image}
            alt="pokemon"
            style={{width: "200px"}}
          />
        </div>
      </div>
      <div className="stats-cpu">
        <h1 className="playernamecpu">{props.name}</h1>
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
        <br />
        <br />
        {/* <p>speed: {props.speed}</p> */}
      </div>
    </>
  );
};

export default PlayerCpu;

// const [healthPointsCpu, setHealthPointsCpu] = useState(props.hp);

//   {/*mon insertion*/}
//   <div className="hpBarStatic-cpu">
//   <h3
//     className="hpBar-cpu"
//     style={{
//       width: `${healthPointsCpu}%`,
//     }}
//   >
//     {" "}
//     {props.hp}
//   </h3>
// </div>
// {/*mon insertion*/}
