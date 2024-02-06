import React from 'react'
import { Link } from 'react-router-dom';

const Ourworknav = () => {
  return (
    <div className='w-full text-black pt-20 font-Montserrat'>
        <div className='flex justify-center mt-6'>
            <div className='flex flex-wrap 2xl:flex-row mobile:flex-2 gap-4 2xl:text-xl xl:text-xl mobile:text-sm mobile:gap-1 '>
                <div><Link to="/Allp"><div className='all bg-gray-100 px-4 py-1 rounded-md mobile:py-3'>All</div></Link></div>
                <div><Link to="/Logosp"><div className=' logos bg-gray-100 px-4 py-1 rounded-md mobile:py-3'>Logos</div></Link></div>
                <div><Link to="/Webdesignp"><div className='bg-gray-100 px-4 py-1 rounded-md 2xl:py-3 xl:py-3 lg:py-3 md:py-3 mobile:py-3 '>website Design</div></Link></div>
                <div className='bg-gray-100 px-4 py-1 rounded-md 2xl:py-3 xl:py-3 lg:py-3 md:py-3 mobile:py-3'><Link to="/Printmediap">Print Media</Link> </div>
                <div className='bg-gray-100 px-4 py-1 rounded-md 2xl:py-3 xl:py-3 lg:py-3 md:py-3 mobile:py-3'> <Link to="/Packagedesignp">Packaging Design</Link> </div>
                <div className='bg-gray-100 px-4 py-1 rounded-md 2xl:py-3 xl:py-3 lg:py-3 md:py-3 mobile:py-3'> <Link to="/Brandidentityp"> Brand Identity </Link> </div>
            </div>
        </div>
    </div>
  )
}

export default Ourworknav