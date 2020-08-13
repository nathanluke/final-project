import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="Navbar">
        <nav className="Navbar-navigation">
          <div className="Navbar-logo">
            <a href="/">HYPED</a>
          </div>
          <div className="space"></div>
          <div className="Navbar-list">
            <ul className="Navbar-list-items">
              <li>
                {" "}
                <Link to="/Homepage">Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/Posts">Posts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/About">About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
