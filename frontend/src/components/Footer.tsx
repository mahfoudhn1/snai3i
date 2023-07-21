import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
<div className='footer flex flex-col'>

<div className="bg-night text-white py-8">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h3 className="text-4xl font-lora font-bold">Sna3i</h3>
      </div>
      <div className="w-full md:w-1/4">
        <h4 className="text-2xl font-lora font-bold mb-4">For Job Seekers</h4>
        <ul className="text-lg">
          <li><a href="#">Search Jobs</a></li>
          <li><a href="#">Submit Resume</a></li>
          <li><a href="#">Career Advice</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <h4 className="text-2xl font-bold font-lora mb-4">For Companies</h4>
        <ul className="text-lg font-roboto font-bold ">
          <li><a href="#">Post a Job</a></li>
          <li><a href="#">Find Candidates</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="w-full  md:w-1/4">
        <h4 className="text-2xl font-lora font-bold mb-4">Contact Us</h4>
        <p className="text-lg font-roboto font-bold">123 Main Street</p>
        <p className="text-lg font-roboto font-bold">City, State ZIP</p>
        <p className="text-lg font-roboto font-bold">Phone: (123) 456-7890</p>
      </div>
    </div>
  </div>

</div>
<div className='bg-white text-night flex'>
    <div className='flex w-1/3' >
        <h1 className='font-lora opacity-75 text-xl mx-4 p-1'> Sna3i © </h1>
        <p className='font-roboto opacity-75 text-md p-2 '>  Snai3i National. 2023 </p>
    </div>
    <div className='flex w-2/3 p-2 justify-center ' >
    <FontAwesomeIcon className='text-xl mx-2 opacity-75 hover:opacity-100 cursor-pointer' icon={faFacebook} />
    <FontAwesomeIcon className='text-xl mx-2  opacity-75 hover:opacity-100 cursor-pointer' icon={faInstagram} />
    <FontAwesomeIcon className='text-xl mx-2 opacity-75 hover:opacity-100 cursor-pointer' icon={faTwitter} />
    <FontAwesomeIcon className='text-xl mx-2 opacity-75 hover:opacity-100 cursor-pointer' icon={faLinkedin} />
    <FontAwesomeIcon className='text-xl mx-2 opacity-75 hover:opacity-100 cursor-pointer' icon={faPinterest} />
    </div>
  </div>
</div>

  )
}

export default Footer