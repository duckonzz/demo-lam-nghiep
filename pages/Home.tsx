import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { smoothScrollToElement } from '../utils/scrollUtils';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.slice(1); // Remove '#' from hash
      // Use setTimeout to ensure DOM is rendered before scrolling
      setTimeout(() => {
        smoothScrollToElement(sectionId);
      }, 100);
    }
  }, [location.hash]);

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
