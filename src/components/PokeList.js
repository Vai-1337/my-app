import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const PokeList = () => {
  const { value } = useContext(PokeContext);
  const [data] = value;

  return (
    <>
      {data.map((e) => {
        return (
          <div className="card" key={e.id}>
            <h2>{e.name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default PokeList;
