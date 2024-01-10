import React from 'react';
import Ordernav from './Ordernav';
import { MdOutlineSearch } from 'react-icons/md';

const Specialoffer = () => {
  return (
    <div className='pt-20 w-full bg-gray-200'>
        <Ordernav />
        <div>
            <div className='bg-white my-4 mx-16 py-6 px-8 rounded-md'>
                <p className='text-3xl'>Checkout Special offer!</p>
                <p className='text-xl'>Time is running out of your hand crafted logo design @50% off limited spots.</p>

                <div className='flex gap-2 pt-6'>
                    <button className='border text-white bg-black py-2 px-3 rounded-md'>Logo design</button>
                    <button className='border-2 border-gray-400 rounded-md px-3 text-gray-500'>All Services</button>
                </div>
            </div>

            <div className='flex justify-between mx-16 font-bold py-4 '>
                <div className='py-10 px-8 bg-white text-[#059669] rounded-md'>
                    <p>Draft Orders</p>
                    <p>0</p>
                </div>
                <div className='py-10 px-8 bg-white text-[#059669] rounded-md'>
                    <p>Active Orders</p>
                    <p>0</p>
                </div>
                <div className='py-10 px-8 bg-white text-[#059669] rounded-md'>
                    <p>In progress</p>
                    <p>0</p>
                </div>
                <div className='py-10 px-8 bg-white text-[#059669] rounded-md'>
                    <p>Completed</p>
                    <p>0</p>
                </div>
            </div>

            <div className='mx-16 text-[#059669]'>
                <p className='text-2xl py-5 font-bold'>My Orders</p>
                <div className='flex justify-between'>
                    <select className='w-40 rounded-md'>
                        <option>All</option>
                    </select>
                    <div className='relative'>
                        <input type="text" placeholder='Search...' className='rounded-sm pl-9 py-1 px-2 text-[#059669]' />
                        <div>
                            <MdOutlineSearch className='absolute w-20 left-2 top-1 text-gray-400'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Specialoffer