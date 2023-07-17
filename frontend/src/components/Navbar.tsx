import React from 'react'

function Navbar() {
  return (
    <>
  <nav className="bg-transparent pl-20 pr-20 z-0 fixed w-full ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center">
   <h2 className="text-white font-extrabold text-2xl ">Snai3i</h2>
  </a>
  <div className="flex md:order-1 bg-night p-2 pl-4 pr-4 rounded-full">
{/* Nav links */}
    <ul className="space-x-4">
      <li className="inline-block bg-dim-grey p-2 rounded-full">
        <a href="/" className="text-white hover:text-gray-200">
          Home
        </a>
      </li>
      <li className="inline-block">
        <a href="/services" className="text-white hover:text-gray-200">
          Jobs
        </a>
      </li>
      <li className="inline-block">
        <a href="/find-workers" className="text-white hover:text-gray-200">
          Find Workers
        </a>
      </li>
      <li className="inline-block">
        <a href="/post-job" className="text-white hover:text-gray-200">
          Service
        </a>
      </li>

      <li className="inline-block">
        <a href="/about" className="text-white hover:text-gray-200">
          About Us
        </a>
      </li>
      <li className="inline-block">
        <a href="/contact" className="text-white hover:text-gray-200">
          Contact
        </a>
      </li>
      {/* You can include Sign Up, Log In, Dashboard, etc. links here */}
    </ul>
    

  </div>

    <div className="hidden w-full md:flex md:w-auto md:order-2">
        <div>
          <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          </button>
    </div>
  </div>
  </div>
  </nav>
    </>
  )
}

export default Navbar