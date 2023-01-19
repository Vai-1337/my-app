import React from "react";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { Link } from "react-router-dom";

const Card = ({ pokemon, loading}) => {
  const { value9, value8 } = useContext(PokeContext);
  const [stat, setStat] = value8;
  const [stat2, setStat2] = value9;

  const uniquePokemon = Array.from(new Set(pokemon.map((p) => p.id))).map(
    (id) => {
      return pokemon.find((p) => p.id === id);
    }
  );

  const randomIndex = Math.floor(Math.random() * uniquePokemon.length);
  const randomCPU = uniquePokemon[randomIndex];

  useEffect(() => {
    setStat2(randomCPU);
  }, [randomCPU]);

  const infoPokemon = (item) =>{
    setStat(item)
  }

  return (
    <>
     {loading ? (
        <h1>Loading...</h1>
      ) : (
        uniquePokemon.map((item) => {
          return (
            <>
              <div className="contain">
                <div className="card2">
                  <img
                    style={{ width: "90px" }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                    alt=""
                  />
                  <div className="abilities">
                      {item.types.map((poke) => {
                        return (
                          <>
                            <div className={poke.type.name === 'normal' ? 'normal' : poke.type.name === 'fighting' ? 'fighting' : poke.type.name === 'flying' ? 'flying' : poke.type.name === 'poison' ? 'poison' : poke.type.name === 'ground' ? 'ground' : poke.type.name === 'rock' ? 'rock' : poke.type.name === 'bug' ? 'bug' : poke.type.name === 'ghost' ? 'ghost' : poke.type.name ==='steel' ? 'steel' : poke.type.name === 'fire' ? 'fire' : poke.type.name === 'water' ? 'water' : poke.type.name === 'grass' ? 'grass' : poke.type.name === 'electric' ? 'electric' : poke.type.name === 'psychic' ? 'psychic' : poke.type.name === 'ice' ? 'ice' : poke.type.name === 'dragon' ? 'dragon' : poke.type.name === 'fairy' ? 'fairy' : 'default'} >
                              <p className="group">{poke.type.name}</p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  <h2 className="title">#{item.id}<br></br>{item.name}</h2>
                  <div className="card-hidden">
                  <div className="base-stat">
                      {item.stats.map((poke) => {
                        return (
                          <>
                            <p style={{ lineHeight: "2px", fontSize: "13px" }}>
                              {poke.stat.name} : {poke.base_stat}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <Link onClick={() => infoPokemon(item)} to="/game"><button className="but">SELECT</button></Link>
                  </div>
                </div>
                <div className="card-border"></div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;


/* <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <p style={{textAlign:"left"}}># {item.id} </p>
                <img style={{width:"90px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                <p>{item.name}</p>
              </div> */
