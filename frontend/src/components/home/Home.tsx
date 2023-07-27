import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Banner from './Banner'
import Footer from './Footer'
import Hero from './Hero'
import MostPopular from './MostPopular'
import ServicesSlid from './ServicesSlid'
import Verifiedservices from './Verifiedservices'

function Home() {
  return (
    <>

        <Hero/>
        <ServicesSlid/>
        <MostPopular/>
        <Verifiedservices/>
        <Banner/>
        <About/>

    </>
  )
}

export default Home