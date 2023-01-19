import React from "react";
import {useState, useEffect} from "react";

const PlayerCpu = props => {
  const [healthPointsCpu, setHealthPointsCpu] = useState(props.hp);
  const [defensePointsCpu, setDefensePointsCpu] = useState(props.defense);
  // const [specialDefensePoints, setSpecialDefensePoints] = useState(false)

  useEffect(()=>{
    setHealthPointsCpu((props.hp/100)*100)
    setDefensePointsCpu((props.defense/100)*100)
    // const SpecialDefence = props.defense < 10 ? setSpecialDefensePoints(true) : ''

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
        {/* {specialDefensePoints && 
          <>
            <bouton className='specialDefenseBoutonCpu' onClick={()=>setSpecialDefensePoints(false)}>Special defense </bouton>
            <p className='specialDefenseBoutonConsigneCpu'>(active)</p>
        </>
        } */}
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
