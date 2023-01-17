import React from "react";
import { Link } from "react-router-dom";

const Winner = (props) => {

    // const reload = () => {
    //     window.location.reload()
    // }

  return (
    <>
      <div className="winner">
      <img alt="winner" src="https://fontmeme.com/permalink/230117/4b599efb23756753c97890eaea28a665.png"/>        
                  
          {/* <h1> {props.winner}</h1> */}
        
        <Link to="/pokedex"><button className="btn-newgame">New Game</button></Link>
      </div>
    </>
  );
};

export default Winner;
