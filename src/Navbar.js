// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '': 'show'}`}>
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link zoom-on-hover">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cities" className="nav-link zoom-on-hover">Villes</Link>
          </li>
          <li className="nav-item">
            <Link to="/zones" className="nav-link zoom-on-hover">Zones</Link>
          </li>
          <li className="nav-item">
            <Link to="/pharmacies" className="nav-link zoom-on-hover">Pharmacy</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link zoom-on-hover">Rechercher</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-link zoom-on-hover">Map</Link>
          </li>
          <li className="nav-item">
            <Link to="/ModelViewer" className="nav-link zoom-on-hover">ModelViewer</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
