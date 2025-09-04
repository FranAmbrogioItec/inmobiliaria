// Hero.jsx
import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ setCurrentPage, onSearch }) => {
  const heroRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    propertyType: '',
    location: '',
    operationType: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validar que al menos un filtro esté seleccionado
    const hasFilters = Object.values(searchFilters).some(value => value !== '');
    
    if (hasFilters && onSearch) {
      onSearch(searchFilters);
      document.getElementById('properties').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentPage('properties');
    } else if (onSearch) {
      // Si no hay filtros, mostrar todas las propiedades
      onSearch({});
      document.getElementById('properties').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentPage('properties');
    }
  };

  const handleFilterChange = (filter, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const scrollToProperties = () => {
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    setCurrentPage('properties');
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setCurrentPage('contact');
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Modern house in Río Cuarto" 
          className={`hero-bg-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <div className="image-preloader"></div>}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span>⭐ Más de 10 años de experiencia</span>
          </div>
          
          <h1 className="hero-title fade-in-up">
            Encuentra tu <span className="text-accent">hogar ideal</span> en Río Cuarto
          </h1>
          
          <p className="hero-subtitle fade-in-up">
            Descubre propiedades exclusivas en venta y alquiler con el mejor asesoramiento profesional.
          </p>
          
          {/* Search Filters */}
          <div className="search-filters fade-in-up">
            <form onSubmit={handleSearch} className="search-form">
              <div className="filter-group">
                <div className="select-wrapper">
                  <select 
                    value={searchFilters.propertyType} 
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  >
                    <option value="">Tipo de propiedad</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="local">Local Comercial</option>
                    <option value="terreno">Terreno</option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <select 
                    value={searchFilters.location} 
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                  >
                    <option value="">Todas las zonas</option>
                    <option value="centro">Centro</option>
                    <option value="norte">Norte</option>
                    <option value="sur">Sur</option>
                    <option value="este">Este</option>
                    <option value="oeste">Oeste</option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <select 
                    value={searchFilters.operationType} 
                    onChange={(e) => handleFilterChange('operationType', e.target.value)}
                  >
                    <option value="">Tipo de operación</option>
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-accent search-btn">
                  <span className="btn-icon">🔍</span>
                  Buscar
                </button>
              </div>
            </form>
          </div>

          <div className="hero-buttons fade-in-up">
            <button 
              className="btn btn-outline btn-large"
              onClick={scrollToProperties}
            >
              Ver todas las propiedades
            </button>
            
            <button 
              className="btn btn-accent btn-large"
              onClick={scrollToContact}
            >
              <span className="btn-icon">📞</span>
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;