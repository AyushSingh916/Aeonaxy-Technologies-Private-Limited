import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dribble_black.png";
import icon from '../assets/asian.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Dribbble Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/inspiration">Inspiration</Link>
          </li>
          <li>
            <Link to="/find-work">Find Work</Link>
          </li>
          <li>
            <Link to="/learn-design">Learn Design</Link>
          </li>
          <li>
            <Link to="/go-pro">Go Pro</Link>
          </li>
          <li>
            <Link to="/hire-designers">Hire Designers</Link>
          </li>
        </ul>
      </div>
      <div className="buttons-container">
        <input placeholder="Search" className="search-input"/>
        <i className="icon fa-solid fa-business-time"></i>
        <img src={icon} alt="icon" className="icon"/>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Nav;
