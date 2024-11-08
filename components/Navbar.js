import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/result">Result</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;