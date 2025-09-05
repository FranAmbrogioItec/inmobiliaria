// PropertyCard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setTimeout(() => setImageLoaded(true), 300);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const getTypeColor = (type) => {
    switch(type.toLowerCase()) {
      case 'venta': return '#EF4444';
      case 'alquiler': return '#3B82F6';
      case 'temporal': return '#10B981';
      default: return '#6B7280';
    }
  };
  
  return (
    <div 
      className="property-card stagger-item" 
      ref={cardRef} 
      style={{ transitionDelay: `${index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="property-image">
        <div 
          className="property-tag"
          style={{ backgroundColor: getTypeColor(property.type) }}
        >
          {property.type === 'venta' ? 'Venta' : property.type === 'alquiler' ? 'Alquiler' : 'Temporal'}
        </div>
        
        <div className="property-image-container">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className={`property-img ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className="image-placeholder">Cargando...</div>}
        </div>
        
        <div className="property-overlay">
          <div className="overlay-content">
            <Link 
              to={`/property/${property.type}/${property.id}`}
              className="btn btn-primary overlay-btn"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
      </div>
      
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          <p className="property-location">
            <span className="location-icon">📍</span> 
            {property.location}
          </p>
        </div>
        
        <div className="property-features">
          <div className="feature">
            <span className="feature-icon">🛏️</span>
            <span className="feature-text">{property.bedrooms}</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛁</span>
            <span className="feature-text">{property.bathrooms}</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📏</span>
            <span className="feature-text">{property.area}m²</span>
          </div>
        </div>
        
        <div className="property-footer">
          <div className="property-price">
            <span className="price">{property.price}</span>
            {property.originalPrice && (
              <span className="original-price">{property.originalPrice}</span>
            )}
          </div>
          
          <Link 
            to={`/property/${property.type}/${property.id}`}
            className="property-link"
          >
            <span className="link-text">Ver propiedad</span>
            <span className="link-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;