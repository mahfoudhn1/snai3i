import React, {useEffect, useState} from 'react'
import instractor1 from '../images/instractor1.jpg'
import instractor2 from '../images/instractor2.jpg'
import instractor3 from '../images/instractor3.jpg'
import Slider, {Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CustomDotProps = {
    onClick: () => void;
    active: boolean;
    customProp: string; // Replace 'string' with the appropriate type for your custom prop
  };
const CustomDot:React.FC<CustomDotProps> = ({ onClick, active, customProp }) => {
    return (
      <button
        className={`custom-dot w-4 h-4 mx-2 rounded-full bg-night ${active ? 'bg-black' : 'bg-white'}`}
        onClick={onClick}
      >  </button>
    );
  };

const Element = ()=>{
    return(

        <div className='banner  h-60 overflow-hidden flex  mx-8  mt-8 mb-8 bg-gradient-to-b rounded-lg from-brown to-light-brown px-8 justify-between ' >
            <div className='title w-2/3 justify-center ml-10 m-auto ' > 
                <h1 className='font-lora text-4xl text-white '> learn Computer science </h1>
                <p className='font-roboto text-xl text-grey-white font-md' > a small desciption about the course provided and the instractor </p>
            </div>
            <div className='profile w-1/3 h-3/4 overflow-hidden m-auto' >
                <img src={instractor1} alt="" className=' h-full w-full object-contain ' />
            </div>
     
        </div>
    )
}


function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {

      }, [currentSlide]);
    
      
      const handleDotClick = (index: number) => {
        setCurrentSlide(index);
      };
    
    
      const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots custom-dots', // Custom dots class
        customPaging: (i: number) => (
            <CustomDot onClick={() => handleDotClick(i)} active={i === currentSlide} customProp="SomeValue" />
          ),


      };
  return (
    <div className='mt-8 overflow-hidden '>

    <Slider {...settings}>
        <Element/>
        <Element/>
        <Element/>

    </Slider>
    </div>
  )
}

export default Banner