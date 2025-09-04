import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      name: 'Juan Echenique',
      role: 'Fundador & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Más de 15 años de experiencia en el mercado inmobiliario local.'
    },
    {
      name: 'María López',
      role: 'Asesora Comercial',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      description: 'Especialista en propiedades residenciales y atención personalizada.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Gerente de Operaciones',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Encargado de la gestión y coordinación de todas las operaciones.'
    }
  ];

  return (
    <section id="about" className="about-page section">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">
          Conoce la historia y el equipo detrás de Echenique Soluciones Inmobiliarias
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Nuestra Historia</h3>
            <p>
              Echenique Soluciones Inmobiliarias nació en 2010 con la visión de transformar 
              la experiencia de compra, venta y alquiler de propiedades en Río Cuarto. 
              Fundada por Juan Echenique, un profesional con amplia experiencia en el sector, 
              nuestra empresa se ha consolidado como referente en el mercado local.
            </p>
            <p>
              A lo largo de más de una década, hemos ayudado a cientos de familias y 
              profesionales a encontrar su hogar ideal o la inversión perfecta, siempre 
              con el compromiso de ofrecer un servicio personalizado, transparente y de calidad.
            </p>
            
            <h3>Nuestra Misión</h3>
            <p>
              Brindar soluciones inmobiliarias integrales que superen las expectativas 
              de nuestros clientes, mediante un servicio personalizado, transparente y 
              profesional, aprovechando nuestro conocimiento del mercado local y las 
              últimas tecnologías disponibles.
            </p>
            
            <h3>Nuestros Valores</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>🏅 Confianza</h4>
                <p>Construimos relaciones basadas en la honestidad y transparencia.</p>
              </div>
              <div className="value-item">
                <h4>⚡ Innovación</h4>
                <p>Utilizamos las últimas tecnologías para mejorar tu experiencia.</p>
              </div>
              <div className="value-item">
                <h4>🤝 Compromiso</h4>
                <p>Nos dedicamos por completo a alcanzar tus objetivos inmobiliarios.</p>
              </div>
              <div className="value-item">
                <h4>📈 Excelencia</h4>
                <p>Buscamos siempre la máxima calidad en nuestro servicio.</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Oficina de Echenique Soluciones Inmobiliarias" 
              className="about-img"
            />
          </div>
        </div>
        
        <div className="team-section">
          <h3 className="team-title">Nuestro Equipo</h3>
          <p className="team-subtitle">
            Profesionales comprometidos con brindarte el mejor servicio
          </p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;