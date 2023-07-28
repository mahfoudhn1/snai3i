import React, {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../home/Card';

const WorkersList = () => {
  interface Option {
    label: string;
    value: string;
  }
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    // Add more options as needed
  ];
  const [offset, setoffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleChange (value:number){
    setoffset((value - 1) * 4);
  };
  const cards = [];
  for (let i = 0; i < 20; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      cards.push(<Card key={i} />);
  }


  return (
    <div className='flex w-full bg-grey-2'>
      {/* right panell */}
      <div className=" w-3/4 flex flex-col bg-white">
    {/* search bar */}
    <div className="relative text-center w-ful mt-32 mx-4 mb-8 ">
      <input type="search" id="job-search" className="block p-4 focus:border-none w-full z-20 text-sm  rounded-full shadow-3xl enabled:hover:border-none	" placeholder="Search Job..." />
      <button type="submit" className="absolute top-0 right-0 h-full px-5 py-2 text-sm font-medium text-white bg-grey rounded-r-lg border-none ">
          <FontAwesomeIcon icon={faSearch} />
          <span className="sr-only">Search</span>
      </button>
    </div>
    {/* cars list */}
     <div className="cardlist w-full list-none flex flex-wrap justify-center	">
      {cards}
     </div>
     {/* pagination buttons  */}
     <div className="flex items-center justify-center my-8 py-4">
    <nav aria-label="Pagination">
      <ul className="pagination flex">
        <li>
          <a href="#" className="pagination-link mx-1 border rounded-md px-2 py-1 text-grey hover:text-grey-2 hover:bg-grey ease-in delay-200 ">&laquo;</a>
        </li>
        <li>
          <a href="#" className="pagination-link mx-1 border rounded-md px-2 py-1 text-grey hover:text-grey-2 hover:bg-grey ease-in delay-200 ">1</a>
        </li>
        <li>
          <a href="#" className="pagination-link mx-1 border rounded-md px-2 py-1 text-grey hover:text-grey-2 hover:bg-grey ease-in delay-200 ">2</a>
        </li>
    
      </ul>
    </nav>
</div>
      </div>
      {/* left panel */}

      <div className=" w-1/4 mt-32 " >

        <div className="filterpanell w-full relative inline-block p-16 bg-night">
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-grey py-2 px-4 rounded-lg"
          >
       
        <svg
          className={`w-4 h-4 ml-2 inline ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute px-2 flex flex-col mt-2 py-1 w-60 bg-white shadow-lg rounded-lg ">
          <div className="core flex">

          <div className="minprice w-1/2 mx-2 py-4">
            <label htmlFor="price font-roboto font-bold text-grey opacity-75">Min</label>
            <input type="number" className='py-3 px-2  w-full rounded-lg shadow-3xl' placeholder='any  $' />
          </div>
          <div className="maxprice w-1/2 mx-2 py-4">
            <label htmlFor="price font-roboto font-bold text-grey opacity-75">Max</label>
            <input type="number" className='py-3 px-2  w-full rounded-lg shadow-3xl' placeholder='any  $' />
          </div>
          </div>
          <button className='text-white bg-night py-2 px-4 rounded-lg ease-in delay-200 hover:bg-white hover:text-grey border border-white '>Apply</button>

        </div>
      )}
      <div>

        <div className='mt-5'>
          <select id="Level" className="bg-white text-grey py-3 px-4 rounded-lg focus:outline-none ">
            <option selected  className='bg-white font-roboto text-grey rounded-sm p-3'>filter Seller by</option>
            <option value="BS"  className='bg-white font-roboto text-grey rounded-sm p-3'>Best Seller</option>
            <option value="TR"  className='bg-white font-roboto text-grey rounded-sm p-3'> Top rating </option>
            <option value="MS"  className='bg-white font-roboto text-grey rounded-sm p-3'>Most selled </option>
          </select>
        </div>
        <div className="mt-5">
          <button className='text-white bg-night py-2 px-4 rounded-lg ease-in delay-200 hover:bg-white hover:text-grey border border-white '>Apply</button>
        </div>
      </div>
        </div>
      </div>
    </div>
    
  )
}

export default WorkersList