import React, {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';



function ServicesSlid() {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    
    <div className='carousel px-10 mt-8 m-2 rounded-lg border border-grey' >
      <div className='top pt-4'>
        <h1 className='font-lora text-2xl'> web services </h1>
        
      </div>
    <Carousel itemClass="carousel-item-padding-10-px"

              removeArrowOnDeviceType={["tablet", "mobile"]}
              responsive={responsive}>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>

    </Carousel>
    </div>


  )
}

export default ServicesSlid