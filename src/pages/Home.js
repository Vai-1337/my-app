import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import CreateUsername from "../components/CreateUserName"

const Home = () => {
  return (
    <>
      <div className="home">
        
        <Link to="/pokedex" className="pokedex">
          <button className="start">START</button>
        </Link>
        <Link to="/account" className="pokedex">
          <button className="start3">LOG IN</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
