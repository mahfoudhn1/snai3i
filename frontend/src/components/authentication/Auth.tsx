import React from 'react'
import Singup from './Singup'
import { useLocation } from 'react-router-dom'
import Login from './Login'

function Auth() {
    const location = useLocation()
  return (
    <>
        <div className="relative h-screen">
    <div className="absolute inset-0">
      <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" 
      className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-dark from-100% opacity-95"></div>
    <div className="absolute inset-0 flex left-10 top-1/3 w-1/3 max-[600px]:w-full max-[600px]:left-0 max-[600px]:p-4 p-8 -translate-y-1/3 text-white flex-col">
        {location.pathname == "/auth/signup" ? <Singup/> : <Login/>}
    </div>
    </div>
    

    </>
  )
}

export default Auth