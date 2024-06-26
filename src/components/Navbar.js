// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <img src={logo} alt="Logo" className="logo"/>
      <h1>Financial Calculators</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <button type="submit"> Login/Register </button>
      </div>
    </nav>
  );
};

export default Navbar;
