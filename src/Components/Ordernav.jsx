import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

import { MdNotifications } from 'react-icons/md';

const Ordernav = () => {
  return (
    <div>
        <div className='nav bg-white flex justify-between py-4 px-16'>
            <div><HiOutlineMenu className='w-30'/></div>
            <div className='mr-20'>
                <input type="text" placeholder='Search...' className='border rounded-md bg-gray-100 outline-none pl-3 py-2' />
            </div>

            <div className='flex gap-3'>
                <div>
                    {/* <Badge badgeContent={4} color='primary'> */}
                        <MdNotifications className='w-20 '/>
                    {/* </Badge> */}

                    
                </div>
                <div className='rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center'>P</div>
            </div>
        </div>
    </div>
  )
}

export default Ordernav