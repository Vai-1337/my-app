import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="home">  
      {/* <img style={{width:"900px" , marginLeft:"10%"}} src="https://fontmeme.com/temporary/e066f22f5938525e58513283a1da5ff6.png" alt=""/> */}
      <Link to="/pokedex" className="pokedex"><button className="start"> START</button> </Link> 
      </div>
    </>
  );
};

export default Home;
