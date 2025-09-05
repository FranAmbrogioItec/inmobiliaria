// SearchFilters.jsx
import React, { useState } from 'react';
import './SearchFilters.css';

const SearchFilters = ({ onSearch, propertyType }) => {
  const [filters, setFilters] = useState({
    operationType: '',
    propertyType: '',
    bedrooms: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleReset = () => {
    setFilters({
      operationType: '',
      propertyType: '',
      bedrooms: '',
      location: ''
    });
    if (onSearch) {
      onSearch({});
    }
  };

  return (
    <div className="search-filters-container">
      <div className="filters-header">
        <h3>Encuentra tu propiedad ideal</h3>
        <p>Filtra por tus preferencias principales</p>
      </div>
      
      <form onSubmit={handleSubmit} className="search-filters-form">
        <div className="filters-grid">
          <div className="filter-group">
            <div className="select-wrapper">
              <select 
                name="operationType" 
                value={filters.operationType}
                onChange={handleInputChange}
                className="filter-select"
              >
                <option value="">Tipo de operación</option>
                <option value="venta">Venta</option>
                <option value="alquiler">Alquiler</option>
                <option value="temporal">Alquiler Temporal</option>
              </select>
            </div>
          </div>

          <div className="filter-group">
            <div className="select-wrapper">
              <select 
                name="propertyType" 
                value={filters.propertyType}
                onChange={handleInputChange}
                className="filter-select"
              >
                <option value="">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="local">Local Comercial</option>
                <option value="terreno">Terreno</option>
              </select>
            </div>
          </div>

          <div className="filter-group">
            <div className="select-wrapper">
              <select 
                name="bedrooms" 
                value={filters.bedrooms}
                onChange={handleInputChange}
                className="filter-select"
              >
                <option value="">Dormitorios</option>
                <option value="1">1 dormitorio</option>
                <option value="2">2 dormitorios</option>
                <option value="3">3 dormitorios</option>
                <option value="4">4+ dormitorios</option>
              </select>
            </div>
          </div>

          <div className="filter-group">
            <div className="select-wrapper">
              <select 
                name="location" 
                value={filters.location}
                onChange={handleInputChange}
                className="filter-select"
              >
                <option value="">Localidades</option>
                <option value="centro">Centro</option>
                <option value="norte">Norte</option>
                <option value="sur">Sur</option>
                <option value="este">Este</option>
                <option value="oeste">Oeste</option>
              </select>
            </div>
          </div>
        </div>

        <div className="filter-buttons">
          <button type="submit" className="btn btn-primary filter-btn">
            <span className="btn-icon">🔍</span>
            Buscar propiedades
          </button>
          <button type="button" className="btn btn-outline filter-btn" onClick={handleReset}>
            Limpiar filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;