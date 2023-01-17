import React from "react";
import { Link } from "react-router-dom";

const Loser = (props) => {

    // const reload = () => {
    //     window.location.reload()
    // }

  return (
    <>
      <div className="winner">
      <img alt="winner" src="https://fontmeme.com/permalink/230117/8bd8c6652784678f41c4a5460aa6df6d.png"/>        
                  
          {/* <h1> {props.winner}</h1> */}
        
        <Link to="/pokedex"><button className="btn-newgame">New Game</button></Link>
      </div>
    </>
  );
};

export default Loser;
