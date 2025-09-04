import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Sale from './pages/Sale/Sale';
import Rental from './pages/Rental/Rental';
import TemporaryRental from './pages/TemporaryRental/TemporaryRental';
import Contact from './pages/Contact/Contact';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchFilters, setSearchFilters] = useState({});

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <Router>
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          <Routes>
            <Route path="/" element={<Home setCurrentPage={setCurrentPage} onSearch={handleSearch} />} />
            <Route path="/about" element={<About />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/temporal" element={<TemporaryRental />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/property/:type/:id" element={<PropertyDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;