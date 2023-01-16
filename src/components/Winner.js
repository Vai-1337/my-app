import React from "react";

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
        <button onClick={() => reload()}>New Game</button>        
      </div>
    </>
  );
};

export default Winner;
