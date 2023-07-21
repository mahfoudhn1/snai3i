import React, {useEffect, useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider, {Settings, CustomArrowProps, SwipeDirection } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from './Card'




function MostPopular() {

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className= " slick-custom-arrow  px-4 py-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full text-black font-bold text-2xl z-10" 
      onClick={onClick}> 
      &lt;
    </button>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className= "slick-custom-arrow  px-4 py-2 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full text-black font-bold text-2xl z-10 " 
      onClick={onClick}> 
       &gt; 
    </button>

  );
};


const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Log the current slide index whenever it changes
    console.log('Current Slide:', currentSlide);
  }, [currentSlide]);

  
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
    // You can use oldIndex and manually handle swipe direction if needed
    console.log('Previous Slide:', oldIndex);
    console.log('Swipe Direction:', newIndex > oldIndex ? 'next' : 'prev');
  };

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: handleBeforeChange,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
  };

  return (
    <div className='carousel px-10 mt-8 m-2 rounded-lg' >
    <div className='top pt-4 flex justify-between'>
      <h1 className='font-lora text-2xl'> Most Popular services </h1>

    </div>
      <Slider {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Slider>
      
    </div>
  )
}

export default MostPopular