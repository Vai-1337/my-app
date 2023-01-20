import React from "react";
import {Link} from "react-router-dom";
import videoSrc from "../asset/winner.mp4";

const Winner = props => {
  return (
    <>
      <div className="winner">
      
        <img
          alt="winner"
          src="https://fontmeme.com/permalink/230117/4b599efb23756753c97890eaea28a665.png"
        />
        {/* <video width="320" height="240" controls> */}
      {/* <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
        <Link to="/pokedex">
          <button className="btn-newgame">New Game</button>
        </Link>
      </div>
    </>
  );
};

export default Winner;
