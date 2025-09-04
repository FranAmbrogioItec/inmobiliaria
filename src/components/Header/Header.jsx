import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="/echenique_circle.png" 
            alt="Logo Echenique" 
            className="header-logo-image"
          />
          <div className="header-logo-text">
            <h2>ECHENIQUE</h2>
            <span>Soluciones Inmobiliarias</span>
          </div>
        </div>
        
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Inicio
          </a>
          <a 
            href="#about" 
            className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            Nosotros
          </a>
          <a 
            href="#sale" 
            className={`nav-item ${currentPage === 'sale' ? 'active' : ''}`}
            onClick={() => handleNavClick('sale')}
          >
            Venta
          </a>
          <a 
            href="#rental" 
            className={`nav-item ${currentPage === 'rental' ? 'active' : ''}`}
            onClick={() => handleNavClick('rental')}
          >
            Alquiler
          </a>
          <a 
            href="#temporal" 
            className={`nav-item ${currentPage === 'temporal' ? 'active' : ''}`}
            onClick={() => handleNavClick('temporal')}
          >
            Temporal
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