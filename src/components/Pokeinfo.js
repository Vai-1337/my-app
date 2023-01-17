import React from "react";
import Game from '../pages/Game'
import { Link } from "react-router-dom";
import {useContext, useEffect} from 'react'
import {PokeContext} from '../context/PokeContext'

const Pokeinfo = ({ data }) => {
  const {value8, value9} = useContext(PokeContext)
  const [stat, setStat] = value8
  const [stat2, setStat2] = value9

useEffect(() => {
  setStat(data)
}, [data])

// useEffect(() => {
//   const randomIndex = Math.floor(Math.random() * data)
//   setStat2(data[randomIndex])
// }, [data])
  
  console.log(stat)

  return (
    <>
      {!data ? ("") : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                 
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                  
                </>
              );
            })}
          </div>
          <br />
          
                 
         <Link to="/game"><button style={{width:'100px', height:'30px'}}>Game</button></Link>
          
        </>
      )}
    </>
  );
};
export default Pokeinfo;
