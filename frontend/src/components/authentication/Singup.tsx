import React from 'react'
import team from '../../images/team.jpg'




  
const Singup = () => {
  return (
    <div className="relative h-screen">
    <div className="absolute inset-0">
      <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" 
      className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-dark from-100% opacity-95"></div>
    
    <div className="absolute inset-0 flex left-0 top-1/2 p-8 -translate-y-1/2 text-white flex-col">
        <div className="textarea">
            <h1 className='text-xl text-gey-2 '>Start looking for work</h1>
            <h1 className=' text-grey-2 text-4xl font-black font-lora' > CREATE A NEW ACCOUNT </h1>
            <h1 className='text-xl text-gey-2 '>Already a memeber ! <a className='cursor-pointer font-bold '>singIn</a></h1>
        </div>
        <div className="flex w-1/3 mt-8">
            <div className="relative mb-3 mx-2 flex" data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="firstname"
                placeholder="First Name" />
            <label
                htmlFor="firstname"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >First Name
            </label>
            
            </div>
            <div className="relative mb-3 mx-2 flex" data-te-input-wrapper-init>
        <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="last name"
            placeholder="last Name" />
        <label
            htmlFor="last name"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >last Name
        </label>
        
        </div>
        </div>
        <div className="flex w-1/3">
            <div className="relative mb-3 mx-2 flex" data-te-input-wrapper-init>
            <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                placeholder="email address" />
            <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >email address
            </label>
            
            </div>

        </div>
    </div>
  </div>
  )
}

export default Singup

