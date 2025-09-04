export const properties = {
  venta: [
    {
      id: 1,
      title: "Casa Moderna en Centro",
      location: "Centro, Río Cuarto",
      address: "Av. San Martín 1234",
      type: "venta",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      price: "$ 250.000",
      description: "Hermosa casa moderna en el corazón de la ciudad, con amplios espacios y terminaciones de primera calidad. Cuenta con living comedor, cocina integrada, tres dormitorios (suite principal), dos baños completos, patio y cochera.",
      amenities: ["Cochera", "Patio", "Balcón", "Amoblada", "Jardín"],
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    // Más propiedades de venta...
  ],
  alquiler: [
    {
      id: 101,
      title: "Departamento en Norte",
      location: "Norte, Río Cuarto",
      address: "Barrio Jardín 567",
      type: "alquiler",
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      price: "$ 25.000/mes",
      description: "Acogedor departamento en zona residencial, cercano a centros comerciales y transporte público. Ideal para estudiantes o profesionales. Incluye servicios básicos y acceso a áreas comunes.",
      amenities: ["Amoblado", "Servicios incluidos", "Seguridad 24hs", "Lavandería"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    // Más propiedades en alquiler...
  ],
  temporal: [
    {
      id: 201,
      title: "Cabaña con Piscina",
      location: "Sierras de Río Cuarto",
      address: "Ruta 8, Km 12",
      type: "temporal",
      bedrooms: 2,
      bathrooms: 1,
      area: 100,
      price: "$ 40.000/semana",
      description: "Encantadora cabaña para escapadas de fin de semana o vacaciones. Rodeada de naturaleza pero con todas las comodidades. Incluye piscina, parrilla y acceso directo a senderos.",
      amenities: ["Piscina", "Parrilla", "Wi-Fi", "TV por cable", "Estacionamiento"],
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    // Más propiedades de alquiler temporal...
  ]
};

export const featuredProperties = [
  // Propiedades destacadas para la página de inicio
];