import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/images/voldcoin-logo.svg" alt="VoldCoin Logo" />
        <h1>VoldCoin</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mining">Mining</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
