import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import NavBar styles

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/whoissarah">Who is Sarah</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Add Contact link */}
      </ul>
    </nav>
  );
};

export default NavBar;
