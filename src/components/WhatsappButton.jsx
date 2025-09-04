import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "543581234567";
  const message = "Hola, me interesa obtener más información sobre sus propiedades.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="whatsapp-icon" viewBox="0 0 32 32" width="32" height="32">
        <path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" fill="#fff"/>
        <path d="M22.656 19.352c-0.328 0.926-1.16 1.688-2.094 2.008-0.656 0.219-1.508 0.391-4.402-1.43-3.484-2.219-5.656-5.656-5.828-5.914s-1.43-2.922-1.43-4.402c0-0.938 0.328-1.77 0.82-2.32 0.492-0.547 1.16-0.82 1.828-0.82h1.094c0.328 0 0.656 0.164 0.82 0.438l1.43 2.922c0.164 0.273 0.164 0.601 0.055 0.875-0.109 0.273-0.328 0.492-0.602 0.602l-1.43 0.82c-0.273 0.164-0.438 0.438-0.438 0.711 0 0.273 0.055 0.492 0.273 0.82 0.656 1.043 1.699 2.414 2.844 3.453 0.82 0.766 1.969 1.648 3.234 2.195 0.328 0.164 0.547 0.219 0.82 0.219 0.273 0 0.547-0.109 0.711-0.328l0.875-1.094c0.164-0.219 0.438-0.328 0.711-0.328 0.273 0 0.547 0.109 0.711 0.328l2.195 2.844c0.164 0.219 0.219 0.492 0.164 0.766-0.055 0.273-0.273 0.492-0.547 0.602z" fill="#fff"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;