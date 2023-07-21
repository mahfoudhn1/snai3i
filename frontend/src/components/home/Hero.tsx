import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Hero() {

  return (
    <div className='w-full h-screen  bg-hero-pattern bg-cover bg-center bg-fixed'>
        <div className='absolute h-1/2 flex flex-col justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
          <div className='text-center flex flex-col h-1 justify-between'>
          <h1 className=' text-white text-5xl font-lora ' > Looking For A Skilled <br/> Worker ! </h1>
          <p className='text-white font-roboto mt-2'>  Empower your projects and dreams with our platform, <br/> the ultimate destination for finding skilled workers ready to bring your vision to life. !  </p>
          </div>
<form>
    <div className="flex">
        
        <div className="relative w-full">
            <input type="search" id="job-search" className="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-none focus:border-none enabled:hover:border-none	" placeholder="Search for Skilled Worker..." />
            <button type="submit" className="absolute top-0 right-0 h-full pl-5 p-2.5 text-sm font-medium text-grey bg-blue-700 rounded-r-lg border-none ">
               <FontAwesomeIcon icon={faSearch} />
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>


      </div>
          

      <div className='w-full h-screen bg-gradient-overlay bg-cover bg-center bg-fixed' >
      </div>
       

    </div>
  )
}

export default Hero