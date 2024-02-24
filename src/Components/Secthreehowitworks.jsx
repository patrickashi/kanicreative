import React from 'react'
import { CgNotes } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Secthreehowitworks = () => {
  return (
    <div className='py-8  bg-white font-Montserrat mt-[510px]'>
        <div className='mobile:grid 2xl:grid-cols-2 2xl:mx-20 mobile:gap-4 mobile:mx-4 px-4 py-6 text-white bg-black rounded-lg'>
            <div className='flex items-center gap-2'>
                <div className=''>
                    <CgNotes size={80}/>
                </div>
                <div className=''>
                    <p className='font-bold'>Your Designs Brief</p>
                    <p>Complete a brief form detailing your design needs and attach any images or files</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <div className=''>
                    <IoMdCheckmarkCircleOutline size={80} />
                </div>
                <div className=''>
                    <p className='font-bold'>Pick your preferred Design</p>
                    <p>Quick 24hrs Turn around with unlimited edits, dowlnoad your files instantly once it's perfect!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Secthreehowitworks