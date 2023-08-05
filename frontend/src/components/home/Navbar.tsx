import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import {useLocation} from "react-router-dom";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
  <nav className={` navbar pl-20 pr-20 fixed w-full ${
        scrolling ? "transition ease-in-out delay-150 bg-white drop-shadow-md" : "bg-transparent"
      } ${ location.pathname !='/' && location.pathname.split('/').slice(1)[0] !="auth" ? "transition ease-in-out delay-150 bg-white drop-shadow-md" : "bg-transparent" }` }>
  <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center">
   <h2 className={` font-extrabold text-2xl 
   ${scrolling || location.pathname !="/" && location.pathname.split('/').slice(1)[0] !="auth" ? "transition ease-in-out delay-150 text-night": "text-white" }
   `}>Snai3i</h2>
  </a>
  <div className="flex md:order-1 z-1000 bg-night p-2 pl-4 pr-4 rounded-full">

    <ul className="space-x-4 ">
    
    <li className="inline-block">
    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "inline-block bg-dim-grey p-2 rounded-full text-white hover:text-grey-white" : "text-white hover:text-grey-white"
      }
      >
        Home
    </NavLink>
    </li>
    <li className="inline-block">
    <NavLink
        to="/jobs"
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "inline-block bg-dim-grey p-2 rounded-full text-white hover:text-text-grey-white" : "text-white hover:text-grey-white "
      }
      >
        jobs
    </NavLink>
    </li>
    <li className="inline-block">
    <NavLink
        to="/workers"
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "inline-block bg-dim-grey p-2 rounded-full text-white hover:text-text-grey-white" : "text-white hover:text-grey-white "
      }
      >
        Find Workers
    </NavLink>
    </li>
    <li className="inline-block">
    <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "inline-block bg-dim-grey p-2 rounded-full text-white hover:text-text-grey-white" : "text-white hover:text-grey-white "
      }
      >
        Service
    </NavLink>
    </li>
    <li className="inline-block">
    <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "inline-block bg-dim-grey p-2 rounded-full text-white hover:text-text-grey-white" : "text-white hover:text-grey-white "
      }
      >
      About Us

    </NavLink>
    </li>
    
    </ul>
    

  </div>

  <div className="w-full md:flex md:w-auto md:order-2">
        <div>
          <button type="button" 
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
          >
            
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>

      {isOpen && (
        <div className="absolute ease-out delay-500 right-0 px-2 flex flex-col mt-8 py-1 w-40 bg-night shadow-lg rounded-lg ">
          <ul className="py-2 text-sm text-grey " aria-labelledby="states-button">
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-grey hover:text-grey-2 ">
                <div className="inline-flex items-center">
                    Profile
                </div>
              </button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-grey hover:text-grey-2 ">
                  <div className="inline-flex items-center">
                      logout
                      <FontAwesomeIcon className='mx-2' icon={faSignOut}/>
                  </div>
                </button>
            </li>

        </ul>
        </div>
      )}
          </button>
    </div>
  </div>

  </div>
  </nav>
    </>
  )
}

export default Navbar