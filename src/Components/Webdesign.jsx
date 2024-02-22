import React from 'react'
import crave2 from "../assets/crave2.png";

const Webdesign = () => {
  return (
    <div className='w-full py-16 2xl:px-40 xl:px-40 lg:px-40 mobile:px-2 '>

        <div className='flex mobile:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-center gap-8'>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md' /> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md' /> </div>
        </div>

        <div className='flex mobile:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-center gap-8 my-8'>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={crave2} alt="logo" className='w-80 rounded-md' /> </div>
        </div>

    </div>
  )
}

export default Webdesign