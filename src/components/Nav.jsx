import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dribble_black.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
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
      <div className="buttons-container">
        <button>Upload</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Nav;