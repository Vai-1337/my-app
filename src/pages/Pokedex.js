import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PokeList from "../components/PokeList";
import PokeCard from "../components/PokeCard";
import "../css/pokedex.css";

const Pokedex = () => {
  const { value, value1, value4 } = useContext(PokeContext);
  const [data] = value;
  const [data2] = value1;
  const [pokeDex] = value4;

  console.log(data, data2);

  return (
    <>
      <h1 className="pokedex">Pokedex</h1>

      <div>
        <PokeList />
      </div>

      <div className="container2">
        <PokeCard data={pokeDex} />
      </div>
    </>
  );
};

export default Pokedex;
