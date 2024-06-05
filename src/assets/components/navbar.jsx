import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="content">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Acerca de</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
