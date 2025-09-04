import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertyGrid.css';

const PropertyGrid = ({ properties, searchFilters = {} }) => {
  // Filtrar propiedades basado en searchFilters
  const filteredProperties = properties.filter(property => {
    // Filtro por tipo de propiedad
    if (searchFilters.propertyType && property.type !== searchFilters.propertyType) {
      return false;
    }
    
    // Filtro por ubicación
    if (searchFilters.location && !property.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
      return false;
    }
    
    // Filtro por dormitorios
    if (searchFilters.bedrooms && property.bedrooms < parseInt(searchFilters.bedrooms)) {
      return false;
    }
    
    // Filtro por baños
    if (searchFilters.bathrooms && property.bathrooms < parseInt(searchFilters.bathrooms)) {
      return false;
    }
    
    // Filtro por área mínima
    if (searchFilters.minArea && property.area < parseInt(searchFilters.minArea)) {
      return false;
    }
    
    // Filtro por área máxima
    if (searchFilters.maxArea && property.area > parseInt(searchFilters.maxArea)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="property-grid-container">
      <div className="properties-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))
        ) : (
          <div className="no-results">
            <h3>No se encontraron propiedades</h3>
            <p>Intenta con otros criterios de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyGrid;