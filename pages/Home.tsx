import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Products />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
