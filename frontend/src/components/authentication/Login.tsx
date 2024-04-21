import React, { useState } from 'react'
import team from '../../images/team.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRadio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Navigate } from "react-router-dom";

interface InputValues {

  username: string;
  password: string;
}


function Login() {

  const [value, setValue] = useState<InputValues>({
    username: '',
    password:'',
    })

    const dispatch = useDispatch<AppDispatch>()

    const handelChang = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target
        setValue((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    }
    const handelSubmit = ()=>{
      dispatch(login({ username: value.username, password: value.password}))
      .then(() => {
        <Navigate to="/home" replace={true}/>
        window.location.reload();
      });
    }
  return (
    <h1>
       <div className="textarea mb-8">
            <h1 className=' text-grey-2 text-3xl mb-4 mt-10 font-black font-lora' > Login to Your account </h1>
            <h1 className='text-xl text-gey-2 '>New With Us ! <Link to="/auth/signup" className='cursor-pointer font-bold text-bubble-gum '>Create Account</Link></h1>
        </div>

        {/* inputs  */}
        <div className="flex flex-col w-1/3">

            <div className="relative mb-6 flex w-full " data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border bg-transparent disabled:bg-transparent
                px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 invalid:border-bubble-gum invalid:text-bubble-gum
                ease-linear focus:placeholder:opacity-100 peer-focus:text-grey data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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



            <div className="relative mb-6 w-full flex mx-auto" data-te-input-wrapper-init>
            <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none disabled:bg-transparent  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="password"
                placeholder="email address"
                required
                name="password"
                value={value.password}
                onChange={handelChang}
                />
            <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >{value.password ? "": "password"  }
            </label>

            </div>

            <div className="singupbutton flex justify-center ">
                <button type='submit' onClick={handelSubmit} className='py-3 px-6 border-2 border-grey bg-night rounded-lg hover:bg-grey hover:text-white ease-in delay-150'> Login </button>
            </div>
    </div>
    </h1>
  )
}

export default Login
