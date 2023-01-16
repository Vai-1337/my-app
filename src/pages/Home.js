import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/pokedex" className="pokedex">
          Pokedex
        </Link>
      </div>
      <div className="home">
        <Link to="/game" className="pokedex">
          Game
        </Link>
      </div>
    </>
  );
};

export default Home;
