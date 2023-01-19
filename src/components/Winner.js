import React from "react";
import {Link} from "react-router-dom";

const Winner = props => {
  return (
    <>
      <div className="winner">
      
        <img
          alt="winner"
          src="https://fontmeme.com/permalink/230117/4b599efb23756753c97890eaea28a665.png"
        />
        <Link to="/pokedex">
          <button className="btn-newgame">New Game</button>
        </Link>
      </div>
    </>
  );
};

export default Winner;
