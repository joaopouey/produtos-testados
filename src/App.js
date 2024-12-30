import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Products from './pages/Products';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/produtos/:typeId" element={<Products />} />{' '}
        {/* Use "Product" aqui */}
      </Routes>
    </Router>
  );
}

export default App;
