import React from 'react'
import logo1 from "../assets/logo1.jpg";
import { Link } from 'react-router-dom';
import Signup from '../pages/Signup';

const Login = () => {
  return (
    <div className='pt-20 w-full h-screen bg-gray-200 '>
        
        <div className='flex flex-col justify-center items-center border-4 rounded-md my-6 mobile:mx-8'>
            {/* <div className='w-20 text-center items-center'>
                <img src={logo1} size={20} alt="logo" className='' />
            </div> */}
            <div className='bg-white rounded-md px-8 my-6 py-12'>
                <p className='text-center font-bold text-xl'>Login</p>
                <p className='text-center my-3'>Do not have an account yet? <Link to="/signup"> Sign up </Link></p>
                <input type='text' placeholder='enter email' className='border border-black rounded-md w-full px-4 py-2 focus:bg-gray-100'/>
                <input type='text' placeholder='Password' className='border border-black rounded-md w-full my-3 px-4 py-2 focus:bg-gray-100'/>
                <div className='flex flex-row justify-between mobile:text-sm'>
                    <div>
                        <input type='checkbox' id='myCheckbox'/>
                        <label htmlFor="myCheckbox" className='ml-1'>Remember me</label>
                    </div>
                    <div>
                        <p>Forgot Password?</p>
                    </div>
                </div>
                <button className='w-full rounded-md bg-gray-500 text-white py-4 my-4'>Sign in</button>
                <hr className='left-rule'/>
                    <p className='center-text text-center'>Or</p>
                <hr className='right-rule'/>
                <div className='text-center bg-gray-100 my-4'>
                    sign in as kanicreative@gmail.com
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login