import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/pokedex" className="pokedex">
          Pokedex
        </Link>
      </div>
      <div className="home">       
      </div>
    </>
  );
};

export default Home;
