import React from "react";
import { Link } from "react-router-dom";

const Winner = (props) => {

    const reload = () => {
        window.location.reload()
    }

  return (
    <>
      <div className="winner">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          The Winner
          <br />
          is :
          <br />
          <br />
          <h1> {props.winner}</h1>
        </h2>
        <Link to="/pokedex"><button>New Game</button>        </Link>
      </div>
    </>
  );
};

export default Winner;
