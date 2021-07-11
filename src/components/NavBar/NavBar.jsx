import React from "react";

import "./NavBar.css";
const NavBar = ({ setMovieHandler }) => {
  return (
    <>
      <header className="header">
        <nav className="NavBar">
          <div className="heading">
            <h1>Prime Videos</h1>
          </div>
          <div className="MenuList">
            <ul>
              <li></li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => setMovieHandler(false)}
              >
                Home
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => setMovieHandler(true)}
              >
                Favourite
              </li>
              <li>Sign In</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
