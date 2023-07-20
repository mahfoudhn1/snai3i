
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Slider, {Settings, CustomArrowProps, SwipeDirection } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {data} from '../jsondata/data';
import Card from './Card'

function Verifiedservices() {

 
  
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
      beforeChange: handleBeforeChange,
      prevArrow: <CustomPrevArrow />, // Custom previous arrow component
      nextArrow: <CustomNextArrow />, // Custom next arrow component
    };
  
    return (
      <div className='carousel px-10 mt-8 m-2 rounded-lg' >
      <div className='top pt-4 flex justify-between'>
        <h1 className='font-lora text-2xl'> Most Popular services </h1>
        <a href="" className='font-roboto hover:font-bold hover:transform-translate-x-2 mr-2 ' > See all &gt;&gt;  </a>
        
      </div>
        <Slider {...settings}>
        {data.map((data, index) => (
         <div key={index} className="max-w-xs flex flex-col bg-white h-20 rounded-lg shadow">
         <div className=' overflow-hidden max-h-40 rounded flex-none p-4	'>
             <img className="rounded-t-lg border" src={data.image_link} alt="" />
         </div>
         <div className="p-5 grow" >
             <a href="#">
                 <p className="mb-2 text-md font-medium font-roboto tracking-tight text-grey"> {data.title} </p>
                 <p className='flex'>
                   < FontAwesomeIcon icon={faStar} className='p-1 m-0' />  
                   <span>{data.rating} </span> 
                 </p>
                 <h1 className='font-bold font-roboto mt-4' > from 2000DA </h1>
             </a>
     
         </div>
     </div>
      ))}

        </Slider>
        
      </div>
)}

export default Verifiedservices