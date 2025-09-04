import React from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import About from '../components/About';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PropertyGrid />
      <About />
    </div>
  );
};

export default Home;