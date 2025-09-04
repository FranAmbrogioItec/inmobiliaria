import React, { useState } from 'react';
import './SearchFilters.css';

const SearchFilters = ({ onSearch, propertyType }) => {
  const [filters, setFilters] = useState({
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minArea: '',
    maxArea: ''
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
      propertyType: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      minArea: '',
      maxArea: ''
    });
    if (onSearch) {
      onSearch({});
    }
  };

  return (
    <div className="search-filters-container">
      <h3>Filtrar Propiedades</h3>
      <form onSubmit={handleSubmit} className="search-filters-form">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Tipo de Propiedad</label>
            <select 
              name="propertyType" 
              value={filters.propertyType}
              onChange={handleInputChange}
            >
              <option value="">Todos los tipos</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="local">Local Comercial</option>
              <option value="terreno">Terreno</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Ubicación</label>
            <select 
              name="location" 
              value={filters.location}
              onChange={handleInputChange}
            >
              <option value="">Todas las zonas</option>
              <option value="centro">Centro</option>
              <option value="norte">Norte</option>
              <option value="sur">Sur</option>
              <option value="este">Este</option>
              <option value="oeste">Oeste</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Dormitorios</label>
            <select 
              name="bedrooms" 
              value={filters.bedrooms}
              onChange={handleInputChange}
            >
              <option value="">Cualquier cantidad</option>
              <option value="1">1 dormitorio</option>
              <option value="2">2 dormitorios</option>
              <option value="3">3 dormitorios</option>
              <option value="4">4+ dormitorios</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Baños</label>
            <select 
              name="bathrooms" 
              value={filters.bathrooms}
              onChange={handleInputChange}
            >
              <option value="">Cualquier cantidad</option>
              <option value="1">1 baño</option>
              <option value="2">2 baños</option>
              <option value="3">3+ baños</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Precio Mínimo</label>
            <input
              type="number"
              name="minPrice"
              placeholder="Mínimo"
              value={filters.minPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className="filter-group">
            <label>Precio Máximo</label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Máximo"
              value={filters.maxPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className="filter-group">
            <label>Área Mínima (m²)</label>
            <input
              type="number"
              name="minArea"
              placeholder="Mínimo"
              value={filters.minArea}
              onChange={handleInputChange}
            />
          </div>

          <div className="filter-group">
            <label>Área Máxima (m²)</label>
            <input
              type="number"
              name="maxArea"
              placeholder="Máximo"
              value={filters.maxArea}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="filter-buttons">
          <button type="submit" className="btn btn-accent">
            <span className="btn-icon">🔍</span>
            Aplicar Filtros
          </button>
          <button type="button" className="btn btn-outline" onClick={handleReset}>
            Limpiar Filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;