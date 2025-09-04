import React, { useState, useEffect } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="./public/echenique_circle.png" 
            alt="Logo Echenique" 
            className="nav-logo-image"
          />
          <div className="nav-logo-text">
            <h2>ECHENIQUE</h2>
            <span>Soluciones Inmobiliarias</span>
          </div>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Inicio
          </a>
          <a 
            href="#properties" 
            className={`nav-item ${currentPage === 'properties' ? 'active' : ''}`}
            onClick={() => handleNavClick('properties')}
          >
            Propiedades
          </a>
          <a 
            href="#about" 
            className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            Nosotros
          </a>
          <a 
            href="#contact" 
            className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contacto
          </a>
        </nav>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;