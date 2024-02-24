import React from 'react'
import menudesign from "../assets/menudesign.jpg";
import { IoStar } from "react-icons/io5";

const Printmedia = () => {
  return (
    <div className=' 2xl:mx-34 mobile:mx-2 my-12 font-Montserrat'>
        <p className='font-bold text-xl my-2'>Print Media</p>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 mobile:grid gap-6'>

            <div className='2xl:grid mobile:grid rounded-b-lg bg-gray-100 w-80'>
              <div className='w-full'> 
                <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
              </div>
              <div className='flex gap-1 px-2 my-1 '>
                <div className='mr-4'>album cover..</div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div>5(1)</div>
              </div>
              <p className='px-2 mb-2'>Starting from $100</p>
            </div>

            <div className='grid bg-gray-100 rounded-b-lg w-80 '>
              <div className='w-full'> 
                <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
              </div>
              <div className='flex gap-1 px-2 my-1'>
                <div className='mr-4'>album cover..</div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div>5(1)</div>
              </div>
              <p className='px-2 mb-2'>Starting from $100</p>
            </div>

            <div className='grid bg-gray-100 rounded-b-lg w-80'>
              <div className='w-full'> 
                <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
              </div>
              <div className='flex gap-1 px-2 my-1'>
                <div className='mr-4'>album cover..</div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div>5(1)</div>
              </div>
              <p className='px-2 mb-2'>Starting from $100</p>
            </div>

            <div className='grid bg-gray-100 rounded-b-lg w-80'>
              <div className='w-full'> 
                <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
              </div>
              <div className='flex gap-1 px-2 my-1'>
                <div className='mr-4'>album cover..</div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
                <div>5(1)</div>
              </div>
              <p className='px-2 mb-2'>Starting from $100</p>
            </div>
            

        </div>


        <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 mobile:grid gap-6 my-12'>

          <div className='2xl:grid mobile:grid rounded-b-lg bg-gray-100 w-80'>
            <div className='w-full'> 
              <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
            </div>
            <div className='flex gap-1 px-2 my-1 '>
              <div className='mr-4'>album cover..</div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div>5(1)</div>
            </div>
            <p className='px-2 mb-2'>Starting from $100</p>
          </div>

          <div className='grid bg-gray-100 rounded-b-lg w-80'>
            <div className='w-full'> 
              <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
            </div>
            <div className='flex gap-1 px-2 my-1'>
              <div className='mr-4'>album cover..</div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div>5(1)</div>
            </div>
            <p className='px-2 mb-2'>Starting from $100</p>
          </div>

          <div className='grid bg-gray-100 rounded-b-lg w-80'>
            <div className='w-full'> 
              <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
            </div>
            <div className='flex gap-1 px-2 my-1'>
              <div className='mr-4'>album cover..</div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div>5(1)</div>
            </div>
            <p className='px-2 mb-2'>Starting from $100</p>
          </div>

          <div className='grid bg-gray-100 rounded-b-lg w-80'>
            <div className='w-full'> 
              <img src={menudesign} alt="" className='w-80 rounded-t-lg' />
            </div>
            <div className='flex gap-1 px-2 my-1'>
              <div className='mr-4'>album cover..</div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div className='flex items-center'><IoStar className='text-emerald-400'/></div>
              <div>5(1)</div>
            </div>
            <p className='px-2 mb-2'>Starting from $100</p>
          </div>


          </div>
    </div>
  )
}

export default Printmedia