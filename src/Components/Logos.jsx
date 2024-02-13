import React from 'react'

import pp1 from "../assets/pp1.jpg";
import pppp1 from "../assets/pppp1.jpg";
import five from "../assets/five.jpg";
import skater4 from "../assets/skater4.jpg";
import rcity from "../assets/rcity.jpg";
import luxury from "../assets/luxury.jpg";
import eminent from "../assets/eminent.jpg";
import zeronine from "../assets/zeronine.jpg";

const Logos = () => {
  return (
    <div className='w-full py-16 2xl:px-40 xl:px-40 lg:px-40 mobile:px-2 '>

        <div className='flex mobile:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-center gap-8'>
            <div> <img src={pp1} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={pppp1} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={five} alt="logo" className=' rounded-md mobile:w-[320px] sm:w-[320px] 2xl:w-[235px] xl:w-[235px] lg:w-[235px] md:w-[235px] object-cover' /> </div>
            <div> <img src={skater4} alt="logo" className='w-80 rounded-md' /> </div>
        </div>

        <div className='flex mobile:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-center gap-8 my-8'>
            <div> <img src={rcity} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={luxury} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={eminent} alt="logo" className='w-80 rounded-md'/> </div>
            <div> <img src={zeronine} alt="logo" className='w-80 rounded-md' /> </div>
        </div>

    </div>
  )
}

export default Logos