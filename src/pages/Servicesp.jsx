import React from 'react'

import { MdOutlineStar } from "react-icons/md";
import Ourworknav from '../Components/Ourworknav';

const Servicesp = () => {
  return (
        <div className="w-full  bg-black mx-auto py-16 px-4 font-Montserrat">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-white mt-10">
                <div className="md:px-4">
                    <h1 className="lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold mobile:text-3xl text-center">Our Services</h1>
                    <p className="py-9 text-xl text-center">
                        Our professional designers are dedicated to bringing your vision to life
                        through innovation and visually captivating designs that leave a long lasting 
                        impression. Whether it's branding, graphics, or any design need, we're here to help
                        you achieve the remarkable and set yourself apart in your industry.
                    </p>
                </div>

                <div>
                    <div className="text-center items-center sm:mt-20">
                        <select className="w-full text-black font-bold py-4 px-3 rounded-md">
                            <option className="bg-[#525252] focus:bg-transparent text-white rounded-md">Magazine cover design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">LetterHeads</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Business Card</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Website Design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Flyer Design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Packaging Design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Logo Animation</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Album Cover Design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Book Cover</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Menu Design</option>
                            <option className="bg-[#525252] focus:bg-transparent text-white">Magazine cover Design</option>
                        </select>
                    </div>

                    
                    <p className="py-4 my-4 text-xl  text-center">We give you <span className="text-yellow-400">the best design ever</span> </p>
                </div>
            </div>
            
            <diV className="border-t border-gray-700">
                <p className='text-white mt-9 pt-9 text-2xl text-center'>What do you need us to design?</p>
            </diV>
            <Ourworknav />
        </div>
  )
}

export default Servicesp