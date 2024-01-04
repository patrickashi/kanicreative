import React from 'react';
import Ordernav from './Ordernav';
import SearchIcon from '@mui/icons-material/Search';

const Orders = () => {
  return (
    <div className=' pt-20'>
        <Ordernav />
        <div className='h-[570px] bg-gray-100 text-[#059669]'>
            <div className='w-[1040px] mx-auto px-12'>
                <p className='text-2xl py-5 font-bold'>My Orders</p>
                <div className='flex justify-between'>
                    <select className='w-40 rounded-md'>
                        <option>All</option>
                    </select>
                    <div className='relative'>
                        <input type="text" placeholder='Search...' className='rounded-sm pl-9 py-1 px-2 text-[#059669]' />
                        <div>
                            <SearchIcon className='absolute w-20 left-2 top-1 text-gray-400'/>
                        </div>
                    </div>
                </div>

                <p className='py-12 flex justify-center items-center font-bold'>You do not have any Order in your account.</p>
            </div>
        </div>
    </div>
  )
}

export default Orders