import React from "react";
import Carousel from 'react-bootstrap/Carousel';

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
        <Carousel className="caroussel">
          {uniquePokemon.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <img className="imgcaroussel"
                  src={item.sprites.front_default}
                  alt=""
                />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <p>{item.id}</p>
                  <p>
                    <button className="buttoncaroussel" onClick={() => infoPokemon(item)}>Info</button>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
};
export default Card;
