import React from "react";
const Card = ({ pokemon, loading, infoPokemon }) => {

  const uniquePokemon = Array.from(new Set(pokemon.map(p => p.id))).map(id => {
    return pokemon.find(p => p.id === id)
  })
  // console.log(pokemon);
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
                <h2>{item.id} </h2>
                <img src={item.sprites.front_default} alt="" />
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
