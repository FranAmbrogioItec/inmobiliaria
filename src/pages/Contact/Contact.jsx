import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${formData.name} ${formData.lastName}. ${formData.message}. Mi teléfono es: ${formData.phone} y mi email: ${formData.email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/543581234567?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Resetear formulario
    setFormData({
      name: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp para completar la conversación.');
  };

  return (
    <section id="contact" className="contact-page section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          Estamos aquí para ayudarte a encontrar tu propiedad ideal
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Dirección</h4>
                <p>Av. Siempre Viva 742, Río Cuarto, Córdoba</p>
                <a 
                  href="https://goo.gl/maps/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <p>+54 358 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@echeniqueinmobiliaria.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Síguenos en redes sociales</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘 Facebook</a>
                <a href="#" aria-label="Instagram">📸 Instagram</a>
                <a href="#" aria-label="Twitter">🐦 Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Celular"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tu consulta"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-accent btn-large">
                <span className="btn-icon">💬</span>
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <h3>Ubicación de nuestra oficina</h3>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13630.52563212691!2d-64.3566344197754!3d-33.13039999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2000d94c1df7d%3A0x408abac0daad5c5a!2sR%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1690837660119!5m2!1ses!2sar" 
              width="100%" 
              height="400" 
              style={{border:0, borderRadius: '12px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Echenique Inmobiliaria en Río Cuarto">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;