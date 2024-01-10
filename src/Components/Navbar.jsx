import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo1 from "../assets/logo1.jpg"
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full font-Montserrat justify-between items-center h-20 px-4 absolute bg-black z-10 text-white'>
      <div>
        {/* <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1> */}
        <img className='text-white bg-white w-20 md:ml-3 ' size={20} src={logo1} alt="/" />
      </div>
      <ul className='mobile:hidden 2xl:flex xl:flex lg:flex md:flex gap-4'>
        <Link to="/"> Home </Link>
        <Link to=""> About</Link>
        <Link to="/"> Contact </Link>
        <Link to="/"> Services </Link>
        <Link to="/"> Faq</Link>
        <Link to="/Dashhome"> Dashboard</Link>
        <Link to="/Signup"> Signup</Link>
      </ul>
      <div className='flex md:flex'>
        <button className='border rounded-md px-4 py-1 border-[#059669] mr-6'>Login</button>
        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose className='text-white' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      </div>

      {/* login button */}
      
        

      
      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-white h-screen  left-0 top-0 w-full bg-[#020617] px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <div>
            <img src={logo1} size={20} className='w-20' alt="image" />
          </div>
          <div className='flex flex-col gap-3 py-12'>
            <Link to="/" >Home</Link>
            <Link to="/create"> About</Link>
            <Link to="/"> Contact </Link>
            <Link to="/"> Services </Link>
            <Link to="/"> Faq</Link>
            <NavLink to="/Dashhome"> Dashboard</NavLink>
          </div>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;