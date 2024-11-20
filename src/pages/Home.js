import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Newsletter />
    </div>
  );
};

export default Home;
