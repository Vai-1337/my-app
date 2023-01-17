import React from "react";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";

const Card = ({ pokemon, loading, infoPokemon }) => {
  const { value9 } = useContext(PokeContext);
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

  return (
    <>
     {loading ? (
        <h1>Loading...</h1>
      ) : (
        uniquePokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2># {item.id} </h2>
                <img style={{width:"100px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
