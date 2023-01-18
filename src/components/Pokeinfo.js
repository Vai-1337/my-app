import React from "react";
import Game from "../pages/Game";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";

const Pokeinfo = ({ data }) => {
  const { value8, value9 } = useContext(PokeContext);
  const [stat, setStat] = value8;
  const [stat2, setStat2] = value9;

  useEffect(() => {
    setStat(data);
  }, [data]);

  console.log(stat);

  return (
    <>
      {!data ? ("") : (
        <div className="right">
        <button className="close">X</button>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.types.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.type.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <p style={{lineHeight:"10px", fontSize:"17px"}}>
                    {poke.stat.name} : {poke.base_stat}
                  </p>
                </>
              );
            })}
          </div>
          <br />

          <Link to="/game">
          <button className="select">Select This Pokemon</button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Pokeinfo;
