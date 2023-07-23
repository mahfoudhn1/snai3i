import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Joboffer = ()=>{
  return(
      <li className="shadow-3xl p-4 w-full rounded-lg cursor-pointer hover:bg-grey-white ">
          <h1 className=' font-lora font-bold text-night text-2xl capitalize cursor-pointer hover:text-grey hover:underline '>Full stack developer for part time job</h1>
          <div className="price flex text-sm  py-3 ">
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'>200$</p>
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'>intermidiat</p>
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'>remote</p>
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'>posted 3 days ago</p>
          </div>
          <p className='flex justify-between font-roboto font-xl font-medium '> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quidem itaque dolorum suscipit molestiae dolor vitae quisquam aliquid maxime dicta, optio, illum provident assumenda cumque amet in unde animi quibusdam. </p>
      <div className="skills flex py-3">
        <h1 className='mt-2'>requies: </h1>
        <button className='bg-grey-2 px-4 py-2 font-roboto text-md shadow-2xl mx-2 rounded-2xl text-grey hover:bg-white hover:text-dark'>html</button>
        <button className='bg-grey-2 px-4 py-2 font-roboto text-md shadow-2xl mx-2 rounded-2xl text-grey hover:bg-white hover:text-dark'>css</button>
        <button className='bg-grey-2 px-4 py-2 font-roboto text-md shadow-2xl mx-2 rounded-2xl text-grey hover:bg-white hover:text-dark'>javascript</button>
        <button className='bg-grey-2 px-4 py-2 font-roboto text-md shadow-2xl mx-2 rounded-2xl text-grey hover:bg-white hover:text-dark'>php</button>
      </div>
      </li>
  )
}

const Jobs = () => {
  const [rangeValue, setRangeValue] = useState(50); // Default value for the range input

  const handelChange = (event:React.ChangeEvent<HTMLInputElement>) => {

    setRangeValue(parseInt(event.target.value));
  };


  return (
    <div className="flex w-full h-full">

    <div className='jobs flex flex-col w-2/3 ' >
       <div className="relative text-center w-ful mt-32 mx-4 mb-8 ">
            <input type="search" id="job-search" className="block p-4 focus:border-none w-full z-20 text-sm  rounded-full shadow-3xl enabled:hover:border-none	" placeholder="Search Job..." />
            <button type="submit" className="absolute top-0 right-0 h-full px-5 py-2 text-sm font-medium text-white bg-grey rounded-r-lg border-none ">
               <FontAwesomeIcon icon={faSearch} />
                <span className="sr-only">Search</span>
            </button>
        </div>
        <div className="jobslist w-full">
            <ul className="flex flex-col p-4" >
                <Joboffer/>
                <Joboffer/>
                <Joboffer/>
                <Joboffer/>
            </ul>
        </div>

    </div>
    <div className="sidepanel  w-1/3 mx-8 flex flex-col">
          <div className="mx-auto mt-32 h-1/3 bg-night p-10 rounded-xl ">
            <ul className='filters flex flex-col'>
              <li className='m-2'>
              <label htmlFor="Level" className="block mb-2 text-sm font-medium text-white ">Level required</label>
                <select id="Level" className="bg-dark border border-grey text-grey text-sm rounded-lg focus:ring-grey-2 focus:border-none block w-full p-2.5 ">
                  <option selected>Choose Level</option>
                  <option value="AMT">Amateur</option>
                  <option value="INTER">Intermediet</option>
                  <option value="Prof">Profissional</option>
                </select>
              </li>
              <li className='m-2' >
              <label htmlFor="Level" className="block mb-2 text-sm font-medium text-white ">work place</label>
                <select id="Level" className="bg-dark border border-grey text-grey text-sm rounded-lg focus:ring-grey-2 focus:border-none block w-full p-2.5 ">
                  <option selected>Choose how to work</option>
                  <option value="remote">Remote</option>
                  <option value="dask">Desk</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </li>
              <li className='m-2'>
              <label htmlFor="Level" className="block mb-2 text-sm font-medium text-white ">Your sallery</label>
                <input type="range" min="0" max="10000" step="1" 
                className="w-full h-3 bg-grey rounded-lg appearance-none cursor-pointer range-lg"
                value={rangeValue}
                onChange={handelChange}
                />
                <h1 className='text-white'> {rangeValue} $ </h1>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Jobs