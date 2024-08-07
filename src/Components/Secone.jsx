import React from "react"


import { MdOutlineStar } from "react-icons/md";

const Secone = () => {
    return ( 
        <div className="w-full bg-black mx-auto py-16 px-4 font-Montserrat">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-white mt-10">
                <div className="md:px-4">
                    <h1 className="lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold mobile:text-3xl ">What does logo <span className="text-[#fbbf24]">design</span> cost?</h1>
                    <p className="py-9 text-xl">
                        Recieve lots of creative contents from our designers
                        at kani creative. We have 3 fixed plans to suit your project budjet
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

                    <div className="flex pt-6 gap-2 ">
                        <div className="flex ">
                            <MdOutlineStar  className=" h-5 text-[#fbbf24]"/>
                            <MdOutlineStar  className=" h-5 text-[#fbbf24]"/>
                            <MdOutlineStar  className=" h-5 text-[#fbbf24]"/>
                            <MdOutlineStar  className=" h-5 text-[#fbbf24]"/>
                            <MdOutlineStar  className=" h-5 text-[#fbbf24]"/>
                           
                            
                        </div>
                        <p className="text-[#fbbf24]">98% happy customers from</p>
                    </div>
                    <p className="py-0 text-[#fbbf24] ">8425 reviews</p>
                </div>
            </div>
        </div>
     );
}
 
export default Secone;