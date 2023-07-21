import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesSlid from './components/ServicesSlid';
import MostPopular from './components/MostPopular';
import Verifiedservices from './components/Verifiedservices';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ServicesSlid/>
    <MostPopular/>
    <Verifiedservices/>
    <Banner/>
    <About/>
    <Footer/>
    </>
  );
}



export default App;
