import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Card from './Card';





const ServicesSlid = () =>{

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 6);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 6) % 6);
  };


  return (
    
    <div className='carousel px-10 mt-8 m-2 rounded-lg shadow-3xl	' >
      <div className='top pt-4 flex justify-between'>
        <h1 className='font-lora text-2xl mt-4'> web services </h1>
        <div className="carousel-buttons mt-4">
        <button
          className=" text-dark px-4 py-2 border rounded-full mr-2"
          onClick={prevSlide}
          >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="text-dark px-4 py-2 border rounded-full"
          onClick={nextSlide}
          >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      </div>
        <div className='flex'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>        
        </div>
        
      </div>
     


   



  )
}

export default ServicesSlid