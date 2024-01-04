import React from 'react'
import Ordernav from './Ordernav'
import SearchIcon from '@mui/icons-material/Search';

const Tasks = () => {
  return (
    <div className='pt-20 w-full bg-gray-200'>
        <Ordernav />
        <div className='flex justify-center items-center flex-col py-16'>
            <p className='text-4xl '>What do you need?</p>
            <p className='py-5'>Select your Service and fill in your details in just a few steps </p>
            <div className='relative'>
                <input type="text" placeholder='Logo type, Business Cards, Social media graphics..'
                className='text-center w-[670px] rounded-md py-3 outline-none' />
                <SearchIcon className='w-20 absolute right-2 top-3 text-gray-400 '/>
            </div>
            <i className='font-bold py-4'>No Task to show</i>

            <button className='bg-[#059669] rounded-md text-white px-3 py-2'>Renew order</button>
        </div>
    </div>
  )
}

export default Tasks