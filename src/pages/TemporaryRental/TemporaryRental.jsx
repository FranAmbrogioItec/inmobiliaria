import React, { useState } from 'react';
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import { properties } from '../../data/properties';
import './TemporaryRental.css';

const TemporaryRental = () => {
  const [searchFilters, setSearchFilters] = useState({});
  const temporalProperties = properties.temporal;

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <section id="temporal" className="temporal-page section">
      <div className="container">
        <h2 className="section-title">Alquiler Temporario</h2>
        <p className="section-subtitle">
          Disfruta de estadías temporales en las mejores propiedades de Río Cuarto y la región
        </p>
        
        <SearchFilters onSearch={handleSearch} propertyType="temporal" />
        <PropertyGrid properties={temporalProperties} searchFilters={searchFilters} />
      </div>
    </section>
  );
};

export default TemporaryRental;