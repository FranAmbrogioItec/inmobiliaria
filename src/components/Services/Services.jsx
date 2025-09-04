import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Venta de Propiedades',
      description: 'Asesoramiento profesional para la compra y venta de propiedades, con amplia cartera de opciones en Río Cuarto y la región.'
    },
    {
      icon: '🔑',
      title: 'Alquileres',
      description: 'Gestión completa de alquileres residenciales y comerciales, con contratos seguros y seguimiento personalizado.'
    },
    {
      icon: '🏖️',
      title: 'Alquiler Temporario',
      description: 'Propiedades para vacaciones y estadías temporales, con todas las comodidades para disfrutar de tu tiempo libre.'
    },
    {
      icon: '📋',
      title: 'Tasaciones',
      description: 'Valoraciones profesionales de propiedades con metodologías actualizadas y conocimiento del mercado local.'
    },
    {
      icon: '📊',
      title: 'Asesoramiento Legal',
      description: 'Asesoramiento integral en todos los aspectos legales de las operaciones inmobiliarias.'
    },
    {
      icon: '📱',
      title: 'Marketing Inmobiliario',
      description: 'Estrategias de marketing digital y tradicional para maximizar la exposición de tu propiedad.'
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;