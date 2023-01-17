import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="home">  
      <Link to="/pokedex" className="pokedex"><button className="start"> START</button> </Link> 
      </div>
    </>
  );
};

export default Home;
