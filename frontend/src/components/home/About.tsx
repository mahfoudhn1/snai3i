import React, {useState,useEffect} from 'react'
import worker from '../../images/worker.jpg'



function About() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const cardElement = document.getElementById('card');
          if (cardElement) {
            const cardTopOffset = cardElement.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            setIsAboutVisible(scrollPosition >= cardTopOffset);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div id='card' className="flex flex-col w-full p-4 mt-8  overflow-hidden">
        <h1 className='font-lora text-2xl text-center mb-8'> About Us </h1>
        <div className='flex justify-center p-4' >
            <div className={`w-1/2 ${isAboutVisible  ? 'slide-from-right-enter-active' : 'slide-from-right-enter'}   `}>
                <p className="p-6 font-extrabold font-Lugrasimo grow " > <span className='text-start text-4xl'>‟</span> <br /> Empowering dreams, connecting talent. <br/> Bridging the gap between ambition and opportunity, one match at a time <br /> 
                <span className='text-end float-right text-4xl'>”</span></p>
            </div> 

        <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-night ${isAboutVisible  ? 'slide-from-left-enter-active' : 'slide-from-left-enter'}  `}>
            <img src={worker} alt="Card Image" className="w-full h-full object-cover"/>
        </div>
        </div>
    </div>
  )
}

export default About