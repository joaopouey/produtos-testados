import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductType from './pages/ProductType';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/produtos/:typeId" element={<ProductType />} />{' '}
        {/* Use "ProductType" aqui */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
