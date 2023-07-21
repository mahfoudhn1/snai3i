import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Card() {
  return (
    <div className="max-w-xs flex flex-col bg-white  rounded-lg shadow">
    <div className=' overflow-hidden rounded flex-none p-4	'>
        <img className="rounded-t-lg border" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
    </div>
    <div className="p-5 grow" >
        <a href="#">
            <p className="mb-2 text-md font-medium font-roboto tracking-tight text-grey">Full stack web Developer who works with mern stack</p>
            <p className='flex'>
              < FontAwesomeIcon icon={faStar} className='p-1 m-0' />  
              <span> 5.0 </span> 
            </p>
            <h1 className='font-bold font-roboto mt-4' > from 2000DA </h1>
        </a>

    </div>
</div>
  )
}

export default Card