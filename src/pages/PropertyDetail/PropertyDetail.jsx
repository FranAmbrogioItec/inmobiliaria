import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties } from '../../data/properties';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const property = properties[type]?.find(prop => prop.id === parseInt(id));

  if (!property) {
    return (
      <div className="property-not-found">
        <div className="container">
          <h2>Propiedad no encontrada</h2>
          <p>La propiedad que buscas no existe o ha sido removida.</p>
          <Link to="/" className="btn btn-accent">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hola, me interesa la propiedad: ${property.title} - ${property.location}. ¿Podrían proporcionarme más información?`;

  const handleWhatsAppClick = () => {
    const phoneNumber = "543581234567";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="property-detail-page">
      <div className="property-detail-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            &larr; Volver
          </button>
          <h1>{property.title}</h1>
          <p className="property-location">📍 {property.location}</p>
        </div>
      </div>

      <div className="property-detail-content container">
        <div className="property-gallery">
          <div className="main-image">
            <img src={property.images[0]} alt={property.title} />
          </div>
          <div className="thumbnail-grid">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="thumbnail">
                <img src={image} alt={`${property.title} - Imagen ${index + 2}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="property-info">
          <div className="property-price-section">
            <div className="property-price">
              <h2>{property.price}</h2>
              {property.originalPrice && (
                <span className="original-price">{property.originalPrice}</span>
              )}
            </div>
            <button onClick={handleWhatsAppClick} className="btn btn-accent whatsapp-btn">
              <span className="btn-icon">💬</span>
              Consultar por WhatsApp
            </button>
          </div>

          <div className="property-features">
            <div className="feature">
              <span className="feature-icon">🛏️</span>
              <span>{property.bedrooms} habitaciones</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🛁</span>
              <span>{property.bathrooms} baños</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📏</span>
              <span>{property.area} m²</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🏷️</span>
              <span>{type === 'venta' ? 'Venta' : type === 'alquiler' ? 'Alquiler' : 'Alquiler Temporal'}</span>
            </div>
          </div>

          <div className="property-description">
            <h3>Descripción</h3>
            <p>{property.description}</p>
          </div>

          <div className="property-address">
            <h3>Dirección</h3>
            <p>{property.address}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 Ver en Google Maps
            </a>
          </div>

          {property.amenities && property.amenities.length > 0 && (
            <div className="property-amenities">
              <h3>Características</h3>
              <div className="amenities-grid">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span className="amenity-icon">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="property-contact">
            <h3>¿Te interesa esta propiedad?</h3>
            <p>Contacta con nosotros para más información o para agendar una visita.</p>
            <div className="contact-buttons">
              <button onClick={handleWhatsAppClick} className="btn btn-accent">
                <span className="btn-icon">💬</span>
                WhatsApp
              </button>
              <a href="tel:+543581234567" className="btn btn-outline">
                <span className="btn-icon">📞</span>
                Llamar
              </a>
              <a href="mailto:info@echeniqueinmobiliaria.com" className="btn btn-outline">
                <span className="btn-icon">✉️</span>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;