import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard';
import { featuredProperties } from '../../data/properties';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  return (
    <section className="featured-properties section">
      <div className="container">
        <div className="featured-header">
          <h2 className="section-title">Propiedades Destacadas</h2>
          <p className="section-subtitle">
            Descubre nuestras mejores propiedades en Río Cuarto y la región
          </p>
        </div>
        
        <div className="featured-grid">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        <div className="view-all-btn">
          <Link to="/sale" className="btn btn-outline btn-large">
            Ver todas las propiedades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;