import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Acerca de nosotros</h3>
          <p>Somos una empresa dedicada a </p>
        </div>
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Correo: contacto@tuempresa.com</p>
          <p>Teléfono: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
