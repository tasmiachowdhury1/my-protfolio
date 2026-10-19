import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/about';
import Footer from './components/footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;