import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const PokeList = () => {
  const { value, value1, value2 } = useContext(PokeContext);
  const [data] = value;
  const [data2] = value1;
  const [isLoading] = value2;

  return (
    <>
      {!isLoading ? (
        <h1>Loading</h1>
      ) : (
        data2.map((e) => {
          return (
            <div className="card" key={e.id}>
              <img
                className="pokecard "
                src={e.sprites.front_default}
                alt="pokemon"
              />
              <h2>{e.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default PokeList;
