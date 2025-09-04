import React, { useState, useEffect, useRef } from 'react';

const PropertyCard = ({ property, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  
  const propertyImages = [
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
    'https://images.unsplash.com/photo-1600566753052-d04f5d7bfb2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ];
  
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
        <div className={`property-tag ${property.type.toLowerCase()}`}>{property.type}</div>
        <div className="property-image-container">
          <img 
            src={propertyImages[property.id % propertyImages.length]} 
            alt={property.title}
            className={`property-img ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className="image-placeholder">Cargando...</div>}
        </div>
        <div className="property-overlay">
          <button className="btn btn-sm">Ver Detalles</button>
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
        
        <button className="btn btn-fullwidth">Solicitar Información</button>
      </div>
    </div>
  );
};

export default PropertyCard;