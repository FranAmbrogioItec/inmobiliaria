import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>ECHENIQUE</h3>
              <span>Soluciones Inmobiliarias</span>
            </div>
            <p>
              Tu partner confiable en el mercado inmobiliario de Río Cuarto, Córdoba.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#home" data-smooth="false">Inicio</a></li>
              <li><a href="#properties" data-smooth="false">Propiedades</a></li>
              <li><a href="#about" data-smooth="false">Nosotros</a></li>
              <li><a href="#contact" data-smooth="false">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Av. Siempre Viva 742, Río Cuarto</li>
              <li>📞 +54 358 123-4567</li>
              <li>✉️ info@echeniqueinmobiliaria.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Echenique Soluciones Inmobiliarias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;