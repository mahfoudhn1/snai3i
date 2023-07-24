import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow ,faBuilding,faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const Jobpost = () => {
  return (
    <div className='flex flex-col w-full bg-grey-2'>
      <div className='w-3/4 bg-white flex flex-col relative p-8 mt-32 m-auto'>
        <div className="jobtop border-b flex w-full">
          <div className="infos flex flex-col w-2/3">
            <h1 className='jobtitle font-lora text-2xl'> full stack web developer </h1>
            <div className="company flex p-4">
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'> 
            <span>
              <FontAwesomeIcon icon={faBuilding}/>
            </span> Google</p>
            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'> 
            <span>
              <FontAwesomeIcon icon={faLocationArrow}/>
            </span>  california </p>

            <p className='mx-2 cursor-pointer text-dim-grey hover:text-night'> 
            <span>
              <FontAwesomeIcon icon={faCalendarAlt}/>
            </span> posted 3 days ago</p>
  
            </div>
            <div className="details flex p-2 tex-lg font-roboto text-dim-grey font-semibold ">
              <div className='mx-2'>
                <p> pay: </p>
                <p> benifits:  </p>
                <p> type: </p>
              </div>
              <div className='mx-2'>
                <p>200$</p>
                <p>free laptop, resendensy</p>
                <p>full-time </p>
              </div>
   
            </div>
          </div>
          <div className="logo overflow-hidden w-1/3 h-1/3">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" alt="company logo" 
            className=' h-full w-full object-contain '/>
          </div>
        </div>
        <div className="description font-roboto p-8">
          <p className='leading-7'> <span className=' capitalize font-bold text-lg'>Job descirption: </span> <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi nam natus sed molestias soluta  inventore autem recusandae hic quasi asperiores consequuntur modi possimus, fugiat dolorum praesentium aliquam ut eos nobis id ea itaque obcaecati aut at. In nobis quos voluptatem cupiditate culpa iusto architecto. Sapiente repudiandae cum, veniam enim nobis tempora fugiat esse. Amet sit voluptatem natus omnis possimus? Vero, aliquid dolores? Ducimus illum, sequi nesciunt architecto libero velit fugit voluptate necessitatibus, ab magni quasi itaque, hic dolores non quia inventore. Ipsum est in obcaecati error consectetur cum repellat quod eius labore ab assumenda necessitatibus maxime, inventore ullam consequatur incidunt facilis ipsa aut? Vitae optio in facere dolorem, commodi atque nemo cupiditate maiores sunt necessitatibus perspiciatis, odio aliquid? Unde sed ab alias possimus voluptate quae quis eum ipsam, quod officia harum provident, id excepturi ullam maxime numquam, corrupti ipsa dolorem at delectus. Eveniet totam corrupti beatae dolorem quidem optio. Iste dolorum tenetur aut harum velit a excepturi veritatis dicta doloribus, quaerat fugiat sint voluptas debitis culpa pariatur neque perferendis commodi, eaque aspernatur soluta maiores eligendi est iusto ullam? Modi voluptatem magnam distinctio voluptas harum dolor tempora perferendis, eaque labore nam, iure fugit beatae mollitia dignissimos voluptate consequuntur provident atque? </p>
          <div className='requirents pt-8'>
            <h1 className='font-bold text-lg capitalize'>requirements: </h1>
            <ul className='ml-4 list-disc'>
              <li> frontend web developement</li>
              <li> backend python django</li>
              <li> database postgresql</li>
              <li> git mastering </li>
            </ul>
          </div>
          <div className="apply pt-8">
            <h1 className='font-bold text-lg capitalize '> Apply for the job by email or call: </h1>
            <div className="flex">
            <div className='mx-2 mt-2 capitalize'>
                <p> local address: </p>
                <p> email address:  </p>
                <p> phone number: </p>
              </div>
              <div className='mx-2 mt-2'>
                <p> 12 street idk what</p>
                <p> anymail@gmail.com </p>
                <p>+2136666666 </p>
              </div>
            </div>
            <button className=' mt-8 py-2 px-4 font-bold bg-grey-2 rounded-lg text-night hover:text-grey-2 hover:bg-night ease-in duration-200 '>Apply to job</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobpost