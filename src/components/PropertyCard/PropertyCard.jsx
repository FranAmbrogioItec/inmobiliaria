import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setTimeout(() => setImageLoaded(true), 300);
        }
      },
      { threshold: 0.3 }
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
  
  return (
    <div className="property-card stagger-item" ref={cardRef} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="property-image">
        <div className={`property-tag ${property.type.toLowerCase()}`}>
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
          <Link 
            to={`/property/${property.type}/${property.id}`} 
            target="_blank"
            className="btn btn-sm"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
      
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">
          <span className="location-icon">📍</span> 
          {property.location}
        </p>
        
        <div className="property-features">
          <div className="feature">
            <span className="feature-icon">🛏️</span>
            <span>{property.bedrooms} hab.</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛁</span>
            <span>{property.bathrooms} baños</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📏</span>
            <span>{property.area} m²</span>
          </div>
        </div>
        
        <div className="property-price">
          <span className="price">{property.price}</span>
          {property.originalPrice && (
            <span className="original-price">{property.originalPrice}</span>
          )}
        </div>
        
        <Link 
          to={`/property/${property.type}/${property.id}`} 
          target="_blank"
          className="btn btn-fullwidth"
        >
          Solicitar Información
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;