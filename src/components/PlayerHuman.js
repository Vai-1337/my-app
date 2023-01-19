import React, {useState, useEffect} from "react";

const PlayerHuman = props => {
  const [healthPointsHuman, setHealthPointsHuman] = useState(props.hp);
  const [defensePoints, setdefensePoints] = useState(props.defense);
  const [specialDefensePoints, setSpecialDefensePoints] = useState(false)

  useEffect(() => {
    setHealthPointsHuman((props.hp / 100) * 100);
    setdefensePoints((props.defense / 100) * 100);
    const SpecialDefense = props.hp < 110 ? setSpecialDefensePoints(true) : ''
    console.log(props.hp);
  }, [props.hp, props.defense]);

    

  return (
    <>
      <div className="full-human">
        <p className="hpbar-fixed">
        
          <p  className="hpBar-human"
            style={{ width: `${healthPointsHuman}%`,}}>
            <p className="numberhp2">{props.hp}</p>

          <p className="defense-human"  style={{width: `${defensePoints}%`}}>
            {/* {props.defense} */}
            </p>
          </p>
        </p>
        {specialDefensePoints && 
          <>
          <bouton className='specialDefenseBouton'>Special defense </bouton>
          <p className='specialDefenseBoutonConsigne'>(press boutton in the left)</p>
          <button className='bouton-left' onClick={()=>setSpecialDefensePoints(false)}>XX</button>
          </>
        }

        <div className={props.className}>
          <img
            className="playerGame"
            src={props.image}
            alt="pokemon"
            style={{width: "200px"}}
          />
        </div>
      </div>
      <div className="stats-human">
        <h1 className="playernamecpu">
          {props.name} <span className="playerVS">VS</span>
        </h1>
        <div className="attack-defence-human">
          <div className="attack-human">
            <p>attack:{props.attack}.</p>
            <p>specialAttack: {props.specialAttack}</p>
          </div>
          <div>
            <p>defense: {props.defense}</p>
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

export default PlayerHuman;
