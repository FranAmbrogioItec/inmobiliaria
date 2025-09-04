import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/sale">Venta</Link></li>
              <li><Link to="/rental">Alquiler</Link></li>
              <li><Link to="/temporal">Alquiler Temporal</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Av. Siempre Viva 742, Río Cuarto</li>
              <li>📞 +54 358 123-4567</li>
              <li>✉️ info@echeniqueinmobiliaria.com</li>
            </ul>
            <div className="footer-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13630.52563212691!2d-64.3566344197754!3d-33.13039999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2000d94c1df7d%3A0x408abac0daad5c5a!2sR%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1690837660119!5m2!1ses!2sar" 
                width="100%" 
                height="150" 
                style={{border:0, borderRadius: '8px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Echenique Inmobiliaria en Río Cuarto">
              </iframe>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Horario de Atención</h4>
            <ul>
              <li>Lunes a Viernes: 9:00 - 18:00</li>
              <li>Sábados: 9:00 - 13:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
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