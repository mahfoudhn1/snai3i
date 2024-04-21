import React, { useState } from 'react'
import team from '../../images/team.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRadio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { regitser } from '../../redux/slices/authSlice';


interface InputValues {
    firstName: string;
    lastName: string;
    username:string;
    email: string;
    password: string;
    password2: string;
  }

const Singup = () => {

    const [value, setValue] = useState<InputValues>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password:'',
    password2:'',
    })

    const handelChang = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target
        setValue((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    }

    const dispatch = useDispatch<AppDispatch>()

    const handelRegister = ()=>{
        
        dispatch(regitser({ username: value.username, email: value.email , password: value.password , password2: value.password2, first_name: value.firstName, last_name: value.lastName }))
    }

  return (
    <div>
        <div className="textarea mb-3 w-full">
            <h1 className='text-xl text-gey-2 mb-4 '>Start looking for work</h1>
            <h1 className=' text-grey-2 text-3xl mb-4 font-black font-lora flex w-full' > CREATE A NEW ACCOUNT <span><h1 className='text-sm text-gey-2 mx-8'>Already a memeber ! <Link to="/auth/login" className='cursor-pointer font-bold text-bubble-gum '>Sing In</Link></h1></span> </h1>
        </div>

        {/* inputs  */}
        <div className="flex flex-col w-1/3">
            <div className="firstLastName flex w-full justify-between mb-3 " >
            <div className="relative mb-3 flex mr-2 " data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="firstname"
                name="firstName"
                placeholder="First Name"
                value={value.firstName}
                onChange={handelChang}
                />

            <label
                htmlFor="firstname"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.firstName ? "": "first name"  }
            </label>

            </div>
            <div className="relative mb-3 flex ml-2" data-te-input-wrapper-init>
        <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="last name"
            placeholder="last Name"
            name="lastName"
            value={value.lastName}
            onChange={handelChang}
            />
        <label
            htmlFor="last name"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >{value.lastName ? "": "Last Name"  }
        </label>

        </div>
        </div>
        <div className="relative mb-6 flex w-full " data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border bg-transparent disabled:bg-transparent
                px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 invalid:border-bubble-gum invalid:text-bubble-gum
                ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="username"
                placeholder="username"
                required
                name="username"
                value={value.username}
                onChange={handelChang}
                />
            <label
                htmlFor="username"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.username ? "": "username"  }
            </label>

            </div>
            <div className="relative mb-6 flex w-full " data-te-input-wrapper-init>
            <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border bg-transparent disabled:bg-transparent
                px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 invalid:border-bubble-gum invalid:text-bubble-gum
                ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                placeholder="email address"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                name="email"
                value={value.email}
                onChange={handelChang}
                />
            <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.email ? "": "email address"  }
            </label>

            </div>



            <div className="relative mb-6 w-full flex mx-auto" data-te-input-wrapper-init>
            <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none disabled:bg-transparent  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="password"

                required
                name="password"
                value={value.password}
                onChange={handelChang}
                />
            <label
                htmlFor="password"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.password ? "": "password"  }
            </label>

            </div>
            <div className="relative mb-6 w-full flex mx-auto" data-te-input-wrapper-init>
            <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none disabled:bg-transparent  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="password2"
                placeholder="password2"
                required
                name="password2"
                value={value.password2}
                onChange={handelChang}
                />
            <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.password2 ? "": "password2"  }
            </label>

            </div>
            <div className="check flex  mb-6" >
            <ul className="flex w-full justify-between mx-8">
                <li>
                <input type="checkbox" id="freelance-option" value="" className="hidden peer" required/>
                <label htmlFor="freelance-option"
                className="inline-flex items-center justify-between w-full p-3 text-white bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">
                    <div className="block">
                    <div className="w-full text-sm font-semibold">
                        Freelancer
                        <FontAwesomeIcon className='mx-2' icon={faCircle} />
                    </div>
                    </div>
                </label>
                </li>
                <li>
                <input type="checkbox" id="company-option" value="" className="hidden peer" required/>
                <label htmlFor="company-option"
                className="inline-flex items-center justify-between w-full p-3 text-white bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">
                    <div className="block">
                    <div className="w-full text-sm font-semibold">Company
                    <FontAwesomeIcon className='mx-2' icon={faCircle} />

                    </div>
                    </div>
                </label>
                </li>
            </ul>
            </div>
            <div className="singupbutton flex justify-center ">
                <button type='submit' onClick={handelRegister} className='py-3 px-6 border-2 border-grey bg-night rounded-lg hover:bg-grey hover:text-white ease-in delay-150'> <Link to="complete" > create account </Link> </button>
            </div>
    </div>


  </div>
  )
}

export default Singup
