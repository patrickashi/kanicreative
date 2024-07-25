import React from "react"
import { useNavigate } from "react-router-dom";
import verified from "../assets/verified.png";
import { MdDone } from "react-icons/md";

const Sectwo = () => {
    const navigate = useNavigate()
    return ( 
        <div className="w-full py-16 px-4 ">
            <div className=" w-full mx-auto font-Montserrat">
                <h1 className="font-bold text-center text-3xl pb-5">Logo Design Pricing</h1>

                <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-7">
                    <div className=" py-12 border max-w-[500px] shadow-lg rounded-3xl pb-1 px-0 hover:scale-105 ease duration-300">
                        {/* card */}
                        <p className="text-center text-bold text-3xl text-[#059669]">Starter</p>
                        <p className="text-center text-bold text-3xl text-[#fbbf24]">$100</p>
                        <p className="border-b-4 py-4 border-[#fbbf24] text-center text-bold text-xl mx-3 md:text-xl">Kick Start your Business Today!</p>
                        <p className="py-4 text-center text-xl">What you get with starter:</p>
                        <ul className="px-10 text-center">
                            <div className="flex gap-2 ">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> 1 day Delivery</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Unlimited Revisions</li>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Vector files</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li>Multe-versions</li>   
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Rated Designers</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright ownership</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright File</li>   
                            </div>
                        </ul>
                       <div className=" flex justify-center">
                       <button className=" bg-black text-white px-4 py-2 rounded-lg my-4">Order now</button>
                       </div>
                    </div>

                    <div className="border-4 max-w-[500px] py-12 shadow-lg rounded-3xl pb-1 px-0 hover:scale-105 ease duration-300">
                        {/* card */}
                        <p className="text-center text-bold text-3xl text-[#059669]">Growth</p>
                        <p className="text-center text-bold text-3xl text-[#fbbf24]">$100</p>
                        <p className="border-b-4 py-4 border-[#fbbf24] text-center text-bold text-xl mx-3 md:text-xl">Kick Start your Business Today!</p>
                        <p className="py-4 text-center text-xl">What you get with starter:</p>
                        <ul className="px-10 text-center">
                        <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> 1 day Delivery</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Unlimited Revisions</li>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Vector files</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li>Multe-versions</li>   
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Rated Designers</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright ownership</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright File</li>   
                            </div>
                           
                        </ul>
                       <div className=" flex justify-center">
                       <button className=" bg-black text-white px-4 py-2 rounded-lg my-4">Order now</button>
                       </div>
                    </div>

                    <div className="py-12 border max-w-[500px] shadow-lg rounded-3xl pb-1 px-0 hover:scale-105 ease duration-300">
                        {/* card */}
                        <p className="text-center text-bold text-3xl text-[#059669]">Business</p>
                        <p className="text-center text-bold text-3xl text-[#fbbf24]">$100</p>
                        <p className="border-b-4 py-4 border-[#fbbf24] text-center text-bold text-xl mx-3 md:text-xl">Kick Start your Business Today!</p>
                        <p className="py-4 text-center text-xl">What you get with starter:</p>
                        <ul className="px-10 text-center">
                        <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> 1 day Delivery</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Unlimited Revisions</li>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Vector files</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li>Multe-versions</li>   
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Rated Designers</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright ownership</li>  
                            </div>
                            <div className="flex gap-2">
                                <div> 
                                    <MdDone className="text-[#059669]" />
                                </div>
                                <li> Copyright File</li>   
                            </div>
                        </ul>
                       <div className=" flex justify-center">
                       <button className=" bg-black text-white px-4 py-2 rounded-lg my-4">Order now</button>
                       </div>
                    </div>

                   
                </div>
                
                
            </div>
        </div>
     );
}
 
export default Sectwo;