// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="img"/>
        <span className="navbar-title">Websites.co.in</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Preview</a>
        <a href="#" className="nav-link">Export</a>
      </div>
    </nav>
  );
};

export default Navbar;
