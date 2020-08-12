import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="Navbar-navigation">
        <div className="Navbar-logo">
          <a href="/">HYPED</a>
        </div>
        <div className="space"></div>
        <div className ="Navbar-list">
          <ul className="Navbar-list-items">
            <li> <Link to="/Home">Home</Link> </li>
            <li> <Link to="/Catergories">Catergories</Link> </li>
            <li> <Link to="/About">About</Link> </li>
          </ul>
        </div>   
      </nav>
    </header>
  );
};

export default Navbar;
