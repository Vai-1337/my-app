import React from "react";
import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";

const PokeList = () => {
  const { value1, value2 } = useContext(PokeContext);
  const [data2] = value1;
  const [isLoading] = value2;

  const filterData2 = data2.filter(
    (e, index, self) => self.findIndex((t) => t.id === e.id) === index
  );

  return (
    <>
    <div className="container3">
    
  

      {!isLoading ? (
        <h1>Loading</h1>
      ) : (
        
        filterData2.map((e) => {
          return (
            <div key={e.id} className="container">
              <h2>{e.id} </h2>
              
              <img src={e.sprites.front_default} alt="pokemon" />
              <h2>{e.name}</h2>
              
            </div>
          );
        })
      )}
     
      </div>
      
    </>
  );
};

export default PokeList;
