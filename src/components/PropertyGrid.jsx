import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = ({ searchFilters }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProperties, setFilteredProperties] = useState([]);
  
  const properties = [
    {
      id: 1,
      title: "Casa Moderna en Centro",
      location: "Centro, Río Cuarto",
      type: "venta",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      price: "$ 250.000",
      originalPrice: ""
    },
    {
      id: 2,
      title: "Departamento en Norte",
      location: "Norte, Río Cuarto",
      type: "alquiler",
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      price: "$ 25.000/mes",
      originalPrice: ""
    },
    {
      id: 3,
      title: "Casa Quinta con Piscina",
      location: "Este, Río Cuarto",
      type: "venta",
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      price: "$ 380.000",
      originalPrice: "$ 400.000"
    },
    {
      id: 4,
      title: "Local Comercial Céntrico",
      location: "Centro, Río Cuarto",
      type: "venta",
      bedrooms: 0,
      bathrooms: 1,
      area: 120,
      price: "$ 180.000",
      originalPrice: ""
    },
    {
      id: 5,
      title: "Departamento Amueblado",
      location: "Sur, Río Cuarto",
      type: "alquiler",
      bedrooms: 1,
      bathrooms: 1,
      area: 50,
      price: "$ 18.000/mes",
      originalPrice: ""
    },
    {
      id: 6,
      title: "Casa Familiar con Jardín",
      location: "Oeste, Río Cuarto",
      type: "venta",
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
      price: "$ 290.000",
      originalPrice: "$ 310.000"
    }
  ];

  useEffect(() => {
    // Aplicar filtros de búsqueda si existen
    let result = properties;
    
    if (searchFilters.propertyType) {
      result = result.filter(prop => 
        prop.title.toLowerCase().includes(searchFilters.propertyType.toLowerCase())
      );
    }
    
    if (searchFilters.location) {
      result = result.filter(prop => 
        prop.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }
    
    if (searchFilters.operationType) {
      result = result.filter(prop => 
        prop.type.toLowerCase() === searchFilters.operationType.toLowerCase()
      );
    }
    
    // Aplicar filtro activo
    if (activeFilter !== 'all') {
      result = result.filter(prop => prop.type.toLowerCase() === activeFilter);
    }
    
    setFilteredProperties(result);
  }, [activeFilter, searchFilters]);

  return (
    <section id="properties" className="property-grid section">
      <div className="container">
        <h2 className="section-title">Nuestras Propiedades</h2>
        <p className="section-subtitle">
          Descubre la mejor selección de propiedades en Río Cuarto, Córdoba
        </p>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todas
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'venta' ? 'active' : ''}`}
            onClick={() => setActiveFilter('venta')}
          >
            En Venta
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'alquiler' ? 'active' : ''}`}
            onClick={() => setActiveFilter('alquiler')}
          >
            En Alquiler
          </button>
        </div>
        
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
    </section>
  );
};

export default PropertyGrid;