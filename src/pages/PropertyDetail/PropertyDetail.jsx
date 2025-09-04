import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../../data/properties';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id, type } = useParams();
  const property = properties[type].find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div>Propiedad no encontrada</div>;
  }

  const whatsappMessage = `Hola, me interesa la propiedad: ${property.title} - ${property.location}. ¿Podrían proporcionarme más información?`;

  return (
    <div className="property-detail-page">
      <div className="property-detail-header">
        <div className="container">
          <Link to={`/${type}`} className="back-button">
            &larr; Volver a {type === 'venta' ? 'Venta' : type === 'alquiler' ? 'Alquiler' : 'Alquiler Temporal'}
          </Link>
          <h1>{property.title}</h1>
          <p className="property-location">📍 {property.location}</p>
        </div>
      </div>

      <div className="property-detail-content container">
        <div className="property-gallery">
          {property.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`${property.title} - Imagen ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="property-info">
          <div className="property-price">
            <h2>{property.price}</h2>
            {property.originalPrice && (
              <span className="original-price">{property.originalPrice}</span>
            )}
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
          </div>

          <div className="property-description">
            <h3>Descripción</h3>
            <p>{property.description}</p>
          </div>

          <div className="property-address">
            <h3>Dirección</h3>
            <p>{property.address}</p>
          </div>

          <div className="property-amenities">
            <h3>Características</h3>
            <div className="amenities-list">
              {property.amenities.map((amenity, index) => (
                <span key={index} className="amenity-tag">{amenity}</span>
              ))}
            </div>
          </div>

          <div className="property-contact">
            <WhatsAppButton 
              phoneNumber="543581234567" 
              message={whatsappMessage}
              className="whatsapp-btn-large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;