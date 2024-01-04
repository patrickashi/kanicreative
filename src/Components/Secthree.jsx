import React from "react"

import chrtmas1 from "../assets/chrtmas1.jpg";
import verified from "../assets/verified.png";

const Secthree = () => {
    return ( 
        <div className="w-full bg-black text-white py-16 px-4 border-b-2 border-[#1f2937] font-Montserrat">
            <div className="grid md:grid-cols-2 ">
                <div>
                    <h1 className="text-3xl font-bold py-16 px-10 text-center">Trusted and known by Business owners from around the world</h1>
                </div>

                <div className="">
                    <div className="bg-white text-black py-8 px-4 rounded-2xl px-16 mx-14 ">
                        {/* card */}
                        <p className="text-center">
                            The speed in which they came up a concept for me with the 
                            limited information that i gave them really exceeded my expectations
                            and great value
                        </p>
                        <div className="flex py-6 md:justify-center">
                            <img className="w-11  rounded-full " src={chrtmas1} alt="" />
                            <div className="px-2">
                                <p>Victor Fatima</p>
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