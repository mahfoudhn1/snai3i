import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesSlid from './components/ServicesSlid';
import MostPopular from './components/MostPopular';
import Verifiedservices from './components/Verifiedservices';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <ServicesSlid/>
    <MostPopular/>
    <Verifiedservices/>
    </>
  );
}



export default App;
