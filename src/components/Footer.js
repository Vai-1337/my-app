import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <ul className="btn-footer">
            <li>
              {/* <Link
                style={{
                  textDecoration: "none",
                  // , color: "rgb(245, 213, 33)"
                }}
                to="/" >*/}

              {/* <button className="button"> */}
              <a href="top">
                <span>Home</span>
              </a>
              {/* </button> */}
              {/* </Link> */}
            </li>

            <li>
              <Link
                style={{
                  textDecoration: "none",
                  // , color: "rgb(245, 213, 33)"
                }}
                to="/credits"
              >
                {/* <button className="button"> */}
                <span>Credits</span>
                {/* </button> */}
              </Link>
            </li>
          </ul>
          <h6>&copy; 2023 all rights reserved, OKLM</h6>
        </div>
        {/* <img
          style={{ width: "150px" }}
          src="https://wallpaperaccess.com/full/18957.jpg"
          alt=""
        /> */}
        {/* <Link style={{ textDecoration: "none" }} to="/pokedex">
            <button className="button">
              <span>Pokedex</span>
            </button>
          </Link> */}
        <div className="info-creators">
          <h5>
            <span>Made by "DreamTeam":</span>
            <br />
            Vai
            <br />
            Dimitri
            <br />
            Hicham
            <br />
            Ludo
          </h5>
        </div>
        <div className="img-footer">
          <Link style={{ textDecoration: "none" }} to="/">
          {/* <a href="top"> */}
            <img
              style={{ width: "150px" }}
              src="https://www.pixelstalk.net/wp-content/uploads/images1/Best-Pokemon-Go-Wallpapers-Image-1920x1080.png"
              alt=""
            />
          {/* </a> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
