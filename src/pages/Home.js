import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
