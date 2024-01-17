import React from "react"
import verified from "../assets/verified.png";
import profile2 from "../assets/profile2.avif";
import profile1 from "../assets/profile1.webp";
import { FaQuoteLeft } from "react-icons/fa";

const Secthree = () => {
    return ( 
        <div className="w-full bg-black text-white py-16 px-4 border-b border-gray-700 font-Montserrat">
             <div>
                    <h1 className="text-3xl font-bold py-16 px-10 mobile:text-xl text-center">Trusted and known by Business owners from around the world</h1>
            </div>
            
            <div className="grid gap-4 mobile:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
                    <div className=" bg-gray-200 text-black py-8 px-4  rounded-lg px-16 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10">
                        {/* card */}
                        <p>
                            <FaQuoteLeft className="text-gray-600 mb-2" size={30}/>
                        </p>
                        <p className="">
                            I highly recommend Kani Creative for anyone seeking a top-notch web design experience.
                            They go above and beyond to bring your ideas to life, and the results speak for themselves.
                            
                        </p>
                        <div className="flex py-6 md:justify-center">
                            <img className="w-14 h-[53px] object-cover rounded-full " src={profile2} alt="" />
                            <div className="px-2">
                                <p>Sophie Mitchell</p>
                                <div className="flex">
                                    <p className="pt-0 font-bold text-sm">verified Order </p>
                                    <img className="w-5 " src={verified} alt="" />
                                </div>
                                

                            </div>
                        </div>
                    </div>

                <div className="w-full">
                    <div className=" bg-gray-200 text-black py-8 px-4  rounded-lg px-16 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10">
                        {/* card */}
                        <p>
                            <FaQuoteLeft className="text-gray-600 mb-2" size={30}/>
                        </p>
                        <p className="">
                            The speed in which they came up a concept for me with the 
                            limited information that i gave them really exceeded my expectations
                            and great value
                        </p>
                        <div className="flex py-6 md:justify-center">
                            <img className="w-14 h-[53px] object-cover rounded-full " src={profile1} alt="" />
                            <div className="px-2">
                                <p>Liam Anderson</p>
                                <div className="flex">
                                    <p className="pt-0 font-bold text-sm">verified Order </p>
                                    <img className="w-5 " src={verified} alt="" />
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Secthree;