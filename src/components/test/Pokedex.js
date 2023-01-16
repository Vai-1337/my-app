import React from "react";
import { useContext, useState } from "react";
import { PokeContext } from "../../context/PokeContext";
import PokeList from "./PokeList";
import PokeCard from "./PokeCard";

const Pokedex = () => {
  const { value, value1, value4, value5, value6,value7 } = useContext(PokeContext);
  const [data] = value;
  const [data2, setData2] = value1;
  const [pokeDex] = value4;
  const [nextUrl, setNextUrl] = value5;
  const [prevUrl, setPrevUrl] = value6;
  const [url, setUrl] = value7

  console.log(data2);

  return (
    <>
      <div className="btn-group">
      {prevUrl && (
        <button
          onClick={() => {
            setData2([]);
            setUrl(prevUrl);
          }}
        >
          Previous
        </button> )}

        {nextUrl && (
        <button
          onClick={() => {
            setData2([]);
            setUrl(nextUrl);
          }}
        >
          Next
        </button>
        )}
      </div>
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
